import { useState } from 'react';
import { useScrollOffset } from '../hooks';
import { OutlinedButton } from './OutlinedButton';
import { ScercyLogo } from './icons';

export interface IHeaderProps {}

export function Header() {
  const scrollTop = useScrollOffset();

  const [activeSection, setActiveSection] = useState('product');

  function linkClasses(section: string) {
    return activeSection === section
      ? `opacity-100 after:w-1/2 after:border ${
          scrollTop ? 'after:border-indigo-900/30' : 'after:border-white/30'
        } after:block after:relative after:top-2`
      : 'opacity-50';
  }

  return (
    <header
      className={`z-10 flex items-center justify-between gap-2 py-6 px-28 fixed top-0 left-0 right-0 text-sm ${
        scrollTop
          ? 'bg-white/75 drop-shadow-sm text-indigo-900 backdrop-blur-sm'
          : 'text-white'
      }
      
      ${scrollTop > window.innerHeight ? 'bg-white/100' : ''}`}
    >
      <ul className="flex items-center justify-between gap-4 font-light ">
        <li>
          <a
            className={linkClasses('product')}
            onClick={() => setActiveSection('product')}
            href="#product"
          >
            Product
          </a>
        </li>
        <li>
          <a
            className={linkClasses('features')}
            onClick={() => setActiveSection('features')}
            href="#features"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className={linkClasses('pricing')}
            onClick={() => setActiveSection('pricing')}
            href="#pricing"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className={linkClasses('resources')}
            onClick={() => setActiveSection('resources')}
            href="#resources"
          >
            Resources
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-3 font-semibold text-xl ">
        <ScercyLogo className="scale-150" />
        Scercy
      </div>
      <OutlinedButton
        className={scrollTop ? 'border-indigo-900' : 'border-white/20'}
      >
        Log In
      </OutlinedButton>
    </header>
  );
}
