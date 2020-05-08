import React from 'react'
import {Card, CardMedia, CardContent} from '@material-ui/core'

export default function ProjectPage(props) {
  return (
    <Card>
      <CardMedia
        component='img'
          image={require(`./images/${props.id}/${props.page.id}.jpg`)}
          height='400'
      />
      <CardContent>
      <h3>{props.page.title}</h3>
      {props.page.content}
      </CardContent>
    </Card>
  )
}