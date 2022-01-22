import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121]  text-white">
      <div className="w-full max-w-7xl mx-auto py-14 px-2.5">
        <h2>Tatiane Weitzel</h2>
        <p>21/01/2022</p>
        <Link to="">GitHub</Link>
        <Link to="">LinkedIn</Link>
      </div>
    </footer>
  );
};

export default Footer;
