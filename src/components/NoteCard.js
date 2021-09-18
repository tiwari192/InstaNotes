import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles } from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';
import React from 'react';
import {Typography} from '@material-ui/core';
import { blue, brown, green, grey, pink, yellow } from '@material-ui/core/colors';


const useStyles =makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category == 'remainder'){
                return blue[500]
            }
            if(note.category == 'events'){
                return green[500]
            }
            if(note.category == 'finance'){
                return pink[500]
            }
            return grey[400];
        }
    },
    colorTitle: {
        color: brown[500]
    }
})


function NoteCard({note, handleDelete}) {

    const classes = useStyles(note)

    return (
        <div>
            <Card elevation = {2} >
                <CardHeader
                    avatar = {
                        <Avatar className = {classes.avatar} >{note.category[0].toUpperCase()}</Avatar>
                    }
                    action = {
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>    
                    }
                    title = {<b className = {classes.colorTitle}>{note.title}</b>}
                    subheader = {note.category}
                />
                <CardContent>
                    <Typography  color = "primary">
                        {note.details}
                    </Typography>
                </CardContent>

            </Card>
            
        </div>
    )
}

export default NoteCard;
