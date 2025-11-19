import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Healer & Wellness Coach",
    content: "Talking with Rumi opened my practice to a deeper level of compassion. The Sufi teachings helped me guide clients toward healing not just symptoms, but the whole person.",
    initials: "AC",
  },
  {
    id: "2",
    name: "Marcus Wright",
    role: "Warrior & Conflict Mediator",
    content: "Marcus Aurelius taught me that true strength is restraint. Now I help organizations navigate disputes with stoic principles—finding peace through discipline and wisdom.",
    initials: "MW",
  },
  {
    id: "3",
    name: "River Patel",
    role: "Mystic & Meditation Teacher",
    content: "Buddha's teachings on mindfulness transformed how I guide students. The API integration lets me share timeless wisdom in modern spaces—bridging ancient practice with today's needs.",
    initials: "RP",
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
