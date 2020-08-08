import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFieldWrapper, Label } from './style';

function FormField({
  label, type, name, value, onChange,
}) {
  const FieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={FieldId}>
        <Input
          as={tag}
          id={FieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

// prop-types config
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
