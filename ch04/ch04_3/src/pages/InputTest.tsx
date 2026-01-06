import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(notUsed => e.target.value) //notUsed => 는 없어도 똑같음. 왜냐면 브라우저에서 타이핑하는 순간 이미 물리 dom이 변경되므로
  }, [])

  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(notUsed => e.target.checked)
  }, [])
  return (
    <section className="mt-4">
      <Title>Input Test</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input
          type="text"
          name="aaa"
          value={value}
          onChange={onChangeValue}
          className="input-primary input-sm"
        />
        <Input
          type="checkbox"
          name="bbb"
          checked={checked}
          onChange={onChangeChecked}
          className="ml-4 checkbox checkbox-primary input-sm"
        />
      </div>
    </section>
  )
}
