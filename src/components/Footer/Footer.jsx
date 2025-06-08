import "./Footer.scss";
import { Link } from "react-router-dom";

import LinkedIn from "../../assets/icons/linkedin-in-brands.svg?react";
import GitHub from "../../assets/icons/github-brands.svg?react";
import Email from "../../assets/icons/envelope-solid.svg?react";


function Footer() {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/cassie-k/"><LinkedIn className="footer__icon" /></Link>
            <Link to="https://github.com/cassiek"><GitHub className="footer__icon" /></Link>  
            <Link to="mailto:ckumpula123@gmail.com"><Email className="footer__icon"/></Link>
            <p className="footer__bullet-point">•</p>
            <p className="footer__copyright">Cassandra Kumpula © 2025</p>
        </footer>
    ) 
};

export default Footer;