import { View, Button } from 'react-native';
import React from 'react'

import { useTheme } from '../../../themes/ThemeProvider';
import { MinColor } from '../../../themes/colors';
import TextComponent from '../../../components/common/Text';
import AlertComponent from '../../../components/Alert/TostAndroid';



const HomeScreen = () => {
    const { theme } = useTheme();

    return (
        <View style={{ backgroundColor: theme === 'dark' ? MinColor.darkColor : MinColor.lightColor, flex: 1 }}>
            <View>
                <TextComponent>Home</TextComponent>

            </View>
        </View>
    );
};

export default HomeScreen
