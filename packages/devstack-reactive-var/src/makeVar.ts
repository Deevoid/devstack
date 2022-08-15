import { ReactiveVar } from "./types";

export const makeVar = <T extends unknown>(
  initialValue: T,
  customizer?: (prevProps: T, newProps: T) => boolean
): ReactiveVar<T> => {
  let value = initialValue;
  const subscribers = new Set<Function>();

  const reactiveVar = (newValue?: T | ((value: T) => T)) => {
    if (newValue !== undefined) {
      let nextValue = value;
      let valueChanged;

      if (newValue instanceof Function) {
        nextValue = newValue(value);
      } else {
        nextValue = newValue;
      }

      if (customizer) {
        valueChanged = customizer(value, nextValue);
      } else {
        valueChanged = nextValue !== value;
      }
      value = nextValue;

      if (valueChanged) {
        subscribers.forEach((handler) => handler(value));
      }
    }
    return value;
  };

  reactiveVar.subscribe = (handler: Function) => {
    subscribers.add(handler);
    return () => subscribers.delete(handler);
  };

  reactiveVar.unsubscribe = (handler: Function) => {
    subscribers.delete(handler);
  };

  return reactiveVar;
};