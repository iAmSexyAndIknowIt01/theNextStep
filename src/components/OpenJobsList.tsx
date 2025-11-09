"use client";
import { useState, useEffect } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

interface Props {
  jobs: Job[];
  isLoggedIn: boolean;
}

export default function OpenJobsList({ jobs, isLoggedIn }: Props) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Хэрвээ хэрэглэгч нэвтэрсэн бол сануулах modal-ийг хаана
  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginPrompt(false);
    }
  }, [isLoggedIn]);

  const handleJobClick = (job: Job) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true); // Нэвтрээгүй үед л гаргана
      setSelectedJob(null);
    } else {
      setSelectedJob(job); // Нэвтэрсэн бол дэлгэрэнгүй мэдээлэл
    }
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => handleJobClick(job)}
          className="bg-white/80 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      ))}

      {/* Job Detail Modal */}
      {selectedJob && (
        <>
          <div
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          />
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-2xl w-[500px] max-w-[90%] p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{selectedJob.title}</h3>
            <p className="text-gray-700 font-medium mb-1">🏢 {selectedJob.company}</p>
            <p className="text-gray-500 mb-4">📍 {selectedJob.location}</p>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">{selectedJob.description}</p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedJob(null)}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-lg transition-all shadow-md"
              >
                Хаах
              </button>
            </div>
          </div>
        </>
      )}

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <>
          <div
            onClick={() => setShowLoginPrompt(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          />
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-lg border border-white/40 shadow-2xl rounded-2xl w-[400px] max-w-[90%] text-center p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">⚠️ Та нэвтрээгүй байна</h3>
            <p className="text-gray-700 mb-6">Ажлын байрны дэлгэрэнгүй үзэхийн тулд нэвтэрнэ үү.</p>
            <button
              onClick={() => setShowLoginPrompt(false)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md"
            >
              Ойлголоо
            </button>
          </div>
        </>
      )}
    </div>
  );
}
