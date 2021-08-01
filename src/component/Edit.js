import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import Notification from '../components/Notification';



const useStyles = makeStyles({

    title: {
        textDecoration: 'underline',
        marginBottom: 20,
        marginTop: 20
    },
    field: {
        marginTop: 50,
        marginBottom: 20,
    }
})
export default function Edit(props) {
    const classes = useStyles()

    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

    const url = 'http://localhost:5000/posts/'

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        street: '',
        category: ''
    })

    useEffect(() => {
        const id = props.match.params.id
        axios.get(url + id)
            .then(res => {
                console.log(res.data)
                setData(res.data)
                setNotify({
                    isOpen: true,
                    message: 'submitted successfully',
                    type: 'success'
                })
            }).catch(err => console.error(err))
    }, [])

    function submit(e) {
        e.preventDefault()
        const id = props.match.params.id
        axios.put('http://localhost:5000/posts/update/' + id, data)
            .then(res => {
                console.log(res.data)
                props.history.push('/')
            }).catch(err => console.error(err))
    }

    function handle(e) {
        // const newdata = { ...data }
        // newdata[e.target.id] = e.target.value
        // setData(newdata)
        const newdata = {
            ...data, data, [e.target.name]: e.target.value,
            [e.target.username]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.phone]: e.target.value,
            [e.target.street]: e.target.value,
            [e.target.category]: e.target.value
        }
        setData(newdata)
    }


    return (
        <Container>
            <Typography
                className={classes.title}
                variant='h6'
                color='secondary'
                component='h2'
                gutterBottom
            >
                EDIT EMPLOYEE DETAILS
            </Typography>
            <form noValidate autoComplete='off' className={classes.field} onSubmit={(e) => submit(e)}>
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.name}
                    name='name'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={nameError}
                />
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.username}
                    name='username'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={usernameError}
                />
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.email}
                    name='email'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={emailError}
                />
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.phone}
                    name='phone'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={phoneError}
                />
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.street}
                    name='street'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={streetError}
                />
                <TextField
                    onChange={(e) => handle(e)}
                    value={data.category}
                    name='category'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                // error={streetError}
                />
                <Button
                    type="submit"
                    color='primary'
                    endIcon={<EditIcon />}
                >
                    submit
                </Button>
            </form>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </Container>
    )
}
