// import AsyncStorage from '@react-native-community/async-storage';
// import { showMessage } from './showMassage';

// export const storeData = async (storageKey: string, value: {}) => {
//     try {
//         const jsonValue = JSON.stringify(value);
//         await AsyncStorage.setItem(storageKey, jsonValue);
//     } catch (e) {
//         showMessage('Error save data in local storage');
//     }
// };

// export const getData = async (storageKey: string) => {
//     try {
//         const jsonValue = await AsyncStorage.getItem(storageKey);
//         return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch (e) {
//         showMessage('Error get data in local storage');
//     }
// };
