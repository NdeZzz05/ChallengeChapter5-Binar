import React, { useState } from "react";
import { useLoginUser } from "../../services/auth/login_user";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const { mutate: loginUser, isSuccess, error } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };
  console.log(Email, "email");
  console.log(Password, "password");
  console.log(isSuccess, "isSucces");
  console.log(error, "error");

  const handleLoginUser = () => {
    loginUser({
      email: Email,
      password: Password,
    });
  };

  return (
    <>
      <div>
        <input onChange={handleInput} placeholder="email" type="text" id="email" className="border" />
        <input onChange={handleInput} placeholder="password" type="password" id="password" className="border" />
        <button
          onClick={() => {
            handleLoginUser();
          }}
        >
          Login
        </button>
        <div onClick={() => navigate(`/`)}>Register</div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="text-red-600 font-extrabold flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              MovieZzz
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      onChange={handleInput}
                      placeholder="email"
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      onChange={handleInput}
                      placeholder="password"
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Forgot password?
                    </a>
                  </div> */}
                  <button
                    onClick={() => {
                      handleLoginUser();
                    }}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </a>
                    <div
                      onClick={() => {
                        navigate(`/`);
                      }}
                    >
                      register
                    </div>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
