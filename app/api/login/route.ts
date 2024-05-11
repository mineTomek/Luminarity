import { LoginData } from '@/app/types/LoginData'
import { LoginResponse } from '@/app/types/api/LoginResponse'
import { NextRequest, NextResponse } from 'next/server'
import { env } from 'process'
import { Md5 } from 'ts-md5'

export async function POST(request: NextRequest) {
  const loginData = (await request.json()) as LoginData

  if (!loginData.username || !loginData.password) {
    return new NextResponse('Missing password or username', {
      status: 400,
    })
  }

  let response: LoginResponse | undefined = undefined

  if (checkCredentials(loginData)) {
    response = {
      success: true,
      loginHash: Md5.hashStr(`${loginData.username}_${loginData.password}`),
      message: 'Login successful',
    }
  } else {
    response = {
      success: false,
      message: 'Incorrect credentials',
      data: {
        enteredCredentials: loginData,
        correctCredentials: { username: env.USERNAME, password: env.PASSWORD },
      },
    }
  }

  return NextResponse.json(response, { status: response.success ? 200 : 401 })
}

function checkCredentials(loginData: LoginData) {
  if (loginData.username !== env.USERNAME) return false

  if (loginData.password !== env.PASSWORD) return false

  return true
}
