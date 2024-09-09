import { Text, View, Pressable } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

interface PlayButtonProps {
	startTimer: () => void
	stopTimer: () => void
	resetTimer: () => void
	isTimerActive: boolean
}

const PlayPause = ({ startTimer, stopTimer, resetTimer, isTimerActive }: PlayButtonProps) => {
	return (
		<View className='items-center gap-3'>
			<View className='border w-20 h-20 justify-center items-center rounded-full'>
				{isTimerActive ? (
					<FontAwesome name='pause' size={30} color='black' onPress={stopTimer} />
				) : (
					<FontAwesome name='play' size={30} color='black' onPress={startTimer} />
				)}
			</View>
			<Text className="text-sm">hold to give up</Text>
			<Pressable onPress={() => resetTimer()} className='border px-4'><Text>reset</Text></Pressable>
		</View>
	)
}

export { PlayPause }
