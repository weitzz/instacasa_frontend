/* eslint-disable react/jsx-no-target-blank */

import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className="bg-[#212121] text-center lg:text-left">
      <div className="container p-6"></div>
      <div className="text-gray-700 text-center p-4">
        <div className="mb-6 text-center">
          <h5 className="uppercase font-bold mb-2.5 text-[#fff]">
            Tatiane Weitzel
          </h5>
          <p className="list-none mb-0 text-[#fff]">22/01/2022</p>
          <ul className="list-none mb-0 text-[#fff] flex flex-row items-center justify-center">
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a href="https://github.com/weitzz" target="_blank">
                <img src={githubIcon} alt="" />
              </a>
            </li>
            <li className=' flex flex-col items-center justify-between p-2.5'>
              <a
                href="https://www.linkedin.com/in/tatiane-weitzel/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
