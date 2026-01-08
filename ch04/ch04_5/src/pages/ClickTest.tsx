import {useRef, useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])

  return (
    <section className="mt-4">
      <Title>Click Test</Title>
      <div className="flex items-center justify-center mt-4">
        {/* onClick 클릭과 input 클릭이 똑같이 동작함!! */}
        <Button className="mr-4 btn-primary" onClick={onClick}>
          Click Me
        </Button>
        <input type="file" ref={inputRef} accept="image/*" />
      </div>
    </section>
  )
}
