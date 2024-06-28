import styled from "styled-components";

export const SectionDiv = styled.div`
  .text {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 200;
    margin-top: 130px;
    margin-bottom: 30px;
  }

  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;

    @media (max-width: 1024px) {
      gap: 100px; /* Adjust the gap between logos on medium screens */
    }

    @media (max-width: 768px) {
      flex-wrap: wrap; /* Allows logos to wrap to the next line on smaller screens */
      gap: 50px; /* Further adjust the gap between logos on small screens */
    }

    @media (max-width: 480px) {
      gap: 30px; /* Further reduce the gap between logos on very small screens */
    }
  }

  @media (max-width: 768px) {
    .text {
      margin-top: 100px; /* Adjust top margin for smaller screens */
      margin-bottom: 20px; /* Adjust bottom margin for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .text {
      margin-top: 80px; /* Further adjust top margin for very small screens */
      margin-bottom: 15px; /* Further adjust bottom margin for very small screens */
    }
  }
`;
