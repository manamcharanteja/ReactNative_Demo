import React from 'react'
import { Text, SafeAreaView,TouchableOpacity,View,Image, StyleSheet, FlatList } from 'react-native';
import styles from './ActivityCard.styles'


const ActivityCard = ({data}) => {
  const renderItem = ({item}) => {
    //  alert(JSON.stringify(item))
    return (
      <View style={styles.cardStyles}>
       <View style={{flexDirection:'row'}}>
         <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.profileImage}
        />
       <View style={styles.leftCard}>
      <Text style={styles.tagTitle}>{item?.title}</Text>
        <Text style={styles.sentData}>{item?.type}</Text>
      </View>
      </View>
      <View>
      <Text style={styles.tagStyles}>Tag {item?.tag}</Text>
         <Text style={styles.sentData}>Date {item?.date}</Text>
      </View>
      </View>
    )
  }
  return (
   <View style={styles.container}>
     <FlatList data={data} renderItem={renderItem}/>
    </View>
  )
}

export default ActivityCard