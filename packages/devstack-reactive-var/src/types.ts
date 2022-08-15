export type ReactiveVar<T> = {
  (newValue?: T | ((value: T) => T)): T;
  subscribe: (handler: Function) => () => void;
  unsubscribe: (handler: Function) => void;
};
