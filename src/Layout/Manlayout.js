import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Manlayout() {
    const classes = useStyles();

    return (
        <div>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
        </div>
    )
}
