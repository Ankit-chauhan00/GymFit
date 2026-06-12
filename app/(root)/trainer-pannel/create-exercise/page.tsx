import ExerciseForm from '@/components/Trainer_pannel/TrainerForms/ExerciseForm'
import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const CreateExecise = () => {
  return (
    <section className='min-h-screen flex-1'>
      <div className="w-full mt-15 p-3 md:p-5 lg:p-8 flex-col transition-opacity">

        <header className='flex flex-row w-full items-center gap-3 md:gap-5'>
          <FaDumbbell className='size-[40px] md:size-[50px] text-red-600'/>
          <div className="flex flex-col ">
            <h1 className='font-asap font-bold text-2xl '>Create New Exercise</h1>
            <p className='font-asap font-light text-sm opacity-70'>Add a new Exercise to Your library</p>
          </div>
        </header>

        <main className='flex mt-5 grid lg:grid-cols-2'>
          <ExerciseForm/>
        </main>

      </div>
    </section>
  )
}

export default CreateExecise