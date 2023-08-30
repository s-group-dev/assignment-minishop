import React, { PropsWithChildren } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Header = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation();

  const renderBackButton = () => (
    <View style={styles.goBack}>
      <Button title={'< Back'} onPress={() => navigation.goBack()} />
    </View>
  );

  return (
    <View style={styles.headerWrapper}>
      {navigation.canGoBack() && renderBackButton()}
      <Text style={styles.header}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    marginBottom: 16,
  },

  header: {
    fontSize: 32,
  },

  goBack: {
    left: 0,
    alignItems: 'flex-start',
  },
});

export default Header;
