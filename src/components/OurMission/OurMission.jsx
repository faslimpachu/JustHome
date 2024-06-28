import React from 'react'
import { Section } from './OurMissionStyle'

function OurMission() {
    const data = [
        {
            number: "5.2M",
            text: "Owned from properties transactions",
            paragraph: "Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            number: "7K+",
            text: "Properties For Buy",
            paragraph: "Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            number: "4K",
            text: "Properties Buy Sell",
            paragraph: "Pellentesque egestas elementum egestas faucibus sem."
        },
        {
            number: "221+",
            text: "Daily Completed  transactions",
            paragraph: "Pellentesque egestas elementum egestas faucibus sem."
        }
    ]

    return (
        <Section>
            <div className="title">
                <h1>Our mission is to redefine real estate <br />
                    in the customer's favor.</h1>
                <p>See Our Achivements</p>
            </div>
            <div className="crad-div">
                {data.map((card, index) => {
                    return (
                        <div className="card">
                            <h1>{card.number}</h1>
                            <p><b>{card.text}</b></p>
                            <p>{card.paragraph}</p>
                        </div>

                    )
                })}

            </div>
        </Section>
    )
}

export default OurMission