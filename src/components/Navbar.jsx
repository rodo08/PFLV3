import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RodLogo } from "./icons/Icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img src={logo} alt="" /> */}
          <RodLogo />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rodrigorosalesmoya/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rodo08"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
