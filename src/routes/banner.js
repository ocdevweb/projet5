export default function Banner({ title, img }) {

  return (
    <div className='banner'>
      <img src={img} alt={title} />
      <div className='overlay-banner'>
        {title}
      </div>
    </div>
  )
}
