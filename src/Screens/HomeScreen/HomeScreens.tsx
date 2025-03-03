import { View } from 'react-native';
import React from 'react'
import TopBar from '../../../components/common/TopBor/TopBor';
import { useTheme } from '../../themes/ThemeProvider';
import { MinColor } from '../../themes/colors';
import TextComponent from '../../components/common/Text';

export const HomeScreens = () => {
    const { theme } = useTheme()
    return (
        <View style={{ backgroundColor: theme === 'dark' ? MinColor.darkColor : MinColor.lightColor, flex: 1 }}>
            <TopBar title='Home' />
            <View>
                <TextComponent>Home</TextComponent>
            </View>
        </View>
    );
};
