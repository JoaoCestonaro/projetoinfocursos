import { useMemo, useState } from 'react'
import { LuSparkles } from 'react-icons/lu'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'
import '../styles/pages/courses.css'

const filters = ['Todos', 'Iniciante', 'Intermediário', 'Avançado']

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'Todos') {
      return courses
    }
    return courses.filter((course) => course.level === activeFilter)
  }, [activeFilter])

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

        <div className="course-toolbar" role="toolbar" aria-label="Filtrar cursos por nível">
          <div className="course-filters" role="tablist">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`chip${activeFilter === filter ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-3 course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

