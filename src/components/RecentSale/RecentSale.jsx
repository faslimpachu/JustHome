import React from 'react'
import img1 from '../../assets/img/sale (1).png'
import img2 from '../../assets/img/sale (2).png'

import img4 from '../../assets/img/sale (4).png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { SectionDiv } from './RecentSaleStyle'


function RecentSale() {
    const data = [
        {
            image: img1,
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
            price: "2000/month"
        },
        {
            image: img2,
            title: "Eaton Garth Penthouse",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 7722 18th Ave, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "7",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "7",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "250",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "20000/month"
        },
        {
            image: img1,
            title: "Diamond Manor Apartment",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 7802 20th Ave, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "12",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "10",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "750",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "300000/month"
        },
        {
            image: img4,
            title: "Comfortable Villa Green",
            location: <FmdGoodOutlinedIcon />,
            locationtext: " 214 Kings Hwy, Brooklyn",
            icon1: <HotelOutlinedIcon />,
            icontext1: "8",
            icon2: <BathtubOutlinedIcon />,
            icontext2: "5",
            icon3: <ReviewsOutlinedIcon />,
            icon3text: "450",
            priceicon: <CurrencyRupeeOutlinedIcon />,
            price: "250000/month"
        }


    ]
    return (


        <SectionDiv id='sale'>

            <div className="heading">
                <h1>Recent Properties For Sale </h1>
                <p>with our simplifies  process </p>
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




    )
}

export default RecentSale