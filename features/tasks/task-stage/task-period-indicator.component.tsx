import { View } from "react-native"
import { Task } from "~/types"

interface CirclesProps {
	task: Task
}

const Circles = ({ task }: CirclesProps) => {
	console.log("currentPeriod", task.currentPeriod)

	const circleStyleHandler = (i: number): string | undefined => {
		if (i + 1 === task.currentPeriod) {
			return "border-4"
		}
		if (i + 1 <= task.currentPeriod) {
			return "border-4 bg-black"
		}

	}

	const circles = Array.from({ length: task.periodsQuantity }).map((_, i) => (
		<View
			key={i}
			className={`rounded-full border border-black w-6 h-6 ${circleStyleHandler(i)}`}
		/>
	))

	return <View className='flex-row gap-2'>{circles}</View>
}

export { Circles }
