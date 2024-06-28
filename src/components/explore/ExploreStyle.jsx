import styled from "styled-components";

export const SectionDiv = styled.div`

background-color: #F9F9F9;
padding: 15px 18px;
margin-top: 80px;
padding-bottom: 15px;
border-radius: 15px;
margin-left: 25px;
margin-right: 25px;
    .text {
        text-align: center;
        margin-top: 50px;

        h1 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 30px;
        }
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .main-card {
        flex: 1 1 200px; 
        margin-bottom: 20px;
    }

    .card {
       
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
       
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.09);
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 15px;
        }

        p {
            margin: 10px 0;
            font-size: 1rem;
            color: #454242;
        }

        h5 {
            margin-bottom: 10px;
            font-size: 1.2rem;
            color: #333;
        }
    }

    @media (max-width: 768px) {
        .main-card {
            flex: 1 1 100%; /* Full width on small screens */
        }
    }
`;
