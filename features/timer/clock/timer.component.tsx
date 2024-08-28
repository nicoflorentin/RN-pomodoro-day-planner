import { Text, View } from "react-native"

const Timer = ({ currentTime }: { currentTime: number }) => {
	return (
		<View className='items-center'>
			<Text className='text-[80px] font-bold'>{currentTime}</Text>
		</View>
	)
}

export { Timer }
