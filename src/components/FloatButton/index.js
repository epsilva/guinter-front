import React from 'react';
import { MdAdd, MdBusiness } from 'react-icons/md';
import { FaStore, FaUserFriends } from 'react-icons/fa';

import { Container } from './styles';

export default function FloatButton() {
    return (
        <Container>
            <button type="button">
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
    );
}
