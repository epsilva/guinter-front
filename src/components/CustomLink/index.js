import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, ContainerItem, ContainerSelected } from './styles';

export default function CustomLink({ label, to, activeOnlyWhenExact, icon }) {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    return (
        <Container className={match ? 'active' : ''}>
            <ContainerItem>
                <Link to={to}>
                    {icon}
                    <span>{label}</span>
                </Link>
            </ContainerItem>
            {match && <ContainerSelected />}
        </Container>
    );
}
