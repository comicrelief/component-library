import { useState } from 'react';

/**
 * Hook to help with storing state in a single object in functional components and
 *  updating specific values only.
 */
const useStateObject = initialState => {
  const [state, setState] = useState(initialState);
  const updateState = updatedValues =>
    setState(prevState => ({ ...prevState, ...updatedValues }));

  return [state, updateState];
};

export default useStateObject;
