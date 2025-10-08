import { Link } from 'react-router-dom';
import { navigation } from '../constants/navigation';
import { socialMedia } from '../constants/socialMedia';

export default function Footer() {
  return (
    <footer className="pt-20 p-6 text-sm text-center text-stone-400 flex flex-col gap-6 items-center justify-center">
      <div>
        <nav className="flex justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="hover:text-stone-300 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-center space-x-6">
        {socialMedia.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-stone-400 hover:text-stone-300 transition-colors duration-200"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="">&copy; 2025 Jess's Brain Group. All rights reserved.</div>
    </footer>
  );
}
