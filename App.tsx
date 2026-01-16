import React, { useState } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StudentClasses from './components/StudentClasses';
import TeacherClasses from './components/TeacherClasses';
import TeacherAdmin from './components/TeacherAdmin';
import ProfessionalSuccess from './components/ProfessionalSuccess';
import Forum from './components/Forum';
import Messages from './components/Messages';
import Schedule from './components/Schedule';
import Payments from './components/Payments';
import AITutor from './components/AITutor';
import Profile from './components/Profile';
import Library from './components/Library';
import { User, Tab, UserRole } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setActiveTab(Tab.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab(Tab.DASHBOARD);
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.DASHBOARD:
        return user ? <Dashboard user={user} /> : null;
      case Tab.STUDENT_CLASSES:
        return <StudentClasses />;
      case Tab.TEACHER_CLASSES:
        return <TeacherClasses />;
      case Tab.TEACHER_ADMIN:
        return <TeacherAdmin />;
      case Tab.PROFESSIONAL_SUCCESS:
        return <ProfessionalSuccess />;
      case Tab.FORUM:
        return <Forum />;
      case Tab.MESSAGES:
        return user ? <Messages user={user} /> : null;
      case Tab.SCHEDULE:
        return <Schedule role={user?.role || UserRole.STUDENT} />;
      case Tab.PAYMENTS:
        return <Payments />;
      case Tab.AI_TUTOR:
        return user ? <AITutor user={user} /> : null;
      case Tab.PROFILE:
        return user ? <Profile user={user} /> : null;
      case Tab.LIBRARY:
        return <Library />;
      default:
        return user ? <Dashboard user={user} /> : null;
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout 
      activeTab={activeTab} 
      onTabChange={setActiveTab} 
      user={user}
      onLogout={handleLogout}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;