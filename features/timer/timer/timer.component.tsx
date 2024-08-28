import { View } from "react-native"
import { formatSeconds } from "~/app/helpers/formatSeconds"
import { Text } from "~/components/ui/text"

const TimerComponent = ({ currentTime }: { currentTime: number }) => {
	return (
		<View className='items-center'>
			<Text className='text-8xl font-bold'>{formatSeconds(currentTime)}</Text>
		</View>
	)
}

export { TimerComponent as Timer }

