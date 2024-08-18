import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import kaido from '../assets/kaidou.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={kaido} alt="Founder" />

        <h2>Karub</h2>
        <p>Hyaa Mugi</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/karub05" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/__karub__" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://facebook.com/karub05" target="blank">
            <AiFillFacebook />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
