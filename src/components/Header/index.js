import React from 'react';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';
import { FaRegSnowflake } from 'react-icons/fa';
import Menu from '~/components/Menu';
import FloatButton from '~/components/FloatButton';

import {
    Container,
    ProfileContainer,
    ContainerLogo,
    ContainerHeader,
} from './styles';

export default function Header() {
    return (
        <Container>
            <Menu />
            <ContainerHeader>
                <ContainerLogo>
                    <FaRegSnowflake size={36} color="#3b9eff" />
                    <div>
                        <strong>Schmidt</strong>
                        <span>AR CONDICIONADO</span>
                    </div>
                </ContainerLogo>
                <ProfileContainer>
                    <Link to="/">
                        <MdFace size={36} color="#3b9eff" />
                    </Link>
                </ProfileContainer>
            </ContainerHeader>
            <FloatButton />
        </Container>
    );
}
