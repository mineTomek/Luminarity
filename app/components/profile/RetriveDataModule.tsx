'use client'

import { useRef, useState } from 'react'
import Button from '../Button'
import { DataResponse } from '@/app/types/api/DataResponse'
import CenterBox, { CenterBoxColor } from '../CenterBox'

export default function RetriveDataModule() {
  const [hasHash, setHasHash] = useState(true)
  const outputRef = useRef<HTMLTextAreaElement>(null)
  const [data, setData] = useState<string | undefined>()
  const [isShowingCopySuccess, setIsShowingCopySuccess] = useState(false)

  const handleDataRetrival = async () => {
    try {
      const response = await fetch('/api/data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Login-Hash': window.sessionStorage.getItem('login-hash') ?? '',
        },
      })

      if (response.ok) {
        setHasHash(true)

        const loginResponse: DataResponse = await response.json()

        setData(loginResponse.data)

        outputRef.current!.value = loginResponse.data ?? 'No data'
      } else {
        if (response.status === 401 || response.status === 400) {
          setHasHash(false)

          console.error('Incorrect hash')
        } else {
          console.error('Retrival failed')
        }
      }
    } catch (error) {
      console.error('Error', error)
    }
  }

  const handleCopyData = async () => {
    if (data) {
      try {
        await navigator.clipboard.writeText(data)
        console.log('Text copied to clipboard successfully', data)

        setIsShowingCopySuccess(true)
        setTimeout(() => setIsShowingCopySuccess(false), 2000)
      } catch (err) {
        console.error('Error copying text to clipboard', err)
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <CenterBox>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Data Retrival</h2>
          <textarea
            className="min-h-12 w-full rounded-lg p-3 shadow-md no-scrollbar focus:outline-none dark:bg-zinc-800 dark:shadow-inner dark:shadow-zinc-700"
            readOnly
            placeholder="No data loaded"
            ref={outputRef}
          />
          <div className="flex gap-3">
            <Button onClick={handleDataRetrival}>Retrive Data</Button>
            <Button onClick={handleCopyData}>Copy Data</Button>
          </div>
        </div>
      </CenterBox>
      <CenterBox opacity={isShowingCopySuccess ? 1 : 0}>
        <span className="mx-auto max-w-[30vw] text-sm">
          Successfully written the data to the clipboard.
        </span>
      </CenterBox>
      <CenterBox opacity={hasHash ? 0 : 1} color={CenterBoxColor.ERROR}>
        <span className="mx-auto max-w-[30vw] text-sm">
          You need to be logged in to retrive data
        </span>
      </CenterBox>
    </div>
  )
}
