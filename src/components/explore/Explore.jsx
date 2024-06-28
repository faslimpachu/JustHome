import { Container } from '@mui/material';
import React from 'react';

import img1 from '../../assets/img/explore (1).png';
import img2 from '../../assets/img/explore (2).png';
import img3 from '../../assets/img/explore (3).png';
import img4 from '../../assets/img/explore (4).png';
import img5 from '../../assets/img/explore (5).png';
import { SectionDiv } from './ExploreStyle';

function Explore() {

    const data = [
        {
            image: img1,
            text: "2 properties",
            place: "Chicago"
        },
        {
            image: img2,
            text: "1 property",
            place: "Los Angeles"
        },
        {
            image: img3,
            text: "3 properties",
            place: "Miami"
        },
        {
            image: img4,
            text: "2 properties",
            place: "Florida"
        },
        {
            image: img5,
            text: "5 properties",
            place: "New York"
        }
    ];

    return (
        <SectionDiv>
            <Container>
                <div className='text'>
                    <h1>Explore Cities</h1>
                    <p>With our dedicated suggestions</p>
                </div>
                <div className="cards-container">
                    {data.map((explore, index) => (
                        <div className="main-card" key={index}>
                            <div className="card">
                                <img src={explore.image} alt={explore.place} />
                                <p>{explore.text}</p>
                                <p><b>{explore.place}</b></p><b></b>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionDiv>
    );
}

export default Explore;
