import { create } from "zustand";

export const useMessageStore = create((set, get) => ({
  loading: false,
  error: null,
  userInput: "",
  userMessage: [],
  translatedMessage: [],
  language: null,
  languageList: [],
  setUserInput: (message) => {
    set({ userInput: message })
  },
  sendMessage: () => {
    set(state => ({
      userMessage: [...state.userMessage, get().userInput]
    }))
  }
  //create function for fetch translation via API
}))
