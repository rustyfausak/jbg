import StandardLayout from './layouts/Standard';
import bgImage from '../assets/bg-friendly-lg.jpg';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline';
import imgJessSuccess from '../assets/jess-success.jpg';

function StepSection({ icon, title, description, step, href }) {
  const content = (
    <>
      <div className="flex justify-between items-center">
        <div className="bg-stone-700 rounded self-start p-3">{icon}</div>
        {step && <div className="text-stone-500 text-xl">Step {step}</div>}
      </div>
      <div className="text-lg font-semibold">
        {href ? <span className="underline">{title}</span> : title}
      </div>
      <p className="text-stone-300">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link to={href} className="bg-stone-800 flex-1 flex flex-col gap-3 border border-stone-700 rounded-lg p-6 hover:bg-stone-700/50 transition-colors">
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-stone-800 flex-1 flex flex-col gap-3 border border-stone-700 rounded-lg p-6">
      {content}
    </div>
  );
}

function SuccessStory({ quote, author, img, rank = "Peer Supporter" }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="hidden md:block">
        <div className="w-50 aspect-square overflow-hidden rounded-lg shadow-lg">
          <img
            alt={author}
            src={img}
            className="h-full w-full object-cover object-center"
            />
        </div>
      </div>
      <div className="flex flex-col gap-6 self-center">
        <div className="text-stone-300 font-semibold text-xl text-pretty">"{quote}"</div>
        <div className="hidden md:block">
          <div className="font-semibold">{author}</div>
          <div className="block text-stone-400 text-sm italic">{rank}</div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="md:hidden aspect-square w-18 overflow-hidden rounded-lg shadow-lg">
          <img
            alt={author}
            src={img}
            className="h-full w-full object-cover object-center"
            />
        </div>
        <div className="md:hidden">
          <div className="font-semibold">{author}</div>
          <div className="block text-stone-400 text-sm italic">{rank}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <StandardLayout>
      <div className="min-h-dvh bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="backdrop-grayscale-25 backdrop-brightness-50 min-h-dvh p-6 flex flex-col justify-end">
          <main className="text-pretty text-shadow-md mt-22">
            <h1 className="text-5xl font-semibold md:text-6xl max-w-md mb-5">Together, We Heal Our Brains</h1>
            <div className="text-xl mb-5 max-w-4xl">We are a peer-driven community for brain injury survivors and their loved ones. We provide connection, encouragement, and shared strength to help every member move forward together. </div>
            <div className="flex flex-col xs:flex-row gap-6">
              <Link to="/join" className="rounded bg-sky-600 p-4 text-xl text-white hover:bg-sky-500">
                Find Your Peer →
              </Link>
              <a href="#how-it-works" className="rounded bg-transparent p-4 text-xl text-white border border-white hover:bg-white/15">
                See How It Works
              </a>
            </div>
          </main>
        </div>
      </div>

      <a name="how-it-works" id="how-it-works"></a>
      <div className="px-6 py-22 min-h-100 bg-stone-900">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 items-start">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-pretty">
            Get Connected With Your Peer
          </h2>
          <p className="-mt-3 text-xl font-thin text-stone-300">
            Follow these simple steps to get started:
          </p>
          <div className="flex gap-6 md:flex-row flex-col items-stretch w-full">
            <StepSection
              icon={<DocumentTextIcon aria-hidden="true" className="size-5" />}
              href="/join"
              step="1"
              title="Sign Up"
              description="Fill out our quick registration form to let us know a bit about you."
            />
            <StepSection
              icon={<UsersIcon aria-hidden="true" className="size-5" />}
              step="2"
              title="We Connect You"
              description="We'll match you with a peer who understands your journey."
            />
            <StepSection
              icon={<ChatBubbleLeftRightIcon aria-hidden="true" className="size-5" />}
              step="3"
              title="Contact Your Peer"
              description="Start chatting and building a supportive relationship."
            />
          </div>
        </div>
      </div>

      <a name="success-stories" id="success-stories"></a>
      <div className="px-6 py-22 min-h-100">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 items-start">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-pretty">
            Success Stories
          </h2>
          <p className="-mt-3 text-xl font-thin text-stone-300">
            Hear from our members about how peer support has transformed their recovery journey.
          </p>
          <SuccessStory
            quote="My peers and support groups have been a lifeline. Knowing other people who truly understand what I'm going through has made all the difference."
            author="Jess F."
            img={imgJessSuccess}
            rank="Founder, Brain Injury Survivor"
          />
          <SuccessStory
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, placerat erat at, efficitur quam."
            author="Jess F."
            img={imgJessSuccess}
          />
          <SuccessStory
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, placerat erat at, efficitur quam."
            author="Jess F."
            img={imgJessSuccess}
          />
        </div>
      </div>
    </StandardLayout>
  );
}
