import styled from 'styled-components';

export const Container = styled.div`
    bottom: 0;
    position: fixed;
    margin: 1em;
    right: 0px;
    display: none;

    -webkit-user-drag: element;

    button {
        box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
            0px 4px 12px -7px rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        display: block;
        width: 56px;
        height: 56px;
        margin: 20px auto 0;
        position: relative;
        -webkit-transition: all 0.1s ease-out;
        transition: all 0.1s ease-out;
        background: #fff;

        &:active,
        :focus,
        :hover {
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.14),
                0 4px 8px rgba(0, 0, 0, 0.28);
        }

        &:not(:last-child) {
            width: 40px;
            height: 40px;
            margin: 20px auto 0;
            opacity: 0;
            -webkit-transform: translateY(50px);
            -ms-transform: translateY(50px);
            transform: translateY(50px);
        }

        &:nth-last-child(1) {
            -webkit-transition-delay: 25ms;
            transition-delay: 25ms;
            background-size: contain;
        }

        &:not(:last-child):nth-last-child(2) {
            -webkit-transition-delay: 50ms;
            transition-delay: 20ms;
            background-size: contain;
        }

        &:not(:last-child):nth-last-child(3) {
            -webkit-transition-delay: 75ms;
            transition-delay: 40ms;
            background-size: contain;
        }

        &:not(:last-child):nth-last-child(4) {
            -webkit-transition-delay: 100ms;
            transition-delay: 60ms;
            background-size: contain;
        }
    }

    &:hover {
        button {
            &:not(:last-child) {
                opacity: 1;
                -webkit-transform: none;
                -ms-transform: none;
                transform: none;
                margin: 15px auto 0;
            }
        }
    }
`;
