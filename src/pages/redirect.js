import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Commands() {
  const router = useRouter();

  useEffect(() => {
    // Get the URL query parameter
    const urlParam = router.query.url;

    if (urlParam) {
      // Parse the URL to get the domain
      const url = new URL(urlParam);
      const domain = url.hostname;

      // Redirect to the full URL after 3 seconds
      const redirectTimer = setTimeout(() => {
        router.push(urlParam);
      }, 5000);

      // Clear the timer if the component is unmounted
      return () => clearTimeout(redirectTimer);
    }
  }, [router.query.url]);

  return (
    <div>
      Redirecting to {router.query.url && new URL(router.query.url).hostname}...
    </div>
  );
}
