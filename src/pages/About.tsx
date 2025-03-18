import { useState } from "react";
import { motion } from "framer-motion";

const videos: Record<"complete" | "front" | "cabin" | "trunk" | "exterior" | "commercial", string> = {
  complete: ".public/v6.mp4",
  front: "./public/v4.mp4",
  cabin: "./public/v1.mp4",
  trunk: "./public/v5.mp4",
  exterior: "./public/v2.mp4",
  commercial: "./public/v3.mp4",
};

const VehicleSolutions = () => {
  const [selectedVideo, setSelectedVideo] = useState<keyof typeof videos>("complete");

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Evolving the drive with{" "}
            <span className="font-semibold">360-degree</span> comprehensive solutions
          </h2>

          <div className="mt-8 border-l-2 border-gray-600 pl-4">
            <motion.div
              className={`cursor-pointer transition-opacity ${
                selectedVideo === "complete" ? "opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => setSelectedVideo("complete")}
            >
              <h3 className="text-xl font-semibold">Passenger vehicles</h3>
              <p className="text-gray-400">Revving up innovation from interior to exterior.</p>
            </motion.div>

            <motion.div
              className={`cursor-pointer transition-opacity mt-6 ${
                selectedVideo === "commercial" ? "opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => setSelectedVideo("commercial")}
            >
              <h3 className="text-xl font-semibold text-gray-500">Commercial vehicles</h3>
              <p className="text-gray-600">Advancing engineering for heavy-duty vehicles.</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="md:w-1/2 flex flex-col items-center w-80">
          <motion.video
            key={selectedVideo}
            src={videos[selectedVideo]}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-lg rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Video Selector Buttons */}
          {selectedVideo != 'commercial' ? 
          <div className="flex justify-center gap-6 mt-6">
            {Object.keys(videos).map((key) => {
    const videoKey = key as keyof typeof videos; // Explicitly cast key to correct type
    return (
      <button
        key={videoKey}
        onClick={() => setSelectedVideo(videoKey)}
        className={`px-4 py-2 rounded-md text-sm ${
          selectedVideo === videoKey ? "text-white" : "text-[#808080]"
        } transition-all duration-300`}
      >
        {videoKey.charAt(0).toUpperCase() + videoKey.slice(1)}
      </button>
    );
  })}
          </div> : null}
          </div>
        </div>
    </section>
  );
};

export default VehicleSolutions;
