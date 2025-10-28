# 🦆 DuckGo — Missão Quackversal

> "O planeta inteiro virou um campo de caça... mas não qualquer caça — **patos com superpoderes**."

---

## 🌐 Acesse o Jogo

🎮 **Jogue agora:** [https://duckgo-dsin.vercel.app](https://duckgo-dsin.vercel.app)

> Explore o mapa, descubra patos mutantes ao redor do mundo e participe de missões de captura usando seus drones!

---

## 🌍 Visão Geral

**DuckGo** é um jogo de simulação e estratégia inspirado em **Pokémon GO**, no qual o jogador utiliza drones para **rastrear, avaliar e capturar patos mutantes** que aparecem aleatoriamente pelo planeta.

Cada pato possui um **estado biológico**, **nível de mutação**, **superpoder único** e **nível de risco**.  
O objetivo é decidir **quando e como capturar**, equilibrando energia, distância e segurança do drone.

---

## 🚀 Funcionalidades Principais

### 🧭 Mapa Interativo
- Visualização estilo **Google Maps**, exibindo locais de aparição de patos.
- Patos são **gerados aleatoriamente** com diferentes atributos e poderes.

### 🔬 Sistema de Avaliação de Captura
Cada pato é analisado segundo quatro fatores:

| Fator | Descrição | Impacto |
|-------|------------|---------|
| 🧬 **Valor Científico** | Número de mutações genéticas | + até 3 pontos |
| ⚖️ **Custo Operacional** | Peso e distância da base | + até 6 pontos |
| ❤️ **Risco** | Estado biológico e batimentos | + até 3 pontos |
| 💥 **Poderio Militar** | Tipo de superpoder | -3 a +2 pontos |

Após a análise, o sistema emite uma **recomendação automática**:
- 🟢 **CAPTURAR: SIM**  
- 🟡 **CAPTURAR: COM CAUTELA**  
- 🔴 **CAPTURAR: NÃO**

---

## ⚔️ Sistema de Batalha — “Missão de Captura”

Durante a missão, o jogador controla um **drone** em campo.  
O objetivo é capturar o pato antes que a **bateria acabe** ou o **drone seja destruído**.

### Recursos Gerenciáveis:
- 🔋 **Bateria** — se esgotar, a missão termina.
- ⛽ **Combustível** — define a duração da operação.
- 🧱 **Integridade** — cai a cada falha ou dano sofrido.

### Ações Disponíveis:
- **Ativar Defesa:** aumenta a chance em +5% (até 4 vezes), mas consome bateria (1–75%).  
- **Tentar Capturar:** sorteia um número e compara com a chance total.  
  - Se o número for menor que a chance → ✅ Captura bem-sucedida  
  - Caso contrário → ❌ Drone perde 25% de integridade

### Resultados Possíveis:
- ✅ *Pato capturado com sucesso*  
- ⚠️ *Drone destruído ou bateria esgotada*  
- 🚫 *Missão abortada*

---

## 🧮 Cálculo da Chance Base

| Status do Pato | Condição | Chance (%) |
|----------------|-----------|-------------|
| Hibernação profunda | — | 90 |
| Em transe | Batimentos baixos | 80 → 30 |
| Desperto | Alto risco | 5 |
| Desperto | Lendário | 10 |
| Desperto | Raro | 15 |
| Desperto | Bélico | 20 |
