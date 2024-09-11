import { View, Text } from "react-native"
import { Lightbulb } from "~/lib/icons/Lightbulb"
import { Coffee } from "~/lib/icons/Coffee"
import { Armchair } from "~/lib/icons/Armchair"
import { PomodoroStage } from "~/types"
import useTimerStore from "~/features/store/timer.state"
import { StageIcon } from "./stage-icon.component"

interface ThreeIconsTaskStateProps {
	stage: PomodoroStage
}

const ThreeIconsTaskState = ({ stage }: ThreeIconsTaskStateProps) => {
	const { stagesConfig, setCurrentStage } = useTimerStore((state) => state)

	return (
		<View className='flex-row gap-10'>
			<StageIcon
				stage={stage}
				matchingStage={PomodoroStage.FOCUS}
				stageLength={stagesConfig.focus}
				Icon={Lightbulb}
				label='focus'
				onPress={() => setCurrentStage(PomodoroStage.FOCUS)}
			/>
			<StageIcon
				stage={stage}
				matchingStage={PomodoroStage.BREAK}
				stageLength={stagesConfig.break}
				Icon={Coffee}
				label='break'
				onPress={() => setCurrentStage(PomodoroStage.BREAK)}
			/>
			<StageIcon
				stage={stage}
				matchingStage={PomodoroStage.LONG_BREAK}
				stageLength={stagesConfig.longBreak}
				Icon={Armchair}
				label='long break'
				onPress={() => setCurrentStage(PomodoroStage.LONG_BREAK)}
			/>
		</View>
	)
}

export { ThreeIconsTaskState }
