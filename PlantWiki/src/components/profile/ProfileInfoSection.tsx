
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOW } from '../screenWrapper/ScreenWrapper.styles';
import type { UserProfile } from '@/src/types-dtos/UserProfile';

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => (
  <View style={styles.row}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

interface Props {
  user: Pick<UserProfile, 'esPublico' | 'miembro' | 'cumpleanosDias'>;
}

export const ProfileInfoSection: React.FC<Props> = ({ user }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Información</Text>

    <InfoRow
      icon="🔒"
      label="Privacidad"
      value={user.esPublico ? 'Perfil público' : 'Perfil privado'}
    />
    <View style={styles.divider} />
    <InfoRow icon="📅" label="Miembro desde" value={user.miembro} />
    <View style={styles.divider} />
    <InfoRow icon="🎂" label="Cumpleaños" value={`En ${user.cumpleanosDias} días`} />
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
    paddingVertical: SPACING.xs,
    gap: SPACING.sm,
  },
  icon: {
    fontSize: 16,
    width: 24,
    textAlign: 'center',
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textMid,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 4,
  },
});