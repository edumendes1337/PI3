import { useState } from "react";

export default function AccessibilityWidget() {
    const [fontSize, setFontSize] = useState("text-base");
    const [contrast, setContrast] = useState(false);
    const [dyslexicFont, setDyslexicFont] = useState(false);
 
    return (
        <>
            <div className="accessibility-widget fixed bottom-4 right-4 flex flex-col gap-2 bg-green-700 p-3 rounded-lg shadow-lg z-50 text-white">
                {/* Controle de Fonte */}
                <div className="flex gap-1">
                    <button
                        onClick={() => setFontSize("text-sm")}
                        className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-green-600"
                        title="Fonte pequena"
                    >
                        A-
                    </button>
                    <button
                        onClick={() => setFontSize("text-base")}
                        className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-green-600"
                        title="Fonte padrão"
                    >
                        A
                    </button>
                    <button
                        onClick={() => setFontSize("text-lg")}
                        className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-green-600"
                        title="Fonte grande"
                    >
                        A+
                    </button>
                </div>

                {/* Controle de Contraste */}
                <button
                    onClick={() => setContrast(!contrast)}
                    className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-green-600"
                    title="Alternar contraste alto"
                >
                    {contrast ? "Contraste Normal" : "Alto Contraste"}
                </button>

                {/* Controle de Fonte Dyslexic */}
                <button
                    onClick={() => setDyslexicFont(!dyslexicFont)}
                    className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-green-600 font-bold"
                    title="OpenDyslexic para melhor leitura"
                    style={{ fontFamily: "'Open-Dyslexic', sans-serif" }}
                >
                    {dyslexicFont ? "Fonte Padrão" : "OpenDyslexic"}
                </button>
            </div>

            {/* Aplica estilos globais */}
            <style>{`
                * {
                    font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"};
                    ${contrast ? "color: #ffffff !important; text-shadow: 1px 1px 0 #000000 !important;" : ""}
                }
                
                body {
                    font-size: ${fontSize === "text-sm" ? "14px" : fontSize === "text-lg" ? "20px" : "16px"};
                    background-color: ${contrast ? "#1a1a1a !important" : "inherit"};
                    color: ${contrast ? "#ffffff !important" : "inherit"};
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"};
                }
                
                html {
                    font-family: ${dyslexicFont ? "'Open-Dyslexic', sans-serif" : "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"};
                    ${contrast ? "background-color: #1a1a1a !important;" : ""}
                }

                ${contrast ? `
                    h1, h2, h3, h4, h5, h6 {
                        color: #ffffff !important;
                        font-weight: bold !important;
                    }
                    
                    p {
                        color: #ffffff !important;
                    }
                    
                    a {
                        color: #ffff00 !important;
                        text-decoration: underline !important;
                    }
                    
                    label {
                        color: #ffffff !important;
                    }
                    
                    button {
                        background-color: #ffffff !important;
                        color: #000000 !important;
                        border: 2px solid #ffffff !important;
                        font-weight: bold !important;
                    }
                    
                    button:hover {
                        background-color: #ffff00 !important;
                        color: #000000 !important;
                    }
                    
                    input, textarea, select {
                        background-color: #ffffff !important;
                        color: #000000 !important;
                        border: 2px solid #ffffff !important;
                    }
                    
                    input::placeholder, textarea::placeholder {
                        color: #666666 !important;
                    }
                    
                    .bg-white, .bg-gray-50 {
                        background-color: #2a2a2a !important;
                        color: #ffffff !important;
                    }
                    
                    .bg-green-50 {
                        background-color: #1a1a1a !important;
                        color: #ffffff !important;
                    }
                    
                    .bg-gradient-to-b, .bg-gradient-to-r {
                        background: #1a1a1a !important;
                    }
                    
                    .text-green-800, .text-gray-700, .text-gray-600 {
                        color: #ffffff !important;
                    }
                    
                    .border-green-600, .border-gray-300 {
                        border-color: #ffffff !important;
                    }
                    
                    .text-gray-500, .text-gray-600 {
                        color: #cccccc !important;
                    }
                    
                    .bg-blue-50 {
                        background-color: #1a1a1a !important;
                        border-color: #ffff00 !important;
                    }
                    
                    .bg-blue-700 {
                        background-color: #2a2a2a !important;
                    }
                    
                    table {
                        background-color: #2a2a2a !important;
                        color: #ffffff !important;
                    }
                    
                    thead {
                        background-color: #1a1a1a !important;
                        color: #ffffff !important;
                    }
                    
                    tbody tr {
                        border-color: #444444 !important;
                    }
                    
                    tbody tr:hover {
                        background-color: #333333 !important;
                    }
                    
                    .divide-y {
                        border-color: #444444 !important;
                    }
                    
                    footer {
                        background-color: #1a1a1a !important;
                        color: #ffffff !important;
                        border-color: #ffff00 !important;
                    }
                    
                    footer p {
                        color: #ffffff !important;
                    }
                ` : ""}
            `}</style>
        </>
    );
}
