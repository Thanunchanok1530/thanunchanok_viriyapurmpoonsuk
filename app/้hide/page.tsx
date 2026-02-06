import { useState } from "react";

function HidePage() {
const [hide, setHide] = useState()
const [inputValue, setInputValue] = useState("")
    return (
        <div>
        
        <div className="text-center mt-6 p-4">
            <h1 className="text-center text-3xl ">การแสดงและซ่อนข้อความ</h1>
        </div>
        <div className="mt-5">
            <h1 className="text-center text-5xl">{hide ? "ซ่อนข้อความ" : "แสดงข้อความ"}</h1>
        </div>
        <div className="flex justify-center mt-5">
            <button className="p-8 text-2xl bg-amber-700 rounded-bl-lg cursor-pointer" 
            onClick={() => setHide(!hide)}
            > 
            ซ่อนข้อความ
            </button>
        </div>
        <div className="flex justify-center mt-8">
            <input 
                type={hide ? "password" : "text"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="พิมพ์ข้อความ..."
                className="px-4 py-2 text-lg border-2 border-gray-400 rounded-lg"
            />
        </div>
    </div>
        
    );
}

export default HidePage;