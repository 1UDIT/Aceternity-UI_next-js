"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

export function ListContainer() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (

        <LampContainer>
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500   bg-clip-text text-center  font-medium tracking-tight text-transparent"
            >
                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`/courses/${course.slug}`}>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))}
                    </div> 
            </motion.div>
        </LampContainer>


    );
}
