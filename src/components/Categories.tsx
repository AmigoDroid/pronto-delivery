import { Card } from "./ui/card";

const categories = [
  { name: "Hambúrguer", emoji: "🍔", color: "bg-orange-100 hover:bg-orange-200" },
  { name: "Pastel", emoji: "🥟", color: "bg-red-100 hover:bg-red-200" },
  { name: "Guaraná da Amazônia", emoji: "🍨", color: "bg-pink-100 hover:bg-pink-200" },
  { name: "Suco", emoji: "🥤", color: "bg-blue-100 hover:bg-blue-200" },

];

export function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2">Categorias</h2>
          <p className="text-gray-600">O que você está com vontade de comer hoje?</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <Card
              key={category.name}
              className={`cursor-pointer border-0 ${category.color} transition-all hover:scale-105`}
            >
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-2 text-4xl">{category.emoji}</div>
                <span className="text-center text-sm text-gray-700">{category.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
