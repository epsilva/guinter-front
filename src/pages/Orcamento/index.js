import React, { useState, useEffect, useMemo } from 'react';
import {
    MdBusinessCenter,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa';
import { isBefore } from 'date-fns';
import { api } from '~/services/api';
import Loading from '~/components/Loading';
import Error from '~/components/Error';

import { Container, SearchBar, ContainerTable } from './styles';
import { maskCpfCnpjTable } from '~/components/Masks';
import Modal from './Modal';

export default function Orcamento() {
    const [openModal, setOpenModal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orcamentos, setOrcamentos] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setLoading(true);
        async function loadOrcamento() {
            try {
                const response = await api.get('orcamentos');
                setOrcamentos(response.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        }

        loadOrcamento();
    }, []);

    function status(orcamento) {
        if (orcamento.data_cancelamento) {
            return 'Cancelado';
        }

        if (orcamento.data_agendamento) {
            if (isBefore(new Date(orcamento.data_agendamento), date)) {
                return 'Atrasado';
            }
        }

        return 'Aguardando';
    }

    function handleOpenModal() {
        setOpenModal(true);
        setVisible(false);
    }

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
                    onClick={handleOpenModal}
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
                        {loading ||
                            orcamentos.map(orcamento => (
                                <tr>
                                    <td>{orcamento.cliente.nome}</td>
                                    <td>
                                        {orcamento.cliente.cpfcnpj
                                            ? maskCpfCnpjTable(
                                                orcamento.cliente.cpfcnpj
                                            )
                                            : '-'}
                                    </td>
                                    <td>
                                        {orcamento.data_orcamento
                                            ? orcamento.data_orcamento
                                            : '-'}
                                    </td>
                                    <td>{orcamento.data_agendamento}</td>
                                    <td>
                                        {orcamento.data_conclusao
                                            ? orcamento.data_conclusao
                                            : '-'}
                                    </td>
                                    <td>{status(orcamento)}</td>
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
                            ))}
                    </tbody>
                </table>
                {loading && <Loading />}
                {error && <Error />}
            </ContainerTable>
        </Container>
    );
}
