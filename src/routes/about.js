import Collapse from './collapse'
import Banner from './banner'
import { useLoaderData, Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page">
      <Banner className="about-banner" img={'/img/banner1.png'} title={""} />
      <section className='about'>
      <Collapse header='Fiabilité'>
            <p className='contentsp'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
          <Collapse header='Respect'>
            <p className='contentsp'>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse header='Service'>
          <p className='contentsp'>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse header='Sécurité'>
            <p className='contentsp'>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
      </section>
    </div>
  )
}



