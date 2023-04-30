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
							onClick={() => {
								handleClose;
							}}
						>
							<AiOutlineClose className="text-white" size={20} />
						</div>
						<div className="absolute bottom-[10%] left-10">
							<p className="h-full mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
								{data?.title}
							</p>
							<div className="flex flex-row items-center gap-4">
								<PlayButton movieId={data?.id} />
								<FavoriteButton movieId={data?.id} />
							</div>
						</div>
					</div>
					<div className="px-12 py-8">
						<p className="text-lg font-semibold text-green-400">New</p>
						<p className="text-lg text-white">{data?.duration}</p>
						<p className="text-lg text-white">{data?.genre}</p>
						<p className="text-lg text-white">{data?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoModal;
