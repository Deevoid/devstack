
# @deevoid/reactive-var

A dead simple global state management library for react. 


## Features

- React 18 compatible
- 687 bytes (Minified + Gzipped)
- Reactive to the core
- Can be used inside React components(Hooks API) as well as util functions directly


## Installation

```bash
 For npm:   npm install @deevoid/reactive-var
 For yarn:  yarn add @deevoid/reactive-var
```
    
## Usage/Examples

```javascript
// reactiveVars.ts

import { makeVar } from '@deevoid/reactive-var'

export const countMakeVar = makeVar(0)
```

```javascript
// React Component

 import React from "react";
 import { useReactiveVar } from "@deevoid/reactive-var";
 import { countMakeVar } from "./reactiveVars.ts";

 export default () => {
    const count = useReactiveVar(countMakeVar);
    return (
      <div>
        <div>{count}</div>
        <button
          onClick={() => {
            countMakeVar(countMakeVar() + 1);
          }}
        >
          Increment
        </button>
      </div>
    );
  };
```


## API Reference

### makeVar

```javascript
  const countMakeVar = makeVar(0)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `initialValue` | `any` | **Required** |
| `customizer` | `(prevState, newState) => boolean` | **Optional**.  A function to manually compare the equality of state |

Returns a **reactiveVar**

- **ReactiveVar** returned from the `makeVar` function returns a function 
- Call it without parameters to get the latest value
- Call it with a value to update/set the value of reactiveVar. Example: ```countMakeVar(5);```
___


### useReactiveVar
```javascript
  const count = useReactiveVar(countMakeVar);
```
- A react hook that listens to changes in a ReactiveVar and rerender the component when the variable changes(After evaluating the **customizer** function).
- useReactiveVar must follow the rules of hook in react.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `reactiveVar`      | `typeof returnof makeVar` | **Required**. The reactiveVar returned from the **makeVar** function |



## License

[MIT](https://choosealicense.com/licenses/mit/) ©️ [Deevoid](https://github.com/Deevoid)

