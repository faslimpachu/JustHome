import styled from "styled-components";

export const SectionDiv = styled.div`
    margin-top: 100px;
    padding: 30px;


    .heading {
        text-align: center;
        margin-bottom: 20px;

        h1{
            margin-bottom: 10px;
        }
        p{
            margin-bottom: 30px;
        }
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }

    .sub-section {
        flex: 1 1 300px; 
        max-width: 400px; 
    }

    .card-div {
       
        border-radius: 10px;
        overflow: hidden;
       
       
        transition: transform 0.3s;
        
        &:hover {
            transform: scale(1.05);
        }

        hr {
            width: 100%;
            margin: 10px auto;
            border: 0;
            border-top: 1px solid lightgray;
        }
    }

    .image {
        position: relative;
        
        img {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
        }

        .button {
            position: absolute;
            top: 10px;
            left: 10px;
            
            .btn {
                background-color: #1F4B43;
                color: white;
                border: none;
                padding: 7px 10px;
                cursor: pointer;
                border-radius: 15px;
                margin-right: 10px;
            }

            .btn1 {
                background-color: #E7C873;
                color: black;
                border: none;
                padding: 7px 10px;
                cursor: pointer;
                border-radius: 15px;
                text-transform: uppercase;
            }
        }
    }

    .description {
        padding: 10px;
        
        p {
            margin: 5px 0;
            font-size: 1rem;
        }

        .icon-p {
            display: flex;
            align-items: center;
            font-size: 0.9rem;

            svg {
                margin-right: 5px;
                width: 20px;
                height: auto;
            }
        }
    }

    .icons {
        display: flex;
        justify-content: space-around;
        padding: 10px;

        .icon-p {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;

            svg {
                width: 1rem;
                height: auto;
            }
        }
    }

    .price {
        display: flex;
        justify-content: center;
        padding: 10px;
        
        .rupees-p {
            color: #EB664E;
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 700;

            svg {
                margin-right: 5px;
                width: 1rem;
                height: auto;
            }
        }
    }

    @media (max-width: 768px) {
        .card-div {
            margin: 0 10px;
        }
    }
`;
