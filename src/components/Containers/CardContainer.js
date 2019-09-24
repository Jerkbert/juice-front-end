import React from 'react'
import Card from '../Cards/Card'

export default function CardContainer({juices, setActiveCard}) {

    const juiceCards = juices.map( juice => (
        <Card key={juice.id} juice={juice} setActiveCard={setActiveCard}/>
    ))
    return (
        <div className="card-container">
            {juiceCards}
        </div>
    )
}
