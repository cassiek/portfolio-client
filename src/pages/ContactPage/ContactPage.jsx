import "./ContactPage.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin-in-brands.svg?react";
import Medium from "../../assets/icons/medium-brands.svg?react";
import GitHub from "../../assets/icons/github-brands.svg?react";
import Email from "../../assets/icons/envelope-solid.svg?react";

function ContactPage() {

    return (
        <main className="contact-page">
            <section className="contact-page__content">
                <h3 className="contact-page__header">Contact</h3>
                <div className="contact-page__text">
                    <p className="contact-page__description">
                        I am currently seeking a software development or related role.
                        You are welcome to contact me to discuss code, collaborating on a project,
                        an opportunity, or even to expand your network, and I will be delighted to 
                        connect with you.
                    </p>
                    <div>
                        <p className="contact-page__CTA"></p>
                        <div className="socials-icons">
                            <Link to="https://www.linkedin.com/in/cassie-k/" ><LinkedIn className="socials-icons__icon" /></Link>
                            <Link to="https://medium.com/@cassiekumpula/about" ><Medium className="socials-icons__icon" /></Link>
                            <Link to="https://github.com/cassiek" ><GitHub className="socials-icons__icon" /></Link>
                        </div>
                        <div className="email">
                            <Link to="mailto:ckumpula123@gmail.com"><Email className="email__icon" /></Link><Link className="email__link" to="mailto:ckumpula123@gmail.com">ckumpula123@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ContactPage;