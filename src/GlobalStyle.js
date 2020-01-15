import { css, createGlobalStyle } from "styled-components"
import mediaqueries from "./mediaqueries";

// import "./normalize.css"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    color: ${props => props.theme.colors.gray[700]}
    -webkit-font-smoothing: antialiased;
  }

  .z-1 { z-index: 1; }
  .z-2 { z-index: 2; }
  .z-3 { z-index: 3; }
  .z-4 { z-index: 4; }
  .z-5 { z-index: 5; }
  .z-6 { z-index: 6; }
  .z-7 { z-index: 7; }
  .z-8 { z-index: 8; }
  .z-9 { z-index: 9; }

  .rounded-none	{ border-radius: 0; }
  .rounded-sm	  { border-radius: .125rem; }
  .rounded      { border-radius: .25rem; }
  .rounded-lg	  { border-radius: .5rem; }
  .rounded-full	{ border-radius: 9999px; }

  a {
    color: ${props => props.theme.colors.secondary[500]};
    transition: 0.3s all ease;

    &:hover {
    color: ${props => props.theme.colors.secondary[700]};
    }
  }

  .opacity-0 { opacity: 0;}
  .opacity-1 { opacity: 1;}

  .transition-300 { transition: 0.3s all ease; }
  .transition-500 { transition: 0.5s all ease; }

  /* SCALE */
  .hover\\:scale-92:hover { transform: scale(0.92); }
  .hover\\:scale-94:hover { transform: scale(0.94); }
  .hover\\:scale-96:hover { transform: scale(0.96); }
  .hover\\:scale-98:hover { transform: scale(0.98); }
  .hover\\:scale-100:hover { transform: scale(1); }
  .hover\\:scale-102:hover { transform: scale(1.02); }
  .hover\\:scale-104:hover { transform: scale(1.04); }
  .hover\\:scale-106:hover { transform: scale(1.06); }
  .hover\\:scale-108:hover { transform: scale(1.08); }
  .hover\\:scale-110:hover { transform: scale(1.10); }

  .text-black { color: ${props => props.theme.colors.black[500]}; }
  .text-white { color: ${props => props.theme.colors.white[500]}; }
  .text-primary { color: ${props => props.theme.colors.primary[500]}; }
  .text-secondary { color: ${props => props.theme.colors.secondary[500]}; }
  .text-gray700 { color: ${props => props.theme.colors.gray[700]} }

  .uppercase { text-transform: uppercase; }

  .bg-none { background: none; }
  .bg-alpha-2 { background: rgba(0,0,0, 0.2); }


  ${mediaqueries.xs`
    .xs\\:bg-none { background: none; }
    .xs\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }
  `}

  ${mediaqueries.sm`
    .sm\\:bg-none { background: none; }
    .sm\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }
  `}

  ${mediaqueries.md`
    .md\\:bg-none { background: none; }
    .md\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }
  `}

  ${mediaqueries.lg`
    .lg\\:bg-none { background: none; }
    .lg\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }
  `}


  /* POSITIONING */
  .relative {position: relative; }
  .absolute {position: absolute; }
  .fixed {position: fixed; }

  /* ABSOLUTE POSITIONING   */
  /*  TOP/RIGHT/BOTTOM/LEFT */
  .inset-0      { top: 0; right: 0; bottom: 0; left: 0;}
  .inset-y-0	  { top: 0; bottom: 0; }
  .inset-x-0	  { right: 0; left: 0; }
  .top-0	      { top: 0; }
  .top-50	      { top: 50%; }
  .right-0	    { right: 0; }
  .right-50	    { right: 50%; }
  .bottom-0	    { bottom: 0; }
  .bottom-50	  { bottom: 50%; }
  .left-0	      { left: 0; }
  .left-50	    { left: 50%; }
  .inset-auto	  { top: auto; right: auto; bottom: auto; left: auto; }
  .inset-y-auto {	top: auto; bottom: auto; }
  .inset-x-auto	{ left: auto; right: auto; }
  .top-auto	    { top: auto; }
  .bottom-auto	{ bottom: auto; }
  .left-auto	  { left: auto; }
  .right-auto	  { right: auto; }

  .top-0 { top: 0; }
  .right-0 { right: 0;}

  .markdown {
    line-height: 1.7;

    div, p, h1, h2, h3, h4, h5, h6 {
      padding-bottom: ${props => props.theme.spacing['6']};
    }

    div, p {
      font-size: ${props => props.theme.typography.sizes['xl']}
    }
    h1 {
      font-size: ${props => props.theme.typography.sizes['4xl']}
    }
    h2 {
      font-size: ${props => props.theme.typography.sizes['3xl']}
    }
    h3 {
      font-size: ${props => props.theme.typography.sizes['2xl']}
    }
    h4 {
      font-size: ${props => props.theme.typography.sizes['xl']}
    }
    h5 {
      font-size: ${props => props.theme.typography.sizes['lg']}
    }
    h6 {
      font-size: ${props => props.theme.typography.sizes['normal']}
    }
  }


  .shadow	{ box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}
  .shadow-md	{ box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);}
  .shadow-lg	{ box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);}
  .shadow-xl	{ box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);}
  .shadow-2xl	{ box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);}
  .shadow-inner	{ box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);}
  .shadow-outline	{ box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);}
  .shadow-none	{ box-shadow: none;}

  ${props => Object.keys(props.theme.spacing).map((label) => (
    css`
      .translate-x-${label} {
        transform: translateX(${props.theme.spacing[label]});
      }

      .hover\\:translate-x-${label}:hover {
        transform: translateX(${props.theme.spacing[label]});
      }

      .hover\\:translate-child-x-${label}:hover > * {
        transform: translateX(${props.theme.spacing[label]});
      }

      .translate-y-${label} {
        transform: translateY(${props.theme.spacing[label]});
      }

      .hover\\:translate-y-${label}:hover {
        transform: translateY(${props.theme.spacing[label]});
      }

      .hover\\:translate-child-y-${label}:hover > * {
        transform: translateY(${props.theme.spacing[label]});
      }

      .-translate-y-${label} {
        transform: translateY(-${props.theme.spacing[label]});
      }

      .p-${label} {
        padding: ${props.theme.spacing[label]};
      }
      .pt-${label} {
        padding-top: ${props.theme.spacing[label]};
      }
      .pb-${label} {
        padding-bottom: ${props.theme.spacing[label]};
      }
      .pl-${label} {
        padding-left: ${props.theme.spacing[label]};
      }
      .pr-${label} {
        padding-right: ${props.theme.spacing[label]};
      }
      .py-${label} {
        padding-top: ${props.theme.spacing[label]};
        padding-bottom: ${props.theme.spacing[label]};
      }
      .px-${label} {
        padding-left: ${props.theme.spacing[label]};
        padding-right: ${props.theme.spacing[label]};
      }

      .m-${label} {
        margin: ${props.theme.spacing[label]};
      }
      .mt-${label} {
        margin-top: ${props.theme.spacing[label]};
      }
      .mb-${label} {
        margin-bottom: ${props.theme.spacing[label]};
      }
      .ml-${label} {
        margin-left: ${props.theme.spacing[label]};
      }
      .mr-${label} {
        margin-right: ${props.theme.spacing[label]};
      }
      .my-${label} {
        margin-top: ${props.theme.spacing[label]};
        margin-bottom: ${props.theme.spacing[label]};
      }
      .mx-${label} {
        margin-left: ${props.theme.spacing[label]};
        margin-right: ${props.theme.spacing[label]};
      }
    `
  ))}

  ${props => mediaqueries.xs`
    ${Object.keys(props.theme.spacing).map((label) => (
      css`
      .xs\\:p-${label} {
          padding: ${props.theme.spacing[label]};
        }
        .xs\\:pt-${label} {
          padding-top: ${props.theme.spacing[label]};
        }
        .xs\\:pb-${label} {
          padding-bottom: ${props.theme.spacing[label]};
        }
        .xs\\:pl-${label} {
          padding-left: ${props.theme.spacing[label]};
        }
        .xs\\:pr-${label} {
          padding-right: ${props.theme.spacing[label]};
        }
        .xs\\:py-${label} {
          padding-top: ${props.theme.spacing[label]};
          padding-bottom: ${props.theme.spacing[label]};
        }
        .xs\\:px-${label} {
          padding-left: ${props.theme.spacing[label]};
          padding-right: ${props.theme.spacing[label]};
        }
      `
    ))}
  `}

  ${props => mediaqueries.sm`
    ${Object.keys(props.theme.spacing).map((label) => (
      css`
        .sm\\:p-${label} {
          padding: ${props.theme.spacing[label]};
        }
        .sm\\:pt-${label} {
          padding-top: ${props.theme.spacing[label]};
        }
        .sm\\:pb-${label} {
          padding-bottom: ${props.theme.spacing[label]};
        }
        .sm\\:pl-${label} {
          padding-left: ${props.theme.spacing[label]};
        }
        .sm\\:pr-${label} {
          padding-right: ${props.theme.spacing[label]};
        }
        .sm\\:py-${label} {
          padding-top: ${props.theme.spacing[label]};
          padding-bottom: ${props.theme.spacing[label]};
        }
        .sm\\:px-${label} {
          padding-left: ${props.theme.spacing[label]};
          padding-right: ${props.theme.spacing[label]};
        }
      `
    ))}
  `}

  ${props => mediaqueries.md`
    ${Object.keys(props.theme.spacing).map((label) => (
      css`
      .md\\:p-${label} {
          padding: ${props.theme.spacing[label]};
        }
        .md\\:pt-${label} {
          padding-top: ${props.theme.spacing[label]};
        }
        .md\\:pb-${label} {
          padding-bottom: ${props.theme.spacing[label]};
        }
        .md\\:pl-${label} {
          padding-left: ${props.theme.spacing[label]};
        }
        .md\\:pr-${label} {
          padding-right: ${props.theme.spacing[label]};
        }
        .md\\:py-${label} {
          padding-top: ${props.theme.spacing[label]};
          padding-bottom: ${props.theme.spacing[label]};
        }
        .md\\:px-${label} {
          padding-left: ${props.theme.spacing[label]};
          padding-right: ${props.theme.spacing[label]};
        }
      `
    ))}
  `}

  ${props => mediaqueries.lg`
    ${Object.keys(props.theme.spacing).map((label) => (
      css`
        .lg\\:p-${label} {
          padding: ${props.theme.spacing[label]};
        }
        .lg\\:pt-${label} {
          padding-top: ${props.theme.spacing[label]};
        }
        .lg\\:pb-${label} {
          padding-bottom: ${props.theme.spacing[label]};
        }
        .lg\\:pl-${label} {
          padding-left: ${props.theme.spacing[label]};
        }
        .lg\\:pr-${label} {
          padding-right: ${props.theme.spacing[label]};
        }
        .lg\\:py-${label} {
          padding-top: ${props.theme.spacing[label]};
          padding-bottom: ${props.theme.spacing[label]};
        }
        .lg\\:px-${label} {
          padding-left: ${props.theme.spacing[label]};
          padding-right: ${props.theme.spacing[label]};
        }
      `
    ))}
  `}

  ${props =>
    css`
      html,
      body,
      div,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${props.theme.fontFamily[props.theme.defaultFontFamilyVariant]};
      }
    `
  }

  .w-40 { width: 40%; }
  .w-50 { width: 50%; }
  .w-75 { width: 75%; }
  .w-100 { width: 100%; }
  .w-auto { width: auto; }

  ${mediaqueries.xs`
    .xs\\:w-40 { width: 40%; }
    .xs\\:w-50 { width: 50%; }
    .xs\\:w-75 { width: 75%; }
    .xs\\:w-100 { width: 100%; }
    .xs\\:w-auto { width: auto; }
  `}
  ${mediaqueries.sm`
    .sm\\:w-40 { width: 40%; }
    .sm\\:w-50 { width: 50%; }
    .sm\\:w-75 { width: 75%; }
    .sm\\:w-100 { width: 100%; }
    .sm\\:w-auto { width: auto; }
  `}
  ${mediaqueries.md`
    .md\\:w-40 { width: 40%; }
    .md\\:w-50 { width: 50%; }
    .md\\:w-75 { width: 75%; }
    .md\\:w-100 { width: 100%; }
    .md\\:w-auto { width: auto; }
  `}
  ${mediaqueries.lg`
    .lg\\:w-40 { width: 40%; }
    .lg\\:w-50 { width: 50%; }
    .lg\\:w-75 { width: 75%; }
    .lg\\:w-100 { width: 100%; }
    .lg\\:w-auto { width: auto; }
  `}

  .order-1 { order: 1;}
  .order-2 { order: 2;}
  .order-none {order: none;}

  ${mediaqueries.xs`
    .xs\\:order-1 { order: 1; }
    .xs\\:order-2 { order: 2; }
    .xs\\:order-none { order:none; }
  `}
  ${mediaqueries.sm`
    .sm\\:order-1 { order: 1; }
    .sm\\:order-2 { order: 2; }
    .sm\\:order-none { order:none; }
  `}
  ${mediaqueries.md`
    .md\\:order-1 { order: 1; }
    .md\\:order-2 { order: 2; }
    .md\\:order-none { order:none; }
  `}
  ${mediaqueries.lg`
    .lg\\:order-1 { order: 1; }
    .lg\\:order-2 { order: 2; }
    .lg\\:order-none { order:none; }
  `}

  .h-100 {
    height: 100%;
  }
`


export default GlobalStyle;
