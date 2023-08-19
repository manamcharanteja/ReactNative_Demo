import React from 'react'
import { Text, SafeAreaView,TouchableOpacity,View,Image, StyleSheet } from 'react-native';
import styles from './DetailCard.styles'


const DetailCard = ({title, price}) => {
  return (
   <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
        <Text  style={styles.price}>{price}</Text>
    </View>
  )
}

export default DetailCard