import DarkMode from "./dark-mode";
import LinksDropdown from "./links-dropdown";
import Logo from "./logo";
import Navsearch from "./navsearch";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Navsearch />
        <div className="flex gap-4 items-center ">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
