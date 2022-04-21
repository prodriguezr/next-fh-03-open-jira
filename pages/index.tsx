import type { NextPage } from 'next';

import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import { MainLayout } from 'components/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Home'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="Pending" />
            <CardContent>
              {/* Add a new entry */}
              {/* List all entries */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="In Progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 90px)' }}>
            <CardHeader title="Finished" />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default HomePage;
