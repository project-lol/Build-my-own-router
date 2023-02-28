//Declare the variables for home, about & contact html pages
let home = ""
let about = ""
let contact = ""

/**
 *
 * @param {String} page - Represents the page information that needs to be retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
 */

const loadPage = async page => {
  const response = await fetch(page)
  const resHtml = await response.text()
  return resHtml
}

/**
 * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
 */
const loadAllPages = async () => {
  home = await loadPage("home.html")
  about = await loadPage("about.html")
  contact = await loadPage("contact.html")
}
