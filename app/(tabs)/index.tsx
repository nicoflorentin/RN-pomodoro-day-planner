import { Text, View } from "react-native"
import React, { useState, useEffect, useRef } from "react"
import { useTimer } from "~/features/timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"
import { FloatingUpperBar } from "~/components/floating-upperbar/floating-upperbar.component"
import { PomodoroStage } from "~/types"
import useTimerStore from "~/features/store/timer.state"
import useTaskStore from "~/features/store/tasks.state"

const Pomodoro = () => {
	const onTimerEnd = (): void => {
		if (currentStage === PomodoroStage.FOCUS && tasks[0].currentPeriod + 1 > tasks[0].periodsQuantity) {
			setCurrentStage(PomodoroStage.LONG_BREAK)
			completeTaskPeriod(tasks[0].id)
		} else if (currentStage === PomodoroStage.FOCUS) {
			setCurrentStage(PomodoroStage.BREAK)
			completeTaskPeriod(tasks[0].id)
		} else if (currentStage === PomodoroStage.BREAK) {
			setCurrentStage(PomodoroStage.FOCUS)
		}
	}

	const { tasks, completeTaskPeriod } = useTaskStore((state) => state)
	const { setCurrentStage, currentStage, stagesConfig } = useTimerStore((state) => state)
	const { currentTime, startTimer, stopTimer, resetTimer, isTimerActive } = useTimer(
		stagesConfig[currentStage],
		onTimerEnd
	)

	console.log("currentStage", currentStage)

	return (
		// <View className='items-center gap-32 grow py-3'>
		<View className='items-center gap-28 grow py-3'>
			<FloatingUpperBar />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				<Circles task={tasks[0]} />
				<View>
					<Text>current stage {currentStage}</Text>
					<Text>current period {tasks[0].currentPeriod}</Text>
					<Text>total periods {tasks[0].periodsQuantity}</Text>
				</View>
			</View>
			<PlayPause resetTimer={resetTimer} isTimerActive={isTimerActive} stopTimer={stopTimer} startTimer={startTimer} />
			<ThreeIconsTaskState stage={currentStage} />
		</View>
	)
}

export default Pomodoro
