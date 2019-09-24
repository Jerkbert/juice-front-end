import React from 'react'
import './Cards.css'

export default function Card({juice, setActiveCard, activeCard}) {
    const { ing, directions, name, imageURL, creator } = juice
    return (
        <div className={activeCard ? "active-card" : "card" } onClick={ () => activeCard ? null : setActiveCard(juice)}>
            <h1>{name}</h1>
            {activeCard
                ? (
                    <section className='details'>
                        <img src={imageURL} alt={name}></img>
                        <h2>Ingredients: {ing}</h2>
                        <h2>Directions: {directions}</h2>
                        <h3>Created By: {creator}</h3>
                        
                    </section>
                )
                : null
            }
        </div>
    )
}
