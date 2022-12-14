import { useState, startTransition } from "react";
import { makeVar, useReactiveVar } from "@deevoid/reactive-var";

export const countMakeVar = makeVar(0);

setInterval(() => {
  countMakeVar(countMakeVar() + 1);
}, 50);

function SlowComponent() {
  const state = useReactiveVar(countMakeVar);
  const now = performance.now();

  while (performance.now() - now < 200) {
    // do nothing
  }
  return <h3>Counter: {state}</h3>;
}

export default function Web() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          startTransition(() => {
            setShow(!show);
          });
        }}
      >
        toggle content
      </button>
      {show && (
        <>
          <SlowComponent />
          <SlowComponent />
          <SlowComponent />
          <SlowComponent />
          <SlowComponent />
        </>
      )}
    </div>
  );
}
