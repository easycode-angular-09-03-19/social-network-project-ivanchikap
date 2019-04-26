export interface HttpErrorResponse {
  error: string;
  headers: {
    normalizedNames: {
      size: number;
    };
    lazyUpdate: null;
    lazyInit: void;
  };
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
