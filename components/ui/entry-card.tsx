import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { Entry } from 'interfaces'
import { FC } from 'react';

interface Props {
	entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
	return (
		<Card sx={{ marginBottom: 1 }}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						{entry.description}
					</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 3 }}>
					<Typography variant='body2' color='gray'>
						30 mihutes ago
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}