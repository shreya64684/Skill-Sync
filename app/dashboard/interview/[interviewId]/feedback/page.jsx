'use client'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { useParams, useRouter } from 'next/navigation'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown, Home, Trophy, BarChart2, Smile, Frown, Meh, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Feedback = () => {
    const router = useRouter();
    const params = useParams(); 
    const [feedbackList, setFeedbackList] = useState([])
    const [analytics, setAnalytics] = useState(null)

    useEffect(() => {
        if (params?.interviewId) { 
            GetFeedback();
        }
    }, [params?.interviewId])

    const GetFeedback = async () => {
        const result = await db.select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, params.interviewId))
            .orderBy(UserAnswer.id);

        setFeedbackList(result);
        calculateAnalytics(result);
    }

    const calculateAnalytics = (feedbackData) => {
        if (!feedbackData || feedbackData.length === 0) return;

        // Calculate ratings
        const ratings = feedbackData.map(item => parseFloat(item.rating));
        const averageRating = (ratings.reduce((a, b) => a + b, 0)) / ratings.length;
        const maxRating = Math.max(...ratings);
        const minRating = Math.min(...ratings);
        
        // Calculate performance categories
        const performanceCategories = [
            { name: 'Excellent', value: ratings.filter(r => r >= 8).length },
            { name: 'Good', value: ratings.filter(r => r >= 5 && r < 8).length },
            { name: 'Needs Work', value: ratings.filter(r => r < 5).length }
        ];

        // Calculate question-wise performance
        const questionPerformance = feedbackData.map((item, index) => ({
            name: `Q${index + 1}`,
            rating: parseFloat(item.rating),
            feedbackLength: item.feedback?.length || 0
        }));

        // Emotion analysis (if you have this data)
        const emotions = {
            positive: Math.floor(Math.random() * 3) + 1, // Replace with actual data
            neutral: Math.floor(Math.random() * 2) + 1,
            negative: Math.floor(Math.random() * 1) + 1
        };

        setAnalytics({
            averageRating,
            maxRating,
            minRating,
            performanceCategories,
            questionPerformance,
            emotions,
            totalQuestions: feedbackData.length
        });
    }

    const getRatingColor = (rating) => {
        if (rating >= 8) return '#10B981'; // green
        if (rating >= 5) return '#F59E0B'; // yellow
        return '#EF4444'; // red
    }

    const getRatingIcon = (rating) => {
        if (rating >= 8) return <Smile className="h-5 w-5 text-green-500" />;
        if (rating >= 5) return <Meh className="h-5 w-5 text-yellow-500" />;
        return <Frown className="h-5 w-5 text-red-500" />;
    }

    const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

    return (
        <div className='min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center'>
            {feedbackList?.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center p-8 bg-white rounded-2xl shadow-lg'
                >
                    <h2 className='font-bold text-xl text-gray-600'>
                        No Interview Feedback Record Found
                    </h2>
                    <Button 
                        onClick={() => router.replace('/dashboard')} 
                        className='mt-6 bg-green-500 hover:bg-green-600 text-white'
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Go Home
                    </Button>
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='max-w-6xl w-full bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-200'
                >
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center bg-green-100 p-4 rounded-full mb-4'>
                            <Trophy className='h-10 w-10 text-green-600' />
                        </div>
                        <h2 className='text-4xl font-bold text-green-600 mb-2'>
                            Interview Performance Analytics
                        </h2>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
                            Detailed Feedback & Insights
                        </h2>

                        <div className='inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-6 py-2 mb-4'>
                            <TrendingUp className='h-5 w-5 text-yellow-600 mr-2' />
                            <span className='text-lg font-medium text-yellow-700'>
                                Overall Rating: <strong 
                                    className='text-2xl'
                                    style={{ color: getRatingColor(analytics?.averageRating) }}
                                >
                                    {analytics?.averageRating?.toFixed(1)}/10
                                </strong>
                            </span>
                        </div>

                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Your detailed performance breakdown with actionable insights
                        </p>
                    </div>

                    {/* Analytics Dashboard */}
                    {analytics && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
                            {/* Performance Summary Card */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm'
                            >
                                <div className='flex items-center mb-4'>
                                    <BarChart2 className='h-6 w-6 text-green-600 mr-2' />
                                    <h3 className='text-lg font-semibold text-gray-800'>Performance Summary</h3>
                                </div>
                                
                                <div className='grid grid-cols-3 gap-4 mb-4'>
                                    <div className='bg-green-50 p-3 rounded-lg text-center'>
                                        <p className='text-sm text-green-600'>Average</p>
                                        <p className='text-2xl font-bold' style={{ color: getRatingColor(analytics.averageRating) }}>
                                            {analytics.averageRating.toFixed(1)}
                                        </p>
                                    </div>
                                    <div className='bg-blue-50 p-3 rounded-lg text-center'>
                                        <p className='text-sm text-blue-600'>Highest</p>
                                        <p className='text-2xl font-bold text-blue-600'>{analytics.maxRating}</p>
                                    </div>
                                    <div className='bg-purple-50 p-3 rounded-lg text-center'>
                                        <p className='text-sm text-purple-600'>Lowest</p>
                                        <p className='text-2xl font-bold text-purple-600'>{analytics.minRating}</p>
                                    </div>
                                </div>
                                
                                <div className='h-64'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={analytics.questionPerformance}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[0, 10]} />
                                            <Tooltip />
                                            <Bar 
                                                dataKey="rating" 
                                                name="Rating" 
                                                fill="#10B981"
                                                radius={[4, 4, 0, 0]}
                                            >
                                                {analytics.questionPerformance.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={getRatingColor(entry.rating)} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* Performance Distribution Card */}
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className='bg-white p-6 rounded-xl border border-gray-200 shadow-sm'
                            >
                                <div className='flex items-center mb-4'>
                                    <PieChart className='h-6 w-6 text-blue-600 mr-2' />
                                    <h3 className='text-lg font-semibold text-gray-800'>Performance Distribution</h3>
                                </div>
                                
                                <div className='h-64'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={analytics.performanceCategories}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                            >
                                                {analytics.performanceCategories.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                
                                <div className='grid grid-cols-3 gap-2 mt-2'>
                                    {analytics.performanceCategories.map((category, index) => (
                                        <div key={index} className='flex items-center'>
                                            <div 
                                                className='w-3 h-3 rounded-full mr-2' 
                                                style={{ backgroundColor: COLORS[index] }}
                                            ></div>
                                            <span className='text-sm'>
                                                {category.name}: {category.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Detailed Feedback Section */}
                    <div className='mb-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                            <ChevronsUpDown className='h-5 w-5 text-green-600 mr-2' />
                            Detailed Question Feedback
                        </h3>
                        
                        <div className='space-y-4'>
                            {feedbackList.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -2 }}
                                >
                                    <Collapsible>
                                        <CollapsibleTrigger className='w-full p-4 bg-green-50 hover:bg-green-100 transition-all duration-200 rounded-xl text-left flex justify-between items-center font-medium text-gray-800 border border-green-200 shadow-sm'>
                                            <div className='flex items-center'>
                                                {getRatingIcon(item.rating)}
                                                <span className='ml-2'>Q{index+1}. {item.question}</span>
                                            </div>
                                            <ChevronsUpDown className='h-5 w-5 text-green-600' />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className='mt-1'>
                                            <div className='space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-200'>
                                                <div className='bg-red-50/80 border border-red-200 rounded-lg p-3'>
                                                    <p className='text-sm font-medium text-red-800'>Rating: 
                                                        <span 
                                                            className='font-bold ml-2'
                                                            style={{ color: getRatingColor(item.rating) }}
                                                        >
                                                            {item.rating}/10
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className='bg-red-50/80 border border-red-200 rounded-lg p-3'>
                                                    <p className='text-sm font-medium text-red-800'>Your Answer:</p>
                                                    <p className='text-sm text-red-700 mt-1'>{item.userAns}</p>
                                                </div>
                                                <div className='bg-green-50/80 border border-green-200 rounded-lg p-3'>
                                                    <p className='text-sm font-medium text-green-800'>Correct Answer:</p>
                                                    <p className='text-sm text-green-700 mt-1'>{item.correctAns}</p>
                                                </div>
                                                <div className='bg-blue-50/80 border border-blue-200 rounded-lg p-3'>
                                                    <p className='text-sm font-medium text-blue-800'>Feedback:</p>
                                                    <p className='text-sm text-blue-700 mt-1'>{item.feedback}</p>
                                                </div>
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Actionable Insights */}
                    {analytics && (
                        <div className='bg-blue-50/50 border border-blue-200 rounded-xl p-6 mb-8'>
                            <h3 className='text-xl font-semibold text-blue-800 mb-3'>Actionable Insights</h3>
                            <ul className='space-y-2'>
                                {analytics.averageRating >= 8 ? (
                                    <>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>✓</span>
                                            <span>Excellent performance overall! Keep up the good work.</span>
                                        </li>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>✓</span>
                                            <span>Consider mentoring others with your strong interview skills.</span>
                                        </li>
                                    </>
                                ) : analytics.averageRating >= 5 ? (
                                    <>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>•</span>
                                            <span>Solid performance with room for improvement in some areas.</span>
                                        </li>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>•</span>
                                            <span>Focus on questions where you scored below 6 for maximum improvement.</span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>•</span>
                                            <span>Review the fundamental concepts for your role.</span>
                                        </li>
                                        <li className='flex items-start'>
                                            <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>•</span>
                                            <span>Practice answering common interview questions aloud.</span>
                                        </li>
                                    </>
                                )}
                                <li className='flex items-start'>
                                    <span className='bg-blue-100 text-blue-800 rounded-full p-1 mr-2'>→</span>
                                    <span>Review all feedback carefully and consider mock interviews for practice.</span>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className='mt-8 text-center'>
                        <Button 
                            onClick={() => router.replace('/dashboard')} 
                            className='bg-green-500 hover:bg-green-600 text-white shadow-lg px-6 py-3 rounded-xl'
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Return to Dashboard
                        </Button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default Feedback