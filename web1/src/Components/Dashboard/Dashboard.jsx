import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Dashboard() {
    let c=localStorage.getItem('user')
    c=JSON.parse(c)
    if(c){
    return (
        <div>
          <h1>{c.name}</h1>
          <h1>{c.email}</h1>
        </div>
    )
}
else{
    return (
        <div>
          You need to Login first

          <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        PENDING REQUEST
      </Typography>
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography variant="body2">
        {/* Information */}
        <br />
        {/* {'"a benevolent smile"'} */}
      </Typography>
    </CardContent>
    <CardActions >
      <Button size="large" color='success'>Approved</Button>
      <Button size="large" color='success'>Rejected</Button>
    </CardActions>
        </div>
    )  
}
}

export default Dashboard

