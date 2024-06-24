
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <div className='error'>
        <div className='message'><h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
        <div>
          <Link to="/"><span>Retourner sur la page d'accueil</span></Link>
        </div>
      </div>
    </>
  )
}



