import React from 'react'
import {  FormContainer, Heading, Warning, Content,Questions, SubmitBtn, EmailField} from './SignUpDetailFormElements';

import validate from './ValidateSignup';
import useForm from './useFormSignup';
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "white",
      
	  //height:"6ch"
    }
  },  formControl: {
    minWidth: "170px",
    background: "white",
    marginLeft: "15%",
    marginTop: "15px",
    maxHeight: "90px",

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }, yearControl: {
    minWidth: "125px",
    background: "white",
    marginLeft: "15%",
    marginTop: "10px",
    maxHeight: "90px",
  },
}));

const SignUpForm = ({submitDetailSignup}) => {

	const classes = useStyles();
	
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitDetailSignup,
		validate
	);

    return (
        <FormContainer>
            <Heading>Welcome!!</Heading>
            <Content>While we are cooking your account</Content>
            <Content>Please tell us more about you!</Content>
            <br></br>
            <Questions>What is your major?</Questions>
		    <form onSubmit={handleSubmit} noValidate>
                <FormControl className={classes.formControl} variant="filled">
                <InputLabel id="demo-simple-select-helper-label">major</InputLabel>
                    <Select
                        id="demo-simple-select"
                        value={values.major}
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
{/*                   
                start - end */}
                <div>
                    
                    <Questions>Starting year - Expected/End year</Questions>
                    <FormControl className={classes.yearControl} variant="filled">
                        <InputLabel id="demo-simple-select-helper-label">Start year</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={values.start_year}
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
                    
                    <FormControl className={classes.yearControl} variant="filled">
                        <InputLabel id="demo-simple-select-helper-label">End year</InputLabel>
                        <Select
                            id="demo-simple-select"
                            value={values.end_year}
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
                {errors.year && <Warning >{errors.year}</Warning>}
                <Questions>Do you want to be a Mentor or a Mentee?</Questions>
                <FormControl className={classes.formControl} variant="filled">
                    <InputLabel id="demo-simple-select-helper-label">Mentor/Mentee</InputLabel>
                    <Select
                        id="demo-simple-select"
                        value={values.mentor_mentee}
                        onChange={handleChange}
                        name='mentor_mentee'
                        >
                        <MenuItem name='mentor_mentee' value={''}>select</MenuItem>
                        <MenuItem name='mentor_mentee' value={1}>Mentor</MenuItem>
                        <MenuItem name='mentor_mentee' value={0}>Mentee</MenuItem>
                    </Select>
                </FormControl>
                {errors.mentor_mentee && <Warning >{errors.mentor_mentee}</Warning>}

                {/* <button className='form-input-btn' type='submit'>
                Sign up
                </button> */}
                {/* onClick={routeChange} */}
                {/* <NextBtn to="Forget_Password" type="checkbox" >Forgot password</NextBtn>
                     */}
                <SubmitBtn type="submit" >
                    Finish
                </SubmitBtn> 
            </form>
        </FormContainer>
			
        
    )
}

export default SignUpForm
