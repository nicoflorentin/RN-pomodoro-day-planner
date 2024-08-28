import { Text, View } from "react-native"
import { formatTime } from "~/utils/format-time"

const Timer = ({ currentTime }: { currentTime: number }) => {
	return (
		<View className='items-center'>
			<Text className='text-[80px] font-bold'>{formatTime(currentTime)}</Text>
		</View>
	)
}

export { Timer }
