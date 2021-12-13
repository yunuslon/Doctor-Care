import { showMessage as showToast } from 'react-native-flash-message';

export const showMessage = (message: string, type?: string) => {
    showToast({
        message: message,
        type: type === 'success' ? 'success' : 'danger',
        backgroundColor: type === 'success' ? 'green' : '#E06379',
    });
};
