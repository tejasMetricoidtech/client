import { Button, Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Notification from '../components/Notification';
import ConfirmDilog from '../components/ConfirmDilog';

const useStyles = makeStyles({
    btn: {
        marginLeft: 900
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
        marginTop: 20
    },
    table: {
        minWidth: 650,
    }

})


export default function Landing() {
    const classes = useStyles()

    const [userdata, setUserdata] = useState([]);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                console.log(res)
                setUserdata(res.data)
                setNotify({
                    isOpen: true,
                    message: 'submitted successfully',
                    type: 'success'
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then((res) => {
                console.log(res)
            })
        const newUser = userdata.filter(user => user._id !== id)
        setUserdata(newUser)
        setNotify({
            isOpen: true,
            message: 'delete successfully',
            type: 'error'
        })

    }

    const handleTextSearch = (e) => {
        const searchTerm = e.currentTarget.value;
        axios.get("http://localhost:5000/posts").then((res) => {
            if (res.data.success) {
                this.filterContent(res.data.posts, searchTerm)
            }
        })
    }

    function Update(_id) {
        console.log(_id)
    }





    return (
        <Grid container>
            <Container>
                <Grid item xs={12} md={3}>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        color='secondary'
                        component='h2'
                        gutterBottom
                    >
                        EMPLOYEE DETAILS
                    </Typography>
                </Grid>
                <div>
                    <TextField id="standard-basic" label="Search" onChange={(e) => handleTextSearch(e)} />
                </div>

                <div className={classes.btn}>
                    <Link to='/create'>
                        <Button
                            type="submit"
                            color='primary'
                            endIcon={<PostAddIcon />}
                        >
                            ADD
                        </Button>
                    </Link>
                    <Button
                        type="submit"
                        color='primary'
                        endIcon={<CloudDownloadIcon />}
                    >
                        EXPORT
                    </Button>
                </div>

                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell>username</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>phone</TableCell>
                                <TableCell>street</TableCell>
                                <TableCell>category</TableCell>
                                <TableCell></TableCell>
                                <TableCell>action</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userdata.map(user => (
                                <TableRow>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.street}</TableCell>
                                    <TableCell>{user.category}</TableCell>
                                    <TableCell>
                                        <DeleteIcon
                                            onClick={() =>
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title:  'are you shure to delete this record?',
                                                    subTitle: "you can't undu this record",
                                                    onConfirm: () => { handleDelete(user._id) }
                                                })
                                                // 
                                            } />
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/edit/${user._id}`}>
                                            <EditIcon onClick={() => Update(user._id)} />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/view/${user._id}`}>
                                            <VisibilityIcon />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Notification
                    notify={notify}
                    setNotify={setNotify}
                />
                <ConfirmDilog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
            </Container>
        </Grid>
    )
}
