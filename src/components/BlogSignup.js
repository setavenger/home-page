import React, { useEffect, useRef } from 'react';

const BlogSignup = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
    script.async = true;
    script.setAttribute('data-label-1', 'home-page');
    script.setAttribute('data-background-color', '#08090c');
    script.setAttribute('data-text-color', '#FFFFFF');
    script.setAttribute('data-button-color', '#f2a900');
    script.setAttribute('data-button-text-color', '#FFFFFF');
    // script.setAttribute('data-title', 'SNBlog');
    // script.setAttribute('data-description', "Let's explore Bitcoin, Economics and Society together");
    script.setAttribute('data-site', 'https://blog.snblago.com/');

    const ref = containerRef.current
    // Append the script to the document body
    if (ref) {
      ref.appendChild(script);
    }
    // document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      if (ref) {
        ref.removeChild(script);
      }
      // document.body.removeChild(script);
    };
  }, []); // Empty array ensures this effect runs only once

  return (
    <div className={"mt-28 w-3/4 md:w-fit"}>
      <div className={"mb-8"}>
        <div className={"md:text-3xl text-xl font-bold text-gray-300"}>SNBlog</div>
        <div className={"md:text-xl text-base text-gray-300"}>Let's explore Bitcoin, Economics and Society together
        </div>
      </div>
      <div ref={containerRef}>
        {/* The script will target this div to render the signup form */}
      </div>
    </div>
  );
};

export default BlogSignup;
