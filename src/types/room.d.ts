type TRoom = {
    id: number,
    deck: TCard[],
    players: TUser[],
    result: TResult
}

type TUser = {
    id: number,
    userName: string,
    playerHand: TCard[],
    userScore: number,
}

type TMultiRoom = {
    id: number,
    deck: TCard[],
    players: TUser[],
    maxPlayers: number,
    result: TResult
}