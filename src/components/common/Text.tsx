import React from 'react';
import { Text as RNText } from 'react-native';

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <RNText>{children}</RNText>;
};

export default Text;
