import React from "react";
import { motion } from "framer-motion";
import { Check, Copy, MessageCircle, Star, Sparkles, Target, Heart, Calendar } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const WHATSAPP_NUMERO = "5511973008088";

const getWhatsappUrl = (mensagem: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(mensagem)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const plans = [
  {
    name: "Plano Premium",
    price: "R$ 257,90",
    description: "Experiência premium com acompanhamento completo, personalizado e estratégico para seus resultados.",
    features: ["Plano 100% personalizado para o seu corpo e rotina", "Plano alimentar adaptado ao seu nível de atividade física (sem achismo)", "Alimentação que cabe no seu bolso — sem comidas caras ou difíceis", "Fácil de seguir no dia a dia (sem estratégia impossível)", "Ajustes estratégicos conforme sua evolução", "Lista de compras simples e prática", "Estratégia pensada para rotina corrida", "Acompanhamento próximo"],
    highlight: true,
    whatsappText: "Olá! Quero contratar o plano Premium da V&I Nutri Fit.",
  },
];

const testimonials = [
  {
    name: "Mariana Souza",
    result: "-8kg em 10 semanas",
    text: "A experiência foi impecável. O plano ficou totalmente alinhado à minha rotina e consegui manter consistência sem sofrer.",
  },
  {
    name: "Rafael Lima",
    result: "Mais definição e rotina organizada",
    text: "Visual profissional, atendimento excelente e um plano alimentar realmente personalizado. Fez muita diferença no meu dia a dia.",
  },
  {
    name: "Juliana Costa",
    result: "Constância sem estratégia improvável",
    text: "Finalmente encontrei algo elegante, simples de seguir e pensado para minha realidade. Recomendo muito.",
  },
];

const benefits = [
  { icon: Target, title: "Plano individual", desc: "Cada estratégia é ajustada para seu perfil e sua meta." },
  { icon: Sparkles, title: "Elegância e clareza", desc: "Processo profissional, bonito e fácil de entender." },
  { icon: Calendar, title: "Rotina real", desc: "Planejamento pensado para encaixar no seu dia a dia." },
  { icon: Heart, title: "Mais constância", desc: "Quanto mais viável, maior a chance de manter o resultado." },
];

export default function DietaPersonalizadaSite() {
  const [paginaObrigado, setPaginaObrigado] = React.useState(false);
  const [formData, setFormData] = React.useState({ nome: "", email: "", objetivo: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá! Vim pelo site da V&I Nutri Fit.\nNome: ${formData.nome}\nE-mail: ${formData.email}\nObjetivo:\n${formData.objetivo}`;
    window.location.href = getWhatsappUrl(mensagem);
  };

  if (paginaObrigado) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass max-w-md rounded-2xl p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-3 font-display text-2xl font-bold text-foreground">Pagamento recebido 🎉</h1>
          <p className="mb-6 text-muted-foreground">Agora envie o comprovante no WhatsApp para iniciarmos seu plano personalizado.</p>
          <a href={getWhatsappUrl("Olá! Realizei o pagamento via PIX e gostaria de enviar o comprovante.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105">
            <MessageCircle className="h-4 w-4" /> Enviar comprovante
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Floating WhatsApp */}
      <a href={getWhatsappUrl("Olá! Vim pelo site da V&I Nutri Fit.")} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow transition hover:scale-110">
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>

      {/* Nav */}
      <nav className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-bold tracking-wider text-foreground">V&I <span className="text-gradient-primary">NUTRI FIT</span></span>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#beneficios" className="transition hover:text-primary">Benefícios</a>
            <a href="#planos" className="transition hover:text-primary">Plano</a>
            <a href="#resultados" className="transition hover:text-primary">Resultados</a>
            <a href="#contato" className="transition hover:text-primary">Contato</a>
          </div>
          <a href="#planos" className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105">
            Começar agora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        <div className="bg-gradient-hero absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center md:gap-12 md:py-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary">
              ESTRATÉGIA ALIMENTAR DE ALTO PADRÃO
            </motion.span>
            <motion.h1 variants={fadeUp} className="mb-6 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Pare de falhar em dietas.
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-8 max-w-lg text-base text-muted-foreground md:text-lg">
              Tenha um plano alimentar feito para sua rotina, simples, acessível e possível de seguir.
            </motion.p>
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2 md:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" /> 10 vagas esta semana
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                Atendimento individual
              </span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 md:gap-4">
              <a href="#planos" className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:shadow-glow md:px-7 md:py-3.5 md:text-base">
                Começar agora
              </a>
              <a href={getWhatsappUrl("Olá! Vim pelo site da V&I Nutri Fit.")} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-muted md:px-7 md:py-3.5 md:text-base">
                Falar no WhatsApp
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative order-last">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
            <img src={heroFood} alt="Refeição saudável premium" className="relative rounded-2xl shadow-card w-full h-auto" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 glass rounded-xl p-2 md:p-4">
              <p className="text-lg md:text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground">Personalizado</p>
            </div>
            <div className="absolute -right-2 -top-2 md:-right-4 md:-top-4 glass rounded-xl p-2 md:p-4">
              <p className="text-lg md:text-2xl font-bold text-primary">Premium</p>
              <p className="text-xs text-muted-foreground">Visual profissional</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
            <motion.h2 variants={fadeUp} className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Benefícios</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">Mais do que um plano. Uma experiência alimentar personalizada.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
            <motion.h2 variants={fadeUp} className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Seu Plano Premium</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">Tudo o que você precisa para transformar sua saúde e ter resultados reais</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex justify-center">
            {plans.map((plan) => (
              <motion.div key={plan.name} variants={fadeUp} className={`relative rounded-2xl border p-8 transition w-full max-w-md ${plan.highlight ? "border-primary/40 bg-gradient-card shadow-glow" : "border-border bg-card"}`}>
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
                <p className="mb-1 text-4xl font-bold text-foreground">{plan.price}</p>
                <p className="mb-6 text-xs text-muted-foreground">Você pode pagar via PIX ou cartão (até 6x)</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={getWhatsappUrl(plan.whatsappText)} target="_blank" rel="noopener noreferrer" className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${plan.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border bg-secondary text-secondary-foreground hover:bg-muted"}`}>
                    Contratar agora
                  </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section id="resultados" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
            <motion.h2 variants={fadeUp} className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Resultados</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">Quem escolhe qualidade, percebe a diferença</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-14 grid gap-6 sm:grid-cols-3">
            {[
              ["+120", "plano entregues"],
              ["4.9/5", "média de satisfação"],
              ["Resultados reais", "com rotina possível"],
            ].map(([number, label]) => (
              <motion.div key={label} variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
                <p className="mb-1 text-3xl font-bold text-gradient-primary">{number}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div key={item.name} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{item.result}</span>
                <p className="mb-4 text-sm italic text-muted-foreground">"{item.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Contato</motion.h2>
            <motion.p variants={fadeUp} className="mb-4 text-lg text-muted-foreground">Pronto para começar sua transformação com presença premium?</motion.p>
            <motion.p variants={fadeUp} className="mb-6 text-sm text-muted-foreground">Transforme sua alimentação com uma abordagem elegante, clara e profissional.</motion.p>
            <motion.a variants={fadeUp} href={getWhatsappUrl("Olá! Vim pelo site da V&I Nutri Fit.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary transition hover:underline">
              <MessageCircle className="h-4 w-4" /> Atendimento direto no WhatsApp
            </motion.a>
          </motion.div>
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} onSubmit={handleSubmit} className="space-y-4">
            <motion.input variants={fadeUp} type="text" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            <motion.input variants={fadeUp} type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            <motion.textarea variants={fadeUp} name="objetivo" placeholder="Qual seu objetivo?" value={formData.objetivo} onChange={handleChange} rows={4} required className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            <motion.p variants={fadeUp} className="text-xs text-muted-foreground">
              Ao enviar, o WhatsApp será aberto com sua mensagem pronta para contato.
            </motion.p>
            <motion.button variants={fadeUp} type="submit" className="w-full rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02] hover:shadow-glow">
              Falar no WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 V&I NUTRI FIT — Plano alimentar personalizado com sofisticação, estratégia e resultado.</p>
        <p className="mt-3 text-xs text-muted-foreground/80">Este serviço não substitui acompanhamento médico ou nutricional profissional. As orientações fornecidas são baseadas em hábitos alimentares e estilo de vida.</p>
      </footer>
    </div>
  );
}
