import StandardLayout from './layouts/Standard';
import bgImage from '../assets/bg-friendly-lg.jpg';
import { Link } from 'react-router-dom'
import { ChatBubbleLeftRightIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline'

function StepSection({ icon, title, description, step, href }) {
  return (
    <div className="flex-1 flex flex-col gap-3 border border-stone-600 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div className="bg-stone-700 rounded self-start p-3">{icon}</div>
        {step && <div className="text-stone-600 text-xl">Step {step}</div>}
      </div>
      <div className="text-lg font-semibold">
        { href ?
        <Link to={href} className="text-stone-100 underline">{title}</Link>
        : title }
      </div>
      <p className="text-stone-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <StandardLayout>
      <div className="min-h-dvh bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="backdrop-grayscale-25 backdrop-brightness-50 min-h-dvh p-6 flex flex-col justify-end">
          <main className="font-serif text-shadow-lg mt-22">
            <h1 className="text-5xl md:text-6xl max-w-md mb-5">Together, We Heal Our Brains</h1>
            <div className="text-xl mb-5 max-w-4xl">We are a peer-driven community for brain injury survivors and their loved ones. We provide connection, encouragement, and shared strength to help every member move forward together. </div>
            <div className="flex gap-6">
              <a href="#" className="rounded bg-sky-600 p-4 text-xl text-white hover:bg-sky-500">
                Find Your Peer →
              </a>
              <a href="#" className="rounded bg-transparent p-4 text-xl text-white border border-white hover:bg-white/15">
                See How It Works
              </a>
            </div>
          </main>
        </div>
      </div>
      <div className="px-6 py-22 min-h-100 bg-stone-900">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 items-start">
          <h2 className="text-5xl font-semibold tracking-tight text-pretty">
            Get Connected With Your Peer
          </h2>
          <p className="text-xl font-thin text-stone-300">
            Follow these simple steps to get started:
          </p>
          <div className="flex gap-6 md:flex-row flex-col items-stretch w-full">
            <StepSection
              icon={<DocumentTextIcon aria-hidden="true" className="size-5" />}
              href="/"
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
    </StandardLayout>
  );
}
