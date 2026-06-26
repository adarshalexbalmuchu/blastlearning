"use client";
import React from "react";
import { motion } from "framer-motion";

export const testimonials = [
  {
    text: "I used to forget everything after coaching. Now I actually remember what I studied a month ago. My maths score jumped from 65 to 89 in just one term.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ananya Krishnan",
    role: "Class 10 student, Bangalore",
  },
  {
    text: "The AI study planner knows exactly which topics I'm weak in and schedules revision before I forget. Physics retention now consistently above 80%.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Mehta",
    role: "Class 12 student, Mumbai",
  },
  {
    text: "English was my weakest subject. After two months on Blast Learning I got my first A in a grammar test. The structured approach really works.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Kavitha Suresh",
    role: "Class 9 student, Hyderabad",
  },
  {
    text: "The parent dashboard settled every argument at home. I can see exactly what my son studied and his retention scores. No more guessing.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Deepak Sharma",
    role: "Parent of Class 11 student, Delhi",
  },
  {
    text: "We were spending ₹15,000 a month on coaching. Blast Learning at ₹1,299 has done more for her retention than all that coaching combined.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Sunita Reddy",
    role: "Parent of Class 10 student, Pune",
  },
  {
    text: "Spaced repetition changed how I study completely. I no longer cram the night before. I actually know the material weeks later.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Arjun Nair",
    role: "Class 11 student, Chennai",
  },
  {
    text: "My daughter went from failing mock tests to scoring 88% in her boards. The AI-personalized plan made all the difference.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    name: "Priya Iyer",
    role: "Parent of Class 10 student, Kochi",
  },
  {
    text: "SAT prep felt impossible until I found Blast Learning. The adaptive tests and retention tracking took me from 1100 to 1390 in three months.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Karan Malhotra",
    role: "Class 12 student, Gurgaon",
  },
  {
    text: "Every rupee of our coaching fee was being forgotten in 48 hours. Now my son retains 90% of what he studies. Worth every rupee.",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Meena Patel",
    role: "Parent of Class 9 student, Ahmedabad",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-[#ECECF1] shadow-lg shadow-[#0FA8DC]/5 max-w-xs w-full bg-white"
                key={i}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#5A5A6E] text-sm leading-relaxed font-[Fraunces,serif] italic">
                  {text}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-[#1C1C28] text-sm leading-5 font-[Inter,sans-serif]">
                      {name}
                    </div>
                    <div className="text-xs text-[#8E8EA0] leading-5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
