import { View, Text } from "react-native"
import { Lightbulb } from "~/lib/icons/Lightbulb"
import { Coffee } from "~/lib/icons/Coffee"
import { Armchair } from "~/lib/icons/Armchair"
import { PomodoroStage } from "~/types"
import useTimerStore from "~/features/store/timer.state"

interface ThreeIconsTaskStateProps {
	stage: PomodoroStage
}

const ThreeIconsTaskState = ({ stage }: ThreeIconsTaskStateProps) => {
	const { stagesConfig } = useTimerStore((state) => state)

	return (
		<View className='flex-row gap-10'>
			{/* icon */}
			<View className={`items-end grow basis-0 ${stage === PomodoroStage.FOCUS ? '' : 'opacity-30'}`}>
				<View className='items-center'>
					<Text className='font-bold text-sm'>{stagesConfig.focus} min</Text>
					<Lightbulb className='color-black' size={50} strokeWidth={1} />
					<Text className='font-bold text-sm'>focus</Text>
				</View>
			</View>
			{/* icon */}
			<View className={`items-center ${stage === PomodoroStage.BREAK ? '' : 'opacity-30'}`}>
				<Text className='text-sm'>{stagesConfig.break} min</Text>
				<Coffee className='color-black' size={50} strokeWidth={1} />
				<Text className='text-sm'>break</Text>
			</View>
			{/* icon */}
			<View className={`items-start grow basis-0 ${stage === PomodoroStage.LONG_BREAK ? '' : 'opacity-30'}`}>
				<View className='items-center'>
					<Text className='text-sm'>{stagesConfig.longBreak} min</Text>
					<Armchair className='color-black' size={50} strokeWidth={1} />
					<Text className='text-sm'>long break</Text>
				</View>
			</View>
		</View>
	)
}

export { ThreeIconsTaskState }
