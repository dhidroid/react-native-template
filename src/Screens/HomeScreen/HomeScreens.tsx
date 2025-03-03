import { View, Button } from 'react-native';
import React from 'react'

import { useTheme } from '../../../themes/ThemeProvider';
import { MinColor } from '../../../themes/colors';
import { RNText } from '../../../components/index';
// import { RNText } from 'components';
import { infoBox } from '../../../workers/utils';


const HomeScreen = () => {
    const { theme } = useTheme();

    return (
        <View style={{ backgroundColor: theme === 'dark' ? MinColor.darkColor : MinColor.lightColor, flex: 1 }}>
            <View>
                <RNText>text</RNText>
                <Button title='alert' onPress={() => infoBox('This is an info message')} />
            </View>
        </View>
    );
};

export default HomeScreen
