// src/pages/AdminDashboard.tsx
import { useEffect, useState, useCallback } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface ResponseData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<ResponseData[]>([]);
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  const fetchData = useCallback(async (valorPesquisa: string) => {
    const token = localStorage.getItem('auth');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const endpoint = valorPesquisa
        ? `/pesquisar?valorPesquisa=${encodeURIComponent(valorPesquisa)}`
        : '/listartudo';
      const res = await api.get(endpoint, {
        headers: {
          Authorization: token,
        },
      });
      // Garantir que res.data é um array
      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        console.error('API retornou dados que não são um array:', res.data);
        setData([]);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar os dados. Verifique sua autenticação.');
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchData('');
  }, [fetchData]);

  const handleSearch = () => {
    fetchData(filter);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">📊 Dashboard de Respostas</h2>
          <p className="text-gray-600">Gerencie e visualize todas as respostas recebidas</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Digite para filtrar por nome, email ou telefone..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              🔍 Pesquisar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {data.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">Nenhuma resposta encontrada</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Nome</th>
                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                    <th className="px-6 py-4 text-left font-semibold">Telefone</th>
                    <th className="px-6 py-4 text-left font-semibold">Mensagem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((item, index) => (
                    <tr key={index} className="hover:bg-green-50 transition">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.nome}</td>
                      <td className="px-6 py-4 text-gray-700">{item.email}</td>
                      <td className="px-6 py-4 text-gray-700">{item.telefone}</td>
                      <td className="px-6 py-4 text-gray-700 break-words">
                        {item.mensagem}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-blue-700">
            <strong>Total de registros:</strong> {data.length}
          </p>
        </div>
      </div>
    </div>
  );
}
