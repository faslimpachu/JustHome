import styled from "styled-components";

export const SectionDiv = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 20px;
    margin-top: 150px;

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        .left, .right {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .image {
            position: relative;
            
            img {
                width: 100%;
                max-width: 400px;
                height: auto;
                border-radius: 10px;
            }

            .top-card {
                position: absolute;
                top: 0;
                left: 0;
                padding: 10px;
                margin-top: 15px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                background-color: white;
                border-radius: 10px;

                svg {
                    background-color: #d4d49e;
                    padding: 5px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                }

                .top-card-text {
                    p {
                        margin: 0;
                    }
                }
            }
        }

        .right {
            max-width: 500px;

            .text {
                text-align: left;

                h1 {
                    margin-bottom: 20px;
                }

                p {
                    margin-bottom: 20px;
                    color: #1A1A1A;
                }
            }

            .text-flex {
                display: flex;
                justify-content: space-between;
                gap: 50px;
                margin-top: 15px;

                .text-left, .text-right {
                    flex: 1;

                    h3 {
                        margin-bottom: 10px;
                    }

                    p {
                        margin: 0;
                    }
                }
            }

            button {
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #3f51b5;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        .main {
            flex-direction: column;

            .image img {
                max-width: 300px;
            }

            .right {
                .text {
                    text-align: center;

                    h1 {
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                    }
                }

                .text-flex {
                    flex-direction: column;
                    gap: 20px;
                }

                button {
                    font-size: 1rem;
                    padding: 10px 20px;
                }
              
            }
        }
    }
`;
