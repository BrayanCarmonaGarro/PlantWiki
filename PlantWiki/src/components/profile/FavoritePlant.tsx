import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOW } from '../screenWrapper/ScreenWrapper.styles';
import type { UserProfile } from '@/src/types-dtos/UserProfile';

interface Props {
  user: Pick<UserProfile, 'plantaFavorita' | 'plantaFavoritaImage'>;
}

export const FavoritePlant: React.FC<Props> = ({ user }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Planta favorita</Text>
    <View style={styles.row}>
      <Image
        source={{ uri: user.plantaFavoritaImage }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.nombre}>{user.plantaFavorita}</Text>
        <Text style={styles.sub}>Mi favorita de todos los tiempos</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    ...SHADOW.card,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.badgeBg,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textDark,
    fontStyle: 'italic',
  },
  sub: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
});