import { Link } from "react-router-dom"
import "./TextButton.css"
import PropTypes from "prop-types"

export const TextButton = ({className, label, ariaLabel, to}) => {
  const buttonContent = (
    <button className={className} aria-label={ariaLabel || label}>
      {label}
      </button>
  );

  return to ? <Link to={to}>
    {buttonContent} </Link> : buttonContent;
}

TextButton.proptypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  to: PropTypes.string,
};


