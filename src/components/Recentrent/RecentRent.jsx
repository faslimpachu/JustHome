import React from 'react'
import img1 from '../../assets/img/rent (1).png'
import img2 from '../../assets/img/rent (2).png'
import img3 from '../../assets/img/rent (3).png'
import img4 from '../../assets/img/rent (4).png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { SectionDiv } from './RecentRentstyle'


function RecentRent() {
    const data = [
        {
            image: img1,
            title: "New Apartment Nice View",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 42 Ave, Brookylm",
            icon1: <HotelOutlinedIcon />,
            icontext1: "3",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "2",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "250",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "8000/month"
        },
        {
            image: img2,
            title: "Villa Garden With Pool",
            location: <FmdGoodOutlinedIcon />,
            locationtext: "6822 Bay Pkwy, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "5",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "4",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "350",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "5000/month"
        },
        {
            image: img3,
            title: "Ely Parkway Apartment",
            location: <FmdGoodOutlinedIcon />,
            locationtext: "7203 20th Ave, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "3",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "4",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "540",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "10000/month"
        },
        {
            image: img4,
            title: "Modern Elegant Apartment",
            location: <FmdGoodOutlinedIcon />,
            locationtext: "1458 W Taylor St",
            icon1: <HotelOutlinedIcon />,
            icontext1: "6",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "4",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "840",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "20000/month"
        }
    ];

    return (
        <SectionDiv id='rent'>

            <div className="heading">
                <h1>Recent Properties For Rent </h1>
                <p>with our dedicated suggestions </p>
            </div>
            <div className="cards-container">
                {data.map((home, index) => (
                    <div className="sub-section" key={index}>
                        <div className="card-div">
                            <div className="image">
                                <img src={home.image} alt={home.title} />
                                <div className="button">
                                    <button className='btn'>FOR RENT</button>
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


export default RecentRent