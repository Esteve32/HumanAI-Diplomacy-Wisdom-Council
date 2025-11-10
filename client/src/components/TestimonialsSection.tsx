import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Product Manager",
    content: "Talking with Marcus Aurelius helped me handle team conflicts with more wisdom. I approach challenges differently now—with stoic calm instead of reactive stress.",
    initials: "SC",
  },
  {
    id: "2",
    name: "David Okafor",
    role: "Startup Founder",
    content: "Socrates taught me to question my assumptions about scaling. The dialogue format pushed me to think deeper about what success really means for my company.",
    initials: "DO",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Software Engineer",
    content: "I integrated the API into our team's workflow tool. Now before major decisions, we consult with wisdom figures. It's changed how we think about AI—as a growth tool, not just automation.",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
