import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Grid, LinearProgress} from '@material-ui/core';
import Auth from 'layouts/Auth';
import LoginForm from './LoginForm';
import {useStyles} from './Login.styles';

const LoginView = memo(({login, loginError, isLoading}) => {
  const classes = useStyles();

  /**
   * Render loading bar
   * @returns {boolean || LinearProgress}
   */
  const renderLoadingBar = () => isLoading && <LinearProgress/>;

  return (
    <Auth>
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.imageContainer}
            item
            lg={5}
          >
            <div className={classes.image}/>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <LoginForm login={login} loginError={loginError} isLoading={isLoading}/>
              </div>
              {renderLoadingBar()}
            </div>
          </Grid>
        </Grid>
      </div>
    </Auth>
  );
});

LoginView.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.object,
};

LoginView.displayName = 'LoginView';

export default LoginView;