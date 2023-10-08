import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";


export default function FormProduto() {
    const [titulo, setTitulo] = useState();
    const [codProduto, setCodProduto] = useState();
    const [descricaoProduto, setDescricaoproduto] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [entregaMin, setEntregaMin] = useState();
    const [entregaMax, setEntregaMax] = useState();

    function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codProduto: codProduto,
            descricaoProduto: descricaoProduto,
            valorUnitario: valorUnitario,
            entregaMin: entregaMin,
            entregaMax: entregaMax
        }

        axios.post("http://localhost:8082/api/produto", produtoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um produto.')
            })
    }
    return (

        <div>
            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder="Informe o título do produto"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder="Informe o código do produto"
                                    value={codProduto}
                                    onChange={e => setCodProduto(e.target.value)}

                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Descrição do Produto'
                                    maxLength="100"
                                    placeholder="Infome a descrição do produto"
                                    width={16}
                                    value={descricaoProduto}
                                    onChange={e => setDescricaoproduto(e.target.value)}

                                />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    maxLength="100"
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}

                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                    placeholder="30"
                                    width={6}
                                    value={entregaMin}
                                    onChange={e => setEntregaMin(e.target.value)}

                                />

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    placeholder="40"
                                    width={6}
                                    value={entregaMax}
                                    onChange={e => setEntregaMax(e.target.value)}

                                />


                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-produto'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div >
        </div >

    );

}
