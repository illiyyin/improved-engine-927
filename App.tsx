import { StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import Header from './src/components/header'
import Progress from './src/components/progress'
import Schedule from './src/components/schedule'
import Nav from './src/components/nav'
import { ModalProvider, createModalStack } from 'react-native-modalfy'
import MessageSentModal from './src/components/MessageSentModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const modalConfig = { MessageSentModal }
const defaultOptions = { backdropOpacity: 0.6 }
const stack = createModalStack(modalConfig, defaultOptions)

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ModalProvider stack={stack}>
				<ScrollView>
					<SafeAreaView style={styles.container}>
						<Header />
						<Progress />
						<Schedule />
						{/* <Nav/> */}
						<StatusBar barStyle="light-content" />
					</SafeAreaView>
				</ScrollView>
			</ModalProvider>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 16,
		marginTop: StatusBar.length,
	},
})
