import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchDailyLegalNews } from '../services/geminiService';
import { LoadingState, NewsResult } from '../types';

const NewsSection: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsResult | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  useEffect(() => {
    const loadNews = async () => {
      setStatus(LoadingState.LOADING);
      try {
        const data = await fetchDailyLegalNews();
        setNewsData(data);
        setStatus(LoadingState.SUCCESS);
      } catch (error) {
        console.error("Erro na seção de notícias:", error);
        setStatus(LoadingState.ERROR);
      }
    };

    loadNews();
  }, []);

  return (
    <section id="news" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm">Atualização Diária</h2>
                <p className="text-2xl font-serif font-bold text-white">Informativo Jurídico IA</p>
              </div>
              <div className="hidden sm:block">
                <i className="fa-solid fa-newspaper text-slate-700 text-4xl"></i>
              </div>
            </div>
          </div>

          <div className="p-8">
            {status === LoadingState.LOADING && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div>
                <p className="text-slate-500 font-medium">Consultando as últimas decisões jurídicas...</p>
              </div>
            )}

            {status === LoadingState.ERROR && (
              <div className="text-center py-12">
                <i className="fa-solid fa-circle-exclamation text-red-500 text-4xl mb-4"></i>
                <p className="text-slate-700 font-medium">Não foi possível carregar as notícias agora.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-bold underline"
                >
                  Tentar novamente
                </button>
              </div>
            )}

            {status === LoadingState.SUCCESS && newsData && (
              <div className="animate-fadeIn">
                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown 
                    components={{
                      p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                      li: ({children}) => <li className="text-gray-700 mb-2 list-disc ml-4">{children}</li>,
                      strong: ({children}) => <strong className="font-bold text-slate-900">{children}</strong>
                    }}
                  >
                    {newsData.content}
                  </ReactMarkdown>
                </div>

                {newsData.sources && newsData.sources.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Fontes Oficiais Consultadas:</h4>
                    <div className="flex flex-wrap gap-3">
                      {newsData.sources.map((source, idx) => (
                        <a 
                          key={idx}
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs hover:bg-amber-100 hover:text-amber-800 transition-colors border border-transparent hover:border-amber-200"
                        >
                          <i className="fa-solid fa-link mr-2 opacity-50"></i>
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex justify-end items-center text-[10px] text-slate-400 italic">
                  <i className="fa-solid fa-robot mr-2"></i>
                  Conteúdo curado por Inteligência Artificial em tempo real
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;