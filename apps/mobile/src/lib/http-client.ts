import axios from 'axios'

import { env } from '#src/env'

const axiosInstance = axios.create({
  baseURL: `${env.EXPO_PUBLIC_API_URL}/api/v1`,
  // baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { axiosInstance }
