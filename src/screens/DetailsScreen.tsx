import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'

import { COLORS } from '../theme/theme';
const DetailsScreen = () => {
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

export default DetailsScreen