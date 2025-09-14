import { Link } from "react-router";

const Navbar = () => (
  <header className="flex items-center justify-between max-w-[1100px] mx-auto py-8">
    <div className="flex items-center gap-3">
      <img src="public\home\desktop\logo-dark.png" className="w-40"/>
    </div>
    <nav className="hidden md:flex gap-6 text-sm text-gray-700">
      <li className="hover:underline cursor-pointer list-none">
        <Link to="/about">OUR COMPANY</Link>
        </li>
      <li className="hover:underline cursor-pointer list-none">
       <Link to="/location">LOCATIONS</Link> 
        </li>
      <li className="hover:underline cursor-pointer list-none">
        <Link to="/contact">CONTACT</Link>
        </li>
    </nav>
  </header>
);

export default Navbar