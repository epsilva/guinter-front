import React, { useState, useEffect } from 'react';
import {
    MdPersonAdd,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import Modal from '~/pages/Cliente/Modal';
import api from '~/services/api';
import Loading from '~/components/Loading';
import Error from '~/components/Error';

import { Container, SearchBar, ContainerTable } from './styles';
import { maskCpfCnpj, maskTelefone } from '~/components/Masks';

export default function Cliente() {
    const [openModal, setOpenModal] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [selectedCliente, setSelectedCliente] = useState({});
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setClientes([]);
        async function loadClientes() {
            setLoading(true);
            try {
                const response = await api.get('clientes');
                console.log(response);
                setClientes(response.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        }

        loadClientes();
    }, []);

    function handleOpenModal() {
        setSelectedCliente({});
        setVisible(false);
        setOpenModal(!openModal);
    }

    function handleOpenEditModal(cliente) {
        setSelectedCliente(cliente);
        setVisible(false);
        setOpenModal(!openModal);
    }

    function handleOpenVisualizarModal(cliente) {
        setSelectedCliente(cliente);
        setVisible(true);
        setOpenModal(!openModal);
    }

    return (
        <Container>
            <Modal
                parent={[openModal, setOpenModal]}
                cliente={selectedCliente}
                isVsible={visible}
            />
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
                            <th>E-mail</th>
                            <th>CPF/CNPJ</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {loading ||
                            clientes.map(cliente => (
                                <tr>
                                    <td>{cliente.nome}</td>
                                    <td>
                                        {cliente.contatos.length > 0
                                            ? cliente.contatos.map(
                                                  contato =>
                                                      contato.principal &&
                                                      maskTelefone(
                                                          contato.telefone
                                                      )
                                              )
                                            : '-'}
                                    </td>
                                    <td>
                                        {cliente.contatos.length > 0
                                            ? cliente.contatos.map(
                                                  contato =>
                                                      contato.principal &&
                                                      contato.email
                                              )
                                            : '-'}
                                    </td>
                                    <td>{maskCpfCnpj(cliente.cpfcnpj)}</td>
                                    <th>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleOpenEditModal(cliente)
                                            }
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleOpenVisualizarModal(
                                                    cliente
                                                )
                                            }
                                        >
                                            <MdVisibility size={20} />
                                        </button>
                                        <button type="button">
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
