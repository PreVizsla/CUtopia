import react from 'react'
import { EditButtonText, ProfileIconForm,FormContainer,Warning,EditInfoContainer, Form, SaveBtn,  ProfileInfo, CountryInfo, MainProfile, InformationContainer, EditButton, UploadButton, ProfileBackground, IconContainers, ContactButton } from '../Profile/ProfileSection/ProfileSectionElements'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import handleForm from './handleFormEvent';
import validate from './ValidateEvent';

const useStyles = makeStyles((theme) => ({
    upload: {
      fontSize: "45px",
    },  edit: {
      marginLeft:"10px",
      fontSize: "25px",
    },
    textarea: {
      resize: "vertical",
      
    },  formControl: {
        minWidth: "170px",
        background: "white",
        maxHeight: "60px",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }, yearControl: {
        minWidth: "140px",
        background: "white",
        marginTop: "10px",
        maxHeight: "60px",
      }, inputs:{
        background: "white",
        marginTop:"10px",
        marginLeft:"15%"
      }
  }));

const AddEventForm = ({ submitFormEvent }) => {

    const classes = useStyles();

    const { variables, errors, handleChange, handleSubmit } = handleForm(
        submitFormEvent,
        validate
    );
    return(
        <>
        <FormContainer>
            <MainProfile >
                <EditInfoContainer id="login">         
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Event Name*
                            <TextField 
                                id="filled-basic" label="Event Name" variant="filled"
                                className={classes.root}
                                fullWidth={true}
                                type='text'
                                name='name'
                                placeholder='Enter your Event name'
                                value={variables.name}
                                onChange={handleChange}                                
                            />
                            {errors.name && <Warning>{errors.name}</Warning>}
                        </div>
                        
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Event date*<br></br>
                            <TextField
                                    id="outlined-basic" label="Event date" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='date'
                                    placeholder='Enter the Event date'
                                    fullWidth={true}
                                    value={variables.date}
                                    onChange={handleChange}
                                />
                        </div>    
                        {errors.date && <Warning>{errors.date}</Warning>}
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Location*<br></br>
                            <TextField
                                    id="outlined-basic" label="Location" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='location'
                                    placeholder='Enter the location'
                                    fullWidth={true}
                                    value={variables.location}
                                    onChange={handleChange}
                                />
                        </div>    
                        {errors.location && <Warning>{errors.location}</Warning>}
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Event Description*
                            <TextField
                                id="filled-textarea" label="Event Description" variant="filled"
                                className={classes.area}
                                fullWidth={true}
                                type='text'
                                name='description'
                                multiline
                                value={variables.description}
                                onChange={handleChange}
                                inputProps={{ className: classes.textarea }}
                            />
                        </div>
                        {errors.description && <Warning>{errors.description}</Warning>}
                        <SaveBtn type="submit" >
                            Post
                        </SaveBtn> 
                    </form>
                </EditInfoContainer>
            </MainProfile>
        </FormContainer>

        </>
    )
}
export default AddEventForm