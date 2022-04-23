import type { NextPage } from 'next';

import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import { MainLayout } from 'components/layouts';
import { EntryList } from 'components/ui';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Home'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="Pending" />
            {/* Add a new entry */}
            <EntryList status='Pending' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="In Progress" />
            <EntryList status='In Progress' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="Finished" />
            <EntryList status='Finished' />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default HomePage;
