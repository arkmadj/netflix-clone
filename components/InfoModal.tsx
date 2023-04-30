import React, { useCallback, useEffect, useState } from "react";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
	visible?: boolean;
	onClose?: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
	const [isVisble, setIsVisble] = useState(!!visible);

	const { movieId } = useInfoModal();
	const {
		data: {},
	} = useMovie(movieId);

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

	return <div>InfoModal</div>;
};

export default InfoModal;
