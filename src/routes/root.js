import Card from './card'
import Banner from './banner'
import { useLoaderData, Link } from 'react-router-dom'

export default function Root() {

  const { rooms } = useLoaderData();

  return (
    <>
      <Banner img={'/img/banner.png'} title={`Chez\u00A0vous, partout\u00A0et\u00A0ailleurs`} />
      <section className='cards'>
        {rooms.length ? (
          <>
            {rooms.map((room) => (
              <Link key={room.id} className='cardLink' to={`/rooms/${room.id}`} onClick={() => window.scroll(0, 0)}>
                <Card img={room.cover} title={room.title} />
              </Link>
            ))}
          </>
        ) : (
          <p>
            <i>No rooms to display</i>
          </p>
        )}

      </section>
    </>
  )
}



