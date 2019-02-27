type TCard = {
    name: string;
    suit: string;
    value: number;
    imageSource: string;
    cardBack: string;
};

type TResult = {
    isShownButtons: boolean;
    winner: string;
    score: TScore[];
    isShownCards: boolean;
};

// type TPlayerHands = {
//     humanPlayerHand: TCard[];
//     computerPlayerHand: TCard[];
// }

type TScore = {
    userName: string;
    userScore: number;
};