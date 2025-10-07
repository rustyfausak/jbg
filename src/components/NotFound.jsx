import CleanLayout from './layouts/Clean';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <CleanLayout>
      <div className="min-h-screen px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-serif font-bold tracking-tight text-stone-100">
            <h1 className="text-6xl sm:text-8xl">
                404
            </h1>
            <h3 className="text-3xl">Page Not Found</h3>
          </div>
          <p className="mt-6 text-xl italic leading-7 text-stone-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Go back home →
            </Link>
          </div>
        </div>
      </div>
    </CleanLayout>
  );
}
