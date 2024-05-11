"use client"

import Button from "./components/Button";
import CenterBox from "./components/CenterBox";

export default function NotFound() {
    return (
    <main>
      <div className="w-full bg-white">
        <div className="to z-50 grid h-dvh place-items-center content-center bg-gradient-to-b from-primary-100/90 to-transparent">
          <h1 className="text-shadow bg-transparent text-[15vw] font-extrabold shadow-primary-500/70 md:shadow-primary-400/80">
            404
          </h1>
          <CenterBox>
            <p className="mx-auto">Page not found</p>
          <Button text='Home Page' onClick={() => window.location.href = '/'}/>
        </CenterBox>
        </div>
      </div>
    </main>
  )
}