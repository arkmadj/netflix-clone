import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current);
	}, []);
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
				<div
					onClick={toggleMobileMenu}
					className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden"
				>
					<p className="text-sm text-white">Browse</p>
					<BsChevronDown
						className={`text-white transition ${
							showAccountMenu ? "rotate-180" : "rotate-0"
						}`}
					/>
					<MobileMenu visible={showMobileMenu} />
				</div>
				<div className="flex flex-row items-center ml-auto gap-7">
					<div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
						<BsSearch />
					</div>
					<div className="text-gray-200 transition cursor-pointer hover:text-gray-300">
						<BsBell />
					</div>

					<div
						onClick={toggleAccountMenu}
						className="relative flex flex-row items-center gap-2 cursor-pointer"
					>
						<div className="w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10">
							<img src="/images/default-blue.png" alt="Profile image" />
						</div>
						<BsChevronDown
							className={`text-white transition ${
								showAccountMenu ? "rotate-180" : "rotate-0"
							}`}
						/>
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
