import { FontAwesome } from "@expo/vector-icons"
import { View } from "react-native"
import { Text } from "~/components/ui/text"

const PlayButton = ({ onPress, isTimerActive }: { onPress: () => void; isTimerActive: boolean }) => {
	return (
		<View className='items-center gap-3'>
			<Text>hold to give up</Text>
			<View className='border w-20 h-20 justify-center items-center rounded-full'>
				{isTimerActive ? (
					<FontAwesome name='pause' size={30} color='black' onPress={onPress} />
				) : (
					<FontAwesome name='play' size={30} color='black' onPress={onPress} />
				)}
			</View>
		</View>
	)
}

export { PlayButton }

