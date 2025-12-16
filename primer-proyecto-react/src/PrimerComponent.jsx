import './styles/PrimerComponent.css'
import PropTypes from 'prop-types'

export const PrimerComponent = ( {titulo, subtitulo} ) => {
  return (
    <>
        <h1> {titulo} </h1>
        <h2> {subtitulo} </h2>
    </>
    
  )
}

PrimerComponent.PropTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

PrimerComponent.defaultProps = {
    titulo: 'React',
    subtitulo: 'Techlogia'
}
