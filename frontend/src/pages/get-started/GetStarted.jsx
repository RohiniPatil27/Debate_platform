import { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordRequest from "./ForgotPasswordRequest";

const GetStarted = () => {
  const [page, setPage] = useState("login");

  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="flex justify-center w-full max-w-[800px] mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full grid grid-cols-2">
              {page === "login" && <Login setPage={setPage} />}
              {page === "register" && <Register setPage={setPage} />}
              {page === "forgot-password" && (
                <ForgotPassword setPage={setPage} />
              )}
              {page === "forgot-password-request" && (
                <ForgotPasswordRequest setPage={setPage} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
