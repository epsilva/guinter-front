import React from 'react';
import {
    MdPersonAdd,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';

import { Container, SearchBar, ContainerTable } from './styles';

export default function Cliente() {
    return (
        <Container>
            <SearchBar>
                <i>
                    <MdSearch size={36} />
                </i>
                <input
                    type="text"
                    placeholder="Pesquisar cliente"
                    onChange=""
                />
                <button type="button" disabled="disabled" onClick="">
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
                            <div>
                                <button type="button">
                                    <MdEdit size={20} />
                                </button>
                                <button type="button">
                                    <MdVisibility size={20} />
                                </button>
                                <button type="button">
                                    <MdDelete size={20} />
                                </button>
                            </div>
                        </tr>
                        <tr>
                            <td>Esdras</td>
                            <td>(61) 98888-8888</td>
                            <div>
                                <button type="button">
                                    <MdEdit size={20} />
                                </button>
                                <button type="button">
                                    <MdVisibility size={20} />
                                </button>
                                <button type="button">
                                    <MdDelete size={20} />
                                </button>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </ContainerTable>
        </Container>
    );
}
