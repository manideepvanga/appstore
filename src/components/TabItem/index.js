// Write your code here
import './index.css'

const TabItem = props => {
  const {item, CategoryUpdated, isActive} = props
  const {tabId, displayText} = item

  const categoryChange = () => {
    CategoryUpdated(tabId)
  }
  const newclass = isActive && 'active'

  return (
    <li>
      <button className={newclass} onClick={categoryChange}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
