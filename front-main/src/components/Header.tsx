// src/components/Header.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuthHook';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-green-700 to-emerald-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-wide">🌿 Clínica Fitoterapia</h1>
          <p className="text-sm text-green-100 hidden md:block">Terapia com Plantas Medicinais</p>
        </div>
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <Link 
            to="/" 
            className="hover:text-green-200 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link 
            to="/form" 
            className="hover:text-green-200 transition duration-300 font-medium"
          >
            Formulário
          </Link>
          <Link 
            to="/admin" 
            className="hover:text-green-200 transition duration-300 font-medium"
          >
            Admin
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
