import { View } from "react-native"
import { Text } from "~/components/ui/text"
import React from "react"
import { Lightbulb } from "~/lib/icons/Lightbulb"
import { Coffee } from "~/lib/icons/Coffee"
import { Armchair } from "~/lib/icons/Armchair"
import { AlignJustify } from "~/lib/icons/AlignJustify"
import { Settings } from "~/lib/icons/Settings"
import { useTimer } from "~/features/timer"
import { Timer } from "~/features/timer"
import { PlayButton } from "~/features/timer"
import { Circles } from "~/features/tasks"

const UpperBar = () => {
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

const ThreeIcons = () => {
	return (
		<View className='flex-row gap-10'>
			{/* icon */}
			<View className='items-end grow basis-0'>
				<View className='items-center'>
					<Text className='font-bold text-sm'>25 min</Text>
					<Lightbulb className='color-black' size={50} strokeWidth={1} />
					<Text className='font-bold text-sm'>focus</Text>
				</View>
			</View>
			{/* icon */}
			<View className='items-center opacity-30 '>
				<Text className='text-sm'>5 min</Text>
				<Coffee className='color-black' size={50} strokeWidth={1} />
				<Text className='text-sm'>break</Text>
			</View>
			{/* icon */}
			<View className='items-start opacity-30  grow basis-0'>
				<View className='items-center'>
					<Text className='text-sm'>15 min</Text>
					<Armchair className='color-black' size={50} strokeWidth={1} />
					<Text className='text-sm'>long break</Text>
				</View>
			</View>
		</View>
	)
}

const TimerView = () => {
	const { currentTime, startTimer, stopTimer, isTimerActive } = useTimer()

	return (
		// all index container
		<View className='items-center gap-32 grow py-3'>
			<UpperBar />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				<Circles />
			</View>
			<PlayButton onPress={isTimerActive ? stopTimer : startTimer} isTimerActive={isTimerActive} />
			<ThreeIcons />
		</View>
	)
}

export default TimerView
