import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
 
    container:{
      flex:1,
      justifyContent:"center",
      /* paddingTop: Constants.statusBarHeight, */      
    },
    imagemFundo:{
      flex:1,
      alignItems:"center"
     },

    /* login__msg: (text='none') => ({      
      fontSize:22,
      color:"#A60A0F", 
      top:100,
      marginBottom:15,
      width:"100%",
      height:50,
      padding:10,
      backgroundColor:"#ccc",
      borderRadius:3 ,
      display:text
    }), */

    titulo:{
      margin:50,
      top:85,
    },
    texto:{
      color:"#fff",
      fontSize:22,
      fontWeight:"bold",      
    },
  
    input1:{
      backgroundColor:"#fff",
      borderColor:"#fff",
      borderRadius:3,
      padding:10,
      color:"#B00",
      fontSize:18,   
      margin:10,
      width:280,
      top:50
    },

    mark:{
      flexDirection:"row",
      padding:10,
      top:50
    },

    checkbox:{
      marginEnd:20,
      borderColor:"#fff",
      width:20,
      height:20,     
    },
    
    texto1:{
      color:"#fff",
      fontSize:14,
      marginStart:10,
      fontWeight:"bold",
    },

    botao:{
      backgroundColor:"#A60A0F",
      width:150,
      height:50,
      borderRadius:8,
      alignItems:"center",
      justifyContent:"center",
      top:60
    },
    
    botaotexto:{
      color:"#fff",
      fontSize:26,
      fontWeight:"bold",
      alignItems:"center",
      justifyContent:"center"
    },

    registro:{
        
        flexDirection:"row",
        top:50,        
        padding:20,
        justifyContent:"center",
    },

    cadastro:{
        flexDirection:"row",
        width:200,
    },

    recuperar:{
        fontSize:16,
        fontWeight:"bold",
        color:"#fff"
    },

    bandeiras:{
       flexDirection:"row",
       top:60,
       justifyContent:"center"        
    },

    bd1:{
        marginRight:5,
        top:60

    },

    bd2:{
        marginLeft:5,
        top:60
    }

   })
  