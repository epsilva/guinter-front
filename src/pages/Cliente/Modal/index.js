import React, { useState, useEffect } from 'react';
import {
    MdClose,
    MdSave,
    MdCancel,
    MdAdd,
    MdEdit,
    MdDelete,
    MdVisibility,
} from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { maskCpfCnpj, maskTelefone } from '~/components/Masks';
import {
    Container,
    ModalPopup,
    ContainerEnd,
    ContainerTable,
    ContainerButton,
    ContainerDadosPessoais,
} from './styles';

import ModalContato from '~/pages/Cliente/Modal/Contato';

const schema = Yup.object().shape({
    nome: Yup.string().required('O Nome é obrigatório'),
    cpfcnpj: Yup.string().required('O CPF/CNPJ é obrigatório'),
    estado: Yup.string().required('O Estado é obrigatório'),
    cidade: Yup.string().required('A Cidade é obrigatória'),
    bairro: Yup.string().required('O Bairro é obrigatório'),
    rua: Yup.string().required('A rua é obrigatório'),
    numero: Yup.string().required('O Número é obrigatório'),
    complemento: Yup.string(),
});

export default function Modal({ parent, cliente, isVsible }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [openModalContato, setOpenModalContato] = useState(false);
    const [selectedCliente, setSelectedCliente] = useState({});
    const [dadosCliente, setDadosCliente] = useState({});
    const [selectedContato, setSelectedContato] = useState({});
    const [visible, setVisible] = useState(false);

    const contatosAdd = useSelector(state => state.contato.data);

    const [contatos, setContatos] = useState([]);
    const [visivel, setVisivel] = useState(true);

    useEffect(() => {
        if (Object.keys(contatosAdd).length !== 0) {
            contatos.push(contatosAdd);
            setContatos(contatos);
        }
    }, [contatos, contatosAdd]);

    useEffect(() => {
        setVisivel(isVsible);
    }, [isVsible]);

    useEffect(() => {
        setSelectedCliente(cliente);
        setDadosCliente({});
        if (cliente && cliente.enderecos) {
            setDadosCliente({
                nome: cliente.nome,
                cpfcnpj: cliente.cpfcnpj,
                estado: cliente.enderecos.estado,
                cidade: cliente.enderecos.cidade,
                bairro: cliente.enderecos.bairro,
                rua: cliente.enderecos.rua,
                numero: cliente.enderecos.numero,
                complemento: cliente.enderecos.complemento,
            });
            setContatos(cliente.contatos);
        } else {
            setDadosCliente({});
            setContatos([]);
        }
    }, [cliente]);

    useEffect(() => {
        const [openModal] = parent;
        setIsOpenModal(openModal);
    }, [parent]);

    function handleCloseModal() {
        const [, setOpenModal] = parent;
        setOpenModal(false);
    }

    function handleOpenModalContato() {
        setOpenModalContato(!openModalContato);
        setSelectedContato({});
        setVisible(false);
    }

    function handlechangeCpfCnpj(e) {
        e.target.value = maskCpfCnpj(e.target.value);
    }

    function handleOnSubmit(data) {
        const dadosCliente = {
            nome: data.nome,
            cpfcnpj: data.cpfcnpj.replace(/[^0-9]+/g, ''),
            enderecos: {
                numero: data.numero,
                rua: data.rua,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                complemento: data.complemento,
            },
            contaos: contatos,
        };

        console.tron.log(dadosCliente);
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

    return (
        <ModalPopup isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <ModalContato
                    parent={[openModalContato, setOpenModalContato]}
                    contato={selectedContato}
                    isVsible={visible}
                />
                <header>
                    <strong>Cliente</strong>
                    <button type="button" onClick={handleCloseModal}>
                        <MdClose size={32} color="#999" />
                    </button>
                </header>

                <Form
                    schema={schema}
                    initialData={dadosCliente}
                    onSubmit={handleOnSubmit}
                >
                    <h4>Dados Pessoais</h4>
                    <ContainerDadosPessoais>
                        <div>
                            <Input
                                type="text"
                                name="nome"
                                placeholder="Nome do cliente"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="cpfcnpj"
                                placeholder="CPJ/CNPJ"
                                disabled={isVsible}
                                onChange={handlechangeCpfCnpj}
                            />
                        </div>
                    </ContainerDadosPessoais>
                    <h4>Endereço</h4>
                    <ContainerEnd>
                        <div>
                            <Input
                                type="text"
                                name="estado"
                                placeholder="Estado"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="cidade"
                                placeholder="Cidade"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="bairro"
                                placeholder="Bairro"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="rua"
                                placeholder="Rua"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="numero"
                                placeholder="Número"
                                disabled={isVsible}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="complemento"
                                placeholder="Complemento"
                                disabled={isVsible}
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
                                            hidden={isVsible}
                                        >
                                            <MdAdd size={20} color="#fff" />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contatos ? (
                                    contatos.map(contato => (
                                        <tr>
                                            <td>{contato.nome}</td>
                                            <td>
                                                {maskTelefone(contato.telefone)}
                                            </td>
                                            <td>{contato.email}</td>
                                            <th>
                                                <button
                                                    type="button"
                                                    hidden={isVsible}
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
                    <ContainerButton>
                        {visivel || (
                            <button type="submit">
                                <MdSave size={42} color="#3b9eff" />
                            </button>
                        )}
                        <button type="button" onClick={handleCloseModal}>
                            <MdCancel size={42} color="#fb6f91" />
                        </button>
                    </ContainerButton>
                </Form>
            </Container>
        </ModalPopup>
    );
}