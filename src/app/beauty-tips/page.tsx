import Image from "next/image"

const beautyTips = [
  {
    title: "Perfect Your Skincare Routine",
    content: "Cleanse, tone, and moisturize twice daily for radiant skin. Don't forget to exfoliate weekly!",
    image:
      "/images/skin.png",
  },
  {
    title: "Master the Art of Contouring",
    content: "Use a shade slightly darker than your skin tone to sculpt cheekbones, jawline, and nose.",
    image:
      "/images/conto.png",
  },
  {
    title: "Create the Perfect Cat Eye",
    content: "Start from the outer corner and work your way in for a flawless winged eyeliner look.",
    image:
      "/images/cateye.png",
  },
  {
    title: "Achieve Long-Lasting Lipstick",
    content: "Apply, blot, and reapply for a vibrant lip color that stays put all day long.",
    image:
      "/images/lip.png",
  },
  {
    title: "Nail Your Base Makeup",
    content: "Start with a primer, then apply foundation and concealer for a flawless complexion.",
    image:
      "/images/nail1.png",
  },
  {
    title: "Enhance Your Natural Glow",
    content: "Apply highlighter to the high points of your face for a radiant, dewy look.",
    image:
      "/images/natural.png",
  },
]

export default function BeautyTips() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-elegance-charcoal">Beauty Tips</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beautyTips.map((tip, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <div className="relative h-48">
              <Image src={tip.image || "/placeholder.svg"} alt={tip.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-elegance-charcoal">{tip.title}</h2>
              <p className="text-elegance-sage">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

