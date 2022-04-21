import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
	sidebarOpen: boolean;
}

interface UIProviderProps {
	children: JSX.Element | JSX.Element[] | null;
}

const UI_INITIAL_STATE: UIState = {
	sidebarOpen: false,
}

const UIProvider: FC<UIProviderProps> = ({ children }) => {

	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const openSidebar = (): void => dispatch({ type: '[UI] - Open Sidebar' });
	const closeSidebar = (): void => dispatch({ type: '[UI] - Close Sidebar' });

	return (
		<UIContext.Provider value={{
			...state,
			openSidebar,
			closeSidebar,
		}}>
			{children}
		</UIContext.Provider>
	)
}

export default UIProvider;