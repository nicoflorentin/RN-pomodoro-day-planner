import { View } from "react-native"
import { Text } from "~/components/ui/text"
import React from "react"
import { AlignJustify } from "~/lib/icons/AlignJustify"
import { Settings } from "~/lib/icons/Settings"
import { useTimer } from "~/features/timer/hooks/use-timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"

const Pomodoro = () => {
	const { currentTime, startTimer, stopTimer, isTimerActive } = useTimer()

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

	return (
		// all index container
		<View className='items-center gap-32 grow py-3'>
			<FloatingUpperBar />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				<Circles />
			</View>
			<PlayPause isTimerActive={isTimerActive} stopTimer={stopTimer} startTimer={startTimer} />
			<ThreeIconsTaskState />
		</View>
	)
}

export default Pomodoro
