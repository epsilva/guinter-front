import React, { useState, useEffect } from 'react';
import {
    MdPersonAdd,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '~/pages/Cliente/Modal';
import { api } from '~/services/api';
import Loading from '~/components/Loading';
import Error from '~/components/Error';

import { Container, SearchBar, ContainerTable } from './styles';
import { maskCpfCnpjTable, maskTelefone } from '~/components/Masks';
import { deleteRequest } from '~/store/modules/cliente/actions';

export default function Cliente() {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [selectedCliente, setSelectedCliente] = useState({});
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(false);

    const newCliente = useSelector(state => state.cliente.data);
    const [loading, setLoading] = useState(
        useSelector(state => state.cliente.loading)
    );

    useEffect(() => {
        setClientes([]);
        setLoading(true);
        async function loadClientes() {
            try {
                const response = await api.get('clientes');
                setClientes(response.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        }

        loadClientes();
    }, [newCliente]);

    async function handleSearch(e) {
        try {
            setLoading(true);
            if (e.target.value) {
                const response = await api.get(`clientes/${e.target.value}`);
                setClientes(response.data);
            } else {
                const response = await api.get('clientes');
                setClientes(response.data);
            }
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    function handleOpenModal() {
        setSelectedCliente({
            id: '',
            nome: '',
            cpfcnpj: '',
            enderecos: {},
            contatos: [],
        });
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

    function handleDelete(cliente) {
        const data = {
            id: cliente.id,
        };
        dispatch(deleteRequest(data));
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
                <input
                    type="text"
                    placeholder="Pesquisar cliente"
                    onChange={handleSearch}
                />
                <button
                    type="button"
                    onClick={handleOpenModal}
                    title="Cadastrar"
                >
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
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ||
                            clientes.map(cliente => (
                                <tr key={cliente.id}>
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
                                    <td>
                                        {cliente.cpfcnpj
                                            ? maskCpfCnpjTable(cliente.cpfcnpj)
                                            : '-'}
                                    </td>
                                    <th>
                                        <button
                                            type="button"
                                            title="Alterar"
                                            onClick={() =>
                                                handleOpenEditModal(cliente)
                                            }
                                        >
                                            <MdEdit size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            title="Visualizar"
                                            onClick={() =>
                                                handleOpenVisualizarModal(
                                                    cliente
                                                )
                                            }
                                        >
                                            <MdVisibility size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            title="Excluir"
                                            onClick={() =>
                                                handleDelete(cliente)
                                            }
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
