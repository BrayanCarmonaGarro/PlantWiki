import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOW } from "../screenWrapper/ScreenWrapper.styles";
import { UserProfile } from '@/src/types-dtos/UserProfile';

interface StatCardProps {
  emoji: string;
  value: string | number;
  label: string;
  accentColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ emoji, value, label, accentColor }) => (
  <View style={[styles.card, accentColor ? { borderTopColor: accentColor } : undefined]}>
    <Text style={styles.emoji}>{emoji}</Text>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

interface StatsRowProps {
  user: Pick<UserProfile, 'cantidadPlantas' | 'rachaStreakDias' | 'cantidadAmigos'>;
}

export const StatsRow: React.FC<StatsRowProps> = ({ user }) => (
  <View style={styles.row}>
    <StatCard
      emoji="🪴"
      value={user.cantidadPlantas}
      label="Plantas"
      accentColor={COLORS.primaryLight}
    />
    <StatCard
      emoji="🔥"
      value={`${user.rachaStreakDias}d`}
      label="Racha"
      accentColor={COLORS.streak}
    />
    <StatCard
      emoji="👥"
      value={user.cantidadAmigos}
      label="Amigos"
      accentColor={COLORS.accent}
    />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderTopWidth: 3,
    borderTopColor: COLORS.border,
    ...SHADOW.card,
  },
  emoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textDark,
    letterSpacing: -0.5,
  },
  label: {
    fontSize: 11,
    color: COLORS.textLight,
    fontWeight: '500',
    marginTop: 2,
  },
});