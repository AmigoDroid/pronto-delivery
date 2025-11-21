import React from "react";

/**
 * CardapioMobile.jsx
 * Componente React para versão mobile do Cardápio Pronto Delivery.
 *
 * Requisitos:
 * - Tailwind CSS (opcional, se não tiver Tailwind eu envio CSS puro)
 * - Colocar logo em: /public/logo.png (ou ajustar logoSrc)
 *
 * Clique em qualquer item abre o WhatsApp com mensagem pronta.
 */

const phone = "5599984921964"; // número com DDI +55

const items = [
  {
    id: 1,
    title: "Guaraná da Amazônia",
    price: "8,00",
    desc: "Acompanha castanha ou flocos. Adicional: banana ou morango (+ R$ 2,00). Coberturas: leite condensado, morango, kiwi, chocolate.",
  },
  {
    id: 2,
    title: "Batida de Açaí",
    price: "8,00",
    desc: "Adicionais: banana ou morango (+ R$ 2,00).",
  },
  {
    id: 3,
    title: "Hambúrguer Tradicional",
    price: "12,00",
    desc: "Pão, ovo, salada, queijo, presunto, carne.",
  },
  {
    id: 4,
    title: "X-Calabresa",
    price: "15,00",
    desc: "Pão, carne, ovo, presunto, queijo, salada, calabresa.",
  },
  {
    id: 5,
    title: "X-Tudo",
    price: "18,00",
    desc: "Pão, carne, bacon, calabresa, presunto, queijo, salada, ovo.",
  },
  {
    id: 6,
    title: "Bolo de Pote",
    price: "7,00",
    desc: "Delicioso bolo de pote, ideal para sobremesa.",
  },
];

function openWhatsApp(item) {
  const text = encodeURIComponent(
    `Olá, quero pedir: *${item.title}* (R$ ${item.price}).\nDetalhes: ${item.desc}\nQuantidade: `
  );
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

export default function CardapioMobile() {
  const logoSrc = "/logo.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0D23] via-[#2b1730] to-[#1a0d23] text-white p-4 flex flex-col items-center font-sans">
      <div className="w-full max-w-xl">
        {/* Top / Logo */}
        <div className="flex items-center gap-3 py-6">
          <img
            src={logoSrc}
            alt="Pronto Delivery Logo"
            className="w-16 h-16 object-contain rounded-md shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#FF6A1A" }}>
              Pronto Delivery
            </h1>
            <p className="text-xs opacity-80">Sabor e rapidez na palma da sua mão</p>
          </div>
        </div>

        {/* Card container */}
        <div className="space-y-4 pb-8">
          {items.map((it) => (
            <div
              key={it.id}
              role="button"
              onClick={() => openWhatsApp(it)}
              className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/6 shadow-md transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{it.title}</h2>
                <p className="mt-1 text-sm opacity-80 line-clamp-3">{it.desc}</p>
              </div>

              <div className="flex flex-col items-end ml-3">
                <span className="text-xl font-bold" style={{ color: "#FF6A1A" }}>
                  R$ {it.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(it);
                  }}
                  className="mt-2 px-3 py-1 rounded-md text-sm bg-[#C32E1A] text-white"
                >
                  Pedir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / info */}
        <footer className="text-center text-xs opacity-80 py-6">
          <p>Atendimento via WhatsApp: <strong className="text-[#FF6A1A]">(99) 98492-1964</strong></p>
          <p className="mt-1">© {new Date().getFullYear()} Pronto Delivery</p>
        </footer>
      </div>
    </div>
  );
}
