import { Link } from "react-router";

const JoinUsSection = () => {
  return (
    <section className="relative py-20">
      <div className="container">
        <h4 className="text-3xl font-bold uppercase">Why Join Us ?</h4>
        <hr className="mt-2 mb-10" />

        <div className="grid grid-cols-4 gap-7">
          <div className="col">
            <Link
              to="/"
              className="flex items-center justify-center w-full h-full min-h-[400px] bg-[#34c759] rounded-4xl rounded-br-none"
            >
              <h6 className="text-3xl font-semibold drop-shadow-lg text-white w-full text-center max-w-[200px] mx-auto">
                Live Discussions
              </h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="flex items-center justify-center w-full h-full min-h-[400px] bg-[#af71ff] rounded-4xl rounded-br-none"
            >
              <h6 className="text-3xl font-semibold drop-shadow-lg text-white w-full text-center max-w-[200px] mx-auto">
                Expert Opinions
              </h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="flex items-center justify-center w-full h-full min-h-[400px] bg-[#5c92ff] rounded-4xl rounded-br-none"
            >
              <h6 className="text-3xl font-semibold drop-shadow-lg text-white w-full text-center max-w-[200px] mx-auto">
                Global Community
              </h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="flex items-center justify-center w-full h-full min-h-[400px] bg-[#ffd60a] rounded-4xl rounded-br-none"
            >
              <h6 className="text-3xl font-semibold drop-shadow-lg text-white w-full text-center max-w-[200px] mx-auto">
                Real-Time Updates
              </h6>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 text-center">
          <Link
            to="/"
            className="inline-block font-semibold border border-solid border-black bg-black text-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-white hover:border-white hover:text-black"
          >
            How To Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
