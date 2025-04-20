"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAiModel'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { db } from '@/utils/db'
import { useRouter } from 'next/navigation'


  

const AddNewInterview = () => {

    const router = useRouter();

    const [openDialog, setOpenDialog]=useState(false)
    const [jobPosition, setJobPosition]=useState()
    const [jobDesc, setJobDesc]=useState()
    const [jobExperience, setJobExperience]=useState()
    const [loading, setLoading]=useState(false)
    const [jsonResponse, setJsonResponse]=useState([]);
    const {user} = useUser();

    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience)

        const InputPrompt="job position:" + jobPosition + " , job description: " + jobExperience + " , years of Experience: " + jobExperience + " , depends on this information please give me "+ process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +" beginner to intermediate level interview question with ansered in JSON format, give questions and answers as field in JSON"

        const result = await chatSession.sendMessage(InputPrompt);
        // Ensure we await result.response.text()
        const rawText = await result.response.text();
        // Clean up the JSON response
        const MockJsonResp = rawText
        .replace(/```json\s*/g, '')  // Remove opening markdown
        .replace(/```/g, '')         // Remove closing markdown
        .trim();                     // Remove any extra spaces/newlines
        console.log("MockJsonResp : ",MockJsonResp);
        
        try {
            const parsedJson = JSON.parse(MockJsonResp);
            console.log("parsedJson: ", parsedJson);
            setJsonResponse(parsedJson); // Ensure parsed JSON is stored, not a string
        } catch (error) {
            console.error("Invalid JSON response:", MockJsonResp);
            console.error("Parsing Error:", error);
        }

        // const MockJsonResp=(result.response.text()).replace('```json','').replace('```','');
        // console.log(JSON.parse(MockJsonResp));
        // setJsonResponse(MockJsonResp)


    if(MockJsonResp){
        const resp = await db.insert(MockInterview)
        .values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPosition,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD-MM-yyyy')
        }).returning({mockId:MockInterview.mockId})

        console.log("inserted id: ", resp)
        if(resp)
        {
            setOpenDialog(false)
            router.push('/dashboard/interview/'+resp[0]?.mockId)
        }
    }
    else{
        console.log("ERROR")
    }
        setLoading(false)
    }
    

  return (
    // <div>

    //   <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
    //   onClick={() => setOpenDialog(true)}
    //   >
    //     <h2 className=' text-lg text-center'>+ Add New</h2>
    //   </div>
    //   <Dialog open={openDialog}>
        
    //     <DialogContent className="max-w-2xl">
    //         <DialogHeader>
    //         <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
    //         <DialogDescription>
    //         <form action="" onSubmit={onSubmit}>
    //             <div>
    //                 <h2>Add details about your job position/role, Job description and years of Experience</h2>

    //                 <div className='mt-7 my-3'>
    //                     <label htmlFor="">Job Role / Position</label>
    //                     <Input placeholder="Ex. Full Stack Developer" required 
    //                     onChange={(event)=>setJobPosition(event.target.value)}/>
    //                 </div>
    //                 <div className=' my-3'>
    //                     <label htmlFor="">Job Description / Tech Stack (in short)</label>
    //                     <Textarea placeholder="Ex. React, Angular, NodeJs, MySql, etc " required
    //                     onChange={(event)=>setJobDesc(event.target.value)}/>
    //                 </div>
    //                 <div className=' my-3'>
    //                     <label htmlFor="">Years of Experience </label>
    //                     <Input placeholder="Ex. 5" type="number" max="50" required 
    //                     onChange={(event)=>setJobExperience(event.target.value)}/>
    //                 </div>
    //             </div>
    //             <div className='flex gap-5 justify-end'>
    //                 <button type='button' variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</button>
    //                 <button className='bg-purple-800 text-white rounded-lg text-md p-3 ' type='submit' disabled={loading}>
    //                     {loading?
    //                     <>
    //                     <LoaderCircle className='animate-spin text-gray-500 w-full'/>Generating from AI
    //                     </>:'Start Interview'}
    //                     </button>
    //             </div>
    //         </form>
    //         </DialogDescription>
    //         </DialogHeader>
    //     </DialogContent>
    //     </Dialog>

    // </div>

    <>
    <div>
            <div
                className='p-10 border rounded-lg bg-gradient-to-r from-purple-600 via-purple-800 to-indigo-900 
                text-white hover:scale-105 hover:shadow-lg cursor-pointer transition-all'
                onClick={() => setOpenDialog(true)}
            >
                <h2 className='text-lg text-center font-semibold'>+ Add New</h2>
            </div>

            <Dialog open={openDialog}>
                <DialogContent className="max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-white font-semibold">Tell us more about your job interview</DialogTitle>
                        <DialogDescription className="text-gray-300">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h2 className="text-white text-lg">Add details about your job position, description, and experience</h2>

                                    <div className='mt-7 my-3'>
                                        <label className="text-gray-300">Job Role / Position</label>
                                        <Input className="bg-white/20 text-white placeholder-gray-300" placeholder="Ex. Full Stack Developer" required 
                                            onChange={(event) => setJobPosition(event.target.value)} />
                                    </div>
                                    <div className='my-3'>
                                        <label className="text-gray-300">Job Description / Tech Stack</label>
                                        <Textarea className="bg-white/20 text-white placeholder-gray-300" placeholder="Ex. React, Angular, NodeJs, MySql, etc" required
                                            onChange={(event) => setJobDesc(event.target.value)} />
                                    </div>
                                    <div className='my-3'>
                                        <label className="text-gray-300">Years of Experience</label>
                                        <Input className="bg-white/20 text-white placeholder-gray-300" placeholder="Ex. 5" type="number" max="50" required 
                                            onChange={(event) => setJobExperience(event.target.value)} />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end mt-5'>
                                    <button type='button' className="text-gray-300 border border-gray-500 px-4 py-2 rounded-lg transition hover:bg-white/10"
                                        onClick={() => setOpenDialog(false)}>Cancel</button>
                                    <button className='bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-lg text-md px-5 py-3 transition hover:scale-105' type='submit' disabled={loading}>
                                        {loading ?
                                            <>
                                                <LoaderCircle className='animate-spin text-gray-300 w-full' />Generating from AI
                                            </>
                                            : 'Start Interview'}
                                    </button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

    </>
  )
}

export default AddNewInterview
