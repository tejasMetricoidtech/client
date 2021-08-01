import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

export default function AllUser() {
    const [userdata, setUserdata] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/posts/')
            .then(res => {
                console.log(res)
                setUserdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <Container>
            <Grid container spacing={3}>
                {userdata.map(user => (
                    <Grid item key={user.id} xs={12} md={6} lg={4}>
                        <NoteCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
