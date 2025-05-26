import { ViewStyle,TextStyle } from "react-native";
import {JSX} from 'react';

export interface IButtonProps{
onPress?:(e:any) => void;

    text:string;
    buttonStyles?:ViewStyle;
    textStyles?:TextStyle;
    component?: JSX.Element;
}