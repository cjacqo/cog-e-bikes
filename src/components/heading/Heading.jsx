import PropTypes from 'prop-types'

const Heading = ({ text, headingNum }) => {

  const buildHeading = () => {
    switch(headingNum) {
      case 1:
        return <h1 className='heading-1'>{text}</h1>
      case 2:
        return <h2 className='heading-2'>{text}</h2>
      case 3:
        return <h3 className='heading-3'>{text}</h3>
      case 4:
        return <h4 className='heading-4'>{text}</h4>
      case 5:
        return <h5 className='heading-5'>{text}</h5>
      case 6:
        return <h6 className='heading-6'>{text}</h6>
    }
  }
  
  return buildHeading()
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  headingNum: PropTypes.number.isRequired
}

export default Heading