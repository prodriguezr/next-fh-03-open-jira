import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
	return (
		<Drawer
			anchor='left'
			open={true}
			onClose={() => console.log('Closing')}
		>
			<Box sx={{ width: 260 }}>
				<Box
					sx={{ padding: '10px, 10px' }}
					mt={3}
				>
					<Typography variant='h5'><strong>Menú</strong></Typography>
				</Box>
				<List>
					{
						menuItems.map((itemText, i) => (
							<ListItem key={i} button>
								<ListItemIcon>
									{i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
								</ListItemIcon>
								<ListItemText primary={itemText} />
							</ListItem>
						))
					}
				</List>
				<Divider />
				<List>
					{
						menuItems.map((itemText, i) => (
							<ListItem key={i} button>
								<ListItemIcon>
									{i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
								</ListItemIcon>
								<ListItemText primary={itemText} />
							</ListItem>
						))
					}
				</List>
			</Box>
		</Drawer>
	)
}