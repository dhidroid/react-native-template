import {Platform, ToastAndroid, Alert} from 'react-native';

export const infoBox = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    Alert.alert('Info', message, [{text: 'OK'}]);
  }
};


export const errorAlert = (
  message: string,
  type: string,
  onPress?: () => void,
) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    Alert.alert('Error', message, [
      {text: 'OK', onPress: onPress ? onPress : () => {}},
    ]);
  }
};
