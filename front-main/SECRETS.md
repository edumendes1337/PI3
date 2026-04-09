# GitHub Secrets Configuration

## Overview
This document contains all the GitHub Secrets required for CI/CD deployment of the Frontend. Configure these secrets in your GitHub repository settings under `Settings > Secrets and variables > Actions`.

## Required Secrets

### SSH & Server Access
These secrets are used for SSH deployment to the VPS.

```
SSH_SECRET_KEY         = [Your private SSH key for deploy user]
SSH_PORT               = 22
SSH_NAME_USER          = deploy
SSH_HOST               = projeto-integrador.app.br
GITHUB_TOKEN           = [GitHub Personal Access Token with repo scope]
```

### GHCR (GitHub Container Registry) Authentication
Used for pushing Docker images to GHCR.

```
GHCR_USERNAME          = [GitHub username]
GHCR_TOKEN             = [GitHub Personal Access Token with read:packages, write:packages scope]
```

### Build Environment Variables - HOMOLOGAÇÃO (homo branch)

These are used during the Docker image build process for the Vite application.

```
VITE_BASE_URL_HOMO     = https://homo-backapp.projeto-integrador.app.br/api/v1
```

### Build Environment Variables - PRODUÇÃO (main branch)

```
VITE_BASE_URL_PROD     = https://projeto-integrador.app.br/api/v1
```

### Runtime Environment Variables - HOMOLOGAÇÃO

These will be passed via secrets during deployment on VPS.

```
FRONTEND_PORT_HOMO     = 3001
ENVIRONMENT_HOMO       = homologacao
```

### Runtime Environment Variables - PRODUÇÃO

```
FRONTEND_PORT_PROD     = 3002
ENVIRONMENT_PROD       = producao
```

## Setup Instructions

### 1. Add Build Secrets to GitHub
Go to: `Settings > Secrets and variables > Actions > New repository secret`

Add each build secret from the "Build Environment Variables" section above.

### 2. Add Runtime Secrets to GitHub
Add each runtime secret from the "Runtime Environment Variables" section above.

### 3. Verify Secrets
Run this command to verify (without showing values):
```bash
gh secret list --repo UNIVESP-PI-2/front
```

## Security Notes

- ⚠️ Never commit `.env` or `VITE_*` files to the repository
- ⚠️ VITE_BASE_URL must point to correct backend API URL
- ✅ Build-time variables are embedded in the Docker image
- ✅ Runtime variables are injected during deployment
- ✅ Frontend communicates with backend via VITE_BASE_URL

## Docker Image Build Process

The build uses `VITE_BASE_URL` as a build argument:

```dockerfile
ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}
```

This embeds the API URL into the production build, so the frontend knows where to reach the backend.

## Deployment Flow

1. Developer pushes to `homo` or `main` branch
2. GitHub Actions reads VITE_BASE_URL secret for that branch
3. Docker image is built with `--build-arg VITE_BASE_URL=<secret>`
4. Image is pushed to GHCR with appropriate tag (`homo-latest` or `latest`)
5. SSH into VPS and pull new image
6. Docker Compose updates frontend container with new image

## Frontend Configuration

The `src/services/api.ts` file uses the VITE_BASE_URL:

```typescript
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});
```

## Troubleshooting

### "Cannot reach backend" errors
- Verify `VITE_BASE_URL_HOMO` or `VITE_BASE_URL_PROD` is correct
- Check backend is running on the domain specified
- Ensure HTTPS is properly configured

### "VITE_BASE_URL undefined" in browser
- This means the variable wasn't passed during Docker build
- Verify the secret is set in GitHub
- Check the GitHub Actions workflow is using the secret correctly

### Different environments showing wrong API
- `homo` branch should use `VITE_BASE_URL_HOMO`
- `main` branch should use `VITE_BASE_URL_PROD`
- Verify branch names in workflow match configuration

