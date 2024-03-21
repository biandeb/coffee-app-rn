import { StatusBar, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../theme/theme';

const OrderHistoryScreen = () => {
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

export default OrderHistoryScreen