
/*
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
*/

import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return <Stack>
    <Stack screenOptions={{ title: "Principal",headerShown: false }} />
  </Stack>
}

export default _layout