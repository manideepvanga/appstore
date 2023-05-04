// Write your code here
import './index.css'

const AppItem = props => {
  const {item} = props
  const {appId, appName, imageUrl, category} = item

  return (
    <li className="appitemcontainer">
      <img className="appitems" src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
