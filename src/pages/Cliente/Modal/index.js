import React, { useState, useEffect } from 'react';
import {
    MdClose,
    MdSave,
    MdCancel,
    MdAdd,
    MdEdit,
    MdDelete,
    MdVisibility,
    MdStar,
} from 'react-icons/md';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
    maskCpfCnpj,
    maskTelefone,
    maskCpfCnpjTable,
} from '~/components/Masks';
import {
    Container,
    ModalPopup,
    ContainerEnd,
    ContainerTable,
    ContainerButton,
    ContainerDadosPessoais,
} from './styles';

import ModalContato from '~/pages/Cliente/Modal/Contato';
import { insertRequest, updateRequest } from '~/store/modules/cliente/actions';
import Loading from '~/components/Loading';
import { validacaoCpfCnpj } from '~/validations/cpfcnpj';

export default function Modal({ parent, cliente, isVsible }) {
    const { register, handleSubmit, errors, reset, setValue } = useForm({});

    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [openModalContato, setOpenModalContato] = useState(false);
    const [selectedContato, setSelectedContato] = useState({});
    const [visible, setVisible] = useState(false);

    const loading = useSelector(state => state.cliente.loading);
    const err = useSelector(state => state.cliente.err);

    const [contatos, setContatos] = useState([]);
    const [visivel, setVisivel] = useState(true);

    const options = [
        { value: '1', label: 'AC' },
        { value: '2', label: 'AL' },
        { value: '3', label: 'AP' },
        { value: '4', label: 'AM' },
        { value: '5', label: 'BA' },
        { value: '6', label: 'CE' },
        { value: '7', label: 'DF' },
        { value: '8', label: 'ES' },
        { value: '9', label: 'GO' },
        { value: '10', label: 'MA' },
        { value: '11', label: 'MT' },
        { value: '12', label: 'MS' },
        { value: '13', label: 'MG' },
        { value: '14', label: 'PA' },
        { value: '15', label: 'PB' },
        { value: '16', label: 'PR' },
        { value: '17', label: 'PE' },
        { value: '18', label: 'PI' },
        { value: '19', label: 'RJ' },
        { value: '20', label: 'RN' },
        { value: '21', label: 'RS' },
        { value: '22', label: 'RO' },
        { value: '23', label: 'RR' },
        { value: '24', label: 'SC' },
        { value: '25', label: 'SP' },
        { value: '26', label: 'SE' },
        { value: '27', label: 'TO' },
    ];

    useEffect(() => {
        setVisivel(isVsible);
    }, [isVsible]);

    useEffect(() => {
        const [openModal] = parent;
        setIsOpenModal(openModal);
        if (cliente && cliente.enderecos) {
            setValue('nome', cliente.nome);
            setValue('cpfcnpj', maskCpfCnpjTable(cliente.cpfcnpj));
            setValue('estado', cliente.enderecos.estado);
            setValue('cidade', cliente.enderecos.cidade);
            setValue('rua', cliente.enderecos.rua);
            setValue('numero', cliente.enderecos.numero);
            setValue('complemento', cliente.enderecos.complemento);
            setValue('bairro', cliente.enderecos.bairro);
            setContatos(cliente.contatos);
        }
    }, [cliente, parent, setValue]);

    function resetForm() {
        reset({
            nome: '',
            cpfcnpj: '',
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            complemento: '',
        });
    }

    function handleCloseModal() {
        const [, setOpenModal] = parent;
        setOpenModal(false);
        resetForm();
    }

    function handleOpenModalContato() {
        setOpenModalContato(!openModalContato);
        setVisible(false);
        setSelectedContato({
            id: '',
            nome: '',
            telefone: '',
            email: '',
            principal: false,
        });
    }

    function handlechangeCpfCnpj(e) {
        e.target.value = maskCpfCnpj(e.target.value);
    }

    function handleDelete(contato) {
        const listContato = [];

        contatos.array.forEach(element => {
            if (contato.telefone !== element.telefone) {
                listContato.push(element);
            }
        });

        setContatos(listContato);
    }

    function handleOpenEditModal(contato) {
        setSelectedContato(contato);
        setVisible(false);
        setOpenModalContato(!openModalContato);
    }

    function handleOpenVisualizarModal(contato) {
        setSelectedContato(contato);
        setVisible(true);
        setOpenModalContato(!openModalContato);
    }

    const onSubmit = data => {
        const dadosCliente = {
            id: cliente.id,
            nome: data.nome,
            cpfcnpj: data.cpfcnpj.replace(/[^0-9]+/g, ''),
            enderecos: {
                id: cliente.enderecos && cliente.enderecos.id,
                numero: data.numero,
                rua: data.rua,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                complemento: data.complemento || '',
            },
            contatos,
        };
        if (cliente.id) {
            dispatch(updateRequest(dadosCliente));
        } else {
            dispatch(insertRequest(dadosCliente));
        }

        handleCloseModal();
    };

    function validarCpfCnpj(value) {
        return validacaoCpfCnpj(value);
    }

    return (
        <ModalPopup isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <ModalContato
                    parent={[openModalContato, setOpenModalContato]}
                    contato={selectedContato}
                    isVsible={visible}
                    listaContato={[contatos, setContatos]}
                />
                <header>
                    <strong>Cliente</strong>
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        hidden={loading}
                        title="Fechar"
                    >
                        <MdClose size={32} color="#999" />
                    </button>
                </header>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Dados Pessoais</h4>
                    <ContainerDadosPessoais>
                        <div>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome do cliente"
                                disabled={isVsible}
                                ref={register({ required: true })}
                            />
                            {errors.nome && <span>O nome é obrigatório.</span>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="cpfcnpj"
                                placeholder="CPJ/CNPJ"
                                disabled={isVsible}
                                onChange={handlechangeCpfCnpj}
                                ref={register({
                                    pattern: {
                                        value: /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,
                                        message: 'CPF/CNPJ inválido.',
                                    },
                                })}
                            />
                            {errors.cpfcnpj && (
                                <span>{errors.cpfcnpj.message}</span>
                            )}
                        </div>
                    </ContainerDadosPessoais>
                    <h4>Endereço</h4>
                    <ContainerEnd>
                        <div>
                            <select
                                name="estado"
                                ref={register({ required: true })}
                                disabled={isVsible}
                            >
                                <option value="" disabled selected>
                                    Selecione o estado
                                </option>
                                {options.map(uf => (
                                    <option value={uf.value}>{uf.label}</option>
                                ))}
                            </select>
                            {errors.estado && (
                                <span>O estado é obrigatório.</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="cidade"
                                placeholder="Cidade"
                                disabled={isVsible}
                                ref={register({ required: true })}
                            />
                            {errors.cidade && (
                                <span>A cidade é obrigatória.</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="bairro"
                                placeholder="Bairro"
                                disabled={isVsible}
                                ref={register({ required: true })}
                            />
                            {errors.bairro && (
                                <span>O bairro é obrigatório.</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="rua"
                                placeholder="Rua"
                                disabled={isVsible}
                                ref={register({ required: true })}
                            />
                            {errors.rua && <span>A Rua é obrigatória.</span>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="numero"
                                placeholder="Número"
                                disabled={isVsible}
                                ref={register({ required: true })}
                            />
                            {errors.numero && (
                                <span>O número é obrigatório.</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="complemento"
                                placeholder="Complemento"
                                disabled={isVsible}
                                ref={register}
                            />
                        </div>
                    </ContainerEnd>
                    <h4>Contatos</h4>
                    <ContainerTable>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                    <th>E-mail</th>
                                    <th>
                                        <button
                                            type="button"
                                            onClick={handleOpenModalContato}
                                            hidden={isVsible || loading}
                                            title="Cadastrar"
                                        >
                                            <MdAdd size={20} color="#fff" />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contatos ? (
                                    contatos.map(contato => (
                                        <tr key={contato.telefone}>
                                            {contato.principal ? (
                                                <td>
                                                    <MdStar color="orange" />{' '}
                                                    {contato.nome}
                                                </td>
                                            ) : (
                                                    <td>{contato.nome}</td>
                                                )}

                                            <td>
                                                {maskTelefone(contato.telefone)}
                                            </td>
                                            <td>{contato.email}</td>
                                            <th>
                                                <button
                                                    type="button"
                                                    hidden={isVsible}
                                                    title="Alterar"
                                                    onClick={() =>
                                                        handleOpenEditModal(
                                                            contato
                                                        )
                                                    }
                                                >
                                                    <MdEdit size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Visualizar"
                                                    onClick={() =>
                                                        handleOpenVisualizarModal(
                                                            contato
                                                        )
                                                    }
                                                >
                                                    <MdVisibility size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    hidden={isVsible}
                                                    title="Excluir"
                                                    onClick={() =>
                                                        handleDelete(contato)
                                                    }
                                                >
                                                    <MdDelete size={20} />
                                                </button>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                        <tr />
                                    )}
                            </tbody>
                        </table>
                    </ContainerTable>
                    {loading ? (
                        <Loading />
                    ) : (
                            <ContainerButton>
                                {visivel || (
                                    <button type="submit" title="Salvar">
                                        <MdSave size={42} color="#3b9eff" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    title="Fechar"
                                >
                                    <MdCancel size={42} color="#fb6f91" />
                                </button>
                            </ContainerButton>
                        )}
                </form>
            </Container>
        </ModalPopup>
    );
}

Modal.propTypes = {
    parent: PropTypes.func.isRequired,
    isVsible: PropTypes.bool.isRequired,
    cliente: PropTypes.shape({
        id: PropTypes.number,
        nome: PropTypes.string.isRequired,
        cpfcnpj: PropTypes.string.isRequired,
        enderecos: PropTypes.shape({
            id: PropTypes.number,
            estado: PropTypes.string.isRequired,
            cidade: PropTypes.string.isRequired,
            bairro: PropTypes.string.isRequired,
            rua: PropTypes.string.isRequired,
            numero: PropTypes.string.isRequired,
            complemento: PropTypes.string.isRequired,
        }).isRequired,
        contatos: PropTypes.array.isRequired,
    }).isRequired,
};
