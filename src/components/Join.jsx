import Banner from './Banner';
import StandardLayout from './layouts/Standard';
import './join.css'

export default function Join() {
  return (
    <StandardLayout>
      <Banner
        title="Join Our Community"
        subtitle="Become a member today and start your journey towards healing and connection."
      />
      <div className="flex justify-center bg-stone-400">
        <div id="iframe-wrapper-1">
          <div className="w-sm md:w-md lg:w-lg" id="iframe-wrapper-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeBDJbC3X6ppaSdS0IEY4xvaQCDyFuKibncESvVGtmXDqV6Xw/viewform?embedded=true"
              height="1800"
              >Loading…</iframe>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
