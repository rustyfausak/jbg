import StandardLayout from './layouts/Standard';
import ContentBlock from './ContentBlock';
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

      <ContentBlock
        title="Get Connected With Your Peer"
        subtitle="Follow these simple steps to get started:"
        id="how-it-works"
        wrapperClass="bg-stone-900 py-22"
      >
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
      </ContentBlock>

    </StandardLayout>
  );
}
