import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Title from './title';
import Header from './header'
import Footer from './footer'
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="large">
       
        <Typography component="div" style={{  height: '100vh' }} >
        <Header/>
        <Title/>
          </Typography>
      <Footer/>
      </Container>
    </React.Fragment>
  );
}