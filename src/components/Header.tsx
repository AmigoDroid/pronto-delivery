import { ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
              <span className="text-xl text-white"></span>
              <img
                src="/logo.png"
                alt="Pronto Delivery Logo"
                className="h-6 w-6"
              />
            </div>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm text-gray-600 transition-colors hover:text-orange-500">
            Início
          </a>
          <a href="#" className="text-sm text-gray-600 transition-colors hover:text-orange-500">
            Restaurantes
          </a>
          <a href="#" className="text-sm text-gray-600 transition-colors hover:text-orange-500">
            Promoções
          </a>
          <a href="#" className="text-sm text-gray-600 transition-colors hover:text-orange-500">
            Ajuda
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-500 p-0 text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden bg-orange-500 hover:bg-orange-600 md:inline-flex">
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
}
