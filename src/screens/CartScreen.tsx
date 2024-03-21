import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar';

import { COLORS } from '../theme/theme';

const CartScreen = () => {
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

export default CartScreen