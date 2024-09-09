import { View } from "react-native"
import React, { useState, useEffect } from "react"
import { useTimer } from "~/features/timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"
import { FloatingUpperBar } from "~/components/floating-upperbar/floating-upperbar.component"
import { PomodoroStage } from "~/types"
import useTimerStore from "~/features/store/timer.state"

const Pomodoro = () => {
	const onTimerEnd = () => {
		setHasTimerEnded(true)
	}

	const { setCurrentStage, currentStage } = useTimerStore((state) => state)
	const [hasTimerEnded, setHasTimerEnded] = useState(false)
	const { currentTime, startTimer, stopTimer, resetTimer, isTimerActive } = useTimer(3, onTimerEnd)

	// Effect to handle the stage change outside the render cycle
	useEffect(() => {
		if (hasTimerEnded) {
			setCurrentStage(PomodoroStage.BREAK)
			setHasTimerEnded(false) // Reset the flag after updating the stage
		}
	}, [hasTimerEnded, setCurrentStage])

	return (
		<View className='items-center gap-32 grow py-3'>
			<FloatingUpperBar />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				<Circles />
			</View>
			<PlayPause resetTimer={resetTimer} isTimerActive={isTimerActive} stopTimer={stopTimer} startTimer={startTimer} />
			<ThreeIconsTaskState stage={currentStage} />
		</View>
	)
}

export default Pomodoro
