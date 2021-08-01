import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
        marginTop: 20
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cardtitle: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

export default function View(props) {

    const [userdata, setUserdata] = useState([]);

    useEffect(() => {
        const id = props.match.params.id
        axios.get('http://localhost:5000/posts/' + id)
            .then(res => {
                console.log(res)
                setUserdata([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // [["0",{}],["1",{}]]
    const classes = useStyles()


    return (
        <Container>
            <Typography
                className={classes.title}
                variant='h6'
                color='secondary'
                component='h2'
                gutterBottom
            >
                VIEW EMPLOYEE DETAILS
            </Typography>
            <Card className={classes.root} variant="outlined">
                {Object.entries(userdata).map(user => {
                    console.log(user)
                    return (
                        <CardContent>
                            <Typography className={classes.caedtitle} color="textSecondary" gutterBottom>
                                user detail
                            </Typography>
                            <Typography>
                                name : {user[1].name}
                            </Typography>
                            <Typography>
                                username: {user[1].username}
                            </Typography>
                            <Typography>
                                email: {user[1].email}
                            </Typography>
                            <Typography>
                                phone: {user[1].phone}
                            </Typography>
                            <Typography>
                                street: {user[1].street}
                            </Typography>
                        </CardContent>)
                })}
            </Card>
        </Container>
    )
}
