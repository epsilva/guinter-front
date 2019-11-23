import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px 5px 5px 5px;
    margin: 70px 10px 10px 10px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;

    /* background: #444; */
`;

export const SearchBar = styled.div`
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 50px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;

    i {
        position: absolute;
    }

    button {
        border: none;
        margin-right: 20px;
        margin-left: 20px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        background: #fff;
        justify-content: center;
        align-items: center;
    }

    input {
        padding: 0 50px;
        width: 100%;
        font-size: 18px;
    }
`;

export const ContainerTable = styled.div`
    overflow: auto;
    margin-top: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    height: 100%;
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
                    padding: 8px;
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

                :nth-child(4) {
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
