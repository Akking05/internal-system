import React from 'react';
import { LayoutDashboard, Users, FileText, Bell, ChevronDown } from 'lucide-react';
import type { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Layout = ({ children, activeTab, setActiveTab }: LayoutProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: <LayoutDashboard size={20}/> },
    { id: 'employees', label: 'Сотрудники', icon: <Users size={20}/> },
    { id: 'documents', label: 'Документы', icon: <FileText size={20}/> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-900 font-sans">
      {/* SIDEBAR */}
<aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full shadow-2xl z-10">
  <div className="p-8 flex items-center gap-3 mb-6">
    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-blue-500/20">
      DF
    </div>
    <span className="text-xl font-bold tracking-tighter uppercase text-white">DocFlow <span className="text-blue-500">ERP</span></span>
  </div>

  <nav className="flex-1 px-4 space-y-1.5">
    {menuItems.map((item) => (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id as Tab)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          activeTab === item.id 
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 translate-x-1' 
          : 'text-slate-400 hover:bg-white/5 hover:text-white'
        }`}
      >
        {item.icon} {item.label}
      </button>
    ))}
  </nav>

  {/* Вместо лимита — статус системы */}
  <div className="m-4 p-4 bg-slate-800/30 rounded-2xl border border-white/5">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Сервер: Актау, РК</span>
    </div>
    <p className="text-[10px] text-slate-500 leading-relaxed">
      Данные защищены протоколом AES-256. Резервное копирование: 04:00 AM.
    </p>
  </div>
</aside>
      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 gap-4 sticky top-0 z-0">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100 cursor-pointer hover:bg-slate-50 transition p-2 rounded-lg">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800">Арманов Д.</p>
              <p className="text-[10px] text-slate-500 font-medium">Администратор</p>
            </div>
            <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm">
              АД
            </div>
            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};