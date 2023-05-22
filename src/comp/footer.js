
import { FaSignInAlt, FaHome, FaPlus } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";
import   './footer.css';


import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="buttons">
  <Link to="#" className="button">
    <FaPlus />
    نشر اعلان
  </Link>
  <Link to="/" className="button">
    <FaHome />
    الرئيسية
  </Link>
  <Link to="#" className="button">
    <FaSignInAlt />
    تسجيل الدخول
  </Link>
</div>

        <footer>
  
        Designed by pioneer Moaazelsharkawy
        <span>🧡</span>
      </footer>
    </div>
  );
}

export default Footer;
