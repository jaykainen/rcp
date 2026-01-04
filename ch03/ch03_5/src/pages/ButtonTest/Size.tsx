import {Button} from '../../theme/daisyui'

export default function Basic() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <Button className="btn-lg btn-primary">BTN-LG</Button>
        <Button className="btn-md btn-primary">BTN-MD</Button>
        <Button className="btn-sm btn-primary">BTN-SM</Button>
        <Button className="btn-xs btn-primary">BTN-XS</Button>
      </div>
    </section>
  )
}
