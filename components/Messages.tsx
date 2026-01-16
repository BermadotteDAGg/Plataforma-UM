import React, { useState, useEffect } from 'react';
import { STUDENT_CHATS, TEACHER_CHATS, STUDENT_MESSAGES_DB, TEACHER_MESSAGES_DB } from '../constants';
import { Send, User, MoreVertical, Phone, Video, Paperclip, Mic, Users, Search, PlusCircle, X, Calendar, Clock, MapPin } from 'lucide-react';
import { Chat, Message, User as UserType, UserRole } from '../types';

interface MessagesProps {
    user: UserType;
}

const Messages: React.FC<MessagesProps> = ({ user }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Modals
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  useEffect(() => {
      const loadedChats = user.role === UserRole.STUDENT ? STUDENT_CHATS : TEACHER_CHATS;
      setChats(loadedChats);
      if (loadedChats.length > 0) handleChatSelect(loadedChats[0]);
  }, [user.role]);

  const handleChatSelect = (chat: Chat) => {
      setSelectedChat(chat);
      const db = user.role === UserRole.STUDENT ? STUDENT_MESSAGES_DB : TEACHER_MESSAGES_DB;
      setMessages(db[chat.id] || []);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: Date.now().toString(),
      sender: 'Yo',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };
    setMessages([...messages, msg]);
    setNewMessage('');
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-12rem)]">
        {/* MAIN CHAT AREA */}
        <div className="flex-1 flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
            <div className="w-1/3 border-r border-slate-200 hidden md:flex flex-col">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <input type="text" placeholder="Buscar..." className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-meze-500" />
                    </div>
                </div>
                <div className="overflow-y-auto flex-1">
                    {chats.map(chat => (
                        <div 
                            key={chat.id} 
                            onClick={() => handleChatSelect(chat)}
                            className={`p-4 border-b border-slate-100 cursor-pointer transition-colors ${selectedChat?.id === chat.id ? 'bg-meze-50 border-l-4 border-l-meze-600' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${chat.isGroup ? 'bg-indigo-100 text-indigo-600' : chat.role === 'Admin' ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-500'}`}>
                                    {chat.isGroup ? <Users size={20} /> : <User size={20} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-semibold text-sm text-slate-800 truncate">{chat.name}</h4>
                                    </div>
                                    <p className="text-xs text-slate-500 truncate">{chat.lastMessage}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedChat ? (
                <div className="flex-1 flex flex-col">
                    <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
                        <div className="flex items-center gap-3">
                            <div>
                                <h3 className="font-bold text-slate-800">{selectedChat.name}</h3>
                                <p className="text-xs text-green-600 flex items-center gap-1">En línea</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] md:max-w-[60%] p-4 rounded-2xl text-sm shadow-sm ${msg.isMe ? 'bg-meze-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}`}>
                                    <p>{msg.content}</p>
                                    <p className={`text-[10px] mt-1 text-right ${msg.isMe ? 'text-meze-200' : 'text-slate-400'}`}>{msg.timestamp}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-white border-t border-slate-200">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                            <input 
                                type="text" 
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Escribe un mensaje..." 
                                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-meze-500"
                            />
                            <button type="submit" className="p-3 bg-meze-600 text-white rounded-xl hover:bg-meze-700"><Send size={20} /></button>
                        </form>
                    </div>
                </div>
            ) : <div className="flex-1 flex items-center justify-center text-slate-400">Selecciona un chat</div>}
        </div>

        {/* SIDEBAR: HELP & APPOINTMENTS (Student Only usually, but let's show for all) */}
        {user.role === UserRole.STUDENT && (
            <div className="w-64 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-2">Centro de Ayuda</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Si necesitas atender un tema delicado, personal, o aclaración importante, genera una cita con el departamento correspondiente.
                </p>
                <button 
                    onClick={() => setShowAppointmentModal(true)}
                    className="w-full py-3 bg-slate-800 text-white font-bold text-sm rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                    <Calendar size={16} /> Agendar Cita
                </button>
            </div>
        )}

        {/* Appointment Modal */}
        {showAppointmentModal && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                <div className="bg-white w-full max-w-md rounded-2xl p-6 animate-fade-in relative">
                    <button onClick={() => setShowAppointmentModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                    <h3 className="font-bold text-slate-800 mb-6 text-lg">Agendar Cita</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Departamento</label>
                            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none">
                                <option>Seleccionar...</option>
                                <option>Coordinación de Carrera</option>
                                <option>Control Escolar</option>
                                <option>Vinculación</option>
                                <option>Psicopedagogía</option>
                                <option>Coordinación General</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Asunto</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Descripción</label>
                            <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none h-20 resize-none"></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Fecha</label>
                                <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Hora</label>
                                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none">
                                    <option>9:00 AM</option>
                                    <option>9:30 AM</option>
                                    <option>10:00 AM</option>
                                    <option>10:30 AM</option>
                                    <option>11:00 AM</option>
                                    <option>11:30 AM</option>
                                    <option>12:00 PM</option>
                                    <option>12:30 PM</option>
                                    <option>01:00 PM</option>
                                    <option>01:30 PM</option>
                                    <option>02:00 PM</option>
                                    <option>02:30 PM</option>
                                    <option>03:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Modalidad</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 text-sm text-slate-700 font-medium"><input type="radio" name="mode" /> Presencial</label>
                                <label className="flex items-center gap-2 text-sm text-slate-700 font-medium"><input type="radio" name="mode" /> En línea</label>
                            </div>
                        </div>
                        <button type="button" onClick={() => {alert('Cita solicitada'); setShowAppointmentModal(false);}} className="w-full py-3 bg-meze-600 text-white font-bold rounded-xl hover:bg-meze-700 mt-2">Confirmar</button>
                    </form>
                </div>
            </div>
        )}
    </div>
  );
};

export default Messages;