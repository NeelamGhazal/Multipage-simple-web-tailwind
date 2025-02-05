import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-elegance-charcoal">About Elegance Beauty Boutique</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/images/about2.png"
            alt="Elegance Beauty Boutique"
            width={500}
            height={500}
            className="rounded-lg shadow-md h-[300px]"
          />
        </div>
        <div className="space-y-4">
          <p className="text-elegance-charcoal">
            At Elegance Beauty Boutique, we believe that true beauty comes from within, and our premium cosmetics are
            designed to enhance your natural radiance.
          </p>
          <p className="text-elegance-charcoal">
            Founded in 2010, our boutique has been dedicated to providing high-quality, cruelty-free beauty products
            that cater to all skin types and tones. Our team of expert cosmetologists and skincare specialists work
            tirelessly to curate a collection that combines the best of nature and science.
          </p>
          <p className="text-elegance-charcoal">
            We are committed to sustainability and ethical practices, ensuring that our products are not only good for
            you but also for the planet. Experience the Elegance difference and discover your timeless beauty with us.
          </p>
        </div>
      </div>
    </div>
  )
}

