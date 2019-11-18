import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    /* justify-content: space-between;
    align-items: center;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7); */
`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 13px;
`;

export const BarButton = styled.a`
    background: none;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ContainerLogo = styled.div`
    display: flex;
    padding: 0 0 0 10px;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
            color: #3b9eff;
            padding-left: 10px;
            font-size: 28px;
        }

        span {
            color: #999;
            padding-left: 10px;
            font-size: 10px;
        }
    }
`;

export const ContainerMenu = styled.div`
    display: flex;
    justify-content: center;

    > a {
        &:hover {
            background: #333;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 10px;

        > span {
            font-size: 12px;
        }
    }
`;
