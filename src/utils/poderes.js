// utils/poderes.js

export const poderes = [
  // ---------------------- Bélico ----------------------
  {
    nome: "Tempestade Elétrica",
    descricao: "Gera descargas elétricas em área",
    classificacao: "Bélico",
    defesa: "Isolamento Elétrico: neutraliza descargas elétricas próximas"
  },
  {
    nome: "Rajada de Fogo",
    descricao: "Dispara chamas intensas em direção aos inimigos",
    classificacao: "Bélico",
    defesa: "Extintor Avançado: extingue chamas antes de atingir"
  },
  {
    nome: "Gelo Abrasador",
    descricao: "Congela o ambiente ao redor, causando dano",
    classificacao: "Bélico",
    defesa: "Aquecedor Local: mantém a temperatura estável e evita congelamento"
  },
  {
    nome: "Explosão Cinética",
    descricao: "Cria ondas de impacto poderosas",
    classificacao: "Bélico",
    defesa: "Amortecedor de Impacto: absorve e dissipa energia cinética"
  },
  {
    nome: "Sopro Congelante",
    descricao: "Congela inimigos com um sopro gelado",
    classificacao: "Bélico",
    defesa: "Barreira Térmica: mantém temperatura corporal estável"
  },
  {
    nome: "Rajada Sônica",
    descricao: "Emite ondas sonoras destrutivas",
    classificacao: "Bélico",
    defesa: "Protetores Auriculares Avançados: neutralizam ondas sonoras"
  },
  {
    nome: "Fogo Azul",
    descricao: "Chamas mais intensas e perigosas",
    classificacao: "Bélico",
    defesa: "Escudo Ignífugo: resiste a chamas extremas"
  },
  {
    nome: "Chicote de Energia",
    descricao: "Gera um chicote de pura energia para combate",
    classificacao: "Bélico",
    defesa: "Campo Dissipador: dispersa energia antes do contato"
  },
  {
    nome: "Raio Repulsivo",
    descricao: "Expulsa inimigos com energia",
    classificacao: "Bélico",
    defesa: "Ancoragem Estática: impede deslocamento por forças externas"
  },
  {
    nome: "Raios Paralizantes",
    descricao: "Atordoa inimigos com eletricidade",
    classificacao: "Bélico",
    defesa: "Traje Condutor: canaliza energia e evita paralisia"
  },
  
  // ---------------------- Raro ----------------------
  {
    nome: "Olhos Laser",
    descricao: "Dispara lasers pelos olhos",
    classificacao: "Raro",
    defesa: "Óculos Refletivos: reflete lasers e reduz dano"
  },
  {
    nome: "Invisibilidade",
    descricao: "Fica invisível temporariamente",
    classificacao: "Raro",
    defesa: "Sensores Térmicos: detecta inimigos invisíveis"
  },
  {
    nome: "Força Sobrehumana",
    descricao: "Aumenta a força física drasticamente",
    classificacao: "Raro",
    defesa: "Exoesqueleto Reforçado: neutraliza força extra"
  },
  {
    nome: "Escudo de Energia",
    descricao: "Cria barreiras protetoras ao redor",
    classificacao: "Raro",
    defesa: "Campo Anti-Energia: anula escudos próximos"
  },
  {
    nome: "Campos de Força",
    descricao: "Proteção ao redor de si mesmo",
    classificacao: "Raro",
    defesa: "Disruptor de Campo: desativa campos de força temporariamente"
  },
  {
    nome: "Transformação",
    descricao: "Muda sua forma física temporariamente",
    classificacao: "Raro",
    defesa: "Detector Molecular: identifica e neutraliza formas alteradas"
  },
  {
    nome: "Duplicação",
    descricao: "Cria clones temporários de si mesmo",
    classificacao: "Raro",
    defesa: "Campo Anti-Clonagem: desfaz clones instantaneamente"
  },
  {
    nome: "Manipulação de Plantas",
    descricao: "Controla a vegetação ao redor",
    classificacao: "Raro",
    defesa: "Herbicida Concentrado: impede controle vegetal"
  },
  {
    nome: "Luz Ofuscante",
    descricao: "Emite flashes cegantes",
    classificacao: "Raro",
    defesa: "Óculos Fotônicos: neutraliza ofuscamento"
  },
  {
    nome: "Visão de Raio-X",
    descricao: "Enxerga através de objetos",
    classificacao: "Raro",
    defesa: "Blindagem Radiológica: bloqueia visão de raio-X"
  },
  
  // ---------------------- Alto risco ----------------------
  {
    nome: "Manipulação da Água",
    descricao: "Controla corpos d'água próximos",
    classificacao: "Alto risco",
    defesa: "Barreira Hidrofóbica: impede controle da água"
  },
  {
    nome: "Controle Mental",
    descricao: "Influência pensamentos de outros",
    classificacao: "Alto risco",
    defesa: "Amuleto Psíquico: protege mente de intrusão"
  },
  {
    nome: "Manipulação da Gravidade",
    descricao: "Altera a gravidade local",
    classificacao: "Alto risco",
    defesa: "Campo Anti-Gravitacional: mantém gravidade normal"
  },
  {
    nome: "Pele de Diamante",
    descricao: "Torna a pele extremamente resistente",
    classificacao: "Alto risco",
    defesa: "Corrosivo Avançado: desgasta camadas externas"
  },
  {
    nome: "Chuva Ácida",
    descricao: "Invoca chuva corrosiva sobre inimigos",
    classificacao: "Alto risco",
    defesa: "Capa Química: neutraliza ácidos"
  },
  {
    nome: "Fúria Animal",
    descricao: "Aumenta agilidade e força como um animal selvagem",
    classificacao: "Alto risco",
    defesa: "Tranquilizante Avançado: reduz agressividade"
  },
  {
    nome: "Campo Anti-Força",
    descricao: "Reduz a força dos inimigos próximos",
    classificacao: "Alto risco",
    defesa: "Amplificador Muscular: mantém força apesar do campo"
  },
  {
    nome: "Manipulação de Areia Negra",
    descricao: "Areia altamente corrosiva controlada à distância",
    classificacao: "Alto risco",
    defesa: "Barreira Blindada: protege contra areia corrosiva"
  },
  {
    nome: "Manipulação de Chamas Negras",
    descricao: "Cria chamas sombrias perigosas",
    classificacao: "Alto risco",
    defesa: "Escudo Ignífugo Avançado: resiste a chamas negras"
  },
  
  // ---------------------- Lendário ----------------------
  {
    nome: "Teletransporte",
    descricao: "Se move instantaneamente para outro ponto",
    classificacao: "Lendário",
    defesa: "Campo Anti-Teleporte: impede deslocamento instantâneo em uma área"
  },
  {
    nome: "Cura Instantânea",
    descricao: "Recupera ferimentos rapidamente",
    classificacao: "Lendário",
    defesa: "Bloqueio Vital: impede regeneração temporariamente"
  },
  {
    nome: "Regeneração Avançada",
    descricao: "Cura lesões graves rapidamente",
    classificacao: "Lendário",
    defesa: "Antídoto Molecular: bloqueia regeneração acelerada"
  },
  {
    nome: "Intangibilidade",
    descricao: "Passa através de objetos sólidos",
    classificacao: "Lendário",
    defesa: "Campo de Ancoragem: impede passagem de objetos"
  },
  {
    nome: "Controle do Tempo",
    descricao: "Acelera ou desacelera o tempo local",
    classificacao: "Lendário",
    defesa: "Estabilizador Temporal: mantém fluxo temporal constante"
  },
  {
    nome: "Telecinese",
    descricao: "Move objetos à distância",
    classificacao: "Lendário",
    defesa: "Campo Anti-Movimento: bloqueia manipulação de objetos"
  },
  {
    nome: "Campo Anti-Magia",
    descricao: "Bloqueia poderes místicos ao redor",
    classificacao: "Lendário",
    defesa: "Amplificador Místico: permite contornar bloqueios de magia"
  },
  {
    nome: "Salto Dimensional",
    descricao: "Salta através de pequenas distâncias dimensionais",
    classificacao: "Lendário",
    defesa: "Ancoragem Dimensional: impede deslocamento entre dimensões"
  },
  {
    nome: "Manipulação do Fogo Negro",
    descricao: "Chamas sombrias extremamente perigosas",
    classificacao: "Lendário",
    defesa: "Escudo Absoluto: resiste a qualquer tipo de chamas"
  },
  {
    nome: "Mestre Elemental",
    descricao: "Controle total de todos os elementos",
    classificacao: "Lendário",
    defesa: "Barreira Elemental: neutraliza manipulação elemental"
  },
  {
    nome: "Viagem Espacial Instantânea",
    descricao: "Move-se instantaneamente para qualquer ponto do planeta",
    classificacao: "Lendário",
    defesa: "Campo Global: impede transporte instantâneo de grandes distâncias"
  },
  {
    nome: "Manipulação da Realidade",
    descricao: "Altera aspectos físicos da realidade",
    classificacao: "Lendário",
    defesa: "Campo Estático: mantém a realidade local inalterada"
  },
  {
    nome: "Domínio Mental Supremo",
    descricao: "Controla totalmente a mente de outros",
    classificacao: "Lendário",
    defesa: "Amuleto Psíquico Avançado: bloqueia controle mental"
  },
  {
    nome: "Invocação de Criaturas Lendárias",
    descricao: "Chama criaturas poderosas para lutar",
    classificacao: "Lendário",
    defesa: "Barreira de Contenção: impede entrada de criaturas invocadas"
  },
  {
    nome: "Olhos que Veem Tudo",
    descricao: "Percebe eventos distantes em tempo real",
    classificacao: "Lendário",
    defesa: "Campo de Ocultação: impede que sejam vistos remotamente"
  },
  {
    nome: "Barreira Dimensional",
    descricao: "Cria barreira entre dimensões",
    classificacao: "Lendário",
    defesa: "Portal de Negação: cancela barreiras dimensionais"
  },
  {
    nome: "Manipulação da Energia Vital",
    descricao: "Controla a vida de seres ao redor",
    classificacao: "Lendário",
    defesa: "Amuleto Vital: protege a energia vital do usuário"
  },
  {
    nome: "Ressurreição Temporária",
    descricao: "Traz um aliado de volta à vida por um curto período",
    classificacao: "Lendário",
    defesa: "Campo de Limite de Vida: impede ressurreição externa"
  },
  {
    nome: "Aura de Destruição",
    descricao: "Campo que destrói tudo ao redor",
    classificacao: "Lendário",
    defesa: "Escudo de Contenção Absoluta: protege contra destruição"
  },
  {
    nome: "Olhar de Eternidade",
    descricao: "Paralisa inimigos por um tempo considerável",
    classificacao: "Lendário",
    defesa: "Máscara de Proteção: neutraliza efeitos paralisantes"
  },
  {
    nome: "Controle do Universo Local",
    descricao: "Manipula leis físicas de uma área",
    classificacao: "Lendário",
    defesa: "Âncora Universal: mantém física local inalterada"
  },
  {
    nome: "Voo Superluminal",
    descricao: "Move-se mais rápido que a luz por curtas distâncias",
    classificacao: "Lendário",
    defesa: "Campo de Aceleração Inversa: reduz velocidade extrema"
  },
  {
    nome: "Campo de Gravidade Absoluta",
    descricao: "Aumenta a gravidade local de forma extrema",
    classificacao: "Lendário",
    defesa: "Antigravitador: mantém gravidade normal"
  },
  {
    nome: "Raios Cósmicos",
    descricao: "Invoca energia cósmica devastadora",
    classificacao: "Lendário",
    defesa: "Escudo Cósmico: neutraliza energia cósmica"
  },
  {
    nome: "Transmutação Total",
    descricao: "Transforma materiais em outros",
    classificacao: "Lendário",
    defesa: "Campo de Estabilidade: impede alteração de matéria"
  },
  {
    nome: "Criação de Portais",
    descricao: "Abre portais para outras dimensões",
    classificacao: "Lendário",
    defesa: "Bloqueador Dimensional: impede abertura de portais"
  },
  {
    nome: "Manipulação da Matéria",
    descricao: "Controla objetos e seres a nível molecular",
    classificacao: "Lendário",
    defesa: "Campo Molecular Estável: impede alteração de matéria"
  },
  {
    nome: "Invencibilidade Temporária",
    descricao: "Se torna invulnerável por um período",
    classificacao: "Lendário",
    defesa: "Dispositivo Anti-Invencibilidade: contorna proteção temporária"
  },
  {
    nome: "Olhos que Preveem o Futuro",
    descricao: "Enxerga eventos que ainda vão acontecer",
    classificacao: "Lendário",
    defesa: "Cortina Temporal: bloqueia percepção futura"
  },
  {
    nome: "Aura de Cura",
    descricao: "Cura aliados próximos constantemente",
    classificacao: "Lendário",
    defesa: "Campo de Bloqueio de Cura: impede regeneração de aliados próximos"
  }
];
