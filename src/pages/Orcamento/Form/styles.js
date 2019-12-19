import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #fff;
    margin-top: 80px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 10px 10px 10px 10px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerCliente = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    div.div-esquerda {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
    }

    div.div-direita {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const ContainerEndereco = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    div.div-esquerda {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column;
    }

    div.div-direita {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
        flex-direction: column;
    }
`;

export const ContainerContato = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    padding-left: 10px;
    padding-right: 10px;
`;
