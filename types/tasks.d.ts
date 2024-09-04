export const enum Priority {
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
}

export enum TaskStatus {
	PENDING = 'Pending',
	IN_PROGRESS = 'InProgress',
	COMPLETED = 'Completed',
}

export interface Task {
	id: string
	title: string
	priority: Priority
	periodsQuantity: number
	currentPeriod: number
	isTimerActive?: boolean
	completed: boolean
}

