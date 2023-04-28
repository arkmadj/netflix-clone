import { signOut } from "next-auth/react";

export default function Home() {
	return (
		<>
			<h1>Netflix Clone</h1>
			<button onClick={() => signOut()} className="w-full h-10 bg-white">
				Logout
			</button>
		</>
	);
}
