import { ReactNode } from 'react';

import { BaseComponent } from '../../models/components/base';

import { Nav } from '../nav';

interface PageWrapperProps extends BaseComponent {
  children: ReactNode;
  name: string;
}

export const PageWrapper = ({ children, className, name }: PageWrapperProps) => {
  const rootClass = `${name}-page`;

  return (
    <>
      <Nav />
      <main className={`${rootClass} ${rootClass}__main ${className || ''}`}>{children}</main>
    </>
  );
};
