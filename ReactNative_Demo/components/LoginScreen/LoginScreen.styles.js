import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#202137',
  },
  mainTitle: {
    fontFamily: 'Rock Salt',
      fontSize:60,
      color: 'white',
  },
  loginStyles: {
    top:150,
  },
    profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  loginText:{
     color: 'white',
     fontSize:15,
     alignSelf:'center'
  },
  googleButton: {
    flexDirection:'row',
    backgroundColor:'#1D1C2F',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginVertical:20,
    paddingHorizontal:40,
  },
  googleText: {
    color:'white',
    fontSize:25,
    paddingVertical:15,
    paddingLeft:20,

  }
 
});
