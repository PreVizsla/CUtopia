import { FormContainer,Warning,EditInfoContainer, SaveBtn, MainProfile } from './ProfileSectionElements'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import handleForm from './handleFormProfile';
import validate from './ValidateProfile';

//for the material UI design
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

const AddEduForm = ({ submitFormLogin, education_template }) => {

    const classes = useStyles();

    // for handling changes in the form
    const { variables, errors, handleChange, handleSubmit } = handleForm(
        submitFormLogin,
        validate,
        education_template
    );
    return(
        //this is for the form when user adding their education
        <>
        <FormContainer>
            <MainProfile >
                <EditInfoContainer id="login">         
                    <form onSubmit={handleSubmit} noValidate>
                        {/* this is the institution section */}
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            institution*
                            <TextField 
                                id="filled-basic" label="Institution" variant="filled"
                                className={classes.root}
                                fullWidth={true}
                                type='text'
                                name='school'
                                placeholder='Enter your institution'
                                value={variables.school}
                                onChange={handleChange}                                
                            />
                            {errors.school && <Warning>{errors.school}</Warning>}
                        </div>
                        {/* this is the degree section */}
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            Degree*<br></br>
                            <TextField
                                    id="outlined-basic" label="degree" variant="filled"
                                    type='text'
                                    name='degree'
                                    multiline
                                    fullWidth={true}
                                    value={variables.degree}
                                    onChange={handleChange}
                                />
                        </div>    
                        {errors.degree && <Warning>{errors.degree}</Warning>}
                        
                        Starting year - Expected/End year <br></br>
                        {/* this is the starting year part */}
                        <div style={{display:"flex", flexDirection:"row", }}>
                            <FormControl className={classes.yearControl} variant="filled">
                                <InputLabel id="demo-simple-select-helper-label">Start year</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    value={variables.start_year}
                                    onChange={handleChange}
                                    name='start_year'
                                    >
                                    <MenuItem name='start_year' value={''}>select</MenuItem>
                                    <MenuItem name='start_year' value={1990}>1990</MenuItem>
                                    <MenuItem name='start_year' value={1991}>1991</MenuItem>
                                    <MenuItem name='start_year' value={1992}>1992</MenuItem>
                                    <MenuItem name='start_year' value={1993}>1993</MenuItem>
                                    <MenuItem name='start_year' value={1994}>1994</MenuItem>
                                    <MenuItem name='start_year' value={1995}>1995</MenuItem>
                                    <MenuItem name='start_year' value={1996}>1996</MenuItem>
                                    <MenuItem name='start_year' value={1997}>1997</MenuItem>
                                    <MenuItem name='start_year' value={1998}>1998</MenuItem>
                                    <MenuItem name='start_year' value={1999}>1999</MenuItem>
                                    <MenuItem name='start_year' value={2000}>2000</MenuItem>
                                    <MenuItem name='start_year' value={2001}>2001</MenuItem>
                                    <MenuItem name='start_year' value={2002}>2002</MenuItem>
                                    <MenuItem name='start_year' value={2003}>2003</MenuItem>
                                    <MenuItem name='start_year' value={2004}>2004</MenuItem>
                                    <MenuItem name='start_year' value={2005}>2005</MenuItem>
                                    <MenuItem name='start_year' value={2006}>2006</MenuItem>
                                    <MenuItem name='start_year' value={2007}>2007</MenuItem>
                                    <MenuItem name='start_year' value={2008}>2008</MenuItem>
                                    <MenuItem name='start_year' value={2009}>2009</MenuItem>
                                    <MenuItem name='start_year' value={2010}>2010</MenuItem>
                                    <MenuItem name='start_year' value={2011}>2011</MenuItem>
                                    <MenuItem name='start_year' value={2012}>2012</MenuItem>
                                    <MenuItem name='start_year' value={2013}>2013</MenuItem>
                                    <MenuItem name='start_year' value={2014}>2014</MenuItem>
                                    <MenuItem name='start_year' value={2015}>2015</MenuItem>
                                    <MenuItem name='start_year' value={2016}>2016</MenuItem>
                                    <MenuItem name='start_year' value={2017}>2017</MenuItem>
                                    <MenuItem name='start_year' value={2018}>2018</MenuItem>
                                    <MenuItem name='start_year' value={2019}>2019</MenuItem>
                                    <MenuItem name='start_year' value={2020}>2020</MenuItem>
                                    <MenuItem name='start_year' value={2021}>2021</MenuItem>
                                </Select>
                            </FormControl>
                            {/* this is the end year part */}
                            <div style={{marginLeft:"30px"}}>
                                <FormControl className={classes.yearControl} variant="filled">
                                    <InputLabel id="demo-simple-select-helper-label">End year</InputLabel>
                                    <Select
                                        id="demo-simple-select"
                                        value={variables.end_year}
                                        onChange={handleChange}
                                        name='end_year'
                                        >
                                        <MenuItem name='end_year' value={''}>select</MenuItem>
                                        <MenuItem name='end_year' value={1990}>1990</MenuItem>
                                        <MenuItem name='end_year' value={1991}>1991</MenuItem>
                                        <MenuItem name='end_year' value={1992}>1992</MenuItem>
                                        <MenuItem name='end_year' value={1993}>1993</MenuItem>
                                        <MenuItem name='end_year' value={1994}>1994</MenuItem>
                                        <MenuItem name='end_year' value={1995}>1995</MenuItem>
                                        <MenuItem name='end_year' value={1996}>1996</MenuItem>
                                        <MenuItem name='end_year' value={1997}>1997</MenuItem>
                                        <MenuItem name='end_year' value={1998}>1998</MenuItem>
                                        <MenuItem name='end_year' value={1999}>1999</MenuItem>
                                        <MenuItem name='end_year' value={2000}>2000</MenuItem>
                                        <MenuItem name='end_year' value={2001}>2001</MenuItem>
                                        <MenuItem name='end_year' value={2002}>2002</MenuItem>
                                        <MenuItem name='end_year' value={2003}>2003</MenuItem>
                                        <MenuItem name='end_year' value={2004}>2004</MenuItem>
                                        <MenuItem name='end_year' value={2005}>2005</MenuItem>
                                        <MenuItem name='end_year' value={2006}>2006</MenuItem>
                                        <MenuItem name='end_year' value={2007}>2007</MenuItem>
                                        <MenuItem name='end_year' value={2008}>2008</MenuItem>
                                        <MenuItem name='end_year' value={2009}>2009</MenuItem>
                                        <MenuItem name='end_year' value={2010}>2010</MenuItem>
                                        <MenuItem name='end_year' value={2011}>2011</MenuItem>
                                        <MenuItem name='end_year' value={2012}>2012</MenuItem>
                                        <MenuItem name='end_year' value={2013}>2013</MenuItem>
                                        <MenuItem name='end_year' value={2014}>2014</MenuItem>
                                        <MenuItem name='end_year' value={2015}>2015</MenuItem>
                                        <MenuItem name='end_year' value={2016}>2016</MenuItem>
                                        <MenuItem name='end_year' value={2017}>2017</MenuItem>
                                        <MenuItem name='end_year' value={2018}>2018</MenuItem>
                                        <MenuItem name='end_year' value={2019}>2019</MenuItem>
                                        <MenuItem name='end_year' value={2020}>2020</MenuItem>
                                        <MenuItem name='end_year' value={2021}>2021</MenuItem>
                                        <MenuItem name='end_year' value={2022}>2022</MenuItem>
                                        <MenuItem name='end_year' value={2023}>2023</MenuItem>
                                        <MenuItem name='end_year' value={2024}>2024</MenuItem>
                                        <MenuItem name='end_year' value={2025}>2025</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        {errors.year && <Warning >{errors.year}</Warning>}
                        <br></br>
                        {/* this is the description section */}
                        <div className='form-inputs' style={{marginBottom:15+"px"}}>
                            description
                            <TextField
                                id="filled-textarea" label="Description" variant="filled"
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
                        {/* this is the button for handling submit */}
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
export default AddEduForm