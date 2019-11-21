import React, { useState, useEffect } from 'react';
import {
    MdPersonAdd,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import Modal from '~/pages/Cliente/Modal';

import { Container, SearchBar, ContainerTable } from './styles';

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal() {
        setOpenModal(!openModal);
    }

    return (
        <Container>
            <Modal openModal={openModal} parent={[openModal, setOpenModal]} />
            <SearchBar>
                <i>
                    <MdSearch size={36} />
                </i>
                <input type="text" placeholder="Pesquisar cliente" />
                <button type="button" onClick={handleOpenModal}>
                    <MdPersonAdd size={36} color="#3b9eff" />
                </button>
            </SearchBar>
            <ContainerTable>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Contato</th>
                            <th />
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
        </Container>
    );
}
