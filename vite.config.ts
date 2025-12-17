import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Carrega variáveis do .env ou do ambiente do Vercel
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Garante que o código possa usar process.env sem quebrar o navegador
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.API_KEY),
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.API_KEY),
      },
      resolve: {
        alias: {
          // Mantendo seu padrão de alias para a raiz
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Garante que o build seja gerado corretamente para o Vercel
        outDir: 'dist',
        sourcemap: false
      }
    };
});
