// store.ts
import { create } from "zustand"
import { Priority, Task } from "~/types"

interface ConfigStore {
	tasks: Task[]
	currentTaskId: string

	addTask: (task: Task) => void
	removeTask: (taskId: string) => void
	completeTaskPeriod: (taskId: string) => void
}

const useTaskStore = create<ConfigStore>((set) => ({
	tasks: [
		{
			id: "5f8a8f22-0643-4f6a-9e1b-1f3a9c2f3c7f",
			title: "Estudiar React Native",
			priority: Priority.MEDIUM,
			periodsQuantity: 4,
			currentPeriod: 0,
			completed: false,
		},
	],
	currentTaskId: "5f8a8f22-0643-4f6a-9e1b-1f3a9c2f3c7f",
	addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
	removeTask: (taskToDeleteId) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== taskToDeleteId),
		})),
	completeTaskPeriod: (taskIdToComplete) =>
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === taskIdToComplete
					? { ...task, currentPeriod: task.currentPeriod + 1, completed: task.currentPeriod > task.periodsQuantity}
					: task
			),
		})),
}))

export default useTaskStore

