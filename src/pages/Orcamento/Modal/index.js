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
    MdClearAll,
} from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import DateFnsUtils from '@date-io/date-fns';
import ptBrLocale from 'date-fns/locale/pt-BR';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
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
    ContainerDados,
    ContainerTable,
    ContainerButton,
    ContainerDadosPessoais,
    ContainerDetalhesTecnicos,
    ContainerDadosOrcamento,
} from './styles';

import { api } from '~/services/api';

export default function Modal({ parent, isVsible }) {
    const { register, handleSubmit, errors, reset, setValue } = useForm({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [visivel, setVisivel] = useState(true);
    const [loading, setLoading] = useState(false);
    const [dataAgendamento, setDataAgendamento] = useState(new Date());
    const [dataOrcamento, setDataOrcamento] = useState(new Date());
    const [cliente, setCliente] = useState({});

    const [repos, setRespos] = useState([]);

    async function getItemsAsync(e) {
        setLoading(true);
        const response = await api.get(`clientes/${e.target.value}`);
        if (response.data) {
            setRespos(response.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        setVisivel(isVsible);
    }, [isVsible]);

    useEffect(() => {
        const [openModal] = parent;
        setIsOpenModal(openModal);
    }, [parent]);

    function resetForm() {
        reset({});
    }

    function handleCloseModal() {
        const [, setOpenModal] = parent;
        setOpenModal(false);
        resetForm();
    }

    function handleDelete(item) { }

    const onSubmit = data => { };

    function handleDataAgendamento(date) {
        setDataAgendamento({
            startDate: date,
        });
    }

    useEffect(() => {
        if (Object.keys(cliente).length !== 0) {
            setValue('cpfcnpj', maskCpfCnpjTable(cliente.cpfcnpj));
            console.tron.log(cliente)
        } else {
            setValue('cpfcnpj', '');
        }
    }, [cliente, setValue]);

    function onTagsChange(event, values) {
        if (values) {
            setCliente(values);
        } else {
            setCliente({});
        }
    }

    return (
        <ModalPopup isOpen={isOpenModal}>
            <Container isOpen={isOpenModal}>
                <header>
                    <strong>Orçamento</strong>
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        hidden={loading}
                        title="Fechar"
                    >
                        <MdClose size={32} color="#999" />
                    </button>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <h4>Dados Pessoais</h4>
                    <ContainerDadosPessoais>
                        <div>
                            <Autocomplete
                                onChange={onTagsChange}
                                id="asynchronous-demo"
                                getOptionSelected={(option, value) =>
                                    option.nome === value.nome
                                }
                                getOptionLabel={option => option.nome}
                                options={repos}
                                loading={loading}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        label="Nome do cliente"
                                        fullWidth
                                        onChange={getItemsAsync}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <>
                                                    {loading ? (
                                                        <CircularProgress
                                                            color="inherit"
                                                            size={20}
                                                        />
                                                    ) : null}
                                                    {
                                                        params.InputProps
                                                            .endAdornment
                                                    }
                                                </>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <TextField
                                error={errors.cpfcnpj}
                                id="standard-basic"
                                label="CPF/CNPJ"
                                disabled={isVsible}
                                inputRef={register({ required: true })}
                                name="cpfcnpj"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </ContainerDadosPessoais>
                    <h4>Endereço</h4>
                    <ContainerDados>
                        <div>
                            <strong>Estado:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.estado : '-'}</p>
                        </div>
                        <div>
                            <strong>Cidade:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.cidade : '-'}</p>
                        </div>
                        <div>
                            <strong>Bairro:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.bairro : '-'}</p>
                        </div>
                        <div>
                            <strong>Rua:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.rua : '-'}</p>
                        </div>
                        <div>
                            <strong>Número:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.numero : '-'}</p>
                        </div>
                        <div>
                            <strong>Complemento:</strong>
                            <p>{cliente.enderecos ? cliente.enderecos.complemento : '-'}</p>
                        </div>
                    </ContainerDados>
                    <h4>Contato</h4>
                    <ContainerDados>
                        {cliente.contatos && cliente.contatos.map(contato => (
                            <>
                                <div>
                                    <strong>Nome:</strong>
                                    <p>{contato.principal ? contato.nome : '-'}</p>
                                </div>
                                <div>
                                    <strong>Telefone:</strong>
                                    <p>{contato.principal ? maskTelefone(contato.telefone) : '-'}</p>
                                </div>
                                <div>
                                    <strong>E-mail:</strong>
                                    <p>{contato.principal ? contato.email : '-'}</p>
                                </div>
                            </>
                        ))}
                    </ContainerDados>
                    <h4>Dados Orçamento</h4>
                    <ContainerDadosOrcamento>
                        <MuiPickersUtilsProvider
                            utils={DateFnsUtils}
                            locale={ptBrLocale}
                        >
                            <div>
                                <KeyboardDatePicker
                                    locale="pt-BR"
                                    margin="normal"
                                    label="Data do orçamento"
                                    format="dd/MM/yyyy"
                                    value={dataOrcamento}
                                    onChange={date => setDataOrcamento(date)}
                                    disabled
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <KeyboardDatePicker
                                    error={errors.dataAgendamento}
                                    name="dataAgendamento"
                                    locale="pt-BR"
                                    margin="normal"
                                    label="Data de agendamento"
                                    format="dd/MM/yyyy"
                                    value={dataAgendamento}
                                    onChange={date => setDataAgendamento(date)}
                                    inputRef={register({ required: true })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </MuiPickersUtilsProvider>
                        <div>
                            <p>Pendente</p>
                        </div>
                    </ContainerDadosOrcamento>
                    <h4>Detalhes Técnicos</h4>
                    <ContainerDetalhesTecnicos>
                        <div>
                            <div>
                                <TextField
                                    error={errors.qut}
                                    id="standard-basic"
                                    label="Quantidade"
                                    disabled={isVsible}
                                    inputRef={register({ required: true })}
                                    name="qut"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.produto}
                                    id="standard-basic"
                                    label="Produto"
                                    disabled={isVsible}
                                    inputRef={register({ required: true })}
                                    name="produto"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.detalhe}
                                    id="standard-basic"
                                    label="Detalhe do item"
                                    disabled={isVsible}
                                    inputRef={register({ required: true })}
                                    name="detalhe"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <TextField
                                    id="standard-basic"
                                    label="Ação a ser realizada"
                                    disabled={isVsible}
                                    inputRef={register()}
                                    name="acao"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.valor}
                                    id="standard-basic"
                                    label="Valor (R$)"
                                    disabled={isVsible}
                                    inputRef={register({ required: true })}
                                    name="valor"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                        <ContainerButton>
                            <button type="submit" title="Adicionar">
                                <MdAdd size={32} color="#3b9eff" />
                            </button>
                            <button
                                type="button"
                                // onClick={handleCloseModal}
                                title="Limpar"
                            >
                                <MdClearAll size={32} color="#fb6f91" />
                            </button>
                        </ContainerButton>
                    </ContainerDetalhesTecnicos>
                    <ContainerTable>
                        <table>
                            <thead>
                                <tr>
                                    <th>Qut.</th>
                                    <th>Produto/Serviço</th>
                                    <th>Detalhe do item</th>
                                    <th>Ação a ser realizada</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr />
                            </tbody>
                        </table>
                    </ContainerTable>

                    <ContainerButton>
                        <button type="submit" title="Salvar">
                            <MdSave size={42} color="#3b9eff" />
                        </button>
                        <button
                            type="button"
                            // onClick={handleCloseModal}
                            title="Fechar"
                        >
                            <MdCancel size={42} color="#fb6f91" />
                        </button>
                    </ContainerButton>
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
