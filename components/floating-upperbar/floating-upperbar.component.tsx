import { View, Text } from "react-native"
import { AlignJustify } from "~/lib/icons/AlignJustify"
import { Settings } from "~/lib/icons/Settings"


const FloatingUpperBar = () => {
	return (
		<View className='flex-row items-center gap-5 self-stretch'>
			<View className='flex-row m-auto bg-black py-3 px-8 justify-center items-center rounded-full gap-7'>
				<Text className='text-white font-bold'>do the homework</Text>
				<AlignJustify color={"white"} />
			</View>
			<Settings className='absolute right-5' size={30} color={"black"} />
		</View>
	)
}

export {FloatingUpperBar}