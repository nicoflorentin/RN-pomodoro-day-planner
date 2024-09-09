import { View } from "react-native"
import { Task } from "~/types"

interface CirclesProps {
	task: Task
}

const Circles = ({ task }: CirclesProps) => {
	const circles = Array.from({ length: task.periodsQuantity }).map((_, i) => (
		<View
			key={i}
			className={`rounded-full border border-black w-5 h-5 ${i < task.currentPeriod ? 'bg-black' : ''}`}
		/>
	))

	return <View className='flex-row gap-2'>{circles}</View>
}

export { Circles }

