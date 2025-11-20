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
import simoneImage from "@assets/generated_images/Simone_de_Beauvoir_feminist_philosopher_5b8dce46.png";
import virginiaImage from "@assets/generated_images/Virginia_Woolf_modernist_writer_9807c872.png";
import maryWImage from "@assets/generated_images/Mary_Wollstonecraft_feminist_philosopher_e6032844.png";
import bellImage from "@assets/generated_images/bell_hooks_feminist_scholar_8736b74d.png";
import susanImage from "@assets/generated_images/Susan_B_Anthony_suffragist_59ba3490.png";
import sojournerImage from "@assets/generated_images/Sojourner_Truth_abolitionist_activist_a5bd86a7.png";
import fridaImage from "@assets/generated_images/Frida_Kahlo_Mexican_artist_c943a294.png";
import marieImage from "@assets/generated_images/Marie_Curie_pioneering_scientist_83ca4bc2.png";
import eleanorImage from "@assets/generated_images/Eleanor_Roosevelt_diplomat_activist_52f8df33.png";
import joanImage from "@assets/generated_images/Joan_of_Arc_medieval_warrior_ae1e0b37.png";
import harrietImage from "@assets/generated_images/Harriet_Tubman_freedom_fighter_f372d046.png";
import rosaImage from "@assets/generated_images/Rosa_Parks_civil_rights_76d99a23.png";
import teresaAvilaImage from "@assets/generated_images/Teresa_of_Ávila_mystic_700a6992.png";
import audreImage from "@assets/generated_images/Audre_Lorde_feminist_poet_25f4fc76.png";
import adaImage from "@assets/generated_images/Ada_Lovelace_mathematician_pioneer_3411dd60.png";
import gandhiImage from "@assets/generated_images/Mahatma_Gandhi_independence_leader_6cebe43e.png";
import leonardoImage from "@assets/generated_images/Leonardo_da_Vinci_Renaissance_genius_d0a068d8.png";
import einsteinImage from "@assets/generated_images/Albert_Einstein_physicist_e3f0cb92.png";
import mandelaImage from "@assets/generated_images/Nelson_Mandela_leader_activist_3ed85815.png";
import montessoriImage from "@assets/generated_images/Maria_Montessori_educator_bde24972.png";
import cleopatraImage from "@assets/generated_images/Cleopatra_Egyptian_pharaoh_queen_633c70d7.png";
import malcolmImage from "@assets/generated_images/Malcolm_X_civil_rights_a0b99844.png";
import emilyImage from "@assets/generated_images/Emily_Dickinson_poet_57183bfc.png";
import teslaImage from "@assets/generated_images/Nikola_Tesla_inventor_genius_86e06b7d.png";
import motherTeresaImage from "@assets/generated_images/Mother_Teresa_humanitarian_nun_e663a788.png";
import douglassImage from "@assets/generated_images/Frederick_Douglass_abolitionist_orator_224ed171.png";
import austenImage from "@assets/generated_images/Jane_Austen_novelist_36b95ecd.png";
import vanGoghImage from "@assets/generated_images/Vincent_van_Gogh_painter_3e49748e.png";
import hypatiaImage from "@assets/generated_images/Hypatia_philosopher_mathematician_7fc8c35b.png";
import mlkImage from "@assets/generated_images/Martin_Luther_King_Jr_451f5e9f.png";
import arendtImage from "@assets/generated_images/Hannah_Arendt_political_theorist_471a9a13.png";
import sapphoImage from "@assets/generated_images/Sappho_ancient_Greek_poet_c1aac237.png";
import platoImage from "@assets/generated_images/Plato_Greek_philosopher_3a2dd694.png";
import zoraImage from "@assets/generated_images/Zora_Neale_Hurston_anthropologist_434fa109.png";
import avicennaImage from "@assets/generated_images/Avicenna_Persian_polymath_physician_c6075135.png";
import dorothyImage from "@assets/generated_images/Dorothy_Day_social_activist_d7a628f2.png";

const wiseFigures = [
  {
    id: "simone-de-beauvoir",
    name: "Simone de Beauvoir",
    era: "1908-1986 CE",
    title: "Existentialist Feminist",
    bio: "One is not born, but rather becomes, a woman. Groundbreaking philosopher who challenged gender roles.",
    votes: 24567,
    imageUrl: simoneImage,
  },
  {
    id: "virginia-woolf",
    name: "Virginia Woolf",
    era: "1882-1941 CE",
    title: "Modernist Literary Icon",
    bio: "A woman must have money and a room of her own. Pioneering feminist writer and stream-of-consciousness novelist.",
    votes: 22891,
    imageUrl: virginiaImage,
  },
  {
    id: "mary-wollstonecraft",
    name: "Mary Wollstonecraft",
    era: "1759-1797 CE",
    title: "Mother of Feminism",
    bio: "Author of A Vindication of the Rights of Woman. Early advocate for women's education and equality.",
    votes: 19432,
    imageUrl: maryWImage,
  },
  {
    id: "bell-hooks",
    name: "bell hooks",
    era: "1952-2021 CE",
    title: "Intersectional Feminist",
    bio: "Love as the practice of freedom. Scholar who explored race, gender, and class in transformative ways.",
    votes: 18765,
    imageUrl: bellImage,
  },
  {
    id: "socrates",
    name: "Socrates",
    era: "469-399 BCE",
    title: "Father of Western Philosophy",
    bio: "The unexamined life is not worth living. Known for the Socratic method of questioning.",
    votes: 17234,
    imageUrl: socratesImage,
  },
  {
    id: "harriet-tubman",
    name: "Harriet Tubman",
    era: "1822-1913 CE",
    title: "Freedom Fighter & Conductor",
    bio: "I never ran my train off the track. Led over 70 enslaved people to freedom via the Underground Railroad.",
    votes: 16543,
    imageUrl: harrietImage,
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    era: "1867-1934 CE",
    title: "Pioneer of Radioactivity",
    bio: "First woman to win a Nobel Prize and only person to win in two different sciences. Discovered polonium and radium.",
    votes: 15987,
    imageUrl: marieImage,
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    era: "121-180 CE",
    title: "Stoic Philosopher Emperor",
    bio: "Author of Meditations. Ruled Rome while practicing Stoic philosophy and self-discipline.",
    votes: 14123,
    imageUrl: marcusImage,
  },
  {
    id: "joan-of-arc",
    name: "Joan of Arc",
    era: "1412-1431 CE",
    title: "Warrior Saint & Visionary",
    bio: "I am not afraid. I was born to do this. Led French armies to victory during the Hundred Years' War.",
    votes: 13456,
    imageUrl: joanImage,
  },
  {
    id: "martin-luther-king",
    name: "Martin Luther King Jr.",
    era: "1929-1968 CE",
    title: "Civil Rights Leader",
    bio: "I have a dream. Nonviolent leader who transformed America through moral courage and powerful oratory.",
    votes: 21876,
    imageUrl: mlkImage,
  },
  {
    id: "susan-b-anthony",
    name: "Susan B. Anthony",
    era: "1820-1906 CE",
    title: "Suffragist Champion",
    bio: "Failure is impossible. Dedicated her life to women's right to vote and gender equality in America.",
    votes: 12345,
    imageUrl: susanImage,
  },
  {
    id: "lao-tzu",
    name: "Lao Tzu",
    era: "6th century BCE",
    title: "Founder of Taoism",
    bio: "Author of the Tao Te Ching. Taught the way of water, effortless action, and natural harmony.",
    votes: 11234,
    imageUrl: laoTzuImage,
  },
  {
    id: "eleanor-roosevelt",
    name: "Eleanor Roosevelt",
    era: "1884-1962 CE",
    title: "Humanitarian & Human Rights Advocate",
    bio: "No one can make you feel inferior without your consent. Chaired the UN committee that drafted the Universal Declaration of Human Rights.",
    votes: 10876,
    imageUrl: eleanorImage,
  },
  {
    id: "rumi",
    name: "Rumi",
    era: "1207-1273 CE",
    title: "Sufi Mystic & Poet",
    bio: "The wound is the place where light enters you. Persian poet of love, spirituality, and unity.",
    votes: 20543,
    imageUrl: rumiImage,
  },
  {
    id: "rosa-parks",
    name: "Rosa Parks",
    era: "1913-2005 CE",
    title: "Mother of the Civil Rights Movement",
    bio: "I would like to be remembered as a person who wanted to be free. Her refusal to give up her bus seat sparked the Montgomery Bus Boycott.",
    votes: 9654,
    imageUrl: rosaImage,
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    era: "1907-1954 CE",
    title: "Mexican Surrealist Artist",
    bio: "I paint myself because I am so often alone. Transformed pain into powerful self-portraits exploring identity and suffering.",
    votes: 18234,
    imageUrl: fridaImage,
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    era: "1869-1948 CE",
    title: "Apostle of Nonviolence",
    bio: "Be the change you wish to see in the world. Led India to independence through peaceful civil disobedience.",
    votes: 8765,
    imageUrl: gandhiImage,
  },
  {
    id: "maya-angelou",
    name: "Maya Angelou",
    era: "1928-2014 CE",
    title: "Voice of Resilience",
    bio: "Still I rise. Poet, author, and civil rights activist who wrote I Know Why the Caged Bird Sings.",
    votes: 7432,
    imageUrl: mayaImage,
  },
  {
    id: "confucius",
    name: "Confucius",
    era: "551-479 BCE",
    title: "Master of Ethics",
    bio: "Chinese philosopher who taught virtue, filial piety, and harmony in relationships and society.",
    votes: 6891,
    imageUrl: confuciusImage,
  },
  {
    id: "sojourner-truth",
    name: "Sojourner Truth",
    era: "1797-1883 CE",
    title: "Abolitionist & Women's Rights Advocate",
    bio: "Ain't I a woman? Escaped slavery to become a powerful orator for abolition and women's rights.",
    votes: 5678,
    imageUrl: sojournerImage,
  },
  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    era: "1452-1519 CE",
    title: "Renaissance Polymath",
    bio: "Learning never exhausts the mind. Artist, inventor, anatomist, engineer—the ultimate Renaissance genius.",
    votes: 16789,
    imageUrl: leonardoImage,
  },
  {
    id: "audre-lorde",
    name: "Audre Lorde",
    era: "1934-1992 CE",
    title: "Black Feminist Warrior Poet",
    bio: "Your silence will not protect you. Poet and activist who spoke truth about intersecting oppressions.",
    votes: 4987,
    imageUrl: audreImage,
  },
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    era: "1918-2013 CE",
    title: "Anti-Apartheid Revolutionary",
    bio: "It always seems impossible until it's done. Led South Africa from apartheid to democracy after 27 years in prison.",
    votes: 12654,
    imageUrl: mandelaImage,
  },
  {
    id: "buddha",
    name: "Buddha",
    era: "c. 5th-4th century BCE",
    title: "The Enlightened One",
    bio: "Founder of Buddhism. Taught the Four Noble Truths and the path to end suffering through mindfulness and compassion.",
    votes: 19876,
    imageUrl: buddhaImage,
  },
  {
    id: "jane-austen",
    name: "Jane Austen",
    era: "1775-1817 CE",
    title: "Master of Social Satire",
    bio: "I declare after all there is no enjoyment like reading. Novelist who brilliantly satirized Georgian society in works like Pride and Prejudice.",
    votes: 11543,
    imageUrl: austenImage,
  },
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    era: "1879-1955 CE",
    title: "Father of Relativity",
    bio: "Imagination is more important than knowledge. Developed the theory of relativity and revolutionized physics.",
    votes: 15432,
    imageUrl: einsteinImage,
  },
  {
    id: "hypatia",
    name: "Hypatia of Alexandria",
    era: "c. 350-415 CE",
    title: "Neoplatonist Philosopher & Mathematician",
    bio: "Reserve your right to think. Brilliant scholar and head of the Neoplatonist school in Alexandria.",
    votes: 3456,
    imageUrl: hypatiaImage,
  },
  {
    id: "aristotle",
    name: "Aristotle",
    era: "384-322 BCE",
    title: "Founder of Logic",
    bio: "Student of Plato and teacher of Alexander the Great. Founded formal logic and pioneered empirical science.",
    votes: 9123,
    imageUrl: aristotleImage,
  },
  {
    id: "teresa-of-avila",
    name: "Teresa of Ávila",
    era: "1515-1582 CE",
    title: "Mystic Reformer & Doctor of the Church",
    bio: "Let nothing disturb you. Spanish mystic who reformed the Carmelite order and wrote spiritual classics like The Interior Castle.",
    votes: 2987,
    imageUrl: teresaAvilaImage,
  },
  {
    id: "malcolm-x",
    name: "Malcolm X",
    era: "1925-1965 CE",
    title: "Black Nationalist Leader",
    bio: "By any means necessary. Transformed from street hustler to powerful advocate for Black liberation and self-determination.",
    votes: 8234,
    imageUrl: malcolmImage,
  },
  {
    id: "carl-jung",
    name: "Carl Jung",
    era: "1875-1961 CE",
    title: "Founder of Analytical Psychology",
    bio: "Pioneered analytical psychology. Explored archetypes, the collective unconscious, and individuation process.",
    votes: 6543,
    imageUrl: jungImage,
  },
  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    era: "1815-1852 CE",
    title: "First Computer Programmer",
    bio: "Wrote the first algorithm intended for machine processing. Visionary who saw computers' potential beyond calculation.",
    votes: 7654,
    imageUrl: adaImage,
  },
  {
    id: "frederick-douglass",
    name: "Frederick Douglass",
    era: "1818-1895 CE",
    title: "Abolitionist & Statesman",
    bio: "Knowledge makes a man unfit to be a slave. Escaped slavery to become America's most powerful orator for freedom.",
    votes: 5432,
    imageUrl: douglassImage,
  },
  {
    id: "maria-montessori",
    name: "Maria Montessori",
    era: "1870-1952 CE",
    title: "Revolutionary Educator",
    bio: "The child is both a hope and a promise. First Italian female physician who revolutionized early childhood education.",
    votes: 4321,
    imageUrl: montessoriImage,
  },
  {
    id: "cleopatra",
    name: "Cleopatra VII",
    era: "69-30 BCE",
    title: "Last Pharaoh of Egypt",
    bio: "Brilliant multilingual ruler who commanded armies and allied with Rome to preserve Egyptian independence.",
    votes: 14321,
    imageUrl: cleopatraImage,
  },
  {
    id: "plato",
    name: "Plato",
    era: "428-348 BCE",
    title: "Philosopher of Ideal Forms",
    bio: "Founded the Academy in Athens. Explored ideal forms of reality and justice in works like The Republic.",
    votes: 10234,
    imageUrl: platoImage,
  },
  {
    id: "mother-teresa",
    name: "Mother Teresa",
    era: "1910-1997 CE",
    title: "Saint of the Gutters",
    bio: "Not all of us can do great things. But we can do small things with great love. Founded the Missionaries of Charity.",
    votes: 9876,
    imageUrl: motherTeresaImage,
  },
  {
    id: "hannah-arendt",
    name: "Hannah Arendt",
    era: "1906-1975 CE",
    title: "Political Philosopher",
    bio: "The banality of evil. Explored totalitarianism, power, and the human condition in The Origins of Totalitarianism.",
    votes: 3765,
    imageUrl: arendtImage,
  },
  {
    id: "nikola-tesla",
    name: "Nikola Tesla",
    era: "1856-1943 CE",
    title: "Inventor of AC Electricity",
    bio: "The present is theirs; the future is mine. Pioneered alternating current and wireless technology.",
    votes: 13456,
    imageUrl: teslaImage,
  },
  {
    id: "sappho",
    name: "Sappho",
    era: "c. 630-570 BCE",
    title: "Lyric Poet of Lesbos",
    bio: "Love shook my heart like wind on a mountain. Ancient Greek lyric poet whose fragments influenced Western poetry.",
    votes: 2543,
    imageUrl: sapphoImage,
  },
  {
    id: "vincent-van-gogh",
    name: "Vincent van Gogh",
    era: "1853-1890 CE",
    title: "Post-Impressionist Master",
    bio: "I feel there is nothing more truly artistic than to love people. Transformed suffering into luminous masterpieces like Starry Night.",
    votes: 17654,
    imageUrl: vanGoghImage,
  },
  {
    id: "emily-dickinson",
    name: "Emily Dickinson",
    era: "1830-1886 CE",
    title: "Reclusive Poetic Genius",
    bio: "I dwell in Possibility. Innovative poet who explored death, immortality, and nature in nearly 1,800 poems.",
    votes: 6234,
    imageUrl: emilyImage,
  },
  {
    id: "zora-neale-hurston",
    name: "Zora Neale Hurston",
    era: "1891-1960 CE",
    title: "Harlem Renaissance Anthropologist",
    bio: "I have been in Sorrow's kitchen. Anthropologist and author who celebrated Black Southern culture in Their Eyes Were Watching God.",
    votes: 4123,
    imageUrl: zoraImage,
  },
  {
    id: "avicenna",
    name: "Avicenna (Ibn Sina)",
    era: "980-1037 CE",
    title: "Persian Polymath & Physician",
    bio: "Father of early modern medicine. His Canon of Medicine was used in universities for over 500 years.",
    votes: 5234,
    imageUrl: avicennaImage,
  },
  {
    id: "dorothy-day",
    name: "Dorothy Day",
    era: "1897-1980 CE",
    title: "Catholic Worker Movement Founder",
    bio: "We have all known the long loneliness. Journalist and activist who founded the Catholic Worker movement to serve the poor.",
    votes: 1876,
    imageUrl: dorothyImage,
  },
];

export default function VotingSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedFigures = showAll ? wiseFigures : wiseFigures.slice(0, 9);

  return (
    <section className="py-20 px-6 bg-background" id="voting">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
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
