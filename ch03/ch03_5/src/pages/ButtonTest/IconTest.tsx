import {Icon} from '../../theme/daisyui'

export default function IconTest() {
  const onClick = () => {
    alert('Icon clicked!')
  }
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Icon Test</h2>
      <div className="flex items-center justify-around mt-4">
        <Icon
          name="settings"
          className="btn-primary btn-lg"
          iconClassName="text-5xl"
          onClick={onClick}
        />
        <Icon
          name="done"
          className="btn-secondary btn-md"
          iconClassName="text-3xl"
          onClick={onClick}
        />
        <Icon
          name="menu"
          className="btn-accent btn-sm"
          iconClassName="text-xl"
          onClick={onClick}
        />
        <Icon
          name="file_upload"
          className="btn-success btn-xs"
          iconClassName="text-xl"
          onClick={onClick}
        />
      </div>
    </section>
  )
}
