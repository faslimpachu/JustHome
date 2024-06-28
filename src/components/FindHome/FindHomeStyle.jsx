import styled from "styled-components";

export const SectionDiv = styled.div`
    .text {
        text-align: center;
        margin-bottom: 15px;
        margin-top: 80px;

        p {
            margin-top: 10px;
        }
    }

    .container {
        display: flex;
        justify-content: center;
        gap: 80px;
        margin-left: 150px;

        .icon {
            margin-bottom: 15px;
        }

        .items {
            border: 2px solid #9f9490;
            border-right: none;
            border-top: none;
            border-bottom: none;
            padding: 30px;

            .icon-text {
                h2 {
                    margin-bottom: 15px;
                }
            }
        }

        .left-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
        }

        .right {
            width: 50%;
            img {
                width: 70%;
                margin-top: 50px;
            }
        }
    }

    @media (max-width: 1024px) {
        .container {
            margin-left: 0;
            gap: 40px;

            .items {
                padding: 20px;
            }

            .right {
                img {
                    width: 80%;
                    margin-top: 30px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;

            .left-item, .right {
                width: 100%;
                text-align: center;
            }

            .right {
                img {
                    width: 60%;
                    margin-top: 20px;
                }
            }
        }

        .text {
            margin-top: 40px;

            h1 {
                font-size: 2rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 480px) {
        .container {
            gap: 20px;

            .items {
                padding: 15px;

                .icon-text {
                    h2 {
                        font-size: 1.2rem;
                    }

                    p {
                        font-size: 0.9rem;
                    }
                }
            }

            .right {
                img {
                    width: 80%;
                    margin-top: 20px;
                }
            }
        }

        .text {
            margin-top: 20px;

            h1 {
                font-size: 1.5rem;
            }

            p {
                font-size: 0.8rem;
            }
        }
    }
`;
