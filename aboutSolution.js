```javascript
// pages/about.js
import { Suspense } from 'react';

function About() {
  const data = useAsyncFetch('/api/data');

  if (data.isLoading) {
    return <p>Loading...</p>;
  }

  if (data.error) {
    return <p>Error: {data.error.message}</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {JSON.stringify(data.result)}</p>
    </div>
  );
}

function useAsyncFetch(url) {
  const [data, setData] = useState({ isLoading: true, result: null, error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData({ isLoading: false, result, error: null });
      } catch (error) {
        setData({ isLoading: false, result: null, error });
      }
    };

    fetchData();
  }, [url]);

  return data;
}

export default About;
```