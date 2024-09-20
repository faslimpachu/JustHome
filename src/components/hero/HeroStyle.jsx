import styled from "styled-components";

export const SectionMain = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Background1 = styled.img`
    width: 100%;
`;

export const MainDiv = styled.div``;

export const TextDiv = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   z-index: 3;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;

   .inner-text {
       width: 100%;

       @media (max-width: 650px) {
           
           
           h1{
            font-size: 2rem;
           }
        }
        @media (max-width: 480px) {
          
           
           h1{
            font-size: 1.7rem;
           }
        }
        @media (max-width: 355px) {
          
           
           h1{
            font-size: 1.5rem;
           }
           p{
            font-size: 0.7rem;
           }
        }
   }

   h1 {
       font-size:5rem;
       font-weight: 500;
       margin-bottom: 25px;

       span {
           color: #254EF0;
       }

    @media (max-width: 865px){
        font-size: 3rem;
    }
   }

   p {
       margin-bottom: 20px;
       color: #000000;

       @media (max-width: 365px) {
            color: white ;
        }

   }

   .sale-item {
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 80px;
       margin-bottom: 20px;
      

       .p-tag{
        border-bottom: 1px solid green;
        cursor: pointer;
        
       }
       p{
        cursor: pointer;
       }
   }

   .search-div-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.search-div {
    background-color: white;
    width: fit-content;
    border-radius: 18px;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Ensure that items wrap when space is limited */
    gap: 10px; /* Add gap between elements for better spacing */
    
    input {
        margin-right: 20px;
        padding: 18px;
        border-radius: 8px;
        border: 0.5px solid lightgray;

        &:focus {
            outline: none;
        }

        @media (max-width: 768px) {
            margin-right: 10px;
            padding: 15px;
        }

        @media (max-width: 480px) {
            margin-right: 0;
            padding: 10px;
            width: 100%; /* Make inputs full width on very small screens */
        }
    }

    .btn, .btn-1 {
        padding: 18px 25px;
        cursor: pointer;
        border-radius: 8px;

        @media (max-width: 768px) {
            padding: 15px 20px;
        }

        @media (max-width: 480px) {
            padding: 10px 15px;
            width: 100%; /* Make buttons full width on very small screens */
        }
    }

    .btn {
        background-color: #254EF0;
        border: none;
        color: white;
    }

    .btn-1 {
        background-color: white;
        color: black;
        border: 1px solid grey;
    }
}


  
`;