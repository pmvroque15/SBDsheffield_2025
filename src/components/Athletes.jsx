import Athlete from './Athlete'

const Athletes = ({ athletes }) => {
  return (
    <main>
      <h3 id="headtitle">International Powerlifting Federation</h3>
      <section id="list">
        {athletes.map((athlete) => (
          <Athlete key={athlete.id} athlete={athlete} />
        ))}
      </section>
    </main>
  )
}

export default Athletes
