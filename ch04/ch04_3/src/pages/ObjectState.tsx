import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

type FormType = {
  name: string
  email: string
}

export default function BasicForm() {
  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() //웹 페이지가 재 렌더링 되지 않게 하기 위함!! 꼭 필요!!!

      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value}))
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form, email: e.target.value}))
  }, [])
  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">UserName</span>
            </label>
            <Input
              type="text"
              id="name"
              placeholder="enter your Name"
              value={form.name}
              onChange={onChangeName}
              className="input-primary"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <Input
              type="email"
              id="email"
              placeholder="enter your email"
              value={form.email}
              onChange={onChangeEmail}
              className="input-primary"
            />
          </div>
          <h2 className="flex justify-center mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/2 btn-sm btn btn-primary"
            />
            <input
              type="button"
              defaultValue="CANCEL"
              className="w-1/2 ml-4 btn btn-sm"
            />
          </h2>
          <div className="mt-4"></div>
        </form>
      </div>
    </section>
  )
}
