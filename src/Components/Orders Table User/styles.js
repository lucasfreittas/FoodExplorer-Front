import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 32px 0px;
`;

export const Table = styled.table`
    width: 100%;

    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    border-spacing: 0px;
    border: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};
    border-radius: 10px;

    td, th {
        padding: 18px 28px;
        border: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};
        vertical-align: middle;
        font-size: 18px;
        
        
        
        > svg {
            font-size: 40px;
            vertical-align: middle;
            margin-bottom: 4px;
            color: ${({theme}) => theme.COLORS.TOMATO_300};
        }
    };

    th {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        height: 80px;
    };

    .headTable > :first-child {
        border-top-left-radius: 8px;
    };

    .headTable > :last-child {
        border-top-right-radius: 8px;
    };

    tbody > :last-child > :first-child{
        border-bottom-left-radius: 8px;
    };

    tbody > :last-child > :last-child{
        border-bottom-right-radius: 8px;
    };

    @media (max-width: 1000px) {   
            display: flex;
            flex-direction: row;
            border: none;

            tbody{
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
                

            th {
                display: none;
            }

            td {
                padding: 8px 16px;
                border: none;
                border-bottom: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};

                :nth-child(3n+1),
                :nth-child(3n+2),
                :nth-child(3n+3) {
                font-size: 14px;
                border: none;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                text-align: right;
                width: 50%;
                height: 48px;
                box-sizing: border-box;
                vertical-align: middle;
                }

                :nth-child(1){

                    > div {
                        background-color: transparent;
                    }
                }

                :nth-child(2){
                    width: 40%
                }

                :nth-child(3){
                    width: 100%;
                    justify-content: flex-start;
                    margin-left: 16px;
                    text-align: left;
                }


                :nth-child(4){
                    display: none;
                }

                :nth-child(5){
                    width: 20%
                }
            }

            tr{
                display: flex;
                flex-wrap: wrap;
                border: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};
                border-radius: 8px;
            }

        


        }
    

`;