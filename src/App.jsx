import {useState} from "react";
import {requestToGroqAI} from "./utils/groq";
import {Light as SyntaxHighlight} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import './App.css';

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };

  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto">
      <h1 className="text-4xl text-white font-bold">DPZ AI</h1>
      <form action="" className="flex flex-col gap-4 py-4 w-full">
        <input type="text" className="py-2 px-4 text-md rounded-md" placeholder="Ketik Pertanyaan" id="content"/>
        <button className="bg-yellow-500 py-2 px-4 font-bold text-white rounded-md" onClick={handleSubmit} type="button">KIRIM</button>
        <div className="max-w-xl w-full mx-auto">
          {data ? ( 
            <SyntaxHighlight language="swift" style={darcula} wrapLongLines={true}>{data}</SyntaxHighlight>
          ) : null}
        </div>
      </form>
      <div className="w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            About
          </p>
        </div>

        <p className="text-xl mt-5 text-white">
          Selamat datang di website DPZ AI!. DPZ AI adalah Artificial Intelligence(AI) yang mampu
          menyediakan informasi, menyelesaikan masalah, memberikan saran, serta mengambil keputusan.
          Teknologi terkini yang digunakan oleh DPZ AI seperti React, Vite, Tailwind CSS, Groq, dan React Syntax Highlighter          
          siap melayani keluhan masalah komplex user. DPZ AI membutuhkan waktu untuk berkembang menjadi lebih
          baik dan mohon maaf jika jawaban DPZ AI tidak sesuai dengan kemauan anda karna DPZ AI bukanlah
          AI yang sangat canggih seperti ChatGPT atau Github CoPilot.
        </p>

        <br />

        <p className="text-xl text-white">
        Jika anda mengalami masalah, jangan ragu untuk hubungi kami. <a href="https://instagram.com/diffa_jl" target="_blank"><span className="text-yellow-500 font-bold">@DiffaJl</span></a>
        </p>
      </div>

    </div>
    </main>
  )
}

export default App;