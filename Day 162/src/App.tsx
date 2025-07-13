import {useState} from 'react';

export default function App() {
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [average, setAverage] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const num1 = parseFloat(subject1);
    const num2 = parseFloat(subject2);
    const num3 = parseFloat(subject3);

    const avg = (num1 + num2 + num3) / 3;
    setAverage(Number(avg.toFixed(2)));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Calculate Your Average</h1>
        <p className="text-lg text-gray-700">Simple calculator app for students</p>
      </div>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label htmlFor="subject1" className="block text-sm font-medium text-gray-700">Subject 1</label>
            <input
              type="number"
              id="subject1"
              value={subject1}
              onChange={(e) => setSubject1(e.target.value)}
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject2" className="block text-sm font-medium text-gray-700">Subject 2</label>
            <input
              type="number"
              id="subject2"
              value={subject2}
              onChange={(e) => setSubject2(e.target.value)}
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject3" className="block text-sm font-medium text-gray-700">Subject 3</label>
            <input
              type="number"
              id="subject3"
              value={subject3}
              onChange={(e) => setSubject3(e.target.value)}
              className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate Average
          </button>
        </form>

        {average !== null && (
          <div className="mt-6 text-center text-xl font-semibold">
            Your Average: {average}
          </div>
        )}
      </div>
    </>
  )
}
