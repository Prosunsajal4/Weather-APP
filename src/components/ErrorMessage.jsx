export default function ErrorMessage({ message }) {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 rounded-2xl bg-red-500/20 backdrop-blur-md border border-red-400/30 text-center">
      <p className="text-white text-lg">{message}</p>
    </div>
  );
}
