import { NextApiRequest, NextApiResponse } from 'next'
import { Information } from '../../components/organisms/index/information'

export default function Informations(
  req: NextApiRequest,
  res: NextApiResponse<Information[]>,
) {
  if (req.method === 'GET') {
    res.json([
      {
        id: 1,
        date: '2022年8月27日',
        tag: 'イベント',
        tagLevel: 'info',
        content: '部月報のアジェンダが公開されました',
      },
      {
        id: 2,
        date: '2022年8月25日',
        tag: '障害',
        tagLevel: 'error',
        content: 'ホームページシステムが一部利用停止中です',
      },
      {
        id: 3,
        date: '2022年8月23日',
        tag: '勉強会',
        tagLevel: 'info',
        content: 'Reactの勉強会が実施されました',
      },
    ])
  } else {
    res.status(500)
  }
}
