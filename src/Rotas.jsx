import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/formCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormFornecedor from './views/fornecedor/formFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-cliente" element={<FormCliente />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="list-cliente" element={<ListCliente />} />
                <Route path="list-produto" element={<ListProduto />} />
                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="form-fornecedor" element={<FormFornecedor />} />
                <Route path="list-fornecedor" element={<ListFornecedor />} />
            </Routes>
        </>
    )
}

export default Rotas
