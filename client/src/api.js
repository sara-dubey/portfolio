const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5002';

export async function api(path, { method = 'GET', data } = {}) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : undefined
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Request failed');
  return res.json();
}
