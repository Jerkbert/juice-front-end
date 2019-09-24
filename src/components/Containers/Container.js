import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../Cards/Card'
import './Container.css'


export default function Container({juices}) {
    const[activeCard, setActiveCard] = useState(null)

    return (
        <div>
            <CardContainer juices={juices} setActiveCard={setActiveCard}/>
            {activeCard ? <Card juice={activeCard} activeCard={true} /> : null }
        </div>
    )
}
