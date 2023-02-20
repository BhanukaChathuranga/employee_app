import { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const toggleOn = useCallback(() => setValue(true), []);
  const toggleOff = useCallback(() => setValue(false), []);
  return { value, toggleOn, toggleOff, toggle };
};
