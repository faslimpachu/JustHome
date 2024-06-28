import React from 'react'
import { SectionDiv } from './WorkStyle'
import img from '../../assets/img/poster.jpg'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

function Work() {
    return (
        <SectionDiv>
            <div className="main">
                <div className="left">
                    <div className="image">
                        <img src={img} alt="" />
                        <div className="top-card">
                            <GroupsOutlinedIcon />
                        
                        <div className="top-card-text">
                            <p>Total Clients</p>
                            <p><b>7,000 M</b></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="right">
                    <div className="text">
                        <h1>Why You Should Work
                            With Us</h1>
                        <p>Pellentesque egestas elementum egestas
                            faucibus sem. Velit nunc egestas ut
                            morbi. Leo diam diam nibh eget fermentum
                            massa pretium. Mi mauris nulla ac
                            dictum ut mauris non.</p>
                    </div>
                    <div className="text-flex">
                        <div className="text-left">
                            <h3>Buy or Rent Homes</h3>
                            <p>We sell your home at the best market
                                price and very quickly as well.</p>
                        </div>
                        <div className="text-right">
                            <h3>Trusted by Thousands</h3>
                            <p>We offer you free consultancy to get a
                                loan for your new home.</p>
                        </div>
                    </div>
                    <button>Learn More </button>
                </div>
            </div>

        </SectionDiv>
    )
}

export default Work