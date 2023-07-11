import "./styles/main.css"
import "@csstools/normalize.css"

// Supports weights 200-900
import "@fontsource-variable/mulish"
// Supports weights 400-900
import "@fontsource-variable/playfair-display"

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  const sideNavigationWrapper = document.getElementById(
    "side-navigation-wrapper"
  )
  if (!sideNavigationWrapper) return
  sideNavigationWrapper.style.display = "block"

  const sideNavigation = document.getElementById("side-navigation")
  if (!sideNavigation) return

  sideNavigation.style.translate = "0px 0px"
  sideNavigation.style.width = "80vw"
  sideNavigation.style.display = "block"
}

window.openNav = openNav

declare global {
  interface Window {
    openNav: any
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  const sideNavigationWrapper = document.getElementById(
    "side-navigation-wrapper"
  )
  if (!sideNavigationWrapper) return
  sideNavigationWrapper.style.display = "none"

  const sideNavigation = document.getElementById("side-navigation")
  if (!sideNavigation) return

  sideNavigation.style.translate = "100vw 0px"
  sideNavigation.style.display = "none"
}

window.closeNav = closeNav

declare global {
  interface Window {
    closeNav: any
  }
}

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
