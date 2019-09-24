import React from 'react'
import Card from '../Cards/Card'

export default function CardContainer({juices, setActiveCard}) {

    const juiceCards = juices.map( juice => (
        <Card juice={juice} setActiveCard={setActiveCard}/>
    ))
    return (
        <div>
            {juiceCards}
        </div>
    )
}
