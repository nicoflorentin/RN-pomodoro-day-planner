export const enum PomodoroStage {
	FOCUS = 0,
	BREAK = 1,
	LONG_BREAK = 2
}

export interface StagesConfig {
	focus: number,
	break: number,
	longBreak: number
}