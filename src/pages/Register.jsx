import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/pages/auth.css'

const Register = () => {
  const [signupComplete, setSignupComplete] = useState(false)
  const [surveySubmitted, setSurveySubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSignupComplete(true)
  }

  const handleSurveySubmit = (event) => {
    event.preventDefault()
    setSurveySubmitted(true)
  }

  return (
    <section className="page-section">
      <div className="container auth-shell">
        <div className="auth-card">
          <div>
            <h1>Criar conta gratuita</h1>
          </div>

          <p className="auth-description">
            Tenha acesso a trilhas completas, comunidade ativa e materiais extras para acelerar sua jornada na tecnologia.
          </p>

          {!signupComplete ? (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="register-name">Nome completo</label>
                <input type="text" id="register-name" name="name" placeholder="Como quer ser chamado?" required />
              </div>

              <div className="field">
                <label htmlFor="register-email">E-mail</label>
                <input type="email" id="register-email" name="email" placeholder="seuemail@email.com" required />
              </div>

              <div className="field">
                <label htmlFor="register-password">Senha</label>
                <input type="password" id="register-password" name="password" placeholder="Crie uma senha segura" required />
              </div>

              <div className="field">
                <label htmlFor="register-confirm">Confirmar senha</label>
                <input
                  type="password"
                  id="register-confirm"
                  name="passwordConfirm"
                  placeholder="Repita sua senha"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Criar conta
              </button>
            </form>
          ) : (
            <div className="auth-success">
              <h2>Conta criada! 🎉</h2>
              <p>
                Agora queremos conhecer melhor seu estilo de aprendizagem para liberar recomendações de trilhas, desafios e comunidades feitas
                para você.
              </p>
              <span>Leva menos de 1 minuto.</span>
            </div>
          )}

          <div className="auth-actions">
            <span>
              Já possui conta? <NavLink to="/login">Entrar</NavLink>
            </span>
          </div>

          {signupComplete && (
            <div className="onboarding-survey">
              <div className="survey-header">
                <span className="eyebrow">Questionário de personalidade</span>
                <h2>Descubra seu perfil InfoCursos</h2>
                <p>Responda para calibrarmos sugestões de trilhas, mentores e squads de estudo que combinam com você.</p>
              </div>

              <form className="survey-form" onSubmit={handleSurveySubmit}>
                <div className="survey-question">
                  <span>Quais áreas despertam mais curiosidade?</span>
                  <div className="survey-options survey-options--grid">
                    <label>
                      <input type="checkbox" name="focus" value="criativo" />
                      Design e experiências interativas
                    </label>
                    <label>
                      <input type="checkbox" name="focus" value="resolutor" />
                      Solução de problemas com código
                    </label>
                    <label>
                      <input type="checkbox" name="focus" value="analitico" />
                      Dados, insights e IA
                    </label>
                    <label>
                      <input type="checkbox" name="focus" value="estrategico" />
                      Liderança técnica e produto
                    </label>
                  </div>
                </div>

                <div className="survey-question">
                  <span>Como você aprende melhor?</span>
                  <div className="survey-options">
                    <label>
                      <input type="radio" name="learning" value="visual" defaultChecked />
                      Aulas visuais e passo a passo
                    </label>
                    <label>
                      <input type="radio" name="learning" value="hands-on" />
                      Projetos práticos imediatos
                    </label>
                    <label>
                      <input type="radio" name="learning" value="comunidade" />
                      Comunidades e pair programming
                    </label>
                  </div>
                </div>

                <div className="survey-question">
                  <label htmlFor="persona">Qual destas descrições representa melhor você?</label>
                  <select id="persona" name="persona" defaultValue="">
                    <option value="" disabled>
                      Escolha uma opção
                    </option>
                    <option value="visionario">Visionário: gosta de imaginar futuros e liderar iniciativas.</option>
                    <option value="executor">Executor: prefere planos claros e entregas rápidas.</option>
                    <option value="mentor">Mentor: aprende ensinando e conectando pessoas.</option>
                    <option value="explorador">Explorador: está sempre testando tecnologias novas.</option>
                  </select>
                </div>

                <div className="survey-actions">
                  <button type="submit" className="btn btn-outline">
                    Enviar perfil
                  </button>
                  <p>{surveySubmitted ? 'Perfil registrado! Prepare-se para um dashboard sob medida.' : 'Isso ativa recomendações alinhadas ao seu estilo.'}</p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Register

