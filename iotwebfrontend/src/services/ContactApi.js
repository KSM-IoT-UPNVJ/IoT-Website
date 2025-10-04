export async function sendContact(formData) {
  const res = await fetch('http://localhost:8000/api/contact', {
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
