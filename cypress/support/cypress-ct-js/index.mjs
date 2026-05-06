/**
 * Custom Mount Adapater for cypress component test for vanilla JS components
 */

//need to import additional Cypress library to make a custom  mount adapter
import { getContainerEl, setupHooks } from '@cypress/mount-utils'

let dispose
function cleanup() {
  dispose?.()
}

/**
 * 
 * @param {*} component  - vanilla javscript component render function
 * @param {*} options - mount options - use {params:{}} property to load component params
 * @returns 
 */
export function mount(component, options={}) {
  // Retrieve root DOM element that Cypress has prepared for this test
  const root = getContainerEl();
  dispose = () => root.innerHTML =''; // clear contents
  dispose();
  const element = component(undefined,options.params);

  root.append(element); // add the component HTML elelment into te root 

  // Wait until next microtick to ensure any async render logic has executed
  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: 'mount',
        message: 'Mounted component',
      })
    }
  })
}

// Cleanup between each test
setupHooks(cleanup)