function toggleMode() {
  const html = document.documentElement
  // função trocar 'light'
  html.classList.toggle('light')

  //Pegar a tag img
  const img = document.querySelector('#profile img')

  //Substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'assets/assets/avatar.png')
  }

  // ALT da imagem
  if (html.classList.contains('light')) {
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito, sorrindo, usado óculos escuro e camisa preta e fundo linaer roxo/azul'
    )
  } else {
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito, sorrindo, usando óculos e camisa preta, barba e fundo amarelo'
    )
  }
}
