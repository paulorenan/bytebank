export interface Transferencia {
  id?: number | string;
  valor: number | null;
  destino: string | number | null;
  data?: string;
}
