const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300 flex items-center gap-2"
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 flex items-center gap-2"
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
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print
              </button>
            </div>

            <div className="w-full aspect-[1/1.414] bg-gray-50 rounded-lg overflow-hidden">
              <iframe
                src="/cv.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="CV"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
