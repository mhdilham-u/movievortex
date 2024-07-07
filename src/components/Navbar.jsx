import { Menu, X } from "lucide-react";
import { navItems } from "../constant";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const togglerNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    // setMobileDrawerOpen(mobileDrawerOpen ? false : true);
  };
  return (
    <>
      <nav className="lg:py-7 py-6 relative z-50">
        <div className="relative text-sm">
          <div className="flex justify-between items-center">
            <img className="h-5 lg:h-6" src={logo} alt="MovieVortex" />
            <div className="hidden md:flex justify-between items-center lg:gap-[40px] gap-4">
              <ul className="flex ml-14 lg:gap-8 gap-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <Button name="Sign In" />
            </div>
            <div className="md:hidden flex flex-col justify-end">
              <button onClick={togglerNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="flex justify-end mt-1 absolute right-4">
              <ul className="flex md:hidden flex-col gap-4 bg-primary p-5 w-40">
                {navItems.map(({ href, label }, index) => (
                  <li key={index}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
