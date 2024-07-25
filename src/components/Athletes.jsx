import Athlete from './Athlete'

const Athletes = ({ athletes }) => {
  return (
    <main>
      <h2>Sheffield 2025 Powerlifting Championships</h2>
      <h3>International Powerlifting Federation</h3>
      <section id="list">
        {athletes.map((athlete) => (
          <Athlete key={athlete.id} athlete={athlete} />
        ))}
      </section>
    </main>
  )
}

export default Athletes
