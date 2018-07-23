import React from 'react';
import { Checkbox ,Form, Label} from 'semantic-ui-react';
const SelectOption = ({placeholder, meta: {touched, error}}) => {
  return (
      <Form.Field error={touched && !!error}>
    <Checkbox slider
    label={placeholder} />
     {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default SelectOption
