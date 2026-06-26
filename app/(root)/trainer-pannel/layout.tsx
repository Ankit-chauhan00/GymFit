import { auth } from '@/auth'
import TrainerSideBar from '@/components/Trainer_pannel/TrainerSideBar'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const TrainerPannelLayout = async ({children}:{children: ReactNode}) => {
  const session = await auth();
  if(!session?.user.id){
    redirect("/")
  }
  if( session.user.role !== "TRAINER" ){
    redirect("/");
  }
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