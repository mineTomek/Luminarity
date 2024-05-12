'use client'

import { FormEvent, useRef, useState } from 'react'
import { LoginData } from '../types/LoginData'
import { LoginResponse } from '../types/api/LoginResponse'
import CenterBox, { CenterBoxColor } from './CenterBox'

export default function LoginForm() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const [incorrectCredentials, setIncorrectCredentials] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const loginData: LoginData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      if (response.ok) {
        const loginResponse: LoginResponse = await response.json()
        window.sessionStorage.setItem('login-hash', loginResponse.loginHash!)
        window.location.href = '/profile'
      } else {
        if (response.status === 401) {
          setIncorrectCredentials(true)
        }
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div className="flex h-full w-full flex-col bg-white dark:bg-zinc-950">
      <CenterBox>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            required
            placeholder="Username"
            ref={usernameRef}
          />
          <input
            type="password"
            required
            placeholder="Password"
            ref={passwordRef}
          />
          <input type="submit" value="Login" />
        </form>
      </CenterBox>
      <CenterBox
        opacity={incorrectCredentials ? 1 : 0}
        color={CenterBoxColor.ERROR}
      >
        <span className="mx-3 text-sm">Username or password is incorrect</span>
      </CenterBox>
    </div>
  )
}
