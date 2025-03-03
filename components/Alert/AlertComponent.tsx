import { ToastAndroid, Alert, Platform } from 'react-native';

/**
 * A utility component for displaying alerts or toast messages
 * based on the platform (Android/iOS).
 *
 * @example
 * // Show an alert or toast based on the platform
 * AlertComponent.message("This is a test message!");
 */
const AlertComponent = {
    /**
     * Displays a message using:
     * - `ToastAndroid` on **Android**
     * - `Alert.alert` on **iOS**
     *
     * @param {string} msg - The message to display in the alert or toast.
     * @returns {void} - Does not return anything.
     */
    message: (msg: string): void => {
        if (Platform.OS === 'android') {
            // Shows a toast message on Android
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else {
            // Shows an alert dialog on iOS
            Alert.alert("Notification", msg, [{ text: "OK" }]);
        }
    },
};

export default AlertComponent;
