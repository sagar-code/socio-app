import { Link } from "react-router-dom";

import { AuthConsumer } from "../../Contexts/AuthContext";
import Logo from "../../Assets/Logos/socio.png";
import Signup from "../../Assets/Icons/singup.png";

const Navbar = () => {
  const { currentUser } = AuthConsumer();
  console.log(currentUser);
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={Logo} className="h-12" alt="socio-logo" />
        </div>
        <div>
          {currentUser.email ? (
            <Link
              to="/profile"
              type="text"
              className="border-2 rounded-md border-primary px-4 py-2 text-primary hover:border-orange-400"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/signup"
              type="text"
              className="border-2 rounded-md border-primary px-4 py-2 text-primary hover:border-orange-400"
            >
              <img src={Signup} alt="signup-icon" className="inline h-4 pr-2" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
