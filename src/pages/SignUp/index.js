import React from 'react';
import Lottie from 'react-lottie-web';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import animationProgrammer from '../../assets/lotties/programming.json';
import { signUpRequest } from '~/store/modules/auth/actions';

import {
    SubmitButton,
    ContainerLeft,
    ContainerRight,
    LogoImg,
    LogoName,
    SloganName,
    LogoEscolaImg,
} from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
});

export default function Login() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <ContainerLeft>
                <div>
                    <LogoImg src="" alt="Rocketshoes" />
                    <LogoName>Esdras Pinheiro</LogoName>
                    <SloganName>Analista de Sistemas</SloganName>
                </div>
                <div>
                    <Lottie
                        height={400}
                        width={400}
                        options={{
                            animationData: animationProgrammer,
                        }}
                    />
                </div>
            </ContainerLeft>
            <ContainerRight>
                <Form schme={schema} onSubmit={handleSubmit}>
                    <LogoEscolaImg src="" alt="MinhaEscola" />
                    <Input placeholder="Nome Completo" name="name" />
                    <Input
                        type="email"
                        placeholder="Digite seu e-mail"
                        name="email"
                    />
                    <Input
                        type="password"
                        placeholder="Digite seu senha"
                        name="password"
                    />
                    <SubmitButton type="submit">Criar conta</SubmitButton>
                    <Link to="/">Já tenho login</Link>
                </Form>
            </ContainerRight>
        </>
    );
}
