import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const COLORS = {
  bg: '#F7F4EE',
  surface: '#FFFFFF',
  primary: '#3A6B35',
  primaryLight: '#6A9E56',
  accent: '#C8A951',
  textDark: '#1E2A1A',
  textMid: '#5C6B55',
  textLight: '#9BAA90',
  border: '#E2DDD3',
  badgeBg: '#EDF4E7',
  danger: '#C0392B',
  streak: '#E8A838',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const RADIUS = {
  sm: 8,
  md: 16,
  lg: 20,
  full: 999,
} as const;

export const SHADOW = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
} as const;