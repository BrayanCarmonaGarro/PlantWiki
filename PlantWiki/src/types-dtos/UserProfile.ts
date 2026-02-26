export interface UserProfile {
  nombre: string;
  apodo: string;
  descripcion: string;
  image: string;
  cantidadPlantas: number;
  rachaStreakDias: number;
  cumpleanosDias: number;
  cantidadAmigos: number;
  plantaFavorita: string;
  plantaFavoritaImage: string;
  esPublico: boolean;
  nivelInsignia: string;
  miembro: string;
}

export interface UserProfileScreenProps {
  user: UserProfile;
  isOwnProfile?: boolean;
  onEditPress?: () => void;
  onFollowPress?: () => void;
  onMessagePress?: () => void;
}