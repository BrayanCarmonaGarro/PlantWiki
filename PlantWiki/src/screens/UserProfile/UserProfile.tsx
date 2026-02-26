/*
import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/components/screenWrapper/ScreenWrapper'

const UserProfile = () => {
  return (
    <ScreenWrapper>
        <Text>UserProfile</Text>
    </ScreenWrapper>
    
  );
}

export default UserProfile
*/
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import ScreenWrapper from '@/src/components/screenWrapper/ScreenWrapper';
import { COLORS, SPACING } from '@/src/components/screenWrapper/ScreenWrapper.styles';

import { ProfileHeader } from '@/src/components/profile/ProfileHeader';
import { StatsRow } from '@/src/components/profile/StatsRow';
import { DescriptionSection } from '@/src/components/profile/DescriptionSection';
import { FavoritePlant } from '@/src/components/profile/FavoritePlant';
import { ProfileInfoSection } from '@/src/components/profile/ProfileInfoSection';
import { SocialActions } from '@/src/components/profile/SocialActions';
import type { UserProfile } from '@/src/types-dtos/UserProfile';

// Mock hasta que conectes tu store/API
const mockUser: UserProfile = {
  nombre: 'Valentina Torres',
  apodo: '@valeplanta',
  descripcion: 'Amante de las suculentas y helechos 🌿 Coleccionando plantas raras desde 2019.',
  image: 'https://i.pravatar.cc/300?img=47',
  cantidadPlantas: 42,
  rachaStreakDias: 18,
  cumpleanosDias: 5,
  cantidadAmigos: 134,
  plantaFavorita: 'Monstera deliciosa',
  plantaFavoritaImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Monstera_deliciosa_cl.jpg/800px-Monstera_deliciosa_cl.jpg',
  esPublico: true,
  nivelInsignia: 'Botanista Pro',
  miembro: 'Enero 2022',
};

interface Props {
  user?: UserProfile;
  isOwnProfile?: boolean;
}

const UserProfileScreen: React.FC<Props> = ({
  user = mockUser,
  isOwnProfile = true,
}) => {
  const [following, setFollowing] = useState(false);

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          user={user}
          onEditPress={() => console.log('edit')}
        />

        <StatsRow user={user} />

        <DescriptionSection descripcion={user.descripcion} />

        <FavoritePlant user={user} />

        <ProfileInfoSection user={user} />

        {!isOwnProfile && (
          <SocialActions
            following={following}
            onFollowPress={() => setFollowing(prev => !prev)}
            onMessagePress={() => console.log('message')}
          />
        )}

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
  },
  content: {
    paddingBottom: SPACING.lg,
  },
  bottomSpacer: {
    height: SPACING.xl,
  },
});

export default UserProfileScreen;