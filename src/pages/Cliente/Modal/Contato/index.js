import React, { useState, useEffect } from 'react';
import { MdClose, MdSave, MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import useForm from 'react-hook-form';
import { Container, Modal, ContainerContatos, ContainerButton } from './styles';
import { maskTelefone } from '~/components/Masks';

export default function Contato({ parent, isVsible, listaContato, contato }) {
    const { register, handleSubmit, errors, reset, setValue } = useForm({});

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [visible, setIsVisible] = useState(true);

    useEffect(() => {
        const [openModalContato] = parent;
        setIsOpenModal(openModalContato);
        setIsVisible(isVsible);
        if (Object.keys(contato).length !== 0) {
            setValue('nome', contato.nome);
            setValue('telefone', maskTelefone(contato.telefone));
            setValue('email', contato.email);
            setValue('principal', contato.principal);
        }
    }, [contato, isVsible, parent, setValue]);

    function handleCloseModal() {
        const [, setOpenModalContato] = parent;
        setOpenModalContato(false);
    }

    function handleChangeTelefone(e) {
        e.target.value = maskTelefone(e.target.value);
    }

    const onSubmit = data => {
        const [contatos, setContatos] = listaContato;
        const listContato = [];

        contatos.map(element => {
            if (contato.telefone !== element.telefone) {
                listContato.push(element);
            }
        });

        const isValido = listContato.map(listCont => {
            if (
                listCont.telefone.replace(/[^0-9]+/g, '') ===
                data.telefone.replace(/[^0-9]+/g, '')
            ) {
                toast.error('Telefone já cadastrado');
                return true;
            }
            if (listCont.email === data.email) {
                toast.error('E-mail já cadastrado');
                return true;
            }
            if (listCont.principal && data.principal) {
                toast.error('Contato principal já cadastrado');
                return true;
            }
        });
        listContato.push(data);

        if (isValido[0] === undefined) {
            setContatos(listContato);
            reset({
                nome: '',
                telefone: '',
                email: '',
                principal: false,
            });
            handleCloseModal();
        }
    };

    return (
        <Modal isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <header>
                    <strong>Contatos</strong>
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        title="Fechar"
                    >
                        <MdClose size={32} color="#999" />
                    </button>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ContainerContatos>
                        <div className="field">
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome do contato"
                                disabled={visible}
                                ref={register({ required: true })}
                            />
                            {errors.nome && <span>O nome é obrigatório.</span>}
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                onChange={handleChangeTelefone}
                                disabled={visible}
                                ref={register({
                                    minLength: {
                                        value: 15,
                                        message: 'Telefone inválido.',
                                    },
                                    required: {
                                        value: true,
                                        message: 'O telefone é obrigatório.',
                                    },
                                })}
                            />
                            {errors.telefone && (
                                <span>{errors.telefone.message}</span>
                            )}
                        </div>
                        <div className="field">
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                disabled={visible}
                                ref={register({
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Endereço de e-mail inválido',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span>{errors.email.message}</span>
                            )}
                        </div>
                        <div className="check">
                            <label htmlFor="checkbox">
                                Contato Principal:
                                <input
                                    type="checkbox"
                                    name="principal"
                                    disabled={visible}
                                    onSelect={contato.principal}
                                    ref={register}
                                />
                            </label>
                        </div>
                        <ContainerButton>
                            {visible || (
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
                    </ContainerContatos>
                </form>
            </Container>
        </Modal>
    );
}

Contato.propTypes = {
    parent: PropTypes.func.isRequired,
    isVsible: PropTypes.bool.isRequired,
    listaContato: PropTypes.func.isRequired,
    contatos: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        email: PropTypes.string,
        telefone: PropTypes.string.isRequired,
        principal: PropTypes.bool.isRequired,
    }).isRequired,
    contato: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        email: PropTypes.string,
        telefone: PropTypes.string.isRequired,
        principal: PropTypes.bool.isRequired,
    }).isRequired,
};
