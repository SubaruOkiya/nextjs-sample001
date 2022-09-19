import { NextApiRequest, NextApiResponse } from 'next'

type Messages = {
  comment: string
  options: { id: string; text: string }[]
}

const message0: Messages = {
  comment: '何が聞きたい？',
  options: [
    { id: '1', text: '課題をITで解決したい' },
    { id: '2', text: 'ICTでできることを知りたい' },
    { id: '3', text: 'とりま話したい' },
  ],
}

const message1: Messages = {
  comment: 'どのようなお困りごとですか？',
  options: [
    { id: '11', text: 'データを活用したい' },
    { id: '12', text: '手動の作業を自動化したい' },
    { id: '13', text: 'システムを構築してほしい' },
  ],
}

const message2: Messages = {
  comment: 'どのようなことを知りたいですか？',
  options: [
    { id: '21', text: 'データを使って何ができるのか' },
    { id: '22', text: 'どのような作業が自動化可能か' },
    { id: '23', text: 'AIってどこで使えるのか' },
  ],
}

const other: Messages = {
  comment: 'test@test.comにメールで詳細を連絡してください。',
  options: [],
}

export default function Informations(
  req: NextApiRequest,
  res: NextApiResponse<Messages>,
) {
  if (req.method === 'GET') {
    const id = req.query.id as string

    switch (id) {
      case '0':
        res.json(message0)
        return
      case '1':
        res.json(message1)
        return
      case '2':
        res.json(message2)
        return
      default:
        res.json(other)
        return
    }
  } else {
    res.status(500)
  }
}
