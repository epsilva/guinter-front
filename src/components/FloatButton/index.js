import React, { useState } from 'react';
import { MdAdd, MdBusiness } from 'react-icons/md';
import { FaStore, FaUserFriends } from 'react-icons/fa';

import { Container } from './styles';

import ModalCliente from '~/pages/Cliente/Modal';

export default function FloatButton() {
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal() {
        setOpenModal(!openModal);
    }

    return (
        <>
            <ModalCliente parent={[openModal, setOpenModal]} />
            <Container>
                <button type="button" onClick={handleOpenModal}>
                    <FaUserFriends size={32} color="#3b9eff" />
                </button>
                <button type="button">
                    <FaStore size={32} color="#3b9eff" />
                </button>
                <button type="button">
                    <MdBusiness size={32} color="#3b9eff" />
                </button>
                <button type="button">
                    <MdAdd size={32} color="#3b9eff" />
                </button>
            </Container>
        </>
    );
}
