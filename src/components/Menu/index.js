import React from 'react';
import { MdBusiness } from 'react-icons/md';
import { FaStore, FaUserFriends } from 'react-icons/fa';

import { Container } from './styles';

import CustomLink from '~/components/CustomLink';

export default function Menu() {
    const listMenu = [
        {
            id: 1,
            icon: <FaUserFriends size={30} color="#3b9eff" />,
            title: 'Clientes',
            path: '/cliente',
        },
        // {
        //     id: 2,
        //     icon: <FaStore size={30} color="#3b9eff" />,
        //     title: 'Serviços',
        //     path: '/servico',
        // },
        {
            id: 3,
            icon: <MdBusiness size={30} color="#3b9eff" />,
            title: 'Orçamentos',
            path: '/orcamento',
        },
    ];

    return (
        <Container>
            {listMenu.map(menu => (
                <CustomLink
                    key={menu.id}
                    to={menu.path}
                    activeOnlyWhenExact={menu.id === 2}
                    label={menu.title}
                    icon={menu.icon}
                />
            ))}
        </Container>
    );
}
