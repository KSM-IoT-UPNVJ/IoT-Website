const API_BASE_URL = (process.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export async function sendContact(formData) {
  const endpoint = API_BASE_URL
    ? `${API_BASE_URL}/api/contact`
    : '/api/contact';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText);
  }
  return res.json();
}
