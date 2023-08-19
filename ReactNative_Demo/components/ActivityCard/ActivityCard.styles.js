import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 10,
  },
    profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignSelf:'center'
  },
  sentData: {color:'white',fontSize:12, paddingTop:10},
  tagStyles: {color:'white',fontSize:15},
  tagTitle: {color:'white',fontSize:20},
  cardStyles: {flexDirection:'row', justifyContent:'space-between',marginVertical:10,  backgroundColor: '#1D1C2F',paddingVertical:15,borderRadius:10, paddingHorizontal: 10,},
  leftCard: {
    paddingLeft: 10,
  }
});
