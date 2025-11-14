import { useState } from 'react';
import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import './join.css'

export default function Join() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <StandardLayout>
      <Banner
        title="Join Our Community"
        subtitle="Become a member today and start your journey towards healing and connection."
      />
      <div className="flex justify-center bg-stone-400">
        <div id="iframe-wrapper-1">
          <div className="w-sm md:w-md lg:w-lg" id="iframe-wrapper-2">
            {/* Loading Spinner */}
            { isLoading && (
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-start z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-stone-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-stone-700 text-lg">Loading form...</p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe0IKDCec_onaOnkJFCymIv9kZwm8XB1wDVrhp1UvBrgwBWQg/viewform?embedded=true"
              onLoad={handleIframeLoad}
              style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
            ></iframe>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
