export interface Response {
  statusCode: number;
  body: string;
}

export interface Callback {
  (error: Error | Response | null, result: Response): void;
}
