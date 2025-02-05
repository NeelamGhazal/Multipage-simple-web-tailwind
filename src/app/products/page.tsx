import Image from "next/image"

const products = [
  {
    name: "Luxe Lipstick",
    description: "Creamy, long-lasting color",
    image:
      "/images/2.webp",
  },
  {
    name: "Radiant Foundation",
    description: "Flawless, natural coverage",
    image:
      "/images/3.webp",
  },
  {
    name: "Silk Eye Palette",
    description: "Versatile, blendable shades",
    image:
      "/images/4.webp",
  },
  {
    name: "Hydra-Boost Moisturizer",
    description: "Deep, lasting hydration",
    image:
      "/images/5.png",
  },
  {
    name: "Lash Amplifier Mascara",
    description: "Volumizing and lengthening",
    image:
      "/images/lash.webp",
  },
  {
    name: "Glow Enhancer Blush",
    description: "Subtle, radiant color",
    image:
      "/images/glow.webp",
  },
  {
    name: "Sculpting Bronzer",
    description: "Define and enhance features",
    image:
      "/images/6.png",
  },
  {
    name: "Illuminating Highlighter",
    description: "Radiant glow for cheekbones",
    image:
      "/images/illu.webp",
  },
  {
    name: "Precision Eyeliner",
    description: "Sharp, defined lines",
    image:
      "/images/7.png",
  },
  {
    name: "Nourishing Lip Balm",
    description: "Soft, moisturized lips",
    image:
      "/images/balm.png",
  },
  {
    name: "Rejuvenating Night Cream",
    description: "Overnight skin renewal",
    image:
      "/images/night.webp",
  },
  {
    name: "Clarifying Toner",
    description: "Balanced, clear complexion",
    image:
      "/images/clari.webp",
  },
]

export default function Products() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 text-center text-elegance-charcoal">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="mb-4 relative aspect-square overflow-hidden rounded-md">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-elegance-charcoal">{product.name}</h2>
            <p className="text-elegance-sage mb-4">{product.description}</p>
            <button className="w-full bg-elegance-gold text-elegance-charcoal py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

