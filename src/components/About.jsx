import { Player } from "@lottiefiles/react-lottie-player";
const About = () => {
  return (
    <section id="about" className="my-24 md:my-0">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full md:w-1/2">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/private_files/lf30_igfaivqx.json"
              //   style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-cyan-600 uppercase text-center md:text-left">
              ABOUT ME
            </h2>
            <h3
              className="text-3xl font-bold my-4 block md:hidden text-center"
              style={{ lineHeight: 1.4 }}
            >
              A Dedicated Front-End Developer Based in Dhaka, Bangladesh
            </h3>
            <h3
              className="text-3xl font-bold my-4 hidden md:block"
              style={{ lineHeight: 1.4 }}
            >
              A Dedicated Front-End Developer <br /> Based in Dhaka, Bangladesh
            </h3>
            <p className="text-gray-500 text-lg text-justify">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and
              Bootstrap. I excel in designing and maintaining responsive
              websites that offer a smooth user experience. My expertise lies in
              crafting dynamic, engaging interfaces through writing clean and
              optimized code and utilizing cutting-edge development tools and
              techniques. With a commitment to continuous learning, I am poised
              to make a significant impact and grow as a professional in web
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
