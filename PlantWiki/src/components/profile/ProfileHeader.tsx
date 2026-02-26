import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { COLORS, SPACING, RADIUS } from "../screenWrapper/ScreenWrapper.styles";
import { UserProfile } from '@/src/types-dtos/UserProfile';

interface Props {
  user: UserProfile;
  onEditPress?: () => void;
}

export const ProfileHeader: React.FC<Props> = ({ user, onEditPress }) => (
  <View style={styles.container}>
    <View style={styles.bgDecoration} />

    <View style={styles.avatarWrapper}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <View
        style={[
          styles.statusDot,
          { backgroundColor: user.esPublico ? COLORS.primaryLight : COLORS.danger },
        ]}
      />
    </View>

    <Text style={styles.nombre}>{user.nombre}</Text>
    <Text style={styles.apodo}>{user.apodo}</Text>

    <View style={styles.badgeRow}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>🏅 {user.nivelInsignia}</Text>
      </View>
      <View style={[styles.badge, styles.badgeBirthday]}>
        <Text style={styles.badgeText}>🎂 Cumple en {user.cumpleanosDias}d</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.editBtn} onPress={onEditPress} activeOpacity={0.8}>
      <Text style={styles.editBtnText}>Editar perfil</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: SPACING.lg,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: SPACING.md,
  },
  bgDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    opacity: 0.08,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: SPACING.sm,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: RADIUS.full,
    borderWidth: 4,
    borderColor: COLORS.surface,
    backgroundColor: COLORS.border,
  },
  statusDot: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 14,
    height: 14,
    borderRadius: RADIUS.full,
    borderWidth: 2,
    borderColor: COLORS.surface,
  },
  nombre: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  apodo: {
    fontSize: 14,
    color: COLORS.textMid,
    marginBottom: SPACING.sm,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: SPACING.xs,
    marginBottom: SPACING.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
  },
  badgeBirthday: {
    backgroundColor: '#FFF8E7',
  },
  badgeText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  editBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  editBtnText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
