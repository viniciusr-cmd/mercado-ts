import { Request, Response } from "express";

import Mercado from "../schemas/Mercado";

class MercadoController {
  // READ-ALL - Deve ser possivel listar todos itens da lista
  public async readall(req: Request, res: Response): Promise<Response> {
    const mercado = await Mercado.find();

    return res.status(200).send(mercado);
  }

  // READ-ONE - Deve ser possivel listar um unico item. A busca deve ser feita por id
  public async readone(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const mercado = await Mercado.findById(id);

    return res.status(200).send(mercado);
  }

  // CREATE - Deve ser possivel criar um item na lista de mercado, o modelo a ser criado deve ter um nome, um preço e um id
  public async cria(req: Request, res: Response): Promise<Response> {
    const mercado = await Mercado.create(req.body);

    return res.status(201).send({message: `CRIADO COM SUCESSO`, mercado});
  }

  // UPDATE - Deve ser possivel atualizar o preço de um item. O item deve ser encontrado atraves do seu id
  public async atualiza(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const mercado = await Mercado.findByIdAndUpdate(id, req.body);

    return res.status(200).send({message: `PREÇO ATUALIZADO`, mercado});
  }

  // DELETE - Deve ser possivel Deletar um item da lista. O item a ser deletado deve ser buscado atraves do seu id
  public async deleta(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const mercado = await Mercado.findByIdAndDelete(id);

    return res.status(200).send({message: `DELETADO`, mercado});
  }
}

export default new MercadoController();
