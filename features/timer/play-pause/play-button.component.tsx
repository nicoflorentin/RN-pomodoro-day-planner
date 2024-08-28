import { Text, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

interface PlayButtonProps {
	startTimer: () => void
	stopTimer: () => void
	isTimerActive: boolean
}

const PlayPause = ({ startTimer, stopTimer, isTimerActive }: PlayButtonProps) => {
	return (
		<View className='items-center gap-3'>
			<Text>hold to give up</Text>
			<View className='border w-20 h-20 justify-center items-center rounded-full'>
				{isTimerActive ? (
					<FontAwesome name='pause' size={30} color='black' onPress={stopTimer} />
				) : (
					<FontAwesome name='play' size={30} color='black' onPress={startTimer} />
				)}
			</View>
		</View>
	)
}

export { PlayPause }