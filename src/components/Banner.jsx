export default function Banner({ title, subtitle }) {
  return (
    <div className="bg-stone-900 mt-22">
      <div className="max-w-5xl mx-auto py-6 px-6 text-center">
        <h2 className="text-3xl sm:text-3xl font-semibold tracking-tight text-pretty text-shadow-lg mb-1">
          {title}
        </h2>
        <p className="text-lg italic leading-6 text-stone-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
