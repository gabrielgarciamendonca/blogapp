
# Blog App(realizado pela rocketseat)

Um aplicativo com finalidade de mostrar como as animações podem impactar tanto visualmente quanto em quesito de experiencia do usuário.

<div align="center">
   <img src="https://github.com/gabrielgarciamendonca/blogapp/blob/master/blogapp.gif" width="250" height="500" />
</div>

## Autores

- [@gabrielgarciamendonca](https://www.github.com/gabrielgarciamendonca)


## Stack utilizada

**Front-end:** React Native, Expo, Reanimated.


## Melhorias

No video da rocketseat, é utilizado como aplicar conceitos de animação. Porém é utilizado estado para capturar o movimento de scroll da ScrollView, visto que o próprio Reanimated consegue capturar esse valor nativamente não impactando na reação dos componentes em tela. Apenas nos componentes que precisam ser animados. Caso tenham feito o mesmo app, só que utilizando estado, vocês podem verificar que a queda na thread de JS oscila entre 10 e 20 fps. Claro em um app apenas para demostração da importancia da animação em certos casos, não é necessário prestar atenção nisso, porém, caso vocês sejam fanaticos por desempenho como eu, fazer a queda de FPS oscilar entre 0 e 2, é um baita desafio.🕺


## Documentação

[Reanimated🐴](https://docs.swmansion.com/react-native-reanimated/docs/next/fundamentals/shared-values)

