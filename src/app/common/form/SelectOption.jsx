import React from 'react';
import { Checkbox ,Form, Label} from 'semantic-ui-react';
const SelectOption = ({input, placeholder, meta: {touched, error}}) => {
  return (
    <Form.Field error={touched && !!error}>
    <Checkbox slider
    {...input}
    label={placeholder} />
     {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default SelectOption
