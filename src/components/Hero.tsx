import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-600">
              🎉 Entrega grátis na primeira compra!
            </div>
            
            <h1 className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Comida deliciosa na sua porta em minutos
            </h1>
            
            <p className="text-lg text-gray-600">
              Descubra os melhores restaurantes da sua região e receba suas refeições favoritas com rapidez e qualidade.
            </p>

            <div className="flex gap-3 rounded-lg bg-white p-2 shadow-lg">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Buscar por restaurante ou prato..." 
                  className="border-0 p-0 focus-visible:ring-0"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Buscar
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-orange-500">500+</div>
                <p className="text-sm text-gray-600">Restaurantes</p>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-orange-500">50K+</div>
                <p className="text-sm text-gray-600">Entregas</p>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-orange-500">4.8⭐</div>
                <p className="text-sm text-gray-600">Avaliação</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-orange-200 opacity-50 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1617194191528-9a50cf609304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBoZXJvfGVufDF8fHx8MTc2Mjg0NzQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Food delivery"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
