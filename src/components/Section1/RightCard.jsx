import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-60 md:w-72 lg:w-80 overflow-hidden relative rounded-2xl md:rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt={props.tag}></img>
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard
