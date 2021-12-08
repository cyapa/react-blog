type APIError = Readonly<{
  message: string;
}>;

export type APIResult<T = null, U = null> = Readonly<{
  data: T | null;
  error: U | APIError | null;
}>;


export type CreateResult = Readonly<{
  id:number
}>;
