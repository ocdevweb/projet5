import Card  from './card';
import Carousel from './carousel';
import { ReactComponent as Star } from '../img/star.svg';
import { useLoaderData, Link } from 'react-router-dom';
import { getRooms } from './rooms';



export default function About() {



    return (
        <>
                        
            <div >
                <div >
                    
                    {/* <div >
                        {
                            room.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))
                        }
                    </div> */}
                </div>
                <div >
                    <div >
                        </div>
                    <div>
                        
                       
                    </div>
                </div>
            </div>
            {/* <div className={accordionsWrapper} aria-label="détails sur le logement">
                <Accordion title="Description" content={room.description} />
                <Accordion title="Équipements" content={room.equipments} />
            </div> */}
        
        </>
    )
}