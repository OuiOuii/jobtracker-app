import { create } from 'zustand';

// This store will manage the active content displayed in the sidebar
export const useSidebarStore = create((set) => ({
    activeContent: "Dashboard", // Default content
    setActiveContent: (content) => set({ activeContent: content}), // Function to update active content
}));
  