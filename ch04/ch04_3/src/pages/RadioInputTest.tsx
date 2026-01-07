import type {ChangeEvent} from 'react'
import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
  const [selectedJob, setSelectedJob] = useState<string>(jobTitles[0])
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSelectedJob(e.target.value)
  }, [])
  const radioInputs = useMemo(
    () =>
      jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            type="radio"
            name="jobs"
            defaultValue={value}
            className="mr-4 radio-primary"
            checked={selectedJob === value}
            onChange={onChange}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitles, selectedJob, onChange]
  )
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>what's job?</Subtitle>
        <Subtitle className="mt-4">Selected Job:{selectedJob}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  )
}
