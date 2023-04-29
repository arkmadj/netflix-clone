import React, { useCallback, useMemo } from "react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({movieId}) => {
	return <div>FavoriteButton</div>;
};

export default FavoriteButton;
