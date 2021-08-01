import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({
    diloge: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogActions: {
        justifyContent: 'center'
    }
}))


export default function ConfirmDilog(props) {

    const { confirmDialog, setConfirmDialog } = props;
    const classes = useStyles()

    return (
        <div>
            <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.diloge }}>
                <DialogTitle>

                </DialogTitle>
                <DialogContent>
                    <Typography variant='h6' className={classes.dialogContent}>
                        {confirmDialog.title}
                    </Typography>
                    <Typography variant='subtitle2'>
                        {confirmDialog.subTitle}
                    </Typography>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={() => setConfirmDialog({ ...confirmDialog,isOpen: false })} color="primary">
                        Disagree
                    </Button>
                    <Button 
                    onClick={confirmDialog.onConfirm}
                    color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
