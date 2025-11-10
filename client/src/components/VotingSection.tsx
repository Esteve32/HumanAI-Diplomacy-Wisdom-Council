import { useState } from "react";
import WiseFigureCard from "./WiseFigureCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

import socratesImage from "@assets/generated_images/Socrates_wise_figure_portrait_b5d3475d.png";
import marcusImage from "@assets/generated_images/Marcus_Aurelius_portrait_illustration_a1b20cd4.png";
import laoTzuImage from "@assets/generated_images/Lao_Tzu_philosopher_portrait_e2d428d7.png";
import rumiImage from "@assets/generated_images/Rumi_mystic_poet_portrait_34bb73de.png";
import confuciusImage from "@assets/generated_images/Confucius_scholar_portrait_illustration_367635b4.png";
import mayaImage from "@assets/generated_images/Maya_Angelou_portrait_illustration_53d1eecb.png";
import buddhaImage from "@assets/generated_images/Buddha_meditation_portrait_illustration_881a332f.png";
import aristotleImage from "@assets/generated_images/Aristotle_philosopher_scholar_portrait_9d407529.png";
import jungImage from "@assets/generated_images/Carl_Jung_psychologist_portrait_fc93a5bd.png";

const wiseFigures = [
  {
    id: "socrates",
    name: "Socrates",
    era: "469-399 BCE",
    title: "Father of Western Philosophy",
    bio: "The examined life is the only life worth living. Known for the Socratic method of questioning.",
    votes: 15234,
    imageUrl: socratesImage,
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    era: "121-180 CE",
    title: "Stoic Philosopher Emperor",
    bio: "Author of Meditations. Ruled Rome while practicing Stoic philosophy and self-discipline.",
    votes: 14892,
    imageUrl: marcusImage,
  },
  {
    id: "lao-tzu",
    name: "Lao Tzu",
    era: "6th century BCE",
    title: "Founder of Taoism",
    bio: "Author of the Tao Te Ching. Taught the way of water, effortless action, and natural harmony.",
    votes: 13756,
    imageUrl: laoTzuImage,
  },
  {
    id: "rumi",
    name: "Rumi",
    era: "1207-1273 CE",
    title: "Sufi Mystic & Poet",
    bio: "The wound is the place where light enters you. Persian poet of love, spirituality, and unity.",
    votes: 12987,
    imageUrl: rumiImage,
  },
  {
    id: "confucius",
    name: "Confucius",
    era: "551-479 BCE",
    title: "Master of Ethics",
    bio: "Philosopher who taught virtue, proper conduct, and harmony in relationships and society.",
    votes: 11654,
    imageUrl: confuciusImage,
  },
  {
    id: "maya-angelou",
    name: "Maya Angelou",
    era: "1928-2014 CE",
    title: "Voice of Resilience",
    bio: "Poet, author, and civil rights activist. Known for her powerful words on identity and perseverance.",
    votes: 10923,
    imageUrl: mayaImage,
  },
  {
    id: "buddha",
    name: "Buddha",
    era: "563-483 BCE",
    title: "The Enlightened One",
    bio: "Founder of Buddhism. Taught the path to end suffering through mindfulness and compassion.",
    votes: 10456,
    imageUrl: buddhaImage,
  },
  {
    id: "aristotle",
    name: "Aristotle",
    era: "384-322 BCE",
    title: "Master of Logic",
    bio: "Student of Plato. Founded formal logic and made contributions to ethics, science, and politics.",
    votes: 9876,
    imageUrl: aristotleImage,
  },
  {
    id: "carl-jung",
    name: "Carl Jung",
    era: "1875-1961 CE",
    title: "Explorer of the Psyche",
    bio: "Pioneered analytical psychology. Explored archetypes, the collective unconscious, and individuation.",
    votes: 9234,
    imageUrl: jungImage,
  },
];

export default function VotingSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedFigures = showAll ? wiseFigures : wiseFigures.slice(0, 9);

  return (
    <section className="py-20 px-6 bg-background" id="voting">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vote for Your Favorite Wisdom Guide
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            No sign-in required. Choose who you'd most like to learn from and see the live leaderboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedFigures.map((figure, index) => (
            <WiseFigureCard
              key={figure.id}
              {...figure}
              rank={index + 1}
            />
          ))}
        </div>

        {wiseFigures.length > 9 && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              data-testid="button-toggle-all-figures"
            >
              {showAll ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Show Top 9
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  See Full List
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
