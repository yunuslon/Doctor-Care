import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RecoilRoot } from 'recoil'
import NavigationRoot from '@nav/index'
import FlashMessage from 'react-native-flash-message';


const App: React.FC = () => {
	return (
		<RecoilRoot>
			<SafeAreaProvider>
				<NavigationRoot />
				<FlashMessage position="top" />
			</SafeAreaProvider>
		</RecoilRoot>
	)
}

export default App
