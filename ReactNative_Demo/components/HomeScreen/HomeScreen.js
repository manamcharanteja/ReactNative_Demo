import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './HomeScreen.styles';
import DetailCard from '../DetailCard';
import ActivityCard from '../ActivityCard'
import {data} from '../../utils/Data'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHead}>
        <Text style={styles.profileText}>Good Morning</Text>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.cards}>
        <DetailCard title={'Balance'} price={'$200.16'} />
        <DetailCard title={'Expense'} price={'$200.16'} />
      </View>
      <View style={styles.incomeCard}>
        <View>
          <Text style={styles.income}>Total Income</Text>
          <Text style={styles.date}>upt !4 Feb 2023</Text>
        </View>
        <Text style={styles.totalIncome}>$4400.14</Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.recentText}>Recent Activity</Text>
       <Text style={styles.recentText}>See all</Text>
      </View>
      <ActivityCard data={data} />
    </SafeAreaView>
  );
};

export default HomeScreen;
