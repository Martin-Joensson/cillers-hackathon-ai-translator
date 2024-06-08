import { Link } from "react-router-dom"
import "./TextButton.css"

export const TextButton = ({className, label, ariaLabel, to}) => {
  const buttonContent = (
    <button className={className} aria-label={ariaLabel || label}>

      {label}
      </button>
  );

  return to ? <Link to={to}>
    {buttonContent} </Link> : buttonContent;
}


