import { Text, View } from "react-native"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { useTimer } from "~/features/timer"
import { PlayPause, Timer } from "~/features/timer"
import { ThreeIconsTaskState } from "~/features/timer"
import { Circles } from "~/features/tasks"
import { FloatingUpperBar } from "~/components/floating-upperbar/floating-upperbar.component"
import { PomodoroStage } from "~/types"
import useTimerStore from "~/features/store/timer.state"
import useTaskStore from "~/features/store/tasks.state"

import { CustomBlackDropdown } from "~/components/black-dropdown/black-dropdown.component"
import { AlignJustify } from "~/lib/icons/AlignJustify"

const Pomodoro = () => {
	const { tasks, completeTaskPeriod, currentTaskId } = useTaskStore((state) => state)
	const { setCurrentStage, currentStage, stagesConfig } = useTimerStore((state) => state)

	const onTimerEnd = useCallback((): void => {
		if (currentStage === PomodoroStage.FOCUS && tasks[0].currentPeriod + 1 > tasks[0].periodsQuantity) {
			setCurrentStage(PomodoroStage.LONG_BREAK)
			completeTaskPeriod(tasks[0].id)
		} else if (currentStage === PomodoroStage.FOCUS) {
			setCurrentStage(PomodoroStage.BREAK)
			completeTaskPeriod(tasks[0].id)
		} else if (currentStage === PomodoroStage.BREAK) {
			setCurrentStage(PomodoroStage.FOCUS)
		}
	}, [currentStage, setCurrentStage, tasks, completeTaskPeriod])

	const { currentTime, startTimer, stopTimer, resetTimer, isTimerActive } = useTimer(
		stagesConfig[currentStage],
		onTimerEnd
	)

	const selectedTask = tasks.find((task) => task.id === currentTaskId)

	const data = tasks.map((task) => ({
		label: task.title,
		value: task.id,
	}))

	return (
		// <View className='items-center gap-32 grow py-3'>
		<View className='items-center gap-28 grow py-3'>
			{/* <FloatingUpperBar /> */}
			<CustomBlackDropdown data={data} />
			<View className='items-center'>
				<Timer currentTime={currentTime} />
				{tasks.length ? <Circles task={tasks[0]} /> : null}

				{/* DEBUG ON SCREEN INFO */}
				<View>
					<Text>{selectedTask?.title}</Text>
					<Text>current stage {currentStage}</Text>
					<Text>current period {tasks.length && tasks[0].currentPeriod}</Text>
					<Text>total periods {tasks.length && tasks[0].periodsQuantity}</Text>
				</View>
			</View>
			<PlayPause resetTimer={resetTimer} isTimerActive={isTimerActive} stopTimer={stopTimer} startTimer={startTimer} />
			<ThreeIconsTaskState stage={currentStage} />
		</View>
	)
}

export default Pomodoro
