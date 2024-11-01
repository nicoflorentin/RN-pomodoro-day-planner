// store.ts
import { create } from "zustand"
import { PomodoroStage, StagesConfig } from "~/types"

interface ConfigStore {
	stagesConfig: StagesConfig
	currentStage: PomodoroStage

	setStagesConfig: (config: StagesConfig) => void
	setCurrentStage: (stage: PomodoroStage) => void
}

const useTimerStore = create<ConfigStore>((set) => ({
	stagesConfig: {
		focus: 3,
		break: 2,
		longBreak: 5,
	},
  currentStage: PomodoroStage.FOCUS,
	setStagesConfig: (config: StagesConfig) => set({ stagesConfig: config }),
	setCurrentStage: (stage: PomodoroStage) => set({ currentStage: stage }),
}))

export default useTimerStore
