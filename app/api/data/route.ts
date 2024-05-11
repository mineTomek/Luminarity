import { DataResponse } from '@/app/types/api/DataResponse'
import { NextRequest, NextResponse } from 'next/server'
import { env } from 'process'
import { Md5 } from 'ts-md5'

export async function GET(request: NextRequest) {
  const hash = request.headers.get('Login-Hash')

  if (!hash) {
    return new NextResponse("Missing 'Login-Hash' header", {
      status: 400,
    })
  }

  const correctHash = Md5.hashStr(`${env.USERNAME}_${env.PASSWORD}`)

  let response: DataResponse | undefined = undefined

  if (hash === correctHash) {
    response = {
      success: true,
      message: 'Successfuly retrived data',
      data: env.DATA,
    }
  } else {
    response = { success: false, message: "Hashes don't match" }
  }

  return NextResponse.json(response, { status: response.success ? 200 : 401 })
}
