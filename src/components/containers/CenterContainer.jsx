import PropTypes from 'prop-types'
import './styles.scss'

const CenterContainer = ({ children }) => {
  return (
    <div className='center-left-column--container'>{children}</div>
  )
}

CenterContainer.propTypes = {
  children: PropTypes.any.isRequired
}

export default CenterContainer