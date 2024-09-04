// store.ts
import { create } from 'zustand';
import { StagesConfig } from '~/types';

interface ConfigStore {
  stagesConfig: StagesConfig;
  setStagesConfig: (config: StagesConfig) => void;
}

const useConfigStore = create<ConfigStore>((set) => ({
  stagesConfig: {
    focus: 25,
    break: 5,
    longBreak: 15
  },
  setStagesConfig: (config) => set({ stagesConfig: config }),
}));

export default useConfigStore;
