import styled from "styled-components";

export const Container = styled.div`
    background-color: #1A1A1A;
    color: white;
    width: 100%;
    height: 350px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    padding: 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
    }

    .search-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .search-box {
        background-color: white;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 20px;
        display: flex;
        align-items: center;

        input {
            padding: 10px;
            border: none;
            width: 200px;

            &:focus {
                outline: none;
            }
        }

        button {
            padding: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;

            svg {
                margin-left: 5px;
            }
        }
    }

    .icon {
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        height: auto;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 0.9rem;
        }

        .search-box {
            padding: 5px 10px;

            input {
                width: 150px;
            }
        }

        .icon svg {
            width: 50px;
            height: 50px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.8rem;
        }

        .search-box {
            padding: 5px;

            input {
                width: 100px;
            }
        }

        .icon svg {
            width: 40px;
            height: 40px;
        }
    }
`;
