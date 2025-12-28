export default function AlertToast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-black px-6 py-3 rounded shadow-lg animate-bounce">
      🚨 {message}
    </div>
  );
}
