import {StyleSheet} from 'react-native'
import { colors } from '../../theme/colors';
import {scale} from '../../theme/scale'
import { FontSize } from '../../theme/font-size';
export const createStyles= ()=>StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.white,
},
carLogo:{
    height:scale(45),
    width:scale(45),
    borderRadius:100,
    marginLeft:-20
},
logoContainer:{
  
    padding:scale(12),
    alignSelf:'flex-start',
    margin:scale(12),
    borderRadius:100,
marginTop:scale(20)
},
overlay:{
flex:1,
paddingHorizontal:scale(18),
justifyContent:'space-between'

},
title:{
    color:colors.white,
    fontSize:FontSize.FONT_40Px,
    fontWeight:'bold'
    
},
title2:{
    fontSize:FontSize.FONT_30Px,
},
textContainer:{

},
buttonStyle:{
    marginBottom:scale(32)
},
buttonText:{
    fontWeight:'500',

},
infoText:{
    fontSize:FontSize.FONT_13Px,
    color:colors.white,

},
infoTextContainer:{
    marginBottom:scale(42),


},


})