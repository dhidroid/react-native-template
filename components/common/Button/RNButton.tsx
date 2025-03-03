import { Pressable } from 'react-native'
import React from 'react'
import { ButtonStyle } from './Button.style'
import { RNButtonProps } from 'types/button.type'
import RNText from '../Text';

const RNButton: React.FC<RNButtonProps> = ({
    title,
    onPress,
    style,
}) => {
    return (
        <Pressable onPress={onPress} style={[ButtonStyle.container, style]}>
            <RNText>{title}</RNText>
        </Pressable>
    );
};

export default RNButton;
