import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 800px;
    height: 600px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
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

        input {
            background: #eee;
            width: 45%;
            text-align: left;
            background: rgba(5, 5, 5, 0.1);
            border: 0;
            height: 30px;
            padding: 0 15px;
            margin: 0 20px 10px;
        }

        span {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
            text-shadow: 1px 1px #fff, -1px -1px #fff;
            color: #999;
        }
    }
`;

export const ContainerEnd = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap-reverse;
`;

export const ModalPopup = styled.div`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
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
    width: 780px;
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

                :nth-child(even) {
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

        transition: transform 0.2s;

        :hover {
            transform: scale(1.1);
        }
    }
`;
