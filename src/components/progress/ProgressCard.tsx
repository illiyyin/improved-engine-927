import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, color as colorScheme, tmpColor } from '../../constant'
import { ProgressChart } from 'react-native-chart-kit'

type Card = {
	title: string
	description: string
	color?: Color
	chartColorCode?: string
}

const ProgressCard: React.FC<Card> = (props) => {
	const { description, title, color, chartColorCode } = props
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: color
						? tmpColor[color]?.hex
						: tmpColor['yellow']?.hex,
				},
			]}
		>
			<ProgressChart
				height={100}
				width={100}
				data={{
					data: [0.4],
					colors: [colorScheme.orange],
				}}
				chartConfig={{
					backgroundColor: color
						? tmpColor[color]?.hex
						: tmpColor['yellow']?.hex,
					backgroundGradientFrom: color
						? tmpColor[color]?.hex
						: tmpColor['yellow']?.hex,
					backgroundGradientTo: color
						? tmpColor[color]?.hex
						: tmpColor['yellow']?.hex,
					color: (opacity = 0) => `rgba(${tmpColor[color].code}, ${opacity})`,
				}}
				hideLegend
			/>
			<Text style={styles.title}>{title}</Text>
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
