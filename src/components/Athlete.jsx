import Athletes from './Athletes'

const Athlete = ({ athlete }) => {
  return (
    <div>
      <img src={athlete.profileImage} alt={athlete.firstName} />
      <h3>
        {athlete.firstName} {athlete.lastName}
      </h3>
      <p id="nationality">{athlete.nationality}</p>
    </div>
  )
}

export default Athlete
