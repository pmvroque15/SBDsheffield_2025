import Athletes from './Athletes'

const Athlete = ({ athlete }) => {
  return (
    <div id="athletes-info">
      <img src={athlete.profileImage} alt={athlete.firstName} />
      <h3>
        <a id="athlete-link" href={athlete.link}>
          {athlete.firstName} {athlete.lastName}
        </a>
      </h3>
      <p>{athlete.weightClass} kg</p>
      <p id="nationality">{athlete.nationality}</p>
    </div>
  )
}

export default Athlete
