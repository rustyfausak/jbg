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
              src="https://docs.google.com/forms/d/e/1FAIpQLSe0IKDCec_onaOnkJFCymIv9kZwm8XB1wDVrhp1UvBrgwBWQg/viewform?embedded=true"
              >Loading…</iframe>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
