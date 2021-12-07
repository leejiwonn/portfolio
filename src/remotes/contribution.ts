import axios from 'axios';

export async function fetchContribution() {
  const { data } = await axios.get('/api/contributions');

  return data;
}
