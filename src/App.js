import { Outlet, Link, useLoaderData } from 'react-router-dom';
import { getRooms } from './routes/rooms';
import { ReactComponent as Logo } from './img/logo.svg';

export  async function loader() {
  const rooms =  await getRooms();
  return { rooms };
}

export default function App() {
  
  return (
    <>
      <div className="main-container">
        <header>
          <Logo />
          <nav>
            <ul>
              <li>
                <Link to="/"><span>Accueil</span></Link>
              </li>
              <li>
                <Link to="/about"><span>A&nbsp;propos</span></Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className='main'>
            <Outlet />
          </div>
        </main>
      </div>
      <footer  >
        <Logo />
        <p>© 2024 Kasa. All rights reserved</p>
      </footer>
    </>
  )

}
