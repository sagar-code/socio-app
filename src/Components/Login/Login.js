import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthConsumer } from "../../Contexts/AuthContext";
import Logo from "../../Assets/Logos/socio.png";
import SignupImg from "../../Assets/illustrations/signup.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { logIn } = AuthConsumer();

  const onSignUpFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError(`${error.code}`);
    }

    setLoading(false);
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="bg-slate-50 flex-1">
        <Link to="/" className="cursor-pointer">
          <img src={Logo} className="h-12 ml-48 my-3" alt="socio-logo" />
        </Link>
        <div className="h-[90vh] flex items-center justify-center">
          <img src={SignupImg} className="h-[60vh]" alt="Singup Illustration" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-end mr-48 my-3">
          <span className="mr-2 text-gray-600">Create an new account?</span>
          <Link to="/signup" type="text" className="text-primary">
            Signup
          </Link>
        </div>
        <div className="mt-10 flex flex-col justify-center h-[70vh]">
          <div className="w-1/2 mx-auto mb-12">
            <h1 className="text-3xl font-medium">Login Account</h1>
          </div>
          <form onSubmit={onSignUpFormSubmit}>
            <div className="flex flex-col w-1/2 mx-auto mt-5">
              <label htmlFor="email" className="font-medium pb-0.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
              />
            </div>
            <div className="flex flex-col w-1/2 mx-auto mt-5">
              <label htmlFor="password" className="font-medium pb-0.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
              />
            </div>
            <div className="flex w-1/2 mx-auto mt-5">
              <p className="text-secondary text-sm leading-4">{error}</p>
            </div>
            <div className="flex w-1/2 mx-auto mt-8">
              <button
                disabled={loading}
                className="bg-primary hover:bg-secondary w-full text-white py-3 rounded"
              >
                Login Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
