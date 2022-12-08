import PropTypes from 'prop-types'

const Header = ({ text }) => {
  return (
    <header>
      <h2>Feedback App</h2>
      <p>{text}</p>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback App"
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
