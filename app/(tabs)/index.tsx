import { View } from "react-native"
import React, { useState } from "react"
import { useTimer } from "~/features/timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"
import { FloatingUpperBar } from "~/components/floating-upperbar/floating-upperbar.component"
import { PomodoroStage } from "~/types"

const Pomodoro = () => {

	const onTimerEnd = () => {
		setPomodoroStage(PomodoroStage.BREAK)
	}

	const { currentTime, startTimer, stopTimer, resetTimer, isTimerActive} = useTimer( 3, onTimerEnd)
	const [pomodoroStage, setPomodoroStage] = useState<PomodoroStage>(PomodoroStage.FOCUS)	

	return (
		<View className='items-center gap-32 grow py-3'>
			<FloatingUpperBar />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				<Circles />
			</View>
			<PlayPause resetTimer={resetTimer} isTimerActive={isTimerActive} stopTimer={stopTimer} startTimer={startTimer} />
			<ThreeIconsTaskState stage={pomodoroStage} />
		</View>
	)
}

export default Pomodoro
