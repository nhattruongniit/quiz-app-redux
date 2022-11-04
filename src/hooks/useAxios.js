import React from 'react'
import axios from 'axios';

axios.defaults.baseURL = "https://opentdb.com";

function useAxios({ url }) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then(res => setResponse(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    };
    fetchData();
  }, [url])

  return { response, error, loading}
}

export default useAxios