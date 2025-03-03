import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../../themes/ThemeProvider';


/**
 * A customizable text component that adapts to the current theme.
 * It supports all native `<Text>` props.
 *
 * @param {TextProps} props - All standard React Native Text properties.
 * @returns {JSX.Element} A themed text element.
 *
 * @example
 * <TextComponent numberOfLines={1} adjustsFontSizeToFit>
 *    This is a dynamic text!
 * </TextComponent>
 */
const RNText: React.FC<TextProps> = ({ style, children, ...props }) => {
    const { theme } = useTheme();

    return (
        <Text
            style={[
                styles.text,
                theme === 'dark' ? styles.textDark : styles.textLight,
                style
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

export default RNText;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
    textDark: {
        color: '#FFFFFF',
    },
    textLight: {
        color: '#000000',
    },
});
