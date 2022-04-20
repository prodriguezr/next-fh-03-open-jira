import Head from 'next/head';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Navbar } from 'components/ui';

interface Props {
	title?: string;
	children: JSX.Element | JSX.Element[]
}

export const MainLayout: FC<Props> = ({ title = 'Home', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{`${title} - OpenJira`}</title>
			</Head>
			<Navbar />
			{/* Sidebar */}
			<Box sx={{ padding: '10px 20px' }}>
				{children}
			</Box>
		</Box>
	);
}

export default MainLayout;