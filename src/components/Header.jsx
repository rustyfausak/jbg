import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoWhite from './../assets/logo-white.svg';
import iconWhite from './../assets/icon-white.svg';

const navigation = [
  { name: 'Meet Jess', href: '/about' },
  { name: 'Join Us', href: '/' },
  { name: 'Resources', href: '/' },
  { name: 'Donate', href: '/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">

      {/* Main Nav */}
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-10">

        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Jess's Brain Group</span>
            <img
              alt="Jess's Brain Group Logo"
              src={logoWhite}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Menu Button (less than lg) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-100"
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Navigation Links (greater than lg) */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-md font-semibold text-stone-100 hover:text-stone-300">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Dialog (less than lg) - Closed by default */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-700 p-6 sm:max-w-sm">

          {/* Top Area */}
          <div className="flex items-center justify-between mb-6">

            {/* Logo */}
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Jess's Brain Group</span>
              <img
                alt="Jess's Brain Group Logo"
                src={iconWhite}
                className="h-8 w-auto"
              />
            </Link>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer -m-2.5 rounded-md p-2.5 text-stone-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Bottom Area: Navigation Links */}
          <div className="border-t-2 border-stone-400 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-100 hover:bg-stone-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
