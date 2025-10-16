import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CounterArea from './CounterArea';
import ChartArea from './ChartArea';

/**
 * Dashboard scaffold
 * - Add real data, charts and widgets as needed.
 * - Keep this component focused on layout and composition.
 */

export default function Dashboard({ loading = false, stats = {}, children }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" component="h1">Dashboard</Typography>
        <Typography color="text.secondary" variant="body2">Overview and quick stats</Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {/* Small stat cards */}
          <CounterArea loading={loading} stats={stats} />

          {/* Charts / larger widgets */}
          <ChartArea loading={loading} stats={stats} />

          {/* Bottom area: custom children (e.g., Tag card, details) */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              {children ?? <Typography color="text.secondary">Add widgets or components here</Typography>}
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}