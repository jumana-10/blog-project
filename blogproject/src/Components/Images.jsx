import React from 'react'
import { IndividualTemplate } from './IndividualTemplate'

export const Images = ({images}) => {

  return images.map((image) =>(
    <IndividualTemplate key={image.id} image={image} />
  )) 
}
