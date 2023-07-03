import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [skillImages, setSkillImages] = useState([]);

  useEffect(() => {
    fetch("./skills-set-images.json")
      .then((res) => res.json())
      .then((data) => setSkillImages(data));
  }, []);

  // https://assets8.lottiefiles.com/packages/lf20_qoqtgkus.json
  // https://assets2.lottiefiles.com/packages/lf20_kAhPVOiVD5.json
  // https://assets8.lottiefiles.com/private_files/lf30_igfaivqx.json
  // https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json
  // https://assets6.lottiefiles.com/packages/lf20_nOfkZot060.json
  // https://assets8.lottiefiles.com/packages/lf20_1dbuqkPsnJ.json
  // https://assets8.lottiefiles.com/packages/lf20_lNicTz/FrontEndChile/data.json

  return (
    <section className="mt-20 md:mt-0 hero min-h-screen bg-base-200" id="home">
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 md:p-20">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_yMrzAd.json"
              // style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>

          <div className="w-full md:w-1/2">
            <h1
              style={{ lineHeight: 1.2 }}
              className="text-center md:text-start text-4xl md:text-6xl font-bold"
            >
              Front-End React Developer
            </h1>
            <p className="py-6 text-[18px] text-center md:text-start">
              Hi, I&apos;m Wasim Akram. A Passionate Front-End React Developer
              Based in Dhaka, Bangladesh.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-5">
              <a
                href="https://www.linkedin.com/in/muhammad-washim-akram-214611280/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-8 w-8 hover:text-cyan-600 transition-all"></FaLinkedin>
              </a>
              <a
                href="https://github.com/Washim-Akram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-8 w-8 hover:text-cyan-600 transition-all"></FaGithub>
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <a
                href="https://drive.google.com/uc?export=download&id=1E_Ny98lx8e8XpzP_3ehUNcNS1KjsisUy"
                download
              >
                <button className="btn btn-neutral mt-6 md:mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 duration-300">
                  Download Resume <FaDownload></FaDownload>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center">
          <h3 className="text-3xl font-bold hidden md:block">
            Skills <br /> <span className="text-4xl">Set : </span>
          </h3>

          <h3 className="text-3xl font-bold block md:hidden">Skills Set</h3>

          <div className="divider lg:divider-horizontal"></div>

          <Marquee
            pauseOnHover={true}
            speed={50}
            className="max-w-[360px] md:max-w-6xl cursor-grab"
          >
            {skillImages.map((skillImage) => (
              <div key={skillImage?.image_id} className="avatar me-5">
                <div className="w-24 rounded-xl bg-base-100 shadow-md">
                  <img src={skillImage?.image_url} alt="Skill Image" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
