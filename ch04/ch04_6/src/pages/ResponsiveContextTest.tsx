import {Title, Subtitle} from '../components'
import {useResponsive} from '../contexts'

export default function ResponsiveContextTest() {
  const {breakpoint, id} = useResponsive()
  return (
    <section className="mt-4">
      <Title>Responsive Context Test</Title>
      <div className="mt-4">
        <Subtitle>
          breakpoint: {breakpoint}, id: {id}
        </Subtitle>
      </div>
    </section>
  )
}
