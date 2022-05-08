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
          <Link to="/login" type="text">
            Login
          </Link>
        </div>
        <div>Form</div>
      </div>
    </div>
    // <div className="w-screen h-screen">
    //   <div className="container mx-auto py-3 h-screen flex justify-between">
    //     <div className="w-[50vw] h-full">
    //       <Link to="/" className="cursor-pointer">
    //         <img src={Logo} className="h-12" alt="socio-logo" />
    //       </Link>
    //       <img
    //         src={SignupImg}
    //         alt="Singup Illustration"
    //         className="h-[60vh] mt-36"
    //       />
    //     </div>
    //     <div className="w-[50vw]">
    //       <div className="text-right">
    //         <span className="mr-2 text-gray-600">Already have an account?</span>
    //         <Link to="/login" type="text">
    //           Login
    //         </Link>
    //       </div>
    //       <div>
    //         <form>all the form goes here</form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
