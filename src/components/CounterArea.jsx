import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CounterArea({ loading = false, stats = {}}) {
    return (
        <>
       <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2">Total Tags</Typography>
              <Typography variant="h5">{stats.totalTags ?? '-'}</Typography>
            </Paper>
          </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2">Active</Typography>
              <Typography variant="h5">{stats.active ?? '—'}</Typography>
            </Paper>
          </Grid>
        </>
       );

}