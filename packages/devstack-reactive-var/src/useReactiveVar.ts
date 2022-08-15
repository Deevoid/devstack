import { useCallback } from "react";
import { ReactiveVar } from "./types";
import { useSyncExternalStore } from "use-sync-external-store/shim";

export const useReactiveVar = <T extends unknown>(
  reactiveVar: ReactiveVar<T>
) => {
  const getSnapShotCallback = useCallback(() => reactiveVar(), [reactiveVar]);
  const state = useSyncExternalStore(
    reactiveVar.subscribe,
    getSnapShotCallback
  );
  return state;
};