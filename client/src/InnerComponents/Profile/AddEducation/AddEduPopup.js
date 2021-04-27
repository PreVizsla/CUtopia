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
        //this is the popup when user want to add their education
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <div style={{display:"flex" , flexDirection:"row", justifyContent:"space-between"}}>
                    <div>Add Education</div>
                    {/* this is the button to close the popup */}
                    <CloseBtn onClick={()=>{setOpenPopup(false)} }>
                        <CloseIcon/>    
                    </CloseBtn>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {/* this will contain the whole form which is being passed inside this components as a children */}
                {children }
            </DialogContent>    
        </Dialog>
    )
}
