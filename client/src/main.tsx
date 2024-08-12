import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

const pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!pub_key) {
  throw new Error('VITE_CLERK_PUBLISHABLE_KEY is required');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={pub_key}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)