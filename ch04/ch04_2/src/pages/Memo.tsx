import {useMemo} from 'react'
import {Title, Avatar} from '../components'
import * as D from '../data'

export default function Memo() {
  //prittier-ignore
  const headTexts = useMemo<String[]>(
    () => ['No.', 'Name', 'JOB TITLE', 'EMAIL ADDRESS'],
    []
  )
  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])
  const head = useMemo(
    () =>
      //String(text) -> key값으로 사용하기 위해. text가 무슨 타입인지 모르겠다 함..
      headTexts.map(text => <th key={String(text)}>{text}</th>),
    [headTexts]
  )

  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="1.5rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  )

  return (
    <div className="mt-4">
      <Title>Memo</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra table-compact">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
