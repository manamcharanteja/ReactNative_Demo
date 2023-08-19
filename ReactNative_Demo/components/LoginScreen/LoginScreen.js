
import React from 'react'
import { Text, SafeAreaView,TouchableOpacity,View,Image, StyleSheet } from 'react-native';
import styles from './LoginScreen.styles'


const LoginScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Welcome</Text>
      <View style={styles.loginStyles}>
      <Text style={styles.loginText}>LogIn or SignUp, using  </Text>
      <TouchableOpacity style={styles.googleButton}>
       <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.profileImage}
        />
      <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen