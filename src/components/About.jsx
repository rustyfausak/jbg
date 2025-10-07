import Layout from './Layout';
import jessPhoto from '../assets/jess-headshot.jpg';

export default function About() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-serif sm:text-6xl">
              Meet Jess
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-400">
              Founder and heart of Jess's Brain Group
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {/* Photo Section */}
            <div className="relative lg:order-last">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100">
                <div className="flex h-full items-center justify-center bg-stone-200">
                  <img
                    alt="Jess"
                    src={jessPhoto}
                    className="h-full w-full object-cover object-left"
                    />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:pr-8">
              <div className="lg:max-w-lg">
                <h3 className="text-2xl font-serif font-semibold leading-7 text-sky-600">
                  Her Journey
                </h3>
                
                <div className="mt-6 space-y-6 text-base leading-7 text-stone-600">
                  <p>
                    {/* TODO: Fill in Jess's background */}
                    [Placeholder: Brief introduction about who Jess is before her brain injury - her life, interests, career, etc.]
                  </p>
                  
                  <p>
                    {/* TODO: Fill in injury details */}
                    [Placeholder: Description of her brain injury - when it occurred, type of injury, initial challenges faced]
                  </p>
                  
                  <p>
                    {/* TODO: Fill in recovery journey */}
                    [Placeholder: Her recovery process - challenges, breakthroughs, support systems that helped]
                  </p>
                  
                  <p>
                    {/* TODO: Fill in why she started JBG */}
                    [Placeholder: What motivated her to start Jess's Brain Group - her vision for peer support and community]
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-serif font-semibold text-stone-900">
                    Why Peer Support Matters
                  </h4>
                  <p className="mt-4 text-base leading-7 text-stone-600">
                    {/* TODO: Fill in her philosophy on peer support */}
                    [Placeholder: Jess's perspective on why peer-to-peer support is crucial for brain injury recovery]
                  </p>
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    className="rounded bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Connect with Jess →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
