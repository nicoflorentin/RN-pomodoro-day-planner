import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { PomodoroStage } from "~/types"
import { LucideProps } from "lucide-react-native"

interface StageIconProps {
	stage: PomodoroStage
	matchingStage: PomodoroStage
	stageLength: number
	Icon: React.ComponentType<LucideProps>
	label: string
	onPress: () => void
}

const StageIcon = ({ stage, matchingStage, stageLength, Icon, label, onPress }: StageIconProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={`items-end grow basis-0 ${stage === matchingStage ? "" : "opacity-30"}`}
		>
			<View className='items-center'>
				<Text className='font-bold text-sm'>{stageLength} min</Text>
				<Icon className='color-black' size={50} strokeWidth={1} />
				<Text className='font-bold text-sm'>{label}</Text>
			</View>
		</TouchableOpacity>
	)
}

export { StageIcon }