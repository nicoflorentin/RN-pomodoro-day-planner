export const enum PomodoroStage {
	FOCUS = "focus",
	BREAK = "break",
	LONG_BREAK = "longBreak",
}

export interface StagesConfig {
	focus: number
	break: number
	longBreak: number
}
