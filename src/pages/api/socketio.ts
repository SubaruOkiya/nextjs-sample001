import { Server as NetServer, Socket } from 'net'
import { Server as SocketIOServer } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'
import { Server as HttpServer } from 'http'

export const config = {
  api: {
    bodyParser: false,
  },
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer
    }
  }
}

export default async function SocketIo(
  req: NextApiRequest,
  res: NextApiResponseServerIO,
) {
  const roomId = req.query.roomId
  if (!res.socket.server.io) {
    console.log('New Socket.io server...')
    const httpServer: HttpServer = res.socket.server as any
    const io = new SocketIOServer(httpServer, {
      path: roomId ? `/api/socketio/${roomId}` : '/api/socketio',
    })
    res.socket.server.io = io
  }
  res.end()
}
