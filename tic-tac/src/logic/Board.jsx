import { WINNER_COMBOS } from '../constants';

export const checkWinner = (boardToCheck) => {
	//Se revisa todas la combinaciones para ver si hay ganador
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a];
		}
	}
	return null;
};
