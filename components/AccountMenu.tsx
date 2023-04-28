import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
	visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
	if (!visible) return null;
	return (
		<div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
			<div className="flex flex-col gap-3">
				<div className="flex flex-row items-center w-full gap-3 px-3 group/item">
					<img
						src="/images/default-blue.png"
						alt="Profile image"
						className="w-8 rounded-md"
					/>
					<p className="text-sm text-white group-hover/item:underline">
						Username
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccountMenu;
