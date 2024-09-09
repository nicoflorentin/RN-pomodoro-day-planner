// store.ts
import { create } from "zustand"
import { Priority, Task, TaskStatus } from "~/types"

interface ConfigStore {
	tasks: Task[]
	currentTask: Task
	addTask: (task: Task) => void
	removeTask: (taskId: string) => void
	completePeriod: (taskId: string) => void
}

const useTaskStore = create<ConfigStore>((set) => ({
	tasks: [],
	currentTask: { id: "", title: "", priority: Priority.LOW, periodsQuantity: 0, currentPeriod: 0, completed: false },
	addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
	removeTask: (taskId) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== taskId),
		})),
	completePeriod: (taskId) =>
		set((state) => {
			const task = state.tasks.find((task) => task.id === taskId)
			if (!task) return { tasks: state.tasks }
			const newTask = {
				...task,
				currentPeriod:
					task.periodsQuantity === task.currentPeriod + 1 ? task.periodsQuantity : task.currentPeriod + 1,
				completed: task.currentPeriod + 1 > task.periodsQuantity,
			}
			return {
				tasks: state.tasks.map((task) => (task.id === taskId ? newTask : task)),
			}
		}),
}))

export default useTaskStore
