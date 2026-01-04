import Basic from '../InputTest/Basic'
import Color from '../InputTest/Color'
import Border from '../InputTest/Border'
import Size from '../InputTest/Size'

export default function InputTest() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">InputTest</h2>
      <div className="mt-4">
        <Size />
        <Border />
        <Color />
        <Basic />
      </div>
    </section>
  )
}
