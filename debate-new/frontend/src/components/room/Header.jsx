import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-lg font-bold">Education</h2>
          <Link to="/" className="text-gray-500 text-sm font-medium">
            Go Back
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
