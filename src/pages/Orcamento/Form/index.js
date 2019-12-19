import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import useForm from 'react-hook-form';

import {
    Container,
    ContainerCliente,
    ContainerEndereco,
    ContainerContato,
} from './styles';
import { api } from '~/services/api';
import {
    maskCpfCnpj,
    maskTelefone,
    maskCpfCnpjTable,
} from '~/components/Masks';

export default function Form() {
    const { register, handleSubmit, errors, reset, setValue } = useForm({});
    const [repos, setRespos] = useState([]);
    const [loading, setLoading] = useState(false);

    // Dados Formulario
    const [cliente, setCliente] = useState({});

    async function getItemsAsync(e) {
        setLoading(true);
        const response = await api.get(`clientes/${e.target.value}`);
        if (response.data) {
            setRespos(response.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (Object.keys(cliente).length !== 0) {
            setValue('cpfcnpj', maskCpfCnpjTable(cliente.cpfcnpj));
            setValue('estado', cliente.enderecos.estado);
            setValue('cidade', cliente.enderecos.cidade);
            setValue('rua', cliente.enderecos.rua);
            setValue('numero', cliente.enderecos.numero);
            setValue('complemento', cliente.enderecos.complemento);
            setValue('bairro', cliente.enderecos.bairro);
        } else {
            setValue('cpfcnpj', '');
            setValue('estado', '');
            setValue('cidade', '');
            setValue('rua', '');
            setValue('numero', '');
            setValue('complemento', '');
            setValue('bairro', '');
        }
    }, [cliente, setValue]);

    function onTagsChange(event, values) {
        if (values) {
            setCliente(values);
        } else {
            setCliente({});
        }
    }

    const onSubmit = data => {
        console.tron.log(data);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <ContainerCliente>
                    <div className="div-esquerda">
                        <Autocomplete
                            className="autoComplete"
                            onChange={onTagsChange}
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
                                                {params.InputProps.endAdornment}
                                            </>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="div-direita">
                        <TextField
                            error={errors.cpfcnpj}
                            fullWidth
                            label="CPF/CNPJ"
                            inputRef={register({ required: true })}
                            name="cpfcnpj"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </ContainerCliente>
                <ContainerEndereco>
                    <div className="div-direita">
                        <TextField
                            fullWidth
                            label="Estado"
                            name="estado"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Bairro"
                            name="bairro"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Número"
                            name="numero"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="div-direita">
                        <TextField
                            fullWidth
                            label="Cidade"
                            name="cidade"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Rua"
                            name="rua"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Complemento"
                            name="complemento"
                            disabled
                            inputRef={register({})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </ContainerEndereco>
                <ContainerContato>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="nome"
                        disabled
                        inputRef={register({})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Telefone"
                        name="telefone"
                        disabled
                        inputRef={register({})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        label="E-mail"
                        name="email"
                        disabled
                        inputRef={register({})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </ContainerContato>
            </form>
        </Container>
    );
}
