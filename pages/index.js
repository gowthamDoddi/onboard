import { useState } from 'react';


export default function Home() {
    const [name, setName] = useState("");

    console.log(name);

  return (
    <div className="bg-secondary h-60 w-60 m-12">
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
        <input type="text" className="w-full" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
    </div>
  )
}
