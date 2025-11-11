import { Star, Clock, ShoppingCart } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const dishes = [
  {
    id: 1,
    name: "Smash Burger Clássico",
    restaurant: "Burger House",
    price: 32.90,
    rating: 4.8,
    time: "20-30 min",
    image: "https://images.unsplash.com/photo-1639781436072-897a64a9bc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzYyODUxODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 15,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    restaurant: "Pizzaria Bella",
    price: 45.00,
    rating: 4.9,
    time: "30-40 min",
    image: "https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2Mjg5OTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Combinado de Sushi",
    restaurant: "Sushi Master",
    price: 68.90,
    rating: 5.0,
    time: "35-45 min",
    image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjI4MjQyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 20,
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    restaurant: "Trattoria Italiana",
    price: 42.00,
    rating: 4.7,
    time: "25-35 min",
    image: "https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2MjgxMjMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Salada Caesar",
    restaurant: "Green Life",
    price: 28.50,
    rating: 4.6,
    time: "15-25 min",
    image: "https://images.unsplash.com/photo-1651352650142-385087834d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc2Mjg5NzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Torta de Chocolate",
    restaurant: "Doce Sabor",
    price: 18.90,
    rating: 4.9,
    time: "10-20 min",
    image: "https://images.unsplash.com/photo-1655633584060-c875b9821061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc2MjgxMjMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    discount: 10,
  },
];

export function PopularDishes() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2">Pratos Populares</h2>
            <p className="text-gray-600">Os favoritos dos nossos clientes</p>
          </div>
          <Button variant="outline">Ver todos</Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <Card key={dish.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-110"
                />
                {dish.discount && (
                  <Badge className="absolute right-3 top-3 bg-red-500 hover:bg-red-600">
                    -{dish.discount}%
                  </Badge>
                )}
              </div>
              
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1">{dish.name}</h3>
                    <p className="text-sm text-gray-600">{dish.restaurant}</p>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{dish.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{dish.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {dish.discount ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          R$ {dish.price.toFixed(2)}
                        </span>
                        <span className="text-orange-500">
                          R$ {(dish.price * (1 - dish.discount / 100)).toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-orange-500">R$ {dish.price.toFixed(2)}</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
