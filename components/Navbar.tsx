import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
	return (
		<nav className="fixed z-40 w-full">
			<div className="flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90">
				<img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
				<div className="flex-row hidden ml-8 gap-7 lg:flex">
					<NavbarItem label="Home" />
					<NavbarItem label="Series" />
					<NavbarItem label="Films" />
					<NavbarItem label="New & Popular" />
					<NavbarItem label="Browse by languages" />
				</div>
				<div className="relative flex flex-row items-center gap-2 cursor-pointer lg:hidden">
					<p className="text-sm text-white">Browse</p>
					<BsChevronDown className="text-white transition" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
