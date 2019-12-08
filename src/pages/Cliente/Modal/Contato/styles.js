import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(200%);
  }
`;

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    flex-direction: column;

    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.6s forwards;
    transition: visibility 0.2s;

    header {
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 10px 10px;

        strong {
            font-size: 35px;
            color: #999;
        }

        button {
            background: none;
            border: none;
            transition: transform 0.2s;

            :hover {
                transform: scale(1.1);
            }
        }
    }

    form {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        span {
            color: #fb6f91;
            font-weight: bold;
            align-self: center;
        }

        div.check {
            display: flex;
            width: 40%;
            margin-left: 2%;
            align-items: center;

            label {
                justify-content: center;
                align-items: center;
                display: flex;
            }

            > input {
                width: 5%;
                margin-right: 5px;
            }
        }
    }
`;

export const Modal = styled.div`
    display: flex;
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

    &:hidden {
        visibility: hidden;
        transition-delay: 0, 0.6s;
    }

    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    align-items: center;
    justify-content: center;
`;

export const ContainerContatos = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    div.field {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 50%;

        input {
            width: 90%;
        }
    }
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    padding-right: 10px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;

        transition: transform 0.2s;

        :hover {
            transform: scale(1.1);
        }
    }
`;
