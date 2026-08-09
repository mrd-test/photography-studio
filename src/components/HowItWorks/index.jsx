import step1 from '../../assets/steps/step1.png'
import step2 from '../../assets/steps/step2.png'
import step3 from '../../assets/steps/step3.png'
import './index.css'

const STEPS = [
  { img: step1, alt: 'Шаг 1 — Выбирайте локацию и время' },
  { img: step2, alt: 'Шаг 2 — Получайте положительные эмоции от съёмки' },
  { img: step3, alt: 'Шаг 3 — Публикуйте фото прямо из нашего приложения' },
]

const HowItWorks = () => {
  return (
    <section className="steps">
      <div className="steps__wave steps__wave--top"/>
      <div className="steps__circle steps__circle--yellow"/>
      <div className="container">
        <div className="steps__grid">
          {STEPS.map((s, i) => (
            <div className="steps__card" key={i}>
              <img src={s.img} alt={s.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="steps__wave steps__wave--bottom"/>
    </section>
  )
}


export default HowItWorks