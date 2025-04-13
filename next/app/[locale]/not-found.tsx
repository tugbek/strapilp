export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p>This page could not be found.</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back home
      </a>
    </div>
  );
}
