import React from 'react';
import rentimage1 from '../../assets/img/rent (1).png';
import rentimage2 from '../../assets/img/rent (2).png';
import rentimage3 from '../../assets/img/rent (3).png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import { SectionDiv } from './DiscoverStyle';

function Discover() {

    const data = [
        {
            image: rentimage1,
            title: "Skyper Pool Apartment",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 1020 Bloomingdale Ave",
            icon1: <HotelOutlinedIcon />,
            icontext1: "4",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "2",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "450",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "28000"
        },
        {
            image: rentimage2,
            title: "North Dillard Street",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 4330 Bell Shoals Rd",
            icon1: <HotelOutlinedIcon />,
            icontext1: "4",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "2",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "400",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "250/month"
        },
        {
            image: rentimage3,
            title: "Eaton garth Penthouse",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 7222 18th Ave, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "4",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "2",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "450",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "18000"
        }
    ];

    return (
        <SectionDiv id='discover'>
            <div className="heading">
                <h1>Discover Our Best Deals</h1>
                <p>get it now with low price</p>
            </div>
            <div className="cards-container">
                {data.map((home, index) => (
                    <div className="sub-section" key={index}>
                        <div className="card-div">
                            <div className="image">
                                <img src={home.image} alt={home.title} />
                                <div className="button">
                                    <button className='btn'>FOR SALE</button>
                                    <button className='btn1'>Featured</button>
                                </div>
                            </div>
                            <div className="description">
                                <p><b>{home.title}</b></p>
                                <p className='icon-p'>{home.location} {home.locationtext}</p>
                                <hr />
                            </div>
                            <div className="icons">
                                <p className='icon-p'>{home.icon1}{home.icontext1}</p>
                                <p className='icon-p'>{home.icon2}{home.icontext2}</p>
                                <p className='icon-p'>{home.icon3}{home.icon3text}</p>
                                <div className="price">
                                    <p className='rupees-p'>{home.priceicon} {home.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionDiv>
    );
}

export default Discover;
