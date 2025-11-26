import { useState } from 'react'
import { LuMail, LuPhone, LuVideo } from 'react-icons/lu'
import IconCircle from '../components/IconCircle.jsx'
import '../styles/pages/contact.css'

const contactStats = [
  { id: 'response', label: 'Tempo médio de resposta', value: '< 12h úteis' },
  { id: 'students', label: 'Alunos atendidos por mês', value: '8.400+' },
  { id: 'channels', label: 'Canais simultâneos', value: '6 formatos' },
]

const contactOptions = [
  {
    id: 'email',
    title: 'Email dedicado',
    description: 'Suporte completo para dúvidas sobre assinatura, provas práticas e integrações.',
    highlight: 'atendimento@infocursos.com',
    icon: LuMail,
    availability: 'Resposta em até 12h',
  },
  {
    id: 'phone',
    title: 'Telefone e WhatsApp',
    description: 'Equipe disponível para orientações rápidas e acionamento de mentores.',
    highlight: '(11) 99999-9999',
    icon: LuPhone,
    availability: 'Seg à sex — 08h às 20h',
  },
  {
    id: 'meetings',
    title: 'Sessões estratégicas',
    description: 'Converse com especialistas para desenhar programas corporativos e mentorias.',
    highlight: 'via Meet ou Zoom',
    icon: LuVideo,
    availability: 'Agendamento em até 48h',
  },
]

const supportTracks = [
  {
    title: 'Mentorias e trilhas personalizadas',
    description: 'Diagnóstico da sua evolução, análise de portfólio e recomendações de tecnologias prioritárias.',
    badges: ['Feedback de projeto', 'Roadmap guiado'],
    contact: 'especialistas@infocursos.com',
  },
  {
    title: 'Parcerias e programas corporativos',
    description: 'Estruture academias internas, semanas de inovação ou torneios de tecnologia sob medida.',
    badges: ['Onboarding dedicado', 'SLA customizado'],
    contact: 'parcerias@infocursos.com',
  },
]

const availability = [
  { label: 'Suporte geral', hours: 'Seg à sex — 08h às 20h BRT', channel: 'Chat, email e telefone' },
  { label: 'Mentoria premium', hours: 'Agenda em até 72h', channel: 'Zoom ou Meet' },
  { label: 'Atendimento internacional', hours: '24h em inglês e espanhol', channel: 'Email e vídeo chamadas' },
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="page-section">
      <div className="container contact-shell">
        <div className="contact-hero">
          <span className="eyebrow">Central de Relacionamento</span>
          <h1>Converse com especialistas e acelere seu próximo passo em tecnologia</h1>
          <p>
            Nossa equipe combina suporte técnico, mentoria e consultoria estratégica para estudantes, times educacionais e empresas.
            Escolha o canal ideal e receba um plano de ação personalizado.
          </p>
          <div className="contact-stats">
            {contactStats.map((stat) => (
              <div key={stat.id} className="contact-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option) => (
            <div key={option.id} className="contact-card">
              <IconCircle icon={option.icon} />
              <div className="contact-card__header">
                <strong>{option.title}</strong>
                <span>{option.availability}</span>
              </div>
              <p>{option.description}</p>
              <span className="highlight">{option.highlight}</span>
            </div>
          ))}
        </div>

        <div className="contact-split">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <div className="field">
                <label htmlFor="name">Nome completo</label>
                <input type="text" id="name" name="name" placeholder="Ana Souza" required />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="voce@empresa.com" required />
              </div>
              <div className="field">
                <label htmlFor="company">Empresa (opcional)</label>
                <input type="text" id="company" name="company" placeholder="Seu time ou organização" />
              </div>
              <div className="field">
                <label htmlFor="topic">Qual assunto?</label>
                <select id="topic" name="topic" defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="planos">Planos, preços e assinaturas</option>
                  <option value="suporte">Suporte e orientação técnica</option>
                  <option value="parcerias">Parcerias, eventos e networking</option>
                  <option value="mentorias">Mentorias personalizadas</option>
                  <option value="carreiras">Consultoria de carreira</option>
                  <option value="corporativo">Programas corporativos</option>
                  <option value="geral">Assuntos gerais</option>
                </select>
              </div>
            </div>

            <fieldset className="contact-preferences">
              <legend>Preferência de retorno</legend>
              <label>
                <input type="radio" name="preference" value="email" defaultChecked />
                Email em até 12h úteis
              </label>
              <label>
                <input type="radio" name="preference" value="call" />
                Ligação agendada
              </label>
              <label>
                <input type="radio" name="preference" value="video" />
                Reunião por vídeo
              </label>
            </fieldset>

            <div className="field">
              <label htmlFor="message">Contexto da sua solicitação</label>
              <textarea
                id="message"
                name="message"
                placeholder="Compartilhe detalhes do desafio, metas e prazos. Quanto mais contexto, melhor o plano que enviaremos."
                required
              />
            </div>

            <label className="contact-optin">
              <input type="checkbox" name="optin" defaultChecked />
              Quero receber guias práticos e convites para eventos exclusivos do InfoCursos.
            </label>

            <div className="contact-form__actions">
              <button type="submit" className="btn btn-primary">
                Enviar mensagem
              </button>
              <p>{submitted ? 'Recebemos sua mensagem! Responderemos em breve.' : 'Respondemos em até 12h úteis.'}</p>
            </div>
          </form>

          <div className="contact-support">
            <div className="contact-support__intro">
              <span className="eyebrow">Planos sob medida</span>
              <h2>Especialistas que acompanham cada etapa</h2>
              <p>
                Após entender seu contexto, conectamos você ao squad ideal para mentoria, suporte técnico ou desenho de programas corporativos.
                Veja onde podemos ajudar agora:
              </p>
            </div>

            <div className="contact-support__tracks">
              {supportTracks.map((track) => (
                <div key={track.title} className="support-track">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <div className="support-track__badges">
                    {track.badges.map((badge) => (
                      <span key={badge}>{badge}</span>
                    ))}
                  </div>
                  <button type="button" className="btn btn-outline">
                    Falar com {track.contact}
                  </button>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <h3>Disponibilidade em cada canal</h3>
              <ul>
                {availability.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.hours}</span>
                    <span>{item.channel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

