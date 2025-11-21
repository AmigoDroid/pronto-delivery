import React from "react";

export default function Cardapio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-yellow-600 text-white p-6 flex flex-col items-center font-sans">
      <header className="text-center mb-10 flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Logo Pronto Delivery" className="w-32 h-32 object-contain drop-shadow-xl" />
        <h1 className="text-5xl font-extrabold drop-shadow-lg text-orange-300">Pronto Delivery</h1>
        <p className="text-lg opacity-90 mt-1">Sabor, qualidade e aquele toque da Amazônia</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* Guaraná da Amazônia */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">Guaraná da Amazônia</h2>
          <p className="text-lg">R$ 8,00</p>
          <p className="text-sm opacity-90 mt-1">Acompanha castanha ou flocos</p>
          <p className="text-sm opacity-90">Adicionais: banana ou morango (+ R$ 2,00)</p>
          <p className="text-sm opacity-90">Coberturas: leite condensado, morango, kiwi, chocolate</p>
        </a>

        {/* Batida de Açaí */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">Batida de Açaí</h2>
          <p className="text-lg">R$ 8,00</p>
          <p className="text-sm opacity-90 mt-1">Adicionais: banana ou morango (+ R$ 2,00)</p>
        </a>

        {/* Hambúrguer Tradicional */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">Hambúrguer Tradicional</h2>
          <p className="text-lg">R$ 12,00</p>
          <p className="text-sm opacity-90 mt-1">Pão, ovo, salada, queijo, presunto, carne</p>
        </a>

        {/* X-Calabresa */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">X-Calabresa</h2>
          <p className="text-lg">R$ 15,00</p>
          <p className="text-sm opacity-90 mt-1">Pão, carne, ovo, presunto, queijo, salada, calabresa</p>
        </a>

        {/* X-Tudo */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">X-Tudo</h2>
          <p className="text-lg">R$ 18,00</p>
          <p className="text-sm opacity-90 mt-1">Pão, carne, bacon, calabresa, presunto, queijo, salada, ovo</p>
        </a>

        {/* Bolo de pote */}
        <a href="https://wa.me/5599984921964" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-2xl shadow-2xl backdrop-blur-xl cursor-pointer transform hover:scale-105 active:scale-95 block">
          <h2 className="text-2xl font-semibold mb-1">Bolo de Pote</h2>
          <p className="text-lg">R$ 7,00</p>
        </a>
      </div>

      <footer className="mt-10 opacity-70 text-sm">
        © 2025 Pronto Delivery — Feito com carinho para você
      </footer>
    </div>
  );
}
