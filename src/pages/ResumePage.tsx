import Resume from "../components/Resume";
import Background from "../components/Background";
import { Link } from "react-router-dom";

const ResumePage = () => {
  return (
    <>
      <Background />
      <div className="min-h-screen relative">
        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <Link
            to="/"
            className="px-4 py-2 bg-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white transition duration-300 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <main className="relative pt-20">
          <Resume />
        </main>
      </div>
    </>
  );
};

export default ResumePage;
