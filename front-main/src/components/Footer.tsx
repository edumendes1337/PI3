export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-auto border-t-4 border-green-800">
      <p className="text-sm font-semibold">
        © {currentYear} Copyright - Alunos UNIVESP. Todos os direitos reservados.
      </p>
      <p className="text-xs text-green-100 mt-2">
        Clínica Fitoterapia - Terapia com Plantas Medicinais
      </p>
    </footer>
  );
}
