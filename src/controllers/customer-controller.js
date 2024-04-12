'use strict';

const validationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.get = async(data) => {
    const customer = new Customer();
    await customer.save();
};

exports.post = async(req, res, next) => {
    let validador = new validationContract();

    validador.hasMinLen(req.body.name, 3, 'O Nome deve ter pelo menos 3 caracteres');
    validador.isEmail(req.body.email, 'E-mail invalido!');
    validador.hasMinLen(req.body.password, 6, 'A senha deve ter pelo menos 8 caracteres');

    // Se os dados forem inválidos, retornar o erro
    if(!validador.isValid()){
        res.status(400).send(validador.errors()).end();
        return;
    }

    try{
        await repository.create(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'});
    }catch(e){
        res.status(500).send({
            data: e,
            message: 'Falha ao cadastrar o cliente!'
        });
    }
};