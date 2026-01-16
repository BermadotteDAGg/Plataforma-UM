import React, { useState, useRef, useEffect } from 'react';
import { generateTutorResponse } from '../services/geminiService';
import { Bot, Send, User as UserIcon, Sparkles, Paperclip } from 'lucide-react';
import { User, UserRole } from '../types';

interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

interface AITutorProps {
    user: User;
}

const AITutor: React.FC<AITutorProps> = ({ user }) => {
  const [input, setInput] = useState('');
  
  const initialMessage = user.role === UserRole.TEACHER 
    ? "¡Hola Colega! Soy tu asistente de docencia. Puedo ayudarte a planificar actividades, sugerir dinámicas grupales, redactar rúbricas o gestionar tus recordatorios académicos."
    : "¡Hola! Soy tu asistente personal de clases. Estoy aquí para apoyarte en tus actividades, recordarte fechas de entrega y resolver dudas sobre tus materias.";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: initialMessage
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await generateTutorResponse(input);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      content: response
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
      {/* Header */}
      <div className="h-16 bg-slate-900 flex items-center justify-between px-6 shrink-0">
         <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/50">
                <Sparkles size={16} />
             </div>
             <div>
                 <h3 className="font-bold text-white">{user.role === UserRole.TEACHER ? 'Asistente Docente' : 'Tutor MEZE IA'}</h3>
                 <p className="text-[10px] text-indigo-300">Impulsado por Gemini</p>
             </div>
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                msg.role === 'ai' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-600'
            }`}>
                {msg.role === 'ai' ? <Bot size={18} /> : <UserIcon size={18} />}
            </div>
            
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-slate-800 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
            }`}>
                <div className="prose prose-sm max-w-none">
                    {msg.content.split('\n').map((line, i) => (
                        <p key={i} className="min-h-[1em] mb-1 last:mb-0">{line}</p>
                    ))}
                </div>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Bot size={18} />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-200">
        <form onSubmit={handleSubmit} className="flex gap-3 relative">
            <button type="button" className="p-3 text-slate-400 hover:text-indigo-600 transition-colors">
                <Paperclip size={20} />
            </button>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta o sube un archivo..."
                className="flex-1 pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white shadow-inner transition-all"
                disabled={isLoading}
            />
            <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                <Send size={20} />
            </button>
        </form>
      </div>
    </div>
  );
};

export default AITutor;