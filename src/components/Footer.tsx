import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <span className="text-xl text-white">🍔</span>
              </div>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Pronto Delivery
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-600">
              Conectando você aos melhores restaurantes da sua cidade com entregas rápidas e seguras.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Sobre nós</a></li>
              <li><a href="#" className="hover:text-orange-500">Carreiras</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Ajuda</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-orange-500">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-orange-500">Acompanhar pedido</a></li>
              <li><a href="#" className="hover:text-orange-500">Seja um parceiro</a></li>
              <li><a href="#" className="hover:text-orange-500">Termos de uso</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-600">
              Receba ofertas exclusivas e novidades
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="text-sm"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Assinar
              </Button>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@prontodelivery.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 Pronto Delivery. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
