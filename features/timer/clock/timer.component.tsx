import { Text, View } from "react-native"
import { formatTime } from "~/utils/format-time"

const Timer = ({ currentTime }: { currentTime: number }) => {
	return (
		<View className='items-center'>
			{/* render 1 instead of 0 for a short period of time to avoid flickering and improve user experience */}
			<Text className='text-8xl font-bold'>{formatTime(currentTime === 0 ? 1 : currentTime)}</Text>
		</View>
	)
}

export { Timer }
