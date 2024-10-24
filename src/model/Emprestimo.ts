
export class Emprestimo{

    private idEmprestimo: number = 0;
    private idAluno: number;
    private idLivro: number;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
    private statusEmprestimo: string;

     /**
     * Construtor da classe Emprestimos
     * 
     * @param idAluno Identificador do aluno que fez o empréstimo
     * @param idLivro Identificador do livro emprestado
     * @param dataEmprestimo Data em que o empréstimo foi realizado
     * @param dataDevolucao Data prevista para devolução do livro
     * @param statusEmprestimo Status do empréstimo (ex.: "ativo", "devolvido")
     */
    public constructor (_idAluno:number, _idLivro:number, _dataEmprestimo:Date, 
                        _dataDevolucao:Date, _statusEmprestimo:string) {
        
        this.idAluno          = _idAluno;
        this.idLivro          = _idLivro;
        this.dataEmprestimo   = _dataEmprestimo;
        this.dataDevolucao    = _dataDevolucao;
        this.statusEmprestimo = _statusEmprestimo;
    }

    // métodos GETTERS and SETTERS
    /**
     * Retorna o id do empréstimo
     * @returns id: id empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui o parâmetro ao atributo idEmprestimo
     * 
     * @param _idEmprestimo : idEmprestimo
     */
    public setIdEmprestimo(_idEmprestimo: number): void {
        this.idEmprestimo = _idEmprestimo;
    }

    /**
     * Retorna o id do aluno
     * @returns id: id aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui o parâmetro ao atributo idAluno
     * 
     * @param _idAluno : idAluno
     */
    public setIdAluno(_idAluno: number): void {
        this.idAluno = _idAluno;
    }

    /**
     * Retorna o id do livro
     * @returns id: id livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui o parâmetro ao atributo idLivro
     * 
     * @param _idLivro : idLivro
     */
    public setIdLivro(_idLivro: number): void {
        this.idLivro = _idLivro;
    }

    /**
     * Retorna a data do empréstimo
     * @returns dataEmprestimo: data do empréstimo
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Atribui o parâmetro ao atributo dataEmprestimo
     * 
     * @param _dataEmprestimo : data do empréstimo
     */
    public setDataEmprestimo(_dataEmprestimo: Date): void {
        this.dataEmprestimo = _dataEmprestimo;
    }

    /**
     * Retorna a data de devolução
     * @returns dataDevolucao: data de devolução
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Atribui o parâmetro ao atributo dataDevolucao
     * 
     * @param _dataDevolucao : data de devolução
     */
    public setDataDevolucao(_dataDevolucao: Date): void {
        this.dataDevolucao = _dataDevolucao;
    }

    /**
     * Retorna o status do empréstimo
     * @returns statusEmprestimo: status do empréstimo
     */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }
}




