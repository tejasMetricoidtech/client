import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({

    avatar: {
        backgroundColor: red[500]
    },
    root: {
        maxWidth: 345,
        marginTop: 20
    },
});

function NoteCard({ user }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {user.name[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={user.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        name: {user.name}
                        <br />
                        username:{user.username}
                        <br />
                        email:{user.email}
                        <br />
                        phone:{user.phone}
                        <br />
                        street:{user.street}
                        <br />                    
                        category:{user.category}
                        </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default NoteCard