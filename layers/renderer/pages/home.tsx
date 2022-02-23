import { useState } from 'react';

export default function Home() {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<div className=" flex h-screen w-screen flex-col bg-black p-4 text-center text-white ">
				<h1 className="py-5 text-4xl font-bold">
					Macgyver: A Next.js + Electron Project You'll Love ✨
				</h1>
				<div>
					<div className="py-5 text-2xl font-semibold">Using...</div>
					<ul>
						<li>Next.js</li>
						<li>Electron</li>
						<li>Nextron</li>
						<li>Typescript</li>
						<li>Tailwind</li>
						<button
							className="mt-5 box-border rounded-md bg-white px-5 py-4 text-black"
							onClick={() => {
								setCount(count + 1);
							}}
						>
							Count: {count}
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
}
