import React from 'react'
import { Section } from './RecentPropertyStyle'
import img1 from '../../assets/img/house (1).png'
import img2 from '../../assets/img/house (2).png'
import img3 from '../../assets/img/house (3).png'
import img4 from '../../assets/img/house (4).png'
import img5 from '../../assets/img/house (5).png'

function RecentProperty() {
    const data = [
        {
            image: img1,
            title: "Town House",
            subtitle: "2 properties"
        },
        {
            image: img2,
            title: "Modern Villa",
            subtitle: "10 properties"
        },
        {
            image: img3,
            title: "Apartment",
            subtitle: "3 properties"
        },
        {
            image: img4,
            title: "Single Family",
            subtitle: "5 properties"
        },
        {
            image: img5,
            title: "Office",
            subtitle: "7 properties"
        }
    ];

    return (
        <Section>
            <div className="text">
                <h1>Explore Our Properties</h1>
                <p>well maintained houses with affordable price</p>
            </div>
            <div className="images">
                {data.map((property, index) => (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <img src={property.image} alt={property.title} />
                            <div className="card-text">
                                <h3>{property.title}</h3>
                                <p>{property.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default RecentProperty;
