import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';

import { authRoutes } from './routes/auth';
import { poolRoutes } from './routes/pool';
import { userRoutes } from './routes/user';
import { gameRoutes } from './routes/game';
import { guessRoutes } from './routes/guess';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(jwt, {
    secret: 'process.env.APP_SECRET',
  })

  fastify.register(poolRoutes);
  fastify.register(userRoutes);
  fastify.register(gameRoutes);
  fastify.register(guessRoutes);
  fastify.register(authRoutes);

  await fastify.listen({ port: 3333, host: '0.0.0.0'})
}

bootstrap()