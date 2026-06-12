import TrainerSideBar from '@/components/sideBars/TrainerSideBar'
import React, { ReactNode } from 'react'

const TrainerPannelLayout = ({children}:{children: ReactNode}) => {
  return (
    <main className='min-h-screen w-full flex'>
      <TrainerSideBar/>

    <section className='flex-1'>
        {children}
    </section>
    </main>
  )
}

export default TrainerPannelLayout