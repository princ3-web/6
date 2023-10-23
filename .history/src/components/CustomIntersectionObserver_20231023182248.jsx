import React, { useEffect, useState, useRef } from 'react';

const CustomIntersectionObserver = ({ children, options }) => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element enters the viewport
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            // When the element exits the viewport
            setInView(false);
          }
        });
      },
      options
    );

    // Start observing the target element
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return <div ref={targetRef}>{children(inView)}</div>;
};

export default CustomIntersectionObserver;
