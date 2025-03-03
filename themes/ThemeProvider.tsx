import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';


// Define the shape of the Theme Context
interface ThemeContextType {
    theme: ColorSchemeName;
    toggleTheme: () => void;
}

// Create the Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom Hook to use the Theme Context
 * @returns {ThemeContextType} The current theme and toggle function
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

/**
 * ThemeProvider Component
 * - Automatically detects system theme
 * - Allows manual theme switching
 * - Saves the preferred theme to AsyncStorage for persistence
 *
 * @param {React.ReactNode} children - The wrapped application components
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

    // Load the stored theme or fallback to system theme
    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem('app-theme');
            if (storedTheme) {
                setTheme(storedTheme as ColorSchemeName);
            }
        };
        loadTheme();
    }, []);

    // Listen for system theme changes
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });
        return () => subscription.remove();
    }, []);

    // Toggle between dark & light mode manually
    const toggleTheme = async () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        await AsyncStorage.setItem('app-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
