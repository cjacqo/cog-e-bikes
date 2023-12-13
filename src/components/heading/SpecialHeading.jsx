import PropTypes from 'prop-types'

/**
 * 
 * @param {string} mainText Main text of heading
 * @param {string} specialText Special text of heading
 * @returns 
 */
const SpecialHeading = ({ mainText, specialText }) => {
  return (
    <h1 className='heading-1'>
      {mainText}&nbsp;
      <span className='heading-1-special'>{specialText}</span>
    </h1>
  )
}

SpecialHeading.propTypes = {
  mainText: PropTypes.string.isRequired,
  specialText: PropTypes.string.isRequired
}

export default SpecialHeading