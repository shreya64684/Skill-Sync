import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewItemCard = ({interview}) => {

    const router= useRouter()

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedback=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
    }

  return (
    // <div className='border shadow-sm rounded-lg p-3'>
    //   <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
    //   <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
    //   <h2 className='text-xs text-gray-400'>Created At: {interview?.createdAt}</h2>

    //   <div className='flex justify-between mt-2 gap-8'>
    //     <Button size="sm" variant="outline" className='w-full'
    //     onClick={onFeedback}>Feedback</Button>
    //     <Button size="sm" className='w-full'
    //     onClick={onStart}>Start again</Button>
    //   </div>
    // </div>

    <>
    
    <div className='border border-white/20 shadow-lg rounded-lg p-5 bg-white/10 backdrop-blur-lg transition-all hover:shadow-2xl hover:scale-[1.02]'>
            <h2 className='font-bold text-white text-lg'>{interview?.jobPosition}</h2>
            <h2 className='text-sm text-gray-300'>{interview?.jobExperience} Years of Experience</h2>
            <h2 className='text-xs text-gray-400'>Created At: {interview?.createdAt}</h2>

            <div className='flex justify-between mt-4 gap-5'>
                <Button size="sm" variant="outline"
                    className='w-full border border-gray-400 text-black font-semibold hover:bg-white/10 transition-all'
                    onClick={onFeedback}>
                    Feedback
                </Button>
                <Button size="sm"
                    className='w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white hover:scale-105 transition-all'
                    onClick={onStart}>
                    Start Again
                </Button>
            </div>
        </div>

    </>
  )
}

export default InterviewItemCard
