import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Footer = () => {
  const handleSubs = () => {
    toast.success("Thank You");
  };
  return (
    <div>
      <div className="relative bg-gray-900 ">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Exploring the Wonders of Technology and Electronics
              <br className="hidden md:block" />
              of Technology{" "}
              <span className="relative inline-block">
                and Electronics{" "}
                <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
              </span>
            </h2>
            <div
              className="flex flex-wrap justify-around my-10 text-blue-500 gap-3"
              // data-aos="flip-left"
            >

       
              <Link to={"/"}>
                <button className="hover:text-neutral link link-neutral">
                  Home
                </button>
              </Link>
              <Link to={"/allContest"}>
                <button className="hover:text-neutral ">
                All Contest
                </button>
              </Link>
              <Link to={"/Leaderboard"}>
                <button className="hover:text-neutral">
                Leaderboard
                </button>
              </Link>
              <Link to={"/progress"}>
                <button className="hover:text-neutral ">
                Progress
                </button>
              </Link>
              <Link to={"/success"}>
                <button className="hover:text-neutral ">
                Success
                </button>
              </Link>
            </div>
            <form
              onSubmit={handleSubs}
              className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
            >
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline bg-red-600"
              >
                Subscribe
              </button>
            </form>
            <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

