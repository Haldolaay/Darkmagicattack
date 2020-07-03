import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Title from './title';
import Header from './header'
import Footer from './footer'
import Home from './home'
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
       
        <Typography component="div" style={{  height: '100vh' }} >
        <Header/>
        <Title/>
        <Home/>
          </Typography>
      <Footer/>
      </Container>
    </React.Fragment>
  );
}