## Next.js 15 Hydration Mismatch Bug
This repository demonstrates a common hydration mismatch bug in Next.js 15 applications. The bug occurs when fetching data within a component using `fetch` and the data isn't resolved before the client-side hydration. This leads to discrepancies between the server-rendered HTML and the client-side rendering.

**Bug Description:** The `About` page fetches data from a simulated slow API. Because the `data` promise is not resolved before the client-side hydration, the server-side rendered JSON.stringify(data) differs from the client-side resolved data causing a mismatch.

**Solution:** Implement proper data fetching mechanisms to avoid this issue, and ensure the data is available during the initial render of the component. This can be done using `async/await` to ensure the data is available before the component is rendered.