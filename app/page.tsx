import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import ActivityTile from "../components/ActivityTile";
import CourseCard from "../components/CourseCard";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <HeroTile />
          </div>

          <ActivityTile />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon={course.icon_name}
            />
          ))}

        </div>
      </main>
    </div>
  );
}