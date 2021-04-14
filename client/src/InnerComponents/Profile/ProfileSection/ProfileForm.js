import { ProfileIconForm,FormContainer,Warning,EditInfoContainer, SaveBtn, MainProfile, InformationContainer, ProfileBackground } from './ProfileSectionElements'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import handleForm from './handleFormProfile';
import validate from './ValidateProfile';
import clement from '../../../assets/frontend-temp/clement.jpg'
import Background from '../../../assets/images/profileBG.jpg'

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
        //marginLeft: "15%",
        //marginTop: "15px",
        maxHeight: "60px",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }, yearControl: {
        minWidth: "125px",
        background: "white",
        marginLeft: "15%",
        marginTop: "10px",
        maxHeight: "60px",
      }, inputs:{
        background: "white",
        marginTop:"10px",
        marginLeft:"15%"
      }
  }));

const ProfileForm = ({ submitFormLogin }) => {

    const classes = useStyles();

    const { variables, errors, handleChange, handleSubmit } = handleForm(
        submitFormLogin,
        validate
    );
    return(
        <>
        <FormContainer>
            <MainProfile >
                {/* CUtopia background */}
                <ProfileBackground style={{backgroundImage:"url(" + { Background } + ")"}} alt="background picture" />
                {/* Containing the bottom half of the profile section */}
                <InformationContainer>
                    {/* Profile Avatar */}
                    <ProfileIconForm src={clement}/>
                    {/*Edit avatar button */}
                </InformationContainer>
                <EditInfoContainer id="login">         
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Name*
                            <TextField 
                                id="filled-basic" label="Name" variant="filled"
                                className={classes.root}
                                fullWidth={true}
                                type='text'
                                name='name'
                                placeholder='Enter your name'
                                value={variables.name}
                                onChange={handleChange}
                                
                            />
                            {errors.name && <Warning>{errors.name}</Warning>}
                        </div>
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Major*<br></br>
                            <FormControl className={classes.formControl} variant="filled">
                                <InputLabel id="demo-simple-select-helper-label">major</InputLabel>
                                    <Select
                                        id="demo-simple-select"
                                        value={variables.major}
                                        onChange={handleChange}
                                        name='major'
                                        >
                                        <MenuItem name='major' value={''}>select</MenuItem>
                                        <MenuItem name='major' value={'AISTN'}>AISTN</MenuItem>
                                        <MenuItem name='major' value={'ANTHN'}>ANTHN</MenuItem>
                                        <MenuItem name='major' value={'ARCHN'}>ARCHN</MenuItem>
                                        <MenuItem name='major' value={'BAJDN'}>BAJDN</MenuItem>
                                        <MenuItem name='major' value={'BCHEN'}>BCHEN</MenuItem>
                                        <MenuItem name='major' value={'BCMEN'}>BCMEN</MenuItem>
                                        <MenuItem name='major' value={'BECEN'}>BECEN</MenuItem>
                                        <MenuItem name='major' value={'BERGN'}>BERGN</MenuItem>
                                        <MenuItem name='major' value={'BIOLN'}>BIOLN</MenuItem>
                                        <MenuItem name='major' value={'BMEDN'}>BMEDN</MenuItem>
                                        <MenuItem name='major' value={'BMEGN'}>BMEGN</MenuItem>
                                        <MenuItem name='major' value={'BMEDN'}>BMEDN</MenuItem>
                                        <MenuItem name='major' value={'BMSCN'}>BMSCN</MenuItem>
                                        <MenuItem name='major' value={'BSCIN'}>BSCIN</MenuItem>
                                        <MenuItem name='major' value={'BSCGN'}>BSCGN</MenuItem>
                                        <MenuItem name='major' value={'BSSCN'}>BSSCN</MenuItem>
                                        <MenuItem name='major' value={'CCSSAN'}>CCSSAN</MenuItem>
                                        <MenuItem name='major' value={'CCSSSN'}>CCSSSN</MenuItem>
                                        <MenuItem name='major' value={'CENGN'}>CENGN</MenuItem>
                                        <MenuItem name='major' value={'CHEDN'}>CHEDN</MenuItem>
                                        <MenuItem name='major' value={'CHEMN'}>CHEMN</MenuItem>
                                        <MenuItem name='major' value={'CHESB'}>CHESB</MenuItem>
                                        <MenuItem name='major' value={'CHLLN'}>CHLLN</MenuItem>
                                        <MenuItem name='major' value={'CHPRN'}>CHPRN</MenuItem>                   
                                        <MenuItem name='major' value={'CLEDN'}>CLEDN</MenuItem>
                                        <MenuItem name='major' value={'CMBIN'}>CMBIN</MenuItem>
                                        <MenuItem name='major' value={'COMMN'}>COMMN</MenuItem>
                                        <MenuItem name='major' value={'CSCIN'}>CSCIN</MenuItem>
                                        <MenuItem name='major' value={'CULSN'}>CULSN</MenuItem>
                                        <MenuItem name='major' value={'CUMTN'}>CUMTN</MenuItem>
                                        <MenuItem name='major' value={'DSPSN'}>DSPSN</MenuItem>

                                        <MenuItem name='major' value={'ECONN'}>ECONN</MenuItem>
                                        <MenuItem name='major' value={'EEENN'}>EEENN</MenuItem>
                                        <MenuItem name='major' value={'ELEDN'}>ELEDN</MenuItem>
                                        <MenuItem name='major' value={'ELEGN'}>ELEGN</MenuItem>
                                        <MenuItem name='major' value={'ENGEN'}>ENGEN</MenuItem>
                                        <MenuItem name='major' value={'ENSCN'}>ENSCN</MenuItem>
                                        <MenuItem name='major' value={'ESHEN'}>ESHEN</MenuItem>
                                        <MenuItem name='major' value={'ESSCN'}>ESSCN</MenuItem>

                                        <MenuItem name='major' value={'FAASN'}>FAASN</MenuItem>
                                        <MenuItem name='major' value={'FNSCN'}>FNSCN</MenuItem>
                                        <MenuItem name='major' value={'FTECN'}>FTECN</MenuItem>

                                        <MenuItem name='major' value={'GCOMN'}>GCOMN</MenuItem>
                                        <MenuItem name='major' value={'GDRSN'}>GDRSN</MenuItem>
                                        <MenuItem name='major' value={'GLBSN'}>GLBSN</MenuItem>
                                        <MenuItem name='major' value={'GLSDN'}>GLSDN</MenuItem>
                                        <MenuItem name='major' value={'GLEFN'}>GLEFN</MenuItem>
                                        <MenuItem name='major' value={'GPADN'}>GPADN</MenuItem>
                                        <MenuItem name='major' value={'GRMDN'}>GRMDN</MenuItem>

                                        <MenuItem name='major' value={'HISTN'}>HISTN</MenuItem>
                                        <MenuItem name='major' value={'HTMGN'}>HTMGN</MenuItem>
                                        <MenuItem name='major' value={'HTMGB'}>HTMGB</MenuItem>

                                        <MenuItem name='major' value={'IBBAB'}>IBBAB</MenuItem>
                                        <MenuItem name='major' value={'IBBAC'}>IBBAC</MenuItem>
                                        <MenuItem name='major' value={'IERGN'}>IERGN</MenuItem>
                                        <MenuItem name='major' value={'IFAAB'}>IFAAB</MenuItem>
                                        
                                        <MenuItem name='major' value={'JASPN'}>JASPN</MenuItem>

                                        <MenuItem name='major' value={'LAWSN'}>BAJDN</MenuItem>
                                        <MenuItem name='major' value={'LINGN'}>LINGN</MenuItem>
                                        <MenuItem name='major' value={'LSEDN'}>LSEDN</MenuItem>

                                        <MenuItem name='major' value={'MAEGN'}>MAEGN</MenuItem>
                                        <MenuItem name='major' value={'MATHN'}>MATHN</MenuItem>
                                        <MenuItem name='major' value={'MBTEN'}>MBTEN</MenuItem>
                                        <MenuItem name='major' value={'MEDUN'}>MEDUN</MenuItem>
                                        <MenuItem name='major' value={'MIEGN'}>MIEGN</MenuItem>
                                        <MenuItem name='major' value={'MUSCN'}>MUSCN</MenuItem>

                                        <MenuItem name='major' value={'NSCIN'}>NSCIN</MenuItem>
                                        <MenuItem name='major' value={'NURSN'}>NURSN</MenuItem>
                                
                                        <MenuItem name='major' value={'PACCN'}>PACCN</MenuItem>
                                        <MenuItem name='major' value={'PESHN'}>PESHN</MenuItem>
                                        <MenuItem name='major' value={'PHARN'}>PHARN</MenuItem>
                                        <MenuItem name='major' value={'PHILN'}>PHILN</MenuItem>
                                        <MenuItem name='major' value={'PHPCN'}>PHPCN</MenuItem>
                                        <MenuItem name='major' value={'PHYSN'}>PHYSN</MenuItem>
                                        <MenuItem name='major' value={'PSYCN'}>PSYCN</MenuItem>
                                        
                                        <MenuItem name='major' value={'QFINN'}>QFINN</MenuItem>
                                        <MenuItem name='major' value={'QFRMN'}>QFRMN</MenuItem>

                                        <MenuItem name='major' value={'RELSN'}>RELSN</MenuItem>
                                        <MenuItem name='major' value={'RMSCN'}>RMSCN</MenuItem>

                                        <MenuItem name='major' value={'SEEMN'}>SEEMN</MenuItem>
                                        <MenuItem name='major' value={'SOCIN'}>SOCIN</MenuItem>
                                        <MenuItem name='major' value={'SOWKN'}>SOWKN</MenuItem>
                                        <MenuItem name='major' value={'STATN'}>STATN</MenuItem>
                                        
                                        <MenuItem name='major' value={'THEON'}>THEON</MenuItem>
                                        <MenuItem name='major' value={'TRANN'}>TRANN</MenuItem>

                                        <MenuItem name='major' value={'URSPN'}>URSPN</MenuItem>

                                    </Select>
                            </FormControl>
                            {errors.major && <Warning>{errors.major}</Warning>}    
                        </div>
                        {/* city country flex */}
                        <div style={{display:"flex", flexDirection:"row", }}>
                            <div className='form-inputs' style={{marginBottom:15+"px"}}>
                                City<br></br>
                                <TextField
                                    id="outlined-basic" label="City" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='city'
                                    value={variables.city}
                                    onChange={handleChange}
                                />
                            </div>                         
                            <div className='form-inputs' style={{marginBottom:15+"px", marginLeft:30+"px"}}>
                                Country <br></br>
                                <TextField
                                    id="outlined-basic" label="Country" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='country'
                                    value={variables.country}
                                    onChange={handleChange}
                                />
                            </div>      
                        </div>                 
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Heading
                            <TextField
                                id="filled-textarea" label="Heading" variant="filled"
                                className={classes.area}
                                fullWidth={true}
                                type='text'
                                name='Heading'
                                multiline
                                value={variables.Heading}
                                onChange={handleChange}
                                inputProps={{ className: classes.textarea }}
                            />
                        </div>
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Education<br></br>
                            <TextField
                                    id="outlined-basic" label="Country" variant="filled"
                                    //className={classes.input}
                                    type='text'
                                    name='country'
                                    value={variables.country}
                                    onChange={handleChange}
                                />
                        </div>

                        <SaveBtn type="submit" >
                            save
                        </SaveBtn> 
                    </form>
                </EditInfoContainer>
            </MainProfile>
        </FormContainer>

        </>
    )
}
export default ProfileForm