import { StatusBar, StyleSheet, View } from 'react-native'

import { COLORS } from '../theme/theme';

const FavoritesScreen = () => {
  return <View style={styles.ScreenContainer}>
        <StatusBar />
    </View>;
  };

  const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    }
  })

export default FavoritesScreen