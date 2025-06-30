export interface IDocumento {
  id_documento?: number;
  tipo: string;
  url_arquivo: string;
  dt_upload?: Date;
  criado_na_plataforma: boolean;
  consulta_id: number;
  profissional_id?: string;
  paciente_id: string;
  visivel_paciente: boolean;
  observacoes?: string;
  updated_at?: Date;
}
