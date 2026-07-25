import { unsafeValidateEnv } from '@repo/env'
import { trimmedStringWithMinLengthOneSchema } from '@repo/shared-validations'
import { z } from 'zod'

// Can be more tightened in future as per need
const envZodSchema = z.object({
  EXPO_PUBLIC_API_URL: trimmedStringWithMinLengthOneSchema
})

const env = unsafeValidateEnv({
  schema: envZodSchema,
  env: process.env
})

export { env }
