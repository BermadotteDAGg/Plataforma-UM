import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Bot, 
  LogOut, 
  Menu,
  X,
  Bell,
  CalendarDays,
  CreditCard,
  UserCircle,
  Library,
  GraduationCap,
  Award,
  Briefcase
} from 'lucide-react';
import { Tab, User, UserRole } from '../types';
import { STUDENT_NOTIFICATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  user: User;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const NavItem = ({ tab, icon: Icon, label }: { tab: Tab; icon: React.ElementType; label: string }) => {
    const isActive = activeTab === tab;
    return (
      <button
        onClick={() => {
          onTabChange(tab);
          setIsMobileMenuOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group mb-1 ${
          isActive 
            ? 'bg-white text-meze-900 shadow-md font-bold' 
            : 'text-white/80 hover:bg-white/10 hover:text-white font-medium'
        }`}
      >
        <Icon size={20} className={isActive ? 'text-meze-600' : 'text-meze-200 group-hover:text-white'} />
        <span className="text-sm tracking-wide">{label}</span>
      </button>
    );
  };

  const getTabTitle = (tab: Tab) => {
    switch(tab) {
        case Tab.DASHBOARD: return 'Tablero Principal';
        case Tab.STUDENT_CLASSES: return 'Mis Clases'; // Renamed from Homework
        case Tab.TEACHER_CLASSES: return 'Mis Clases';
        case Tab.TEACHER_ADMIN: return 'Administración Docente'; // New
        case Tab.FORUM: return 'Foros y Comunidad';
        case Tab.MESSAGES: return 'Mensajería';
        case Tab.SCHEDULE: return user.role === UserRole.TEACHER ? 'Horario Docente' : 'Horario de Clases';
        case Tab.PAYMENTS: return 'Pagos y Colegiaturas';
        case Tab.AI_TUTOR: return user.role === UserRole.TEACHER ? 'Asistente de Clases' : 'Tutor MEZE IA';
        case Tab.PROFILE: return 'Perfil y Trámites';
        case Tab.LIBRARY: return 'Biblioteca Digital';
        case Tab.PROFESSIONAL_SUCCESS: return 'Éxito Profesional'; // New
        default: return 'MEZE Conecta';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-meze-900 z-50 flex items-center justify-between px-4 shadow-md border-b border-white/10">
        <div className="flex items-center gap-2 text-white">
             <div className="font-light tracking-widest text-xs">IM|UM</div>
             <span className="font-brand font-bold text-lg leading-none">MEZE</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-40 w-72 bg-meze-900 text-white transform transition-transform duration-300 ease-in-out shadow-2xl
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Brand Logo Area */}
          <div className="h-32 flex flex-col items-center justify-center px-6 border-b border-white/10 shrink-0 bg-meze-950/30">
             <div className="text-white/70 font-light text-sm tracking-[0.3em] mb-1">IM<span className="font-bold text-white">|</span>UM</div>
             <h1 className="text-3xl font-brand text-white leading-[0.85] text-center tracking-tight drop-shadow-md">
                TODOS<br/>SOMOS<br/>MEZE
             </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <NavItem tab={Tab.DASHBOARD} icon={LayoutDashboard} label="Tablero" />
            
            {user.role === UserRole.STUDENT && (
                <>
                    <NavItem tab={Tab.PROFILE} icon={UserCircle} label="Perfil y Trámites" />
                    <NavItem tab={Tab.SCHEDULE} icon={CalendarDays} label="Horario" />
                    <NavItem tab={Tab.STUDENT_CLASSES} icon={GraduationCap} label="Mis Clases" />
                    <NavItem tab={Tab.LIBRARY} icon={Library} label="Biblioteca Digital" />
                    <NavItem tab={Tab.PROFESSIONAL_SUCCESS} icon={Award} label="Éxito Profesional" />
                    <NavItem tab={Tab.PAYMENTS} icon={CreditCard} label="Pagos" />
                </>
            )}

            {user.role === UserRole.TEACHER && (
                <>
                    <NavItem tab={Tab.PROFILE} icon={UserCircle} label="Mi Perfil" />
                    <NavItem tab={Tab.TEACHER_CLASSES} icon={BookOpen} label="Mis Clases" />
                    <NavItem tab={Tab.TEACHER_ADMIN} icon={Briefcase} label="Administración Docente" />
                    <NavItem tab={Tab.SCHEDULE} icon={CalendarDays} label="Horario Docente" />
                </>
            )}

            <NavItem tab={Tab.FORUM} icon={Users} label="Foros" />
            <NavItem tab={Tab.MESSAGES} icon={MessageSquare} label="Mensajes" />
            
            <div className="pt-6 pb-2">
               <div className="px-4 text-[10px] font-bold text-meze-200 uppercase tracking-widest mb-2">IA & Soporte</div>
               <NavItem tab={Tab.AI_TUTOR} icon={Bot} label={user.role === UserRole.TEACHER ? "Asistente de Clases" : "Tutor MEZE IA"} />
            </div>
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 bg-meze-950 border-t border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={user.photoUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=MEZE"} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-meze-400 bg-white object-cover shadow-sm"
              />
              <div className="overflow-hidden">
                <p className="text-sm font-bold truncate text-white">{user.name}</p>
                <p className="text-[10px] text-meze-200 truncate">{user.role === UserRole.STUDENT ? 'Matrícula' : 'No. Emp'}: {user.enrollmentCode}</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-bold uppercase tracking-wide border border-white/5"
            >
              <LogOut size={14} />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative pt-16 lg:pt-0">
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-meze-100 flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-20">
            <div>
                <h2 className="text-xl font-bold text-meze-900">
                    {getTabTitle(activeTab)}
                </h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <button 
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 text-meze-300 hover:text-meze-600 transition-colors relative"
                    >
                        <Bell size={22} />
                        {user.role === UserRole.STUDENT && <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border-2 border-white"></span>}
                    </button>
                    
                    {/* Notifications Dropdown */}
                    {showNotifications && user.role === UserRole.STUDENT && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-fade-in">
                            <div className="bg-slate-50 p-3 border-b border-slate-100">
                                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide">Notificaciones</h3>
                            </div>
                            <div className="divide-y divide-slate-50">
                                {STUDENT_NOTIFICATIONS.map(notif => (
                                    <div key={notif.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="flex gap-3">
                                            <div className="w-2 h-2 mt-1.5 rounded-full bg-meze-500 shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-slate-700 leading-snug">{notif.text}</p>
                                                <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-[10px] font-bold text-meze-600 bg-meze-50 px-3 py-1.5 rounded-full border border-meze-100 uppercase tracking-wider hidden md:block">
                    {user.major}
                </div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 lg:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;