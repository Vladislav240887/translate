const select = document.getElementById('select')
const allLang = ['ua', 'en', 'de']
const changeUrLang = () => {
  let lang = select.value
  location.hash = lang // Зміна лише хешу, без перезавантаження сторінки
  changeLanguage()
}
select.addEventListener('change', changeUrLang)
function changeLanguage() {
  let hash = window.location.hash.substring(1)
  if (!allLang.includes(hash)) {
    location.hash = 'ua'
    hash = 'ua'
  }
  select.value = hash
  if (!langArr['title'][hash]) return
  document.querySelector('title').innerHTML = `${langArr['title'][hash]} #${hash}`
  for (let key in langArr) {
    let element = document.querySelector(`.lang-${key}`)
    if (element) {
      element.innerHTML = langArr[key][hash]
    }
  }
}
changeLanguage()