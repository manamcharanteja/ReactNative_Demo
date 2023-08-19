import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313250',
  },
  profileHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 30,
    color: 'white',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  incomeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 20,
    backgroundColor: '#1D1C2F',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius:10,
  },
  totalIncome: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  income: {
    fontSize: 18,
    color: 'white',
    paddingleft: 20,
    paddingBottom:5,
    fontWeight:400,
  },
  date: {
    fontSize: 14,
    color: 'white',
  },
  headerView: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:22,
    marginTop:20,
  },
  recentText: {
    fontSize:18,
    color: 'white',
    alignSelf:'center'
  }
});
