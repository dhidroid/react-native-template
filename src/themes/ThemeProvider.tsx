import React, { createContext, useContext, useState } from 'react';
import { View, Text } from 'react-native';

const ThemeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> }>({ theme: 'light', setTheme: () => {} });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <View>
                <Text>Theme Provider Placeholder</Text>
                {children}
            </View>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
