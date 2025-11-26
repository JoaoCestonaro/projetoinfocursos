import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'
import '../styles/pages/courses.css'

const Courses = () => {

  return (
    <section className="page-section">
      <div className="container">
        <div className="course-intro">
          <h1>Cursos Disponíveis</h1>
          <p>
            Explore cursos criados por especialistas para dominar desenvolvimento, 
            dados, nuvem e inteligência artificial. Escolha o nível ideal e siga um roteiro com desafios reais, mentorias e certificados verificados.
          </p>
        </div>

        <div className="grid grid-3 course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

