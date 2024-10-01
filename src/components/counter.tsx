import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [counterList, setCounterList] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setCounterList([...counterList, count]);
  }, [count]);

  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2">Count: {count}</h1>
        <button
          className="rounded-md bg-blue-500 p-2 m-1"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="rounded-md bg-red-500 p-2 m-1"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="rounded-md bg-teal-500 p-2 m-1"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2">Count list</h1>
        {counterList.map((counter, index) => (
          <p key={index}>{`Counter  ${counter}`}</p>
        ))}
      </div>
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2">Search:</h1>
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
    </div>
  );
};
