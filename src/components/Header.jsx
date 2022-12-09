import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
      <header style={headerStyles}>
        <h2>Feedback App</h2>
        <p>{text}</p>
      </header>
  );
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
