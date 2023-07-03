import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="bg-base-200 py-10 px-5 md:px-40 md:py-32">
      <div className="container mx-auto py-10 md:px-40">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-600 uppercase text-center md:text-left">
          PROJECTS
        </h2>
        <h3
          className="text-2xl md:text-3xl font-bold mt-3 mb-16 text-center md:text-left"
          style={{ lineHeight: 1.4 }}
        >
          Each Project is a Unique Piece of Development
        </h3>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full md:w-1/2 p-5">
            <a
              href="https://speedy-wheels-20484.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project project-1 w-[370px] md:w-full h-[400px]" />
            </a>
          </figure>
          <div className="w-full md:w-1/2 p-5 md:p-10">
            <h2 className="card-title justify-center">Speedy Wheels</h2>
            <p className="font-semibold text-gray-500 text-lg mt-5 mb-6 text-justify">
              Speedy Wheels Ltd. is about toy cars marketplace. In our website
              user can see image gallery of our products. Users can shop by
              category Authenticate person can add or modify products/cars.
              Authenticate user can see their added products/cars. For know
              more, our awesome blogs page.
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap md:flex-nowrap">
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                React
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Tailwind
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Firebase
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Express.js
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                MongoDB
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-10 mt-10 md:mt-12 flex-wrap md:flex-nowrap">
              <a
                href="https://github.com/Washim-Akram/speedy-wheels-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Client <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://github.com/Washim-Akram/speedy-wheels-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Server <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://speedy-wheels-20484.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Live Demo{" "}
                <FaArrowUpRightFromSquare className="h-6 w-6"></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col-reverse md:flex-row my-20">
          <div className="w-full md:w-1/2 p-5 md:p-10">
            <h2 className="card-title justify-center">The Tokyo Food</h2>
            <p className="font-semibold text-gray-500 text-lg mt-5 mb-6 text-justify">
              In our website user see top recipes of the day List of our top
              chefs and their qualification Popular japanese recipes in
              Bangladesh Users feedback and review section All details about our
              chefs For japanese food lovers, Our Awesome blog page.
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap md:flex-nowrap">
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                React
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Bootstrap
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Firebase
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Node.js
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Express.js
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-10 mt-10 md:mt-12 flex-wrap md:flex-nowrap">
              <a
                href="https://github.com/Washim-Akram/the-tokyo-food-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Client <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://github.com/Washim-Akram/the-tokyo-food-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Server <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://the-tokyo-food.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Live Demo{" "}
                <FaArrowUpRightFromSquare className="h-6 w-6"></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
          <figure className="w-full md:w-1/2 p-5">
            <a
              href="https://the-tokyo-food.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project project-2 w-[370px] md:w-full h-[400px]" />
            </a>
          </figure>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full md:w-1/2 p-5">
            <a
              href="https://language-safari-1d514.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project project-3 w-[370px] md:w-full h-[450px]" />
            </a>
          </figure>
          <div className="w-full md:w-1/2 p-5 md:p-10">
            <h2 className="card-title justify-center">Language Safari</h2>
            <p className="font-semibold text-gray-500 text-lg mt-5 mb-6 text-justify">
              Language Safari Org. is a language learning school. Clear details
              about the language courses offered, including levels, duration,
              teaching methods, and skills covered. Information about the
              language instructors, highlighting their qualifications and
              experience. An easy-to-use online registration system. Dashboard
              for Students and Instructors. Additional learning materials and
              contact information for support staff or FAQs.
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap md:flex-nowrap">
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                React
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Tailwind
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Firebase
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                Express.js
              </p>
              <p className="px-4 py-2 text-center font-bold shadow-md bg-base-100">
                MongoDB
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-10 mt-10 md:mt-12 flex-wrap md:flex-nowrap">
              <a
                href="https://github.com/Washim-Akram/language-safari-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Client <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://github.com/Washim-Akram/language-safari-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Server <span className="hidden md:block">Code</span>{" "}
                <FaGithub className="h-7 w-7"></FaGithub>
              </a>
              <a
                href="https://language-safari-1d514.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium flex items-center gap-2 hover:text-cyan-600 transition-all"
              >
                Live Demo{" "}
                <FaArrowUpRightFromSquare className="h-6 w-6"></FaArrowUpRightFromSquare>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
