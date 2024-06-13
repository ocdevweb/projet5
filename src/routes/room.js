import Card from './card';
import Carousel from './carousel';
import Collapse from './collapse';
import Pill from './pill'
import { ReactComponent as Star } from '../img/star.svg';
import { useLoaderData, Link } from 'react-router-dom';
import { getRooms } from './rooms';

export async function loader({ params }) {
    let rooms = await getRooms();
    console.log(rooms);
    let room = rooms.find(room => room.id == params.roomId);
    console.log(params.roomId);
    console.log(room);
    return { room };
}

export default function Room() {

    const { room } = useLoaderData();
    console.log('rooms root: ', room);

    let rating = parseInt(room.rating);
    let images = room.pictures;

    return (
        <>
            <Carousel images={room.pictures} alt={room.title} />
            <div className="room-info" aria-labelledby="room-title" >
                <div className='room-info-first' style={{ zIndex: 1, position: 'relative', backgroundColor: 'white' }}>
                    <div >
                        <h2 id="room-title" >{room.title}</h2>
                        <p >{room.location}</p>
                        <div className='pills-container' >
                            {
                                room.tags.map((tag, index) => (
                                    <Pill key={index} tag={tag} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="host-info">
                        <div >
                            <div >{room.host.name}</div>
                            <img src={room.host.picture} alt={room.host.name} />
                        </div>
                        <div>
                            {
                                [...[...Array(rating)].map((_, i) => <span className='active' key={i}><Star /></span>),
                                ...[...Array(5 - rating)].map((_, i) => <span className='inactive' key={5 + i}><Star /></span>)]
                            }
                        </div>
                    </div>
                </div>
                <div className="description" style={{ zIndex: 0, position: 'relative' }}>
                    <Collapse header='Description'>
                        <p>{room.description}</p>
                    </Collapse>
                    <Collapse header='Equipements'>
                        <p>{room.equipments}</p>
                    </Collapse>
                </div>
            </div>
        </>
    )
}