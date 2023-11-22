import { ReactNode, useEffect, useRef } from 'react';

interface ScrollProps {
    children?: ReactNode
    setScrollPosition: (pos: number) => void;

}
function ScrollControl ({ children, setScrollPosition} : ScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(scrollRef.current.scrollTop)
      console.log('Scroll Height:', scrollRef.current.scrollTop);
    };
    scrollRef.current.addEventListener('scroll', handleScroll);

    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: `100vh`, 
        width: `100vw`, 
        overflow: "scroll"
      }}
      className="content-container"
    >
      {children}
    </div>
  );
};

export default ScrollControl;
