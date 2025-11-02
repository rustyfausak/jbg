export default function BasicListItem({ name, children }) {
  return (
    <li className="">
      <div className="flex items-center gap-x-6">
        <div>
          <div className="font-semibold text-2xl">{name}</div>
          <div className="text-lg text-stone-300">{children}</div>
        </div>
      </div>
    </li>
  );
}
