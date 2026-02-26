import { View, Text } from 'react-native'
import React from 'react'
import UserProfile from '@/src/screens/UserProfile/UserProfile'
import { styles } from '@/src/screens/UserProfile/UserProfile.styles'

const index = () => {
  return (
    <View style={styles.container}>
      <UserProfile />
    </View>
  )
}


export default index