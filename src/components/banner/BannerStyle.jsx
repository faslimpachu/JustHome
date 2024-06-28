import styled from "styled-components";

export const SectionDiv = styled.div`
    .bg-img {
        margin-top: 80px;
        position: relative;
        
        img {
            width: 100%;
            height: 100%;
        }
    }

    .text {
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;
        padding: 20px;

        @media (max-width: 380px) {
              height: auto;

             p{
                margin-top: 60px;
             }
        }



        h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
        }

        p {
            margin-bottom: 15px;
            font-size: 1.25rem;
        }

        button {
            padding: 15px 25px;
            background-color: #254EF0;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        .text {
            h1 {
                font-size: 2.5rem;
            }

            p {
                font-size: 1rem;
            }

            button {
                padding: 12px 20px;
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 480px) {
        .text {
            h1 {
                font-size: 1.8rem;
            }

            p {
                font-size: 0.9rem;
            }

            button {
                padding: 10px 15px;
                font-size: 0.8rem;
            }
        }
    }
`;
