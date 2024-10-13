import logoGitHub from "../assets/images/github-mark-white.svg";
import logoLinkedin from "../assets//images/linkedin.svg";

const RedesSociales = () => {
    return (
        <div >
            
            <a href="https://github.com/gabrielmordev">
                <img src={logoGitHub} alt="Logo" /> { }
            </a>
            <a href="https://www.linkedin.com/in/gabriel-moreno-mu%C3%B1oz/">
                <img src={logoLinkedin} alt="Logo" /> { }
            </a>
        </div>
    );
};

export default RedesSociales;
