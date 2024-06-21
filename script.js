function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/Avatar.png")
  img.setAttribute("alt", "Imagem de Filipe no espelho do banheiro com camiseta azul marinho")
  } else {
  //se tiver se, light mode, manter a imagem normal
  img.setAttribute("src", "./assets/avatar-light.png")
  img.setAttribute("alt","Imagem de Filipe usando boné com fundo escuro")
  }
}