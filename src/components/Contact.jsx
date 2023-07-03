import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaEnvelopeOpenText, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          if (result.status === 200) {
            Swal.fire({
              title: "Thanks!",
              text: "We are successfully received your message.",
              icon: "success",
              confirmButtonText: "Cool",
            });
            e.target.reset();
          }
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: `${error.text}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <section id="contact">
      <div className="hero my-32 md:my-48 bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-16 md:gap-32">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-cyan-600 uppercase text-center md:text-left">
              CONTACT
            </h2>
            <h3 className="text-3xl font-bold text-center md:text-left mt-3 mb-20">
              Don&apos;t be Shy, Hit Me Up!
            </h3>

            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 bg-base-100 flex items-center justify-center rounded-full shadow-2xl">
                <FaMapLocationDot className="w-8 h-8 text-cyan-600"></FaMapLocationDot>
              </div>
              <div>
                <h4 className="text-lg font-bold">Location</h4>
                <p className="text-gray-500 text-xl cursor-pointer hover:text-cyan-500">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 bg-base-100 flex items-center justify-center rounded-full shadow-2xl">
                <FaEnvelopeOpenText className="w-8 h-8 text-cyan-600"></FaEnvelopeOpenText>
              </div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <a
                  href="mailto:muhammadwashimakram@gmail.com"
                  className="text-gray-500 text-sm md:text-xl hover:text-cyan-500"
                >
                  muhammadwashimakram@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-base-100 rounded-full shadow-2xl flex items-center justify-center">
                <FaLinkedin className="w-8 h-8 text-cyan-600"></FaLinkedin>
              </div>

              <div>
                <h4 className="text-lg font-bold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/muhammad-washim-akram-214611280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-xl hover:text-cyan-500"
                >
                  Go to LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="w-full md:w-1/2">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      placeholder="Your Messages"
                      className="textarea textarea-bordered textarea-lg w-full"
                    ></textarea>
                  </div>

                  <div className="form-control mt-8">
                    <input
                      type="submit"
                      value="Send"
                      className="btn btn-neutral hover:bg-cyan-700 transition-all"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
