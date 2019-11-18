import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(5, 5, 5, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#3b9eff')};
            }
        }
    }

    a {
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`;
