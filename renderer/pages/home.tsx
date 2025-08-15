import React from 'react'
import DefaultLayout from '../layouts/default'
import { Input } from '@heroui/input'

export default function HomePage() {
  return (
    <DefaultLayout>
      <div className='p-4'>
        <Input label="Label" placeholder="Placeholder" radius='sm' />
      </div>
    </DefaultLayout>
  )
}
