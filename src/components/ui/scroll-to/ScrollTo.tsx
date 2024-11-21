import React, { MutableRefObject, ReactNode } from 'react';
import './ScrollTo.css';

type ScrollToProps = {
  selector?: string;
  targetRef?: MutableRefObject<HTMLElement | null>;
  children: ReactNode;
  className: 'link' | 'button' | string;
};

function ScrollTo({ selector, targetRef, children, className }: ScrollToProps) {
  const defaultBehaviour = { behavior: 'smooth' } as ScrollIntoViewOptions; // TODO: as component param

  // function
  const scrollTo = (e: React.MouseEvent) => {
    e.preventDefault();

    if (selector) {
      const element = document.querySelector(selector);
      element?.scrollIntoView(defaultBehaviour);
    }
    if (targetRef) {
      targetRef.current?.scrollIntoView(defaultBehaviour);
    }
  };

  return (
    <button className={`scroll-to ${className}`} onClick={scrollTo}>
      {children}
    </button>
  );
}

export default ScrollTo;
