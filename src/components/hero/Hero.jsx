import React from 'react';
import { Background1, MainDiv, SectionMain, TextDiv } from './HeroStyle';
import Bgimg from '../../assets/img/bg-1.jpg';

function Hero() {
    return (
        <SectionMain>
            <MainDiv className="bg">
                <Background1 src={Bgimg} alt="background" />
            </MainDiv>
            <TextDiv>
                <div className="inner-text">
                    <div className="text">
                        <h1>The <span>#1</span> site real estate <br />
                            professionals trust*</h1>
                        <p>From as low as $10 per day with limited time offer discounts.</p>
                    </div>
                    {/* <div className="sale-item">
                        <p className='p-tag'>Sale</p>
                        <p>Rent</p>
                    </div> */}
                    <div className="search-div-container">
                        <div className="search-div">
                            <input type="text" name="text" placeholder='Type' id="text" />
                            <input type="text" name="text" placeholder='Enter Keywords' id="text" />
                            <input className='btn-1' type="button" value="Filter" />
                            <input className='btn' type="button" value="Submit" />
                        </div>
                    </div>
                </div>
            </TextDiv>
        </SectionMain>
    );
}

export default Hero;
