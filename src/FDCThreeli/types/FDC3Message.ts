export type FDC3MessageHandler = (data: any) => void;

export type FDC3MessageDetail = {
  id: string;
  type: string;
  ts: number;
  payload: any;
};
