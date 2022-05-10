import { Link } from "react-router-dom";
import Logo from "../../Assets/Logos/socio.png";
import SignupImg from "../../Assets/illustrations/signup.jpg";

const Signup = () => {
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
          <span className="mr-2 text-gray-600">Already have an account?</span>
          <Link to="/login" type="text" className="text-primary">
            Login
          </Link>
        </div>
        <div className="mt-10 flex flex-col justify-center h-[70vh]">
          <div className="w-1/2 mx-auto mb-12">
            <h1 className="text-3xl font-medium">Create Account</h1>
          </div>
          <form>
            <div className="flex flex-col w-1/2 mx-auto">
              <label htmlFor="username" className="font-medium pb-0.5">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
              />
            </div>
            <div className="flex flex-col w-1/2 mx-auto mt-5">
              <label htmlFor="email" className="font-medium pb-0.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
              />
            </div>
            <div className="flex justify-between w-1/2 mx-auto mt-5">
              <div className="flex flex-col">
                <label htmlFor="password" className="font-medium pb-0.5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="confirm-password"
                  className="font-medium pb-0.5"
                >
                  Confirm
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="border-none focus:outline-none rounded bg-slate-50 p-2.5"
                />
              </div>
            </div>
            <div className="flex w-1/2 mx-auto mt-5">
              <input type="checkbox" className="mr-2" />
              <p className="text-gray-500 text-sm leading-4">
                By creating an account, you agree to the Terms of Service and
                Condition, and Privacy Policy
              </p>
            </div>
            <div className="flex w-1/2 mx-auto mt-8">
              <button className="bg-primary hover:bg-secondary w-full text-white py-3 rounded">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
