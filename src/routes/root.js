import Card  from './card'
import { useLoaderData, Link } from 'react-router-dom'

export default function Root() {

    const { rooms } = useLoaderData();
    console.log('rooms root: ', rooms);

    return (
        <>
            <div className='banner' >
                Chez vous blabla
            </div>
            <section className='cards'>
                
                {rooms.length ? (
                <>
                    {rooms.map((room) => (
                        <Link key={room.id} className='cardLink' to={`/room/${room.id}`}>
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


          
