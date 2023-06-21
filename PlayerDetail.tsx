import React, { useEffect, useState } from 'react';
import { Club, Player, PlayerStats } from './types';
import { View, Text } from 'react-native';
import axios from 'axios';

interface PlayerDetailProps {
  playerId: number;
}

const PlayerDetail: React.FC<PlayerDetailProps> = ({ playerId }) => {
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);

  useEffect(() => {
    fetchPlayerStats();
  }, []);

  const fetchPlayerStats = async () => {
    try {
      const response = await axios.get(
        `https://api.mpg.football/api/data/championship-player-stats/mpg_championship_player_${playerId}/2022`
      );
      const playerStatsData: PlayerStats = response.data;
      setPlayerStats(playerStatsData); // Met à jour les statistiques du joueur dans le state
    } catch (error) {
      console.error(error);
    }
  };

  if (!playerStats) {
    return <Text>Chargement des statistiques du joueur...</Text>;
  }

  return (
    <View>
      <Text>Fiche détaillée du joueur</Text>
      {/* Affiche les informations du joueur */}
      <Text>Nom : {playerStats.name}</Text>
      <Text>Buts : {playerStats.goals}</Text>
      <Text>Passes décisives : {playerStats.assists}</Text>
      {/* Ajoute d'autres informations du joueur en fonction des propriétés disponibles */}
    </View>
  );
};

export default PlayerDetail;

