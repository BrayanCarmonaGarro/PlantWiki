import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './ScreenWrapper.styles';

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <View style={styles.container}>{children}</View>;
} 