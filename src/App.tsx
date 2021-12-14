import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RecoilRoot, useRecoilValue } from 'recoil'
import NavigationRoot from '@nav/index'
import FlashMessage from 'react-native-flash-message';
import { Loading as LD } from '@component/index';
import { isLoading } from '@recoil/index';


const MyScreen: React.FC = () => {
	const Data = useRecoilValue(isLoading);
	return (
		<SafeAreaProvider>
			<FlashMessage position="top" />
			<NavigationRoot />
			{Data && <LD />}
		</SafeAreaProvider>
	);
}
const App: React.FC = () => {

	return (
		<RecoilRoot>
			<MyScreen />
		</RecoilRoot>
	)
}

export default App
