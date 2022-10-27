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
          <h1>TechyStar</h1>
          <p>Solution to all your Problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            cupiditate alias rerum nulla nobis facilis voluptas maiores aut
            voluptate voluptatum vitae, possimus deserunt necessitatibus facere
            animi itaque laborum. Optio aliquid ut libero deleniti porro ullam
            mollitia soluta, voluptatum error cupiditate reprehenderit similique
            quam ducimus beatae, consequuntur hic molestias explicabo temporibus
            asperiores veritatis possimus nemo. Quaerat reprehenderit porro, quo
            ipsa pariatur odit ullam molestiae eligendi non voluptas debitis
            quidem incidunt placeat at in optio quia asperiores id nostrum
            perspiciatis atque ab ducimus accusantium. Iste unde necessitatibus
            ducimus, excepturi temporibus laboriosam veritatis aliquam est id,
            quod consequatur dolorem deserunt, aperiam vero sapiente!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
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
