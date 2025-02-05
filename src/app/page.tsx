import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          // src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          src="/images/1.webp"
          alt="Elegant beauty products"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Discover Your Timeless Beauty</h1>
          <p className="text-xl mb-8">Indulge in our curated collection of premium cosmetics</p>
          <Link
            href="/products"
            className="bg-elegance-gold text-elegance-charcoal px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-elegance-charcoal">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Luxe Lipstick",
              image:
              "/images/2.webp",
            },
            {
              name: "Radiant Foundation",
              image:
                "/images/2.png",
            },
            {
              name: "Silk Eye Palette",
              image:
                "/images/4.webp",
            },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer">
              <div className="mb-4 relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-elegance-charcoal">{product.name}</h3>
              <p className="text-elegance-sage mb-4">Experience the luxury of our {product.name.toLowerCase()}</p>
              <Link href="/products" className="text-elegance-gold hover:underline">
                Discover More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}




// import Image from "next/image"
// import Link from "next/link"

// export default function Home() {
//   return (
//     <div className="space-y-16">
//       <section className="relative h-[70vh] flex items-center justify-center">
//         <Image
//           src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//           alt="Elegant beauty products"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <div className="relative text-center text-white z-10">
//           <h1 className="text-5xl font-bold mb-4">Discover Your Timeless Beauty</h1>
//           <p className="text-xl mb-8">Indulge in our curated collection of premium cosmetics</p>
//           <Link
//             href="/products"
//             className="bg-elegance-gold text-elegance-charcoal px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300"
//           >
//             Explore Our Collection
//           </Link>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-3xl font-semibold mb-8 text-center text-elegance-charcoal">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               name: "Luxe Lipstick",
//               image:
//                 "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//             },
//             {
//               name: "Radiant Foundation",
//               image:
//                 "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//             },
//             {
//               name: "Silk Eye Palette",
//               image:
//                 "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//             },
//           ].map((product, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="mb-4 relative h-64">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-elegance-charcoal">{product.name}</h3>
//               <p className="text-elegance-sage mb-4">Experience the luxury of our {product.name.toLowerCase()}</p>
//               <Link href="/products" className="text-elegance-gold hover:underline">
//                 Discover More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

