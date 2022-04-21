import { createContext } from 'react';

interface ContextProps {
	sidebarOpen: boolean;

	// Methods
	openSidebar: () => void;
	closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);