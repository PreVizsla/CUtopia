import { Dialog, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {CloseBtn} from './ProfileSectionElements'
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {  
        paddingRight: '0px'
    }
}))


export default function AddEduPopup(props) {
    const classes = useStyles();
    const { children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <div style={{display:"flex" , flexDirection:"row", justifyContent:"space-between"}}>
                    <div>Add Education</div>
                    <CloseBtn onClick={()=>{setOpenPopup(false)} }>
                        <CloseIcon/>    
                    </CloseBtn>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children }
            </DialogContent>    
        </Dialog>
    )
}
