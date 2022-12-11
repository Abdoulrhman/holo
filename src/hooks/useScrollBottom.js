import { useEffect } from 'react';

const useScrollBottom = (onScrollBottom) => {
  const node = document.getElementById('scroll-view');
  const onScroll = (e) => {
    const isBottom =
      e.target.scrollHeight - e.target.scrollTop - 10 < e.target.clientHeight;

    if (isBottom) {
      onScrollBottom();
    }
  };

  useEffect(() => {
    node && node.addEventListener('scroll', onScroll);

    return () => node && node.removeEventListener('scroll', onScroll);
  }, [onScroll]);
};

export default useScrollBottom;
