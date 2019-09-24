import React from 'react'

export default function Card({juice, setActiveCard, activeCard}) {
    const { id, name, imageURL } = juice
    return (
        <div className={activeCard ? "active-card" : "card" } onClick={ () => activeCard ? null : setActiveCard(juice)}>
            <h2>{name}</h2>
            {activeCard
                ? (
                    <section>
                        
                        <img src={imageURL} alt={name}></img>
                        <h3>stuff</h3>
                        <h3>Created By: Somebody</h3>
                    </section>
                )
                : null
            }
        </div>
    )
}
