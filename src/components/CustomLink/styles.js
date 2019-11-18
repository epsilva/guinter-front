import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    align-self: center;
    /* align-items: center; */
    padding-top: 10px;
    flex-direction: row;
`;

export const ContainerItem = styled.div`
    a {
        display: flex;
        align-items: center;
        flex-direction: column;

        font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
        color: #00c6ff;
        width: 80px;
        background-image: linear-gradient(
            to left,
            transparent,
            transparent 50%,
            #00bfff 50%,
            #00c6ff
        );

        background-position: 100% 0;
        background-size: 200% 100%;
        transition: all 0.25s ease-in;

        &:hover {
            background-position: 0 0;
            color: #fff;
        }
    }
`;

export const ContainerSelected = styled.div`
    background: orange;
    width: 5px;
    border: 100% solid;
`;
