import logoGitHub from "../assets/images/github-mark-white.svg";
import logoLinkedin from "../assets//images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">
          <p>© 2024 Gabriel Mordev. Todos los derechos reservados.</p>
        </div>
        <div className="socials">
          <a href="https://github.com/gabrielmordev">
            <img src={logoGitHub} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-moreno-mu%C3%B1oz/">
            <img src={logoLinkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


