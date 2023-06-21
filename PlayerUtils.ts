import PlayerPosition from './PlayerPosition';

const getPlayerPosition = (ultraPositionId: number): PlayerPosition => {
  switch (ultraPositionId) {
    case 10:
      return PlayerPosition.Gardien;
    case 20:
      return PlayerPosition.Defenseur;
    case 21:
      return PlayerPosition.Lateral;
    case 30:
      return PlayerPosition.MilieuDefensif;
    case 31:
      return PlayerPosition.MilieuOffensif;
    case 40:
      return PlayerPosition.Attaquant;
    default:
      return PlayerPosition.Gardien;
  }
};



export default getPlayerPosition;