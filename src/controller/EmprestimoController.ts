import { Request, Response } from "express";
import { Emprestimo } from "../model/Emprestimo";

interface EmprestimoDTO {
    idEmprestimo: number;
    idAluno: number;
    idLivro: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    statusEmprestimo: string;
}


/**
 * A classe `PedidoVendaController` estende a classe `PedidoVenda` e é responsável por controlar as requisições relacionadas aos pedidos de venda.
 * 
 * - Como um controlador dentro de uma API REST, esta classe gerencia as operações relacionadas ao recurso "pedido de venda".
 * - Herdando de `PedidoVenda`, ela pode acessar os métodos e propriedades da classe base.
 */
export class EmprestimoController extends Emprestimo{

    /**
     * Lista todos os pedidos de venda.
     * @param req Objeto de requisição HTTP.
     * @param res Objeto de resposta HTTP.
     * @returns Lista de pedidos de venda em formato JSON com status 200 em caso de sucesso.
     * @throws Retorna um status 400 com uma mensagem de erro caso ocorra uma falha ao acessar a listagem de pedidos de venda.
     */
    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            const listaEmprestimo = await Emprestimo.listagemEmprestimo();

            return res.status(200).json(listaEmprestimo);
        } catch (error) {
            console.log('Erro ao acessar listagem de emprestimo');
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de emprestimo" });
        }
    }
}