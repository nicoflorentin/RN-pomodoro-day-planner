const enum Priority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
}

interface Task {
	id: string
	title: string
	priority: Priority
	stages: number
	currentStage: number
	isTimerActive?: boolean
}
