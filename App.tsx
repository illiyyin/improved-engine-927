import {
	StyleSheet,
	ScrollView,
	StatusBar,
	SafeAreaView,
} from 'react-native'
import Header from './src/components/header'
import Progress from './src/components/progress'
import Schedule from './src/components/schedule'
import Nav from './src/components/nav'

export default function App() {
	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Header />
				<Progress />
				<Schedule />
				{/* <Nav/> */}
				<StatusBar barStyle="light-content" />
			</SafeAreaView>
		</ScrollView>
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
