import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlayerList from '../../PlayerList';

export default function App() {
  return (
    <View style={styles.container}>
      <PlayerList /> {/* Rendu de ton composant PlayerList */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


