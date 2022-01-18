import { Router } from 'express'
import MercadoController from './controllers/MercadoController'

const routes = Router()

// READ-ALL - Deve ser possivel listar todos itens da lista
routes.get('/lista', MercadoController.readall)

// CREATE - Deve ser possivel criar um item na lista de mercado, o modelo a ser criado deve ter um nome, um preço e um id
routes.post('/lista', MercadoController.cria)

// READ-ONE - Deve ser possivel listar um unico item. A busca deve ser feita por id
routes.get('/lista/:id', MercadoController.readone)

// UPDATE - Deve ser possivel atualizar o preço de um item. O item deve ser encontrado atraves do seu id
routes.put('/lista/:id', MercadoController.atualiza)

// DELETE - Deve ser possivel Deletar um item da lista. O item a ser deletado deve ser buscado atraves do seu id
routes.delete('/lista/:id', MercadoController.deleta)

export default routes