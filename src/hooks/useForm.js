import {useRef, useState} from "react";
import isValidString from "../utils/isString";
import isNumber from "../utils/isNumber";

const useForm = () => {
  const _fields = useRef({});
  const [errors, setErrors] = useState({});

  function _push(name, field) {
    _fields.current[name] = field;
  }

  function _getValues() {
    return Object.values(_fields.current);
  }

  function _get(name) {
    return _fields.current[name];
  }

  function register(name, options) {
    return {
      name,
      ref: (ref) => {
        if (_get(name)) {
          return;
        }

        _push(name, {
          rules: options?.rules,
          ref
        });
      }
    }
  }


  function _getFormValues() {
    const fieldsArray = _getValues();

    return fieldsArray.reduce((acc, {ref}) => {
      const {name, value} = ref;
      acc[name] = value;
      return acc;
    }, {});
  }

  function _validateBeforeSubmit() {
    const fieldsArray = _getValues();
    const errors = fieldsArray.reduce((acc, field) => {
      if (field.rules.required) {
        if (!isValidString(field.ref.value)) {
          acc[field.ref.name] = {
            ...acc[field.ref.name],
            required: isValidString(field.rules.required) ? field.rules.required : 'Campo obrigatório'
          }
        }
      }

      if (field.rules.onlyNumber) {
        if (!isNumber(field.ref.value)) {
          acc[field.ref.name] = {
            ...acc[field.ref.name],
            onlyNumber: isValidString(field.rules.onlyNumber)
              ? field.rules.onlyNumber
              : 'Campo deve ter apenas números'
          }
        }
      }

      return acc;
    }, {});

    let _errorCounter = Object.keys(errors).length;
    setErrors(errors);

    if (_errorCounter > 0) {
      throw new Error('The form is not valid');
    }
  }

  function handleSubmit(onSubmit) {
    return (event) => {
      event.preventDefault();
      const formValues = _getFormValues();
      try {
        _validateBeforeSubmit();
      } catch (e) {
        console.warn(e);
        return;
      }
      onSubmit(formValues);
    }
  }

  return {handleSubmit, register, errors};
}

export default useForm;
