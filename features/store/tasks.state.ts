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
	setCurrentTask: (taskId: string) => void
	getCurrentTask: () => Task | null
	addTask: (task: Task) => void
	addHardcodedTask: () => void
	removeTask: (taskId: string) => void
	completeTaskPeriod: (taskId: string) => void
}

const useTaskStore = create<ConfigStore>((set, get) => ({
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
	currentTaskId: "",
	setCurrentTask: (taskId) => set({ currentTaskId: taskId }),
	getCurrentTask: () => {
		const { currentTaskId, tasks } = get()
		return tasks.find((task) => task.id === currentTaskId) || null
	},
	addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
	addHardcodedTask: () => set((state) => ({ tasks: [...state.tasks, hardcodedTask] })),
	removeTask: (taskToDeleteId) => {
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== taskToDeleteId),
		}))
		set((state) => ({ currentTaskId: taskToDeleteId === state.currentTaskId ? "" : state.currentTaskId }))
	},
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
