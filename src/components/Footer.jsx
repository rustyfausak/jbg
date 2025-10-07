export default function Footer() {
  return (
    <footer className="p-6 text-sm text-center text-stone-400 flex flex-col gap-6 items-center justify-center">
      <div>
        <nav className="flex justify-center gap-6">
          <a href="/" className="hover:text-stone-300">Home</a>
          <a href="/about" className="hover:text-stone-300">About</a>
          <a href="/contact" className="hover:text-stone-300">Contact</a>
        </nav>
      </div>
      <div>social media icons</div>
      <div className="">&copy; 2025 Jess's Brain Group. All rights reserved.</div>
    </footer>
  );
}
