import React, { useState, useEffect } from 'react';
import { MdClose, MdSave, MdCancel } from 'react-icons/md';

import { Form, Input, Check } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Container, Modal, ContainerContatos, ContainerButton } from './styles';
import { insertRequest } from '~/store/modules/contato/actions';
import { maskTelefone } from '~/components/Masks';

const schema = Yup.object().shape({
    nome: Yup.string().required('O Nome é obrigatório'),
    telefone: Yup.string().required('O Telefone é obrigatório'),
    email: Yup.string().email('Insira um e-mail válido'),
    principal: Yup.boolean(),
});

export default function Contato({ parent, contato, isVsible, contatos }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedContato, setSelectedContato] = useState({});
    const [visible, setIsVisible] = useState(true);
    const [contatoMain, setContatoMain] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const [openModalContato] = parent;
        setIsOpenModal(openModalContato);
        setSelectedContato({ principal: false });
        if (Object.keys(contato).length !== 0) {
            setSelectedContato(contato);
        }

        contatos.map(ct => {
            if (ct.principal) {
                setContatoMain(true);
            }
        });

        setIsVisible(isVsible);
    }, [contato, isVsible, parent, contatos]);

    function handleCloseModal() {
        const [, setOpenModalContato] = parent;
        setOpenModalContato(false);
    }

    function hadnleOnSubmit(data, { resetForm }) {
        const [, setOpenModalContato] = parent;
        dispatch(insertRequest(data));
        setOpenModalContato(false);
        resetForm();
    }

    function handleDelete() {}

    function handleChangeTelefone(e) {
        e.target.value = maskTelefone(e.target.value);
    }

    return (
        <Modal isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <header>
                    <strong>Contatos</strong>
                    <button type="button" onClick={handleCloseModal}>
                        <MdClose size={32} color="#999" />
                    </button>
                </header>
                <Form
                    initialData={selectedContato}
                    schema={schema}
                    onSubmit={hadnleOnSubmit}
                >
                    <ContainerContatos>
                        <div className="field">
                            <Input
                                type="text"
                                name="nome"
                                placeholder="Nome do contato"
                                disabled={visible}
                            />
                        </div>
                        <div className="field">
                            <Input
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                onChange={handleChangeTelefone}
                                disabled={visible}
                            />
                        </div>
                        <div className="field">
                            <Input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                disabled={visible}
                            />
                        </div>
                        <div className="check">
                            <Check
                                name="principal"
                                label="Contato principal?"
                                disabled={visible || contatoMain}
                            />
                        </div>
                        <ContainerButton>
                            {visible || (
                                <button type="submit">
                                    <MdSave size={42} color="#3b9eff" />
                                </button>
                            )}

                            <button type="button" onClick={handleCloseModal}>
                                <MdCancel size={42} color="#fb6f91" />
                            </button>
                        </ContainerButton>
                    </ContainerContatos>
                </Form>
            </Container>
        </Modal>
    );
}
