import React, { useState } from 'react';
import {
    MdBusinessCenter,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa';
import { api } from '~/services/api';
import Loading from '~/components/Loading';
import Error from '~/components/Error';

import { Container, SearchBar, ContainerTable } from './styles';
import { maskCpfCnpjTable } from '~/components/Masks';
import Modal from './Modal';

export default function Orcamento() {
    const [openModal, setOpenModal] = useState(true);
    const [visible, setVisible] = useState(false);

    return (
        <Container>
            <Modal parent={[openModal, setOpenModal]} isVsible={visible} />
            <SearchBar>
                <i>
                    <MdSearch size={36} />
                </i>
                <input
                    type="text"
                    placeholder="Pesquisar orçamento por cliente"
                // onChange={handleSearch}
                />
                <button
                    type="button"
                    // onClick={handleOpenModal}
                    title="Cadastrar"
                >
                    <MdBusinessCenter size={36} color="#3b9eff" />
                </button>
            </SearchBar>
            <ContainerTable>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>CPF/CNPJ</th>
                            <th>Data</th>
                            <th>Data Agendamento</th>
                            <th>Data Finalização</th>
                            <th>Status</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Esdras Pinheiro</td>
                            <td>{maskCpfCnpjTable('09876543212')}</td>
                            <td>01/12/2019</td>
                            <td>04/12/2019</td>
                            <td>-</td>
                            <td>Pendente</td>
                            <th>
                                <button
                                    type="button"
                                    title="Exportar PDF"
                                // onClick={() =>
                                //     handleOpenEditModal(cliente)
                                // }
                                >
                                    <FaFilePdf size={20} />
                                </button>
                                <button
                                    type="button"
                                    title="Alterar"
                                // onClick={() =>
                                //     handleOpenEditModal(cliente)
                                // }
                                >
                                    <MdEdit size={20} />
                                </button>
                                <button
                                    type="button"
                                    title="Visualizar"
                                // onClick={() =>
                                //     handleOpenVisualizarModal(
                                //         cliente
                                //     )
                                // }
                                >
                                    <MdVisibility size={20} />
                                </button>
                                <button
                                    type="button"
                                    title="Excluir"
                                // onClick={() =>
                                //     handleDelete(cliente)
                                // }
                                >
                                    <MdDelete size={20} />
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
                {/* {loading && <Loading />} */}
                {/* {error && <Error />} */}
            </ContainerTable>
        </Container>
    );
}
