import React from 'react'
import { SectionDiv } from './BrandStyle'

import logo1 from '../../assets/img/logo (1).png'
import logo2 from '../../assets/img/logo (2).png'
import logo3 from '../../assets/img/logo (3).png'
import logo4 from '../../assets/img/logo (4).png'
import logo5 from '../../assets/img/logo (5).png'

function Brand() {
  return (
    <SectionDiv>
        <div className="text">
            <p>Thousands of world’s leading companies trust Space</p>
        </div>
        <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        </div>
    </SectionDiv>
  )
}

export default Brand