import React, { useState, useEffect } from 'react';
import {
    MdAdd,
    MdSearch,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '~/services/api';
import Loading from '~/components/Loading';
import Error from '~/components/Error';
import Modal from '~/pages/Servico/Modal';
import { deleteRequest } from '~/store/modules/produto/actions';

import { Container, SearchBar, ContainerTable } from './styles';

export default function Servico() {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [produtos, setProdutos] = useState([]);
    const [selectedProduto, setSelectedProduto] = useState({});
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const newProduto = useSelector(state => state.produto.data);

    useEffect(() => {
        setProdutos([]);
        async function loadProdutos() {
            setLoading(true);
            try {
                const response = await api.get('produtos');
                setProdutos(response.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        }

        loadProdutos();
    }, [newProduto]);

    async function handleSearch(e) {
        setLoading(true);
        try {
            if (e.target.value) {
                const response = await api.get(`produtos/${e.target.value}`);
                setProdutos(response.data);
            } else {
                const response = await api.get('produtos');
                setProdutos(response.data);
            }
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    }

    function handleOpenModal() {
        setSelectedProduto({
            id: '',
            nome: '',
        });
        setVisible(false);
        setOpenModal(!openModal);
    }

    function handleOpenEditModal(produto) {
        setSelectedProduto(produto);
        setVisible(false);
        setOpenModal(!openModal);
    }

    function handleOpenVisualizarModal(produto) {
        setSelectedProduto(produto);
        setVisible(true);
        setOpenModal(!openModal);
    }

    function handleDelete(produto) {
        const data = {
            id: produto.id,
        };
        dispatch(deleteRequest(data));
    }

    return (
        <Container>
            <Modal
                parent={[openModal, setOpenModal]}
                produto={selectedProduto}
                isVsible={visible}
            />
            <SearchBar>
                <i>
                    <MdSearch size={36} />
                </i>
                <input
                    type="text"
                    placeholder="Pesquisar produto/serviço"
                    onChange={handleSearch}
                />
                <button
                    type="button"
                    onClick={handleOpenModal}
                    title="Cadastrar"
                >
                    <MdAdd size={36} color="#3b9eff" />
                </button>
            </SearchBar>
            <ContainerTable>
                <table>
                    <thead>
                        <tr>
                            <th>Produto/Serviço</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ||
                            produtos.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
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
