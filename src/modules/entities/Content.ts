class Content {
  public readonly conteudo_id: number;

  public slot: number;

  public modulo: number;

  public modulo_titulo: string;

  public step: number;

  public step_titulo: string;

  public step_imagem_url: string;

  public conteudo_titulo: string;

  public conteudo_categoria_id: number;

  public conteudo_url: string;

  public conteudo_material_url: string;

  public conteudo_descricao: string;

  public conteudo_token?: string;

  public conteudo_minuto?: number;

  constructor(props: Omit<Content, 'conteudo_id'>) {
    Object.assign(this, props);
  }
}

export default Content;
