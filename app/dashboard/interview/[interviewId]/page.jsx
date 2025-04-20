// 'use client'
// import { MockInterview } from '@/utils/schema';
// import React, { useEffect, useState } from 'react'
// import { db } from '@/utils/db';
// import { eq } from 'drizzle-orm';
// import Webcam from 'react-webcam';
// import { Lightbulb, WebcamIcon } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useParams } from 'next/navigation';
// import Link from 'next/link';


// function Interview() {
//     const params = useParams(); // ✅ Fix params issue
//     const [interviewData, setInterviewData] = useState()
//     const [webCamEnabled, setWebCamEnabled] = useState(false)
//     useEffect(()=>{
//         console.log(params);
//         if (params?.interviewId) {
//             GetInterviewDetails();
//         }
//     },[params])

//     // used to get interview details by mmock interview id
//     const GetInterviewDetails=async()=>{
//         // const result = await db.select().from(MockInterview)
//         // .where(eq(MockInterview.mockId, params.interviewId))

//         // console.log(result);
//         // setInterviewData(result[0]);

//         if (!params?.interviewId) return;

//         const result = await db.select().from(MockInterview)
//             .where(eq(MockInterview.mockId, params.interviewId));

//         console.log(result);
//         setInterviewData(result[0] || {}); // ✅ Avoid undefined state
//     }
//   return (
//     <div className='my-10 '>
//       <h2 className='font-bold text-2xl'>Let's Get Started</h2>

//       <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

//             {/* left section -- shows information and questions */}
//             <div className='flex flex-col my-5 gap-5 '>
//                 <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border'>
//                     <h2 className='text-lg'><strong>Job Role / Position: </strong>{interviewData?.jobPosition || "Loading..."}</h2>
//                     <h2 className='text-lg'><strong>Job Descriprion / Tech Stack: </strong>{interviewData?.jobDesc || "Loading..."}</h2>
//                     <h2 className='text-lg'><strong>Years of Experience: </strong>{interviewData?.jobExperience || "Loading..."}</h2>
//                 </div>
//                 <div className='p-5 rounded-lg border border-yellow-300 bg-yellow-100'>
//                     <h2 className='flex gap-2 items-center text-yellow-400'><Lightbulb/><span><strong>Information</strong></span></h2>
//                     <h2 className='mt-3 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis aspernatur odit quisquam ut ipsum consectetur esse corrupti vero natus ullam porro voluptates, magnam dolorem minus corporis tenetur? Suscipit, officia corrupti! Quasi magnam eum, culpa eveniet consequuntur laborum voluptatum obcaecati, id quas, repellendus necessitatibus? Dolorum.</h2>
//                 </div>
//             </div>

//             {/* right section -- shows web cam */}
//             <div>
//             {webCamEnabled ? (
//                         <Webcam
//                             onUserMedia={()=>setWebCamEnabled(true)}
//                             onUserMediaError={()=>setWebCamEnabled(false)}
//                             mirrored={true}
//                             key={webCamEnabled} // Forces re-render when webcam is enabled
//                             audio={true} // Enables microphone
//                             videoConstraints={{
//                                 width: 1280,
//                                 height: 720,
//                                 facingMode: "user", // Front camera
//                             }}
//                             // style={{
//                             //     height: 300,
//                             //     width: 300,
//                             // }}
//                         />
//                     ) : (
//                         <>
//                             <WebcamIcon className='bg-secondary rounded-lg border my-7 p-20 h-72 w-full' />
//                             <Button variant="ghost" className='w-full' onClick={() => setWebCamEnabled(true)}>
//                                 Enable Web Cam and Microphone
//                             </Button>
//                         </>
//                     )}
//             </div>
//       </div>

//         <div className='flex justify-end items-end'>
//             <Link href={'/dashboard/interview/' + params.interviewId + '/start'}>
//                 <Button>Start Interview</Button>
//             </Link>
//         </div>
      
//     </div>
//   )
// }

// export default Interview



'use client'
import { MockInterview } from '@/utils/schema';
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import Link from 'next/link';


function Interview() {
    const params = useParams(); 
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        if (params?.interviewId) {
            GetInterviewDetails();
        }
    }, [params]);

    const GetInterviewDetails = async () => {
        if (!params?.interviewId) return;
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId));
        setInterviewData(result[0] || {});
    };

    return (
        <div className='my-10 px-6 md:px-16 lg:px-32'>
            <h2 className='font-extrabold text-3xl text-primary mb-6'>🎤 Ready for Your Mock Interview?</h2>
           
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Left Section */}
                <div className='flex flex-col gap-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200'>
                    <h2 className='text-xl font-semibold'><strong>Job Role / Position:</strong> {interviewData?.jobPosition || "Loading..."}</h2>
                    <h2 className='text-lg text-gray-700'><strong>Tech Stack:</strong> {interviewData?.jobDesc || "Loading..."}</h2>
                    <h2 className='text-lg text-gray-700'><strong>Experience Required:</strong> {interviewData?.jobExperience || "Loading..."}</h2>
                </div>
                {/* Right Section - Webcam */}
                <div className='flex flex-col items-center justify-center bg-gray-100 p-6 shadow-lg rounded-xl border border-gray-300'>
                    {webCamEnabled ? (
                        <Webcam
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            mirrored
                            key={webCamEnabled}
                            audio={true}
                            videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
                            className='rounded-lg border shadow-lg w-full h-64 object-cover'
                        />
                    ) : (
                        <>
                            <WebcamIcon className='bg-gray-200 text-gray-500 rounded-lg p-10 h-40 w-40' />
                            <Button variant='outline' className='mt-4' onClick={() => setWebCamEnabled(true)}>
                                🎥 Enable Camera & Microphone
                            </Button>
                        </>
                    )}
                </div>
            </div>
            {/* Information Section */}
            <div className='p-6 mt-6 bg-yellow-100 border border-yellow-300 rounded-xl shadow-lg'>
                <h2 className='flex items-center text-yellow-600 font-semibold text-lg'><Lightbulb className='mr-2'/> Interview Tip</h2>
                <p className='mt-3 text-yellow-700'>Stay confident and ensure a well-lit background. Speak clearly and maintain eye contact with the camera. Best of luck!</p>
            </div>
            {/* Start Button */}
            <div className='flex justify-end mt-6'>
                <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                    <Button className='bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-primary-dark'>🚀 Start Interview</Button>
                </Link>
            </div>
        </div>
    );
}

export default Interview;
