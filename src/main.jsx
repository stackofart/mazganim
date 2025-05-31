import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
// 1) Импортируем i18n одну единственную строчку
import "./i18n"; // <-- это «прокидывает» инициализацию i18next в память

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
