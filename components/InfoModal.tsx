import React, { useCallback, useEffect, useState } from "react";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import { data } from "autoprefixer";
import { AiOutlineClose } from "react-icons/ai";

interface InfoModalProps {
	visible?: boolean;
	onClose?: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
	const [isVisble, setIsVisble] = useState(!!visible);

	const { movieId } = useInfoModal();
	const { data = {} } = useMovie(movieId);

	useEffect(() => {
		setIsVisble(!!visible);
	}, [visible]);

	const handleClose = useCallback(() => {
		setIsVisble(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	if (!visible) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto transition duration-300 bg-black bg-opacity-80">
			<div className="relative w-auto max-w-3xl mx-auto overflow-hidden rounded-md">
				<div
					className={`${
						isVisble ? "scale-100" : "scale-0"
					} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
				>
					<div className="relative h-96">
						<video
							autoPlay
							muted
							loop
							className="w-full brightness-[60%] object-cover h-full"
							src={data?.videoUrl}
							poster={data?.thumbnailUrl}
						></video>
						<div
							className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer top-3 right-3 bg-opacity-70"
							onClick={() => {}}
						>
							<AiOutlineClose className="text-white" size={20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoModal;
