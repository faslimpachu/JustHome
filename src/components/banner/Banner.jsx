import React from 'react'
import { SectionDiv } from './BannerStyle'
import img from '../../assets/img/banner.png'

function Banner() {
  return (
    <SectionDiv>
        <div className="content">
            <div className="bg-img">
                <img src={img} alt="image banner" />
                <div className="text">
                <h1>Discover a place you'll <br />
                love to live</h1>
                <p>Pellentesque egestas elementum egestas faucibus sem. Velit nunc <br />
                egestas ut morbi. Leo diam diam</p>
                <button>View Properties</button>
                </div>
            </div>
        </div>
    </SectionDiv>
  )
}

export default Banner
