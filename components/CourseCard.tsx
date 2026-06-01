"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    Database,
    FileCode,
    Code
} from "lucide-react";


type CourseCardProps = {
  title: string;
  progress: number;
  icon: string;
};
const icons = {
    Rocket,
    Database,
    FileCode,
    Code,
};

export default function CourseCard({
  title,
  progress,
  icon,
}: CourseCardProps) {

  const Icon =
    icons[icon as keyof typeof icons] || Code;

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
  className="bg-slate-800 p-4 rounded-lg"
>
      <Icon size={28} className="mb-2 text-orange-400" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">Progress: {progress}%</p>
      <p className="text-sm text-gray-500">Icon: {icon}</p>

      <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
        <motion.div
          className="bg-green-500 h-2 rounded-full"
          initial = {{ width: 0}}
          animate ={{ width: `${progress}%` }}
          transition = {{ duration: 1}}
        />
      </div>
    </motion.div>
  );
}