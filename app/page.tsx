'use client'

import Image from 'next/image'
import { useState } from 'react'
import QRCode from 'qrcode'

export default function Home() {
  const [userName, setUserName] = useState<string>('');
  const [src, setSrc] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const generate = () => {
    if (userName.trim() === '') {
      setErrorMessage('Field is empty. Please enter a user name.');
      setSrc('');
    } else {
      QRCode.toDataURL(`https://github.com/${userName}`).then(setSrc);
      setErrorMessage('');
    }
  }

  return (
    <main className="flex flex-col justify-center mt-5 text-center">
      <div className=''>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white text-center'
          type='text'
          placeholder='Enter User Name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <button
          className='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          type='button'
          onClick={generate}
        >
          Generate Qr Code
        </button>
      </div>

      <div className='text-red-500 mt-2'>{errorMessage}</div>

      <div className='text-center'>
        {src ? (
          <Image
            className='blok mx-auto'
            src={src}
            alt='qr Code'
            width={200}
            height={200}
          />) : null}
      </div>
    </main>
  )
}
