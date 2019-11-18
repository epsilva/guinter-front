import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerLeft = styled.div`
    background: #292b36;
    display: block;
    float: left;
    width: 70%;
    height: 100%;
    justify-content: center;
    padding: 40px;

    div {
        padding-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerRight = styled.div`
    padding: 40px 40px;
    float: left;
    width: 30%;
    display: block;
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled.button`
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: #292b36;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    &:hover {
        background: ${darken(0.03, '#292b36')};
    }
`;

export const LogoImg = styled.img`
    width: 20%;
    height: 10%;
`;

export const LogoName = styled.strong`
    color: #eee;
    font-size: 34px;
    height: 5%;
`;

export const SloganName = styled.span`
    color: #eee;
    font-size: 14px;
    margin-bottom: 15%;
`;

export const LogoEscolaImg = styled.img`
    height: 20%;
`;
