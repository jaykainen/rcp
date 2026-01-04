import {Input} from '../../theme/daisyui'

export default function Color() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Color</h2>
      <div className="flex flex-col p-4 mt-4">
        <div>
          <label className="label">input-primary:</label>
          <Input className="input input-primary" />
        </div>
        <div>
          <label className="label">input-secondary:</label>
          <Input className="input input-secondary" />
        </div>
        <div>
          <label className="label">input-accent:</label>
          <Input className="input input-accent" />
        </div>
        <div>
          <label className="label">input-info:</label>
          <Input className="input input-info" />
        </div>
        <div>
          <label className="label">input-success:</label>
          <Input className="input input-success" />
        </div>
        <div>
          <label className="label">input-warning:</label>
          <Input className="input input-warning" />
        </div>
        <div>
          <label className="label">input-error:</label>
          <Input className="input input-error" />
        </div>
        <div>
          <label className="label">input-ghost:</label>
          <Input className="input input-ghost" />
        </div>
      </div>
    </section>
  )
}
