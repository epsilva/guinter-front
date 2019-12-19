import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Cliente from '~/pages/Cliente';
import Servico from '~/pages/Servico';
import Orcamento from '~/pages/Orcamento';
import FormOrcamento from '~/pages/Orcamento/Form';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/profile" component={Profile} isPrivate />
            <Route path="/cliente" component={Cliente} isPrivate />
            <Route path="/servico" component={Servico} isPrivate />
            <Route path="/orcamento" component={Orcamento} isPrivate />
            <Route path="/orcamentoForm" component={FormOrcamento} isPrivate />
        </Switch>
    );
}
