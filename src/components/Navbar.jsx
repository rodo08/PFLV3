import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RodLogo } from "./icons/Icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <RodLogo />
        </a>
      </div>
      <div className="pt-6 pb-6 flex items-center justify-center gap-4 text-2xl wrapper">
        <span>
          <FaLinkedin
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/rodrigorosalesmoya/")
            }
          />
        </span>
        <span>
          <FaGithub
            className="icon"
            onClick={() => window.open("https://github.com/rodo08")}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
