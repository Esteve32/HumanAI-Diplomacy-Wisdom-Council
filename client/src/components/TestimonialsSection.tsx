import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Florence Nightingale",
    role: "Healer & Pioneer of Nursing",
    content: "Through dialogue with ancient healers, I discovered that caring for the soul is as vital as tending to the body. True healing requires both compassion and systematic wisdom.",
    initials: "FN",
  },
  {
    id: "2",
    name: "Miyamoto Musashi",
    role: "Warrior & Master Strategist",
    content: "Conversing with Marcus Aurelius revealed that the greatest battle is within. Stoic discipline sharpened my understanding that victory comes from mastering oneself, not just the opponent.",
    initials: "MM",
  },
  {
    id: "3",
    name: "Hildegard of Bingen",
    role: "Mystic, Healer & Composer",
    content: "Speaking with the wisdom keepers illuminated how divine light flows through all healing arts. My visions deepened when I learned to listen—not just to the heavens, but to ancient voices across time.",
    initials: "HB",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Real Growth Stories
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            People using wisdom from the past to solve modern problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover-elevate" data-testid={`card-testimonial-${testimonial.id}`}>
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground font-serif mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold" data-testid={`text-testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
