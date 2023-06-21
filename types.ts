export interface Club {
    id: number;
    name: string;
  }
  
  export interface Player {
    id: number;
    name: string;
    ultraPosition: number;
  }
  
  export interface PlayerStats {
    name: string;
    goals: number;
    assists: number;
    // Ajoute d'autres propriétés en fonction des statistiques disponibles
  }

  