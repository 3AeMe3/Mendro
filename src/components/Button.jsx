import { MoveRight } from 'lucide-react';

export default function Button({ children, className, ref }) {
  return (
    <a href="#" className={`group mx-auto flex gap-1 ${className}`}>
      <span
        ref={ref}
        className='relative cursor-pointer duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-[width] after:content-[""] group-hover:after:w-full'
      >
        {children}
      </span>
      <MoveRight className="pointer-events-none duration-300 ease-in-out group-hover:translate-x-1" />
    </a>
  );
}
