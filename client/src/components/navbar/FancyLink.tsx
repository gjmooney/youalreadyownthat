import { cn } from '../../lib/utils';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { NavLink } from 'react-router';

interface FancyLinkProps {
  href: string;
  title: string;
  className?: string;
}

const FancyLink = React.forwardRef<HTMLAnchorElement, FancyLinkProps>(
  ({ href, title, className = '', ...props }, ref) => {
    // const { href, title, className = "", mobile = false, ...props } = props;
    const pathname = window.location.pathname;
    console.log('pathname', pathname, href);
    return (
      <NavLink
        {...props}
        ref={ref}
        to={href}
        className={cn(
          'group relative p-0',
          buttonVariants({ variant: 'fancyLink', size: 'navLink' }),
          className
        )}
      >
        {title}
        <span
          className={cn(
            'absolute -bottom-0.5 left-0 h-[1px] bg-main-foreground duration-300 ease-in-out group-hover:w-full group-focus:w-0',
            pathname === href ? 'h-[1.5px] w-full' : 'w-0'
          )}
        />
      </NavLink>
    );
  }
);

FancyLink.displayName = 'FancyLink';

export default FancyLink;
