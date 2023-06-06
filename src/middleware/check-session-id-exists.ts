import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = req.cookies.sessionId

  if (!sessionId) {
    reply.status(401).send({ mesasge: 'Not authorized' })
  }
}
