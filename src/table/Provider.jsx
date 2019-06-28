import React from 'react';

import { add, clear, NAMES } from '../notify';

const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export const Provider = ({ children, layout: initL, context: initC }) => {
  const [states, setStates] = React.useState({
    layout: initL,
    context: initC,
  });

  React.useEffect(() => {
    let shouldSetMyState = true;
    add((data) => {
      if (data.name === NAMES.update) {
        const { layout, context } = data;
        if (shouldSetMyState) {
          setStates({ layout, context });
        }
      }
    });

    return () => {
      shouldSetMyState = false;
      clear();
    };
  }, [states]);

  return <Context.Provider value={states}>{children}</Context.Provider>;
};

export default Context;
