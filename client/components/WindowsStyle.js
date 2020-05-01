import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Tabs,
  Tab,
  Grid
} from '@material-ui/core'
// Add in audio on page navigation

export default class WindowsStyle extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item small>
          Bababooie
        </Grid>

        <AppBar position="static">
          <Paper>
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="One" />
              <Tab label="Two" />
              <Tab label="Three" />
            </Tabs>
            <Grid item small>
              Bababooie
            </Grid>
            <Toolbar>
              <Typography variant="h6">News</Typography>
              <div>
                <Button variant="contained" color="inherit">
                  Login
                </Button>
              </div>
            </Toolbar>
          </Paper>
        </AppBar>
      </Grid>
    )
  }
}
