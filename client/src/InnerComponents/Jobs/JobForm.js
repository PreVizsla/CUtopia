import react from 'react'
import { EditButtonText, ProfileIconForm,FormContainer,Warning,EditInfoContainer, Form, SaveBtn,  ProfileInfo, CountryInfo, MainProfile, InformationContainer, EditButton, UploadButton, ProfileBackground, IconContainers, ContactButton } from '../Profile/ProfileSection/ProfileSectionElements'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import handleForm from './handleFormJob';
import validate from './ValidateJob';

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

const AddJobForm = ({ submitFormJob }) => {

    const classes = useStyles();

    const { variables, errors, handleChange, handleSubmit } = handleForm(
        submitFormJob,
        validate
    );
    return(
        <>
        <FormContainer>
            <MainProfile >
                <EditInfoContainer id="login">         
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Job Name*
                            <TextField 
                                id="filled-basic" label="Job Name" variant="filled"
                                className={classes.root}
                                fullWidth={true}
                                type='text'
                                name='name'
                                placeholder='Enter your job name'
                                value={variables.name}
                                onChange={handleChange}                                
                            />
                            {errors.name && <Warning>{errors.name}</Warning>}
                        </div>
                        
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Company Name*<br></br>
                            <TextField
                                    id="outlined-basic" label="Company Name" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='company'
                                    placeholder='Enter the company name'
                                    fullWidth={true}
                                    value={variables.company}
                                    onChange={handleChange}
                                />
                        </div>    
                        {errors.company && <Warning>{errors.company}</Warning>}
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
                            Description*
                            <TextField
                                id="filled-textarea" label="Job Description" variant="filled"
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
export default AddJobForm