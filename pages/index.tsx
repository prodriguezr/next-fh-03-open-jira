import { Typography } from '@mui/material';
import { MainLayout } from 'components/layouts';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Hello'>
      <Typography variant='h1' color='primary'>Hello, World!</Typography>
    </MainLayout>
  );
}

export default HomePage;
