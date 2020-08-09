import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [valuesForm, setValuesForm] = useState(valoresIniciais);

  function setValue(key, value) {
    setValuesForm({
      ...valuesForm,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValuesForm(valoresIniciais);
  }

  return {
    valuesForm,
    handleChange,
    clearForm,
  };
}
