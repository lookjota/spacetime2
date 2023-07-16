import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// API RESTFULL

app
  .listen({
    port: 4444,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:4444')
  })
