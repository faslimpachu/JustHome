import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;

  @media (max-width: 645px){
    margin-top: 150px;

  }
  @media (max-width: 454px){
    margin-top: 250px;
    padding: 25px;

  }


  .text {
    margin-bottom: 40px;

    p {
      margin-top: 10px;
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap; /* Allows the cards to wrap to the next line on smaller screens */
    gap: 40px;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s;

&:hover {
    transform: scale(1.19);
}

      img {
        width: 200px;
        border-radius: 15px;
      }
    }
  }

  .card-img {
    position: relative;
  }

  .card-text {
    position: absolute;
    top: 0;
    padding: 20px;
  }

  @media (max-width: 768px) {
   

    .images {
      gap: 20px; /* Reduce gap between cards on smaller screens */

      .card {
        img {
          width: 150px; /* Adjust image width for smaller screens */
        }
      }
    }
  }

  @media (max-width: 480px) {
    .images {
      gap: 10px; /* Further reduce gap between cards on very small screens */

      .card {
        img {
          width: 120px; /* Further adjust image width for very small screens */
        }
      }
    }

    .card-text {
      padding: 10px; /* Adjust text padding for smaller screens */
    }
  }
`;
