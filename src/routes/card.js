export default function Card({ title, img }) {

    return (
        <article className='card'>
            <img src={img} alt={title} />
            <div className='overlay'>
            {title}
            </div>
        </article>
    )

}
