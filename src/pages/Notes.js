//json-server --watch data/db.json --port 8000

import { Container, Grid, Paper } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then((res) => res.json()).then((data) => {
      setNotes(data);
    })
  
  }, [])

  const handleDelete = async (id) => {
    //deleting from json-server
    await fetch('http://localhost:8000/notes/' + id, { 
      method: 'DELETE'
    })  

    //deleting from notes list
    const newNotes = notes.filter((note) => note.id != id)
    setNotes(newNotes)

  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        { notes.map((note) => (
            <div key={note.id} md={4} sm={6} xs={12}>
              <NoteCard note = {note}  handleDelete = {handleDelete} />
            </div>
          ))
        }
      </Masonry>
    </Container>
  )
}
