import { create } from "zustand";

export const useMessageStore = create((set, get) => ({
  loading: false,
  error: null,
  userInput: "",
  messages: [],
  language: null,
  languageList: [],
  setUserInput: (message) => {
    set({ userInput: message });
  },
  sendMessage: () => {
    set((state) => ({
      messages: [
        ...state.messages,
        {
          originalMsg: get().userInput,
          translation: "Translation placeholder",
        },
      ],
    }));
  },
  //create function for fetch translation via API
}));
