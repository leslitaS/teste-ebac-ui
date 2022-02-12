/// <reference types="cypress" />

import enderecoPage from '../support/page-objects/endereco.page';
//import EnderecoPage from '../support/page-objects/endereco.page'

const dadosEndereco = require('../fixtures/endereco.json')
const dadosEnderecoEntrega = require('../fixtures/enderecoEntrega.json')


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

    it('Deve fazer cadastro de Endereço de entrega com sucesso', ()=>{
      
        enderecoPage.editarEnderecoEntrega('skarley','gamarra','Google','Brasil', 'Av Brasil','3022','São Paulo','São Paulo','02562307')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

    });
    it.only('Deve fazer cadastro de Endereço de entrega com sucesso - Usando Arquivo de Dados', () => {
        enderecoPage.editarEnderecoEntrega(
            dadosEnderecoEntrega[1].nome,
            dadosEnderecoEntrega[1].sobrenome,
            dadosEnderecoEntrega[1].empresa,
            dadosEnderecoEntrega[1].pais,
            dadosEnderecoEntrega[1].endereco,
            dadosEnderecoEntrega[1].complemento,
            dadosEnderecoEntrega[1].cidade,
            dadosEnderecoEntrega[1].estado,
            dadosEnderecoEntrega[1].cep
            )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        
    });
});