// store.ts
import { create } from "zustand"
import { Task } from "~/types"

interface ConfigStore {
	tasks: Task[]
	addTask: (task: Task) => void
	removeTask: (taskId: string) => void

}

const useConfigStore = create<ConfigStore>((set) => ({
	tasks: [],
	addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
	removeTask: (taskId) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== taskId),
		})),
}))

export default useConfigStore
