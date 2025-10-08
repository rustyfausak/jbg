export default function Banner({ title, subtitle }) {
  return (
    <div className="bg-stone-900 mt-22">
      <div className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-pretty text-shadow-lg mb-3">
          {title}
        </h2>
        <p className="text-lg italic leading-6 text-stone-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
