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
	position: string
	onPress: () => void
}

const StageIcon = ({ stage, matchingStage, stageLength, Icon, label, position, onPress }: StageIconProps) => {
	const isHighlighted = stage === matchingStage

	const styleHandler = () => {
		switch (position) {
			case "left":
				return "grow basis-0"
			case "right":
				return "grow basis-0"
			case "center":
				return ""
			default:
				return ""
		}
	}

	const alignmentHandler = () => {
		switch (position) {
			case "left":
				return "items-end"
			case "right":
				return "items-start"
			case "center":
				return ""
			default:
				return ""
		}
	}

	return (
		<TouchableOpacity onPress={onPress} className={`${alignmentHandler()} ${styleHandler()} ${isHighlighted ? "" : "opacity-30"}`}>
			<View className={`items-center`}>
				<Text className={` ${isHighlighted ? "font-bold" : ""} text-sm`}>{stageLength} min</Text>
				<Icon className='color-black' size={50} strokeWidth={1} />
				<Text className={` ${isHighlighted ? "font-bold" : ""} text-sm`}>{label}</Text>
			</View>
		</TouchableOpacity>
	)
}

export { StageIcon }
