import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [counterList, setCounterList] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredCounter, setFilteredCounter] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    setCounterList([...counterList, count]);
    setFilteredCounter(counterList);
  }, [count]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const filteredCounterList = counterList.filter((counter) =>
        String(counter).includes(searchKey)
      );
      setFilteredCounter(filteredCounterList);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchKey]);

  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2 dark:text-neutral-300">
          Count: {count}
        </h1>
        <button
          className="rounded-md bg-blue-500 p-2 m-1 text-black dark:text-white font-semibold"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="rounded-md bg-red-500 p-2 m-1 text-black dark:text-white font-semibold"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="rounded-md bg-teal-500 p-2 m-1 text-black dark:text-white font-semibold"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2 dark:text-neutral-300">
          Count list
        </h1>
        {filteredCounter.map((counter, index) => (
          <p
            className="text-lg text-center mb-2 dark:text-neutral-300"
            key={index}
          >{`Counter  ${counter}`}</p>
        ))}
      </div>
      <div className="basis-1/4">
        <h1 className="text-3xl text-center mb-2 dark:text-neutral-300">
          Search:
        </h1>
        <input
          className="shadow-sm appearance-none border rounded w-full py-2 px-3"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
    </div>
  );
}
