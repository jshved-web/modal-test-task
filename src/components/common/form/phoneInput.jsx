import React from 'react'
import InputMask from 'react-input-mask'

const PhoneInput = ({onChange, value, label, name, error}) => {
  const handleChange = ({target}) => {
    onChange({name: target.name, value: target.value})
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <InputMask
          name={name}
          mask="+9 (999) 999-99-99"
          onChange={handleChange}
          value={value}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

export default PhoneInput