import IBenefit from "./benefit";

export interface IBenefitResponse {
  id: number;
  nome: string;
  cpf: string;
  sexo?: string;
  rg?: string;
  orgaoEmissor?: string;
  expedicao?: string;
  naturalidade?: string;
  ufNascimento?: string;
  ufDocumento?: string;
  nacionalidade?: string;
  escolaridade?: string;
  estadoCivil?: string;
  idade: number;
  nasc: string;
  status: number;
  telefone1?: string;
  telefone2?: string;
  telefoneComercial?: string;
  celularLead?: string;
  celular1?: string;
  celular2?: string;
  parentesco?: string;
  pai?: string;
  mae?: string;
  email?: string;
  cnh?: string;
  preferencial?: string;
  identidade?: string;
  error?: string;
  enderecos?: string;
  beneficios: Array<IBenefit>
}

export default IBenefitResponse