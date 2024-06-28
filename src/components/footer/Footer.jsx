import React from 'react'
import { Container } from './FooterStyle'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Footer() {
    return (
        <Container>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                    <g clip-path="url(#clip0_1_1027)">
                        <path d="M31 61.7002C47.5685 61.7002 61 48.2687 61 31.7002C61 15.1317 47.5685 1.7002 31 1.7002C14.4315 1.7002 1 15.1317 1 31.7002C1 48.2687 14.4315 61.7002 31 61.7002Z" fill="#254EF0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.4197 20.8214C44.5097 20.2289 44.2572 19.6352 43.7684 19.2864C43.2797 18.9389 42.6359 18.8952 42.1047 19.1739C37.8534 21.4064 22.9822 29.2139 18.4147 31.6114C17.8509 31.9064 17.5184 32.5089 17.5672 33.1427C17.6159 33.7764 18.0359 34.3214 18.6384 34.5277C20.4172 35.1364 22.5909 35.8827 25.9997 37.0514L39.7497 24.2002L28.6222 37.9502C32.2572 39.1964 37.9409 41.1452 39.3672 41.6339C39.8134 41.7877 40.3059 41.7339 40.7097 41.4902C41.1134 41.2452 41.3872 40.8339 41.4584 40.3664L44.4197 20.8214Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0391 38.729V42.8165C27.0391 43.444 27.4079 44.0128 27.9791 44.269C28.5516 44.5265 29.2204 44.424 29.6891 44.0065L33.2366 40.854L27.0391 38.729Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1027">
                            <rect width="61" height="61" fill="white" transform="translate(0.5 0.799805)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="text">
                <h1>Stay Up to Date</h1>
                <p>Subscribe to our newsletter to receive our weekly feed.</p>
            </div>
            <div className="search-div">
                <div className="search-box">
                    <input type="search" name="search" placeholder='Your Email' id="" />
                    <button>
                        Send 
                        <SendOutlinedIcon />
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Footer
