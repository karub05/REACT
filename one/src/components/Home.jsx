import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>⚡ACDC⚡</h1>
          <p>Highway to Hell</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            AC/DC is a legendary rock band formed in Sydney, Australia, in 1973
            by brothers Malcolm and Angus Young. Known for their high-energy
            performances and hard-hitting rock anthems, they have become one of
            the most influential bands in music history.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            AC/DC is a pioneering hard rock band hailing from Sydney, Australia,
            formed in 1973 by brothers Malcolm and Angus Young. They are
            celebrated for their raw, powerful sound and dynamic live shows.
            With anthems like "Thunderstruck" and "High Voltage," AC/DC has
            carved out a unique place in rock history. The band's music is
            characterized by heavy guitar riffs, pounding rhythms, and
            distinctive vocals, making them a lasting icon in the rock genre.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
