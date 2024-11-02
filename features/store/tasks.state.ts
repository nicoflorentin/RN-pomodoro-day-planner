// store.ts
import { create } from 'zustand';
import { Priority, Task } from '~/types';
import { generateUUID } from '~/utils/generateUUID';

const hardcodedTasksTitles: string[] = [
  'Do my homework',
  'Make a video',
  'Take a nap',
  'Feed my cat',
  'Go on a walk',
  'Eat some food',
];

const hardcodedTask: Task = {
  id: '',
  title: '',
  priority: Priority.MEDIUM,
  periodsQuantity: 3,
  currentPeriod: 1,
  completed: false,
};

interface ConfigStore {
  tasks: Task[];
  currentTaskId: string;
  setCurrentTask: (taskId: string) => void;
  getCurrentTask: () => Task | null;
  addTask: (task: Task) => void;
  addHardcodedTask: () => void;
  removeTask: (taskId: string) => void;
  completeTaskPeriod: (taskId: string) => void;
}

const useTaskStore = create<ConfigStore>((set, get) => ({
  tasks: [],
  currentTaskId: '',
  setCurrentTask: (taskId) =>
    set({
      currentTaskId: taskId,
    }),
  getCurrentTask: () => {
    const { currentTaskId, tasks } = get();
    return tasks.find((task) => task.id === currentTaskId) || null;
  },
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
  addHardcodedTask: () => {
    const id = generateUUID();
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...hardcodedTask,
          id: id as string,
          title: hardcodedTasksTitles[Math.floor(Math.random() * hardcodedTasksTitles.length)],
          priority: [Priority.LOW, Priority.MEDIUM, Priority.HIGH][Math.floor(Math.random() * 3)],
        },
      ],
    }));
  },
  removeTask: (taskToDeleteId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskToDeleteId),
    }));
    set((state) => ({
      currentTaskId: taskToDeleteId === state.currentTaskId ? '' : state.currentTaskId,
    }));
  },
  completeTaskPeriod: (taskId) =>
    set((state) => {
      console.log('complete task period', taskId);

      return {
        tasks: state.tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                currentPeriod: task.currentPeriod + 1,
                completed: task.currentPeriod > task.periodsQuantity,
              }
            : task
        ),
      };
    }),
}));

export default useTaskStore;
