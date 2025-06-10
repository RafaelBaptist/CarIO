import {StyleSheet} from 'react-native'
import { colors } from '../../app/theme/colors';
import { scale } from '../../app/theme/scale';
import { FontSize } from '../../app/theme/font-size';
import { typography } from '../../app/theme/typography';
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
       paddingHorizontal:scale(18),
    
    
    },
    
    text:{
    fontSize:FontSize.FONT_14Px,
    fontFamily:typography.regular,
    fontWeight:'300',
    color:colors.placeholder,
    paddingHorizontal:scale(12),
    paddingVertical:scale(12),
    flex:1,
    marginLeft:scale(10),
    
    },
    bottomSheet:{
       backgroundColor:colors.white,
       flex:0.35,
       borderRadius:scale(12),
       paddingTop:scale(12)
    },
    itemContainer:{
        paddingVertical:scale(2),
        paddingHorizontal:scale(12),
 
    },
     } );