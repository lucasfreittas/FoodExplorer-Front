import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.COLORS.DARK_900};
    
    border: none;
    font-family: 'Roboto';
    font-size: 20px;
    border-radius: 0;
    appearance: none;
    position: relative;

  > select {
    background: none;
    border: none;
    padding: 16px 14px;
    font-family: 'Roboto';
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    appearance: none;
    width: 100%;
    z-index: 10;
    
    margin-left: 32px;

    &:focus{
        outline: none;
    };

    option {
        background: ${({theme}) => theme.COLORS.DARK_900};
        font-size: 18px;
    };
  }


   svg:first-child {
    font-size: 40px;
    color: ${({theme}) => theme.COLORS.TOMATO_300};
    position: absolute;
    margin-left: 5px;
  }

  .selectArrow {
    font-size: 27px;
    color: ${({theme, rdOnly}) => rdOnly ? 'transparent' : theme.COLORS.LIGHT_600 };
    position: absolute;
    right: 15px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    border-radius: 4px;

    select{
      font-size: 14px;
      padding: 8px 8px;
    }
  }
`;


