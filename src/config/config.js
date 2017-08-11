import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT || 1993,
  development: {},
  test: {},
  production: {}
}
