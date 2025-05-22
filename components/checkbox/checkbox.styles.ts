import {StyleSheet} from 'react-native'
import { colors } from '../../app/theme/colors';
import { scale } from '../../app/theme/scale';
import { FontSize } from '../../app/theme/font-size';
export const createStyles= ()=>StyleSheet.create({
container:{    
    backgroundColor:colors.checkBoxBg,
    alignSelf:'flex-start',  
  borderRadius:scale(4),
  height:scale(22),
  width:scale(22),
  alignItems:'center',
  justifyContent:'center',
},
checkIcon:{
  
}

 } );