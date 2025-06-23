import {StyleSheet} from 'react-native'
import { colors } from '../../app/theme/colors';
import { scale } from '../../app/theme/scale';
import { FontSize } from '../../app/theme/font-size';
import { typography } from '../../app/theme/typography';
export const createStyles= ()=>StyleSheet.create({
    container:{
    flexDirection:'row',
    justifyContent:'center',
       columnGap:scale(12),
      
    
    },
    input:{
      width:scale(55),
      height:scale(55),
      backgroundColor:colors.white,
      borderWidth:1,
      borderColor:colors.btnBorder,
      textAlign:'center',
      fontSize:FontSize.FONT_20Px,
      borderRadius:scale(4),
      marginHorizontal:scale(4),
      fontFamily:typography.regular,



    },
  
     } );