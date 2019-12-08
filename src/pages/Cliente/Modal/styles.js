import styled, { keyframes } from 'styled-components';
import ReactSelect from 'react-select';

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
    background: #fff;
    width: 65%;
    height: auto;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    display: flex;
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

        h4 {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 0 0 20px;
            text-shadow: 1px 1px #fff, -1px -1px #fff;
            color: #999;
        }
    }
`;

export const ContainerEnd = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    padding-right: 10px;

    > div {
        display: flex;
        width: 50%;
        flex-wrap: wrap;
        flex-direction: column;
        padding-left: 10px;

        select {
            border: 0;
            height: 30px;
            padding: 0 15px;
            margin-bottom: 10px;
            background: #eee;
            width: 100%;
            text-align: left;
            background: rgba(5, 5, 5, 0.1);
        }
    }
`;

export const ModalPopup = styled.div`
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

export const ContainerTable = styled.div`
    overflow: auto;
    margin-top: 2px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    height: 200px;
    width: 98%;
    background: #fff;
    table {
        padding: 0 0 0 0;
        width: 100%;
        border-collapse: collapse;
        thead {
            background: #3b9eff;
            width: 100%;

            tr {
                th {
                    color: #fff;

                    &:nth-last-child(1) {
                        display: flex;
                        justify-content: flex-end;
                        padding-right: 5px;

                        button {
                            border: none;
                            background: none;

                            transition: transform 0.2s;

                            :hover {
                                transform: scale(1.1);
                            }
                        }
                    }
                }
            }
        }

        tbody {
            td,
            th {
                text-align: left;
                padding: 8px;

                :nth-child(2) {
                    text-align: center;
                }

                :nth-child(3) {
                    text-align: center;
                }
            }

            tr {
                background-image: linear-gradient(
                    to left,
                    transparent,
                    transparent 50%,
                    #00bfff 0%,
                    #00bfff
                );

                background-position: 100% 0;
                background-size: 200% 100%;
                transition: all 0s ease-out;

                :hover {
                    background-position: 0 0;
                    color: #fff;

                    svg {
                        visibility: visible;
                        color: #fff;
                    }
                }
                :nth-child(even) {
                    background-color: #dddddd;
                }

                th {
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 10px;
                    height: 31.5px;

                    svg {
                        visibility: hidden;
                    }

                    button {
                        border: none;
                        background: none;
                        padding-left: 20px;

                        &:not(:last-child) {
                            svg {
                                &:hover {
                                    color: green;
                                }
                            }
                        }

                        &:nth-last-child(2) {
                            svg {
                                &:hover {
                                    color: yellow;
                                }
                            }
                        }

                        &:nth-last-child(1) {
                            svg {
                                &:hover {
                                    color: red;
                                }
                            }
                        }
                    }
                }
            }
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

export const ContainerDadosPessoais = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-right: 10px;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        padding-left: 10px;
    }
`;
