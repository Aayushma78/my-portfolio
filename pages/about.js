export default function About() {
  return (
    <main className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
        I am a beginner web developer currently learning JavaScript and React.
        I love creating clean and functional websites that are simple and user-friendly.
        When I'm not coding, I enjoy reading, journaling, and designing.
      </p>
      <div className="space-y-2 mt-6">
        <p>Email: <a href="mailto:aayushma@email.com" className="text-blue-600 underline">aayushma@email.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aayushma-bhattarai/" target="_blank" className="text-blue-600 underline">linkedin.com/in/aayushma-bhattarai</a></p>
        <p>GitHub: <a href="https://github.com/Aayushma78" target="_blank" className="text-blue-600 underline">github.com/Aayushma78</a></p>
      </div>
    </main>
  );
}