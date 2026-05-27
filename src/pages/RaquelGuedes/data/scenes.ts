/**
 * ==================================================
 * RAQUEL GUEDES - SCENE CONFIGURATION
 * ==================================================
 *
 * Este arquivo contém todas as cenas da experiência.
 * Para adicionar novas cenas, basta adicionar um novo objeto ao array.
 *
 * TIPOS DE CENA:
 * - 'text-only': Apenas texto, sem mídia de fundo
 * - 'photo': Foto de fundo com texto
 * - 'video': Vídeo de fundo com texto
 *
 * ANIMAÇÕES:
 * - 'fade': Fade in/out simples
 * - 'kenburns': Zoom lento na imagem (efeito Ken Burns)
 * - 'parallax': Efeito de parallax no scroll
 * - 'zoom': Zoom in ao entrar
 *
 * POSIÇÃO DO TEXTO:
 * - 'center': Centro da tela
 * - 'bottom': Parte inferior
 * - 'left': Alinhado à esquerda
 * - 'right': Alinhado à direita
 */

export interface Scene {
  id: string;
  type: "photo" | "video" | "text-only";
  media?: string;
  mediaAlt?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
  paragraph?: string;
  animation: "fade" | "kenburns" | "parallax" | "zoom";
  textPosition: "center" | "bottom" | "left" | "right";
  overlayDark?: boolean;
  isPortrait?: boolean; // Para fotos de retrato/pessoa - foca no rosto
}

export const scenes: Scene[] = [
  // ==================================================
  // CENA 1: INTRO
  // ==================================================
  {
    id: "intro",
    type: "text-only",
    title: "Uma história sobre luz...",
    animation: "fade",
    textPosition: "center",
  },

  // ==================================================
  // CENA 2: APRESENTAÇÃO
  // ==================================================
  {
    id: "apresentacao",
    type: "photo",
    media: "/raquel/foto-raquel-1.webp",
    mediaAlt: "Raquel",
    label: "Prazer",
    title: "Olá, me chamo Raquel",
    subtitle:
      "Tenho certeza que vocês já sabem, mas eu tenho o maior coração do mundo. Sou megar hiper fofa, adoro um abraço e um cafuné. Sou apaixonada por natureza, por animais e por pessoas. Sou uma pessoa de fases, mas uma coisa é constante: a minha vontade de cuidar e de me conectar.",
    animation: "kenburns",
    textPosition: "center",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 3: FORMULA 1
  // ==================================================
  {
    id: "formula1",
    type: "photo",
    media: "/raquel/foto-f1.webp",
    mediaAlt: "Raquel e Formula 1",
    label: "Paixão",
    quote:
      "Sou louca por Formula 1, mas o que mais me impressiona além dos carros é a paixão dos fãs e os pilotos que são incríveis no que fazem.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 4: NATUREZA 1
  // ==================================================
  {
    id: "natureza-1",
    type: "photo",
    media: "/raquel/natureza-1.webp",
    mediaAlt: "Raquel na natureza",
    label: "Essência",
    title: "Natureza",
    subtitle:
      "Existe algo em você que pertence às coisas simples. Ao vento. À terra. Ao sol entrando pela janela.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 5: NATUREZA 2
  // ==================================================
  {
    id: "natureza-2",
    type: "photo",
    media: "/raquel/natureza-2.webp",
    mediaAlt: "Raquel na natureza",
    label: "Paz",
    subtitle:
      "Nos pequenos momentos de silêncio, você encontra a calma que o mundo precisa.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 6: NATUREZA 3
  // ==================================================
  {
    id: "natureza-3",
    type: "photo",
    media: "/raquel/natureza-3.webp",
    mediaAlt: "Raquel na natureza",
    label: "Leveza",
    subtitle: "A vida é mais bonita quando vista pelos seus olhos.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 7: NATUREZA 4
  // ==================================================
  {
    id: "natureza-4",
    type: "photo",
    media: "/raquel/natureza-4.webp",
    mediaAlt: "Raquel na natureza",
    label: "Liberdade",
    subtitle: "Você é mãe de uma doguinha linda.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 8: ELA - BRILHO 1
  // ==================================================
  {
    id: "ela-brilho-1",
    type: "photo",
    media: "/raquel/brilho-1.webp",
    mediaAlt: "Raquel brilhando",
    label: "Verdade",
    quote: "Tudo que ela toca vira ouro.",
    paragraph:
      "Você tem esse dom raro de transformar o comum em extraordinário. De fazer as pessoas ao seu redor brilharem também.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 9: ELA - BRILHO 2
  // ==================================================
  {
    id: "ela-brilho-2",
    type: "photo",
    media: "/raquel/brilho-2.webp",
    mediaAlt: "Raquel campeã",
    label: "Conquista",
    quote: "Tudo que ela toca vira ouro.",
    paragraph: "Você é uma verdadeira campeã.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
  },

  // ==================================================
  // CENA 10: FORÇA
  // ==================================================
  {
    id: "forca",
    type: "photo",
    media: "/raquel/forca.webp",
    mediaAlt: "Força e sensibilidade",
    label: "Força",
    title: "Sensibilidade & Força",
    subtitle:
      "Você carrega uma força silenciosa. Uma determinação que inspira. Uma delicadeza que acolhe.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 7: FAMÍLIA
  // ==================================================
  {
    id: "familia",
    type: "photo",
    media: "/raquel/familia.webp",
    mediaAlt: "Família",
    label: "Raízes",
    title: "Família",
    subtitle:
      "O amor que você construiu. Os laços que você fortalece. O cuidado que transborda.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 8: COMPANHIA
  // ==================================================
  {
    id: "companhia",
    type: "photo",
    media: "/raquel/companhia.webp",
    mediaAlt: "Companhia",
    label: "Companhia",
    subtitle:
      "E até os pequenos momentos de alegria têm espaço no seu coração.",
    animation: "kenburns",
    textPosition: "bottom",
    overlayDark: true,
    isPortrait: true,
  },

  // ==================================================
  // CENA 9: GRATIDÃO (VIDEO)
  // ==================================================
  {
    id: "gratidao",
    type: "video",
    media: "/raquel/gratidao.mp4",
    mediaAlt: "Mensagem de gratidão",
    quote: "Obrigado por existir do jeito que você é.",
    animation: "fade",
    textPosition: "center",
    overlayDark: true,
  },

  // ==================================================
  // CENA 10: FINAL
  // ==================================================
  {
    id: "final",
    type: "photo",
    media: "/raquel/final.webp",
    mediaAlt: "Raquel com velinhas",
    title: "39",
    subtitle: "anos de luz",
    paragraph: "Feliz aniversário, Raquel.",
    animation: "kenburns",
    textPosition: "center",
    overlayDark: true,
  },
];

// ==================================================
// CONFIGURAÇÃO DE ÁUDIO
// ==================================================
export const audioConfig = {
  src: "/raquel/music.mp3",
  volume: 0.7, // Volume mais alto
  fadeInDuration: 1500, // Fade mais rápido
  fadeOutDuration: 2000,
};

// ==================================================
// CONFIGURAÇÃO GERAL
// ==================================================
export const experienceConfig = {
  // Duração mínima de cada cena no scroll (em vh)
  sceneHeight: 100,
  // Ativar snap scroll
  snapScroll: false,
  // Mostrar indicador de scroll
  showScrollIndicator: true,
  // Esconder indicador após X cenas
  hideScrollIndicatorAfterScene: 2,
};
