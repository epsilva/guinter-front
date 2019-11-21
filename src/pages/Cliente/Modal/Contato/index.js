import React, { useState, useEffect } from 'react';
import { MdClose, MdSave, MdCancel } from 'react-icons/md';

import { Form, Input, Check } from '@rocketseat/unform';
import { Container, Modal, ContainerContatos, ContainerButton } from './styles';

export default function Contato({ parent }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        const [openModalContato] = parent;
        setIsOpenModal(openModalContato);
    }, [parent]);

    function handleCloseModal() {
        const [, setOpenModalContato] = parent;
        setOpenModalContato(false);
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
                <Form>
                    <ContainerContatos>
                        <Input
                            type="text"
                            name="nameContato"
                            placeholder="Nome do contato"
                        />
                        <Input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                        />
                        <Input type="email" name="email" placeholder="E-mail" />
                        <check>
                            <Check
                                name="isPrincipal"
                                label="Contato principal?"
                            />
                        </check>
                        <ContainerButton>
                            <button type="button">
                                <MdSave size={42} color="#3b9eff" />
                            </button>
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
