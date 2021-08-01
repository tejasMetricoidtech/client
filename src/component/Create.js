import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({

    title: {
        textDecoration: 'underline',
        // marginBottom: 20
        padding: 20
    },
    field: {
        marginTop: 50,
        marginBottom: 20,
    }
})
export default function Create() {

    const classes = useStyles()
    const history = useHistory()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [category, setCategory] = useState('')
    const [userdata, setUserdata] = useState([]);
    // set error
    const [nameError, setNameError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [streetError, setStreetError] = useState(false)
    const [categoryError, setCategoryError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setUsernameError(false)
        setEmailError(false)
        setPhoneError(false)
        setStreetError(false)
        setCategoryError(false)

        if (name === '') {
            setNameError(true)
        }

        if (username === '') {
            setUsernameError(true)
        }

        if (email === '') {
            setEmailError(true)
        }

        if (phone === '') {
            setPhoneError(true)
        }

        if (street === '') {
            setStreetError(true)
        }

        if (category === '') {
            setCategoryError(true)
        }

        if (name && username && email && phone && street && category) {
            console.log(name, username, email, phone, street, category)
            fetch('http://localhost:5000/posts/add', {
                method: 'POST',
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify({ name, username, email, phone, street, category })
            })
                .then(() => history.push('/'))
        }
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
                CREATE EMPLOYEE DETAILS
            </Typography>
            <form noValidate autoComplete='off' className={classes.field} onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    label='name'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={nameError}
                />
                <TextField
                    onChange={(e) => setUsername(e.target.value)}
                    label='username'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={usernameError}
                />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label='email'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={emailError}
                />
                <TextField
                    onChange={(e) => setPhone(e.target.value)}
                    label='phone'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={phoneError}
                />
                <TextField
                    onChange={(e) => setStreet(e.target.value)}
                    label='street'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={streetError}
                />
                <TextField
                    onChange={(e) => setCategory(e.target.value)}
                    label='category'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={categoryError}
                />
                <Button
                    type="submit"
                    color='primary'
                    endIcon={<AddIcon />}
                >
                    submit
                </Button>
            </form>
        </Container>
    )
}
