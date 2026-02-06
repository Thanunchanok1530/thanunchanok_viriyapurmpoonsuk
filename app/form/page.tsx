function FormPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
            <div className="pt-12 pb-8">
            <h1 className="text-5xl font-bold text-center text-rose-500 drop-shadow-lg">✨ ลงทะเบียนเข้าสู่ระบบ ✨</h1>
            <p className="text-center text-rose-400 text-lg mt-2 font-semibold">💕 กรุณากรอกข้อมูลของท่าน 💕</p>
        </div>
        <div className="flex justify-center items-center pb-20">
            <form className="bg-white rounded-3xl shadow-2xl p-10 w-96 border-4 border-pink-200">
                <div className="mb-6">
                    <h2 className="text-rose-500 font-bold text-lg mb-2">📧 กรุณาระบุ E-Mail ของคุณ</h2>
                    <input type="email" placeholder="✨ example@email.com" className="input input-bordered w-full border-2 border-pink-300 focus:border-rose-500 focus:outline-none bg-pink-50" />
                </div>
                <div className="mb-6">
                    <h2 className="text-rose-500 font-bold text-lg mb-2">🔐 กรุณาระบุรหัสผ่านของคุณ</h2>
                    <input type="password" placeholder="••••••••" className="input input-bordered w-full border-2 border-pink-300 focus:border-rose-500 focus:outline-none bg-pink-50" />
                </div>
                <button className="btn w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0 rounded-full font-bold text-lg shadow-lg">💗 ลงทะเบียน 💗</button>
            </form>
        </div>
        </div>
        
    );
}

export default FormPage;