// store.ts
import { create } from "zustand"
import { Priority, Task } from "~/types"

const hardcodedTask: Task = {
	id: "5f8a8f22-0643-4f6a-9e1b-1f3a9c2f3c7f",
	title: "Estudiar React Native",
	priority: Priority.MEDIUM,
	periodsQuantity: 3,
	currentPeriod: 1,
	completed: false,
}

interface ConfigStore {
	tasks: Task[]
	currentTaskId: string

	addTask: (task: Task) => void
	addHardcodedTask: () => void
	removeTask: (taskId: string) => void
	completeTaskPeriod: (taskId: string) => void
}

const useTaskStore = create<ConfigStore>((set) => ({
	tasks: [
		{
			id: "5f8a8f22-0643-4f6a-9e1b-1f3a9c2f3c7f",
			title: "Estudiar React Native",
			priority: Priority.MEDIUM,
			periodsQuantity: 3,
			currentPeriod: 1,
			completed: false,
		},
	],
	currentTaskId: "5f8a8f22-0643-4f6a-9e1b-1f3a9c2f3c7f",
	addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
	addHardcodedTask: () => set((state) => ({ tasks: [...state.tasks, hardcodedTask] })),
	removeTask: (taskToDeleteId) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== taskToDeleteId),
		})),
	completeTaskPeriod: (taskId) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === taskId
					? {
							...task,
							currentPeriod: task.currentPeriod + 1,
							completed: task.currentPeriod > task.periodsQuantity,
					  }
					: task
			),
		})),
}))

export default useTaskStore
