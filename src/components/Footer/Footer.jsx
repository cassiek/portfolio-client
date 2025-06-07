import "./Footer.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.png";
import LinkedIn_drk from "../../assets/icons/linkedin-drkpurple.png";
import Medium from "../../assets/icons/medium-brands-solid.svg?react";
import GitHub from "../../assets/icons/github.png";
import GitHub_drk from "../../assets/icons/github-drkpurple.png";
import email from "../../assets/icons/email.png";
import email_drk from "../../assets/icons/email-drkpurple.png";

function Footer() {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/cassie-k/"></Link>
            <Link to="https://medium.com/@cassiekumpula" ><Medium className="footer__icon" /></Link>
            <Link to="https://github.com/cassiek"></Link>  
            <Link to="mailto:ckumpula123@gmail.com"></Link>
            <p className="footer__bullet-point">•</p>
            <p className="footer__copyright">Cassandra Kumpula © 2025</p>
        </footer>
    ) 
};

export default Footer;