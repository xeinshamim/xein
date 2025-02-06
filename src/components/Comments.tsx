import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface CommentsProps {
  className?: string;
}

const Comments = ({ className }: CommentsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Reset Disqus thread when the route changes
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = window.location.href;
          this.page.identifier = location.pathname;
        },
      });
    }
  }, [location]);

  return (
    <div className={className}>
      <div id="disqus_thread"></div>
    </div>
  );
};

export default Comments;