import { useCallback, useState } from 'react';

const useInputCustom = (callback) => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);



  const handleChange = useCallback((event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  }, [values]);



  const handleSubmits = useCallback((callback) => (event) => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  } , []);

  return [{ values, loading }, handleChange, handleSubmits];
};

export default useInputCustom;