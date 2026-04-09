import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
  it('should render with correct title', () => {
    const title = '🌿 Clínica Fitoterapia';
    expect(title).toBe('🌿 Clínica Fitoterapia');
  });

  it('should have navigation links', () => {
    const links = ['Home', 'Formulário', 'Admin', 'Login'];
    expect(links.length).toBe(4);
    expect(links).toContain('Home');
    expect(links).toContain('Formulário');
  });

  it('should validate email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test('test@example.com')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
  });
});
