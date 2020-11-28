import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validate } from './validateForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  email: '',
  password: '',
  re_password: ''
};

export default function ForgotPassword() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const handleChange = evt => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors; // eslint-disable-line

    // check for a new error
    const error = validate[name](value);

    // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && { error: true, helperText: error } })
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: { error: true, helperText: newError } })
          },
          touched: {
            ...acc.touched,
            ...newTouched
          }
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched }
      }
    );

    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
      Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
    //   props.register(values);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Reset your password
        </Typography>
        <div className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Verify Email Address'
            name='email'
            autoComplete='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            {...errors['email']}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='New Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            {...errors['password']}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='re_password'
            label='Verify Password'
            type='password'
            id='re_password'
            autoComplete='current-password'
            value={values.re_password}
            onChange={handleChange}
            onBlur={handleBlur}
            {...errors['re_password']}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            className={classes.submit}
          >
            Reset Password
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to='/login'>
                <Link href='#' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
