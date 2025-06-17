export interface PropsContact {
  tipo_contato: number;
  valor: string;
  is_principal?: boolean;
  dt_criacao?: Date;
  dt_inativacao?: Date;
}
