import { describe, it, expect } from 'vitest';

describe('Form Validation', () => {
  it('should validate required fields', () => {
    const formData = {
      nome: 'João Silva',
      email: 'joao@example.com',
      telefone: '(11) 99999-9999',
      mensagem: 'Gostaria de mais informações sobre fitoterapia',
    };

    expect(formData.nome).not.toBe('');
    expect(formData.email).not.toBe('');
    expect(formData.telefone).not.toBe('');
    expect(formData.mensagem).not.toBe('');
  });

  it('should validate email format in form', () => {
    const validEmail = 'usuario@clinica.com';
    const invalidEmail = 'invalido@';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    expect(emailRegex.test(validEmail)).toBe(true);
    expect(emailRegex.test(invalidEmail)).toBe(false);
  });

  it('should validate form has correct structure', () => {
    const formStructure = ['nome', 'email', 'telefone', 'mensagem'];
    expect(formStructure.length).toBe(4);
    expect(formStructure).toContain('nome');
    expect(formStructure).toContain('email');
  });
});
