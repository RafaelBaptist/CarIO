import {StyleSheet} from 'react-native'
import { colors } from '../../theme/colors';
import { scale } from '../../theme/scale';
import { FontSize } from '../../theme/font-size';
import { typography } from '../../theme/typography';

export const createStyles= ()=>StyleSheet.create({
container:{
    flex:1,
    backgroundColor: colors.background,

},

carLogo: {
    height: scale(45),
    width: scale(45),
    borderRadius: 100,
  },   
   flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(12),
    paddingVertical: scale(12),
  },
  titleStyle: {
    fontSize: FontSize.FONT_24Px,
    color: colors.black,
    flex: 1,
    fontFamily: typography.bold,
  },
header:{
    borderBottomWidth:1,
    borderBottomColor:colors.border,
    paddingHorizontal:scale(18),
},
})