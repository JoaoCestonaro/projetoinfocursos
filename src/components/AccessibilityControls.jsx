import { useEffect, useMemo, useState } from 'react'
import { LuRefreshCw, LuType, LuAccessibility, LuMoonStar, LuSun } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext.jsx'

const FONT_OPTIONS = [0.95, 1, 1.05, 1.1]

const getStoredValue = (key, defaultValue) => {
  if (typeof window === 'undefined') return defaultValue
  const stored = window.localStorage.getItem(key)
  return stored ?? defaultValue
}

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [fontScale, setFontScale] = useState(() => Number(getStoredValue('infocursos-font-scale', '1')))
  const { theme, toggleTheme } = useTheme()
  const isLightTheme = theme === 'light'

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale))
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('infocursos-font-scale', String(fontScale))
    }
  }, [fontScale])

  const canIncrease = useMemo(() => fontScale < FONT_OPTIONS[FONT_OPTIONS.length - 1], [fontScale])
  const canDecrease = useMemo(() => fontScale > FONT_OPTIONS[0], [fontScale])

  const handleIncreaseFont = () => {
    if (canIncrease) {
      const index = FONT_OPTIONS.findIndex((value) => value === fontScale)
      setFontScale(FONT_OPTIONS[index + 1])
    }
  }

  const handleDecreaseFont = () => {
    if (canDecrease) {
      const index = FONT_OPTIONS.findIndex((value) => value === fontScale)
      setFontScale(FONT_OPTIONS[index - 1])
    }
  }

  const handleReset = () => {
    setFontScale(1)
    if (!isLightTheme) {
      toggleTheme()
    }
  }

  const handleToggle = () => {
    setIsOpen((state) => !state)
  }

  const handleOpenVlibras = () => {
    const button = document.querySelector('[vw-access-button] button, [vw-access-button]')
    if (button) {
      button.click()
    }
  }

  return (
    <div className={`accessibility-drawer${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="accessibility-tab"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={handleToggle}
      >
        <LuAccessibility size={20} />
        <span>Acessibilidade</span>
      </button>

      <aside id="accessibility-panel" className="accessibility-panel" aria-hidden={!isOpen}>
        <button type="button" className="accessibility-button" onClick={handleReset} title="Restaurar padrões">
          <LuRefreshCw size={18} />
          <span>Resetar</span>
        </button>

        <div className="accessibility-group" role="group" aria-label="Controle de fontes">
          <span className="accessibility-label">
            <LuType size={18} /> Tamanho
          </span>
          <div className="accessibility-actions">
            <button
              type="button"
              className="accessibility-button"
              onClick={handleDecreaseFont}
              disabled={!canDecrease}
              title="Diminuir fonte"
            >
              A-
            </button>
            <span className="accessibility-value">{Math.round(fontScale * 100)}%</span>
            <button
              type="button"
              className="accessibility-button"
              onClick={handleIncreaseFont}
              disabled={!canIncrease}
              title="Aumentar fonte"
            >
              A+
            </button>
          </div>
        </div>

        <div className="accessibility-group" role="group" aria-label="Contraste de tema">
          <span className="accessibility-label">
            {isLightTheme ? <LuMoonStar size={18} /> : <LuSun size={18} />} Contraste
          </span>
          <button type="button" className="accessibility-button" onClick={toggleTheme}>
            {isLightTheme ? 'Ativar modo escuro' : 'Ativar modo claro'}
          </button>
        </div>

        <div className="accessibility-group">
          <span className="accessibility-label">Tradução em Libras</span>
          <p className="accessibility-hint">Clique no botão abaixo para abrir o assistente VLibras.</p>
          <button type="button" className="accessibility-button" onClick={handleOpenVlibras}>
            Ativar VLibras
          </button>
        </div>
      </aside>
    </div>
  )
}

export default AccessibilityControls
