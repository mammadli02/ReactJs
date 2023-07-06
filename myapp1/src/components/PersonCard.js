import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
export class PersonCard extends Component {
  handleDelete = (dataId) => {
    // Veriyi silme işlemini burada gerçekleştirin veya bir işlevi çağırın
    console.log('Veri silindi:', dataId);
  };
  render() {
    return (

<>
<Card  >
      <CardMedia
        sx={{ height: 140 }}
        image={this.props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.props.surname}
        </Typography>
        <Typography variant="body3" color="text.secondary">
        {this.props.age}
        </Typography>
        <button onClick={() => this.handleDelete(this.props.id)}>Sil</button>
      </CardContent>
     
    </Card>



</>    )
  }
}

export default PersonCard
PersonCard.PropTypes={
  name: PropTypes.string,
  surname: PropTypes.string,
  age:PropTypes.number,
  image:PropTypes.string
}