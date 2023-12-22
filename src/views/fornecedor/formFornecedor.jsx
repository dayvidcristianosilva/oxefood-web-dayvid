import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormFornecedor () {

    const { state } = useLocation();
    
    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [dataFundacao, setDataFundacao] = useState();
    const [valorMercado, setValorMercado] = useState();
    const [paginaWeb, setPaginaWeb] = useState();
    const [contatoVendedor, setContatoVendedor] = useState();

    function salvar() {

        let fornecedorRequest = {
            nome: nome,
            endereco: endereco,
            dataFundacao: dataFundacao,
            valorMercado: valorMercado,
            paginaWeb: paginaWeb,
            contatoVendedor: contatoVendedor
        }
 
        axios.post("http://localhost:8082/api/fornecedor", fornecedorRequest)
        .then((response) => { 
            console.log('Fornecedor cadastrado com sucesso.') 
        })
        .catch((error) => { 
            console.log('Erro ao incluir o fornecedor.') 
        })
    }

    return (

        <div>

            <MenuSistema />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Fornecedor &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    width={14}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Data de Fundação'
                                    width={4}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataFundacao}
				                        onChange={e => setDataFundacao(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Input
                                fluid
                                label='Endereço'
                                maxLength="100"
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                            />

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor de Mercado'
                                    width={6}
                                    value={valorMercado}
                                    onChange={e => setValorMercado(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Contato do Vendedor'
                                    width={12}
                                    value={contatoVendedor}
                                    onChange={e => setContatoVendedor(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Input
                                fluid
                                label='Página Web'
                                value={paginaWeb}
                                onChange={e => setPaginaWeb(e.target.value)}
                            />
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-cliente'}>Voltar</Link>
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
            </div>
        </div>

    );

}