import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

const labels: Record<Category, String> = {
  'men': 'para Hombres',
  'women': 'para Mujeres',
  'kid': 'para Niños',
  'unisex': 'para Todos'
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id )

  // if (id === 'kid') {
  //   notFound();
  // }

  return (
    <div>
      <Title 
      title={`Artículos ${ labels[id] }`} 
      subtitle={``}
      className="mb-2" />

      <ProductGrid products={ products } />

      {/* <h1>Category Page { id }</h1> */}
    </div>
  )
}
