import { View } from "react-native"
import React from "react"
import { useTimer } from "~/features/timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"
import { FloatingUpperBar } from "~/components/floating-upperbar/floating-upperbar.component"

const Pomodoro = () => {
	const { currentTime, startTimer, stopTimer, isTimerActive } = useTimer() 

	return (
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
