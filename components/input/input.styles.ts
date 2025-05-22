import {StyleSheet} from 'react-native'
import { colors } from '../../app/theme/colors';
import { scale } from '../../app/theme/scale';
import { FontSize } from '../../app/theme/font-size';
export const createStyles= ()=>StyleSheet.create({
container:{
    marginTop:scale(12),
    borderColor:colors.border,
    borderWidth:1,
   borderRadius:scale(10),
   backgroundColor:colors.white,
   paddingVertical:scale(2),
   flexDirection:'row',
   alignItems:'center',
   justifyContent:"space-between",
   paddingRight:scale(10), 


},

input:{
fontSize:FontSize.FONT_13Px,
fontWeight:'300',
color:colors.black,
paddingHorizontal:scale(12),
paddingVertical:scale(2),
flex:1,
marginLeft:scale(10),

},
eye:{
height:scale(22),
width:scale(22),



},
 } );