import { FC, useReducer } from 'react';
import { UIContext } from './';

export interface UIState {
	sidebarOpen: boolean;
}

interface UIProviderProps {
	children: JSX.Element | JSX.Element[] | null;
}

const UI_INITIAL_STATE: UIState = {
	sidebarOpen: false,
}

const UIProvider = (/*{ children }*/) => {

	//  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	//  return (
	// 	  <UIContext.Provider value={{
	// 		   ...state
	//  }}>
	// 		   {children}
	// 	  </UIContext.Provider>
	//  )
}

export default UIProvider;