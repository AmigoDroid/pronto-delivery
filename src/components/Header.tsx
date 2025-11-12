"use client";

import { useState } from "react";
import { ShoppingCart, User, MapPin, X, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Função genérica para POST
async function enviarPost(endpoint: string, dados: any) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error("Erro ao enviar requisição");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [qrcodePix, setQrcodePix] = useState<string | null>(null);
  const [pedidoFeito, setPedidoFeito] = useState(false);

  // Login
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Cadastro
  const [cadastro, setCadastro] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    email: "",
    senha: "",
  });

  // Itens no carrinho
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: "X-Burger", preco: 20.0, qtd: 1 },
    { id: 2, nome: "Batata Média", preco: 10.0, qtd: 1 },
  ]);

  const total = carrinho.reduce((acc, i) => acc + i.preco * i.qtd, 0);

  // Função de login
  const enviarLogin = async (e: any) => {
    e.preventDefault();
    const data = await enviarPost("https://suaapi.com/api/login", {
      email,
      senha,
    });
    if (data) alert("Login realizado com sucesso!");
  };

  // Função de cadastro
  const enviarCadastro = async (e: any) => {
    e.preventDefault();
    const data = await enviarPost("https://suaapi.com/api/cadastrar", cadastro);
    if (data) alert("Cadastro realizado com sucesso!");
  };

  // Função para gerar o PIX
  const gerarPix = async () => {
    const pedido = {
      cliente: cadastro.nome || "Cliente Teste",
      total,
      itens: carrinho,
    };
    const resposta = await enviarPost("https://suaapi.com/api/pix", pedido);
    if (resposta?.qrcode) {
      setQrcodePix(resposta.qrcode);
    }
  };

  // Simular pagamento PIX
  const confirmarPagamento = () => {
    setPedidoFeito(true);
    setQrcodePix(null);
    setCarrinho([]);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* LOGO */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <img src="/logo.png" alt="Logo" className="h-6 w-6" />
              </div>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
                Pronto Delivery
              </span>
            </a>
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
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500">
              Início
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500">
              Promoções
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-orange-500">
              Ajuda
            </a>
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {carrinho.length > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500 p-0 text-xs">
                  {carrinho.length}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setLoginOpen(true)}>
              <User className="h-5 w-5" />
            </Button>

            <div className="hidden md:flex gap-2">
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setLoginOpen(true)}
              >
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setLoginOpen(false)}
        >
          <div
            className="w-96 rounded-2xl bg-white shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-orange-500"
              onClick={() => setLoginOpen(false)}
            >
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
                className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90"
              >
                Entrar
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CADASTRO */}
      {registerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setRegisterOpen(false)}
        >
          <div
            className="w-[420px] rounded-2xl bg-white shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-orange-500"
              onClick={() => setRegisterOpen(false)}
            >
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
                  className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                />
              ))}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90"
              >
                Criar conta
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DO CARRINHO */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="w-full max-w-sm h-full bg-white shadow-xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-semibold">Carrinho</h3>
              <button onClick={() => setCartOpen(false)}>
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {carrinho.length === 0 ? (
                <p className="text-center text-gray-500">Carrinho vazio</p>
              ) : (
                carrinho.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.nome}</p>
                      <p className="text-sm text-gray-600">
                        R$ {item.preco.toFixed(2)}
                      </p>
                    </div>
                    <span className="font-semibold">x{item.qtd}</span>
                  </div>
                ))
              )}
            </div>
            <div className="border-t p-4">
              <p className="flex justify-between font-semibold">
                <span>Total:</span> <span>R$ {total.toFixed(2)}</span>
              </p>

              {pedidoFeito ? (
                <div className="mt-3 flex items-center justify-center text-green-600 font-semibold gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Pedido Feito!
                </div>
              ) : qrcodePix ? (
                <div className="mt-3 text-center">
                  <img
                    src={qrcodePix}
                    alt="QR Code PIX"
                    className="mx-auto w-40 h-40"
                  />
                  <Button
                    onClick={confirmarPagamento}
                    className="mt-3 w-full bg-green-500 hover:bg-green-600"
                  >
                    Confirmar Pagamento
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={gerarPix}
                  className="mt-3 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
                >
                  Gerar PIX
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
