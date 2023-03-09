import linkedin from "/Users/katymolony/Desktop/myProjects/portfolio2023/src/assets/linkedin.svg";
import github from "/Users/katymolony/Desktop/myProjects/portfolio2023/src/assets/GitHub_icon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
    <p>Find me on:</p>
    <div className="mb-3 pt-0">
      <a href="https://github.com/k8molony">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/k8molony">
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </div>
    </footer>
    );
}

export default Footer;