import Athletes from './Athletes'

const Athlete = ({ athlete }) => {
  return (
    <div id="athletes-profile">
      <img src={athlete.profileImage} alt={athlete.firstName} />
      <section id="athlete-info">
        <a id="athlete-link" href={athlete.link} target="_blank">
          {athlete.firstName} {athlete.lastName}
        </a>
        <p id="athlete-weightClass">{athlete.weightClass} KG</p>
        <p id="athlete-nationality">
          <img id="athlete-flag" src={athlete.flag}></img> {athlete.nationality}
        </p>
      </section>
    </div>
  )
}

export default Athlete
