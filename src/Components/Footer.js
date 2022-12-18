import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
  <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Gary Smith</small>
      <a href="https://www.linkedin.com/in/gary-smith-dev/"
        className="instagram social">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  </footer>
)
