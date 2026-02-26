import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOW } from "../screenWrapper/ScreenWrapper.styles";

interface Props {
  descripcion: string;
}

export const DescriptionSection: React.FC<Props> = ({ descripcion }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Sobre mí</Text>
    <Text style={styles.text}>{descripcion}</Text>
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
  text: {
    fontSize: 14,
    color: COLORS.textMid,
    lineHeight: 22,
  },
});