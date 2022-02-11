/// <reference types="cypress" />

import enderecoPage from '../support/page-objects/endereco.page';
//import EnderecoPage from '../support/page-objects/endereco.page'

const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', ()=>{

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then( dados =>{
            cy.login(dados.usuario, dados.senha)
        })       
    });

    it('Deve fazer cadastro de faturamento com sucesso', ()=>{
      
        enderecoPage.editarEnderecoFaturamento('skarley','gamarra','google','Brasil', 'Av Brasil','3022','São Paulo','São Paulo','02562307','1199999099','testando@teste.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso -  Usando Arquivo de Dados', ()=>{
      
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });
});