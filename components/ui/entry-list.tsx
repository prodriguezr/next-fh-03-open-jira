import { FC, useContext, useMemo } from 'react';

import { List, Paper } from '@mui/material'

import { EntryStatus } from 'interfaces';
import { EntryCard } from './entry-card';
import { EntriesContext } from 'context/entries';

interface Props {
	status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
	const { entries } = useContext(EntriesContext);

	const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])
	//const entriesByStatus = entries.filter(entry => entry.status === status);

	console.log(`Status: ${status}, Count:${entriesByStatus.length}`);

	return (
		// TODO: Aquí haremos drop
		<div>
			<Paper sx={{ height: 'calc(100vh)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
				{/* TODO: Cambiará dependiendo si está haciendo drag o no */}
				<List sx={{ opacity: 1 }}>
					{
						entriesByStatus.map((entry, i) => (
							<EntryCard entry={entry} key={i} />
						))
					}
				</List>
			</Paper>
		</div>
	)
}