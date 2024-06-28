import React from 'react'
import { SectionDiv } from './FindHomeStyle'
import img from '../../assets/img/right.png'
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

function FindHome() {
    return (
        <SectionDiv>
            <div className="text">
                <h1>How It works? Find a perfect home</h1>
                <p>With Affordable price</p>
            </div>
            <div className="container">
                <div className="left-item">
                    <div className="items">
                        <div className="icon">
                            <RoofingOutlinedIcon />
                        </div>
                        <div className="icon-text">
                            <h2>Find Real Estate</h2>
                            <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco  <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>

                    <div className="items">
                        <div className="icon">
                            <GroupsOutlinedIcon />
                        </div>
                        <div className="icon-text">
                            <h2>Meet Relator</h2>
                            <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>

                    <div className="items">
                        <div className="icon">
                            <KeyOutlinedIcon />
                        </div>
                        <div className="icon-text">
                            <h2>Take The Keys</h2>
                            <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={img} alt="Find Home" />
                </div>
            </div>
        </SectionDiv>
    )
}

export default FindHome
