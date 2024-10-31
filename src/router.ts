import { Request, Response, Router } from "express";
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

// Cria um roteador
const router = Router();

// Criando uma rota principal para a aplicação
router.get("/", (req: Request, res: Response) => {
    res.json({ mensagem: "Olá, mundo!" });
});

/* 
* ROTAS PARA ALUNOS
*/ 
// Rota para listar os aluno
router.get("/lista/aluno", AlunoController.todos);
router.post("/novo/aluno", AlunoController.novo);

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.todos);
router.post("/novo/livro", LivroController.novo);

/* 
* ROTAS PARA EMPRESTIMOS
*/ 
// Rota para listar os emprestimos
router.get("/lista/emprestimo", EmprestimoController.todos);

// exportando as rotas
export { router };