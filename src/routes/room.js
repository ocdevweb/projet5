import Error from './error';
import Carousel from './carousel';
import Collapse from './collapse';
import Pill from './pill'
import { ReactComponent as Star } from '../img/star.svg';
import { useLoaderData } from 'react-router-dom';
import { getRooms } from './rooms';

export async function loader({ params }) {
  let rooms = await getRooms();
  let room = rooms.find(room => room.id == params.roomId);
  return { room };
}

export default function Room() {

  const { room } = useLoaderData();

  if (room) {
    let rating = parseInt(room.rating);
    let images = room.pictures;
    return (
      <>
        <Carousel images={room.pictures} alt={room.title} />
        <div className="room-info" aria-labelledby="room-title" >
          <div className='room-info-first' >
            <div className='title-tags'>
              <h2 className="room-title" >{room.title}</h2>
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
              <div className='host-info-first'>
                <div className='host-name' >{room.host.name.split(" ").join("\n")}</div>
                <img src={room.host.picture} width="64" height="64" alt={room.host.name} className='host-picture' />
              </div>
              <div className='host-info-second'>
                {
                  [...[...Array(rating)].map((_, i) => <span className='active' key={i}><Star /></span>),
                  ...[...Array(5 - rating)].map((_, i) => <span className='inactive' key={5 + i}><Star /></span>)]
                }
              </div>
            </div>
          </div>
          <div className="description">
            <Collapse header='Description'>
              <p className='contentsp'>{room.description}</p>
            </Collapse>
            <Collapse header='Equipements'>
              <div className='contentsp'>
                <ul className='equipment-list'>
                  {
                    room.equipments.map((equipment, index) => (
                      <li key={index}> {equipment}</li>
                    ))
                  }
                </ul>
              </div>
            </Collapse>
          </div>
        </div >
      </>
    );
  }
  else {
    return (<Error />)
  }
}