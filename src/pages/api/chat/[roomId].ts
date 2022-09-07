import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '../socketio'

interface IMsg {
  user: string
  msg: string
}

export default function Chat(
  req: NextApiRequest,
  res: NextApiResponseServerIO,
) {
  if (req.method === 'POST') {
    // get query params
    const roomId = req.query.roomId
    // get message
    const body = req.body as IMsg
    const user = body.user
    const msg = `${body.msg} (userId: ${user})`
    const channel = roomId ? `message${roomId}` : 'message'

    // dispatch to channel "message"
    res?.socket?.server?.io?.emit(channel, { user, msg })

    // return message
    res.status(201).json({ user, msg })
  }
}
