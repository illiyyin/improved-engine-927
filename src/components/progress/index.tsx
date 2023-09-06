import { StyleSheet, Text, View } from 'react-native'
import ProgressCard from './ProgressCard'
import { Color } from '../../constant'

interface Card {
	title: string
	description: string
	color?: Color
	chartColorCode?: string
}

const obj: Card[] = [
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'yellow',
	},
	{
		title: 'Working Hours',
		description: 'working hours exceeding by 3 hours',
		color: 'orange',
	},
]

export default function Progress() {
	return (
		<View style={styles.container}>
			<Text style={styles.yourProgressText}>Your Progress</Text>
			<View style={styles.cardList}>
				{obj.map((item) => (
					<ProgressCard
						description={item.description}
						title={item.title}
						color={item.color}
						chartColorCode={item.chartColorCode}
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
