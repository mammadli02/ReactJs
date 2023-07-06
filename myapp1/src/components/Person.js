import React, { Component } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PersonCard from './PersonCard';
import PropTypes from 'prop-types';
export class Person extends Component {
  static defaultProps={
    persons:[]
  }
  render() {
    return (
<>


<Container maxWidth="lg" style={{marginTop:"50px"}}>



<Grid container spacing={2}>
{this.props.persons?.map((person,index)=>(
         
        <Grid item lg={4} md={6}  sm={12}>
<PersonCard 
key={index}
{...person}/>

</Grid>

))}
        </Grid>
       

</Container>




</>   
 )
  }
}
Person.PropTypes={
  persons: PropTypes.string
}