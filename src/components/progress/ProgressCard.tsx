import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import { Color, color as colorScheme } from '../../constant'
import { ProgressChart } from 'react-native-chart-kit'

type Card = {
	title: string
	description: string
	color: Color
	chartColor: Color
	percentage: number
}

const ProgressCard: React.FC<Card> = (props) => {
	const { description, title, color, chartColor, percentage } = props
	const [open, setOpen] = React.useState(false)
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colorScheme[color || 'orange'].hex,
				},
			]}
		>
			{open ? (
				<Modal style={{}}>
					<Text>Isi modal</Text>
					<Button title='close' onPress={()=>setOpen(false)}/>
				</Modal>
			) : null}
			<ProgressChart
				height={100}
				width={100}
				data={{
					data: [percentage],
					colors: [colorScheme.orange.hex],
				}}
				chartConfig={{
					backgroundGradientFrom: colorScheme[color || 'orange'].hex,
					backgroundGradientTo: colorScheme[color || 'orange'].hex,
					color: (opacity = 0) =>
						`rgba(${colorScheme[chartColor || 'white'].code}, ${opacity})`,
				}}
				hideLegend
				strokeWidth={6}
			/>

			<Text style={styles.title} onPress={() => setOpen(true)}>
				{title}
			</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 120,
		justifyContent: 'flex-start',
		padding: 8,
		rowGap: 4,
		borderRadius: 8,
	},
	cardList: {
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
	},
	description: {
		color: 'white',
	},
})

export default ProgressCard
