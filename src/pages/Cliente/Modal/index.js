import React, { useState, useEffect } from 'react';
import {
    MdClose,
    MdSave,
    MdCancel,
    MdAdd,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import {
    Container,
    ModalPopup,
    ContainerEnd,
    ContainerTable,
    ContainerButton,
} from './styles';

export default function Modal({ parent }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        const [openModal] = parent;
        setIsOpenModal(openModal);
    }, [parent]);

    function handleCloseModal() {
        const [, setOpenModal] = parent;
        setOpenModal(false);
    }

    return (
        <ModalPopup isOpen={isOpenModal}>
            <Container>
                <header>
                    <strong>Cliente</strong>
                    <button type="button" onClick={handleCloseModal}>
                        <MdClose size={32} color="#999" />
                    </button>
                </header>

                <Form>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome do cliente"
                    />
                    <Input type="text" name="cpfCnpj" placeholder="CPJ/CNPJ" />
                    <span>Endereço</span>
                    <ContainerEnd>
                        <Input type="text" name="bairro" placeholder="Bairro" />
                        <Input type="text" name="rua" placeholder="Rua" />
                        <Input type="text" name="cidade" placeholder="Cidade" />
                        <Input type="text" name="numero" placeholder="Número" />
                        <Input type="text" name="estado" placeholder="Estado" />
                        <Input
                            type="text"
                            name="complemento"
                            placeholder="Complemento"
                        />
                    </ContainerEnd>
                    <span>Contatos</span>
                    <ContainerTable>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                    <th>
                                        <button type="button">
                                            <MdAdd size={20} color="#fff" />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Guiknter</td>
                                    <td>(51) 99999-9999</td>
                                    <th>
                                        <button type="button">
                                            <MdEdit size={20} />
                                        </button>
                                        <button type="button">
                                            <MdVisibility size={20} />
                                        </button>
                                        <button type="button">
                                            <MdDelete size={20} />
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>Esdras</td>
                                    <td>(61) 98888-8888</td>
                                    <th>
                                        <button type="button">
                                            <MdEdit size={20} />
                                        </button>
                                        <button type="button">
                                            <MdVisibility size={20} />
                                        </button>
                                        <button type="button">
                                            <MdDelete size={20} />
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </ContainerTable>
                    <ContainerButton>
                        <button type="button">
                            <MdSave size={42} color="#3b9eff" />
                        </button>
                        <button type="button">
                            <MdCancel size={42} color="#fb6f91" />
                        </button>
                    </ContainerButton>
                </Form>
            </Container>
        </ModalPopup>
    );
}
