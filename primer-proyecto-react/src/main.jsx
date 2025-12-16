import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponent } from './PrimerComponent'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponent titulo="Esta seccion es de props" subtitulo = { 4 }/>
  </StrictMode>,
)
