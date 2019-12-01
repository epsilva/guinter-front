import React, { useState, useEffect } from 'react';
import { MdClose, MdSave, MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { insertRequest, updateRequest } from '~/store/modules/produto/actions';
import Loading from '~/components/Loading';
import {
    Container,
    ModalPopup,
    ContainerProduto,
    ContainerButton,
} from './styles';

export default function Modal({ parent, isVsible, produto }) {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset, setValue } = useForm({});

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [visible, setIsVisible] = useState(true);

    const loading = useSelector(state => state.produto.loading);

    useEffect(() => {
        const [openModalContato] = parent;
        setIsOpenModal(openModalContato);
        setIsVisible(isVsible);
        if (Object.keys(produto).length !== 0) {
            setValue('nome', produto.nome);
        }
    }, [isVsible, parent, produto, setValue]);

    function handleCloseModal() {
        const [, setOpenModalContato] = parent;
        setOpenModalContato(false);
        reset({
            nome: '',
        });
    }

    const onSubmit = data => {
        if (produto.id) {
            const updateProd = {
                id: produto.id,
                nome: data.nome,
            };
            dispatch(updateRequest(updateProd));
        } else {
            dispatch(insertRequest(data));
        }
        handleCloseModal();
    };

    return (
        <ModalPopup isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <header>
                    <strong>Produto/Serviço</strong>
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        title="Fechar"
                    >
                        <MdClose size={32} color="#999" />
                    </button>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ContainerProduto>
                        <div className="field">
                            <input
                                type="text"
                                name="nome"
                                placeholder="Produto/Serviço"
                                disabled={visible}
                                ref={register({ required: true })}
                            />
                            {errors.nome && (
                                <span>O produto/serviço é obrigatório.</span>
                            )}
                        </div>
                        {loading ? (
                            <Loading />
                        ) : (
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
                            )}
                    </ContainerProduto>
                </form>
            </Container>
        </ModalPopup>
    );
}

Modal.propTypes = {
    parent: PropTypes.func.isRequired,
    isVsible: PropTypes.bool.isRequired,
    produto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
    }).isRequired,
};
