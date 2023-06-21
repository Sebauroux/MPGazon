import React, { useState, useEffect } from 'react';
import { Club, Player, PlayerStats } from './types';
import { View, Text } from 'react-native';
import axios from 'axios';

interface PlayerListProps {
  clubId: number;
}

const PlayerList: React.FC<PlayerListProps> = ({ clubId }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(`https://api.mpg.football/api/data/championship-players-pool/${clubId}`);
      const playersData: Player[] = response.data;
      console.log(playersData)
      setPlayers(playersData); // Met à jour la liste des joueurs dans le state
    } catch (error) {
      console.error(error);
    }
  };

  if (players.length === 0) {
    return <Text>Chargement des joueurs...</Text>;
  }

  return (
    <View>
      <Text>Liste des joueurs</Text>
      {players.map((player) => (
        <View key={player.id}>
          <Text>{player.name}</Text>
          {/* Affiche d'autres informations du joueur en fonction des propriétés disponibles */}
        </View>
      ))}
    </View>
  );
  
};

export default PlayerList;

