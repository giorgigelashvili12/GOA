export default function App() {
    return (
            <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
                <div className="w-120 h-150 bg-white rounded-2xl flex flex-col justify-center items-center gap-2">
                    <h1 className="font-bold text-2xl">Sign in with</h1>
                    <div className="flex justify-center items-center gap-2">
                        <div className="p-3 border-1 border-gray-500 rounded">FB</div>
                        <div className="p-3 border-1 border-gray-500 rounded">AP</div>
                        <div className="p-3 border-1 border-gray-500 rounded">GO</div>
                    </div>

                    <input placeholder="Username..."/>
                </div>
             </div>
    )
}