import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks! Your message has been logged.");
  };

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
      {status && <p className="mt-2 text-green-600">{status}</p>}
    </main>
  );
}