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
import sunTzuImage from "@assets/generated_images/sun_tzu_wise_strategist.png";
import jesusImage from "@assets/generated_images/jesus_christ_spiritual_teacher.png";
import pythagorasImage from "@assets/generated_images/pythagoras_mathematician_philosopher_portrait.png";
import mosesImage from "@assets/generated_images/moses_hebrew_prophet_portrait.png";
import krishnaImage from "@assets/generated_images/krishna_hindu_teacher_portrait.png";
import hermesImage from "@assets/generated_images/hermes_trismegistus_wisdom_keeper.png";

const wiseFigures = [
  {
    id: "rosa-parks",
    name: "Rosa Parks",
    era: "1913-2005 CE",
    title: "Mother of the Civil Rights Movement",
    bio: "I would like to be remembered as a person who wanted to be free. Her refusal to give up her bus seat sparked the Montgomery Bus Boycott.",
    votes: 9654,
    imageUrl: rosaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "socrates",
    name: "Socrates",
    era: "469-399 BCE",
    title: "Father of Western Philosophy",
    bio: "The unexamined life is not worth living. Known for the Socratic method of questioning.",
    votes: 17234,
    imageUrl: socratesImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "maria-montessori",
    name: "Maria Montessori",
    era: "1870-1952 CE",
    title: "Revolutionary Educator",
    bio: "The child is both a hope and a promise. First Italian female physician who revolutionized early childhood education.",
    votes: 4321,
    imageUrl: montessoriImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "mary-wollstonecraft",
    name: "Mary Wollstonecraft",
    era: "1759-1797 CE",
    title: "Mother of Feminism",
    bio: "Author of A Vindication of the Rights of Woman. Early advocate for women's education and equality.",
    votes: 19432,
    imageUrl: maryWImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "bell-hooks",
    name: "Bell Hooks",
    era: "1952-2021 CE",
    title: "Intersectional Feminist",
    bio: "Love as the practice of freedom. Scholar who explored race, gender, and class in transformative ways.",
    votes: 18765,
    imageUrl: bellImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "simone-de-beauvoir",
    name: "Simone de Beauvoir",
    era: "1908-1986 CE",
    title: "Existentialist Feminist",
    bio: "One is not born, but rather becomes, a woman. Groundbreaking philosopher who challenged gender roles.",
    votes: 24567,
    imageUrl: simoneImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "jesus-christ",
    name: "Jesus Christ",
    era: "c. 4 BCE - 30 CE",
    title: "Teacher of Compassion",
    bio: "Love your neighbor as yourself. Spiritual teacher whose message of love, forgiveness, and compassion transformed civilization.",
    votes: 23456,
    imageUrl: jesusImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "rumi",
    name: "Rumi",
    era: "1207-1273 CE",
    title: "Sufi Mystic & Poet",
    bio: "The wound is the place where light enters you. Persian poet of love, spirituality, and unity.",
    votes: 20543,
    imageUrl: rumiImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "virginia-woolf",
    name: "Virginia Woolf",
    era: "1882-1941 CE",
    title: "Modernist Literary Icon",
    bio: "A woman must have money and a room of her own. Pioneering feminist writer and stream-of-consciousness novelist.",
    votes: 22891,
    imageUrl: virginiaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "harriet-tubman",
    name: "Harriet Tubman",
    era: "1822-1913 CE",
    title: "Freedom Fighter & Conductor",
    bio: "I never ran my train off the track. Led over 70 enslaved people to freedom via the Underground Railroad.",
    votes: 16543,
    imageUrl: harrietImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    era: "1867-1934 CE",
    title: "Pioneer of Radioactivity",
    bio: "First woman to win a Nobel Prize and only person to win in two different sciences. Discovered polonium and radium.",
    votes: 15987,
    imageUrl: marieImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    era: "121-180 CE",
    title: "Stoic Philosopher Emperor",
    bio: "Author of Meditations. Ruled Rome while practicing Stoic philosophy and self-discipline.",
    votes: 14123,
    imageUrl: marcusImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "joan-of-arc",
    name: "Joan of Arc",
    era: "1412-1431 CE",
    title: "Warrior Saint & Visionary",
    bio: "I am not afraid. I was born to do this. Led French armies to victory during the Hundred Years' War.",
    votes: 13456,
    imageUrl: joanImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "martin-luther-king",
    name: "Martin Luther King Jr.",
    era: "1929-1968 CE",
    title: "Civil Rights Leader",
    bio: "I have a dream. Nonviolent leader who transformed America through moral courage and powerful oratory.",
    votes: 21876,
    imageUrl: mlkImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "susan-b-anthony",
    name: "Susan B. Anthony",
    era: "1820-1906 CE",
    title: "Suffragist Champion",
    bio: "Failure is impossible. Dedicated her life to women's right to vote and gender equality in America.",
    votes: 12345,
    imageUrl: susanImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "lao-tzu",
    name: "Lao Tzu",
    era: "6th century BCE",
    title: "Founder of Taoism",
    bio: "Author of the Tao Te Ching. Taught the way of water, effortless action, and natural harmony.",
    votes: 11234,
    imageUrl: laoTzuImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "eleanor-roosevelt",
    name: "Eleanor Roosevelt",
    era: "1884-1962 CE",
    title: "Humanitarian & Human Rights Advocate",
    bio: "No one can make you feel inferior without your consent. Chaired the UN committee that drafted the Universal Declaration of Human Rights.",
    votes: 10876,
    imageUrl: eleanorImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "frida-kahlo",
    name: "Frida Kahlo",
    era: "1907-1954 CE",
    title: "Mexican Surrealist Artist",
    bio: "I paint myself because I am so often alone. Transformed pain into powerful self-portraits exploring identity and suffering.",
    votes: 18234,
    imageUrl: fridaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    era: "1869-1948 CE",
    title: "Apostle of Nonviolence",
    bio: "Be the change you wish to see in the world. Led India to independence through peaceful civil disobedience.",
    votes: 8765,
    imageUrl: gandhiImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "maya-angelou",
    name: "Maya Angelou",
    era: "1928-2014 CE",
    title: "Voice of Resilience",
    bio: "Still I rise. Poet, author, and civil rights activist who wrote I Know Why the Caged Bird Sings.",
    votes: 7432,
    imageUrl: mayaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "confucius",
    name: "Confucius",
    era: "551-479 BCE",
    title: "Master of Ethics",
    bio: "Chinese philosopher who taught virtue, filial piety, and harmony in relationships and society.",
    votes: 6891,
    imageUrl: confuciusImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "sojourner-truth",
    name: "Sojourner Truth",
    era: "1797-1883 CE",
    title: "Abolitionist & Women's Rights Advocate",
    bio: "Ain't I a woman? Escaped slavery to become a powerful orator for abolition and women's rights.",
    votes: 5678,
    imageUrl: sojournerImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    era: "1452-1519 CE",
    title: "Renaissance Polymath",
    bio: "Learning never exhausts the mind. Artist, inventor, anatomist, engineer—the ultimate Renaissance genius.",
    votes: 16789,
    imageUrl: leonardoImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "audre-lorde",
    name: "Audre Lorde",
    era: "1934-1992 CE",
    title: "Black Feminist Warrior Poet",
    bio: "Your silence will not protect you. Poet and activist who spoke truth about intersecting oppressions.",
    votes: 4987,
    imageUrl: audreImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    era: "1918-2013 CE",
    title: "Anti-Apartheid Revolutionary",
    bio: "It always seems impossible until it's done. Led South Africa from apartheid to democracy after 27 years in prison.",
    votes: 12654,
    imageUrl: mandelaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "buddha",
    name: "Buddha",
    era: "c. 5th-4th century BCE",
    title: "The Enlightened One",
    bio: "Founder of Buddhism. Taught the Four Noble Truths and the path to end suffering through mindfulness and compassion.",
    votes: 19876,
    imageUrl: buddhaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "jane-austen",
    name: "Jane Austen",
    era: "1775-1817 CE",
    title: "Master of Social Satire",
    bio: "I declare after all there is no enjoyment like reading. Novelist who brilliantly satirized Georgian society in works like Pride and Prejudice.",
    votes: 11543,
    imageUrl: austenImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    era: "1879-1955 CE",
    title: "Father of Relativity",
    bio: "Imagination is more important than knowledge. Developed the theory of relativity and revolutionized physics.",
    votes: 15432,
    imageUrl: einsteinImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "hypatia",
    name: "Hypatia of Alexandria",
    era: "c. 350-415 CE",
    title: "Neoplatonist Philosopher & Mathematician",
    bio: "Reserve your right to think. Brilliant scholar and head of the Neoplatonist school in Alexandria.",
    votes: 3456,
    imageUrl: hypatiaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "aristotle",
    name: "Aristotle",
    era: "384-322 BCE",
    title: "Founder of Logic",
    bio: "Student of Plato and teacher of Alexander the Great. Founded formal logic and pioneered empirical science.",
    votes: 9123,
    imageUrl: aristotleImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "teresa-of-avila",
    name: "Teresa of Ávila",
    era: "1515-1582 CE",
    title: "Mystic Reformer & Doctor of the Church",
    bio: "Let nothing disturb you. Spanish mystic who reformed the Carmelite order and wrote spiritual classics like The Interior Castle.",
    votes: 2987,
    imageUrl: teresaAvilaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "malcolm-x",
    name: "Malcolm X",
    era: "1925-1965 CE",
    title: "Black Nationalist Leader",
    bio: "By any means necessary. Transformed from street hustler to powerful advocate for Black liberation and self-determination.",
    votes: 8234,
    imageUrl: malcolmImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "carl-jung",
    name: "Carl Jung",
    era: "1875-1961 CE",
    title: "Founder of Analytical Psychology",
    bio: "Pioneered analytical psychology. Explored archetypes, the collective unconscious, and individuation process.",
    votes: 6543,
    imageUrl: jungImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    era: "1815-1852 CE",
    title: "First Computer Programmer",
    bio: "Wrote the first algorithm intended for machine processing. Visionary who saw computers' potential beyond calculation.",
    votes: 7654,
    imageUrl: adaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "frederick-douglass",
    name: "Frederick Douglass",
    era: "1818-1895 CE",
    title: "Abolitionist & Statesman",
    bio: "Knowledge makes a man unfit to be a slave. Escaped slavery to become America's most powerful orator for freedom.",
    votes: 5432,
    imageUrl: douglassImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "cleopatra",
    name: "Cleopatra VII",
    era: "69-30 BCE",
    title: "Last Pharaoh of Egypt",
    bio: "Brilliant multilingual ruler who commanded armies and allied with Rome to preserve Egyptian independence.",
    votes: 14321,
    imageUrl: cleopatraImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "plato",
    name: "Plato",
    era: "428-348 BCE",
    title: "Philosopher of Ideal Forms",
    bio: "Founded the Academy in Athens. Explored ideal forms of reality and justice in works like The Republic.",
    votes: 10234,
    imageUrl: platoImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "mother-teresa",
    name: "Mother Teresa",
    era: "1910-1997 CE",
    title: "Saint of the Gutters",
    bio: "Not all of us can do great things. But we can do small things with great love. Founded the Missionaries of Charity.",
    votes: 9876,
    imageUrl: motherTeresaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "hannah-arendt",
    name: "Hannah Arendt",
    era: "1906-1975 CE",
    title: "Political Philosopher",
    bio: "The banality of evil. Explored totalitarianism, power, and the human condition in The Origins of Totalitarianism.",
    votes: 3765,
    imageUrl: arendtImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "nikola-tesla",
    name: "Nikola Tesla",
    era: "1856-1943 CE",
    title: "Inventor of AC Electricity",
    bio: "The present is theirs; the future is mine. Pioneered alternating current and wireless technology.",
    votes: 13456,
    imageUrl: teslaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "sappho",
    name: "Sappho",
    era: "c. 630-570 BCE",
    title: "Lyric Poet of Lesbos",
    bio: "Love shook my heart like wind on a mountain. Ancient Greek lyric poet whose fragments influenced Western poetry.",
    votes: 2543,
    imageUrl: sapphoImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "vincent-van-gogh",
    name: "Vincent van Gogh",
    era: "1853-1890 CE",
    title: "Post-Impressionist Master",
    bio: "I feel there is nothing more truly artistic than to love people. Transformed suffering into luminous masterpieces like Starry Night.",
    votes: 17654,
    imageUrl: vanGoghImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "emily-dickinson",
    name: "Emily Dickinson",
    era: "1830-1886 CE",
    title: "Reclusive Poetic Genius",
    bio: "I dwell in Possibility. Innovative poet who explored death, immortality, and nature in nearly 1,800 poems.",
    votes: 6234,
    imageUrl: emilyImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "zora-neale-hurston",
    name: "Zora Neale Hurston",
    era: "1891-1960 CE",
    title: "Harlem Renaissance Anthropologist",
    bio: "I have been in Sorrow's kitchen. Anthropologist and author who celebrated Black Southern culture in Their Eyes Were Watching God.",
    votes: 4123,
    imageUrl: zoraImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "avicenna",
    name: "Avicenna (Ibn Sina)",
    era: "980-1037 CE",
    title: "Persian Polymath & Physician",
    bio: "Father of early modern medicine. His Canon of Medicine was used in universities for over 500 years.",
    votes: 5234,
    imageUrl: avicennaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "dorothy-day",
    name: "Dorothy Day",
    era: "1897-1980 CE",
    title: "Catholic Worker Movement Founder",
    bio: "We have all known the long loneliness. Journalist and activist who founded the Catholic Worker movement to serve the poor.",
    votes: 1876,
    imageUrl: dorothyImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "sun-tzu",
    name: "Sun Tzu",
    era: "544-496 BCE",
    title: "Master Strategist",
    bio: "Supreme excellence consists in breaking the enemy's resistance without fighting. Author of The Art of War, timeless wisdom on strategy.",
    votes: 11987,
    imageUrl: sunTzuImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    era: "c. 570-495 BCE",
    title: "Sacred Mathematician",
    bio: "Number rules the universe. Mystic philosopher who discovered mathematical harmony in music, geometry, and cosmos.",
    votes: 8901,
    imageUrl: pythagorasImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "moses",
    name: "Moses",
    era: "c. 13th century BCE",
    title: "Lawgiver & Prophet",
    bio: "Let my people go. Led the Israelites from slavery to freedom and received the Ten Commandments on Mount Sinai.",
    votes: 16234,
    imageUrl: mosesImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "krishna",
    name: "Krishna",
    era: "c. 3228-3102 BCE (traditional)",
    title: "Divine Teacher",
    bio: "Perform your duty, but do not be attached to the fruits. Central figure of the Bhagavad Gita teaching dharma and devotion.",
    votes: 14987,
    imageUrl: krishnaImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
  },
  {
    id: "hermes-trismegistus",
    name: "Hermes Trismegistus",
    era: "Legendary (Hellenistic period)",
    title: "Thrice-Great Sage",
    bio: "As above, so below. Legendary wisdom keeper combining Egyptian and Greek mysteries, father of alchemy and hermetic philosophy.",
    votes: 7123,
    imageUrl: hermesImage,
    chatReady: true,
    chatUrl: "https://chatgpt.com/g/g-1vf04chMP-jesus-acim",
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
