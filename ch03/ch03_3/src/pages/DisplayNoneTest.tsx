import {Title} from '../components'

export default function DispalyNoneTest() {
  return (
    <section className="mt-4">
      <Title>DispalyNoneTest</Title>
      <div className="mt-4">
        <p className="visible">visibility:visible text</p>
        <p className="invisible">visibility:hidden text</p>
        <p className="hidden">display:none text</p>
      </div>
    </section>
  )
}
