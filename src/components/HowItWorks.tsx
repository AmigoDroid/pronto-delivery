import { Search, ShoppingBag, Truck } from "lucide-react";
import { Card } from "./ui/card";

const steps = [
  {
    icon: Search,
    title: "Escolha seu prato",
    description: "Navegue por centenas de restaurantes e encontre exatamente o que você deseja",
    color: "bg-orange-100 text-orange-500",
  },
  {
    icon: ShoppingBag,
    title: "Faça seu pedido",
    description: "Adicione ao carrinho e finalize seu pedido com segurança em poucos cliques",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: Truck,
    title: "Receba em casa",
    description: "Acompanhe em tempo real e receba sua comida quentinha na porta de casa",
    color: "bg-green-100 text-green-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2">Como Funciona</h2>
          <p className="text-gray-600">Simples, rápido e fácil</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center transition-all hover:shadow-lg">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.color}`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden w-full -translate-y-1/2 md:block">
                  <div className="mx-auto h-0.5 w-1/2 translate-x-1/2 bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
