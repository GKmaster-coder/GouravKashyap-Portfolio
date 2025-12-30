import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider
  maxSnack={3}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  autoHideDuration={3000} // Slightly faster is more professional

>
    <App />
    </SnackbarProvider>
  </StrictMode>,
)
