import styled from "styled-components";

export const Section = styled.div`
  margin-top: 150px;

  .title {
    text-align: center;

    h1 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 25px;
    }
  }

  .card {
    width: 270px;
    height: 220px;
    border-radius: 16px;
    background: #F9F9F9;
    padding: 20px;
    transition: transform 0.3s;

&:hover {
    transform: scale(1.09);
    background: #e7e3ab;
   transform: rotate(5deg );
}

    h1 {
      margin-bottom: 15px;
      color: #EB664E;
      font-family: Roboto;
      font-weight: 500;
    }

    p {
      margin-bottom: 15px;
      line-height: 20px;
      font-weight: 400;
    }
  }

  .crad-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap; 
  }

  @media (max-width: 1024px) {
    margin-top: 120px;

    .crad-div {
      gap: 40px; 
    }

    .card {
      width: 240px; 
      height: 200px; 
    }
  }

  @media (max-width: 768px) {
    margin-top: 100px;

    .crad-div {
      gap: 30px; 
    }

    .card {
      width: 220px; 
      height: auto; 
    }
  }

  @media (max-width: 480px) {
    margin-top: 80px;

    .crad-div {
      gap: 20px; 
    }

    .card {
      width: 200px; 
      height: auto; 
    }
  }
`;
