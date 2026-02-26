
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../screenWrapper/ScreenWrapper.styles';

interface Props {
  following?: boolean;
  onFollowPress?: () => void;
  onMessagePress?: () => void;
}

export const SocialActions: React.FC<Props> = ({
  following = false,
  onFollowPress,
  onMessagePress,
}) => (
  <View style={styles.row}>
    <TouchableOpacity
      style={[styles.followBtn, following && styles.followingBtn]}
      onPress={onFollowPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.followBtnText, following && styles.followingBtnText]}>
        {following ? 'Siguiendo ✓' : 'Seguir'}
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.messageBtn} onPress={onMessagePress} activeOpacity={0.8}>
      <Text style={styles.messageBtnText}>Mensaje</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm,
  },
  followBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
  followingBtn: {
    backgroundColor: COLORS.badgeBg,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  followBtnText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15,
  },
  followingBtnText: {
    color: COLORS.primary,
  },
  messageBtn: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  messageBtnText: {
    color: COLORS.textDark,
    fontWeight: '600',
    fontSize: 15,
  },
});