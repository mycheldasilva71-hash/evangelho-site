import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EvangelhoSite() {
  const [modalAberto, setModalAberto] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const aoRolar = () => {
      setRolou(window.scrollY > 50)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1.15 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{
            transform: `translateY(${scrollY * 0.6}px)`,
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,.75), rgba(0,0,0,.92)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1600&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />

        <header
          className={`fixed top-0 left-0 w-full z-20 border-b border-yellow-500/20 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
            rolou ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-wide text-yellow-400">
                O EVANGELHO
              </h1>
              <p className="text-sm tracking-[0.3em] text-zinc-300">
                NÃO PREGADO
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="flex flex-col justify-center gap-1.5 w-9 h-9 group"
                aria-label="Abrir menu"
              >
                <span className={`block h-0.5 w-7 bg-zinc-200 group-hover:bg-yellow-400 transition-all duration-300 ${menuAberto ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-7 bg-zinc-200 group-hover:bg-yellow-400 transition-all duration-300 ${menuAberto ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-7 bg-zinc-200 group-hover:bg-yellow-400 transition-all duration-300 ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>

              <AnimatePresence>
                {menuAberto && (
                  <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 top-14 flex flex-col gap-1 text-sm uppercase tracking-wider text-zinc-300 bg-black/90 border border-yellow-500/20 rounded-2xl backdrop-blur-sm p-4 min-w-[180px]"
                  >
                    <a onClick={() => setMenuAberto(false)} href="#" className="hover:text-yellow-400 transition py-2 px-2 rounded-lg hover:bg-white/5">Início</a>
                    <a onClick={() => setMenuAberto(false)} href="#videos" className="hover:text-yellow-400 transition py-2 px-2 rounded-lg hover:bg-white/5">Vídeos</a>
                    <a onClick={() => setMenuAberto(false)} href="#estudos" className="hover:text-yellow-400 transition py-2 px-2 rounded-lg hover:bg-white/5">Estudos</a>
                    <a onClick={() => setMenuAberto(false)} href="#sobre" className="hover:text-yellow-400 transition py-2 px-2 rounded-lg hover:bg-white/5">Sobre</a>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Bem-vindo ao propósito
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mb-6">
              O EVANGELHO QUE
              <span className="text-yellow-400 block">
                MUITOS ESQUECERAM
              </span>
              DE PREGAR.
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-8">
              Voltando às Escrituras, à verdade e ao verdadeiro evangelho de Cristo.
              Conteúdo bíblico, estudos, reflexões e vídeos para fortalecer sua fé.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@OEvangelhoN%C3%A3opregado/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl transition inline-block text-center"
              >
                Assistir Conteúdo
              </a>

              <button
                onClick={() => setModalAberto(true)}
                className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-2xl transition"
              >
                Conhecer Mais
              </button>
            </div>
          </div>

          <div className="bg-black/50 border border-yellow-500/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <p className="text-yellow-400 text-5xl mb-6">“</p>

            <p className="text-2xl leading-relaxed text-zinc-200 mb-6">
              Porque não me envergonho do evangelho, porque é o poder de Deus para salvação de todo aquele que crê.
            </p>

            <p className="text-yellow-400 font-semibold tracking-widest uppercase">
              Romanos 1:16
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-yellow-400 text-sm tracking-[0.3em] uppercase">
          Role para baixo
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Conteúdo em destaque
            </p>

            <h3 className="text-5xl font-black">
              VÍDEOS & ESTUDOS
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'A Verdade Sobre a Graça',
                subtitle: 'O que quase ninguém explica.',
              },
              {
                title: 'Soberania de Deus',
                subtitle: 'A vontade humana e o propósito eterno.',
              },
              {
                title: 'O Evangelho Não Pregado',
                subtitle: 'A maior distorção dos nossos dias.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-black border border-white/10 hover:border-yellow-400/40 rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-end p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.5),transparent_60%)]" />

                  <div className="relative z-10">
                    <h4 className="text-3xl font-black leading-tight mb-3 group-hover:text-yellow-400 transition">
                      {item.title}
                    </h4>

                    <p className="text-zinc-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTUDOS */}
      <section id="estudos" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Estudos bíblicos
            </p>

            <h3 className="text-5xl font-black mb-6">
              CONHEÇA MAIS AS ESCRITURAS
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Estudos sobre os atributos de Deus, graça, predestinação, soberania, evangelho, falsas doutrinas e curiosidades bíblicas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Graça',
                'Predestinação',
                'Evangelho',
                'Atributos de Deus',
                'Soberania',
                'Curiosidades Bíblicas',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-yellow-500/20 bg-zinc-950 rounded-2xl p-5 hover:border-yellow-400 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-zinc-900 border border-yellow-500/20 rounded-[2rem] p-10 shadow-2xl">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Versículo do dia
            </p>

            <p className="text-3xl leading-relaxed font-light text-zinc-100 mb-6">
              “Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.”
            </p>

            <p className="text-yellow-400 font-bold tracking-widest uppercase">
              Romanos 5:8
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Sobre o projeto
          </p>

          <h3 className="text-5xl font-black mb-8">
            UM CHAMADO PARA VOLTAR À VERDADE
          </h3>

          <p className="text-zinc-400 text-xl leading-relaxed">
            Este projeto nasceu com o propósito de anunciar o evangelho bíblico de forma fiel às Escrituras. Em um tempo onde muitos distorcem a verdade, o objetivo é proclamar Cristo, sua graça e sua soberania acima de tudo.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center bg-black">
        <h4 className="text-yellow-400 text-2xl font-black mb-2">
          O EVANGELHO NÃO PREGADO
        </h4>

        <p className="text-zinc-500">
          © 2026 • Todos os direitos reservados
        </p>
      </footer>

      {/* MODAL "CONHECER MAIS" */}
      <AnimatePresence>
        {modalAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalAberto(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-black/60 border border-yellow-500/30 rounded-3xl p-10 backdrop-blur-xl shadow-2xl text-center"
            >
              <button
                onClick={() => setModalAberto(false)}
                className="absolute top-5 right-6 text-zinc-400 hover:text-yellow-400 text-2xl leading-none transition"
              >
                ×
              </button>

              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
                Conheça mais
              </p>

              {/*
                EDITE O TEXTO ABAIXO — é aqui que você escreve o que
                quer que apareça dentro do quadrado quando a pessoa
                clicar em "Conhecer Mais".
              */}
              <p className="text-zinc-200 text-xl leading-relaxed">
                Este site nasceu com um propósito claro: resgatar a verdadeira experiência da pregação e do ensino direto de Deus. Vivemos um tempo em que muitas igrejas se afastaram da Palavra, pregando heresias e meias-verdades que confortam, mas não salvam. Aqui você encontrará um chamado sincero para voltar às Escrituras, denunciar o erro com amor e firmeza, e proclamar o evangelho completo, sem concessões e sem medo.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
