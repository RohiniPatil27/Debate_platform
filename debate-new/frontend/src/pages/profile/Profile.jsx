import { useSelector } from "react-redux";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const avatar = `${import.meta.env.VITE_API_BASE}/${user.avatar}`.replace(
    "/public",
    ""
  );

  return (
    <section className="py-10">
      <div className="container">
        <div className="w-full max-w-[800px] mx-auto">
          <div className="grid grid-cols-2 gap-7">
            <div className="bg-[#004aad] h-full p-10 rounded-lg">
              <div className="relative rounded-xl rounded-br-none overflow-hidden w-30 h-30 mx-auto">
                <img src={avatar} alt={user.username} />
              </div>
              <div className="mx-auto mt-10 text-center">
                <Link
                  to="/room"
                  className="font-semibold border border-solid border-white bg-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-[#004aad] hover:text-white"
                >
                  Create Debate
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5">Hey {user.firstName}!</h2>
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white p-5 shadow-lg rounded-lg rounded-br-none">
                  <h6 className="text-sm font-bold text-gray-700 mb-3">
                    Debates Created
                  </h6>
                  <h5 className="text-4xl font-bold text-[#004aad]">05</h5>
                </div>

                <div className="bg-white p-5 shadow-lg rounded-lg rounded-bl-none">
                  <h6 className="text-sm font-bold text-gray-700 mb-3">
                    Debates Created
                  </h6>
                  <h5 className="text-4xl font-bold text-[#004aad]">05</h5>
                </div>

                <div className="bg-white p-5 shadow-lg rounded-lg rounded-tr-none">
                  <h6 className="text-sm font-bold text-gray-700 mb-3">
                    Debates Created
                  </h6>
                  <h5 className="text-4xl font-bold text-[#004aad]">05</h5>
                </div>

                <div className="bg-white p-5 shadow-lg rounded-lg rounded-tl-none">
                  <h6 className="text-sm font-bold text-gray-700 mb-3">
                    Debates Created
                  </h6>
                  <h5 className="text-4xl font-bold text-[#004aad]">05</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
