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
    
  
     } );