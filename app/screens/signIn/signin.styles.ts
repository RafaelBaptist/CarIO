import {StyleSheet} from 'react-native'
import { colors } from '../../theme/colors';
 import {scale} from '../../theme/scale'
import { FontSize } from '../../theme/font-size';

export const createStyles= ()=>StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.background,
    paddingHorizontal:scale(18),
},
carLogo:{

    height:scale(45),
    width:scale(45),
    borderRadius:100,
   
},
flexRow:{
    flexDirection:'row',
    alignItems:'center',
    columnGap:scale(12),
    paddingVertical:scale(12),
   
 

},
textLogo:{
    fontSize:FontSize.FONT_24Px,
    color:colors.black,
  
},
textContainer:{
paddingTop:scale(38),
marginBottom:scale(12),

},
textStyle:{
    fontSize:FontSize.FONT_30Px,
    color:colors.black,
    fontWeight:'800'
  
},
textRemember:{
    fontSize:FontSize.FONT_12Px,
    color:colors.placeholder,
    fontWeight:'500',
   
},
colG2:{
    columnGap:scale(2),
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    

    
},
forgotContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

},
inputContainer:{
    
    rowGap:scale(6),
    
},
outlineButtonBg:{
    backgroundColor:colors.outlineButtonBg,
    borderWidth:1,
    borderColor:colors.button
},
outlineButtonText:{
    color:colors.black,
    fontWeight:'600'
},
buttonText:{
    fontWeight:'600',
},
buttonContainer:{
    rowGap:scale(14),
    marginTop:scale(12),
},
borderContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    columnGap:scale(12),
    marginTop:scale(18)

},
orText:{
    fontSize:FontSize.FONT_12Px,
    width:scale(15),
    color:colors.placeholder,
},
orBorder:{
    height:1,
    flex:1,
    backgroundColor:colors.border,
},
buttonStyle:{
    flexDirection:'row',
    columnGap:scale(12),

},
iconButtonStyle:{
   
    backgroundColor:colors.outlineButtonBg,
    borderWidth:1,
    borderColor:colors.button,
    flexDirection:'row',
    columnGap:scale(8),
},
mt14:{
    marginTop:scale(14)
},
accountContainer:{
    marginVertical:scale(4),
  
    alignItems:'center'
},
dhText:{
color:colors.placeholder,
fontWeight:'400',
},
})