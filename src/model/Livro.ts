

export class Livro {
    private idLivro: number = 0 ;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string

     /**
     * Construtor da classe Livro
     * 
     * @param titulo Título do Livro
     * @param autor Autor do Livro
     * @param editora Editora do Livro
     * @param anoPublicacao Ano de publicação do Livro
     * @param isbn ISBN do Livro
     * @param quantTotal Quantidade total de exemplares do Livro
     * @param quantDisponivel Quantidade disponível de exemplares do Livro
     * @param valorAquisicao Valor de aquisição do Livro
     * @param statusLivroEmprestado Status de empréstimo do Livro
     */
    public constructor (_titulo: string, _autor: string, _editora: string, _anoPublicacao: string, 
                               _isbn: string, _quantTotal: number,_quantDisponivel: number, _valorAquisicao: number, _statusLivroEmprestimo: string){
       
        this.titulo                = _titulo;
        this.autor                 = _autor;
        this.editora               = _editora;
        this.anoPublicacao         = _anoPublicacao;
        this.isbn                  = _isbn;
        this.quantTotal            = _quantTotal;
        this.quantDisponivel       = _quantDisponivel;
        this.valorAquisicao        = _valorAquisicao;
        this.statusLivroEmprestado = _statusLivroEmprestimo;
    }

    //métodos GETTERS and SETTERS
    /**
     * Retorna o id do livro
     * @returns id: idLivro
     */
    public getIdLivro(): number{
        return this.idLivro;
    }

    /**
     * Atribui o parâmetro ao atributo idAluno
     * 
     * @param _idLivro : idLivro
     */
    public setIdLivro(_idLivro: number): void{
        this.idLivro = _idLivro;
    }

     /**
     * Retorna o titulo do livro
     * @returns titulo: _titulo
     */
    public getTitulo(): string{
        return this.titulo;
    }

    /**
     * Atribui o parâmetro ao atributo titulo
     * 
     * @param _titulo : titulo
     */
    public setTitulo(_titulo: string): void{
        this.titulo = _titulo;
    }
    
     /**
     * Retorna o autor do livro
     * @returns autor: _autor
     */
     public getAutor(): string{
        return this.autor;
    }

    /**
     * Atribui o parâmetro ao atributo autor
     * 
     * @param _autor : autor
     */
    public setAutor(_autor: string): void{
        this.autor = _autor;
    }

     /**
     * Retorna a editora do livro
     * @returns editora: _editora
     */
     public getEditora(): string{
        return this.editora;
    }

    /**
     * Atribui o parâmetro ao atributo editora
     * 
     * @param _editora : editora
     */
    public setEditora(_editora: string): void{
        this.editora = _editora;
    }

     /**
     * Retorna o ano de publicação do livro
     * @returns anoPublicacao: _anoPublicacao
     */
     public getAnoPublicacao(): string{
        return this.anoPublicacao;
    }

    /**
     * Atribui o parâmetro ao ano de publicação titulo
     * 
     * @param _anoPublicacao : anoPublicacao
     */
    public setAnoPublicacao(_anoPublicacao: string): void{
        this.anoPublicacao = _anoPublicacao;
    }   

    /**
     * Retorna o ISBN do livro
     * @returns isbn: _isbn
     */
public getISBN(): string{
        return this.isbn;
    }

    /**
     * Atribui o parâmetro ao atributo ISBN
     * 
     * @param _isbn : isbn
     */
    public setISBN(_isbn: string): void{
        this.isbn = _isbn;
    }

    /**
    * Retorna a quantidade total de livro
    * @returns quantidade total: quantTotal
    */
    public getQuantTotal(): number{
        return this.quantTotal;
    }

    /**
     * Atribui o parâmetro ao atributo quantidade total
     * 
     * @param _quantTotal : quantTotal
     */
    public setQuantTotal(_quantTotal: number): void{
        this.quantTotal = _quantTotal;
    }

    /**
    * Retorna a quantidade disponivel de livro
    * @returns quantidade disponivel: quantDisponivel
    */
    public getQuantDisponivel(): number{
        return this.quantDisponivel;
    }

    /**
     * Atribui o parâmetro ao atributo quantidade disponível
     * 
     * @param _quantDisponivel : quantDisponivel
     */
    public setQuantDisponivel(_quantDisponivel: number): void{
        this.quantDisponivel = _quantDisponivel;
    }

    /**
    * Retorna a quantidade total de livro
    * @returns quantidade total: quantTotal
    */
    public getValorAquisicao(): number{
        return this.valorAquisicao;
    }

    /**
     * Atribui o parâmetro ao atributo valor aquisição
     * 
     * @param _valorAquisicao : valorAquisicao
     */
    public setValorAquisicao(_valorAquisicao: number): void{
        this.valorAquisicao = _valorAquisicao;
    }

    /**
    * Retorna o status do livro
    * @returns status do livro : statusLivroEmprestado
    */
    public getStatusLivroEmprestado(): string{
        return this.statusLivroEmprestado;
    } 

    /**
     * Atribui o parâmetro ao atributo status livro emprestado
     * 
     * @param _statusLivroEmprestado : statusLivroEmprestado
     */
    public setStatusLivroEmprestado(_statusLivroEmprestado: string): void{
        this.statusLivroEmprestado = _statusLivroEmprestado;
    }
}


