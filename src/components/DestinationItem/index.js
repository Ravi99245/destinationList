import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {id, name, imgUrl} = item

  return (
    <li className="destination-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
