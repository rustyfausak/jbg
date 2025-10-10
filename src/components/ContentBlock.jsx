export default function Contentblock({ title, subtitle, children, wrapperClass = "", id = "" }) {
  return (
    <>
      <a name={id} id={id}></a>
      <div className={`px-6 py-22 min-h-100 ${wrapperClass}`}>
        <div className="max-w-5xl mx-auto flex flex-col gap-6 items-start">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-pretty">
            { title }
          </h2>
          <p className="-mt-3 text-xl font-thin text-stone-300">
            { subtitle }
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
