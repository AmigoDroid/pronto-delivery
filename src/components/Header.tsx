"use client";

import { useState } from "react";
import { ShoppingCart, User, MapPin, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";

// 🔧 Função auxiliar para enviar POST pra API
async function enviarPost(endpoint: string, dados: any) {
  try {
    const resposta = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) throw new Error(`Erro: ${resposta.status}`);

    const data = await resposta.json();
    console.log("✅ Enviado com sucesso:", data);
    return data;
  } catch (erro) {
    console.error("❌ Falha ao enviar:", erro);
    return null;
  }
}

export function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Estados do formulário de login
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Estados do cadastro
  const [cadastro, setCadastro] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    email: "",
    senha: "",
  });

  // 🔹 Envio do login
  const enviarLogin = async (e: any) => {
    e.preventDefault();
    await enviarPost("https://suaapi.com/api/login", { email, senha });
  };

  // 🔹 Envio do cadastro
  const enviarCadastro = async (e: any) => {
    e.preventDefault();
    await enviarPost("https://suaapi.com/api/cadastrar", cadastro);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* LOGO */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <img
                  src="/logo.png"
                  alt="Pronto Delivery Logo"
                  className="h-6 w-6"
                />
              </div>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                Pronto Delivery
              </span>
            </a>

            {/* ENDEREÇO */}
            <div className="hidden items-center gap-2 md:flex">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-gray-600">Entregar em:</span>
              <button className="text-sm text-gray-900 hover:text-orange-500">
                Rua Exemplo, 123
              </button>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
              Início
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
              Promoções
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
              Ajuda
            </a>
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500 p-0 text-xs">3</Badge>
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <div className="hidden md:flex gap-2">
              <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => setLoginOpen(true)}>
                Entrar
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
                onClick={() => setRegisterOpen(true)}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL DE LOGIN */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
          <div className="w-96 rounded-2xl bg-white shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-4 top-4 text-gray-500 hover:text-orange-500" onClick={() => setLoginOpen(false)}>
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Bem-vindo de volta
            </h2>
            <form onSubmit={enviarLogin} className="space-y-4">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90">
                Entrar
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CADASTRO */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setRegisterOpen(false)}>
          <div className="w-[420px] rounded-2xl bg-white shadow-2xl p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-4 top-4 text-gray-500 hover:text-orange-500" onClick={() => setRegisterOpen(false)}>
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Criar conta
            </h2>
            <form onSubmit={enviarCadastro} className="space-y-3">
              {Object.keys(cadastro).map((campo) => (
                <input
                  key={campo}
                  type={campo === "senha" ? "password" : "text"}
                  placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
                  value={cadastro[campo as keyof typeof cadastro]}
                  onChange={(e) =>
                    setCadastro({ ...cadastro, [campo]: e.target.value })
                  }
                  className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              ))}
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90">
                Criar conta
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
