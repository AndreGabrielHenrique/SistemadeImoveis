// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite para o projeto
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'  // Padronização de nomes de classes
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Desativa sourcemaps para produção (melhora performance)
    emptyOutDir: true // Limpa o diretório de output antes do build
  }
})