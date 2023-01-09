import React, {useState} from 'react'
import TextField from '../../common/form/textField'
import PhoneInput from '../../common/form/phoneInput'
import TextAreaField from '../../common/form/textAreaField'
import {useEffect} from 'react'
import {validator} from '../../../utils/validator'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const [data, setData] = useState({
    phoneNum: '',
    name: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const validatorConfig = {
    phoneNum: {
      isRequired: {
        message: 'Номер телефона обязателен для заполнения'
      },
      min: {
        message: 'Телефонный номер должен состоять минимум из 11 символов',
        value: 12
      }
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      },
      specSymbols: {
        message: 'Специальные сиволы недопутимы для ввода'
      }
    },
    message: {
      isRequired: {
        message: 'Сообщение обязательно для заполнения'
      },
      specSymbols: {
        message: 'Специальные сиволы недопутимы для ввода'
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
      fetch('https://63bbc4cacf99234bfa638f44.mockapi.io/formdata',{
        method: 'POST',
        body: JSON.stringify(data)
      }).then(res => res.ok ? toast.success(res.statusText) : toast.error(res.statusText))
  }
  return (
    <form onSubmit={handleSubmit}>
      <PhoneInput
        label="Номер телефона"
        name="phoneNum"
        onChange={handleChange}
        value={data.phoneNum}
        error={errors.phoneNum}
      />
      <TextField
        label="Имя"
        type="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextAreaField
        label="Сообщение"
        name="message"
        value={data.message}
        onChange={handleChange}
        error={errors.message}
      />
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  )
}

export default FeedbackForm