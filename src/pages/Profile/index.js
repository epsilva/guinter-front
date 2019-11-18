import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    registration: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A matrícula é obrigatória'),
    avatar_id: Yup.number(),
});

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const menuIsOpen = useSelector(state => state.menu.isOpen);
    const dispatch = useDispatch();

    function handleSubmit(data) {}

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container isOpen={menuIsOpen}>
            <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <Input name="registration" placeholder="Sua matrícula" />
                <hr />
                <Input
                    type="passwarod"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="passwarod"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="passwarod"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button" onClick={handleSignOut}>
                Sair
            </button>
        </Container>
    );
}
