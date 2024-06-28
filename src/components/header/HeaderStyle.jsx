import styled from "styled-components";

export const LogoImg = styled.img`
    width: 100px;
`
export const SectionDiv = styled.section`
   margin: 25px 20px 15px 20px;
   /* border-bottom: 1px solid grey; */
    
    

    .nav-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;

        
    }
    ul{
        list-style-type: none;
        display: flex;
        gap: 22px;

        li{
            &:hover{
            color: #0db033;
            cursor: pointer;
        }
        }
    
    }
    .brand{
      display: flex;
      align-items: center;
        
    }
    .contact{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .user{
            border: 1px solid grey;
            padding: 1px;
            height: 40px;
            border-radius: 50%;
            padding: 1px;
            width: 40px;
        }

        button{
            padding: 10px 15px;
            background: transparent;
            border-radius: 25px;
            border: 1px solid grey;
        }
    }
    .hamburger{
            list-style-type: none;
            display: none;
        }
    @media (max-width: 952px){
       
        ul{
            display: none;
        }
        .hamburger{
                display: block;
         } 
}
@media (max-width: 599px) {
    .contact{
        display: none;
    }
}

`