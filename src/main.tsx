import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'sonner'
import Auth from './components/Auth.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/error-boundary.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 60 * 1000
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
          <ErrorBoundary>
            <App />
            <Auth />
            <Toaster />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode >,
)
