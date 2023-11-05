import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import VideoSection from "./components/Video_Section/videoSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="w-3/4 px-10">
          <VideoSection section="01" lecture="01"/>
        </div>
        <div className="w-1/4">
          <Sidebar name="Intro section" />
        </div>
      </div>
    </main>
  );
}
