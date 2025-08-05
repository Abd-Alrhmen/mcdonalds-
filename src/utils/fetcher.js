export const fetcher = async(url) => {
  const res = await fetch(url);

   const contentType = res.headers.get('content-type');
  if (!res.ok || !contentType?.includes('application/json')) {
    throw new Error(' Not Found JSON ');
  }
    return res.json();  
}