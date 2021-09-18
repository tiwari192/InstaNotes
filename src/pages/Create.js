import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send'
import { FormControl, Radio, FormControlLabel, FormLabel, makeStyles, RadioGroup, TextField } from '@material-ui/core'
import {useHistory} from 'react-router-dom'


//Using Custom CSS 
const useStyles = makeStyles({

  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block',
  }

})


export default function Create() {

  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('finance')
  const history = useHistory()

  //handling Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if(title == '') {
      setTitleError(true)
    }

    if(details == '') {
      setDetailsError(true)
    }

    if(title && details)
      
      fetch('http://localhost:8000/notes',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))


  }


  return (
    <Container>
      
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit} >
        <TextField className={classes.field}
          onChange = {(e) => setTitle(e.target.value)}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error = {titleError}
        />

        <TextField className={classes.field}
          onChange = {(e) => setDetails(e.target.value)}
          variant="outlined"
          label="Note Details"
          color="secondary"
          fullWidth
          multiline rows={5}
          required
          error = {detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={ (e) => setCategory(e.target.value)}>
            <FormControlLabel label='Remainder' value='remainder' control = {<Radio />} />
            <FormControlLabel label='ToDo' value='todo' control = {<Radio />} />
            <FormControlLabel label='Finance' value='finance' control = {<Radio />} />
            <FormControlLabel label='Events' value='events' control = {<Radio />} />
          </RadioGroup>
        </FormControl>

        <Button 
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>

      </form>




    </Container>
  )
}
