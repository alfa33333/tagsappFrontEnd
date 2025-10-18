import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CounterArea({ loading = false, stats = {} }) {
    return (
        <>
       <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2">Total Tags</Typography>
              <Typography variant="h5">{stats.total_items ?? '-'}</Typography>
            </Paper>
          </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2">With Owner</Typography>
              <Typography variant="h5">{stats.items_with_owner ?? '—'}</Typography>
            </Paper>
          </Grid>
        </>
       );

}