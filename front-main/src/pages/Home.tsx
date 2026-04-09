
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            🌿 Bem-vindo à Clínica Fitoterapia
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubra o poder das plantas medicinais no tratamento natural de diversas condições de saúde
          </p>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-800 mb-4">O que é Fitoterapia?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fitoterapia é uma terapia que utiliza plantas com ação medicinal para <strong>prevenir ou tratar diversas doenças</strong>, 
            promovendo equilíbrio e bem-estar de forma natural.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Ansiedade e Estresse</h4>
              <p className="text-sm text-gray-600">Plantas calmantes para relaxamento natural</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Gripe e Resfriado</h4>
              <p className="text-sm text-gray-600">Fortaleça sua imunidade naturalmente</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Dor de Cabeça</h4>
              <p className="text-sm text-gray-600">Alívio natural sem efeitos colaterais</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Candidíase</h4>
              <p className="text-sm text-gray-600">Tratamento complementar com plantas</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Gases Intestinais</h4>
              <p className="text-sm text-gray-600">Saúde digestiva e bem-estar intestinal</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Hemorroida</h4>
              <p className="text-sm text-gray-600">Soluções naturais para o desconforto</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ TPM</h4>
              <p className="text-sm text-gray-600">Alívio dos sintomas pré-menstruais</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-700 mb-2">✓ Pressão Alta e Diabetes</h4>
              <p className="text-sm text-gray-600">Acompanhamento com plantas medicinais</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para cuidar da sua saúde?</h3>
          <p className="mb-6 text-green-100">
            Acesse nossos formulários para agendar uma consulta ou enviar suas informações
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/form"
              className="bg-white text-green-700 font-black px-8 py-3 rounded-lg hover:bg-green-50 transition duration-300 text-base" style={{ color: '#15803d' }}
            >
              Enviar um Formulário
            </a>
            <a
              href="/login"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              Fazer Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

