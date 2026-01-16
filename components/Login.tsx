import React, { useState } from 'react';
import { UserRole, User } from '../types';
import { Lock, User as UserIcon, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Hardcoded credentials logic
    setTimeout(() => {
      if (code === '04111999' && password === '123456') {
        onLogin({
          id: 'student1',
          name: 'Juanito Perez',
          enrollmentCode: '04111999',
          role: UserRole.STUDENT,
          major: 'Lic. en Psicología',
          semester: 2,
          scholarship: '15% Excelencia Académica',
          photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juanito'
        });
      } else if (code === 'LPM00001' && password === '123456') {
        onLogin({
          id: 'teacher1',
          name: 'Mtro. Perenganito Vázquez',
          enrollmentCode: 'LPM00001',
          role: UserRole.TEACHER,
          employeeId: 'LPM00001',
          major: 'Psicología',
          photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Perenganito'
        });
      } else {
        setError('Credenciales incorrectas. Intenta de nuevo.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-meze-gradient flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20">
        {/* Header Section with Brand Logo */}
        <div className="p-10 text-center relative">
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="text-meze-500 font-light text-xl tracking-[0.2em] mb-1">IM<span className="font-bold">|</span>UM</div>
                <h1 className="text-5xl font-brand text-transparent bg-clip-text bg-gradient-to-r from-meze-400 to-meze-600 leading-[0.85] tracking-tight drop-shadow-sm">
                    TODOS<br/>SOMOS<br/>MEZE
                </h1>
            </div>
            <p className="text-meze-400 text-[10px] tracking-[0.3em] uppercase mt-4 font-semibold">Campus Torreón</p>
        </div>

        {/* Form Section */}
        <div className="px-10 pb-10">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Usuario / Matrícula</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon size={18} className="text-meze-300 group-focus-within:text-meze-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border-b-2 border-slate-100 focus:border-meze-500 transition-all text-slate-700 bg-transparent placeholder-slate-300 outline-none font-medium"
                            placeholder="Ingresa tu matrícula"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contraseña</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock size={18} className="text-meze-300 group-focus-within:text-meze-500 transition-colors" />
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full pl-10 pr-3 py-3 border-b-2 border-slate-100 focus:border-meze-500 transition-all text-slate-700 bg-transparent placeholder-slate-300 outline-none font-medium"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {error && (
                    <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-meze-500 to-meze-400 hover:from-meze-600 hover:to-meze-500 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <>
                            <span>INICIAR SESIÓN</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
            
            <div className="mt-8 text-center">
                <a href="#" className="text-xs text-slate-400 hover:text-meze-500 transition-colors">¿Olvidaste tus credenciales?</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;