import WiseFigureCard from '../WiseFigureCard'
import socratesImage from '@assets/generated_images/Socrates_wise_figure_portrait_b5d3475d.png'

export default function WiseFigureCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <WiseFigureCard
        id="socrates"
        name="Socrates"
        era="469-399 BCE"
        title="Father of Western Philosophy"
        bio="The examined life is the only life worth living. Known for the Socratic method of questioning to stimulate critical thinking."
        votes={15234}
        imageUrl={socratesImage}
        rank={1}
      />
    </div>
  )
}
