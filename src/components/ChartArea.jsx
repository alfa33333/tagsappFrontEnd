import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

  ChartJS.register(ArcElement, Tooltip, Legend);

const baseTemplate = {
  labels: ['With Owner', 'Without Owner'],
  datasets: [
    {
      label: 'Owned vs Unowned Items',
      data: [0, 0],
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' },
    tooltip: { enabled: true },
  },
};

export default function ChartArea({ loading = false, stats = {}, children }) {
  const [chartData, setChartData] = React.useState(() => {
    // initialize from incoming stats
    return {
      ...baseTemplate,
      datasets: baseTemplate.datasets.map((ds) => ({
        ...ds,
        data: [stats.items_with_owner || 0, stats.items_without_owner || 0],
      })),
    };
  });

  // update chart when stats change
  React.useEffect(() => {
    const updated = {
      ...baseTemplate,
      datasets: baseTemplate.datasets.map((ds) => ({
        ...ds,
        // always create a new array/object (no mutation)
        data: [stats.items_with_owner || 0, stats.items_without_owner || 0],
      })),
    };
    setChartData(updated);
  }, [stats]);

    return (
        <>
        <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, height: 300, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2" gutterBottom>Owned vs Unowned Items</Typography>
              {/* TODO: Add chart component (react-chartjs-2) here */}
              <Box sx={{ flex: 1, position: 'relative' }}>
                <Pie data={chartData} options={chartOptions}/>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: 300 }}>
              <Typography variant="subtitle2" gutterBottom>Recent Events</Typography>
              {/* TODO: Render recent events list */}
              <Box sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
                <Typography>Events placeholder</Typography>
              </Box>
            </Paper>
          </Grid>
        </>
    );
}