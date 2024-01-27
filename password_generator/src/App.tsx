import {FC, useState} from "react";
import {IconButton} from "./components/iconButton.tsx";
import ArrowPathIcon from "./shared/icons/ArrowPathIcon.tsx";

function App() {
    const [password, setPassword] = useState('')
    const generatePass = () => {};

  return (
    <div className={'flex items-center justify-center text-white min-h-screen'}>
        <div className={'bg-gray-700 p-4 rounded-xl min-w-96'}>
            <div className={'bg-gray-600 py-3 px-4 rounded-xl border border-gray-500 relative'}>
                <IconButton onclick={generatePass}>
                    <ArrowPathIcon className={'w-6'} />
                </IconButton>

                <span className={'h-6'}>{password}</span>
            </div>

        </div>
    </div>
  )
}

export default App
