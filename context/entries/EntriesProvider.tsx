import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from 'interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
	entries: Entry[];
}

interface EntriesProviderProps {
	children: JSX.Element | JSX.Element[] | null;
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Pending: Quis dolore mollit culpa labore. Esse ipsum aliqua irure eiusmod ut voluptate quis sint reprehenderit proident. Laboris sunt dolore sunt amet et amet ipsum excepteur magna. Lorem Lorem adipisicing dolore magna est laboris proident irure duis ea qui irure incididunt. Consectetur mollit qui reprehenderit quis anim ea. Duis tempor cupidatat officia ut qui adipisicing sit nisi est velit laborum eiusmod eu. Eu sint exercitation magna culpa deserunt.',
			createdAt: Date.now() - 2000000,
			status: 'Pending'
		},
		{
			_id: uuidv4(),
			description: 'Pending: Anim ullamco ea culpa culpa est qui aute cillum pariatur commodo elit occaecat. Non dolor culpa sunt excepteur voluptate exercitation veniam aliquip non consectetur tempor consequat mollit. Ad sit reprehenderit consectetur mollit sint voluptate tempor sint mollit amet irure sint. Eiusmod incididunt consectetur commodo enim eiusmod esse nulla magna ad nisi. Tempor adipisicing exercitation ullamco consequat anim. Pariatur occaecat amet qui cillum velit id do ut dolor voluptate.',
			createdAt: Date.now() - 3000000,
			status: 'Pending'
		},
		{
			_id: uuidv4(),
			description: 'In Progress: Quis dolore mollit culpa labore. Esse ipsum aliqua irure eiusmod ut voluptate quis sint reprehenderit proident. Laboris sunt dolore sunt amet et amet ipsum excepteur magna. Lorem Lorem adipisicing dolore magna est laboris proident irure duis ea qui irure incididunt. Consectetur mollit qui reprehenderit quis anim ea. Duis tempor cupidatat officia ut qui adipisicing sit nisi est velit laborum eiusmod eu. Eu sint exercitation magna culpa deserunt.',
			createdAt: Date.now() - 5600000,
			status: 'In Progress'
		},
		{
			_id: uuidv4(),
			description: 'Finished: Qui anim qui sint sunt ullamco fugiat aliqua anim nostrud. Reprehenderit reprehenderit nulla elit anim elit tempor cupidatat enim fugiat pariatur irure. Velit labore dolor proident in nostrud enim sunt Lorem. Duis veniam quis ullamco dolor aliquip sint Lorem duis excepteur. Enim in in officia duis velit. Consectetur pariatur Lorem laboris eu laborum aliquip qui dolor ut pariatur fugiat dolor sint.',
			createdAt: Date.now() - 1000000,
			status: 'Finished'
		},
	],
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {

	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider value={{
			...state
		}}>
			{children}
		</EntriesContext.Provider>
	)
}