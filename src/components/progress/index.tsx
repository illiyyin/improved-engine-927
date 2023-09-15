import { StyleSheet, Text, View, Button } from 'react-native'
import ProgressCard from './ProgressCard'
import { Color } from '../../constant'
import { useModal } from 'react-native-modalfy'

interface Card {
	title: string
	description: string
	color: Color
	chartColor: Color
	percentage: number
}

const obj: Card[] = [
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
		chartColor: 'orange',
		percentage: 19 / 40,
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		percentage: 82 / 100,
		color: 'orange',
		chartColor: 'white',
	},
]

export default function Progress() {
	const { openModal } = useModal()

	const sendMessage = () => openModal('MessageSentModal')
	return (
		<View style={styles.container}>
			<Text style={styles.yourProgressText}>Your Progress</Text>
			<Button onPress={sendMessage} title="open" />
			<View style={styles.cardList}>
				{obj.map((item, index) => (
					<ProgressCard
						key={`${item.title}-${index}`}
						description={item.description}
						title={item.title}
						color={item.color}
						chartColor={item.chartColor}
						percentage={item.percentage}
					/>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		rowGap: 8,
	},
	cardList: {
		flex: 1,
		flexDirection: 'row',
		columnGap: 4,
	},
	yourProgressText: {
		fontSize: 20,
		fontWeight: '600',
	},
})
