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
    marginTop:scale(10),

},
textLogo:{
    fontSize:FontSize.FONT_24Px,
    color:colors.black,
  
},
textContainer:{
paddingTop:scale(38)
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
})