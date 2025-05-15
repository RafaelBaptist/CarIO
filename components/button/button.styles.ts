import {StyleSheet} from 'react-native'
import { colors } from '../../app/theme/colors';
import { scale } from '../../app/theme/scale';
import { FontSize } from '../../app/theme/font-size';
export const createStyles= ()=>StyleSheet.create({
container:{
    
    backgroundColor:colors.button,
    borderRadius:scale(30),
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:scale(14),
},
text:{
    color:colors.white,
    fontSize:FontSize.FONT_14Px,
    fontWeight:'400'
},

 } );