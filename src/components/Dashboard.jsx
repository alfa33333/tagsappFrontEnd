import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CounterArea from './CounterArea';
import ChartArea from './ChartArea';
import {RetailersTable, EventsTable} from './TableArea.jsx';
import Button from '@mui/material/Button';

const baseApiUrl = "https://localhost:5001";

function fetchDashboardData(setData, api){
  fetch(`${baseApiUrl}${api}`)
    .then(response => response.json())
    .then(data => {
      // Process and return the dashboard data
      console.log(data);
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching dashboard data:", error);
      throw error;
    });
}

/**
 * Dashboard scaffold
 * - Add real data, charts and widgets as needed.
 * - Keep this component focused on layout and composition.
 */

export default function Dashboard({ loading = false, stats = {}, children }) {
  const [fetching, setFetching] = React.useState(false);
  const [statsData, setStatsData] = React.useState({});
  const [retailersData, setRetailersData] = React.useState([]);
  const [eventsData, setEventsData] = React.useState({});

 const handleRefresh = React.useCallback(() => {
    setFetching(true);
    return Promise.all([
      fetchDashboardData(setStatsData, "/api/demo/summary"),
      fetchDashboardData(setRetailersData, "/api/retailers"),
      fetchDashboardData(setEventsData, "/api/items/101/events?page=1&page_size=5"),
    ])
      .catch((err) => {
        // optional: set some error state or log; keeping simple here
        console.error('One or more dashboard requests failed', err);
      })
      .finally(() => {
        // small delay optional, remove setTimeout if not desired
        setTimeout(() => setFetching(false), 200);
      });
  }, [setStatsData, setRetailersData, setEventsData]);

  React.useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box mb={3}>
        <Typography variant="h4" component="h1">Dashboard</Typography>
        <Typography color="text.secondary" variant="body2">Overview and quick stats</Typography>
        <Button variant="outlined" onClick={handleRefresh} >Refresh Data</Button>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        
        <Grid container spacing={3}>
          
          {/* Small stat cards */}
          <CounterArea loading={loading} stats={statsData} />

          {/* Charts / larger widgets */}
          <ChartArea loading={loading} stats={statsData} />
          {/* Table area */}
          <RetailersTable retailersData={retailersData} />
          <EventsTable eventsData={eventsData} />

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