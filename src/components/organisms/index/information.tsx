import { useGetRequest } from '../../../lib/hooks/common/swr'
import AppearAnimation from '../../atoms/animations/appear'
import Badge, { BadgeLevel } from '../../atoms/daisyui/badge'
import { H1 } from '../../atoms/tags/h'

export type Information = {
  id: number
  date: string
  tag: string
  tagLevel: BadgeLevel
  content: string
}

export default function IndexPageInformation() {
  const { data, isError, isLoading } =
    useGetRequest<Information[]>('/api/informations')

  return (
    <AppearAnimation>
      <div className={`flex flex-col items-center`}>
        <H1>
          <span className="text-blue-500">お知らせ</span>
        </H1>
        {data && (
          <table className="table table-normal mt-8">
            <tbody>
              {data.map((info) => (
                <tr key={info.id}>
                  <td>{info.date}</td>
                  <td>
                    <Badge type={info.tagLevel}>{info.tag}</Badge>
                  </td>
                  <td>{info.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {isError && <p>エラーが発生しました。</p>}
        {isLoading && <p>Now Loading...</p>}
        <div className="mt-8">
          <a className="btn btn-outline btn-info rounded-full">
            お知らせ一覧へ
          </a>
        </div>
      </div>
    </AppearAnimation>
  )
}
