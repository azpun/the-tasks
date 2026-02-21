import pino from 'pino'

export const logger = pino({
  base: {
    pid: false
  },
  timestamp: () => `, "time": "${new Date().toISOString()}"`,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard'
    }
  }
})
