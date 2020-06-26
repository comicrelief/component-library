import { useState } from 'react';
import _ from 'lodash';

/**
 * Hook to help with storing state in a single object in functional components and
 *  updating specific values only.
 */
const useStateObject = initialState => {
  const [state, setState] = useState(initialState);
  const updateState = updatedValues =>
    setState(prevState =>
      Object.assign(_.cloneDeep(prevState), _.cloneDeep(updatedValues))
    );

  return [state, updateState];
};

export default useStateObject;
