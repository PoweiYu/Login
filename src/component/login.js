import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { loggin } from '../action/auth';
import * as yup from 'yup';
import { Button , TextField , Grid} from '@mui/material';


const SignupForm = () => {

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const isLogged = useSelector(state => state.login);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
                     email: '',
                     password: '',
                    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(loggin());
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Grid container spacing = {2}>
            <Grid xs={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
        </div>
        {isLogged?'':<Button color="primary" variant="contained" type="submit">Submit</Button>}
      </form>
          {isLogged?　<h3>You are loggin</h3>:''}
    </div>
  );
};

export default SignupForm;