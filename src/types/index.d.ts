type PromiseReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : (T extends (...args: any[]) => infer P ? P : any);
