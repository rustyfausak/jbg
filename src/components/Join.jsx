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
          <div id="iframe-wrapper-2">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBDJbC3X6ppaSdS0IEY4xvaQCDyFuKibncESvVGtmXDqV6Xw/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
