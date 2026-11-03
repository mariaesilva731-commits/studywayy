## Página 1

TRANSPORTE DE
ENERGIA
EM ASTROFÍSICA
Walter J. Maciel

---

## Página 2

> Página sem texto extraível; consulte o PDF original.

---

## Página 3

TRANSPORTE DE
ENERGIA
EM ASTROFÍSICA
Walter J. Maciel
2022

---

## Página 4

Ficha Catalográfica
Elaborada pelo Serviço de Biblioteca e Documentação do
Instituto de Astronomia, Geofísica e Ciências Atmosféricas da USP
M138t
Maciel, Walter Junqueira
Transporte de energia em Astrofísica.
Walter Junqueira Maciel – São Paulo: IAG-USP. 2022.
311 p. (E-book)
CDD: 523.01
ISBN 978-65-88233-04-7 (e-book)
Acesso em:
www.astro.iag.usp.br/~maciel/teaching/teaching.html
www.iag.usp.br/astronomia/livros-e-apostilas
CDD 523.112
Versão 05.08.2022

### Links

- [Link 1](http://www.astro.iag.usp.br/~maciel/teaching/teaching.html)

---

## Página 5

The dead don’t go anywhere. They’re all here.
Each man is a cemetery. An actual cemetery, in
which lie all our grandmothers and grandfathers,
the father and mother, the wife, the child.
Everyone is here all the time.
Isaac Bashevis Singer
Ich wand’re schon
Im reinen Licht,
Seh Mond und Sonn
Zu meinem Fuss
Franz von Bruchmann, Schwestergruss
## Aos meus irm˜aos

---

## Página 6

> Página sem texto extraível; consulte o PDF original.

---

## Página 7

## ´
## PREFACIO
Este livro ´e baseado nas notas de aulas do curso “Transporte de Energia
em Astrof´ısica”, oferecido aos alunos da gradua¸c˜ao em Astronomia pelo De-
partamento de Astronomia do IAG/USP. O texto surgiu a partir da proposta
de um curso avan¸cado abordando diversos fenˆomenos de transporte de ener-
gia em astrof´ısica. Em geral, a express˜ao “transporte de energia” refere-se
`a radia¸c˜ao, convec¸c˜ao e condu¸c˜ao eletrˆonica, e suas principais aplica¸c˜oes em
astrof´ısica, principalmente na f´ısica estelar e na f´ısica do meio interestelar.
Neste livro, estes aspectos s˜ao abordados, mas o enfoque ´e mais geral: s˜ao
considerados diversos processos f´ısicos importantes para a astrof´ısica em que
energia ´e transportada de um objeto a outro, independente do mecanismo
efetivamente utilizado. Portanto, muitos processos ser˜ao considerados, o que
requer um conhecimento pr´evio dos aspectos mais elementares desses objetos,
discutidos em cursos anteriores.
Todos os cap´ıtulos contˆem muitos exemplos num´ericos, que s˜ao essenciais
para que o leitor possa ter uma id´eia mais quantitativa das propriedades f´ısicas
envolvidas nos processos de transporte de energia. Estes exemplos refletem
basicamente minha experiˆencia como docente e pesquisador, e portanto est˜ao
restritos aos processos mais familiares em que trabalhei ao longo dos anos.
Outros exemplos, distintos dos tratados neste texto, poderiam igualmente
servir como ilustra¸c˜ao dos processos de transporte de energia.
Partes do material neste texto foram baseadas em trabalhos anteriores,
em particular nos livros “Introdu¸c˜ao `a estrutura e evolu¸c˜ao estelar”(Edusp,
1999), “Astrof´ısica do meio interestelar”(Edusp, 2002), “Hidrodinˆamica e ven-
tos estelares: uma introdu¸c˜ao”(Edusp, 2004), “Fundamentos de Evolu¸c˜ao
qu´ımica da Gal´axia”(IAG/USP, 2020) e “500 Exerc´ıcios resolvidos de As-
trof´ısica” (IAG/USP, 2020). Outros textos b´asicos, principalmente livros re-
centes e artigos de revis˜ao est˜ao inclu´ıdos na bibliografia de cada cap´ıtulo.
Al´em dos exemplos trabalhados no texto, cada cap´ıtulo inclui tamb´em uma
s´erie de exerc´ıcios, que devem ser considerados como parte integral do texto,
pois ilustram e complementam o material discutido no cap´ıtulo.
Apesar das rigorosas revis˜oes feitas, ´e inevit´avel que alguns erros possam
ter permanecido. Quaisquer corre¸c˜oes e sugest˜oes ser˜ao bem vindas, podendo
ser enviadas ao endere¸co wjmaciel@usp.br.
S˜ao Paulo, Julho de 2022
W. J. Maciel

---

## Página 8

> Página sem texto extraível; consulte o PDF original.

---

## Página 9

## ´
## SUMARIO
´
CAPITULO 1 – TRANSPORTE RADIATIVO
1.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 - Conceitos do campo de radia¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.3 - Equa¸c˜ao de transporte radiativo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
1.4 - Solu¸c˜ao geral . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
1.5 - O campo de radia¸c˜ao interestelar . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
1.6 - Campo de radia¸c˜ao: r´adio aos raios gama . . . . . . . . . . . . . . . . . . . . 23
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
´ ´ ˆ
CAPITULO 2 – EQUILIBRIO TERMODINAMICO
2.1 - Lei de Kirchhoff e ET . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
2.2 - Propriedades da fun¸c˜ao de Planck . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
2.3 - Lei de Stefan-Boltzmann e as equa¸c˜oes da termodinˆamica . . . . 43
2.4 - Equa¸c˜oes do equil´ıbrio termodinˆamico . . . . . . . . . . . . . . . . . . . . . . . 44
2.5 - Desvios do equil´ıbrio termodinˆamico . . . . . . . . . . . . . . . . . . . . . . . . . 52
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
´
CAPITULO 3 – ATMOSFERAS ESTELARES
3.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
3.2 - Atmosfera plano-paralela . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
3.3 - Atmosfera cinza . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
3.4 - Fluxo emergente em uma atmosfera cinza . . . . . . . . . . . . . . . . . . . . . 77
3.5 - Opacidade . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93
´ ˜
CAPITULO 4 - FORMAC¸AO DE LINHAS ESPECTRAIS
4.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
4.2 - Linhas espectrais . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
4.3 - Alargamento das linhas espectrais . . . . . . . . . . . . . . . . . . . . . . . . . . 100
4.4 - Largura equivalente . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111
4.5 - Curva de crescimento . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115

---

## Página 10

4.6 - Linhas espectrais em atmosferas estelares . . . . . . . . . . . . . . . . . . . 120
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
´
CAPITULO 5 – VENTOS ESTELARES
5.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
5.2 - A taxa de perda de massa . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
5.3 - Equa¸c˜oes dos ventos estelares . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
5.4 - Ventos estelares e transferˆencia de energia . . . . . . . . . . . . . . . . . . 141
5.5 - Mecanismos respons´aveis pelos ventos estelares . . . . . . . . . . . . . . 147
5.6 - Intera¸c˜ao dos ventos estelares com o meio interestelar . . . . . . . 158
5.7 - Transporte radiativo e ventos estelares . . . . . . . . . . . . . . . . . . . . . . 160
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 161
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
´
CAPITULO 6 - INTERIORES ESTELARES
6.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 163
6.2 - Energias estelares . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 163
6.3 - Equil´ıbrio radiativo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174
6.4 - Transporte convectivo . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 180
6.5 - Condu¸c˜ao em estrelas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 197
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 198
´ ˆ
CAPITULO 7 - PROCESSOS DINAMICOS I
7.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
7.2 - O teorema do virial . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
7.3 - O teorema de Liouville . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 214
7.4 - O limite de Oort . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 217
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 220
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 221
´ ˆ
CAPITULO 8 - PROCESSOS DINAMICOS II
8.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 223
8.2 - Dinˆamica estelar . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 224
8.3 - O teorema do virial na dinˆamica estelar . . . . . . . . . . . . . . . . . . . . . 227

---

## Página 11

8.4 - Relaxa¸c˜ao colisional . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 233
8.5 - Tempo de cruzamento e tempo de relaxa¸c˜ao . . . . . . . . . . . . . . . . 237
8.6 - A equa¸c˜ao de transporte de Boltzmann . . . . . . . . . . . . . . . . . . . . . 239
8.7 - Equa¸c˜ao de Boltzmann em sistemas estelares . . . . . . . . . . . . . . . . 242
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 244
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 245
´
CAPITULO 9 – NEBULOSAS E O MEIO INTERESTELAR
9.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 247
9.2 - Nuvens interestelares e nebulosas . . . . . . . . . . . . . . . . . . . . . . . . . . . 248
9.3 - Equil´ıbrio no meio interestelar . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 255
9.4 - Aquecimento no meio interestelar . . . . . . . . . . . . . . . . . . . . . . . . . . . 258
9.5 - Resfriamento no meio interestelar . . . . . . . . . . . . . . . . . . . . . . . . . . . 264
9.6 - Temperatura de equil´ıbrio em nuvens interestelares . . . . . . . . . . 269
9.7 - Nebulosas ionizadas interestelares . . . . . . . . . . . . . . . . . . . . . . . . . . . 276
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 282
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 283
´ ˆ
CAPITULO 10 – PROCESSOS DINAMICOS EM PLASMAS
10.1 - Introdu¸c˜ao . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 285
10.2 - Equa¸c˜oes da dinˆamica de fluidos . . . . . . . . . . . . . . . . . . . . . . . . . . . 291
10.3 - Crit´erio de instabilidade de Jeans . . . . . . . . . . . . . . . . . . . . . . . . . . 294
10.4 - Equa¸c˜oes b´asicas de MHD . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 297
10.5 - For¸ca de Lorentz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 301
10.6 - Choques hidromagn´eticos . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 304
10.7 - Instabilidade de Parker . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 306
Exerc´ıcios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 310
Referˆencias bibliogr´aficas . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 311
CONSTANTES E UNIDADES
´
CREDITOS DAS FIGURAS
SOBRE O AUTOR

---

## Página 12

> Página sem texto extraível; consulte o PDF original.

---

## Página 13

## 1
## TRANSPORTE RADIATIVO
1.1 INTRODUC¸ ˜AO
Em meios astrof´ısicos, ocorrem diversos processos importantes de trans-
porte de energia, frequentemente de maneira simultˆanea. Entre esses proces-
sos, possivelmente o mais importante ´e o transporte da radia¸c˜ao, uma vez
que as informa¸c˜oes astrof´ısicas s˜ao obtidas principalmente por meio de al-
guma observa¸c˜ao de radia¸c˜ao, no cont´ınuo ou em linhas e bandas espectrais.
Neste cap´ıtulo, vamos estudar os principais conceitos do campo de radia¸c˜ao,
a equa¸c˜ao de transporte radiativo, e suas solu¸c˜oes em alguns casos simples.
Diversos textos b´asicos de astrof´ısica tratam do transporte radiativo, da
equa¸c˜ao de transporte e suas solu¸c˜oes nos casos mais simples. Entre eles,
podem ser mencionados Choudhuri (2010), Carroll e Ostlie (2014), Kartunnen
et al. (2007), Zeilik e Gregory (1998), Shu (1982) e Swihart (1968). Algumas
partes do desenvolvimento a seguir foram baseadas no tratamento dado por
Maciel (1999, 2002).
1.2 CONCEITOS DO CAMPO DE RADIAC¸ ˜AO
Para o estudo do transporte de radia¸c˜ao em meios astrof´ısicos, precisamos
inicialmente caracterizar um campo de radia¸c˜ao (cf. Maciel 1999, cap. 4).
Alguns exemplos de regi˜oes onde podemos observar um campo de radia¸c˜ao

---

## Página 14

2 Transporte de Energia em Astrof´ısica
s˜ao a fotosfera solar (figura 1.1a), de onde provˆem os f´otons vis´ıveis solares
observados na Terra, ou a regi˜ao vizinha `as estrelas quentes que formam o
“Trap´ezio”, um aglomerado de estrelas quentes e jovens imersas na Nebulosa
de Orion (figura 1.1b). Quantitativamente, podemos caracterizar um campo
de radia¸c˜ao usando diversas grandezas, das quais consideramos a seguir as
mais importantes.
Figura 1.1 - (a) Fotosfera solar, (b) estrelas do Trap´ezio em Orion.
´
1.2.1 INTENSIDADE ESPECIFICA
A intensidade Iν(~r, ~s, t), na posi¸c˜ao ~r, dire¸c˜ao ~s, tempo t, ´e a energia
que passa atrav´es de uma ´area unit´aria, perpendicularmente a essa ´area, por
unidade de tempo, por intervalo de freq¨uˆencia, em um ˆangulo s´olido unit´ario
(figura 1.2). Podemos ent˜ao escrever
dEν = Iν(~r, ~s, t) dA cosθ dω dν dt (1.1a)
−2 −1 −1 −1
As unidades de Iν s˜ao erg cm s Hz sr . Da mesma maneira, pode-
mos definir a intensidade espec´ıfica por unidade de comprimento de onda, Iλ,
−2 −1 ˚−1 −1
geralmente medida em erg cm s A sr
dEλ = Iλ(~r, ~s, t) dA cos θ dω dλ dt (1.1b)

---

## Página 15

Transporte Radiativo 3
Figura 1.2 - Defini¸c˜ao de intensidade espec´ıfica.
A intensidade integrada pode ser obtida por
∫ ∫
I = Iν dν = Iλ dλ (1.2)
onde a integra¸c˜ao ´e feita em todas as frequˆencias (ou comprimentos de onda),
−2 −1 −1
tendo como unidades erg cm s sr . Note-se que Iν 6= Iλ. Como λ = c/ν,
10
onde c = 3.00 × 10 cm/s ´e a velocidade da luz no v´acuo, temos de (1.2)
Iν dν = Iλ dλ (1.3)
∣ ∣
∣ ∣ 2
dλ c λ
∣ ∣
Iν = Iλ = Iλ = Iλ (1.4)
∣ ∣ 2
dν ν c
Geralmente, n˜ao ´e considerada a dependˆencia de Iν com o tempo, e
Iν(~r, ~s, t) pode ser escrita na forma Iν(~r, ~s). Considerando um sistema de co-
ordenadas esf´ericas (figura 1.3), temos Iν(r, θ, φ), onde r caracteriza a posi¸c˜ao
do ponto considerado e θ (ˆangulo polar) e φ (ˆangulo azimutal) caracterizam a
dire¸c˜ao de propaga¸c˜ao da radia¸c˜ao. Admitindo adicionalmente simetria azi-
mutal, a intensidade em cada ponto pode ser escrita na forma Iν(r, θ).

---

## Página 16

4 Transporte de Energia em Astrof´ısica
Figura 1.3 - Coordenadas esf´ericas.
´
1.2.2 INTENSIDADE MEDIA
A intensidade m´edia Jν pode ser definida por
∫ ∫
Iν dω 1
J = ∫ = I dω (1.5)
ν ν
dω 4π
onde a integra¸c˜ao ´e feita em todos os ˆangulos s´olidos, e a intensidade m´edia
integrada ´e dada por
∫ ∫
1
J = Jν dν = I dω (1.6)
4π
−2 −1 −1 −1 −2
As unidades de Jν s˜ao erg cm s Hz sr , e as de J s˜ao erg cm
−1 −1
s sr . Como no caso anterior podemos de maneira equivalente definir a
intensidade m´edia por intervalo de comprimento de onda, Jλ. Em coordenadas
esf´ericas, em termos de θ e φ, lembrando que o elemento de ˆangulo s´olido ´e
dω = senθ dθ dφ, temos
∫ ∫
2π π
1
J = I(θ, φ) senθ dθ dφ (1.7)
4π
0 0
Se houver simetria azimutal, a intensidade m´edia ´e
∫
π
1
J = I(θ) senθ dθ (1.8)
2
0

---

## Página 17

Transporte Radiativo 5
1.2.3 FLUXO
A intensidade espec´ıfica, como definida acima, envolve uma medida den-
tro de um certo ˆangulo s´olido, o que ´e poss´ıvel no caso de superf´ıcies extensas
como a atmosfera solar (figura 1.1a), nebulosas, como a Nebulosa de Orion
(figura 1.1b), ou gal´axias, como Andrˆomeda (M31) (figura 1.4a). No caso de
estrelas, essas medidas s˜ao dif´ıceis, pois quase todas as estrelas que podemos
observar s˜ao pontuais, ou seja, observamos a radia¸c˜ao integrada em um cone
subtendido pela estrela. Exce¸c˜oes s˜ao algumas estrelas gigantes e supergi-
gantes vermelhas como Betelgeuse, ou α Orionis (figura 1.4b), para as quais
t´ecnicas interferom´etricas modernas permitem obter medidas em diferentes
posi¸c˜oes na superf´ıcie da estrela.
Figura 1.4 - (a) Andrˆomeda (M31), (b) Betelgeuse.
Portanto, para a maior parte das estrelas somente podemos medir seu fluxo,
isto ´e, a intensidade integrada em um certo ˆangulo s´olido. O fluxo est´a rela-
cionado com o vetor de Poynting (ver por exemplo Carroll e Ostlie 2014), e
uma defini¸c˜ao rigorosa desta quantidade est´a al´em dos limites deste texto. O
leitor interessado pode consultar textos mais avan¸cados como Mihalas (1978).
Entretanto, considerando (1.1), podemos observar que a energia transportada
por unidade de ´area e tempo em uma certa dire¸c˜ao perpendicular `a ´area con-
siderada em um intervalo de frequˆencia ´e simplesmente Iν cosθ dω, de modo
−2 −1 −1
que o fluxo monocrom´atico (unidades: erg cm s Hz ) pode ser escrito
∫
Fν = Iν cosθ dω (1.9)

---

## Página 18

6 Transporte de Energia em Astrof´ısica
−2 −1
e o fluxo integrado (unidades: erg cm s ) fica
∫ ∫ ∫
2π π
F = I cos θ dω = I(θ, φ) cos θ senθ dθ dφ (1.10)
0 0
com simetria azimutal, temos
∫
π
F = 2π I(θ) cos θ senθ dθ (1.11)
0
` ′
As vezes s˜ao usadas outras defini¸c˜oes como o fluxo astrof´ısico F = (1/π)F, e
o fluxo de Eddington ´e H = (1/4π)F.
´
E interesssante comentar algumas diferen¸cas entre a intensidade espec´ıfica
e o fluxo de um feixe de radia¸c˜ao propagando-se no v´acuo. Como a intensidade
´e medida por ˆangulo s´olido, `a medida que consideramos pontos mais afastados
da fonte a intensidade n˜ao se altera: menos f´otons chegam a esses pontos,
mas isso ´e contrabalan¸cado por um ˆangulo s´olido menor, o qual decresce na
mesma propor¸c˜ao. Portanto, a intensidade espec´ıfica ´e essencialmente uma
medida do brilho superficial. No caso do fluxo, que ´e uma medida da energia
por unidade de ´area e tempo, o valor medido decresce quando distˆancias
maiores s˜ao consideradas, pois a ´area aumenta com o quadrado da distˆancia,
de modo que o fluxo diminui na mesma propor¸c˜ao. Na verdade, no espa¸co
interestelar, interplanet´ario ou intergal´actico, o fluxo pode diminuir ainda
mais, como veremos mais tarde, no caso de haver absor¸c˜oes no caminho entre
a fonte e o observador.
EXEMPLO 1.1 - Intensidade e fluxo no disco solar
Podemos fazer uma compara¸c˜ao direta entre intensidade espec´ıfica e fluxo
considerando a radia¸c˜ao em λ = 5010 ˚A emitida pelo disco solar. O valor
medido para a intensidade espec´ıfica no centro do disco solar ´e I5010 = 4.03 ×
−1
13 −3 −1 6 −2 −1 −1
10 W m sr = 4.03 × 10 erg cm s ˚A sr . Considerando em
primeira aproxima¸c˜ao que este valor se aplica a todo o disco solar, o fluxo
total em λ = 5010 ˚A na superf´ıcie do Sol, onde a coordenada espacial r =
10
R⊙ = 6.96 × 10 cm, seria

---

## Página 19

Transporte Radiativo 7
∫
F5010(R⊙) ≃ I5010 cosθ dω
∫ ∫
2π π/2
= 2 I5010 dφ cos θ senθ dθ
0 0
∣
2 π/2 (1.12)
sen θ ∣
∣
= 4 π I5010
∣
2
0
= 2 π I5010
−1
7 −2 −1
= 2.53 × 10 erg cm s ˚A
A maior parte da radia¸c˜ao solar concentra-se em uma faixa entre λ ≃ 4500 ˚A
e λ ≃ 7000 ˚A, centrada em λ ≃ 5000 ˚A, como pode ser visto no espectro solar
mostrado na figura 1.5. Nesta figura ´e dada a irradiˆancia solar, ou seja o
−2 −1
fluxo observado no alto da atmosfera terrestre em W m nm em fun¸c˜ao do
comprimento de onda em nm.
Figura 1.5 - Espectro solar no topo da atmosfera.
Portanto, o fluxo total na superf´ıcie do Sol ´e, em primeira aproxima¸c˜ao,
F(R⊙) ≃ F5010 ∆λ = F5010(R⊙) (7000 − 4500)
(1.13)
7 10 −2 −1
= (2.53 × 10 ) (2500) = 6.33 × 10 erg cm s

---

## Página 20

8 Transporte de Energia em Astrof´ısica
Considerando agora a dilui¸c˜ao deste fluxo no caminho entre a superf´ıcie do
13
Sol e a superf´ıcie da Terra, e que a distˆancia Terra-Sol ´e 1 UA = 1.5×10 cm,
o fluxo observado no alto da atmosfera da Terra ´e
( )
2
R⊙
6 −2 −1
F(UA) ≃ F(R⊙) = 1.36 × 10 erg cm s (1.14)
UA
Este valor pode ser comparado com o fluxo solar efetivamente observado no
6 −2 −1
alto da atmosfera (Cox 2000), a “constante solar” S = 1.4×10 erg cm s .
EXEMPLO 1.2 - Convers˜ao de energia solar
33
A luminosidade do Sol ´e L⊙ = 3.85 × 10 erg/s, e seu raio ´e R⊙ = 6.96 ×
10
10 cm, de modo que o fluxo total na superf´ıcie do Sol ´e aproximadamente
L⊙
10 −2 −1
F(R⊙) = = 6.32 × 10 erg cm s (1.15)
2
4 π R
⊙
como vimos no Exemplo 1.1. A Terra est´a a uma distˆancia dT = 1 UA
13
= 1.5 × 10 cm, e o fluxo no alto da atmosfera, desprezando a extin¸c˜ao entre
o Sol e a Terra ´e
( )
2
R⊙
6 −2 −1
F(dT) ≃ F(R⊙) ≃ 1.36 × 10 erg cm s (1.16)
dT
Supondo que o hemisf´erio terrestre voltado para o Sol tenha uma ´area dada
2
por S ≃ 2 π R , onde RT ≃ 6400 km ´e o raio m´edio da Terra, a energia solar
T
por unidade de tempo que atinge nosso planeta por segundo ´e
2 24 17 5
L(dT) ≃ F(dT) (2 π R ) ≃ 3.5 × 10 erg/s = 3.5 × 10 W = 3.5 × 10 TW
T
(1.17)
O valor correto deve ser menor que o valor calculado acima, uma vez que
nem todos os pontos da superf´ıcie terrestre recebem a mesma quantidade de
energia, que depende da inclina¸c˜ao dos raios solares. Podemos admitir que,
de fato, a potˆencia liberada pelo Sol ao nosso planeta ´e mais corretamente
5
da ordem de 1.2 × 10 TW. Este valor pode ser comparado com a taxa que
a civiliza¸c˜ao humana produz e consome energia, que ´e da ordem de 13 TW,
ou seja, cerca de 9000 vezes menor que a potˆencia transmitida pelo Sol. A
maior hidrel´etrica brasileira, Itaipu (figura 1.6), e a maior usina geradora de
energia do mundo, tem uma capacidade instalada da ordem de 14 GW, o que

---

## Página 21

Transporte Radiativo 9
−7
corresponde a 10 do valor solar. Por exemplo, em 2011 a usina produziu
9
92.2 TWh. No mesmo per´ıodo, o Sol liberou cerca de 10 TWh.
Figura 1.6 - A usina hidrel´etrica de Itaipu.
EXEMPLO 1.3 - Luminosidades estelares
33 26
A luminosidade radiativa do Sol ´e L⊙ ≃ 3.85 × 10 erg/s = 3.85 × 10 W =
14 41
3.85 × 10 TW. Em um ano, o Sol emite cerca de 1.22 × 10 erg = 1.22 ×
34 18
10 J = 3.37×10 TWh. Em compara¸c˜ao, a supergigante vermelha brilhante
Antares (α Sco, M1 Ib) com magnitude absoluta m´edia Mv = −5.58, raio
R/R⊙ ≃ 680, temperatura Tef ≃ 3660 K tem luminosidade log(L∗/L⊙) ≃ 4.9,
38 19
ou L∗ ≃ 3.06 × 10 erg/s = 3.06 × 10 TW. Em um ano, Antares emite
45 23
cerca de 9.67 × 10 erg = 2.68 × 10 TWh. Sirius A (α CMa, A1 V), a
estrela mais brilhante do c´eu, com magnitude visual V = −1.46, raio R/R⊙ ≃
1.712, temperatura efetiva Tef ≃ 10500 K tem luminosidade L∗/L⊙ ≃ 25.4,
34 15
ou L∗ ≃ 9.78 × 10 erg/s = 9.78 × 10 TW. Em um ano, Sirius A emite
42 19
3.09 × 10 erg = 8.56 × 10 TWh.
EXEMPLO 1.4 - Flares solares
25
Um intenso flare solar pode liberar uma energia de cerca de 6×10 J. Podemos
comparar este valor com a energia total liberada em um segundo pelo Sol,
25
medida por sua luminosidade. A energia do flare ´e Ef ≃ 6 × 10 J = 6 ×

---

## Página 22

10 Transporte de Energia em Astrof´ısica
32 33
10 erg, enquanto que a luminosidade solar ´e L⊙ ≃ 3.85×10 erg/s = 3.85×
26 33
10 J/s. A energia emitida em 1 segundo ´e E⊙(1s) ≃ 3.85 × 10 erg =
26
3.85 × 10 J. Portanto temos
25
Ef 6 × 10
≃ ≃ 0.16
26
E⊙ 3.85 × 10
correspondendo a 16% da energia luminosa emitida em 1 segundo.
A bomba de H mais potente construida produziu cerca de 50 megatons de
TNT. Podemos estimar quantas destas bombas seriam necess´arias para liberar
9
a energia do flare. Considerando que 1 ton de TNT = 4.18 × 10 J, temos
25
6 × 10
8
nb ≃ = 2.87 × 10
15
(50) (4.18 × 10 )
ou aproximadamente 300 milh˜oes de bombas.
EXEMPLO 1.5 - Intensidade e fluxo a uma distˆancia r de uma estrela
Vamos considerar uma estrela esf´erica de raio R que emite radia¸c˜ao uniforme-
mente em todas as dire¸c˜oes com intensidade I. Vamos estimar a intensidade
m´edia J e o fluxo F a uma distˆancia r da estrela. A intensidade m´edia `a
distˆancia r pode ser obtida pela equa¸c˜ao (1.6), onde a integral deve ser feita
em todo o ˆangulo s´olido compreendido pela estrela. Seja θr o raio angular da
estrela vista da distˆancia r, ou seja,
R
sen θr = (1.18)
r
Lembrando que dω = senθ dθ dφ, a intensidade m´edia ´e dada por
∫ ∫
2π θr
1 1
J(r) = I dφ sen θ dθ = I (1 − cosθr) (1.19)
4 π 2
0 0
que pode ser escrita
[ ]
I
2 2 1/2
J(r) = r − (r − R ) (1.20)
2 r
lembrando que

---

## Página 23

Transporte Radiativo 11
n(n − 1)
n n n−1 n−2 2
(a + b) ≃ a + n a b + a b + . . . (1.21)
2
2 2 1/2 2
e tomando r ≫ R, temos (r −R ) ≃ r−R /2r, de modo que a intensidade
m´edia fica
2
I R
J(r) ≃ (1.22)
2
4 r
Para o fluxo, temos de (1.10)
∫
F(r) = I cosθ dω (1.23)
∫ ∫
2π θr
2
F(r) = I dφ cos θ senθ dθ = π I sen θr (1.24)
0 0
2
π I R
F(r) = (1.25)
2
r
1.2.4 DENSIDADE DE ENERGIA
Vamos considerar um cilindro atrav´es do qual uma radia¸c˜ao de intensi-
dade espec´ıfica Iν se propaga em uma dire¸c˜ao que faz um ˆangulo θ com a
normal `a base, em um tempo dt (figura 1.7). A densidade de energia, ou seja,
a quantidade de energia elementar por unidade de volume e por intervalo de
−3 −1
frequˆencia nesse cilindro (medida em erg cm Hz ) ´e simplesmente
Figura 1.7 - Defini¸c˜ao de densidade de energia.

---

## Página 24

12 Transporte de Energia em Astrof´ısica
dEν Iν dω
= (1.26)
dA cosθ c dt dν c
de modo que a densidade de energia monocrom´atica Uν pode ser escrita
∫
1
Uν = Iν dω (1.27)
c
−3 −1
tendo unidades de erg cm Hz . Em termos de quantidades integradas
3
(unidades: erg/cm ):
∫ ∫ ∫
1 1
U = I dω = I(θ, φ) senθ dθ dφ (1.28)
c c
com simetria azimutal,
∫
π
2π
U = I(θ) senθ dθ (1.29)
c
0
comparando (1.29) com (1.8), temos
4π
U = J (1.30)
c
EXEMPLO 1.6 - Compara¸c˜ao de densidades de energia
Uma nuvem interestelar tem uma densidade num´erica da ordem de n ≃
−3
50 cm e uma temperatura T ≃ 100 K. Portanto, a densidade de energia
t´ermica deste g´as ´e aproximadamente
−16
3 (1.5) (50) (1.38 × 10 ) (100) 3
eT ≃ n k T ≃ ≃ 0.65 eV/cm
−12
2 1.6 × 10
Este valor pode ser comparado com a densidade de energia magn´etica do g´as
difuso. O valor m´edio da intensidade do campo magn´etico no meio interestelar
difuso obtido por exemplo por medidas de dispers˜ao de pulsares, rota¸c˜ao de
Faraday e medidas da emiss˜ao total em r´adio ´e de 5μG. Temos ent˜ao
2 −6 2
B (5 × 10 ) 1
3
eB ≃ ≃ ≃ 0.62 eV/cm
−12
8 π 8 π 1.6 × 10
ou seja, eB ≃ eT

---

## Página 25

Transporte Radiativo 13
˜ ˜
1.2.5 PRESSAO DA RADIAC¸AO
No caso de um g´as perfeito com uma densidade de part´ıculas n, me-
dida em n´umero de part´ıculas por cent´ımetro c´ubico, e uma temperatura
T, sabemos que este g´as exerce uma press˜ao dada por P = n k T, onde
−16
k = 1.38 × 10 erg/K ´e a constante de Boltzmann. No caso de um feixe
de radia¸c˜ao propagando-se em uma certa dire¸c˜ao, podemos tamb´em dizer que
a radia¸c˜ao exerce uma press˜ao Pr, chamada press˜ao da radia¸c˜ao. Podemos
obter uma express˜ao aproximada para Pr considerando a defini¸c˜ao da inten-
sidade espec´ıfica (1.1). A press˜ao ´e essencialmente a taxa de varia¸c˜ao da
quantidade de movimento por unidade de ´area. Um f´oton com frequˆencia ν
−27
tem energia hν e quantidade de movimento h ν/c, onde h = 6.63 × 10
erg s ´e a constante de Planck. Portanto, a quantidade de movimento de
um feixe de radia¸c˜ao com energia elementar dEν ´e simplesmente dEν/c, e a
press˜ao elementar ´e dEν/(c dt dA). Tomando a componente normal da press˜ao
temos dPr = dEν cosθ/(c dt dA). Considerando ainda a press˜ao por inter-
valo de frequˆencia, de (1.1) podemos escrever para a press˜ao da radia¸c˜ao
monocrom´atica em um campo de radia¸c˜ao com intensidade espec´ıfica Iν
∫
1
2
Prν = Iν cos θ dω (1.31)
c
−2 −1
com unidades de din cm Hz . Em termos de quantidades integradas
2
(unidades: din/cm )
∫ ∫ ∫
1 1
2 2
Pr = I cos θ dω = I(θ, φ) cos θ senθ dθ dφ (1.32)
c c
com simetria azimutal
∫
π
2π
2
Pr = I(θ) cos θ sen θ dθ (1.33)
c
0
As quantidades J, F, e Pr podem ser consideradas como momentos da inten-
sidade espec´ıfica, ou momentos de ordem n do campo de radia¸c˜ao, definidos
por
∫
n
Mn = I cos θ dω (1.34)
Para n = 0, temos a intensidade m´edia J, ou a densidade de energia; para
n = 1, ´e obtido o fluxo e, para n = 2, a press˜ao da radia¸c˜ao. Momentos de
ordem superior s˜ao `as vezes usados na teoria do transporte radiativo.

---

## Página 26

14 Transporte de Energia em Astrof´ısica
EXEMPLO 1.7 - O caso isotr´opico
Um caso especial do campo de radia¸c˜ao ´e aquele em que a intensidade es-
pec´ıfica ´e isotr´opica, isto ´e, n˜ao depende da dire¸c˜ao considerada. Nesse caso,
´e f´acil ver que a intensidade m´edia Jν definida em (1.5) pode ser escrita
∫
Iν 4 π
Jν = dω = Iν = Iν (1.35)
4 π 4 π
Esse resultado ´e de f´acil interpreta¸c˜ao: se a intensidade ´e a mesma em todas
as dire¸c˜oes, a m´edia das intensidades ´e seu pr´oprio valor em uma dire¸c˜ao
qualquer. J´a o fluxo, definido por (1.9), fica
∫ ∫ ∫
2π π
Fν = Iν cos θ dω = Iν dφ cos θ senθ dθ = 0 (1.36)
0 0
Este resultado ´e tamb´em de interpreta¸c˜ao simples: se a intensidade ´e a mesma
em todas as dire¸c˜oes, para qualquer dire¸c˜ao escolhida haver´a uma intensidade
igual na dire¸c˜ao oposta, de modo que o fluxo total deve ser nulo. A densidade
de energia definida em (1.27) fica nesse caso
∫
Iν 4π 4 π
Uν = dω = Iν = Jν (1.37)
c c c
Finalmente, a press˜ao da radia¸c˜ao definida em (1.31) fica
∫ ∫ ∫
2π π
Iν Iν 4 π 1
2 2
Prν = cos θ dω = dφ cos θ senθ dθ = Iν = Uν
c c 3 c 3
0 0
(1.38)
EXEMPLO 1.8 - Fluxo parcial em um hemisf´erio
Vimos de (1.36) que o fluxo da radia¸c˜ao ´e nulo no caso isotr´opico. Entretanto,
em algumas aplica¸c˜oes podemos considerar o fluxo parcial em um hemisf´erio
+
F , desprezando a radia¸c˜ao que se propaga no hemisf´erio oposto. Neste caso,
ν
de (1.10) temos
∫ ∫
2π π/2
+
F ≃ dφ Iν cosθ senθ dθ
ν
0 0
∣ (1.39)
2 π/2
sen θ ∣ 1
∣
= 2 π Iν = 2 π Iν = π Iν
∣
2 2
0

---

## Página 27

Transporte Radiativo 15
Este resultado ´e frequentemente usado para obter uma estimativa do fluxo
em diversas situa¸c˜oes, como nas atmosferas das estrelas. Como veremos no
cap´ıtulo 2, a intensidade espec´ıfica no caso isotr´opico ´e a fun¸c˜ao de Planck
Bν(T), ou seja, Iν = Bν(T), e depende unicamente da temperatura.
1.3 EQUAC¸ ˜AO DE TRANSPORTE RADIATIVO
Vamos considerar o caso simples de um feixe de radia¸c˜ao com intensidade
Iν propagando-se atrav´es de uma lˆamina unidimensional, caracterizada pela
dire¸c˜ao s (figura 1.8).
Figura 1.8 - Propaga¸c˜ao da radia¸c˜ao no caso unidimensional.
Durante a propaga¸c˜ao, a radia¸c˜ao pode ser absorvida, e podemos definir um
coeficiente de absor¸c˜ao kν tal que Iν kν seja a intensidade absorvida ao atra-
vessar uma regi˜ao de extens˜ao ds, ou seja, kν Iν = (dIν/ds)abs. Portanto, kν
−1
deve ter unidades de cm no sistema cgs que estamos usando. Analogamente,
dentro da lˆamina pode ocorrer emiss˜ao de radia¸c˜ao na frequˆencia ν, que vamos
caracterizar por um coeficiente de emiss˜ao jν, o qual mede a energia emitida
por unidade de volume e tempo no intervalo de frequˆencia dν dentro de um
−3 −1 −1 −1
ˆangulo s´olido dω. Assim, jν tem como unidades erg cm s Hz sr .
Nesse caso, podemos escrever a equa¸c˜ao de transporte radiativo como
dIν
= jν − kν Iν (1.40)
ds
Uma regi˜ao de pequenas dimens˜oes espaciais em que o coeficiente de
absor¸c˜ao seja alto pode ser equivalente a uma outra regi˜ao mais extensa em
que o coeficiente de absor¸c˜ao seja menor. Por esta raz˜ao, costumamos definir
um parˆametro chamado profundidade ´optica, representado pela letra grega τ.
Vamos neste caso definir a profundidade ´optica por
dτν = −kν ds (1.41)
De acordo com a geometria da figura 1.8, a radia¸c˜ao entra na lˆamina no ponto
1, onde s = 0, sofre emiss˜oes e absor¸c˜oes dentro da lˆamina de largura L e

---

## Página 28

16 Transporte de Energia em Astrof´ısica
emerge no ponto 2, onde s = L, mais pr´oximo do observador. Dependendo da
geometria do problema, a profundidade ´optica pode ser definida de maneira
um pouco diferente.
A profundidade ´optica total da regi˜ao ´e τν(L). Considerando (1.40), a
equa¸c˜ao de transporte fica
dIν jν
= Iν − (1.42)
dτν kν
A raz˜ao jν/kν desempenha um papel importante na teoria do transporte ra-
diativo, sendo denominada fun¸c˜ao fonte
jν
Sν = (1.43)
kν
Em termos da fun¸c˜ao fonte, a equa¸c˜ao de transporte (1.42) pode ser escrita
dIν
= Iν − Sν (1.44)
dτν
As equa¸c˜oes (1.40), (1.42) e (1.44) s˜ao formas equivalentes da equa¸c˜ao de
transporte radiativo. Vamos a seguir considerar suas solu¸c˜oes em alguns casos
simples.
1.4 SOLUC¸ ˜AO GERAL
−τν
Multiplicando ambos os membros da equa¸c˜ao (1.42) por e , obtemos
dIν jν
−τν −τν −τν
e = e Iν − e (1.45)
dτν kν
mas
d dIν
−τν −τν −τν
(e Iν) = e − e Iν (1.46)
dτν dτν
portanto
d jν
−τν −τν
(e Iν) = − e (1.47)
dτν kν
Integrando ao longo da regi˜ao em considera¸c˜ao, entre os pontos 1 e 2 da figura
1.8, obtemos para a intensidade emergente no ponto 2
∫
τν(L)
jν
−τν(L) −τν
Iν(L) = Iν(0) e + e dτν (1.48)
kν
0
Desta equa¸c˜ao vemos que a intensidade emergente ´e a soma de dois termos: o
primeiro d´a a radia¸c˜ao incidente, descontada a absor¸c˜ao que ocorre dentro da

---

## Página 29

Transporte Radiativo 17
lˆamina, que ´e proporcional a exp[−τν(L)]. O segundo termo mede a energia
emitida dentro da lˆamina. Parte deste energia ´e tamb´em absorvida no caminho
entre o local de produ¸c˜ao e a extremidade da lˆamina, o que ´e representado
pela exponencial envolvendo a profundidade ´optica τν dentro da lˆamina. Como
vemos, o termo de emiss˜ao ´e caracterizado pela fun¸c˜ao fonte Sν = jν/kν ao
longo da regi˜ao.
Se os coeficientes de emiss˜ao e absor¸c˜ao forem constantes, isto ´e, n˜ao
dependerem da posi¸c˜ao, de (1.48) temos
jν
−τν(L) −τν(L) −τν(L) −τν(L)
Iν(L) = Iν(0) e + (1 − e ) = Iν(0) e + Sν (1 − e )
kν
(1.49)
Da solu¸c˜ao (1.49) podemos observar que, se os coeficientes jν e kν (e Sν) forem
constantes, a intensidade emergente Iν tende ao valor da fun¸c˜ao fonte Sν, a
partir do valor inicial Iν(0). De (1.49) podemos escrever
Iν(L) Sν
−τν(L) −τν(L)
= e + (1 − e ) (1.50)
Iν(0) Iν(0)
Figura 1.9 - Intensidade e fun¸c˜ao fonte.
Chamando n = Sν/Iν(0) a raz˜ao entre a fun¸c˜ao fonte e a intensidade original,
a figura 1.9 mostra a raz˜ao Iν(L)/Iν(0) em fun¸c˜ao da profundidade ´optica
total τν(L) para n = 1, 2 e 3. Vemos que em todos os casos Iν tende para o
valor da fun¸c˜ao fonte.

---

## Página 30

18 Transporte de Energia em Astrof´ısica
EXEMPLO 1.9 - O caso opticamente fino
Um caso especial ´e aquele em que a profundidade ´optica ´e pequena, que ´e o
caso opticamente fino, ou transparente. Nesse caso, de (1.49) temos
τν(L) ≪ 1 (opticamente fino)
jν jν
Iν(L) = Iν(0) + [1 − (1 − τν(L))] = Iν(0) + τν(L)
kν kν
(1.51)
jν
= Iν(0) + (kν L) = Iν(0) + jν L
kν
ou seja, a intensidade emergente ´e essencialmente igual `a intensidade original,
somada `as emiss˜oes que ocorrem dentro da lˆamina.
EXEMPLO 1.10 - O caso opticamente espesso
Outro caso de interesse ´e o caso oposto, em que a profundidade ´optica ´e muito
grande, o caso opticamente espesso, ou opaco. Temos ent˜ao
τν(L) ≫ 1 (opticamente espesso)
jν
Iν = = Sν (1.52)
kν
Neste caso, as emiss˜oes que ocorrem muito longe da borda da lˆamina n˜ao tem
uma contribui¸c˜ao importante, e a intensidade emergente vem essencialmente
da regi˜ao mais pr´oxima do ponto 2, dentro de um caminho livre m´edio da
borda. O caminho livre m´edio para os f´otons de frequˆencia ν ´e essencialmente
ℓν ∼ 1/kν, de modo que, neste caso, Iν ≃ jν ℓν.
EXEMPLO 1.11 - Emiss˜ao r´adio de regi˜oes HII
Regi˜oes HII, ou regi˜oes de hidrogˆenio ionizado em torno de estrelas quentes,
emitem radia¸c˜ao t´ermica em ondas de r´adio. Nesta faixa espectral, a emiss˜ao
pode ser aproximada pela distribui¸c˜ao de Rayleigh-Jeans, como veremos no
2
cap´ıtulo 2. Para esta distribui¸c˜ao, a intensidade ´e Iν ∝ ν (ver equa¸c˜ao 2.17).
−2
Ocorre que nesta mesma regi˜ao a profundidade ´optica ´e τν ∝ ν . Assim,
para frequˆencias mais baixas (na faixa r´adio), a profundidade ´optica ´e alta, e
temos o caso opticamente espesso. De (1.52) a intensidade ´e proporcional `a
2 `
fun¸c˜ao fonte, ou seja, Iν ∝ Sν ∝ ν . A medida que a frequˆencia aumenta, a
profundidade ´optica diminui, at´e alcan¸car uma situa¸c˜ao em que τν ≪ 1, que

---

## Página 31

Transporte Radiativo 19
2
´e o caso opticamente fino. De (1.51) vemos que Iν ∝ Sν τν. Como Sν ∝ ν
−2
e τν ∝ ν , a intensidade fica aproximadamente constante. Isto pode ser
visto na figura 1.10b, onde ´e mostrado o espectro r´adio da Nebulosa de Orion
(figura 1.10a), uma regi˜ao HII t´ıpica. A ordenada ´e a densidade de fluxo,
−23 −2 −1 −1 −26 −2 −1
dada em Janskys (1 Jy = 10 erg cm s Hz = 10 W m Hz ).
Nesse caso, a transi¸c˜ao entre os regimes opticamente espesso e opticamente
3
fino ocorre para ν ∼ 10 MHz.
Figura 1.10 - Nebulosa de Orion e espectro r´adio.
EXEMPLO 1.12 - O campo de radia¸c˜ao ultravioleta interestelar
Na determina¸c˜ao do campo de radia¸c˜ao ultravioleta interestelar, medidas da
5 −2 −1 ˚−1
Apollo 17 indicam um fluxo nλ = 1.2 × 10 f´otons cm s A para λ =
1500 ˚A. Podemos estimar o fluxo de radia¸c˜ao interestelar neste comprimento
de onda por
h c
Fλ ≃ h ν nλ = nλ (1.53)
λ
−27 10
(6.63 × 10 ) (3 × 10 ) −1
5 −6 −2 −1 ˚
Fλ ≃ (1.2 × 10 ) ≃ 1.6 × 10 erg cm s A
−8
1500 × 10
A densidade de energia neste comprimento de onda pode ser aproximada por
4 π 4 −1
−16 −3 ˚
Uλ ≃ Jλ ≃ Fλ ≃ 2.1 × 10 erg cm A (1.54)
c c

---

## Página 32

20 Transporte de Energia em Astrof´ısica
A varia¸c˜ao do fluxo de radia¸c˜ao interestelar no intervalo de 1000˚A a 3000 ˚A
est indicada aproximadamente pelo ajuste mostrado na figura 1.11. Pode-
′
mos comparar o valor obtido com o valor F estimado pelo ajuste. Temos
λ
aproximadamente
Figura 1.11 - O campo de radia¸c˜ao interestelar no ultravioleta.
−1
′ −6 −2 −1
F ≃ 2.7 × 10 erg cm s ˚A
λ
′ −6
F 2.7 × 10
λ
≃ ≃ 1.7
−6
Fλ 1.6 × 10
ou seja, os dois valores concordam razoavelmente.
1.5 O CAMPO DE RADIAC¸ ˜AO INTERESTELAR
Vamos considerar o transporte da radia¸c˜ao no campo de radia¸c˜ao inte-
restelar e estimar a densidade de energia do campo em um ponto do disco
gal´actico, sob a a¸c˜ao das estrelas, g´as e poeira (cf. Maciel 2002, cap. 2).
Admitindo que a Gal´axia tem a forma de um disco achatado, a intensidade
−2 −1 −1 −1
espec´ıfica da radia¸c˜ao Iν (erg cm s Hz sr ) em uma dada freq¨uˆencia
´e fun¸c˜ao apenas da altura z ao plano gal´actico (figura 1.12). A equa¸c˜ao de
transporte radiativo ´e basicamente a equa¸c˜ao (1.40), mas vamos subdividir
o termo de absor¸c˜ao em duas componentes: a absor¸c˜ao “pura” pelos gr˜aos
−1
de poeira, caracterizada pelo coeficiente de absor¸c˜ao kν dado em cm , e o
“espalhamento”, isto ´e, o desvio da dire¸c˜ao original dos f´otons, caracterizado

---

## Página 33

Transporte Radiativo 21
−1
pelo coeficiente de espalhamento σν, tamb´em medido em cm . Nesse caso,
a equa¸c˜ao de transporte radiativo pode ser escrita
dIν
μ = jν − (kν + σν) Iν + σν Jν (1.55)
dz
onde μ = cosθ, sendo θ o ˆangulo entre a dire¸c˜ao de propaga¸c˜ao do feixe e a
normal ao elemento considerado e jν ´e o coeficiente de emiss˜ao por volume
−3 −1 −1 −1
(erg cm s Hz sr ). Jν ´e a intensidade m´edia da radia¸c˜ao, e admitimos
que a intensidade espalhada ´e proporcional a esta intensidade m´edia, ou seja,
(dIν/dz)esp = σν Jν.
Figura 1.12 - Disco gal´actico.
Vamos definir a profundidade ´optica pela express˜ao
dτν = (kν + σν)dz = kE dz (1.56)
onde kE ´e o coeficiente de extin¸c˜ao total. Com esta defini¸c˜ao, temos que τ = 0
em z = 0 e τ = τH em z = H, a escala de altura do disco. Substituindo em
(1.55) e simplificando temos
dIν
μ = Sν − Iν + γν Jν (1.57)
dτν
onde definimos o albedo dos gr˜aos
σν
γν = (1.58)
kν + σν

---

## Página 34

22 Transporte de Energia em Astrof´ısica
e a fun¸c˜ao fonte
jν
Sν = (1.59)
kν + σν
A equa¸c˜ao (1.57) pode ser resolvida analiticamente, por exemplo usando a
aproxima¸c˜ao de dois feixes de Schuster (1905), como desenvolvido em detalhes
em Maciel (2002, ver tamb´em Mihalas 1978). Neste caso, obtemos para o fluxo
Fν no caso homogˆeneo, em que jν, kν, σν e γν s˜ao independentes de μ,
2
d Fν dJν
= −4(1 − γν) = 4(1 − γν)Fν (1.60)
2
dτ dτν
ν
Esta express˜ao ´e uma equa¸c˜ao diferencial ordin´aria, de segunda ordem, linear,
e com coeficientes constantes. Sua solu¸c˜ao pode ser escrita
[ ] [ ]
1/2 1/2
Fν = A cosh 2(1 − γν) τν + B senh 2(1 − γν) τν (1.61)
x −x x −x
lembrando que senh x = (1/2)(e − e ) e coshx = (1/2)(e + e ). As
constantes A e B podem ser determinadas pelas condi¸c˜oes de contorno. Para
τν = 0, temos Fν(τν) = 0, portanto A = 0, e (1.61) fica
[ ]
1/2
Fν = B senh 2(1 − γν) τν (1.62)
Considerando a fun¸c˜ao fonte Sν obtemos para a intensidade m´edia Jν
[ ]
Sν B
1/2
Jν = − cosh 2(1 − γν) τν (1.63)
1/2
1 − γν 2(1 − γ )
ν
Aplicando a segunda condi¸c˜ao de contorno na borda do disco, onde n˜ao h´a
radia¸c˜ao incidente, temos que, em z = H, τν = τνH obtendo
[ ]
1/2
{ [ ] cosh 2(1 − γ ) τ }
ν νH −1
2Sν
1/2
B = senh 2(1 − γν) τνH + (1.64)
1/2
1 − γν (1 − γ )
ν
Substituindo o valor de B em (1.62) e (1.63) podemos calcular o fluxo e a
intensidade m´edia. Finalmente, a densidade de energia pode ser calculada
por
∫
1 4π
Uν = Iν dω = Jν (1.65)
c c

---

## Página 35

Transporte Radiativo 23
Vamos estimar a densidade de energia em λ = 5500 ˚A, no centro do
espectro vis´ıvel, em um modelo do disco gal´actico, admitindo 2H ≃ 200 pc.
O coeficiente de emiss˜ao j5500 ´e determinado essencialmente pelas estrelas
mais quentes, com tipos espectrais anteriores a M. Adotando uma fun¸c˜ao de
luminosidade t´ıpica, isto ´e, uma distribui¸c˜ao para os diversos tipos espectrais
na Gal´axia (para detalhes ver Maciel 2002, se¸c˜ao 2.5), obtemos um coeficiente
de emiss˜ao total
−1
−28 −3 −1 −1
j = 5.5 × 10 erg cm s ˚A sr
5500
Para o coeficiente de extin¸c˜ao total, podemos adotar um valor m´edio
−22 −1
kE = 3.0 × 10 cm
−2
de modo que τ5500H ≃ 9.3 × 10 . Adotando tamb´em um valor m´edio para
−23 −1 −22
o albedo, γ5500 ≃ 0.2, temos σ5500 ≃ 6.0 × 10 cm e k5500 ≃ 2.4 × 10
−1 −6 −2 −1 ˚−1 −1
cm . A fun¸c˜ao fonte fica S5500 ≃ 1.8 × 10 erg cm s A sr e a
−6 −2 −1 ˚−1 −1
constante B ≃ 3.5 × 10 erg cm s A sr . A intensidade m´edia J5500
−7 −2 −1 ˚−1 −1
no centro do disco, onde τ5500 = 0 ´e J5500 ≃ 2.9×10 erg cm s A sr .
−16 −3 ˚−1
Finalmente, a densidade de energia ´e U5500 ≃ 1.2 × 10 erg cm A , que
−16
pode ser comparada com o valor observado, da ordem de U5500 ≃ 0.6 × 10
−3 ˚−1
erg cm A , e tamb´em com o valor em 1500˚A estimado pelo Exemplo 1.12,
−16 −3 ˚−1
U1500 ≃ 2.1 × 10 erg cm A .
1.6 CAMPO DE RADIAC¸ ˜AO: R ´ADIO AOS RAIOS GAMA
No Exemplo 1.12 e na se¸c˜ao 1.5 consideramos o campo de radia¸c˜ao na
faixa vis´ıvel e ultravioleta, causado basicamente pelas estrelas. Considerando
um intervalo espectral mais amplo, o campo de radia¸c˜ao observado na Gal´axia,
desde as ondas de r´adio at´e os raios γ, ´e mais complexo, como ilustrado na
figura 1.13. A abscissa ´e o logaritmo da frequˆencia ν, e a ordenada ´e o loga-
ritmo do produto ν Uν, onde Uν ´e a densidade de energia. Esta distribui¸c˜ao
tem origens diferentes, refletindo diferentes processos f´ısicos ocorrendo em
diferentes objetos, tanto gal´acticos como extragal´acticos.

---

## Página 36

24 Transporte de Energia em Astrof´ısica
Figura 1.13 - O campo de radia¸c˜ao na Gal´axia.
As principais regi˜oes espectrais indicadas na figura s˜ao:
A: Radia¸c˜ao integrada em r´adio, incluindo radia¸c˜ao cont´ınua e linhas espec-
trais, produzida por diversos processos f´ısicos, como Bremsstrahlung e radia¸c˜ao
s´ıncrotron. A emiss˜ao cont´ınua ´e feita basicamente por el´etrons de alta ener-
gia, por exemplo em restos de supernovas. A emiss˜ao ´e mais intensa no plano
gal´actico pelos el´etrons relativ´ısticos que giram em torno das linhas do campo
magn´etico gal´actico em um processo de radia¸c˜ao s´ıncrotron. Em latitudes
gal´acticas mais altas apresenta an´eis (loops) e filamentos. Inclui ainda emiss˜ao
difusa isotr´opica e a presen¸ca de fontes discretas, geralmente extragal´acticas.
Especialmente importante ´e a linha de 21 cm do H, com frequˆencia 1420 MHz.
A fonte ´e o hidrogˆenio atˆomico neutro em nuvens interestelares e no g´as difuso.
Na faixa milim´etrica as principais fontes s˜ao nuvens frias de CO e hidrogˆenio
molecular.
B: Radia¸c˜ao de fundo c´osmica, remanescente do Big Bang, caracter´ıstica de
um corpo negro com T = 2.7 K. Esta ´e possivelmente a principal evidˆencia do
Big Bang, ocorrido h´a cerca de 13.6 Ganos, uma vez que a emiss˜ao observada
pode ser explicada com uma grande precis˜ao por uma emiss˜ao de corpo negro
com esta temperatura.

---

## Página 37

Transporte Radiativo 25
C: Radia¸c˜ao infravermelha, contendo contribui¸c˜oes gal´acticas e extragal´acticas,
produzida essencialmente em um processo t´ermico pelos gr˜aos interestelares.
No infravermelho distante, com comprimento de onda 12 a 100 μm as fontes
s˜ao basicamente a poeira interestelar, em particular gr˜aos aquecidos pela ra-
dia¸c˜ao estelar em regi˜oes de forma¸c˜ao de estrelas. No infravermelho pr´oximo,
com comprimento de onda 6.8 a 10.8 μm as fontes s˜ao estrelas frias e aver-
melhadas e mol´eculas complexas em nuvens interestelares.
D: Radia¸c˜ao estelar integrada, na faixa vis´ıvel e ultravioleta, produzida ba-
sicamente pelas estrelas distribu´ıdas ao longo do plano gal´actico, como visto
na se¸c˜ao 1.5. Tamb´em ocorrem contribui¸c˜oes do g´as ionizado interestelar e
nuvens escuras de poeira e g´as.
E: Radia¸c˜ao difusa de alta energia, essencialmente radia¸c˜ao X e γ, de origem
gal´actica e extragal´actica. Por exemplo emiss˜oes em raios X com energias de
0.25 a 1.5 keV do g´as quente, produto de choques em explos˜oes de supernovas.
Os raios gama, com energias acima de 300 MeV tˆem como fontes fenˆomenos
de alta energia, como pulsares e colis˜oes de raios c´osmicos. A emiss˜ao associ-
ada ao plano gal´actico ´e produzida pelo g´as interestelar difuso, possivelmente
devida ao decaimento de p´ıons gerados em colis˜oes entre raios c´osmicos e o g´as
interestelar. Al´em disto, as emiss˜oes incluem fontes discretas como pulsares e
quasares.
Portanto, a emiss˜ao de energia observada em toda a faixa espectral acess´ıvel
envolve diversos processos f´ısicos em m´ultiplos objetos, de modo que apenas
uma pequena parte destes processos pode ser considerada neste livro. Mais
detalhes sobre os principais processos f´ısicos de transporte da radia¸c˜ao podem
ser encontrados em Rybicki e Lightman (1979).
EXEMPLO 1.13 - Bremsstrahlung em regi˜oes HII e grupos de gal´axias
Parte da radia¸c˜ao observada em r´adio ´e causada pelo Bremsstrahlung, ou
radia¸c˜ao de desacelera¸c˜ao. Este ´e um tipo de radia¸c˜ao cont´ınua emitida por
um plasma nos comprimentos de onda de r´adio por meio de transi¸c˜oes livre-
livre em ´ıons de H e He. Esta radia¸c˜ao ´e produzida em regi˜oes H II, com
< 3 −3 4
densidade eletrˆonica ne 10 cm , temperatura eletrˆonica Te ∼ 10 K. A
∼
emissividade de um plasma, definida como a potˆencia total emitida por unida-
de de volume, por unidade de ˆangulo s´olido e por unidade de intervalo de
freq¨uˆencia entre ν e ν + dν ´e dada por

---

## Página 38

26 Transporte de Energia em Astrof´ısica
( ) ( )
1/2 2 6 1/2
8 2π Z e me
i −hν/kTe
ǫν = ni ne gf f(ν, Te) e (1.66)
2 3
3 3 m c kTe
e
−3 −1 −1 −1
medida em erg cm s sr Hz . Nesta equa¸c˜ao Zi ´e o n´umero atˆomico dos
´ıons, c ´e a velocidade da luz no v´acuo, e ´e a carga do el´etron, me ´e a massa do
el´etron, h ´e a constante de Planck, k ´e a constante de Boltzmann e gf f ´e o fator
de Gaunt, uma fun¸c˜ao que varia lentamente com a freq¨uˆencia, tipicamente da
ordem da unidade. Portanto, a observa¸c˜ao da emiss˜ao por Bremsstrahlung
pode levar a estimativas da temperatura e densidades eletrˆonicas das regi˜oes
onde ocorre a emiss˜ao.
Neste caso pode ser inclu´ıda a emiss˜ao cont´ınua em r´adio observada em regi˜oes
HII e regi˜oes de forma¸c˜ao estelar (cf. Exemplo 1.11). Por exemplo, para a
regi˜ao HII M20, a temperatura eletrˆonica estimada ´e Te ≃ 8000 K com um
48 −1
n´umero de f´otons no cont´ınuo de Lyman Lc = 5 × 10 s , uma densidade
2 −3
eletrˆonica ne ≃ 10 cm e uma medida de emiss˜ao, definida como a integral
∫
2 4 −6
ao longo da linha de visada ME = n dx = 5 × 10 pc/cm .
e
Analogamente, em grupos de gal´axias, a emiss˜ao em raios X pode atingir
43 45
luminosidades de 10 a 10 erg/s, provavelmente produzida por el´etrons ace-
lerados em um g´as quente que envolve as gal´axias do grupo. Neste caso
as temperaturas estimadas para uma emiss˜ao livre-livre por Bremsstrahlung
7 8
t´ermico opticamente fino s˜ao 10 a 10 K ou 1 a 10 keV para aglomerados com
14 15
massas 10 a 10 M⊙.
EXEMPLO 1.14 - Radia¸c˜ao s´ıncrotron
Esta ´e uma forma de radia¸c˜ao n˜ao t´ermica, emitida por el´etrons relativ´ısticos
ao serem defletidos pelo campo magn´etico existente no meio interestelar, ocor-
rendo no meio interestelar difuso e em restos de supernovas. Para uma dis-
tribui¸c˜ao dos el´etrons homogˆenea e isotr´opica, e um campo magn´etico ho-
mogˆeneo, a emissividade ´e
√ [ ]
3 (γ−1)/2
3 e 3e
(γ+1)/2 −(γ−1)/2
ǫν = K α(γ) B ν (1.67)
2 3 5
8π mec 4πm c
e
−17
Valores t´ıpicos dos parˆametros s˜ao γ ≃ 2.6, α(γ) ≃ 1 e K ≃ 3.3 × 10
γ−1 −3 −6
erg cm para um campo t´ıpico, com B ≃ 3 × 10 Gauss. Em restos de

---

## Página 39

Transporte Radiativo 27
supernovas observa-se emiss˜ao s´ıncrotron por el´etrons relativ´ısticos no campo
10 18
magn´etico do meio em uma vasta faixa espectral, de ν = 10 a ν = 10
Hz aproximadamente, incluindo r´adio e raios X, eventualmente superposta
`a emiss˜ao t´ermica. Resultados recentes Para Cas A sugerem que a emiss˜ao
origina-se em uma camada fina produzida na onda de choque. Para energias
17
da ordem de 1 a 2 keV, ou frequˆencias da ordem de 10 Hz, pode ser obtido um
−1 −2 −1 −1
fluxo da ordem de 2 × 10 f´otons cm s keV com um campo magn´etico
da ordem de 200 μG.
EXERC´ICIOS
1.1 Considere a figura 1.13 e mostre que o produto ν Uν representa a den-
sidade de energia do campo de radia¸c˜ao por intervalo logar´ıtmico de
frequˆencia.
1.2 A componente D na figura 1.13 ´e basicamente a radia¸c˜ao estelar in-
tegrada, que pode ser observada no meio interestelar. A partir do re-
sultado para a densidade de energia em λ = 5500˚A encontrado na se¸c˜ao
1.5, estime o produto ν Uν para esse comprimento de onda e compare seu
resultado com o valor indicado na figura.
1.3 Na faixa ´optica e ultravioleta do espectro ´e costume medir as frequˆencias
em Hz e os comprimentos de onda em ˚A, mas na regi˜ao de alta energia
(raios X e γ) ´e mais usual relacionar a energia dos quanta em eV (ou seus
m´ultiplos) e os comprimentos de onda em ˚A. Obtenha (a) uma express˜ao
para a frequˆencia ν em Hz em fun¸c˜ao do comprimento de onda λ em ˚A,
e (b) uma express˜ao para a energia do quantum Eν em eV em fun¸c˜ao do
comprimento de onda λ em ˚A.
2
1.4 Na fotosfera solar, a opacidade em λ = 5000 ˚A ´e κλ = 0.3 cm /g, onde
κλ ´e o coeficiente de absor¸c˜ao por massa, definido por κλ = kλ/ρ, onde
−7 3
ρ ≃ 2.1×10 g/cm ´e a densidade t´ıpica da fotosfera. Qual ´e a distˆancia
m´edia percorrida por um f´oton com λ = 5000 ˚A na fotosfera solar?
1.5 Uma estrela esf´erica de tipo espectral MIII tem uma luminosidade dada
por log(L/L⊙) = 3.0 e raio R/R⊙ = 100. (a) Qual ´e o fluxo na superf´ıcie
da estrela? (b) Supondo que a estrela est´a a uma distˆancia de 20 pc,
qual seria o fluxo observado no alto da atmosfera da Terra? Despreze a
extin¸c˜ao interestelar.

---

## Página 40

28 Transporte de Energia em Astrof´ısica
REFERˆENCIAS BIBLIOGR ´AFICAS
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
COX, A. N. 2000, Allen’s Astrophysical Quantities, AIP
¨
KARTUNNEN, H., KROGER, P., OJA, H., POUTANEN, M., DONNER, K.
J. 2007, Fundamental Astronomy, Springer
MACIEL, W. J. 1999, Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar, Edusp
(edi¸c˜ao em inglˆes: Introduction to Stellar Structure, Springer 2015)
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
MIHALAS, D. 1978, Stellar Atmospheres, Freeman
RYBICKI, G. B., LIGHTMAN, A. P. 1979, Radiative Processes in Astro-
physics, Wiley
SCHUSTER, A. 1905, Astrophysical Journal, 21, 1
SHU, F. H. 1982, The Physical Universe, University Science Books
SWIHART, T. L. 1968, Astrophysics and Stellar Astronomy, Wiley
ZEILIK, M., GREGORY, S. A. 1998, Introductory Astronomy and Astro-
physics, Brooks Cole

---

## Página 41

## 2
## EQUIL´IBRIO TERMODIN ˆAMICO
2.1 LEI DE KIRCHHOFF E ET
Neste cap´ıtulo, vamos analisar a condi¸c˜ao de equil´ıbrio termodinˆamico
(ET) e algumas de suas principais aplica¸c˜oes em problemas astrof´ısicos. Al-
gumas referˆencias sobre o material deste cap´ıtulo incluem Choudhuri (2010),
Carroll e Ostlie (2014), Maciel (1999, 2002), Zeilik e Gregory (1998), Shu
(1982) e Swihart (1968).
Vamos considerar a equa¸c˜ao de transporte radiativo dada por (1.40)
dIν
= jν − kν Iν (2.1)
ds
Podemos imaginar uma situa¸c˜ao em que a radia¸c˜ao incidente sobre um ob-
jeto, vinda de todas as dire¸c˜oes, tem a mesma natureza da radia¸c˜ao emitida
pelo objeto, isto ´e, a intensidade Iν ´e a mesma. Ap´os um certo tempo, o
objeto alcan¸ca um estado chamado equil´ıbrio termodinˆamico (ET), em que
um equil´ıbrio ´e atingido entre a radia¸c˜ao emitida e a radia¸c˜ao absorvida pelo
objeto. Nesse caso, a intensidade espec´ıfica da radia¸c˜ao ser´a constante, ou
seja, dIν/ds = 0, de modo que (2.1) fica
jν = kν Iν (2.2)

---

## Página 42

30 Transporte de Energia em Astrof´ısica
jν
Iν = = Sν = Bν(T) (2.3)
kν
ou seja, a intensidade ´e idˆentica `a fun¸c˜ao fonte e depende de um ´unico
parˆametro, que ´e a temperatura T. A intensidade neste caso ´e conhecida como
Fun¸c˜ao de Planck Bν(T), ou radia¸c˜ao de corpo negro, dada por
3
2 h ν 1
Bν(T) = (2.4)
2 hν/kT
c e − 1
−2 −1 −1 −1
com unidades: erg cm s Hz sr . A rela¸c˜ao (2.2) ´e a lei de Kirchhoff,
e permite determinar a fun¸c˜ao fonte diretamente em fun¸c˜ao da temperatura,
se a condi¸c˜ao de ET prevalecer. O ET ´e uma condi¸c˜ao idealizada, mas na
pr´atica existem diversas situa¸c˜oes em que esta condi¸c˜ao ´e aproximadamente
verdadeira, inclusive em situa¸c˜oes astrof´ısicas. Por exemplo, um objeto iso-
lado em um envolt´orio adiab´atico tender´a a se aproximar do equil´ıbrio ter-
modinˆamico.
No caso da emiss˜ao de um corpo negro, podemos aplicar as rela¸c˜oes obti-
das no cap´ıtulo 1 para a emiss˜ao isotr´opica, isto ´e, as rela¸c˜oes (1.35), (1.36),
(1.37) e (1.38). Obtemos ent˜ao para a intensidade m´edia, o fluxo, a densidade
de energia e a press˜ao radia¸c˜ao as seguintes rela¸c˜oes
3
2 h ν 1
Jν = Iν = Bν(T) = (2.5)
2 h ν/k T
c e − 1
Fν = 0 (2.6)
3
4 π 8 π h ν 1
Uν = Iν = (2.7)
3 h ν/k T
c c e − 1
3
1 8 π h ν 1
Prν = Uν = (2.8)
3 h ν/k T
3 3 c e − 1
EXEMPLO 2.1 - Energia m´edia dos f´otons em ET
Vamos determinar a energia m´edia dos f´otons em uma situa¸c˜ao de equil´ıbrio
termodinˆamico (ET) caracterizado pela temperatura T. A energia m´edia dos
¯
f´otonsE pode ser obtida por

---

## Página 43

Equil´ıbrio Termodinˆamico 31
∫
∞
Eν nν dν
¯ 0
E = ∫ (2.9)
∞
nν dν
0
onde Eν = h ν ´e a energia do f´oton de frequˆencia ν e nν ´e a densidade de f´otons,
ou seja, nν dν ´e o n´umero de f´otons por unidade de volume com frequˆencia
entre ν e ν+dν. Este n´umero pode ser relacionado com a densidade de energia
Uν por
Uν dν
nν dν = (2.10)
h ν
usando a rela¸c˜ao (2.7) para Uν, temos
2
8 π ν 1
nν dν = dν (2.11)
3 h ν/k T
c e − 1
substituindo (2.11) em (2.9) obtemos
∫ 3
∞ x dx
k T x I
0 e −1 1
¯
E = ∫ = k T (2.12)
∞ 2
x dx
I2
x
0 e −1
onde x = h ν/k T. As duas integrais s˜ao dadas por
∫
∞ 3 4
x dx π
I1 = = (2.13)
x
e − 1 15
0
∫
∞ 2
x dx
I2 = ≃ 2(1 + 1/8 + 1/27 + 1/64 + . . .) ≃ 2.404 (2.14)
x
e − 1
0
¯
Portanto, obtemosE = 2.701 k T.
EXEMPLO 2.2 - Energia dos f´otons vis´ıveis
A energia de um f´oton de luz vis´ıvel com comprimento de onda λ = 5000 ˚A ´e
−27 10
h c (6.63 × 10 ) (3 × 10 )
−12
E = = ≃ 3.98 × 10 erg ≃ 2.49 eV
−8
λ (5000) (10 )
Em uma lˆampada de 100 W, admitida monocrom´atica, o n´umero de f´otons
de 5000 ˚A emitidos por segundo ´e

---

## Página 44

32 Transporte de Energia em Astrof´ısica
7
(100) (10 )
20
nν ≃ ≃ 2.5 × 10
−12
3.98 × 10
20
ou seja a lˆampada emite cerca de 10 f´otons em 1 segundo.
2.2 PROPRIEDADES DA FUNC¸ ˜AO DE PLANCK
Vamos explorar um pouco a equa¸c˜ao (2.4). A figura 2.1 mostra a inten-
sidade Bν(T) em fun¸c˜ao da frequˆencia para alguns valores da temperatura T
7
no intervalo de T = 100 K at´e T = 10 K.
Figura 2.1 - Intensidade da radia¸c˜ao de um corpo negro.
Podemos observar que, para uma dada frequˆencia, a intensidade aumenta para
temperaturas mais altas, enquanto que para uma certa temperatura existe um
valor de ν para o qual a intensidade ´e m´axima. Para obter este valor, basta
encontrar o m´aximo da fun¸c˜ao Bν(T) dada por (2.4), resultando
h νmax = 2.821 k T (2.15)
−16
onde ν est´a em Hz, T em K e k = 1.38 × 10 erg/K ´e a constante de
Boltzmann. Esta rela¸c˜ao ´e conhecida como lei de Wien, e mostra que, para
temperaturas mais altas, o m´aximo da fun¸c˜ao de Planck ocorre em frequˆencias
maiores (ou comprimentos de onda menores).

---

## Página 45

Equil´ıbrio Termodinˆamico 33
EXEMPLO 2.3 - Cor e temperatura
Sabemos que uma barra de ferro aquecida torna-se avermelhada se a tempe-
ratura for da ordem de 1000 graus, ficando amarelada e tendendo para o azul
se a temperatura for ainda mais alta (figura 2.2a). Nesse caso, a emiss˜ao de
luz (radia¸c˜ao) pela barra segue aproximadamente a rela¸c˜ao (2.4), no sentido
de que o comprimento de onda dominante da radia¸c˜ao (sua “cor”) desloca-se
para valores menores (mais “azuis”) `a medida que a temperatura aumenta
(figura 2.2b).
Figura 2.2 - (a) Emiss˜ao de luz por uma barra aquecida. (b) Cor e temperatura.
EXEMPLO 2.4 - Pico da emiss˜ao de energia em estrelas
A estrela Betelgeuse (α Orionis, HD 39801, M2Ib) tem uma temperatura
efetiva Tef = 3600 K. Supondo que sua emiss˜ao pode ser associada a um
corpo negro, o pico da emiss˜ao correspondente a Bν(T) ocorre para
2.821 k Tef
14
νmax = = 2.11 × 10 Hz
h
−4
ou λmax = c/νmax = 1.42 × 10 cm ≃ 14200 ˚A, ou seja, na regi˜ao do
infravermelho. Em compara¸c˜ao, uma estrela quente como Rigel (β Orionis,
HD 34085, B8Ia) com temperatura efetiva Tef = 12100 K, tem um pico em

---

## Página 46

34 Transporte de Energia em Astrof´ısica
14 −5
νmax = 7.10×10 Hz ou λmax = 4.23×10 cm ≃ 4200 ˚A, que est´a na regi˜ao
ultravioleta do espectro.
A fun¸c˜ao de Planck (2.4) tem duas aproxima¸c˜oes importantes, v´alidas
para a regi˜ao de altas ou baixas frequˆencias:
Altas frequˆencias: h ν/k T ≫ 1
Se h ν/k T ≫ 1, ´e f´acil ver que
3
2 h ν
−hν/kT
Bν(T) ≃ e (h ν/k T ≫ 1) (2.16)
2
c
Esta rela¸c˜ao ´e conhecida como distribui¸c˜ao de Wien.
Baixas frequˆencias: h ν/k T ≪ 1
Por outro lado, se h ν/k T ≪ 1, temos
2
2 ν k T
Bν(T) ≃ (h ν/k T ≪ 1) (2.17)
2
c
que ´e a distribui¸c˜ao de Rayleigh-Jeans.
Finalmente, estamos `as vezes interessados em obter o valor integrado da
fun¸c˜ao de Planck, isto ´e, a energia total emitida em todas as frequˆencias, com
−2 −1 −1
unidades erg cm s sr . Definindo a vari´avel x
h ν
x = (2.18)
k T
h dν
dx = (2.19)
k T
obtemos de (2.4)
∫
∞
B(T) = Bν(T) dν
0
∫
∞ 3
2 h ν
= dν
2 h ν/k T
c e − 1
0
∫ (2.20)
4 4 ∞ 3
2 k T x
= dx
3 2 x
h c e − 1
0
4 4 4
2 k T π σ
4
= = T
3 2
h c 15 π

---

## Página 47

Equil´ıbrio Termodinˆamico 35
onde introduzimos a constante de Stefan-Boltzmann
5 4
2 π k
−5 −2 −1 −4
σ = = 5.67 × 10 erg cm s K (2.21)
3 2
15 h c
`
As vezes ´e usada a constante de radia¸c˜ao,
4 σ
−15 −3 −4
a = = 7.57 × 10 erg cm K (2.22)
c
de modo que (2.20) fica
σ a c
4 4
B(T) = T = T (2.23)
π 4 π
A intensidade m´edia ´e J = B, e de (1.37), a densidade de energia integrada ´e
4 π 4 π
4
U = J = B(T) = a T (2.24)
c c
Analogamente, lembrando (1.38) temos para a press˜ao da radia¸c˜ao
1 1
4
Pr = U = a T (2.25)
3 3
A fotosfera das estrelas n˜ao est´a em ET, pois, por defini¸c˜ao, ela ´e a regi˜ao
onde se origina o fluxo de radia¸c˜ao que podemos observar, o qual, portanto,
n˜ao ´e nulo como previsto pela equa¸c˜ao (1.36). Entretanto, podemos aproxi-
mar o fluxo na fotosfera das estrelas por uma express˜ao semelhante `a equa¸c˜ao
(2.23), definindo um parˆametro conveniente, que chamamos temperatura efe-
tiva Tef, vista no Exemplo 2.4. Nesse caso, para uma estrela de raio R e
temperatura efetiva Tef, a luminosidade total, ou seja, a energia emitida em
todas as frequˆencias por unidade de tempo L ´e
2 2 4
L = 4 π R F = 4 πR σ T (2.26)
ef
As rela¸c˜oes (2.23), (2.24), (2.25) e (2.26) s˜ao vers˜oes alternativas da equa¸c˜ao de
Stefan-Boltzmann. A temperatura n˜ao ´e constante na atmosfera das estrelas,
como veremos no cap´ıtulo 3, de modo que a temperatura efetiva deve ser uma
temperatura representativa das condi¸c˜oes m´edias na fotosfera.
As rela¸c˜oes acima foram obtidas em termos das quantidades monocro-
m´aticas definidas em fun¸c˜ao da frequˆencia ν. Naturalmente, podemos obter
rela¸c˜oes equivalentes em fun¸c˜ao do comprimento de onda λ. Nesse caso, temos
para a intensidade espec´ıfica

---

## Página 48

36 Transporte de Energia em Astrof´ısica
2
2 h c 1
Bλ(T) = (2.27)
5 h c/λ k T
λ e − 1
Figura 2.3 - Intensidade da radia¸c˜ao de um corpo negro.
−3 −1 −1 −2 −1 ˚−1 −1
com unidades: erg cm s sr ou erg cm s A sr . A figura 2.3
mostra a fun¸c˜ao Bλ(T) para algumas temperaturas t´ıpicas das atmosferas
estelares, estrelas quentes (T = 7000 K), o Sol (T = 5800 K) e estrelas mais
frias (T = 4000 K).
Para as demais equa¸c˜oes em termos do comprimento de onda, temos
λmax T = 0.290 (lei de Wien) (2.28)
onde λ est´a em cm e T em K.
2
2 h c
−h c/λ k T
Bλ(T) ≃ e (h c/λ k T ≫ 1, W ien) (2.29)
5
λ
2 c k T
Bλ(T) ≃ (h c/λ k T ≪ 1, Rayleigh − J eans) (2.30)
4
λ
Vemos que Bλ 6= Bν, mas como Bλ dλ = Bν dν, a rela¸c˜ao (2.23) para a
intensidade integrada n˜ao se altera

---

## Página 49

Equil´ıbrio Termodinˆamico 37
∫ ∫
∞ ∞
σ a c
4 4
B(T) = Bν dν = Bλ dλ = T = T (2.31)
π 4 π
0 0
EXEMPLO 2.5 - M´aximos de Bν e Bλ
Podemos usar as express˜oes para a lei do deslocamento de Wien em termos da
frequˆencia (2.15) e do comprimento de onda (2.28) para mostrar que os com-
primentos de onda correspondentes aos m´aximos de Bν e Bλ s˜ao diferentes.
Da equa¸c˜ao para Bν temos
h c
= 2.821 k T
λmax
h c 0.51
λmax = ≃
2.821 k T T
da equa¸c˜ao para Bλ temos
0.29
′
λ =
max
T
′
portanto λ 6= λmax
max
λmax 0.51
= ≃ 1.76
′
λ 0.29
max
′ ′
Para as estrelas do Exemplo 2.4 temos λ ≃ 8060 ˚A (Betelgeuse) e λ ≃
max max
2400 ˚A (Rigel).
EXEMPLO 2.6 - F´otons vis´ıveis emitidos pelo Sol
No Exemplo 2.2 vimos que uma lˆampada de 100 W emite aproximadamente
20
cerca de 10 f´otons com λ = 5000 ˚A em 1 segundo. Podemos comparar este
valor com o n´umero de f´otons deste comprimento de onda emitidos pelo Sol.
33
Considerando a luminosidade solar L⊙ = 3.85 × 10 erg/s, e admitindo que
todos os f´otons emitidos pelo Sol tem comprimento de onda de λ = 5000 ˚A, o
n´umero de f´otons emitidos por segundo seria
33
L⊙ 3.85 × 10
44
nλ ≃ = ≃ 9.67 × 10
−12
Eλ 3.98 × 10
Naturalmente, este ´e um limite superior, pois os f´otons emitidos pelo Sol
distribuem-se em um amplo intervalo de comprimentos de onda. Uma estima-
tiva mais precisa consiste em admitir que o Sol emite como um corpo negro

---

## Página 50

38 Transporte de Energia em Astrof´ısica
com uma temperatura de 5800 K. Pela lei de Wien (2.28) o pico da emiss˜ao
de Bλ ocorre justamente para λ = 5000 ˚A, de modo que h c/λ k T ≃ 5 > 1.
Assim, podemos usar a aproxima¸c˜ao dada pela distribui¸c˜ao de Wien (2.29).
A fra¸c˜ao de f´otons emitidos pelo Sol entre os comprimentos de onda λ1 e λ2
pode ser escrita como
∫ ∫
λ2 λ2
Bλ(T) dλ Bλ(T) dλ
λ1 λ1
f = ∫ =
∞
4
B (T) dλ (σ/π) T
λ
0
onde usamos (2.23). Por exemplo, com λ1 = 4950 ˚A e λ2 = 5050 ˚A, obtemos
f ≃ 0.013, de modo que o n´umero de f´otons de 5000 ˚A emitidos pelo Sol por
44 43
segundo nesta faixa espectral ´e nλ ≃ 0.013 × 9.67 × 10 ≃ 1.26 × 10 .
o
Figura 2.4 - Temperaturas do corpo humano ( C) em cores falsas
.
EXEMPLO 2.7 - Emiss˜ao infravermelha do corpo humano
De acordo com a equa¸c˜ao (2.26), a energia emitida por segundo por uma es-
2 4 4
trela ´e L = 4 π R σ T , ou seja, L = S σ T , onde S ´e a ´area da superf´ıcie
ef ef
da estrela. Uma pessoa tamb´em emite radia¸c˜ao. Em condi¸c˜oes normais, a
o
temperatura do corpo humano ´e de cerca de 37 C ou T ≃ 310 K. A ´area do
2
corpo de um homem com 1.80 m e 70 kg ´e S ≃ 1.8 m , aproximadamente. Por-
4 −5 4
tanto, a energia emitida por segundo ´e Lp ≃ (1.8×10 ) (5.67×10 ) (310) ≃
9
9.4 × 10 erg/s = 940 J/s = 940 W. De acordo com a lei de Wien (2.28), o
comprimento de onda que corresponde ao m´aximo da emiss˜ao ´e dado por
−4
λmax T ≃ 0.29, ou seja, λmax ≃ 0.29/310 = 9.35 × 10 cm = 93500 ˚A=
9350 nm = 9.35 μm, ou seja, a emiss˜ao ocorre principalmente no infraver-
melho. Naturalmente este resultado ´e aproximado, n˜ao apenas porque a ´area

---

## Página 51

Equil´ıbrio Termodinˆamico 39
da superf´ıcie varia de pessoa para pessoa, como tamb´em porque partes dife-
rentes do corpo humano tˆem temperaturas diferentes (figura 2.4). Al´em disto,
em uma situa¸c˜ao normal, a pessoa tamb´em absorve energia do meio ambiente,
de modo que a energia efetivamente perdida deve levar em conta a energia ab-
sorvida.
EXEMPLO 2.8 - Emiss˜ao infravermelha pela poeira interestelar
Na se¸c˜ao 1.5 consideramos a determina¸c˜ao do campo de radia¸c˜ao levando
em conta a absor¸c˜ao pelos gr˜aos de poeira interestelar. Estudos detalhados
mostram que esses gr˜aos tˆem uma composi¸c˜ao qu´ımica variada, incluindo
silicatos, ´oxidos de ferro, carbono, etc. Por exemplo, gr˜aos de SiC s˜ao identi-
ficados em meteoritos (figura 2.5b), como o meteorito de Murchison, que caiu
na Austr´alia em 1969 (figura 2.5a). Os gr˜aos podem ser estudados pela ex-
tin¸c˜ao, polariza¸c˜ao e tamb´em pela emiss˜ao de energia na faixa infravermelha
do espectro. Esta emiss˜ao pode ser aproximada por um corpo negro, de modo
que as equa¸c˜oes desta se¸c˜ao s˜ao aplic´aveis.
Figura 2.5 - (a) Meteorito Murchison. (b) Gr˜aos de SiC no meteorito Murchison.
A figura 2.6a mostra a distribui¸c˜ao de energia no infravermelho produzida
pela poeira interestelar na vizinhan¸ca solar, obtida pelo sat´elite COBE. Neste
caso, o pico da emiss˜ao ocorre em λmax ≃ 140 μm, de modo que a temperatura
dos gr˜aos deve ser pr´oxima a Tg ≃ 20 K, de acordo com a lei de Wien (2.28).
Mesmo em objetos distantes, como a gal´axia starburst NGC 6240, situada a
cerca de 100 Mpc, pode ser observada a emiss˜ao pela poeira (figura 2.6b), com
um m´aximo em λmax ≃ 63 μm, correspondendo a uma temperatura Tg ≃ 46 K.

---

## Página 52

40 Transporte de Energia em Astrof´ısica
Figura 2.6 - Distribui¸c˜ao de energia no infravermelho (a) na Gal´axia. (b) na gal´axia
NGC 6240.
EXEMPLO 2.9 - Fluxo na fotosfera solar
No Exemplo 1.7 analisamos o caso isotr´opico, e obtivemos as equa¸c˜oes (1.35)-
(1.38), v´alidas para este caso. Como pode ser observado por exemplo na
equa¸c˜ao (2.4), no ET a intensidade n˜ao depende dos ˆangulos θ e φ, sendo a
mesma em todas as dire¸c˜oes. Portanto, as equa¸c˜oes do caso isotr´opico s˜ao
tamb´em v´alidas no ET.
Considerando a equa¸c˜ao de Stefan-Boltzmann (2.26), podemos escrever
−2 −1
para o fluxo total (erg cm s ) na superf´ıcie do Sol
4
F(R⊙) = π B(Tef) = σ T (2.32)
ef
A temperatura efetiva do Sol ´e aproximadamente Tef = 5800 K, de modo que
o fluxo observado seja equivalente ao de um corpo negro `a temperatura Tef.
Isto pode ser confirmado considerando
4 −5 4 10 −2 −1
F(R⊙) = σ T = (5.67 × 10 ) (5800) = 6.42 × 10 erg cm s (2.33)
ef
Vemos que esse resultado ´e virtualmente idˆentico ao resultado que obtivemos
10 −2 −1
no Exemplo 1.1, F(R⊙) = 6.33 × 10 erg cm s .

---

## Página 53

Equil´ıbrio Termodinˆamico 41
EXEMPLO 2.10 - O g´as coronal
O Sol tem uma atmosfera complexa, compreendendo (i) a fotosfera, onde
´e essencialmente produzida a radia¸c˜ao vis´ıvel, caracter´ıstica de uma tempe-
ratura da ordem de 5800 K, (ii) a cromosfera, (iii) a regi˜ao de transi¸c˜ao, e (iv)
a coroa. As camadas mais externas (ii)-(iv) podem ser observadas em eclipses
ou usando t´ecnicas especiais, e suas propriedades diferem significativamente
das propriedades da fotosfera solar (figura 2.7).
Figura 2.7 - Varia¸c˜ao da temperatura nas camadas externas do Sol.
A regi˜ao mais quente ´e a coroa, o que pode ser constatado pela observa¸c˜ao
de ´atomos altamente ionizados, cuja existˆencia requer altas temperaturas,
como Fe XIV. Os processos f´ısicos respons´aveis pela coroa n˜ao s˜ao completa-
mente conhecidos, mas est˜ao provavelmente ligados a perturba¸c˜oes de origem
magn´etica na fotosfera solar. Uma evidˆencia ´e o fato de que a coroa difere
significativamente dependendo do n´ıvel de atividade do Sol, que est´a ligado a
seu campo magn´etico. Isto pode ser visto na figura 2.8, onde est´a mostrada a
coroa solar (a) na fase quiescente do Sol e (b) na fase de m´aximo.

---

## Página 54

42 Transporte de Energia em Astrof´ısica
Figura 2.8 - Coroa solar durante eclipse (a) no m´ınimo, (b) no m´aximo.
EXEMPLO 2.11 - A radia¸c˜ao c´osmica de fundo
A curva B da figura 1.13 mostra a radia¸c˜ao c´osmica de fundo em microondas,
que ´e um remanescente das altas temperaturas na ´epoca do Big Bang. Dados
observacionais recentes, por exemplo pelos sat´elites COBE/Planck/WMAP,
mostram um ajuste excelente com uma distribui¸c˜ao de corpo negro, como pode
ser visto na figura 2.9, onde est´a mostrado um espectro de corpo negro para
T = 2.7 K, dado pela intensidade da radia¸c˜ao Bν em fun¸c˜ao da frequˆencia ν.
Os pequenos c´ırculos mostram resultados observacionais recentes. Admitindo
que a densidade de energia Uν(T) desta radia¸c˜ao corresponde a um corpo
negro com temperatura T, podemos facilmente mostrar que o pico observado
corresponde a uma temperatura T ≃ 2.7 K. Nas figuras 1.13 e 2.9 o pico est´a
11
aproximadamente em log ν ≃ 11.2, ou seja, ν ≃ 1.6 × 10 Hz. Da figura 1.13
o valor m´aximo alcan¸cando ´e log ν Uν ≃ −12.6. Admitindo uma emiss˜ao de
corpo negro, temos pela lei de Wien (2.15) a temperatura T ≃ h ν/2.821 k ≃
2.7 K. A densidade de energia ´e dada por (2.7), de modo que com os valores
11
T ≃ 2.7 e ν ≃ 1.6 × 10 Hz, temos
4
8 π h ν 1
−13 3
ν Uν = ≃ 2.49 × 10 erg/cm
3
c exp (h ν/k T) − 1
ou seja log(ν Uν) ≃ −12.6, semelhante ao valor da figura 1.13.

---

## Página 55

Equil´ıbrio Termodinˆamico 43
Figura 2.9 - Espectro da radia¸c˜ao c´osmica de fundo em 2.7 K.
2.3 LEI DE STEFAN-BOLTZMANN E AS EQUAC¸ ˜OES DA
TERMODIN ˆAMICA
Vamos mostrar que a lei de Stefan-Boltzmann (2.24) pode ser obtida
diretamente das equa¸c˜oes b´asicas da termodinˆamica no caso do ET (cf. Maciel
1999, Rybicki e Lightman 1979). Da primeira lei da termodinˆamica podemos
escrever
dE = dQ − P dV (2.34)
onde dE ´e a varia¸c˜ao de energia interna do sistema em um processo infi-
nitesimal, dQ ´e o calor absorvido pelo sistema, P ´e a press˜ao do g´as, e
P dV ´e o trabalho realizado pelo sistema em uma expans˜ao infinitesimal com
uma varia¸c˜ao de volume dada por dV , por exemplo colocando um pist˜ao que
permita a expans˜ao do g´as. Da segunda lei temos
dQ = T dS (2.35)
onde dS ´e a varia¸c˜ao de entropia do sistema. Combinando estas equa¸c˜oes
temos
dQ dE P dV
dS = = + (2.36)
T T T

---

## Página 56

44 Transporte de Energia em Astrof´ısica
Sabemos que a densidade de energia do sistema U ´e simplesmente U = E/V ,
e de (2.25) vemos que P = U/3. Portanto, dE = U dV + V dU de modo que
( )
U dV V dU P dV V dU U + U/3
dS = + + = dT + dV
T T T T dT T
V dU 4 U
dS = dT + dV (2.37)
T dT 3 T
mas
( ) ( )
∂S ∂S
dS = dT + dV (2.38)
∂T ∂V
V T
combinando estas duas equa¸c˜oes
( ) ( )
∂S V dU ∂S 4 U
= = (2.39)
∂T T dT ∂V 3 T
V T
portanto
2
∂ S 1 dU 4 U 4 dU
= = − + (2.40)
2
∂T ∂V T dT 3 T 3 T dT
simplificando esta ´ultima express˜ao obtemos
dU 4 U
= (2.41)
dT T
que pode ser integrada, obtendo
log U = 4 log T + log a (2.42)
4
onde a ´e uma constante, ou seja, U(T) = a T , que ´e a lei de Stefan-
Boltzmann. As equa¸c˜oes da termodinˆamica permitem obter a lei de Stefan-
Boltzmann, mas para mostrar que a constante a da equa¸c˜ao (2.42) ´e a mesma
constante a da equa¸c˜ao (2.24) ´e necess´ario usar mecˆanica estat´ıstica quˆantica.
2.4 EQUAC¸ ˜OES DO EQUIL´IBRIO TERMODIN ˆAMICO
Al´em das equa¸c˜oes envolvendo o campo de radia¸c˜ao, o ET pode ser ca-
racterizado por outras 3 equa¸c˜oes que descrevem propriedades do g´as, como
a distribui¸c˜ao de Maxwell, a equa¸c˜ao de Boltzmann e a equa¸c˜ao de Saha (cf.
Maciel 2002).

---

## Página 57

Equil´ıbrio Termodinˆamico 45
˜ ˜
2.4.1 A FUNC¸AO DE DISTRIBUIC¸AO DE VELOCIDADES
DE MAXWELL
A distribui¸c˜ao de Maxwell ´e extremamente ´util em diversos problemas
astrof´ısicos. Esta equa¸c˜ao pode ser colocada em diversas formas (cf. Reif
1965), das quais veremos as mais usuais. Seja f(v)dv a fra¸c˜ao das part´ıculas
de massa m de um sistema cuja velocidade esteja em um intervalo tridimen-
sional entre v e v + dv. No ET a fun¸c˜ao f ´e isotr´opica, e podemos escrever
f(v) = f(v), onde v = |v|. A fun¸c˜ao de distribui¸c˜ao de Maxwell ´e
( )
3/2
m
2
f(v) dv = exp (−mv /2kT) dv (2.43)
2πkT
O valor m´edio (rms) da velocidade ´e
( )
1/2
3kT
2 1/2
〈v 〉 = (2.44)
m
Em algumas situa¸c˜oes astrof´ısicas temos informa¸c˜oes sobre apenas uma com-
ponente da velocidade, frequentemente a velocidade radial. Neste caso, esta-
mos interessados na distribui¸c˜ao maxwelliana de uma componente da veloci-
dade. De (2.43) podemos mostrar que
( )
1/2
m
2
f(vx) dvx = exp (−mv /2kT) dvx (2.45)
x
2πkT
onde f(vx)dvx ´e a fra¸c˜ao das part´ıculas cuja componente de velocidade na
dire¸c˜ao x est´a compreendida no intervalo entre vx e vx + dvx, independente-
mente das outras componentes. Neste caso, 〈vx〉 = 0, pois a componente x
pode ser positiva ou negativa com igual probabilidade. Por´em,
[ ∫ ] ( )
2 1/2 1/2
f(vx) v dvx kT
2 1/2 x
〈v 〉 = ∫ = (2.46)
x
f(vx) dvx m
ou seja, a velocidade rms da distribui¸c˜ao (2.45) ´e uma m´edia representativa
desta distribui¸c˜ao.
A figura 2.10 mostra um exemplo da distribui¸c˜ao de uma componente da
velocidade considerando (i) uma nuvem interestelar com temperatura t´ıpica
T = 100 K e (ii) a fotosfera solar, com uma temperatura T = 5800 K. Em

---

## Página 58

46 Transporte de Energia em Astrof´ısica
ambos os casos consideramos o g´as composto apenas de H atˆomico, de modo
−24
que a massa de cada part´ıcula ´e m = mH = 1.67 × 10 g.
Figura 2.10 - Distribui¸c˜ao de uma componente da velocidade em nuvens interestelares
(T = 100 K) e na fotosfera solar (T = 5800 K).
Como pode ser observado, a distribui¸c˜ao ´e sim´etrica, e torna-se mais estreita
`a medida que temperaturas mais baixas s˜ao consideradas.
Finalmente, estamos tamb´em interessados no caso em que precisamos
′
conhecer a fra¸c˜ao f (v)dv de part´ıculas com v = |v| entre v e v +dv, indepen-
dentemente da dire¸c˜ao do vetor velocidade. Nesse caso temos
′ 2
f (v) dv = 4 π f(v) v dv
( )
3/2
(2.47)
m
2 2
= 4π v exp (−mv /2kT) dv
2πkT
′
A figura 2.11 mostra a distribui¸c˜ao f (v) nos dois casos considerados na figura
2.10, isto ´e, uma nuvem interestelar com T = 100 K e a fotosfera solar com
−24
T = 5800 K, adotando m = mH = 1.67 × 10 g.
Neste caso, podemos definir as velocidades
( )
1/2
8kT
〈v〉 = (velocidade m´edia) (2.48)
πm

---

## Página 59

Equil´ıbrio Termodinˆamico 47
( )
1/2
3kT
2 1/2
〈v 〉 = (velocidade rms) (2.49)
m
( )
1/2
2kT
vp = (velocidade mais prov´avel) (2.50)
m
Figura 2.11 - Distribui¸c˜ao da velocidade f ’(v) em nuvens interestelares (T = 100 K)
e na fotosfera solar (T = 5800 K).
Todas essas velocidades s˜ao representativas das condi¸c˜oes do g´as, e
2 1/2
〈v 〉 ≃ 1.224 vp (2.51)
〈v〉 ≃ 1.128 vp (2.52)
As trˆes distribui¸c˜oes (2.43), (2.45) e (2.47) s˜ao frequentemente usadas em
problemas astrof´ısicos, podendo caracterizar as condi¸c˜oes do g´as de maneira
aproximada, mesmo fora do ET. Nesse caso, a temperatura T que aparece
nessas equa¸c˜oes ´e a temperatura cin´etica do g´as.
EXEMPLO 2.12 - Estimativa da velocidade m´edia
Vamos estimar as velocidades m´edias t´ıpicas dos ´atomos do g´as em algumas
situa¸c˜oes astrof´ısicas. Inicialmente, vamos considerar uma nuvem interestelar

---

## Página 60

48 Transporte de Energia em Astrof´ısica
difusa. Nesse caso, a temperatura cin´etica ´e da ordem de T ≃ 100 K, e sua
composi¸c˜ao ´e basicamente de H neutro, de modo que o peso molecular deste
g´as ´e μ ≃ 1. A velocidade m´edia representativa das part´ıculas ´e
√ √
−16
k T (1.38 × 10 ) (100)
v ≃ = ≃ 0.9 km/s (2.53)
−24
μ mH (1) (1.67 × 10 )
−24
onde mH = 1.67 × 10 g ´e a massa do ´atomo de H. Vamos agora consi-
derar novamente a fotosfera do Sol. Como a temperatura t´ıpica da fotosfera
´e a temperatura efetiva, Tef = 5800 K, e admitindo que o g´as ´e composto
essencialmente de H, temos que μ ≃ 1 e
√ √
−16
k T (1.38 × 10 ) (5800)
v ≃ = ≃ 6.9 km/s (2.54)
−24
μ mH (1) (1.67 × 10 )
Finalmente, vamos considerar o g´as quente que envolve o disco gal´actico,
observ´avel por exemplo pela presen¸ca do ´ıon OVI. Para que este ´ıon exista, ´e
necess´ario que a energia m´edia do g´as seja da ordem do potencial de ioniza¸c˜ao
para transformar OV em OVI, que ´e P I = 114 eV (Cox 2000). Portanto, a
temperatura m´edia deste g´as deve ser dada por k T ≃ P I, de onde obtemos
6
T ∼ 1.3 × 10 K. Com este valor temos para a velocidade t´ıpica dos ´atomos
de oxigˆenio
√ √
−16 6
k T (1.38 × 10 ) (1.3 × 10 )
v ≃ = ≃ 26 km/s (2.55)
−24
μ mH (16) (1.67 × 10 )
˜
2.4.2 A EQUAC¸AO DE BOLTZMANN
Seja um elemento X no estado de ioniza¸c˜ao r. No ET, as popula¸c˜oes
relativas de dois n´ıveis de energia j e k s˜ao relacionadas pela express˜ao
r
nj(X ) grj
= exp [−(Erj − Erk)/kT] (2.56)
r
nk(X ) grk
que ´e a equa¸c˜ao de Boltzmann, onde grj, grk s˜ao os pesos estat´ısticos dos n´ıveis
j e k, e Erj, Erk s˜ao as energias destes n´ıveis.

---

## Página 61

Equil´ıbrio Termodinˆamico 49
EXEMPLO 2.13 - A linha de 21 cm do H
O equil´ıbrio termodinˆamico ´e favorecido pela frequˆencia de colis˜oes, que fazem
uma equiparti¸c˜ao da energia dispon´ıvel, estabelecendo um equil´ıbrio entre as
diversas part´ıculas do sistema. Por esta raz˜ao, situa¸c˜oes em que os proces-
sos colisionais s˜ao dominantes frequentemente podem ser estudades a partir
das equa¸c˜oes do ET. No meio interestelar, em geral, n˜ao h´a equil´ıbrio ter-
modinˆamico, principalmente porque as baixas densidades do g´as nas nuvens
interestelares dificultam os processos colisionais. Apesar disso, em alguns ca-
sos esses processos s˜ao dominantes. A linha de 21 cm do H ´e produzida por
uma transi¸c˜ao radiativa entre dois n´ıveis hiperfinos do estado fundamental,
os quais correspondem `as duas orienta¸c˜oes poss´ıveis do spin do el´etron e do
−6
n´ucleo. Os dois n´ıveis tˆem uma diferen¸ca de energia hν12 = 5.9 × 10 eV, de
modo que a frequˆencia da radia¸c˜ao emitida ´e ν12 = 1420 MHz, correspondendo
a um comprimento de onda λ12 = 21.11 cm. A probabilidade de transi¸c˜ao
espontˆanea do n´ıvel 2 (superior) para o n´ıvel 1 (inferior), medida pelo coefi-
−15 −1
ciente A21 de Einstein, ´e muito baixa: A21 = 2.9 × 10 s . Isto significa
que um ´atomo no n´ıvel 2 fica um longo tempo neste n´ıvel antes de decair para
o n´ıvel 1. Esse tempo ´e essencialmente o inverso do coeficiente A21, ou seja,
7
t2 ∼ 1/A21 ∼ 10 ano. Como esse tempo ´e muito longo, antes de ocorrer
um decaimento h´a uma grande probabilidade de haver colis˜oes com outras
part´ıculas, mesmo nas baixas densidades interestelares. Nestas condi¸c˜oes, os
n´ıveis de energia ser˜ao povoados colisionalmente, resultando popula¸c˜oes carac-
ter´ısticas de ET, ou seja, podemos usar as equa¸c˜oes desta se¸c˜ao, em particular
a equa¸c˜ao de Boltzmann, (2.56). Esta equa¸c˜ao pode ent˜ao ser escrita
n2 g2
−hν12/kT
= e (2.57)
n1 g1
Considerando que a temperatura das nuvens interestelares ´e baixa, T ≃ 100 K,
mais uma simplifica¸c˜ao pode ser feita, pois
h ν12 1.44 0.07
= ≃ ≪ 1 (2.58)
kT λ12(cm) T(K) T
Portanto, para as temperaturas interestelares t´ıpicas podemos desprezar o
termo exponencial em (2.57). Com os pesos estat´ısticos g2 = 3 e g1 = 1, a
raz˜ao das abundˆancias dos n´ıveis 2 e 1 fica
n2 g2 3
≃ = = 3 (2.59)
n1 g1 1

---

## Página 62

50 Transporte de Energia em Astrof´ısica
Figura 2.12 - Emiss˜ao gal´actica em 21 cm.
ou seja, cerca de 3/4 dos ´atomos de H est˜ao no n´ıvel superior, e 1/4 no n´ıvel
inferior, e as popula¸c˜oes dos n´ıveis n˜ao dependem da temperatura. Apesar do
grande tempo de vida do n´ıvel superior, a densidade de coluna do H neutro
22 −2
nas nuvens interestelares ´e t˜ao alta, da ordem de at´e NH ∼ 10 cm , que a
emiss˜ao na linha de 21 cm pode ser observada, como mostrado por exemplo na
figura 2.12. De fato, esta emiss˜ao ´e t˜ao importante, que levou aos primeiros
mapeamentos da estrutura do disco gal´actico, j´a no final da d´ecada de 1950.
˜
2.4.3 A EQUAC¸AO DE SAHA
A equa¸c˜ao de ioniza¸c˜ao de Saha exprime a distribui¸c˜ao dos ´atomos do
elemento X nos diversos est´agios de ioniza¸c˜ao em ET, podendo ser obtida pela
generaliza¸c˜ao da equa¸c˜ao de excita¸c˜ao de Boltzmann. A equa¸c˜ao de Saha ´e
r+1
n(X ) ne fr+1fe
= (2.60)
r
n(X ) fr
onde as fun¸c˜oes de parti¸c˜ao dos ´atomos fr e fr+1 s˜ao dadas por
∑
r
f(X ) = fr = grk exp (−Erk/kT) (2.61)
k
onde grk ´e novamente o peso estat´ıstico e Erk a energia correspondente. A
fun¸c˜ao de parti¸c˜ao dos el´etrons livres por unidade de volume fe ´e dada por
( )
3/2
2 π me k T
fe = 2 (2.62)
2
h

---

## Página 63

Equil´ıbrio Termodinˆamico 51
−28
onde me = 9.11 × 10 g ´e a massa do el´etron. Uma aproxima¸c˜ao usual
consiste em considerar apenas os primeiros termos das fun¸c˜oes de parti¸c˜ao
atˆomicas
fr ≃ gr,1 exp (−Er,1/kT) (2.63)
fr+1 ≃ gr+1,1 exp (−Er+1,1/kT) . (2.64)
Neste caso, (2.60) fica
( )
r+1 3/2
n(X ) ne 2 π me k T gr+1,1
(−∆Er/kT)
≃ 2 e (2.65)
r 2
n(X ) h gr,1
r
onde ∆Er = Er+1,1 − Er,1 ´e a energia necess´aria para ionizar o elemento X
a partir do estado fundamental.
EXEMPLO 2.14 - Ioniza¸c˜ao do H
Vamos considerar uma aplica¸c˜ao simples da equa¸c˜ao de Saha (2.65) para o
H na atmosfera solar. De acordo com modelos para a fotosfera solar (Cox
2000), em um ponto t´ıpico da fotosfera, temos uma densidade eletrˆonica ne ≃
13 −3
2 × 10 cm . Para o H, o potencial de ioniza¸c˜ao ´e de 13.6 eV, e os pesos
estat´ısticos s˜ao g1 = 2 (para r = 1, ou seja, ´atomos neutros de H, com
densidade nH) e g2 = 1 (para r = 2, ou seja, pr´otons, com densidade np). De
(2.65) obtemos
( )
np ne 68544
log ≃ 15.38 + 1.5 log T − (2.66)
nH T
−3
com T em K e n em cm . Podemos definir o grau de ioniza¸c˜ao do H por
np (np/nH)
x = = (2.67)
np + nH 1 + (np/nH)
Portanto, admitindo uma densidade eletrˆonica constante, de (2.66) podemos
obter np/nH para cada temperatura, e de (2.67) o grau de ioniza¸c˜ao do
hidrogˆenio. A figura 2.13 mostra os resultados para temperaturas 5000 <
T(K) < 12000. Vemos que, nas condi¸c˜oes adotadas, o H est´a essencialmente
neutro para as temperaturas mais baixas, T ≤ 8000 K, e ionizado para tem-
peraturas mais altas.

---

## Página 64

52 Transporte de Energia em Astrof´ısica
Figura 2.13 - Ioniza¸c˜ao do H.
2.5 DESVIOS DO EQUIL´IBRIO TERMODIN ˆAMICO
2.5.1 COEFICIENTES DE DESVIO
Na maior parte das situa¸c˜oes astrof´ısicas, o equil´ıbrio termodinˆamico es-
trito n˜ao prevalece, de modo que, a rigor, as equa¸c˜oes das se¸c˜oes anteriores
n˜ao s˜ao aplic´aveis. Entretanto, frequentemente elas s˜ao usadas para obter
estimativas, ou c´alculos de ordens de grandeza, com resultados aproximada-
mente corretos. Nesse caso, o parˆametro T que aparece nestas equa¸c˜oes tem
um significado mais complexo, n˜ao sendo mais identificado com a temperatura
absoluta caracter´ıstica do ET. Por exemplo, na distribui¸c˜ao de Maxwell esse
parˆametro ´e a temperatura cin´etica Tk, na equa¸c˜ao de Boltzmann ´e a tem-
peratura de excita¸c˜ao Tex, na equa¸c˜ao de Saha ´e a temperatura de ioniza¸c˜ao
Ti, e na fun¸c˜ao de Planck ´e a temperatura de radia¸c˜ao Tr ou a temperatura
de cor Tc. Em atmosferas estelares definimos a temperatura efetiva Tef, como
vimos. Naturalmente, se Tk = Tex = Ti = Tr = Tc = Tef, temos uma
situa¸c˜ao de equil´ıbrio termodinˆamico, e quanto mais discrepantes forem essas
temperaturas, maiores ser˜ao os desvios com rela¸c˜ao ao ET.
EXEMPLO 2.15 - Masers em estrelas gigantes e supergigantes frias
Um exemplo de um desvio do ET ´e a emiss˜ao MASER observada na radia¸c˜ao
em microondas emitida pelos envelopes circunstelares de estrelas gigantes e
supergigantes vermelhas, como as estrelas AGB, OH/IR e Miras. Desde o
final da d´ecada de 1960, observa¸c˜oes de envolt´orias dessas estrelas mostram
emiss˜oes vari´aveis no tempo das mol´eculas de OH (em 1612, 1665, 1667, 1720

---

## Página 65

Equil´ıbrio Termodinˆamico 53
MHz, ou 18 cm), H2O (em 22 GHz) e SiO (em 43 GHz). No caso de OH,
a emiss˜ao tem frequentemente dois picos (figura 2.14a), identificados como
a emiss˜ao vinda das camadas do envelope que se aproximam e se afastam
do observador, respectivamente (figura 2.14b). Nesse caso, a velocidade da
estrela est´a localizada a meio termo entre as duas emiss˜oes. Esta emiss˜ao vem
das camadas mais externas do envelope, enquanto que as emiss˜oes de H2O e
SiO s˜ao produzidas nas regi˜oes mais internas.
Figura 2.14 - Masers de OH em 1612 MHz em estrelas OH/IR.
A temperatura do envelope ´e ainda mais baixa que a temperatura efetiva
das estrelas, sendo da ordem de 1000 K, o que ´e necess´ario para a existˆencia
de mol´eculas. Supondo que a emiss˜ao seja t´ermica, podemos usar a fun¸c˜ao
de Planck em sua aproxima¸c˜ao para h ν ≪ k T, a distribui¸c˜ao de Rayleigh-
Jeans (2.17). Neste caso, vemos que a intensidade I ∝ T, ou seja, a medida
da intensidade da emiss˜ao fornece diretamente uma medida da temperatura,
que no caso ´e chamada temperatura de brilho Tb. Ocorre que, nesses casos,
10 15
a temperatura de brilho medida ´e muito alta, Tb ∼ 10 − 10 K, muito su-
perior `a temperatura cin´etica do g´as, que ´e da ordem de 1000 K. Portanto,
temos aqui uma emiss˜ao claramente de origem n˜ao t´ermica, evidenciando um
desvio do ET. No ET, a equa¸c˜ao de Boltzmann (2.56) mostra que para uma
dada temperatura, os n´ıveis superiores s˜ao em geral menos povoados que os
n´ıveis inferiores. Estudos detalhados mostram que a radia¸c˜ao observada em
microondas ´e devida a um processo de amplifica¸c˜ao da radia¸c˜ao causado por
um aumento no n´umero de el´etrons nos n´ıveis superiores, muito acima do
previsto pela equa¸c˜ao de Boltzmann, ou seja, h´a uma invers˜ao de popula¸c˜oes
dos n´ıveis de energia. Em termos da equa¸c˜ao de transporte radiativo, a in-
vers˜ao implica em uma profundidade ´optica negativa. A radia¸c˜ao incidente

---

## Página 66

54 Transporte de Energia em Astrof´ısica
(background radiation) ou a radia¸c˜ao produzida na pr´opria camada podem ser
amplificadas pelo “bombeamento” dos n´ıveis inferiores para os n´ıveis superi-
ores, que ´e causado pela radia¸c˜ao infravermelha que permeia o envelope, dando
origem `a amplifica¸c˜ao da radia¸c˜ao em microondas caracter´ıstica da emiss˜ao
MASER (microwave amplification by stimulated emission of radiation).
No caso mais geral, para dois n´ıveis j e k, fora do ET podemos definir os
chamados coeficientes de desvio
r r
nj(X ) nk(X )
bj = bk = (2.68)
∗ r ∗ r
n (X ) n (X )
j k
onde usamos um asterisco (*) para caracterizar a condi¸c˜ao de ET. Nessas
condi¸c˜oes, (2.56) pode ser escrita
r
nk(X ) bk grk
= exp (−hνjk/kT) (2.69)
r
nj(X ) bj grj
onde νjk = (Erk − Erj)/h ´e a freq¨uˆencia do f´oton emitido ou absorvido em
uma transi¸c˜ao radiativa entre os n´ıveis j e k, admitindo Erj < Erk, e T ´e a
temperatura de excita¸c˜ao. De (2.69) vemos que a raz˜ao entre as popula¸c˜oes
dos n´ıveis j e k pode ser determinada conhecendo-se os coeficientes de desvio bj
e bk. A determina¸c˜ao desses coeficientes ´e complexa e depende das condi¸c˜oes
f´ısicas de cada caso.
Considerando agora a distribui¸c˜ao de velocidades, em ET prevalece a
distribui¸c˜ao de Maxwell, como vimos. No caso geral, podem ocorrer co-
lis˜oes el´asticas entre as part´ıculas, que tendem a estabelecer uma distribui¸c˜ao
maxwelliana, mas tamb´em pode haver colis˜oes inel´asticas, em que isso n˜ao
ocorre. Nas colis˜oes inel´asticas h´a troca de energia entre a energia cin´etica das
part´ıculas e alguma outra forma de energia, como nos processos de excita¸c˜ao,
ioniza¸c˜ao, recombina¸c˜ao e dissocia¸c˜ao, no caso de mol´eculas. Se esses proces-
sos forem dominantes haver´a um maior desvio com rela¸c˜ao `a distribui¸c˜ao de
Maxwell. Caso contr´ario, a temperatura cin´etica Tk ´e um parˆametro repre-
sentativo da energia do g´as.
2.5.2 FLUXO RADIAL NO INTERIOR ESTELAR
O equil´ıbrio termodinˆamico (ET) ´e uma excelente aproxima¸c˜ao para mui-
tas das aplica¸c˜oes relativas ao interior das estrelas. Entretanto, essa hip´otese
n˜ao ´e correta, uma vez que existe um fluxo radial de energia, o que est´a em

---

## Página 67

Equil´ıbrio Termodinˆamico 55
desacordo com a condi¸c˜ao de ET estrito, representada pela equa¸c˜ao (1.36).
Em uma geometria plano-paralela, em que a intensidade espec´ıfica depende
apenas da coordenada polar θ, em uma aproxima¸c˜ao mais real´ıstica do interior
estelar o campo de radia¸c˜ao pode ser expandido em s´erie de Fourier da forma
I(θ) = I0 + I1 cosθ + . . . (2.70)
onde I0 ´e a componente isotr´opica e I1 ´e uma pequena anisotropia, respons´avel
pelo fluxo. Vamos examinar cada uma das principais quantidades definidas
para o campo de radia¸c˜ao com a intensidade dada por (2.70).
Aplicando a defini¸c˜ao da intensidade m´edia, dada pela equa¸c˜ao (1.7),
obtemos
∫
π
1
J = (I0 + I1 cosθ) senθ dθ = I0 (2.71)
2
0
ou seja, a intensidade m´edia depende apenas da componente isotr´opica do
campo de radia¸c˜ao, como no caso do ET. Substituindo agora (2.70) na defi-
ni¸c˜ao do fluxo (1.10)
∫
π
4π
F = 2π (I0 + I1 cos θ) cos θ senθ dθ = I1 (2.72)
3
0
Como pod´ıamos imaginar, o fluxo depende apenas da componente anisotr´opica
I1. Para a densidade de energia, de (2.70) e (1.28) temos
∫
π
2π 4π
U = (I0 + I1 cos θ) senθ dθ = I0 (2.73)
c c
0
Finalmente, de (2.70) e (1.33), a press˜ao da radia¸c˜ao Pr pode ser escrita
∫
π
2π 4π
2
Pr = (I0 + I1 cos θ) cos θ senθ dθ = I0 (2.74)
c 3c
0
Nos dois ´ultimos casos obtemos as mesmas express˜oes v´alidas para o ET.
2.5.3 ET, ETL, E NETL
Fora do ET, um caso especial ocorre quando a distˆancia na qual a tempe-
ratura varia de maneira apreci´avel D for muito grande com rela¸c˜ao ao caminho
livre m´edio λ das part´ıculas do g´as, isto ´e, a distˆancia m´edia percorrida pelas

---

## Página 68

56 Transporte de Energia em Astrof´ısica
part´ıculas antes de uma colis˜ao ´e pequena com rela¸c˜ao `a distˆancia em que a
temperatura varia apreciavelmente. Isto significa que as part´ıculas sofrer˜ao
colis˜oes (e equiparti¸c˜ao de energia) em um volume onde a temperatura n˜ao
variou muito. Isto caracteriza o Equil´ıbrio Termodinˆamico Local ETL, de
modo que o problema pode ser tratado como em ET, desde que um n´umero
suficientemente grande de camadas seja considerado, nas quais a hip´otese
λ ≪ D seja v´alida.
EXEMPLO 2.16 - ETL na fotosfera solar
Um exemplo da aproxima¸c˜ao de ETL pode ser a fotosfera solar. Modelos para
a fotosfera, como os modelos citados de Cox (2000), mostram que em uma
regi˜ao onde a temperatura ´e da ordem de T ≃ 5800 K, a temperatura varia
cerca de ∆T ≃ 200 K em uma distˆancia ∆R ≃ 25 km. Portanto, em ordem de
grandeza, a escala de altura para as varia¸c˜oes de temperatura ´e
T 5800
hT ≃ ≃ ≃ 700 km (2.75)
|dT /dR| 200/25
Podemos considerar a fotosfera solar composta de ´atomos de H, com uma
17 −3
densidade t´ıpica nH ∼ 10 cm . A se¸c˜ao de choque de colis˜oes entre os
2 −16 −2
´atomos de H ´e dada aproximadamente por σH ≃ π a ≃ 10 cm , onde
0
−8
a0 ∼ 10 cm ´e o raio da primeira ´orbita de Bohr. Portanto, o caminho livre
m´edio dos ´atomos de H ´e, aproximadamente
1 1
λH ∼ ∼ ∼ 0.1 cm (2.76)
17 −16
nH σH (10 ) (10 )
Vemos que λH ≪ hT , ou seja, a aproxima¸c˜ao de ETL ´e uma aproxima¸c˜ao
razo´avel para este caso.
No caso mais geral, em que o equil´ıbrio termodinˆamico local (ETL) n˜ao
pode ser aplicado, temos o caso de n˜ao equil´ibrio termodinˆamico local, ou
NETL. Neste caso, ´e necess´ario considerar todos os processos f´ısicos impor-
tantes (ou pelo menos os mais importantes) no povoamento dos diversos n´ıveis
de energia de todos os componentes do g´as, assim como todos os ´ıons de to-
dos os elementos relevantes. O estudo desses casos ´e mais complexo, e o
leitor interessado pode consultar discuss˜oes mais detalhadas de alguns desses
processos em Rybicki e Lightman (1979) e Maciel (2002).

---

## Página 69

Equil´ıbrio Termodinˆamico 57
EXEMPLO 2.17 - O fluxo cont´ınuo em estrelas AGB
Figura 2.15 - Espectro ISO da estrela AGB TT Cyg. Curva preta espessa: espectro
observado, com limites em azul claro; curva mais fina vermelha: modelo num´erico;
linha cont´ınua superior preta: modelo da emiss˜ao cont´ınua; curva grossa superior
azul: ajuste de corpo negro calibrado para um fluxo de 100 Jy em 3.47 micra.
Estrelas do ramo assint´otico das gigantes (Asymptotic Giant Branch, AGB)
s˜ao objetos frios com temperaturas efetivas da ordem de 3000 K e composi¸c˜ao
qu´ımica caracter´ıstica de objetos ricos em oxigˆenio ou em carbono. Ob-
serva¸c˜oes obtidas com o sat´elite ISO (Infrared Space Observatory) permitem
obter espectros detalhados das fotosferas destas estrelas, como mostrado na
figura 2.15 para a estrela AGB rica em carbono TT Cyg (Jorgensen et al.
2000). Neste objeto, a raz˜ao de abundˆancias entre carbono e oxigˆenio ´e C/O
≃ 1.5, o que caracteriza uma estrela carbonada. A figura mostra o espectro de
TT Cyg entre 2 e 20 μm, aproximadamente. A curva preta ´e o espectro obser-
vado, incluindo limites em azul claro, destacando algumas linhas de absor¸c˜ao
na faixa de 3 e 5 μm; a curva mais fina vermelha ´e o melhor ajuste obtido
por um modelo de atmosfera, e a linha fina superior (preta) mostra o espectro
cont´ınuo calculado pelo modelo. Para esta estrela, o melhor ajuste corre-
sponde a uma temperatura efetiva de Tef = 2900 K e gravidade log g = −1.0,
2
ou g = 0.10 cm/s . Com este valor da temperatura podemos estimar o fluxo de
corpo negro usando a equa¸c˜ao (2.4) adotando Fν = π Bν(Tef), como mostrado

---

## Página 70

58 Transporte de Energia em Astrof´ısica
pela linha azul grossa na figura. Neste caso, o fluxo foi calibrado pelo fluxo
cont´ınuo do modelo em λ ≃ 3.47 μm, onde Fν = 100 Jy. Vemos que um ajuste
simples, baseado na fun¸c˜ao de Planck, n˜ao se afasta muito do resultado do
modelo num´erico.
Vamos concluir esta discuss˜ao sobre o equil´ıbrio termodinˆamico com al-
guns coment´arios sobre os espectros observados em fontes astrof´ısicas. Da
rela¸c˜ao (1.51), vemos que no caso opticamente fino Iν ≃ jν L, ou seja, a ra-
dia¸c˜ao proveniente de uma fonte opticamente fina ´e basicamente determinada
por seu coeficiente de emiss˜ao.
Figura 2.16 - (a) A nebulosa planet´aria NGC 2346 (b) Espectro ´optico.
Por outro lado, o coeficiente de emiss˜ao ´e significativamente mais alto
nas linhas espectrais, de modo que a emiss˜ao de um g´as opticamente fino deve
estar contida essencialmente nas linhas espectrais. Um exemplo deste caso
ocorre com o espectro ´optico das nebulosas planet´arias, nuvens de g´as em
volta de estrelas centrais remanescentes de estrelas de massa intermedi´aria
(0.8 M⊙ a 8 M⊙). Na figura 2.16a vemos a nebulosa NGC 2346 e o seu espec-
tro ´optico (figura 2.16b). Nesse caso, podem ser observadas diversas linhas
espectrais de emiss˜ao, superpostas a um cont´ınuo muito fraco ou mesmo in-
existente.
No caso oposto, de um g´as opticamente espesso, de (1.52) e (2.3) vemos
que Iν ≃ Sν = Bν(T) em ET. Portanto, um objeto opticamente espesso deve
em princ´ıpio ter uma emiss˜ao cont´ınua como a de um corpo negro, como vimos
por exemplo no caso da barra de ferro (figura 2.2) e da emiss˜ao infravermelha
pelos gr˜aos interestelares (figura 2.6).

---

## Página 71

Equil´ıbrio Termodinˆamico 59
No caso das estrelas, isto tamb´em ´e aproximadamente correto. Na figura
2.17 temos um espectro solar como visto acima da atmosfera da Terra (curva
amarela), uma curva caracter´ıstica de um corpo negro a uma temperatura T =
5500 K (curva s´olida), a radia¸c˜ao observada ao n´ıvel do mar (curva vermelha)
e algumas bandas moleculares atmosf´ericas.
Figura 2.17 - Espectro solar acima da atmosfera da Terra, ao n´ıvel do mar e um corpo
negro com temperatura de 5500 K.
Um espectro solar foi tamb´em mostrado na figura 1.5. Vemos naquela
figura que, superposta `a emiss˜ao cont´ınua, est˜ao diversas linhas de absor¸c˜ao.
Isto mostra que a hip´otese de equil´ıbrio termodinˆamico n˜ao ´e exatamente
v´alida. De fato, a temperatura do g´as varia com a profundidade na atmosfera
solar, havendo portanto um gradiente de temperatura, que n˜ao ´e admitido no
ET estrito. Portanto, as linhas espectrais de absor¸c˜ao observadas no espectro
solar decorrem da passagem da radia¸c˜ao cont´ınua, vinda das camadas mais
internas, pelas camadas mais externas e frias da estrela.
No caso das figuras 2.16 e 2.17 temos uma aplica¸c˜ao das leis de Kirch-
hoff, como pode ser ilustrado na figura 2.18. Vemos que um objeto quente
e opaco, como um g´as quente e denso, ou um objeto s´olido e quente, emite
essencialmente radia¸c˜ao cont´ınua (primeira lei); um objeto quente, mas com
baixa densidade emite principalmente em linhas espectrais (segunda lei), e
objetos difusos e mais frios na linha de visada de objetos quentes e densos
produzem linhas de absor¸c˜ao superpostas ao espectro cont´ınuo (terceira lei).

---

## Página 72

60 Transporte de Energia em Astrof´ısica
Figura 2.18 - Ilustra¸c˜ao das leis de Kirchhoff.
´
EXERCICIOS
2.1 Considerando a temperatura efetiva do Sol, Tef = 5800 K e o seu raio
10
m´edio, R⊙ = 6.96 × 10 cm, (a) estime a luminosidade solar, admitindo
que o Sol ´e uma estrela esf´erica. (b) Compare seu resultado com a lumi-
nosidade obtida a partir do fluxo determinado no Exemplo 1.1.
2.2 Na figura 1.13 a curva E ´e identificada como uma radia¸c˜ao de alta energia,
19
na faixa dos raios X. Considere a radia¸c˜ao com frequˆencia ν = 10 Hz.
Nesta faixa, os raios X s˜ao conhecidos como raios X “duros”. Qual ´e a
energia do quantum associado a esta radia¸c˜ao, em ergs e keV?
2.3 Mostre que a equa¸c˜ao de Saha (2.65) pode ser colocada na forma
[ ] ( )
r+1
n(X ) ne 2 gr+1,1 5040
log = 15.38 + log + 1.5 log T − ∆Er
r
n(X ) gr,1 T
−3
onde T est´a em K, ∆Er em eV e n em cm .

---

## Página 73

Equil´ıbrio Termodinˆamico 61
o
2.4 O h´elio tem trˆes est´agios de ioniza¸c˜ao: neutro (He ), uma vez ionizado
+ ++
(He ) e duas vezes ionizado (He ). Podemos definir as fra¸c˜oes de cada
est´agio por
o + ++
n(He ) n(He ) n(He )
xo = x+ = x++ =
n(He) n(He) n(He)
o + ++
onde n(He) = n(He ) +n(He ) +n(He ). (a) Obtenha express˜oes para
+ o ++ +
xo, x+ e x++ em fun¸c˜ao das raz˜oes n(He )/n(He ) e n(He )/n(He ).
(b) Fa¸ca um gr´afico semelhante ao da figura 2.13 mostrando as varia¸c˜oes
de xo, x+ e x++ com a temperatura. Considere que a press˜ao eletrˆonica
2
´e Pe = ne k T = 1 din/cm . Dados: go = 1, g+ = 2, g++ = 1, ∆Eo =
24.58 eV e ∆E+ = 54.41 eV.
2.5 Prove as rela¸c˜oes (2.15) e (2.28).
ˆ ´
REFERENCIAS BIBLIOGRAFICAS
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
COX, A. N. 2000, Allen’s Astrophysical Quantities, AIP
JORGENSEN, U. G., HRON, J., LOIDI, R. 2000, Astronomy & Astrophysics,
356, 253
MACIEL, W. J. 1999, Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar, Edusp
(edi¸c˜ao em inglˆes: Introduction to Stellar Structure, Springer 2015)
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
REIF, F. 1965, Fundamentals of Statistical and Thermal Physics, McGraw-
Hill
RYBICKI, G. B., LIGHTMAN, A. P. 1979, Radiative Processes in Astro-
physics, Wiley

---

## Página 74

62 Transporte de Energia em Astrof´ısica
SHU, F. H. 1982, The Physical Universe, University Science Books
SWIHART, T. L. 1968, Astrophysics and Stellar Astronomy, Wiley
ZEILIK, M., GREGORY, S. A. 1998, Introductory Astronomy and Astro-
physics, Brooks Cole

---

## Página 75

## 3
## ATMOSFERAS ESTELARES
3.1 INTRODUC¸ ˜AO
Uma das principais aplica¸c˜oes cl´assicas da equa¸c˜ao de transporte radia-
tivo ´e a an´alise da transferˆencia da radia¸c˜ao nas atmosferas estelares. Uma vez
que o fluxo radiativo de energia ocorre tanto na radia¸c˜ao cont´ınua como nas
linhas espectrais (ver por exemplo as figuras 1.5, 2.15, e 2.17), uma an´alise
completa do transporte da radia¸c˜ao deve incluir ambas. Entretanto, para
tornar o problema mais simples, vamos neste cap´ıtulo considerar apenas a
radia¸c˜ao cont´ınua, deixando as linhas espectrais para o cap´ıtulo 4. Algumas
referˆencias sobre o material deste cap´ıtulo incluem Choudhuri (2010), Swihart
(1968), Zeilik e Gregory (1998), Carroll e Ostlie (2014) e Shu (1982).
3.2 ATMOSFERA PLANO-PARALELA
As estrelas s˜ao basicamente esf´ericas, como ´e o caso do Sol (figura 1.1).
Portanto, as coordenadas esf´ericas (r, θ, φ) (ver figura 1.3) seriam as coor-
denadas ideais para descrever suas principais propriedades. Entretanto, em
muitos problemas podemos desprezar a curvatura da atmosfera considerando
que sua espessura ´e pequena com rela¸c˜ao ao raio da estrela. Esta aproxima¸c˜ao
´e v´alida para a maior parte das estrelas, sendo as principais exce¸c˜oes as gi-
gantes e supergigantes vermelhas, onde as atmosferas extensas podem alcan¸car

---

## Página 76

64 Transporte de Energia em Astrof´ısica
valores da ordem ou superiores ao raio estelar. Na hip´otese plano-paralela
(figura 3.1), podemos considerar o eixo z na dire¸c˜ao vertical perpendicular
`a superf´ıcie da estrela, de modo que um feixe de radia¸c˜ao propagando-se em
uma dire¸c˜ao caracterizada pelo elemento ds faz um ˆangulo θ com rela¸c˜ao `a
vertical. Nesse caso, todas as vari´aveis termodinˆamicas de interesse, como a
temperatura T, densidade ρ, etc., dependem apenas da altura z, isto ´e, temos
T = T(z), ρ = ρ(z), etc. Pela geometria da figura, temos
Figura 3.1 - Geometria plano-paralela.
dz = ds cos θ = μ ds (3.1)
onde introduzimos a vari´avel μ = cosθ, da mesma forma que na solu¸c˜ao da
equa¸c˜ao de transporte para o campo de radia¸c˜ao interestelar que vimos na
se¸c˜ao 1.5. Neste caso, a intensidade espec´ıfica monocrom´atica da radia¸c˜ao
na dire¸c˜ao θ e na altura z pode ser escrita na forma Iν(z, θ) ou Iλ(z, θ). A
equa¸c˜ao de transporte (1.40)
dIν
= jν − kν Iν (3.2)
ds
pode ser escrita, neste caso
∂Iν(z, μ)
μ = jν − kν Iν (3.3)
∂z
Vamos definir a profundidade ´optica por
dτν = −kν dz (3.4)
em analogia `a equa¸c˜ao (1.41). Neste caso, τν aumenta para dentro da estrela,
em contraste com a coordenada z, que aumenta para fora da superf´ıcie da
estrela. Reescrevendo (3.3) em termos da profundidade ´optica, temos

---

## Página 77

Atmosferas Estelares 65
∂Iν(τν, μ) jν
μ = Iν − = Iν − Sν (3.5)
∂τν kν
onde Sν = jν/kν ´e novamente a fun¸c˜ao fonte. Vamos usar o mesmo pro-
cedimento da se¸c˜ao 1.4 e adotar a hip´otese de ETL, isto ´e, vamos considerar
Sν = Bν(T), onde T = T(τν), de modo que podemos escrever Bν[T(τν)] ou
simplesmente Bν(τν). Neste caso, a fun¸c˜ao fonte pode ser expandida em s´erie
de Taylor obtendo
dBν
Sν(tν) ≃ Bν(τν) + (tν − τν) + . . . (3.6)
dτν
de modo que
dBν
Iν(τν, μ) ≃ Bν(τν) + μ (3.7)
dτν
Note a semelhan¸ca entre (3.7) e a equa¸c˜ao (2.70), em que o primeiro termo do
segundo membro ´e o termo isotr´opico, enquanto que o segundo termo cont´em a
anisotropia. Neste termo est´a impl´ıcito um gradiente de temperatura dT /dτν,
de modo que dBν(τν)/dτν 6= 0. Vamos a seguir estimar o termo anisotr´opico
dBν/dτν. Das rela¸c˜oes (1.28), (1.9) e (1.31) envolvendo a densidade de energia,
o fluxo e a press˜ao da radia¸c˜ao, obtemos
∫ ∫ ∫
2π π
1 1
Uν = Iν dω = dφ Iν senθ dθ
c c
0 0
∫ ∫
π −1
2 π 2 π
= Iν senθ dθ = Iν (−dμ)
c c
0 +1
∫
+1
2 π
Uν = Iν dμ (3.8)
c
−1
∫ ∫ ∫
2π π
Fν = Iν cos θ dω = dφ Iν cos θ senθ dθ
0 0
∫ ∫
π −1
= 2 π Iν cos θ senθ dθ = 2 π Iν μ (−dμ)
0 +1
∫
+1
Fν = 2 π Iν μ dμ (3.9)
−1

---

## Página 78

66 Transporte de Energia em Astrof´ısica
∫ ∫ ∫
2π π
1 1
2 2
Pν = Iν cos θ dω = dφ Iν cos θ senθ dθ
c c
0 0
∫ ∫
π −1
2 π 2 π
2 2
= Iν cos θ senθ dθ = Iν μ (−dμ)
c c
0 +1
∫
+1
2 π
2
Pν = Iν μ dμ (3.10)
c
−1
onde usamos a nota¸c˜ao Pν para a press˜ao da radia¸c˜ao. Substituindo (3.7) nas
rela¸c˜oes (3.8)-(3.10), temos
∫ [ ] [ ]
+1
2 π dBν 2 π dBν
Uν = Bν(τν) + μ dμ = Bν(τν) × 2 + × 0
c dτν c dτν
−1
4 π
Uν = Bν(τν) (3.11)
c
∫ [ ] [ ]
+1
dBν dBν
Fν = 2 π Bν(τν) + μ μ dμ = 2 π Bν(τν) × 0 + × (2/3)
dτν dτν
−1
4 π dBν
Fν = (3.12)
3 dτν
∫ [ ] [ ]
+1
2 π dBν 2 π dBν
2
Pν = Bν(τν) + μ μ dμ = Bν(τν) × (2/3) + × 0
c dτν c dτν
−1
4 π
Pν = Bν(τν) (3.13)
3 c
De (1.30) as rela¸c˜oes (3.8) e (3.11) permitem obter express˜oes semelhantes
para a intensidade m´edia J. Como era de se esperar, somente o fluxo Fν
depende do termo anisotr´opico (ver a equa¸c˜ao 2.72). Usando (3.11) e (3.12),
podemos estimar a raz˜ao entre os termos anisotr´opico e isotr´opico em (3.7),
dBν/dτν 3 Fν 4 π 3 Fν 3 F
≃ = ≃ (3.14)
Bν(τν) 4 π c Uν c Uν c U

---

## Página 79

Atmosferas Estelares 67
onde F e U s˜ao as quantidades integradas em todas as frequˆencias. De (2.24)
4
sabemos que em ET U = a T , e para uma estrela com temperatura efetiva
4 4
Tef temos F = σ T = (a c/4) T (ver a equa¸c˜ao 2.23), de modo que
ef ef
( )
4
dBν/dτν 3 Tef
≃ (3.15)
Bν(τν) 4 T
Vimos que a temperatura efetiva ´e uma temperatura representativa das con-
di¸c˜oes na atmosfera estelar e, portanto, para as regi˜oes onde Tef ≃ T o termo
`
anisotr´opico ´e da mesma ordem de grandeza do termo isotr´opico. A medida
que regi˜oes mais internas da atmosfera s˜ao consideradas, a temperatura local
aumenta e a raz˜ao Tef/T diminui, de modo que nessas regi˜oes a radia¸c˜ao ´e
quase totalmente isotr´opica.
EXEMPLO 3.1 - Alguns exemplos de atmosferas plano-paralelas
10
O Sol tem um raio fotosf´erico dado por R⊙ = 6.96 × 10 cm ≃ 700000 km,
e as dimens˜oes de sua fotosfera podem ser determinadas a partir de modelos
te´oricos precisos, sendo da ordem de ∆R ≃ 500 km. Portanto, ∆R ≪ R⊙
−4
e ∆R/R⊙ ≃ 500/700000 ≃ 7 × 10 , ou seja, a fotosfera solar corresponde
a cerca de 0.07% do raio solar. Assim, a hip´otese de uma atmosfera plano-
paralela ´e v´alida. Naturalmente, se considerarmos a coroa solar, que se estende
at´e v´arios raios solares, essa hip´otese n˜ao ´e mais uma boa aproxima¸c˜ao. Em
estrelas gigantes e supergigantes vermelhas, como Betelgeuse (α Ori, ver a
figura 1.4), o raio estelar ´e vari´avel, uma vez que a estrela ´e pulsante, sendo
tipicamente da ordem de 900 R⊙, ou seja, cerca de 600 milh˜oes de km. Sua
atmosfera ´e extensa, alcan¸cando uma fra¸c˜ao consider´avel de seu raio, e al´em
disso objetos como esse tˆem envelopes extensos, alcan¸cando v´arios raios es-
telares. Portanto, nesses casos a hip´otese de atmosfera plano-paralela n˜ao
´e adequada. A Terra tem um raio de 6400 km, e a maior parte dos gases
atmosf´ericos est´a contida dentro de uma altura ∆R ≃ 100 km, de modo que
∆R/R ≃ 100/6400 ≃ 0.016, ou seja, 1.6% do raio, e a hip´otese plano-paralela
´e tamb´em razo´avel neste caso.
EXEMPLO 3.2 - Caminho livre m´edio de ´atomos de H
No Exemplo 2.16 adotamos uma escala de altura para varia¸c˜oes de tempe-
ratura na fotosfera solar de hT ∼ 700 km. Em uma regi˜ao mais interna da

---

## Página 80

68 Transporte de Energia em Astrof´ısica
17 −3
fotosfera, onde a densidade ´e da ordem de nH ∼ 10 cm vimos que o cami-
nho livre m´edio para os ´atomos de H ´e λH ∼ 0.1 cm, ou seja, λH ≪ hT.
Nas regi˜oes mais externas da fotosfera, onde a profundidade ´optica ´e muito
14 −3
pequena, a densidade ´e tamb´em mais baixa, nH ∼ 10 cm . Neste caso, o
caminho livre m´edio para os ´atomos de H ´e
1 1
2
λH ≃ ≃ ≃ 10 cm
14 −16
nH σH (10 ) (10 )
ou seja, λH ≪ hT. Como a temperatura varia ainda mais lentamente nesta
regi˜ao, esta rela¸c˜ao permanece v´alida e o ETL ´e uma aproxima¸c˜ao razo´avel.
EXEMPLO 3.3 - Fotosfera solar
Vamos considerar novamente a fotosfera solar, de acordo com o modelo des-
crito por Cox (2000, p´agina 349), relacionado na tabela 3.1. Nesse caso temos,
para cada valor da profundidade ´optica τλ em λ = 5000 ˚A os valores da
temperatura T (figura 3.2a), de modo que podemos obter Bλ(T) e portanto
estimar a varia¸c˜ao dBλ/dτλ (ou dBν/dτν), obtendo finalmente a raz˜ao entre os
termos anisotr´opico e isotr´opico. Para compara¸c˜ao, podemos tamb´em estimar
esta raz˜ao por (3.19) com Tef = 5800 K, como mostrado na figura 3.2b.
Em resumo, para determinar a intensidade Iν(τ, μ) da radia¸c˜ao na fo-
tosfera por (3.7) precisamos conhecer a varia¸c˜ao da temperatura T com a
profundidade ´optica τν, ou seja, a rela¸c˜ao T(τν), de modo a poder calcular
Bν(τν) e o termo anisotr´opico dBν/dτν.
EXEMPLO 3.4 - Heliosismologia
A maior parte das informa¸c˜oes que obtemos sobre a f´ısica solar vem de suas
camadas mais externas: fotosfera, cromosfera, regi˜ao de transi¸c˜ao e coroa,
especialmente a primeira, de onde se origina a maior parte dos f´otons obser-
vados no espectro vis´ıvel. De fato, ´e muito dif´ıcil obter informa¸c˜oes sobre as
camadas abaixo da fotosfera, havendo atualmente duas fontes principais: os
neutrinos, que s˜ao produzidos nas rea¸c˜oes nucleares no interior do Sol, e os
resultados recentes da heliosismologia. Medidas do efeito Doppler em linhas
espectrais mostram que a superf´ıcie do Sol tem oscila¸c˜oes, como indicado na
figura 3.3.

---

## Página 81

Atmosferas Estelares 69
τ T(K)
2.39E−04 4400
4.29E−04 4410
8.51E−04 4460
1.98E−03 4560
4.53E−03 4660
1.01E−02 4770
2.20E−02 4880
4.73E−02 4990
6.87E−02 5060
9.92E−02 5150
1.42E−01 5270
2.02E−01 5410
2.87E−01 5580
4.13E−01 5790
5.22E−01 5980
6.75E−01 6180
8.14E−01 6340
1.00E+00 6520
1.25E+00 6720
1.61E+00 6980
2.14E+00 7280
2.95E+00 7590
4.13E+00 7900
5.86E+00 8220
8.36E+00 8540
1.20E+01 8860
1.70E+01 9140
2.36E+01 9400
Tabela 3.1 - Modelo da fotosfera solar.

---

## Página 82

70 Transporte de Energia em Astrof´ısica
Figura 3.2 - Modelo da fotosfera solar (Cox 2000). (a) Varia¸c˜ao da temperatura com
a profundidade ´optica, (b) Raz˜ao entre os termos anisotr´opico e isotr´opico.
Figura 3.3 - Representa¸c˜ao dos modos de vibra¸c˜ao observados no Sol. As partes
vermelhas indicam os g´as que se move para dentro do Sol, e as partes azuis mostram
o g´as que est´a “subindo”.
Nesta figura, as partes vermelhas indicam os g´as que se move para den-
tro do Sol, enquanto que as partes azuis mostram o g´as que est´a “subindo”.
Essas oscila¸c˜oes s˜ao complexas, geralmente compostas por diferentes modos
de vibra¸c˜ao e resultam de ondas de press˜ao internas que s˜ao refletidas pela
fotosfera. Algumas dessas ondas conseguem penetrar no interior solar, de
modo que sua an´alise permite determinar as condi¸c˜oes f´ısicas dessas regi˜oes,

---

## Página 83

Atmosferas Estelares 71
que s˜ao de dif´ıcil acesso a partir de observa¸c˜oes da radia¸c˜ao fotosf´erica. Esses
resultados podem ser comparados com as previs˜oes de modelos te´oricos do
Sol, os quais s˜ao assim aperfei¸coados. A heliosismologia ´e um caso especial
da Astrosismologia, e uma introdu¸c˜ao aos principais aspectos te´oricos e ob-
servacionais das oscila¸c˜oes ao longo do diagrama HR pode ser encontrada em
Aerts et al. (2010).
EXEMPLO 3.5 - Equa¸c˜ao de transporte em coordenadas esf´ericas
A solu¸c˜ao da equa¸c˜ao de transporte radiativo na forma (1.48) ´e adequada para
obter a intensidade espec´ıfica em fun¸c˜ao da profundidade ´optica ao longo de
uma linha de visada. Em alguns casos a equa¸c˜ao (1.48) pode ser diretamente
aplicada, em particular no caso do meio interestelar, como vimos na se¸c˜ao 1.5.
Para atmosferas estelares costumamos definir a profundidade ´optica ao longo
do raio da estrela, e n˜ao ao longo da linha de visada. Vimos que a geometria
plano-paralela ´e adequada no caso da fotosfera solar, e em outros casos em
que a espessura da fotosfera ´e pequena em rela¸c˜ao ao raio da estrela.
Figura 3.4 - Coordenadas esf´ericas.
No caso de estrelas esf´ericas, devemos usar coordenadas esf´ericas, como
visto na figura 1.3 ou na figura 3.4 (ver por exemplo Gray 2008). Podemos es-
colher o eixo z na dire¸c˜ao do observador, de modo que a equa¸c˜ao de transporte
radiativo na forma (1.40) pode ser escrita
dIν
= −kν Iν + kν Sν (3.16)
dz

---

## Página 84

72 Transporte de Energia em Astrof´ısica
Na maior parte dos casos, podemos admitir uma simetria azimutal, isto
´e, a intensidade Iν n˜ao depende do ˆangulo φ, podendo ser escrita na forma
Iν(r, θ), de modo que
dIν ∂Iν dr ∂Iν dθ
= + (3.17)
dz ∂r dz ∂θ dz
da figura 3.4 temos dr = cosθ dz e r dθ = −senθ dz, e a equa¸c˜ao de transporte
(3.16) fica
∂Iν ∂Iν sen θ
cos θ − = −kν Iν + kν Sν (3.18)
∂r ∂θ r
Esta ´e a forma da equa¸c˜ao de transporte que deve ser usada nos interiores
estelares e no caso de atmosferas extensas, como nas estrelas supergigantes.
Naturalmente, a partir de (3.18) podemos reobter a equa¸c˜ao de transporte
para o caso plano-paralelo. Admitindo que θ n˜ao depende de z, ou seja,
dθ/dz = 0 em (3.17), a equa¸c˜ao (3.18) fica
∂Iν
μ = −kν Iν + kν Sν (3.19)
∂r
usando a defini¸c˜ao τν = −kν dr, reobtemos a equa¸c˜ao (3.5).
3.3 ATMOSFERA CINZA
Para a solu¸c˜ao geral da equa¸c˜ao de transporte radiativo em uma atmos-
fera estelar, ´e necess´ario conhecer os coeficientes de emiss˜ao jν e absor¸c˜ao kν
para todas as frequˆencias relevantes. Uma simplifica¸c˜ao consider´avel consiste
em admitir que esses coeficientes s˜ao independentes da frequˆencia, isto ´e, s´o
precisamos considerar as eventuais varia¸c˜oes de jν e kν com a temperatura,
ou com a profundidade ´optica. Este caso ´e conhecido como atmosfera cinza.
Existem diversas deriva¸c˜oes da atmosfera cinza na literatura, como por
exemplo em Swihart (1968, 1981), Mihalas (1978), Choudhuri (2010). Da
defini¸c˜ao da profundidade ´optica (3.4) temos τν = τ, sendo a mesma para
todas as frequˆencias. De (3.5) temos, no caso plano-paralelo
∂I(τ, μ)
μ = I − S (3.20)
∂τ
∫ ∫
onde usamos as quantidades integradas I = Iν dν e S = Sν dν. Analoga-
mente `as equa¸c˜oes (3.8)-(3.10) podemos escrever express˜oes para U, F, e Pr

---

## Página 85

Atmosferas Estelares 73
em termos de μ. Da rela¸c˜ao (1.30) entre J e U podemos tamb´em obter uma
rela¸c˜ao equivalente para J. Com as rela¸c˜oes obtidas para F, U, e J, multipli-
cando (3.20) por 1/2 e integrando em μ obtemos
1 dF
= J − S (3.21)
4 π dτ
se n˜ao houver fontes ou sumidouros de energia na atmosfera plano-paralela, o
fluxo nas camadas externas ´e constante, ou seja, dF/dτ = 0 e obtemos
J = S (3.22)
Esta condi¸c˜ao ´e conhecida como condi¸c˜ao de equil´ıbrio radiativo. Usando
(3.20), (3.22) e a rela¸c˜ao para J obtemos ent˜ao
∫
+1
∂I(τ, μ) 1
μ = I − I dμ (3.23)
∂τ 2
1
Esta equa¸c˜ao pode ser resolvida de maneira exata para obter I(τ, μ) (ver por
exemplo Mihalas 1978, p. 64). Vamos aqui considerar uma aproxima¸c˜ao mais
simples, aplicando a condi¸c˜ao de equil´ıbrio radiativo (F =constante). Vimos
na se¸c˜ao 3.2 que, nas camadas mais profundas da atmosfera, o campo de
radia¸c˜ao ´e aproximadamente isotr´opico, o que ´e mostrado por exemplo pela
figura 3.2b. Neste caso, a rela¸c˜ao
1
Pr = U (3.24)
3
´e v´alida (cf. se¸c˜ao 2.2, eq. 2.25). Vamos ent˜ao admitir adicionalmente que
esta rela¸c˜ao ´e v´alida mesmo nas camadas mais superficiais da atmosfera, que
´e uma aproxima¸c˜ao conhecida como Aproxima¸c˜ao de Eddington. Neste caso
podemos mostrar que a intensidade emergente em τ = 0 ´e
( )
3 F 2
I(0, μ) = μ + (3.25)
4 π 3
(para detalhes ver Choudhuri 2010, cap. 2). Analogamente, para a fun¸c˜ao
fonte temos
( )
3 F 2
S = τ + (3.26)
4 π 3
e para a densidade de energia

---

## Página 86

74 Transporte de Energia em Astrof´ısica
( )
3 F 2
U = τ + (3.27)
c 3
Finalmente, lembrando a lei de Stefan-Boltzmann (2.24) e usando (2.26), ou
4
seja, tomando F = σ T , obtemos uma rela¸c˜ao T(τ)
ef
( )
3 2
4 4
T = T τ + (3.28)
ef
4 3
Esta equa¸c˜ao fornece a rela¸c˜ao entre a temperatura de cada camada e a pro-
fundidade ´optica no caso da atmosfera cinza com a aproxima¸c˜ao de Edding-
ton. A figura 3.5 mostra a varia¸c˜ao da temperatura com a profundidade
´optica no caso cinza usando a aproxima¸c˜ao de Eddington (linha tracejada) e
a solu¸c˜ao exata (linha cheia). Os maiores desvios ocorrem nas proximidades
da superf´ıcie da estrela, onde τ ≃ 0, diminuindo para os valores mais altos
da profundidade ´optica. A maior contribui¸c˜ao ao fluxo vem da regi˜ao onde
τ ≃ 1, onde a aproxima¸c˜ao de Eddington ´e essencialmente correta.
Figura 3.5 - Rela¸c˜ao temperatura-profundidade ´optica no caso cinza.
EXEMPLO 3.6 - A rela¸c˜ao T(τ) nas atmosferas estelares
Podemos comparar a rela¸c˜ao T(τ) dada por (3.28) com valores mais precisos,
obtidos a partir de modelos num´ericos para atmosferas estelares. Vamos con-
siderar uma estrela A0 V t´ıpica, com temperatura efetiva Tef = 10000 K e
4 2
gravidade log g = 4, ou seja, g = 10 cm/s . Na figura 3.6 os pontos pre-
tos ligados mostram resultados de modelos num´ericos de Cox (2000, p. 395,

---

## Página 87

Atmosferas Estelares 75
ver tamb´em Kurucz 1979), enquanto que a curva cont´ınua representa va-
lores dados pela equa¸c˜ao (3.28). No intervalo considerado, aproximadamente
0.001 < τ < 10, a diferen¸ca entre os resultados ´e inferior a 10%.
Figura 3.6 - Modelos para uma estrela com temperatura efetiva de 10000 K (pontos
pretos) e valores de (3.28) (curva cont´ınua).
EXEMPLO 3.7 - Escurecimento do limbo
A solu¸c˜ao da atmosfera cinza com a aproxima¸c˜ao de Eddington permite obter
um resultado interessante que ´e a determina¸c˜ao do escurecimento do limbo.
Em imagens do Sol (figura 3.7a) podemos observar que as bordas da imagem
(“o limbo”) s˜ao menos brilhantes (ou mais escuras) que a regi˜ao central. Isto
ocorre porque na dire¸c˜ao do centro do Sol o feixe de radia¸c˜ao atravessa ca-
madas mais profundas, portanto mais quentes, enquanto que nas bordas da
imagem o feixe atravessa uma regi˜ao mais pr´oxima da superf´ıcie, portanto
mais fria (figura 3.7b).
Usando (3.25) e comparando esta intensidade com a intensidade em τ = 0
e μ = 1 (θ = 0) temos
( )
3 F 2 5 F
I(0, 1) = 1 + = (3.29)
4 π 3 4 π
portanto
( )
I(0, μ) 3 2
= μ + (3.30)
I(0, 1) 5 3

---

## Página 88

76 Transporte de Energia em Astrof´ısica
Figura 3.7 - Escurecimento do limbo do Sol.
ou seja, a intensidade ´e menor vinda de dire¸c˜oes tais que 1 ≥ μ ≥ 0 comparado
com a radia¸c˜ao emergente perpendicular `a superf´ıcie. A equa¸c˜ao (3.30) fornece
a varia¸c˜ao da intensidade no disco do Sol `a medida que consideramos dire¸c˜oes
´
variando do centro para as bordas. E f´acil ver que para μ ≃ 0 (θ ≃ π/2)
temos I(0, 0)/I(0, 1) ≃ 2/5, correspondendo a 40%.
Figura 3.8 - Escurecimento do limbo do Sol.
A figura 3.8 mostra esta varia¸c˜ao, onde os pontos s˜ao dados observacionais
para λ = 5485 ˚A, a linha tracejada ´e a rela¸c˜ao obtida com a aproxima¸c˜ao de
Eddington e a linha cheia ´e a rela¸c˜ao obtida com a solu¸c˜ao exata.

---

## Página 89

Atmosferas Estelares 77
3.4 FLUXO EMERGENTE EM UMA ATMOSFERA CINZA
Vamos a seguir determinar o fluxo emergente de radia¸c˜ao sob a hip´otese
de atmosfera cinza. Neste caso cinza temos τν = τ e Sν(tν) = Bν[T(t)] =
Bν(t). Considerando a express˜ao (3.9) para o fluxo monocrom´atico podemos
obter uma express˜ao relativamente simples para o fluxo dada por
[∫ ∫ ]
∞ τ
Fν(τ) = 2 π Bν(t) E2(t − τ) dt − Bν(t) E2(τ − t) dt (3.31)
τ 0
(para detalhes ver Mihalas 1978, cap. 3). Nesta express˜ao usamos uma classe
especial de integrais, chamadas integrais exponenciais, (ver por exemplo Mi-
halas (1978) e Chandrasekhar (1960), definidas por
∫
∞
−n −x t
En(x) = t e dt (3.32)
1
Na express˜ao (3.31) a temperatura aparece na fun¸c˜ao de Planck, na forma
h ν/k T, sendo portanto ´util definir o parˆametro α tal que
h ν
α = (3.33)
k Tef
al´em disto, da rela¸c˜ao T(τ) (3.28) temos
[ ( )]
1/4
T(τ) 3 2
= τ + (3.34)
Tef 4 3
introduzindo tamb´em a vari´avel p(τ)
[ ]
1/4
Tef 4 1
p(τ) = = (3.35)
T 3 τ + 2/3
4
e usando o fato de que F = σ T obtemos a rela¸c˜ao
ef
( ) [∫ ∫ ]
4 ∞ τ
Fα(τ) 4 π k E2(t − τ) dt E2(τ − t) dt
3
= α − (3.36)
3 2 α p(t) α p(t)
F h c σ e − 1 e − 1
τ 0
O termo entre colchetes depende apenas de α e τ, e pode ser calculado de
forma independente (ver por exemplo Chandrasekhar 1945, 1960). A figura 3.9
mostra a raz˜ao Fα(τ)/F em fun¸c˜ao do parˆametro α (ou da frequˆencia) para

---

## Página 90

78 Transporte de Energia em Astrof´ısica
diversos valores da profundidade ´optica τ (cf. Mihalas 1978). Podemos notar
que a curva ´e semelhante `a de um corpo negro, e o pico desloca-se para
frequˆencias mais altas para valores maiores da profundidade ´optica, pois a
temperatura do g´as aumenta com τ, de acordo com (3.28).
Figura 3.9 - Fluxo de radia¸c˜ao em uma atmosfera cinza.
EXEMPLO 3.8 - O fluxo cont´ınuo em atmosferas estelares
Vamos estimar a raz˜ao Fα/F para a atmosfera de uma estrela com Tef =
4 2
10000 K e log g = 4 (g = 10 cm/s ) de acordo com o modelo dado por Cox
(2000, p. 395, ver tamb´em Kurucz 1979), dado na tabela 3.2. Para compri-
mentos de onda no intervalo 500 < λ(˚A) < 200000 (coluna 1), o modelo lista
−2 −1 ˚−1
valores do fluxo emergente Fλ dado em erg cm s A (colunas 2 e 3).
Podemos ent˜ao obter o parˆametro α pela equa¸c˜ao (3.33) (coluna 4), e o fluxo
Fα pode ser obtido pela rela¸c˜ao Fα dα = Fλ dλ, de modo que
k Tef
2
Fα = λ Fλ (3.37)
h c
−2 −1
dado na coluna 5 da tabela 3.2 em erg cm s . O fluxo total pode ser
estimado por

---

## Página 91

Atmosferas Estelares 79
4 11 −2 −1
F = σ T = 5.67 × 10 erg cm s (3.38)
ef
de modo que a raz˜ao Fα/F pode ser obtida (coluna 6). O resultado est´a
mostrado na figura 3.10, que pode ser comparada com a figura 3.9. Podemos
notar que as curvas s˜ao semelhantes, embora o modelo apresente uma queda
mais pronunciada para as frequˆencias mais altas, e o pico da emiss˜ao esteja
tamb´em deslocado para frequˆencias mais altas.
λ (˚A) log Fλ Fλ α Fα Fα/F
−7 −6
506 −6.26 5.50 × 10 28.48 9.76 × 10 0.000
1 +2
890 1.11 1.29 × 10 16.19 7.08 × 10 0.000
3 +5
920 3.73 5.37 × 10 15.67 3.15 × 10 0.000
8 10
1482 8.28 1.91 × 10 9.73 2.90 × 10 0.051
8 10
2012 8.12 1.32 × 10 7.16 3.70 × 10 0.065
7 10
2506 7.98 9.55 × 10 5.75 4.16 × 10 0.073
7 10
3012 7.89 7.76 × 10 4.79 4.89 × 10 0.086
7 10
3636 7.79 6.17 × 10 3.96 5.66 × 10 0.100
8 11
3661 8.33 2.14 × 10 3.94 1.99 × 10 0.351
8 11
4012 8.21 1.62 × 10 3.59 1.81 × 10 0.319
8 11
4512 8.06 1.15 × 10 3.19 1.62 × 10 0.286
7 11
5025 7.92 8.32 × 10 2.87 1.46 × 10 0.257
7 11
5525 7.79 6.17 × 10 2.61 1.31 × 10 0.230
7 11
6025 7.68 4.79 × 10 2.39 1.21 × 10 0.213
7 11
7075 7.46 2.88 × 10 2.04 1.00 × 10 0.177
7 10
8152 7.26 1.82 × 10 1.77 8.39 × 10 0.148
7 11
8252 7.33 2.14 × 10 1.75 1.01 × 10 0.178
7 10
10050 7.03 1.07 × 10 1.43 7.51 × 10 0.132
6 10
14594 6.47 2.95 × 10 0.99 4.36 × 10 0.077
5 10
27000 5.48 3.02 × 10 0.53 1.53 × 10 0.027
4 +9
50000 4.45 2.82 × 10 0.29 4.89 × 10 0.009
3 +9
100000 3.27 1.86 × 10 0.14 1.29 × 10 0.002
2 +8
200000 2.07 1.17 × 10 0.07 3.26 × 10 0.001
Tabela 3.2 - Fluxo emergente em uma estrela com temperatura efetiva 10000 K.

---

## Página 92

80 Transporte de Energia em Astrof´ısica
Figura 3.10 - Raz˜ao entre o fluxo emergente na frequˆencia dada pelo parˆametro alfa
com rela¸c˜ao ao fluxo total, em fun¸c˜ao de alfa, para uma estrela com temperatura
efetiva de 10000 K.
EXEMPLO 3.9 - Fluxo em um intervalo de comprimentos de onda
Considerando ainda o modelo do exemplo anterior, vamos estimar a fra¸c˜ao do
fluxo total emitida entre os comprimentos de onda λ1 = 3636 ˚A e λ2 = 5025 ˚A.
Neste caso, podemos estimar os fluxos F1 entre 3636 e 3661˚A, F2 entre 3661 e
4012˚A, F3 entre 4012 e 4512˚A, F4 entre 4512 e 5025˚A usando uma integra¸c˜ao
simples, como mostrado na figura 3.11. Obtemos
Figura 3.11 - Fluxo integrado entre dois comprimentos de onda.

---

## Página 93

Atmosferas Estelares 81
9 −2 −1 10 −2 −1
F1 ≃ 3.45 × 10 erg cm s , F2 ≃ 6.60 × 10 erg cm s
10 −2 −1 10 −2 −1
F3 ≃ 6.93 × 10 erg cm s , F4 ≃ 5.08 × 10 erg cm s
11 −2 −1
F(3636 − 5025) ≃ F1 + F2 + F3 + F4 ≃ 1.90 × 10 erg cm s
e a fra¸c˜ao ´e de 33.5%
11
F(3636 − 5025) 1.90 × 10
f ≃ ≃ ≃ 0.335
11
F 5.67 × 10
3.5 OPACIDADE
Os processos de opacidade incluem as transi¸c˜oes ligado-ligado (bound-
bound), ligado-livre (bound-free) e livre-livre (free-free), al´em do espalhamento
(scattering). Nas transi¸c˜oes ligado-ligado, um f´oton ´e absorvido, e sua energia
´e usada para excitar um n´ıvel de energia mais alto do ´ıon; inversamente, a
passagem de um el´etron de um n´ıvel superior para um n´ıvel inferior pode
resultar na emiss˜ao de um f´oton. Em ambos os casos, a transi¸c˜ao produz uma
linha espectral, de emiss˜ao ou absor¸c˜ao. Nas transi¸c˜oes ligado-livre a energia
do f´oton ´e usada para ejetar um el´etron para o cont´ınuo, isto ´e, ele n˜ao est´a
mais ligado ao ´atomo ou ´ıon. No caso inverso, um el´etron livre ´e capturado
por um ´atomo ou ´ıon, situando-se em um dado n´ıvel de energia, o que constitui
uma recombina¸c˜ao. Em ambos os casos a transi¸c˜ao ´e cont´ınua, uma vez que no
cont´ınuo n˜ao h´a restri¸c˜ao para a energia do el´etron. Nas transi¸c˜oes livre-livre
o el´etron ´e livre antes e depois da transi¸c˜ao, ou seja, trata-se de transi¸c˜oes no
cont´ınuo.
Classicamente, o el´etron muda de uma ´orbita hiperb´olica para outra de
maior (ou menor) energia, e a transi¸c˜ao ´e ent˜ao uma absor¸c˜ao (ou emiss˜ao)
livre-livre no cont´ınuo. Pode-se tamb´em dizer que, neste caso, um el´etron
ao passar pr´oximo de um ´atomo, induz um momento de dipolo que pode
interagir com o campo de radia¸c˜ao. Finalmente, no caso do espalhamento, o
f´oton ´e defletido pelo ´atomo ou ´ıon mudando sua dire¸c˜ao de propaga¸c˜ao, mas
geralmente mantendo a mesma frequˆencia, ou energia.
No caso geral, em que os coeficientes de emiss˜ao e absor¸c˜ao variam com
a frequˆencia, esses coeficientes devem ser conhecidos para que a equa¸c˜ao de
transporte radiativo seja resolvida. Um estudo detalhado dos processos de
emiss˜ao e absor¸c˜ao da radia¸c˜ao est´a al´em dos objetivos deste texto, e o leitor
interessado pode consultar, por exemplo, Rybicki e Lightman (1979), Swihart

---

## Página 94

82 Transporte de Energia em Astrof´ısica
(1968), Choudhuri (2010), e Maciel (1999). Neste cap´ıtulo vamos discutir al-
guns aspectos importantes relacionados com o coeficiente de absor¸c˜ao aplicado
`as atmosferas das estrelas.
Os processos de absor¸c˜ao da radia¸c˜ao geralmente envolvem a absor¸c˜ao
de f´otons seguida de uma excita¸c˜ao de um n´ıvel superior de um ´atomo ou
´ıon, de modo que as popula¸c˜oes dos n´ıveis relevantes dos ´atomos e ´ıons de-
vem ser conhecidas. Em ETL este procedimento ´e relativamente simplifi-
cado, podendo ser aplicadas as equa¸c˜oes de Boltzmann e Saha, vistas no
cap´ıtulo 2. Este procedimento est´a relacionado com a determina¸c˜ao de uma
rela¸c˜ao entre a temperatura e a profundidade ´optica, como vimos na equa¸c˜ao
(3.28). Como resultado, o coeficiente de absor¸c˜ao pode ser colocado na forma
kν = f(T, P, c.q.), isto ´e, pode ser determinado em fun¸c˜ao da temperatura,
da press˜ao e da composi¸c˜ao qu´ımica.
3.5.1 OS COEFICIENTES DE EINSTEIN
Os coeficientes jν e kν s˜ao coeficientes macrosc´opicos, aplic´aveis `a mat´eria
−1
como um todo. O coeficiente kν, medido em cm , pode tamb´em ser dado
2
por massa, isto ´e, definimos o coeficiente κν, medido em cm /g, tal que
kν
κν = (3.39)
ρ
onde ρ ´e a densidade do g´as. Podemos tamb´em definir os coeficientes de
emiss˜ao e absor¸c˜ao do ponto de vista microsc´opico, que s˜ao os coeficientes de
Einstein Akj, Bjk e Bkj, onde j e k s˜ao dois n´ıveis de energia do ´atomo ou
´ıon considerado (figura 3.12).
Figura 3.12 - N´ıveis de energia e coeficientes de Einstein.
Considerando dois n´ıveis j e k com energia Ej e Ek, onde k > j, o coeficiente
r
Akj exprime a probabilidade por unidade de tempo de que um ´atomo X
no estado de excita¸c˜ao k sofra espontaneamente uma transi¸c˜ao k → j com
−1
emiss˜ao de um f´oton. Portanto, as unidades de Akj s˜ao s , e o inverso do

---

## Página 95

Atmosferas Estelares 83
−1
coeficiente de emiss˜ao (A ) corresponde essencialmente ao tempo de vida do
kj
n´ıvel k para as emiss˜oes ao n´ıvel j. Vimos no Exemplo 2.13 que o coeficiente
de emiss˜ao espontˆanea de Einstein para a linha de 21 cm do H ´e Akj = 2.9 ×
−15 −1
10 s . Com esta defini¸c˜ao, o n´umero de emiss˜oes espontˆaneas por unidade
r
de volume e por unidade de tempo do n´ıvel k para o n´ıvel j ´e nk(X ) Akj.
Analogamente, o processo de absor¸c˜ao pode ser caracterizado pelo co-
eficiente de absor¸c˜ao de Einstein Bjk, de modo que o n´umero de absor¸c˜oes
por unidade de volume e por unidade de tempo do n´ıvel j para o n´ıvel k ´e
r
nk(X ) Bjk Uν, onde Uν ´e a densidade de energia. Neste caso as unidades
−1 3 −1
de Bjk s˜ao erg cm s Hz, e a densidade de energia Uν tem unidades erg
−3 −1
cm Hz . O coeficiente de absor¸c˜ao pode tamb´em ser definido usando a
intensidade m´edia da radia¸c˜ao. Mais rigorosamente, o coeficiente de absor¸c˜ao
pode ser modificado pelas emiss˜oes induzidas, ou absor¸c˜oes negativas, carac-
terizadas pelo coeficiente Bkj, que refletem as emiss˜oes causadas pela absor¸c˜ao
3
de f´otons de energia Ejk = Ek − Ej. Portanto, o n´umero de absor¸c˜oes por cm
r r
por segundo ´e na realidade [nj(X ) Bjk − nk(X ) Bkj] Uν.
Tanto no caso das emiss˜oes como nas absor¸c˜oes os coeficientes macros-
c´opicos jν e kν podem ser relacionados com os coeficientes de Einstein con-
siderando a energia total emitida ou absorvida por unidade de volume, por
unidade de tempo e por unidade de ˆangulo s´olido (ver Maciel 2002).
Os coeficientes de Einstein n˜ao s˜ao completamente independentes, e as
rela¸c˜oes entre eles s˜ao (ver o Exerc´ıcio 3.3 e Maciel 2002)
gj Bjk = gk Bkj (3.40)
3
8πhν
jk
Akj = Bkj (3.41)
3
c
3
8πhν g
jk j
Akj = Bjk (3.42)
3
c gk
´ −
3.5.2 OION H NAS ATMOSFERAS ESTELARES
Em atmosferas de estrelas como o Sol, h´a uma grande abundˆancia de
´atomos de H neutro, bem como de el´etrons doados por elementos mais pesados,
como Na, Mg, Al, cujos potenciais de ioniza¸c˜ao s˜ao muito mais baixos que o
do H, que ´e de 13.6 eV (Tabela 3.3).

---

## Página 96

84 Transporte de Energia em Astrof´ısica
´
Atomo I II III
1 H 13.598
2 He 24.587 54.418
3 Li 5.392 75.640 122.454
4 Be 9.323 18.211 153.897
5 B 8.298 25.155 37.931
6 C 11.260 24.383 47.888
7 N 14.534 29.601 47.449
8 O 13.618 35.117 54.936
9 F 17.423 34.971 62.708
10 Ne 21.565 40.963 63.450
11 Na 5.139 47.286 71.620
12 Mg 7.646 15.035 80.144
13 Al 5.986 18.829 28.448
14 Si 8.152 16.346 33.493
15 P 10.487 19.769 30.203
16 S 10.360 23.338 34.790
17 Cl 12.968 23.814 39.610
18 Ar 15.760 27.630 40.740
19 K 4.341 31.630 45.806
20 Ca 6.113 11.872 50.913
21 Sc 6.561 12.800 24.757
22 Ti 6.828 13.576 27.492
23 V 6.746 14.660 29.311
24 Cr 6.767 16.486 30.960
25 Mn 7.434 15.640 33.668
26 Fe 7.902 16.188 30.652
27 Co 7.881 17.083 33.500
28 Ni 7.640 18.169 35.190
29 Cu 7.726 20.292 36.841
30 Zn 9.394 17.964 39.723
Tabela 3.3 - Potenciais de ionza¸c˜ao em eV.

---

## Página 97

Atmosferas Estelares 85
O resultado ´e que os ´atomos de H conseguem capturar alguns desses
−
el´etrons, formando o ´ıon H , isto ´e, um n´ucleo contendo um pr´oton e uma
nuvem eletrˆonica com dois el´etrons. Desde o final da d´ecada de 1930, ficou
demonstrado que a absor¸c˜ao ligado-livre e livre-livre de f´otons solares pelos
−
´ıons de H ´e a principal fonte de opacidade cont´ınua na fotosfera solar, apesar
da abundˆancia relativamente baixa destes ´ıons. As transi¸c˜oes ligado-livre
−
envolvendo H s˜ao favorecidas por seu baixo potencial de ioniza¸c˜ao, P I =
0.75 eV ou seja, f´otons com comprimentos de onda λ ≥ 16500 ˚A = 1.6 μm
−
conseguem ionizar o H .
−
Um aspecto importante da opacidade pelo ´ıon H ´e que o coeficiente de
absor¸c˜ao n˜ao depende muito fortemente da frequˆencia, ou seja, as equa¸c˜oes
da se¸c˜ao 3.3 para a atmosfera cinza podem ser aplicadas. Em particular,
a rela¸c˜ao T(τ) dada por (3.28) pode ser usada de modo que a dependˆencia
da temperatura com a profundidade ´optica ´e determinada, mesmo sem levar
em conta a estrutura detalhada da atmosfera, como sua composi¸c˜ao qu´ımica,
press˜ao, etc.
Figura 3.13 - A descontinuidade de Balmer no espectro solar.
EXEMPLO 3.10 - Descontinuidade de Balmer
Para ionizar um ´atomo de H no n´ıvel n = 2, um f´oton deve ter uma energia
m´ınima de E = 3.4 eV, correspondendo a um comprimento de onda λ =
h c/E ≃ 3647˚A. Portanto, f´otons com comprimentos de onda abaixo deste

---

## Página 98

86 Transporte de Energia em Astrof´ısica
valor podem ionizar o H, de modo que o fluxo de radia¸c˜ao nesta faixa espectral
deve ser mais baixo, devido `a grande abundˆancia de H. Este decr´escimo no
espectro cont´ınuo das estrelas ´e a descontinuidade de Balmer, ou salto de
Balmer, e pode ser observado por exemplo no espectro solar, como visto na
figura 3.13. A descontinuidade ´e mais acentuada nas estrelas com tempera-
turas efetivas da ordem de 9600 K, correspondendo ao tipo espectral A0V,
para as quais um maior n´umero de ´atomos est´a no estado excitado n = 2.
EXEMPLO 3.11 - Distˆancia percorrida por um f´oton no Sol
No Exerc´ıcio 1.4 e no Exemplo 2.16 consideramos uma regi˜ao mais densa da
−7 −3 17 −3
fotosfera solar, onde ρ ∼ 2 × 10 g cm ou nH ∼ 10 cm . Neste caso a
distˆancia m´edia percorrida por um f´oton de λ = 5000 ˚A ´e da ordem de 160
14 −3
km. Em uma regi˜ao mais pr´oxima da superf´ıcie, onde nH ∼ 10 cm ou ρ ∼
−10 −3 2
2×10 g cm (cf. Exemplo 3.2), adotando uma opacidade κλ ∼ 0.1 cm /g,
a distˆancia percorrida pelo f´oton ´e
1 1 1
10 5
d ≃ ≃ ≃ ≃ 5 × 10 cm ≃ 5 × 10 km
−10
kλ κλρ (0.1)(2 × 10 )
da ordem do raio solar, ou seja, os f´otons produzidos nas regi˜oes mais externas
da fotosfera tˆem uma grande probabilidade de escapar do Sol.
−
EXEMPLO 3.12 - Opacidade pelo ´ıon H na atmosfera solar
No caso do Sol, observamos uma emiss˜ao cont´ınua semelhante `a de um corpo
negro, como j´a vimos nas figuras 1.5 e 2.17. De acordo com as rela¸c˜oes (1.52) e
(2.3), devemos esperar que a fotosfera seja opaca (opticamente espessa) para
radia¸c˜ao vis´ıvel, mas sabemos que a densidade de g´as na fotosfera ´e muito
baixa para que isso aconte¸ca. A raz˜ao de observarmos uma emiss˜ao pr´oxima
de um corpo negro ´e que boa parte da opacidade na fotosfera solar deve-se
−
ao ´ıon H . Este ´ıon tem um ´unico estado ligado, de modo que pode originar
transi¸c˜oes ligado-livre ou livre-livre apenas. A energia de liga¸c˜ao do segundo
el´etron ´e de apenas 0.75 eV, como vimos, e o comprimento de onda m´aximo
dos f´otons necess´arios para a absor¸c˜ao ´e
h c h c h c
λ = = = ≃ 16500 ˚A = 1.65 μm
E h ν 0.75 eV

---

## Página 99

Atmosferas Estelares 87
O coeficiente de absor¸c˜ao em fun¸c˜ao do comprimento de onda est´a mostrado
na figura 3.14 para uma temperatura pr´oxima da temperatura efetiva do
Sol, T = 6300 K (Novotny 1973). Nesta figura, a ordenada ´e dada por
26
10 (kH−/Pe nH), isto ´e, a ordenada ´e o coeficiente de absor¸c˜ao kH−, me-
−1
dido em cm dividido pela press˜ao eletrˆonica Pe = ne k T e pela densidade
26
de ´atomos de H neutro, nH, tudo isso multiplicado por 10 , de modo que as
4 −1
unidades da ordenada no sistema cgs s˜ao cm dina . Est˜ao destacadas as
componentes ligado-livre (b-f) e livre-livre (f-f). Vemos que para λ ≤ 14000 ˚A,
a principal componente ´e ligado-livre, e para λ > 14000 ˚A, a principal com-
ponente ´e a transi¸c˜ao livre-livre. Para maiores detalhes ver Novotny (1973) e
Doughty e Fraser (1966).
−
Figura 3.14 - Coeficiente de absor¸c˜ao para o ´ıon H na fotosfera solar em fun¸c˜ao do
comprimento de onda.
−
EXEMPLO 3.13 - Opacidade ligado-livre m´axima do ´ıon H
De acordo com a Figura 3.14, o coeficiente de absor¸c˜ao ligado-livre (b-f)
−
m´aximo do ´ıon H (k −) em uma regi˜ao da fotosfera solar corresponde aproxi-
H
madamente ao comprimento de onda λmax ≃ 8500 ˚A e o valor m´aximo da

---

## Página 100

88 Transporte de Energia em Astrof´ısica
opacidade ´e dado por
26 4
10 k − cm
H
≃ 3.5
Pe nH dina
13 −3
onde Pe = ne k T ´e a press˜ao eletrˆonica, ne ≃ 2 × 10 cm ´e a densidade
17 −3
eletrˆonica, nH ≃ 10 cm ´e a densidade de H neutro e T ≃ 6300 K ´e a
−1
temperatura. Neste caso, o coeficiente de absor¸c˜ao m´aximo kH− em cm
pode ser obtido por
13 −16 17
(3.5) (2 × 10 ) (1.38 × 10 ) (6300) (10 )
−8 −1
k − ≃ ≃ 6.1 × 10 cm
H
26
10
Podemos tamb´em estimar o coeficiente de absor¸c˜ao m´aximo para transi¸c˜ao
−
ligado-livre do ´ıon H na fotosfera solar, considerando que a se¸c˜ao de choque
−17 2
m´axima para esta transi¸c˜ao ´e σ − ≃ 4 × 10 cm . A densidade de ´atomos
H
17 −3 7
neutros de H ´e nH ≃ 10 cm , e existem 4 × 10 ´atomos de H neutro para
− 7
cada ´ıon H . Neste caso nH/n − ≃ 4 × 10 e
H
−17 17
(4 × 10 ) (10 )
′ −7 −1
k − ≃ (σ −) (n −) ≃ ≃ 1.0 × 10 cm
H H H
7
4 × 10
comparando com o resultado anterior temos
′ −7
k − 1.0 × 10
H
≃ ≃ 1.6
−8
k − 6.1 × 10
H
´
3.5.3 ESPALHAMENTO POR ELETRONS
Em atmosferas de estrelas mais quentes, os elementos mais abundantes,
H e He, est˜ao ionizados, de modo que a densidade eletrˆonica na atmosfera ´e
alta, incluindo os el´etrons doados pelo H (ne = nH) e aqueles doados pelo
He (ne = 2nHe), al´em das contribui¸c˜oes dos elementos pesados. Portanto, o
espalhamento da radia¸c˜ao pelos el´etrons, ou espalhamento Thomson, ´e uma
fonte importante de opacidade (Figura 3.15).

---

## Página 101

Atmosferas Estelares 89
Figura 3.15 - Espalhamento Thomson.
Tamb´em neste caso, o coeficiente de absor¸c˜ao (ou coeficiente de espalhamento)
´e independente da frequˆencia da radia¸c˜ao. A radia¸c˜ao a ser espalhada vem
principalmente na dire¸c˜ao radial, mas ap´os o espalhamento, a dire¸c˜ao dos
f´otons espalhados ´e essencialmente isotr´opica, resultando uma diminui¸c˜ao no
n´umero de f´otons propagando-se na dire¸c˜ao radial.
2 −7
Para temperaturas suficientemente baixas, k T ≪ me c ≃ 8.2 × 10 erg
= 0.5 MeV, a se¸c˜ao de choque de espalhamento por el´etrons ´e constante, e
pode ser obtida classicamente por
4
8πe
−25 2
σe = = 6.65 × 10 cm (3.43)
2 4
3 m c
e
(ver por exemplo Rybicki e Lightman 1979, Panofsky e Phillips 1962). Como
ke = κe ρ = ne σe, o coeficiente de espalhamento por massa ´e
ne ne
−25 2
κe = σe = 6.65 × 10 cm /g (3.44)
ρ ρ
onde ne ´e a densidade eletrˆonica. Chamando X, Y e Z as abundˆancias de
H, He e elementos pesados por massa, o n´umero de el´etrons doados pelo H
´e ρ X/mH, o n´umero de el´etrons doados pelo He ´e ρ Y /2 mH, e o n´umero
de el´etrons doados pelos elementos pesados ´e (ρ Z/mH)(Zi/Ai) ≃ ρ Z/2 mH,
−24
onde mH = 1.67 × 10 g ´e a massa do ´atomo de H, Zi e Ai s˜ao o n´umero
atˆomico e massa atˆomica do elemento pesado i, respectivamente. Portanto, a
densidade eletrˆonica total ´e
( )
ρ Y Z ρ 1 + X
ne ≃ X + + ≃ (3.45)
mH 2 2 mH 2
onde usamos o fato de que X + Y + Z = 1. De (3.44) e (3.45) temos

---

## Página 102

90 Transporte de Energia em Astrof´ısica
σe 1 + X
2
κe ≃ ≃ 0.2 (1 + X) cm /g (3.46)
mH 2
Nas temperaturas t´ıpicas das atmosferas estelares a contribui¸c˜ao do espa-
lhamento Thomson para a opacidade ´e pequena, mas pode ser consider´avel
nos interiores das estrelas e no in´ıcio da expans˜ao do Universo, quando toda
a mat´eria estava ionizada.
No caso de f´otons de alta energia, como na faixa dos raios X, uma ca-
racter´ıstica importante do espalhamento da radia¸c˜ao por el´etrons consiste no
recuo sofrido pelo el´etron, o que n˜ao apenas modifica a dire¸c˜ao da propaga¸c˜ao
do f´oton mas tamb´em reduz um pouco sua energia, parte da qual que ´e co-
municada ao el´etron. Portanto o comprimento de onda da radia¸c˜ao espalhada
´e um pouco maior. Este ´e o Efeito Compton, e pode ter alguma influˆencia
no fluxo observado nesta faixa espectral. Al´em disto, em algumas situa¸c˜oes
pode ocorrer um espalhamento por el´etrons relativ´ısticos, quando parte de
sua energia ´e transferida ao f´oton incidente, que ´e o Efeito Compton Inverso.
Por exemplo, f´otons da faixa r´adio ou infravermelho podem ser espalhados
para a faixa ultravioleta ou raios X, respectivamente.
EXEMPLO 3.14 - O limite de Eddington
Part´ıculas situadas na superf´ıcie de uma estrela podem sofrer uma for¸ca devida
`a radia¸c˜ao, causada pela absor¸c˜ao da quantidade de movimento dos f´otons em
um processo como o espalhamento por el´etrons. O limite de Eddington ´e
definido como a luminosidade m´axima de uma estrela para que a for¸ca sobre
os el´etrons ou ´ıons devida `a radia¸c˜ao n˜ao exceda a for¸ca gravitacional. Em
uma estrela de luminosidade L, a for¸ca radiativa sobre um ´atomo de H `a
2
distˆancia r do centro ´e Lσe/4πr c, correspondendo `a taxa de varia¸c˜ao da
quantidade de movimento dos f´otons do campo de radia¸c˜ao. Em uma estrela
de massa M, para haver equil´ıbrio, devemos ter
L σe G M mH
≃ (3.47)
2 2
4π r c r
de onde obtemos
4πc GmH M
38
L ≃ M ≃ 1.26 × 10 erg/s (3.48)
σe M⊙

---

## Página 103

Atmosferas Estelares 91
ou
L M
4
≃ 3.3 × 10 (3.49)
L⊙ M⊙
que ´e o limite de Eddington.
EXEMPLO 3.15 - A aproxima¸c˜ao de Kramers
Em alguns casos, ´e poss´ıvel obter uma aproxima¸c˜ao anal´ıtica para o coeficiente
de absor¸c˜ao ligado-livre, especialmente quando o H e o He est˜ao ionizados.
Ent˜ao, `a medida que T aumenta, um n´umero maior de n´ıveis de elementos
pesados deixa de ser importante, diminuindo o coeficiente de absor¸c˜ao. A
aproxima¸c˜ao de Kramers, obtida por Eddington a partir do coeficiente de
absor¸c˜ao de Kramers ´e dada por
gbf ρ
25 2
κbf ≃ 4.3 × 10 Z(1 + X) cm /g (3.50)
3.5
t T
Uma express˜ao semelhante pode tamb´em ser obtida para a transi¸c˜ao livre-livre
(free-free)
ρ
22 2
κf f ≃ 3.68 × 10 gf f (1 − Z) (1 + X) cm /g (3.51)
3.5
T
(ver por exemplo Maciel 1999, Clayton 1968). Nestas express˜oes, X e Z
s˜ao novamente as fra¸c˜oes por massa de H e elementos pesados; gbf e gf f
s˜ao valores m´edios do fator de Gaunt, da ordem da unidade; t ´e o fator de
guilhotina, da ordem de 1–100, relacionado com o n´umero de el´etrons restante
no ´ıon considerado. Por exemplo, no material solar a uma densidade ρ ≃
−7 3 −4 3 4 2 2
10 g/cm = 10 kg/m e T ≃ 10 K obtemos κbf ≃ 150 cm /g = 15 m /kg
com gbf ≃ 1, t ≃ 10, X ≃ 0.7 e Z ≃ 0.02.
EXEMPLO 3.16 - Fronteira entre espalhamento puro e ligado-livre
Podemos usar a aproxima¸c˜ao de Kramers (3.50) para estimar a fronteira entre
o dom´ınio de espalhamento puro e o das transi¸c˜oes ligado-livre. Usando o
coeficiente de espalhamento por el´etrons dado por (3.44) e o peso molecular
por el´etron dado por
ρ 2
μe = ≃ (3.52)
nemH 1 + X

---

## Página 104

92 Transporte de Energia em Astrof´ısica
temos
σe σe 1 + X
κe = ≃ ≃ 0.20 (1 + X) (3.53)
μe mH mH 2
a fronteira pode ser estimada fazendo κbf = κe, portanto
0.20 t t
3.5 −27 3.5 3
ρ ≃ T ≃ 4.7 × 10 T g/cm (3.54)
25
4.3 × 10 gbf Z gbf Z
4
Por exemplo, novamente com gbf ≃ 1, t ≃ 10, Z ≃ 0.02, e T ∼ 10 K,
−10 3 −7 3
obtemos ρ ≃ 2.3 × 10 g/cm = 2.3 × 10 kg/m . Resultados semelhantes
aos Exemplos 3.15 e 3.16 podem ser obtidos para regi˜oes mais densas no
interior solar (cap´ıtulo 5).
´
EXERCICIOS
3.1 Prove a rela¸c˜ao (3.28) (ver por exemplo Choudhuri 2010, cap. 2).
3.2 Prove a rela¸c˜ao (3.31) (ver por exemplo Mihalas 1978, cap. 3.)
3.3 Prove as rela¸c˜oes (3.40)-(3.42). Considere que, em ET, as taxas de
emiss˜ao e absor¸c˜ao de energia devem ser iguais, e use a equa¸c˜ao de Boltz-
mann (2.56) para obter uma rela¸c˜ao entre os coeficientes de Einstein.
−
3.4 O ´ıon H tem um potencial de ioniza¸c˜ao de 0.75 eV. Supondo que o Sol
emita radia¸c˜ao como um corpo negro a uma temperatura de 5800 K, que
−
fra¸c˜ao do n´umero de f´otons emitidos pelo Sol pode ionizar o H ?
3.5 Estime o caminho livre m´edio para espalhamento Thomson (a) em um
−7 3
ponto da fotosfera solar onde ρ ∼ 10 g/cm e (b) em um ponto do
3
interior do Sol, onde ρ ∼ 140 g/cm . Admita que o hidrogˆenio representa
cerca de 70% da massa do g´as.

---

## Página 105

Atmosferas Estelares 93
REFERˆENCIAS BIBLIOGR ´AFICAS
AERTS, C., CHRISTENSEN-DALSGAARD, J., KURTZ, D. W. 2010,
Asteroseismology, Springer
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHANDRASEKHAR, S. 1945, Astrophysical Journal, 101, 328
CHANDRASEKHAR, S. 1960, Radiative Transfer, Dover
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
CLAYTON, D. D. 1968, Principles of Stellar Evolution and Nucleosynthesis,
McGraw-Hill
COX, A. N., 2000, Allen’s Astrophysical Quantities, AIP
DOUGHTY, N. A., FRASER, P. A. 1966, Monthly Notices of the Royal As-
tronomical Society, 132, 267
GRAY, D. F. 2008, The Observation and Analysis of Stellar Photospheres,
CUP
KURUCZ, R. L. 1979, Astrophysical Journal Supplements 40, 1
MACIEL, W. J. 1999, Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar, Edusp
(edi¸c˜ao em inglˆes: Introduction to Stellar Structure, Springer 2015)
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
MIHALAS, D. 1978, Stellar Atmospheres, Freeman
NOVOTNY, E. 1973, Introduction to Stellar Atmospheres and Interiors, OUP
PANOFSKY, W. K. H., PHILLIPS, M. 1962, Classical Electricity and Mag-
netism, Addison-Wesley

---

## Página 106

94 Transporte de Energia em Astrof´ısica
RYBICKY, G. B., LIGHTMAN, A. P. 1979, Radiative Processes in Astro-
physics, Wiley
SHU, F. H. 1982, The Physical Universe, University Science Books
SWIHART, T. L. 1968, Astrophysics and Stellar Astronomy, Wiley
SWIHART, T. L. 1981, Radiation Transfer and Stellar Atmospheres, Pachart
ZEILIK, M., GREGORY, S. A. 1998, Introductory Astronomy and Astro-
physics, Brooks Cole

---

## Página 107

## 4
## FORMAC¸ ˜AO DE LINHAS ESPECTRAIS
4.1 INTRODUC¸ ˜AO
No cap´ıtulo anterior estudamos as atmosferas estelares, em particular no
que se refere `a radia¸c˜ao cont´ınua emitida pelas estrelas. Neste cap´ıtulo vamos
considerar alguns aspectos b´asicos relativos `as linhas espectrais observadas
nas estrelas e no meio interestelar. Algumas referˆencias sobre o material deste
cap´ıtulo incluem Choudhuri (2010), Swihart (1968), Maciel (2002), Zeilik e
Gregory (1998) e Carroll e Ostlie (2014).
4.2 LINHAS ESPECTRAIS
As linhas espectrais podem ser observadas em emiss˜ao ou em absor¸c˜ao,
superpostas ou n˜ao a uma emiss˜ao cont´ınua. Por exemplo, na figura 1.5
podemos ver algumas linhas de absor¸c˜ao no espectro solar, e na figura 2.17
observamos diversas bandas moleculares (H2O, CO2) – essencialmente con-
juntos de milhares de linhas espectrais – produzidas na atmosfera terrestre.
Na figura 2.16 podemos observar, `a direita, algumas linhas de emiss˜ao obser-
vadas nos espectros de nebulosas planet´arias, como as linhas do [OIII] (λ4959,
5007˚A), Hα (λ6563˚A) e Hβ(λ4861˚A).

---

## Página 108

96 Transporte de Energia em Astrof´ısica
Figura 4.1 - O espectro solar de Fraunhofer.
A figura 4.1 mostra o espectro solar cl´assico de Fraunhofer (1787-1826), obtido
a partir de uma grade de difra¸c˜ao para determinar as posi¸c˜oes relativas de
centenas de linhas no espectro solar. Note que Fraunhofer deu nomes `as linhas
mais importantes, partindo da regi˜ao vermelha em dire¸c˜ao ao ultravioleta.
Alguns dos nomes dados por ele s˜ao usados at´e hoje, como no caso das linhas
H (λ3968.47˚A) e K (λ3933.66˚A) do Ca II e das linhas D1 (λ5895.92˚A) e
D2 (λ5889.95˚A) do Na I. Outros exemplos de linhas espectrais em absor¸c˜ao
podem ser vistos na figura 4.2.
Figura 4.2 - Linhas espectrais em absor¸c˜ao: estrelas e meio interestelar.
Nesta figura, podemos observar as linhas H e K do Ca II em absor¸c˜ao de
origem interestelar superpostas ao espectro da estrela ζ Oph, uma estrela de

---

## Página 109

Forma¸c˜ao de linhas espectrais 97
+
tipo O9.5V, assim como uma linha interestelar da mol´ecula CH (λ3957.74˚A).
A linha Hǫ em absor¸c˜ao, mas de origem estelar, pode tamb´em ser observada na
figura. Note-se que as linhas interestelares s˜ao muito mais estreitas que a linha
estelar, refletindo as menores temperaturas das nuvens interestelares, que pro-
duzem movimentos (e um efeito Doppler) mais modesto em compara¸c˜ao com
as condi¸c˜oes nas atmosferas estelares (se¸c˜ao 4.3).
A tabela 4.1 mostra caracter´ısticas de algumas das linhas de absor¸c˜ao
´opticas de origem interestelar, as quais produziram a maior parte dos dados
sobre as nuvens interestelares at´e a d´ecada de 1970.
´ıon/mol´ecula λ (˚A) transi¸c˜ao
2 2 0
Na I (D2) 5889.95 3 S − 3 P
1/2 3/2
2 2 0
Na I (D1) 5895.92 3 S − 3 P
1/2 1/2
2 2 0
Ca II (K) 3933.66 4 S − 4 P
1/2 3/2
2 2 0
Ca II (H) 3968.47 4 S − 4 P
1/2 1/2
2 + 2 +
CN 3874.61 B Σ ← X Σ (0, 0) R(0)
2 2
CH 4300.31 A ∆ ← X Π(0, 0) R2(1)
+ 1 1 +
CH 4232.58 A Π ← X Σ (0, 0) R(0)
+ 1 1 +
CH 3957.74 A Π ← X Σ (1, 0) R(0)
Tabela 4.1 - Exemplos de linhas espectrais interestelares ´opticas.
Mais recentemente, linhas espectrais passaram a ser observadas em outras
faixas do espectro, como o ultravioleta. A tabela 4.2 mostra algumas linhas
importantes observadas nesta faixa do espectro.
A figura 4.3 mostra um exemplo de uma linha de absor¸c˜ao ultravioleta de
origem interestelar em alta resolu¸c˜ao para o Si III (λ1206.51˚A) na dire¸c˜ao da
estrela ζ Oph. Este ´e um exemplo de uma linha n˜ao saturada, enquanto que
linhas de elementos mais abundantes, como a linha Lyman-α do H (λ1216˚A),
encontram-se saturadas na dire¸c˜ao desta estrela.

---

## Página 110

98 Transporte de Energia em Astrof´ısica
´ıon λ (˚A) ´ıon λ (˚A)
H I 1215.67 Mg I 2852.13
H I 1025.72 Mg II 2795.53
C I 1328.83 Si I 2514.32
C I 1277.24 Si II 1193.29
C II 1334.53 Si II 1260.42
C IV 1548.20 Si III 1206.51
N I 1200.71 S II 1259.52
N II 1134.17 S III 1190.21
O I 1302.17 Fe II 2599.40
O I 1039.23 Fe II 2382.03
Tabela 4.2 - Exemplos de linhas espectrais no ultravioleta.
Figura 4.3 - A linha de absor¸c˜ao interestelar do Si III na dire¸c˜ao de ζ Oph.
Podemos tamb´em observar e analisar linhas espectrais em objetos extra-
gal´acticos, como mostrado na figura 4.4, para o espectro da gal´axia tipo
Seyfert 2 NGC 1667 e da gal´axia LINER (Low ionization nuclear emission
region) NGC 1052, onde podem ser observadas linhas estreitas em emiss˜ao do
oxigˆenio, c´alcio e s´odio.

---

## Página 111

Forma¸c˜ao de linhas espectrais 99
Figura 4.4 - Espectros de gal´axias Seyfert 2 e LINER.
EXEMPLO 4.1 - Efeito Doppler na linha Hα em Vega
A linha Hα tem comprimento de onda de repouso λ0 = 6562.81 ˚A, e ´e ob-
servada em absor¸c˜ao na estrela Vega (α Lyr) no comprimento de onda λ =
6562.51 ˚A. A paralaxe da estrela ´e p = 130.23 mas = 0.13023”, de modo que
sua distˆancia ´e d = 1/p = 7.68 pc. Pelo efeito Doppler podemos estimar sua
velocidade radial como
λ − λ0
vr = c = −13.70 km/s
λ0
Medidas da velocidade radial desta estrela levando em conta a rota¸c˜ao da Terra
em torno do Sol produzem essencialmente este mesmo resultado. Podemos
tamb´em estimar a velocidade tangencial da estrela. Seu movimento pr´oprio em
ascens˜ao reta ´e μα = 200.94 mas/ano e em declina¸c˜ao μδ = −286.23 mas/ano,
com um movimento pr´oprio total μ = 349.72 mas/ano ≃ 0.350”/ano. A ve-
locidade tangencial ´e ent˜ao

---

## Página 112

100 Transporte de Energia em Astrof´ısica
vt = 4.74 μ d = (4.74) (0.350) (7.68) = 12.74 km/s
√
2 2
Portanto, a velocidade espacial da estrela ´e v = v + v = 18.71 km/s.
r t
4.3 ALARGAMENTO DAS LINHAS ESPECTRAIS
4.3.1 LINHAS ESPECTRAIS
As linhas espectrais correspondem `a emiss˜ao ou absor¸c˜ao de f´otons cau-
sadas pela transi¸c˜ao de um ´atomo ou ´ıon entre dois n´ıveis de energia j e k,
com energias Ej e Ek, respectivamente (ver por exemplo as figuras 3.12 ou
4.6). Se os n´ıveis fossem infinitamente finos, a transi¸c˜ao ocorreria para um
comprimento de onda λjk, ou frequˆencia νjk, bem definidos, dados por
h c
∆Ejk = Ek − Ej = h νjk = (4.1)
λjk
Entretanto, os n´ıveis j e k n˜ao s˜ao infinitamente finos, eles possuem um certo
intervalo de energias (ou tempos de vida), de modo que os comprimentos
de onda (ou frequˆencias) vizinhos ao central tamb´em devem ser inclu´ıdos
no processo de emiss˜ao ou absor¸c˜ao. Processos que produzem alargamento
das linhas espectrais incluem o efeito Doppler, o alargamento rotacional, o
alargamento por press˜ao, turbulˆencia, efeito de campos magn´eticos (efeito
Zeeman), campos el´etricos (efeito Stark), e o pr´oprio instrumental usado para
analisar as linhas. Como resultado, a linha espectral tem um perfil, isto ´e,
inclui uma parte central, o n´ucleo da linha, e tamb´em as partes mais afastadas
do centro, que s˜ao as asas da linha, como pode ser visto no exemplo da figura
4.3. Nesta figura a linha de absor¸c˜ao do SiIII est´a centrada em λ = 1206.5 ˚A,
mas estende-se `a esquerda e `a direita por alguns cent´esimos de Angstroms.
Nesta se¸c˜ao vamos analisar os principais processos de alargamento das linhas
espectrais.
EXEMPLO 4.2 - Tempos de vida dos n´ıveis de energia
Como vimos no Exemplo 2.13, a probabilidade de transi¸c˜ao espontˆanea para
−15 −1
a linha de 21 cm do H ´e A21 = 2.9 × 10 s , de modo que o tempo de vida
14 7
do n´ıvel superior ´e muito longo, t ∼ 1/A21 ≃ 3.45 × 10 s ∼ 1.1 × 10 ano.

---

## Página 113

Forma¸c˜ao de linhas espectrais 101
Figura 4.5 - Espectro da nebulosa planet´aria Pe1-15. As linhas 4959, 5007 ˚A do [OIII]
podem ser vistas, al´em de H-alfa (6563 ˚A) e H-beta (4861 ˚A).
Para as linhas proibidas do [OIII] em λ = 4959 e 5007 ˚A, frequentemente
observadas no espectro de nebulosas planet´arias, as probabilidades m´edias
−3 −1 −2 −1
s˜ao A21 = 6.7 × 10 s e 2.0 × 10 s (Maciel 2002), de modo que as
escalas de tempo dos n´ıveis superiores s˜ao tamb´em relativamente altas, t ≃
2
1.49×10 s e 50 s, respectivamente. A figura 4.5 mostra o espectro da nebulosa
planet´aria Pe1-15, onde estas duas linhas s˜ao claramente observadas, sendo
muito intensas (ver a figura 2.16). J´a para as linhas permitidas do hidrogˆenio
Lyman-α em λ = 1216 ˚A (figura 4.12), Hα (λ = 6563 ˚A) e Hβ (λ = 4861 ˚A), as
8 −1 7 −1 6 −1
probabilidades s˜ao muito altas, A21 = 4.7×10 s , 4.4×10 s e 8.4×10 s
(Cox 2000), de modo que as escalas de tempo dos n´ıveis correspondentes s˜ao
−9 −8 −7
curtas, t ≃ 2.1 × 10 s, 2.3 × 10 s e 1.2 × 10 s, respectivamente.
4.3.2 PERFIL DE UMA LINHA ESPECTRAL
Em um processo envolvendo dois n´ıveis de energia j e k (figura 4.6) de
−1
um ´atomo, o coeficiente de absor¸c˜ao por volume (cm ) pode ser escrito
kν = nj(X) σν (4.2)
−3
onde nj(X) ´e a densidade de part´ıculas do tipo X no n´ıvel j (cm ), e σν
2
(cm ) ´e a se¸c˜ao de choque de absor¸c˜ao, ou coeficiente de absor¸c˜ao por ´atomo
no n´ıvel j. Esta se¸c˜ao de choque est´a relacionada `a se¸c˜ao de choque integrada

---

## Página 114

102 Transporte de Energia em Astrof´ısica
∫
2
σ (cm Hz) por σ = σν dν, onde a integral ´e feita em toda a linha. A se¸c˜ao
de choque total, desprezando as emiss˜oes induzidas, pode ser escrita
h νjk Bjk
σ = (4.3)
c
onde Bjk ´e o coeficiente de absor¸c˜ao de Einstein, visto na se¸c˜ao 3.5.1. A se¸c˜ao
de choque σ est´a relacionada com a for¸ca de oscilador fjk para a transi¸c˜ao
j → k por
2
πe
σ = fjk (4.4)
mec
Figura 4.6 - N´ıveis de energia j e k.
Os coeficientes de Einstein Akj, Bjk, Bkj podem ser relacionados entre si, como
vimos no Exerc´ıcio 3.3, e tamb´em com a for¸ca de oscilador fjk (ver Exerc´ıcio
4.1). Definindo ∆ν = ν − νjk, podemos introduzir a fun¸c˜ao perfil da linha
−1
φ(∆ν) (unidades: Hz ), por
σν = σ φ(∆ν) (4.5)
Esta fun¸c˜ao ´e normalizada, ou seja
∫
φ(∆ν) dν = 1 (4.6)
onde a integral ´e feita em toda a linha. A fun¸c˜ao φ(∆ν) depende da largura
da linha, incluindo os mecanismos de alargamento que possam ocorrer. O
alargamento natural ou intr´ınseco ´e uma conseq¨uˆencia do princ´ıpio da in-
certeza de Heisenberg. O movimento t´ermico dos ´atomos causadores da linha

---

## Página 115

Forma¸c˜ao de linhas espectrais 103
introduz um alargamento adicional, devido ao efeito Doppler. Em termos da
profundidade ´optica, o perfil pode ser escrito
∫ ∫
τν = kν ds = nj σ φ(∆ν) ds = Nj σ φ(∆ν) (4.7)
∫
−2
onde introduzimos a densidade de coluna Nj = nj ds, medida em cm . A
integral ´e feita em toda a dimens˜ao da nuvem, e a densidade de coluna pode
ser obtida integrando (4.7)
∫ ∫
τν dν = Nj σ φ(∆ν) dν = Nj σ (4.8)
∫
1
Nj = τν dν (4.9)
σ
4.3.3 O PERFIL DOPPLER
Para o alargamento Doppler devido ao movimento t´ermico das part´ıculas
absorvedoras temos (ver Maciel 2002)
φ(∆ν) dν = f(v) dv (4.10)
onde a fun¸c˜ao de distribui¸c˜ao de velocidades f(v) ´e admitida maxwelliana,
representando a fra¸c˜ao dos ´atomos com velocidade radial no intervalo entre v
e v + dv. Para v ≪ c, temos
∆ν v
= (4.11)
νjk c
dv dν dν λjk
= = (4.12)
c νjk c
usando a fun¸c˜ao de distribui¸c˜ao de Maxwell (2.45) e (4.10) obtemos
( )
1/2
m 2 c c 2
−mv /2kT −(c∆ν/bνjk)
φ(∆ν) = e = √ e (4.13)
2πkT νjk b π νjk
onde introduzimos o parˆametro b dado por
( )
1/2
2 k T
b = (4.14)
m

---

## Página 116

104 Transporte de Energia em Astrof´ısica
sendo m a massa do ´atomo absorvedor e T a temperatura do g´as. Este
parˆametro est´a relacionado com a largura Doppler ∆νD, ou seja, o valor de
∆ν para o qual a fun¸c˜ao perfil diminui por um fator e. O m´aximo de φ(∆ν) ´e
c λjk
φ (∆ν) = √ = √ (4.15)
M
b π νjk b π
de modo que
1 c 2
−(c∆νD/bνjk)
φ(∆ν ) = φ (∆ν) = √ e (4.13)
D M
e b π νjk
ou seja
νjk b
∆νD = b = (4.17)
c λjk
O perfil φ(∆ν) pode ser escrito em termos da largura Doppler
1 2
−(∆ν/∆νD)
φ(∆ν) = √ e (4.18)
π ∆νD
O perfil Doppler ´e normalizado, de acordo com a equa¸c˜ao (4.6) (ver Exerc´ıcio
4.3). A largura total `a metade da intensidade m´axima FWHM (full width at
half maximum), representada por ∆νh, pode ser calculada de (4.18)
( )
1 1 1 2
−(∆νh/2∆νD)
φ(∆ν /2) = √ = √ e (4.19)
h
2 π ∆νD π ∆νD
de onde obtemos
√ √
√ 2 b ν ln 2 2 b ln 2
jk
∆νh = 2 ∆νD ln 2 = = (4.20)
c λjk
EXEMPLO 4.3 - Perfil Doppler da linha K da CaII interestelar
−1
Um exemplo do perfil Doppler φ(∆ν) em Hz est´a mostrado na figura 4.7,
para a linha K do Ca II interestelar, para a qual λjk = 3933.66 ˚A ou νjk =
14
7.63 × 10 Hz. Adotando T ≃ 100 K para a temperatura da nuvem, obtemos
4 −23
de (4.14) b ≃ 2.0 × 10 cm/s com mCa ≃ 40 mH = 6.68 × 10 g. De (4.17),
8
a largura Doppler ´e ∆νD ≃ 5.2 × 10 Hz, de modo que a largura total `a meia
8
altura (FWHM), de (4.20), ´e ∆νh ≃ 8.6×10 Hz. Em termos do comprimento
de onda, a regi˜ao caracterizada por uma largura Doppler ´e dada por ∆λD ≃
λjk∆νD/νjk ≃ 0.003 ˚A, isto ´e, a linha ´e bastante estreita.

---

## Página 117

Forma¸c˜ao de linhas espectrais 105
Figura 4.7 - Perfil de uma linha espectral com alargamento Doppler.
No caso de uma linha de absor¸c˜ao, o perfil da figura 4.7 d´a uma id´eia do
pr´oprio perfil da linha, invertido com rela¸c˜ao ao eixo horizontal. A rela¸c˜ao
−τν
entre as intensidades observada e original ´e Iν/Iν(0) = e , onde a profun-
didade ´optica ´e τν ∝ φ(∆ν), como visto na equa¸c˜ao (4.7). Para |∆ν| ≫ ∆νD,
φ(∆ν) → 0 e Iν/Iν(0) → 1, isto ´e, a intensidade da radia¸c˜ao n˜ao ´e afetada
pelos ´atomos absorvedores em frequˆencias muito distantes da freqˆencia cen-
√
tral. No centro da linha, onde φ(∆ν) = φ(0) = 1/( π∆νD), a profundidade
´optica ´e m´axima, podendo chegar a valores τν ≫ 1 para linhas completa-
mente escuras, de modo que Iν/Iν(0) → 0 nesta regi˜ao. Por exemplo, para
−1
τν ≃ 1 e τν ≃ 5 no centro da linha, ter´ıamos Iν/Iν(0) ≃ e ≃ 0.37 e
−5
Iν/Iν(0) ≃ e ≃ 0.01, respectivamente. Nas regi˜oes intermedi´arias, o per-
fil φ(∆ν) decresce com rela¸c˜ao ao valor central. Como o n´umero de ´atomos
absorvedores permanece constante, a raz˜ao Iν/Iν(0) cresce at´e atingir o valor
inicial Iν/Iν(0) ≃ 1 nas freqˆencias distantes da frequˆencia central.
EXEMPLO 4.4 - Largura Doppler da linha Hβ em nuvens de g´as
14
A linha espectral Hβ est´a centrada em λ0 = 4861.35 ˚A com ν0 = 6.17×10 Hz.
Vamos admitir que esta linha sofre alargamento Doppler em uma nuvem de
4 4 6
g´as com T = 10 K. Com m = mH e T = 10 K temos b = 1.29 × 10 cm/s.

---

## Página 118

106 Transporte de Energia em Astrof´ısica
A FWHM ∆νh ´e dada por
√
2 b ln 2
10
F W HM = ∆νh = = 4.42 × 10 Hz
λ0
portanto
2
λ
0 −9
∆λh = ∆νh = 3.48 × 10 cm = 0.348 ˚A
c
4.3.4 O PERFIL DE LORENTZ
Pelo princ´ıpio da incerteza de Heisenberg, a vida m´edia finita dos n´ıveis
de energia implica um alargamento natural ou intr´ınseco das linhas espectrais.
Neste caso, temos que ∆E ∆t ≥ h para um dado n´ıvel de energia, isto ´e, h´a
uma imprecis˜ao na energia do n´ıvel ∆E, que corresponde a um certo intervalo
de frequˆencia ∆ν. Mesmo que o movimento dos ´atomos absorvedores seja
desprez´ıvel, e portanto o alargamento Doppler, ainda assim a linha espectral
ter´a uma largura natural. Este tipo de alargamento pode ser caracterizado
por uma fun¸c˜ao que ´e o chamado perfil natural ou perfil de Lorentz
2
Γk/4π
φ(∆ν) = (4.21)
2 2
(ν − νjk) + (Γk/4π)
onde Γk ´e o coeficiente de dissipa¸c˜ao quˆantico, ou constante de amortecimento,
∑
Γk = Akj, sendo essencialmente o inverso do tempo de vida radiativo do
j
n´ıvel k considerado, onde Akj ´e o coeficiente de emiss˜ao de Einstein (ver se¸c˜ao
3.5.1). Assim como o perfil Doppler, o perfil de Lorentz ´e normalizado, de
acordo com (4.6). De (4.21), ´e f´acil mostrar que a FWHM neste caso ´e (ver
Exerc´ıcio 4.4)
Γk
∆νh = (4.22)
2 π
Em regi˜oes densas, a presen¸ca de ´atomos ou ´ıons causa perturba¸c˜oes na
estrutura dos n´ıveis de energia de um dado ´atomo ou ´ıon, levando a um alarga-
mento adicional das linhas espectrais, chamado alargamento colisional, ou
alargamento por press˜ao. O tratamento detalhado deste tipo de alargamento
´e bastante complexo, sendo geralmente aproximado pelo perfil de Lorentz
(4.21), com uma defini¸c˜ao conveniente do coeficiente de dissipa¸c˜ao. Fazendo

---

## Página 119

Forma¸c˜ao de linhas espectrais 107
uma analogia com o alargamento natural, pode-se mostrar que a FWHM neste
caso pode ser escrita
√
n σ 2 k T n σ
∆νh = = b (4.23)
π m π
√
2 2
λ n σ 2 k T λ n σ
∆λh = = b (4.24)
c π m c π
onde σ ´e a se¸c˜ao de choque para as colis˜oes com as part´ıculas do meio.
EXEMPLO 4.5 - A linha Hα na atmosfera solar
Vamos considerar a linha Hα (λ = 6563 ˚A = 656.3 nm) em absor¸c˜ao na foto-
sfera solar (figura 4.8), admitindo uma temperatura T = 5800 K. De (4.14),
5 −24
o parˆametro b = 9.79 × 10 cm/s ≃ 9.8 km/s usando mH = 1.67 × 10 g.
10
A largura Doppler ´e ∆νD = 1.49 × 10 cm/s, a FWHM dada por (4.20) ´e
10
∆νh(D) = 2.48 × 10 Hz, correspondendo a
Figura 4.8 - A linha H-alfa do H em absor¸c˜ao na fotosfera solar.
∆νh(D) ∆νh(D)
2 −9
∆λh(D) = λjk = λ ≃ 3.6 × 10 cm = 0.36 ˚A
jk
νjk c
A largura natural desta linha pode ser estimada por ∆νh(N) = Γk/2 π ≃
7 8
Akj/2 π = 1.6 × 10 Hz, onde usamos Akj ≃ 1.0 × 10 Hz. Portanto, a largura

---

## Página 120

108 Transporte de Energia em Astrof´ısica
2 −12
natural de Hα em angstroms ´e ∆λh(N) = λ ∆νh(N)/c ≃ 2.3 × 10 cm =
jk
−4 ˚
2.3×10 A, cerca de 1500 vezes menor que a largura ∆νh(D) correspondente.
2 −16 2 −9
Tomando σ ≃ π(2 a0) = 3.5×10 cm , onde a0 = 5.3×10 cm ´e o raio de
17 −3
Bohr, e admitindo uma densidade t´ıpica n ≃ 1.5×10 cm para a fotosfera
solar, temos de (4.23) que a FWHM para o alargamento de press˜ao nestas
−12 −4 ˚
condi¸c˜oes ´e ∆λh(P) ≃ 2.3 × 10 cm = 2.3 × 10 A, semelhante ao valor da
largura natural da linha.
EXEMPLO 4.6 - Largura Natural da linha Hβ
Considerando novamente a linha espectral Hβ do Exemplo 4.4, podemos es-
timar a largura natural da linha por
2 2 2
λ λ Γ λ γ
0 0 0
∆λN = ∆νN = ≃ (4.25)
c c 2 π c 2 π
com Γ ≃ γ e usando a rela¸c˜ao cl´assica temos
2 2
2 e (2 π ν)
γ = (4.26)
3
3 me c
2
4 π e
−12 −4
∆λ = ≃ 1.18 × 10 cm ≃ 1.18 × 10 ˚A (4.27)
N
2
3 me c
onde e e me s˜ao a carga e massa do el´etron, respectivamente.
EXEMPLO 4.7 - A linha Lyman-α interestelar
A linha Lyman-α do H envolve uma transi¸c˜ao entre dois n´ıveis j e k, cujos
8 −1
parˆametros s˜ao: λjk = 1215.67 ˚A, gj = 2, gk = 6 e Akj = 6.265 × 10 s . A
for¸ca de oscilador fjk para esta linha ´e
me c gk
2
fjk = Akj λ ≃ 0.417 (4.28)
2 2 jk
8 π e gj
Este resultado pode ser comparado com o valor fjk = 0.4162 (D. C. Mor-
ton, W. H. Smith, Astrophys. J. Suppl. 233, 26, 1973). Analogamente a
∑
8 −1
constante de dissipa¸c˜ao Γk ´e Γk = Akj = 6.265 × 10 s ≃ 0.6 GHz.
j<k
Considerando uma nuvem interestelar de H com uma temperatura cin´etica
T = 80 K a largura Doppler ∆νD ´e
√
2 k T 1
9 −1
∆νD = = 9.46 × 10 s ≃ 9.5 GHz (4.29)
mH λjk

---

## Página 121

Forma¸c˜ao de linhas espectrais 109
Em uma regi˜ao nas asas radiativas da linha, onde ∆ν ≃ 10 ∆νD. temos
10 −1 2 21 −2 2 15 −2
∆ν ≃ 9.46 × 10 s , (∆ν) ≃ 8.95 × 10 s , (Γk/4 π) = 2.49 × 10 s ,
2 2
portanto (∆ν) ≫ (Γk/4 π) . Vamos admitir que todo o H est´a no estado
20 −2
fundamental, com uma densidade de coluna NH = 3×10 cm . Nesse caso,
a profundidade ´optica nas asas da linha ´e
2 4 2
e λ fjk Nj Γk e fjk Nj Γk
3
τν ≃ = ≃ 5.87 × 10 (4.30)
3 2 2
4 π me c (∆λ) 4 π me c (∆ν)
ou seja, toda a radia¸c˜ao ´e absorvida, e a a intensidade trasmitida ´e essencial-
−τν
mente nula, Iν/Iν ≃ e ≃ 0.
0
EXEMPLO 4.8 - A linha H76α em regi˜oes HII
A linha H76α do H ´e produzida no processo de recombina¸c˜ao do n´ıvel nk = 77
para o n´ıvel nj = 76, de modo que a frequˆencia da linha ´e
( )
1 1
2 10
νjk = R Z − = 1.47 × 10 Hz (4.31)
2 2
n n
j k
15 −1
onde R = 3.29 × 10 s ´e a constante de Rydberg. O comprimento de
onda associado ´e λjk = c/νjk = 2.04 cm, e a energia envolvida na transi¸c˜ao
−17 −5
´e Ejk = h νjk = 9.75 × 10 erg = 6.09 × 10 eV. A for¸ca de oscilador
calculada para a transi¸c˜ao ´e fjk ≃ 14.785 (H.C. Goldwire, Ap. J. Suppl. 152,
445, 1968), de modo que o coeficiente Akj de Einstein ´e
2 2 2
8π e ν g
jk j −1
Akj = fjk = 2.29 s (4.32)
3
mec gk
2 2
onde usamos gj/gk = 76 /77 = 0.97 e as rela¸c˜oes (3.44)-(3.46). Portanto,
a energia emitida em um segundo em cada transi¸c˜ao ´e de E = h νj Akj ≃
−16
2.23 × 10 erg.

---

## Página 122

110 Transporte de Energia em Astrof´ısica
0.20
0.15
0.10
C
/S
L
S
0.05
0.00
-0.05
-50 0 50 100 150
V(LSR) (km/s)
Figura 4.9 - A linha H76α na dire¸c˜ao de G34.26+0.15A.
Esta linha pode ser observada na dire¸c˜ao de regi˜oes HII ou regi˜oes de forma¸c˜ao
estelar, como visto no espectro da figura 4.9 para o objeto G34.26+0.15 A
(fluxo relativo ao cont´ınuo em fun¸c˜ao da velocidade LSR, M. Sewilo et al.,
Astrophys. J. 605, 285, 2004). Este objeto est´a associado a uma regi˜ao
HII compacta, ou regi˜ao de g´as quente ionizado, e a linha do H pode ser
observada em emiss˜ao. Neste caso podem ser determinados parˆametros como
a a velocidade e a temperatura eletrˆonica do g´as respons´avel pela emiss˜ao.
A FWHM = 22.8 km/s, e admitindo alargamento Dopler (ver se¸c˜ao 4.3.3),
6 6
temos ∆νh = 1.12×10 Hz e b = 1.37×10 cm/s , de modo que a temperatura
eletrˆonica do g´as ionizado seria Te ≃ 11400 K, t´ıpica de uma regi˜ao HII.
4.3.5 O PERFIL DE VOIGT
No caso mais geral, al´em do alargamento natural ou radiativo e do alarga-
mento Doppler t´ermico (ou eventualmente turbulento, ver a se¸c˜ao 4.5.2), ou-
tros mecanismos podem atuar no processo de forma¸c˜ao da linha espectral. Por
exemplo, campos magn´eticos podem causar um alargamento do tipo Zeeman,
e meios com altas densidades podem causar um alargamento colisional, como
nas atmosferas estelares. Discuss˜oes sobre os diversos tipos de alargamento
podem ser encontrados em Lang (1978) e Rybicki e Lightman (1979). De
maneira aproximada, podemos dizer que o perfil ´e dado pela express˜ao (4.18)

---

## Página 123

Forma¸c˜ao de linhas espectrais 111
nas regi˜oes centrais da linha espectral, onde o coeficiente de absor¸c˜ao ´e maior.
Pr´oximo das asas da linha, ou seja, nas regi˜oes onde ∆ν ≫ ∆νD, o alarga-
mento natural ´e dominante, e o perfil ´e dado essencialmente por (4.21). No
caso mais geral, ou intermedi´ario, podemos combinar estas duas express˜oes e
obter o perfil de Voigt
1
φ(∆ν) = √ H(a, u) (4.33)
π ∆νD
onde H(a, u) ´e a fun¸c˜ao de Hjerting
∫ 2
∞ −x
a e dx
H(a, u) = (4.34)
2 2
π a + (u − x)
−∞
onde usamos a constante adimensional
Γk
a = (4.35)
4 π ∆νD
e definimos
ν − νjk ∆ν
u = = (4.36)
∆νD ∆νD
Na maior parte dos casos de interesse astrof´ısico, a constante a ≪ 1, e o perfil
de Voigt reduz-se ao perfil Doppler no centro da linha e ao perfil de Lorentz
na regi˜ao das asas radiativas. Por exemplo, para o caso da linha K do Ca II no
8 −1
Exemplo 4.3, Γk ∼ 1.6×10 s , de modo que a ∼ 0.02. A regi˜ao de transi¸c˜ao
pode ser estimada igualando os perfis (4.18) e (4.21). Como resultado, para
valores pequenos de a, obtemos u ≃ 3 ou ∆ν ≃ 3∆νD, ou seja, o perfil ´e
< >
Doppler para ∆ν 3∆νD, e Lorentz para ∆ν 3∆νD.
∼ ∼
4.4 LARGURA EQUIVALENTE
A medida da intensidade da radia¸c˜ao emitida ou absorvida em uma linha
espectral pode ser caracterizada por um ´unico parˆametro, a largura equiva-
lente. Vamos considerar uma linha espectral, como mostrado na figura 4.10.
Ic ´e a intensidade no cont´ınuo, e Iλ ´e a intensidade na linha para o compri-
mento de onda λ. A ´area S mostrada na figura pode ser escrita como
∫ ∫ ∫
S = Ic dλ − Iλ dλ = (Ic − Iλ) dλ (4.37)

---

## Página 124

112 Transporte de Energia em Astrof´ısica
Figura 4.10 - Defini¸c˜ao da largura equivalente.
onde as integrais devem ser feitas em toda a extens˜ao da linha. Vamos imagi-
nar uma linha “retangular” de largura Wλ e altura Ic como indicado na figura,
tal que a ´area total desta linha seja igual `a ´area S. Temos ent˜ao
∫
S = (Ic − Iλ) dλ = Wλ Ic (4.38)
de onde obtemos
∫ ∫ ∫ ( )
1 Ic − Iλ Iλ
Wλ = (Ic − Iλ) dλ = dλ = 1 − dλ (4.39)
Ic Ic Ic
definindo a profundidade da linha por
Iλ
Aλ = 1 − (4.40)
Ic
temos que no centro da linha, Iλ ≪ Ic e Aλ → 1, enquanto que nas asas da
linha, Iλ ≃ Ic e Aλ → 0. Em termos da profundidade da linha, a largura
equivalente pode ser escrita

---

## Página 125

Forma¸c˜ao de linhas espectrais 113
∫
Wλ = Aλ dλ (4.41)
Considerando a solu¸c˜ao da equa¸c˜ao de transporte (1.49) e uma linha de ab-
−τν
sor¸c˜ao pura, onde Sν = 0, temos Iλ = Ic e , e a largura equivalente fica
∫ ( ) ∫ ∫
2
I λ
λ −τ jk −τ
ν ν
Wλ = 1 − dλ = (1 − e ) dλ = (1 − e ) dν (4.42)
Ic c
A largura equivalente d´a uma medida direta da energia total absorvida na
linha espectral, e depende da densidade de part´ıculas nos n´ıveis respons´aveis
pela absor¸c˜ao.
EXEMPLO 4.9 - Largura equivalente da linha Lyman-α interestelar
Podemos estimar a largura equivalente de uma linha espectral usando o es-
pectro mostrado na figura 4.11, onde vemos a linha Lyman-α (λ = 1216 ˚A)
em absor¸c˜ao de origem interestelar na dire¸c˜ao da estrela central da nebulosa
planet´aria NGC 2392, obtido com o International Ultraviolet Explorer (IUE)
(ver Exemplo 4.7). A estrela ´e muito quente, com uma temperatura acima
de 70 000 K, portanto, com uma emiss˜ao consider´avel nesta parte do espectro.
Aplicando a rela¸c˜ao (4.38), obtemos a largura equivalente Wλ ≃ 10 ˚A.
Figura 4.11 - A linha Lyman alfa em absor¸c˜ao interestelar na dire¸c˜ao de NGC 2392.

---

## Página 126

114 Transporte de Energia em Astrof´ısica
A partir da figura 4.11 podemos estimar o fluxo no cont´ınuo na regi˜ao
−12 −2 −1 ˚−1
da linha, que ´e aproximadamente Fc ≃ 10 (10 erg cm s A ). A
−12 −2 −1
´area S dentro da linha pode ser estimada por S ≃ 100 (10 erg cm s ).
Aplicando a rela¸c˜ao (4.38) obtemos Wλ ≃ S/Fc ≃ 100/10 ≃ 10 ˚A. A ´area
S ´e uma medida da energia absorvida pelos ´atomos do H interestelar, mais
exatamente do fluxo da radia¸c˜ao da estrela removido do feixe que atravessa a
nuvem interestelar.
−10 −2 −1
O valor estimado, S ≃ 10 erg cm s pode ser comparado com o
4 −5 4
fluxo total na superf´ıcie da estrela, F ≃ σ T ≃ (5.67 × 10 ) (70000) ≃
ef
15 −2 −1
1.36 × 10 erg cm s . Pode tamb´em ser comparado com o fluxo total
que efetivamente seria observado se n˜ao houvesse extin¸c˜ao interestelar, dado
2
por F(d) ≃ F(R) (R/d) , onde R ´e o raio da estrela e d sua distˆancia at´e n´os.
3
Adotando uma luminosidade t´ıpica para a estrela central L ≃ 10 L⊙, temos
√
2 10
que L = 4 π R F(R), ou seja, R ≃ L/[4 π F(R)] ≃ 1.5 × 10 cm. Tomando
15 10
uma distˆancia d ≃ 1.0 kpc, temos F(d) ≃ (1.36 × 10 ) (1.5 × 10 /3.08 ×
21 2 −8 −2 −1
10 ) ≃ 3.2 × 10 erg cm s . Portanto, o fluxo correspondente `a linha
Lyman do hidrogˆenio ´e cerca de 320 vezes menor que o fluxo total observado
na distˆancia d.
EXEMPLO 4.10 - Densidade de coluna na dire¸c˜ao de NGC 2371
A figura 4.12 mostra a varia¸c˜ao da temperatura de brilho Tb com a velocidade
relativa ao Local Standard of Rest, ou Padr˜ao Local de Repouso (LSR) na
dire¸c˜ao da nebulosa planet´aria NGC 2371, obtida a partir da linha de 21 cm
do H em emiss˜ao. A partir destes dados vamos estimar a densidade de coluna
de H na dire¸c˜ao deste objeto.
Vamos incialmente admitir uma ´unica nuvem interestelar na dire¸c˜ao con-
siderada e obter um ajuste gaussiano. Neste caso temos
2
A 2 (v−vc)
−
√ w2
Tb = e (4.43)
w π/2
com o resultado A = 231.83, w = 17.41 vc = 2.73. A densidade de coluna
do H ´e
∫
8 20 −2
NH ≃ 1.8 × 10 Tb dv ≃ 4.17 × 10 cm (4.44)

---

## Página 127

Forma¸c˜ao de linhas espectrais 115
Figura 4.12 - Varia¸c˜ao da temperatura de brilho na dire¸c˜ao de NGC 2371.
Vamos agora considerar um modelo mais preciso, admitindo que existem qua-
tro nuvens interestelares nesta dire¸c˜ao, o que parece mais razo´avel em vista do
perfil mostrado na figura. Obtemos ent˜ao os resultados mostrados na tabela
20 −2
4.3, de modo que a densidade total ´e NH ≃ 4.38 × 10 cm .
−2
A w vc NH (cm )
20
1 194.54 13.49 4.08 3.50 × 10
19
2 26.27 6.98 -9.88 4.73 × 10
18
3 3.91 2.59 -16.19 7.03 × 10
19
4 20.20 11.30 -22.21 3.33 × 10
20
total: 4.38 × 10
Tabela 4.3 - Densidade de coluna de H na dire¸c˜ao de NGC 2371.
4.5 CURVA DE CRESCIMENTO
´
4.5.1 A CURVA DE CRESCIMENTO TEORICA
A rela¸c˜ao entre Wλ (ou Wλ/λjk) e o n´umero efetivo de ´atomos absorve-
dores Njfjk ´e a chamada curva de crescimento, que tem grande utilidade na
determina¸c˜ao de abundˆancias qu´ımicas. O parˆametro fjk ´e novamente a for¸ca

---

## Página 128

116 Transporte de Energia em Astrof´ısica
de oscilador da transi¸c˜ao (ver equa¸c˜ao 4.4). A express˜ao geral desta curva
depende da solu¸c˜ao da equa¸c˜ao de transporte na linha espectral. Entretanto,
uma express˜ao simples pode ser obtida no caso de linhas fracas, onde a pro-
fundidade ´optica ´e τν ≪ 1 em toda a linha, tanto no caro¸co quanto nas asas
da linha. Neste caso, de (4.42)
∫ ∫
Wλ λjk λjk
−τν
= (1 − e ) dν ≃ τν dν (4.45)
λjk c c
usando (4.8)
Wλ λjk
≃ Nj σ (τν ≪ 1) (4.46)
λjk c
desprezando novamente as emiss˜oes induzidas, e usando (4.4), temos
2
Wλ πe
≃ Nj fjk λjk (4.47)
2
λjk mec
Figura 4.13 - Curva de crescimento esquem´atica.
v´alida, portanto, para linhas fracas, com τν ≪ 1. Isto significa que Wλ/λjk ´e
proporcional a Njfjk, correspondendo `a parte linear da curva de crescimento,
como pode ser visto na curva esquem´atica da figura 4.13.

---

## Página 129

Forma¸c˜ao de linhas espectrais 117
No caso mais geral, a integral (4.42) envolvendo τν ´e mais complexa, e depende
do perfil φ(∆ν) admitido. Vamos considerar o caso do perfil Doppler (4.18),
e linhas moderadamente fortes, em que o n´umero de part´ıculas absorvedoras
na linha de visada ´e suficientemente grande para que a profundidade ´optica
<
central τ0 ≫ 1, mas τν 1 nas asas da linha. Podemos mostrar ent˜ao que
∼
[ ( )]
2 1/2
Wλ 2 b πe
≃ ln √ N f λ (4.48)
j jk jk
λjk c mec b π
<
v´alida para linhas moderadamente fortes, com τ0 ≫ 1, τν 1 e perfil Doppler
∼
(ver Maciel 2002 para uma discuss˜ao mais completa). Vemos que Wλ/λjk
cresce muito lentamente com Nj fjk, pois toda a energia dispon´ıvel nas regi˜oes
centrais da linha j´a foi absorvida, e o aumento do n´umero de ´atomos ab-
sorvedores n˜ao produz efeito consider´avel. Diz-se que a linha est´a saturada, e
(4.48) corresponde `a parte de satura¸c˜ao, ou plana da curva de crescimento (ver
figura 4.13). Note-se que, nesta regi˜ao, Wλ/λjk ´e proporcional ao parˆametro
b, definido em (4.14).
Finalmente, para linhas muito fortes, τ0 ≫ 1 e τν ≫ 1 tamb´em para as
asas radiativas da linha, e τν ∼ 1 longe do comprimento de onda central λjk.
Neste caso obtemos
( )
1/2
Wλ λjk Nj σ Γk
= (4.49)
λjk c π
que ´e uma express˜ao v´alida para linhas muito fortes, em que τν ≫ 1, onde
Γk ´e novmente o coeficiente de dissipa¸c˜ao quˆantico (ver eq. 4.21). A rela¸c˜ao
(4.49) corresponde `a parte raiz quadrada da curva de crescimento (figura 4.13).
EXEMPLO 4.11 - Densidade de coluna de H e a linha Lyman-α interestelar
Vimos no Exemplo 4.9 uma estimativa da largura equivalente da linha Lyman-
α interestelar, resultando Wλ ≃ 10 ˚A. Podemos usar este resultado para es-
timar a densidade de coluna do H interestelar, usando a rela¸c˜ao (4.49), uma
vez que a linha ´e saturada, ocupando a regi˜ao de raiz quadrada da curva de
crescimento. Considerando um ´atomo com apenas dois n´ıveis, onde Γk = Akj,
e usando as rela¸c˜oes (4.49), (4.4), assim como a rela¸c˜ao entre o coeficiente de
emiss˜ao de Einstein Akj e a for¸ca de oscilador (Exerc´ıcio 4.1), obtemos o
resultado

---

## Página 130

118 Transporte de Energia em Astrof´ısica
( )
2 1/2
2πe gj
Wλ = fjk λjk 2 Nj (4.50)
2
mec gk
onde gj e gk s˜ao os pesos estat´ısticos dos n´ıveis j e k, respectivamente. Apli-
cando esta rela¸c˜ao para a linha Lyman-α, e lembrando que o estado excitado
2 2
com n = 2 corresponde a um dubleto com n´ıveis 2 P e 2 P , temos gj = 2,
1/2 3/2
gk = 6, e gj/gk = 1/3. Usando ainda fjk = 0.4162 e λjk = 1215.67 ˚A, temos
√
−10
Wλ = 7.3 × 10 Nj (4.51)
18 2
Nj = 1.9 × 10 W (4.52)
λ
onde a largura equivalente Wλ est´a em ˚A e a densidade de coluna Nj ≃
−2
N(HI) est´a em cm . Com Wλ = 10 ˚A, obtemos ent˜ao N(HI) ≃ 1.9 ×
20 −2
10 cm . Admitindo que a distˆancia da nebulosa ´e d ≃ 1.0 kpc e que o g´as
est´a uniformemente distribu´ıdo, obtemos uma densidade volum´etrica m´edia
−3
N(HI)/d ≃ 0.1 cm . Considerando uma nuvem “t´ıpica” com dimens˜oes de
−3
10 pc, a densidade resultante ´e de 6 cm .
´
4.5.2 VELOCIDADE TERMICA E TURBULENTA
Al´em das velocidades macrosc´opicas, inclu´ıdas no perfil Doppler, pode
haver no meio interestelar e nas estrelas uma componente de (micro)turbu-
lˆencia, que tende a complicar o perfil de uma linha de absor¸c˜ao. Se a tur-
1/2
bulˆencia for representada por uma velocidade m´edia (rms), 〈vt〉 , e a veloci-
dade tiver uma distribui¸c˜ao maxwelliana, o perfil Doppler t´ermico-turbulento
ser´a ainda o perfil dado por (4.18), mas a largura Doppler ´e agora
[ ]
1/2
νjk 2 k T
2
∆νD = + 〈v 〉 (4.53)
t
c m
Portanto, quanto mais alta a velocidade de turbulˆencia, maior ser´a a largura
Doppler da linha, ou seja, a diferen¸ca em rela¸c˜ao `a frequˆencia central νjk,
para que a intensidade seja diminu´ıda por um fator e. Neste caso, ´e necess´aria
uma densidade de coluna de ´atomos absorvedores maior para que a linha seja
saturada.

---

## Página 131

Forma¸c˜ao de linhas espectrais 119
EXEMPLO 4.12 - Microturbulˆencia na linha λ = 1206 ˚A do Si III
Vamos considerar a linha do Si III com λ = 1206 ˚A em uma nuvem interestelar
com T = 80 K, e estimar o valor necess´ario da velocidade de turbulˆencia para
que a largura Doppler aumente por um fator dois. De (4.14) e (4.17) a largura
Doppler ´e dada por
( )
1/2
1 2 k T
∆νD = (4.54)
λ m
−5
incluindo a turbulˆencia, a rela¸c˜ao ´e (4.53). Com λ = 1206 ˚A = 1.206×10 cm,
′
T = 80 K m = 28 mH e (∆νD) = 2 ∆νD, temos
( ) ( )
1/2 1/2
1 2 k T 2 2 k T
2
+ v =
t
λ m λ m
de onde obtemos
√
6 k T
4
vt = = 3.8 × 10 cm/s = 0.38 km/s
m
9 ′ 9
com ∆νD = 1.8 × 10 Hz, (∆νD) = 3.6 × 10 Hz.
(c) A curva de crescimento emp´ırica
A curva de crescimento te´orica discutida acima admite um perfil Doppler,
que n˜ao ´e necessariamente real´ıstico. Na pr´atica, usa-se o m´etodo da curva de
crescimento emp´ırica, agrupando ´atomos que provavelmente tenham a mesma
distribui¸c˜ao de velocidades e calculando-se uma curva (ou trechos de uma
curva) de crescimento para esses ´atomos. Por exemplo, em regi˜oes H I, os
´ıons no est´agio de ioniza¸c˜ao dominante devem ser N I, O I, Mg II, Si II, Al I,
Ar I, S II, Fe II, C II e Na II; os ´ıons em est´agios de ioniza¸c˜ao n˜ao dominantes
s˜ao Mg I, Si I, C I, Na I, S I, K I e Fe I. Estes dois grupos devem em princ´ıpio
definir duas curvas de crescimento, se suas abundˆancias relativas forem iguais
nas nuvens.

---

## Página 132

120 Transporte de Energia em Astrof´ısica
Figura 4.14 - Curva de crescimento emp´ırica.
Para cada grupo fazemos o gr´afico dos valores observados da largura
equivalente, log(Wλ/λjk) em fun¸c˜ao de log(fjkλjk) para as linhas dispon´ıveis.
Para cada ´ıon obtemos um trecho da curva de crescimento, e Nj pode ser
determinada deslocando-se as diferentes se¸c˜oes da curva ao longo do eixo
das abscissas, at´e obter um acordo entre os diferentes ´ıons. Obtida a curva,
podemos ajustar, por exemplo, um perfil te´orico e determinar a temperatura
das nuvens. Este m´etodo foi aplicado inicialmente ao meio interestelar por
Str¨omgren em 1948. Mais recentemente, tem sido aplicado `as observa¸c˜oes no
ultravioleta feitas por sat´elites.
A figura 4.14 mostra uma curva de crescimento emp´ırica para a linha
de visada de ζ Oph. Nesta figura, os c´ırculos cheios representam ´atomos no
est´agio de ioniza¸c˜ao dominante e as cruzes s˜ao os ´atomos neutros desses ´ıons.
A linha s´olida ´e uma curva te´orica caracterizada por uma distribui¸c˜ao de
velocidades maxwelliana, com b = 6.5 km/s (ver a equa¸c˜ao 4.14).
4.6 LINHAS ESPECTRAIS EM ATMOSFERAS ESTELARES
No cap´ıtulo 3 consideramos o caso de uma atmosfera estelar cinza, em
que o coeficiente de absor¸c˜ao n˜ao depende da frequˆencia. No caso mais geral,
de uma atmosfera n˜ao-cinza, obtemos equa¸c˜oes como (3.25), mas neste caso
o fluxo monocrom´atico Fν n˜ao pode ser considerado constante, havendo uma
redistribui¸c˜ao entre as diferentes frequˆencias.

---

## Página 133

Forma¸c˜ao de linhas espectrais 121
Vamos considerar aqui alguns aspectos mais simples do caso n˜ao-cinza para
ilustrar a forma¸c˜ao das linhas espectrais. Da equa¸c˜ao (3.7), temos que (ver
Choudhuri 2010, cap. 2)
dBν
Iν(0, 1) ≃ Bν(τν = 0) + (4.55)
dτν
expandindo a fun¸c˜ao de Planck Bν(τν = 1) em s´erie de Taylor em torno de
τν = 0 e desprezando os termos de ordem superior a um, temos
dBν
Bν(τν = 1) ≃ Bν(τν = 0) + (4.56)
dτν
Iν(0, 1) ≃ Bν(τν = 1) (4.57)
Figura 4.15 - Forma¸c˜ao de uma linha espectral em uma atmosfera estelar.
isto ´e, a intensidade espec´ıfica emergente de uma atmosfera estelar na frequˆen-
cia ν ´e aproximadamente igual `a fun¸c˜ao de Planck calculada em uma profun-
−1
didade ´optica unit´aria. Seja kc o coeficiente de absor¸c˜ao (cm ) nas camadas
externas de uma atmosfera estelar, admitido constante em todo o espectro
cont´ınuo, exceto em uma pequena regi˜ao em torno da frequˆencia ν, onde o co-
eficiente de absor¸c˜ao ´e kL (figura 4.15a). Da defini¸c˜ao da profundidade ´optica
(ver por exemplo a equa¸c˜ao 3.4), temos que τ ≃ k x, onde x ´e essencialmente
a profundidade da atmosfera.

---

## Página 134

122 Transporte de Energia em Astrof´ısica
Para k = kc a profundidade ´optica ´e unit´aria em xc ≃ 1/kc, enquanto que na
linha espectral isto ocorre para xL ≃ 1/kL, tal que xL ≪ xc, pois kL ≫ kc.
Em uma atmosfera estelar, a temperatura aumenta com a profundidade.
Assim, a emiss˜ao de corpo negro na regi˜ao com profundidade xc e temperatura
Tc ´e mais intensa que na regi˜ao com profundidade xL, onde a temperatura ´e
TL, tal que Tc ≫ TL (figura 4.15b). Como Iν ≃ Bν(τν = 1), ´e f´acil ver que
o espectro emergente ter´a uma redu¸c˜ao na regi˜ao em torno de ν0, formando
portanto uma linha espectral.
´
EXERCICIOS
4.1 Prove as rela¸c˜oes abaixo entre os coeficientes de Einstein e a for¸ca de
oscilador. Sugest˜ao: Use as rela¸c˜oes (4.3), (4.4) e (3.44–3.46).
2
πe
Bjk = fjk
mehνjk
2
πe gj
Bkj = fjk
mehνjk gk
2 2 2
8π e ν g
jk j
Akj = fjk
3
mec gk
4.2 A linha Hα do hidrogˆenio (λ = 6563 ˚A) ´e uma das linhas espectrais mais
brilhantes em muitas estrelas e nebulosas. Mostre que esta linha corre-
sponde `a transi¸c˜ao entre os n´ıveis caracterizados pelos n´umeros quˆanticos
principais n = 2 e n = 3.
4.3 Mostre que o perfil Doppler (4.18) ´e normalizado.
4.4 Mostre que o perfil de Lorentz (4.21) ´e normalizado, e que a FWHM
neste caso ´e ∆νh = Γk/2 π.
4.5 As linhas D1 (λ = 5896 ˚A) e D2 (λ = 5890 ˚A) do Na I s˜ao formadas a
partir do estado fundamental, e a for¸ca de oscilador de D2 ´e o dobro da
for¸ca de oscilador de D1. Determine a raz˜ao das larguras equivalentes
dessas linhas, WD2/WD1 nos seguintes casos: (a) linhas fracas, na parte
linear da curva de crescimento; (b) linhas moderadamente fortes, na parte
de satura¸c˜ao da curva de crescimento.

---

## Página 135

Forma¸c˜ao de linhas espectrais 123
REFERˆENCIAS BIBLIOGR ´AFICAS
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
COX, A. N., 2000, Allen’s Astrophysical Quantities, AIP
LANG, K. R. 1978, Astrophysical Formulae, Springer
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
RYBICKI, G. B., LIGHTMAN, A. P. 1979, Radiative Processes in Astro-
physics, Wiley
SWIHART, T. L. 1968, Astrophysics and Stellar Astronomy, Wiley
ZEILIK, M., GREGORY, S. A. 1998, Introductory Astronomy and Astro-
physics, Brooks Cole

---

## Página 136

> Página sem texto extraível; consulte o PDF original.

---

## Página 137

## 5
## VENTOS ESTELARES
5.1 INTRODUC¸ ˜AO
A perda de massa ´e um fenˆomeno comum `as estrelas, podendo ocorrer
de forma catastr´ofica, como em uma explos˜ao de supernova, em que a maior
parte da massa da estrela ´e perdida, ou de forma mais discreta e cont´ınua,
como ocorre no Sol. Em ambos os casos, h´a um transporte de energia e
de quantidade de movimento da estrela para o meio interestelar, al´em das
modifica¸c˜oes na composi¸c˜ao qu´ımica do meio causadas pela mistura com os
elementos pesados formados nas estrelas. Neste cap´ıtulo vamos considerar
os processos de perda de massa que ocorrem de forma cont´ınua, os quais
constituem os ventos estelares. Esses processos podem ser observados em
estrelas quentes e luminosas, como as supergigantes azuis, em estrelas de tipo
solar e em gigantes e supergigantes frias. Algumas referˆencias para o estudo
dos ventos estelares incluem Lamers e Cassinelli (1991), Mihalas (1978) e,
especialmente Maciel (2005), no qual este cap´ıtulo foi baseado.
Entre os mais espetaculares exemplos de ventos estelares est˜ao os ventos
de estrelas jovens e quentes, frequentemente associadas com as regi˜oes de
forma¸c˜ao estelar. Por exemplo, a nebulosa Rosette, ou NGC 2237, ´e uma
nebulosa de emiss˜ao brilhante claramente associada a um aglomerado aberto
de estrelas, NGC 2244 (figura 5.1a).

---

## Página 138

126 Transporte de Energia em Astrof´ısica
Figura 5.1 - (a) A nebulosa Rosette (NGC 2237) com evidˆencias de um vento intenso
causado pelas estrelas do aglomerado. (b) A nebulosa RCW 79 em Centaurus, com
uma bolha de g´as e poeira produzida pelos ventos estelares.
As estrelas deste aglomerado s˜ao quentes, brilhantes e jovens, com idades da
ordem de 4 milh˜oes de anos, ou seja, muito mais jovens que o Sol, cuja idade
´e da ordem de 4.5 bilh˜oes de anos. O brilho observado da nebulosa deve-se
`a fotoioniza¸c˜ao causada pelos f´otons ultravioletas emitidos pelas estrelas do
aglomerado. Essas estrelas apresentam um vento muito intenso, como pode
ser visto pelo “buraco” formado na regi˜ao central da nebulosa. Um outro
exemplo de uma bolha de g´as e poeira formada pelo vento e pela radia¸c˜ao
de estrelas jovens e quentes ´e a nebulosa RCW 79, na constela¸c˜ao Centaurus
(figura 5.1b). Nesta imagem do Spitzer Space Telescope, a cor vermelha ´e
devida `a emiss˜ao infravermelha dos gr˜aos de poeira imersos na nebulosa. Note
a presen¸ca de estrelas jovens (pontos amarelados na imagem) cuja forma¸c˜ao
foi acelerada pela expans˜ao do g´as em dire¸c˜ao ao espa¸co interestelar.
As principais evidˆencias observacionais quantitativas dos ventos estelares
s˜ao de natureza espectrosc´opica. Em particular, observa-se em algumas linhas
espectrais a presen¸ca de perfis do tipo P Cygni, como pode ser visto na figura
5.2, obtida a partir de observa¸c˜oes na linha 10 830 ˚A do He I. Em geral, esses
perfis apresentam uma componente em emiss˜ao, deslocada para comprimen-
tos de onda maiores com rela¸c˜ao ao centro da linha λ0, e uma componente
em absor¸c˜ao, deslocada para comprimentos de onda menores. Os perfis s˜ao
interpretados como tendo se originado em um envelope em expans˜ao, onde a
absor¸c˜ao ´e produzida na regi˜ao A e a emiss˜ao na regi˜ao B, de acordo com a
figura 5.3.

---

## Página 139

## Ventos Estelares 127
Figura 5.2 - Perfil da linha do He I em 10830˚A na estrela P Cyg. O fluxo da estrela
est´a em unidades arbitr´arias.
Figura 5.3 - Modelo para a interpreta¸c˜ao dos perfis P Cygni. A absor¸c˜ao ´e produzida
na regi˜ao A, enquanto que a emiss˜ao prov´em da regi˜ao B.

---

## Página 140

128 Transporte de Energia em Astrof´ısica
Este tipo de perfil foi observado na estrela P Cygni, uma vari´avel lumi-
nosa azul (LBV, de Luminous Blue Variable), que pulsa de maneira irregular
ejetando parte de seu envelope para o meio interestelar (figura 5.4). Essas
estrelas s˜ao raras, embora sua luminosidade seja muito alta, alcan¸cando mag-
nitude absoluta visual Mv ≃ −10 no caso de P Cygni.
Figura 5.4 - A estrela LBV P Cygni e seu envelope externo.
Os perfis P Cyg tˆem grande importˆancia na identifica¸c˜ao dos ventos es-
telares, em particular aplicados `as linhas ultravioletas ressonantes em estrelas
quentes (O, B, Wolf-Rayet, estrelas centrais de nebulosas planet´arias). Es-
sas linhas s˜ao geralmente produzidas por espalhamento ressonante, em que a
absor¸c˜ao de um f´oton da fotosfera por um ´atomo no envelope produz uma foto-
excita¸c˜ao logo seguida por uma desexcita¸c˜ao, com a reemiss˜ao do f´oton prati-
camente na mesma freq¨uˆencia do f´oton original, desviado pelo efeito Doppler.
Muitos exemplos de linhas com perfis P Cyg s˜ao observados, particu-
larmente no espectro ultravioleta de estrelas quentes, como as linhas em
λ = 1334.532 ˚A e 1335.708 ˚A do CII ou as linhas em λ = 1238.821 ˚A e
1242.804 ˚A do NV. Dependendo da densidade de coluna do vento na regi˜ao A
(figura 5.3), ser´a produzida uma componente em absor¸c˜ao deslocada para o
azul por at´e cerca de 3 000 km/s pelo efeito Doppler. Para densidades coluna-
15 −2
res altas, N ≥ 10 cm , o perfil P Cyg apresenta a componente em emiss˜ao
deslocada para o vermelho. Em princ´ıpio, a velocidade final do escoamento,

---

## Página 141

Ventos Estelares 129
a lei de velocidade e, eventualmente, a taxa de perda de massa podem ser
determinadas a partir de observa¸c˜oes em alta resolu¸c˜ao de diferentes ´ıons.
Al´em dos (i) perfis P Cygni, outras evidˆencias observacionais para o es-
tudo dos ventos estelares incluem (ii) a linha Hα em emiss˜ao em estrelas
˙ −7
quentes (O, B, Wolf-Rayet), com taxas de perda de massa M ≥ 10 M⊙/ano;
(iii) excesso infravermelho e r´adio, no caso de estrelas quentes com ventos io-
nizados com excesso de radia¸c˜ao infravermelha e r´adio, causado pela emiss˜ao
livre-livre do vento (Bremsstrahlung); (iv) emiss˜ao molecular em estrelas frias,
com ventos lentos, com velocidades vf ≃ 10 km/s, e intensos, com taxas de
˙ −6
perda de massa M ∼ 10 M⊙/ano, com transi¸c˜oes rotacionais de mol´eculas
como CO; (v) emiss˜ao infravermelha e milim´etrica por gr˜aos em gigantes frias,
devida aos gr˜aos imersos no envelope em expans˜ao.
O estudo dos ventos estelares compreende basicamente quatro etapas: (i)
an´alise das observa¸c˜oes e m´etodos utilizados para determinar as propriedades
dos ventos, (ii) estudo dos mecanismos respons´aveis pela eje¸c˜ao de mat´eria,
(iii) estudo dos efeitos dos ventos sobre as regi˜oes vizinhas do meio inte-
restelar e (iv) estudo dos efeitos dos ventos sobre a evolu¸c˜ao das estrelas.
Neste cap´ıtulo vamos considerar basicamente algumas determina¸c˜oes simples
da taxa de perda de massa e o papel dos ventos no transporte de energia.
5.2 A TAXA DE PERDA DE MASSA
De modo geral, as evidˆencias observacionais dos ventos estelares s˜ao uti-
˙
lizadas para a determina¸c˜ao da taxa de perda de massa dM/dt = M (M⊙/ano)
e da velocidade terminal do vento v = vf = v∞ (km/s). As estrelas de baixa
massa (M < 10 M⊙) tˆem taxas muito baixas enquanto na seq¨uˆencia principal,
˙ −10
ou M ≤ 10 M⊙/ano. Nas fases finais de sua evolu¸c˜ao, j´a no ramo das gi-
−6
gantes, essas taxas podem chegar a cerca de 10 M⊙/ano ou ainda maiores,
como no supervento que d´a origem `as nebulosas planet´arias. Portanto, nas
etapas finais, a evolu¸c˜ao da estrela ´e significativamente afetada pela perda
de massa. As velocidades de eje¸c˜ao nessas estrelas s˜ao tipicamente da or-
dem de alguns km/s a dezenas de km/s. Quanto `as estrelas muito massivas
(M > 20M⊙), j´a na sequˆencia principal a taxa observada ´e significativa, po-
−5
dendo atingir cerca de 10 M⊙/ano, afetando portanto sua evolu¸c˜ao. Nesse
caso, as velocidades finais s˜ao muito mais altas, da ordem de alguns milhares
de km/s.

---

## Página 142

130 Transporte de Energia em Astrof´ısica
Figura 5.5 - Casca esf´erica a uma distˆancia r do centro da estrela.
Vamos considerar uma estrela esf´erica com perda de massa cont´ınua, de
modo que a mat´eria atravessa uma casca esf´erica de espessura dr, massa dM,
situada na posi¸c˜ao r, onde a densidade do g´as ´e ρ e a velocidade ´e v = dr/dt
(figura 5.5). Podemos escrever
2
dM = 4 π r ρ dr (5.1)
˙
Seja dM/dt = M a taxa de perda de massa, medida em g/s ou em M⊙/ano
33
(M⊙ = 1.99 × 10 g). Pela conserva¸c˜ao da massa, a equa¸c˜ao (5.1) pode ser
escrita
dM dr
˙ 2 2
= M = 4 π r ρ = 4 π r ρ v (5.2)
dt dt
3
Geralmente usamos r em cm e ρ em g/cm . Considerando que 1 ano =
7 25
3.16 × 10 s, vemos que 1 M⊙/ano = 6.30 × 10 g/s, podendo escrever as
rela¸c˜oes

dM dM
 −26
 (M⊙/ano) ≃ 1.6 × 10 (g/s)

 dt dt


dM
−25 2
(M /ano) ≃ 2.0 × 10 r ρ v (v em cm/s) (5.3)
⊙
 dt



 dM
 −20 2
(M⊙/ano) ≃ 2.0 × 10 r ρ v (v em km/s).
dt

---

## Página 143

Ventos Estelares 131
EXEMPLO 5.1 - O vento solar
O Sol perde massa para o meio interplanet´ario, o que pode ser observado pelo
“vento solar”, um fluxo de part´ıculas carregadas que atinge a ´orbita da Terra
e al´em dela (cf. Brandt 1970, Carroll e Ostlie 2014, cap. 11, Choudhuri 2010,
cap. 4). Podemos usar a express˜ao (5.3) e estimar a taxa de perda de massa
do Sol e, possivelmente, de outras estrelas an˜as. A densidade observada de
13 −3
pr´otons a uma distˆancia de 1 UA = 1.5 × 10 cm do Sol ´e np ∼ 10 cm ,
com velocidades v ∼ 400 km/s. O fluxo de massa ´e j ∼ ρ v ∼ np mH v ∼
−16 −2 −1
6.7×10 g cm s . De (5.3), a taxa de perda de massa do Sol ´e dada por
−14
dM/dt ∼ 3.0 × 10 M⊙/ano. Sabemos que o Sol e outras estrelas tˆem uma
cromosfera e uma coroa extensa, aquecidas por processos n˜ao t´ermicos. A
coroa atinge temperaturas da ordem de um milh˜ao de graus, muito superior
`a temperatura m´edia do meio interplanet´ario, e sua evapora¸c˜ao constitui o
vento solar (figura 5.6).
Figura 5.6 - A coroa solar no eclipse de novembro de 1994 em Chapec´o, SC.
EXEMPLO 5.2 - Perda de massa em gigantes vermelhas
Estrelas gigantes vermelhas s˜ao frias e luminosas, e apresentam evidˆencias de
ventos lentos, com velocidades tipicamente da ordem de v ∼ 10 km/s. As
dimens˜oes dos envelopes dessas estrelas s˜ao da ordem do sistema solar, ou
14
r ∼ 10 cm, e as densidades num´ericas das part´ıculas do g´as s˜ao da ordem
8 −3
de n ∼ 3 × 10 cm , correspondendo a uma densidade de massa ρ ∼ n mH ∼
−16 3
5 × 10 g/cm . Com esses valores, obtemos de (5.3) a taxa de perda de
−6
massa dM/dt ∼ 10 M⊙/ano, caracter´ıstica de uma estrela gigante vermelha.

---

## Página 144

132 Transporte de Energia em Astrof´ısica
Diversos processos f´ısicos tˆem sido considerados como respons´aveis pela eje¸c˜ao
de mat´eria, envolvendo principalmente a press˜ao da radia¸c˜ao estelar em gr˜aos
e mol´eculas, pulsa¸c˜ao, e propaga¸c˜ao de ondas nos envelopes estelares.
EXEMPLO 5.3 - Perda de massa em estrelas quentes
Estrelas quentes, como as supergigantes de tipo espectral B, apresentam
ventos r´apidos, com velocidades tipicamente da ordem de v ∼ 2 000 km/s.
5
Essas estrelas tˆem luminosidades da ordem de L ∼ 10 L⊙, onde L⊙ ≃
33
3.85 × 10 erg/s ´e a luminosidade do Sol. Considerando uma temperatura
efetiva t´ıpica Tef ≃ 20 000 K para essas estrelas, admitidas esf´ericas, podemos
estimar seu raio a partir da rela¸c˜ao
2 4
L = 4 π R σ T (5.4)
ef
que corresponde essencialmente `a defini¸c˜ao de temperatura efetiva, onde σ =
−5 −2 −1 −4
5.67 × 10 erg cm s K ´e a constante de Stefan-Boltzmann. Obtemos
12 10
R ≃ 1.8 × 10 cm ≃ 26 R⊙, onde R⊙ ≃ 6.96 × 10 cm ´e o raio do Sol.
Supondo que esses ventos se originam nas vizinhan¸cas da superf´ıcie da estrela
e s˜ao rapidamente acelerados, podemos tomar r ∼ 2 R. Considerando uma
−14 3
densidade m´edia nessa regi˜ao da ordem de ρ ∼ 10 g/cm , obtemos a taxa
−6
de perda de massa dM/dt ∼ 5 × 10 M⊙/ano. Nesses objetos, a press˜ao da
radia¸c˜ao estelar tem certamente um papel fundamental na eje¸c˜ao de mat´eria,
em particular pela absor¸c˜ao da quantidade de movimento dos f´otons do campo
de radia¸c˜ao estelar por ´ıons localizados nas camadas externas da estrela.
EXEMPLO 5.4 - Perda de massa em ECNP
As nebulosas planet´arias tˆem em seu centro uma estrela quente e compacta
(ECNP), remanescente da estrela gigante vermelha progenitora. Vamos con-
siderar como exemplo a nebulosa planet´aria He2-99 (figura 5.7). A taxa de
perda de massa da estrela central desta nebulosa, medida a partir de um estudo
˙ −6
da composi¸c˜ao qu´ımica do vento, ´e M ≃ 4 × 10 M⊙/ano. A velocidade do
vento alcan¸ca 1200 km/s. A estrela tem uma luminosidade log(L/L⊙) ≃ 3.2 e
sua temperatura ´e de 27000 K. Supondo que a velocidade dada seja alcan¸cada
em r ≃ 10 R∗, onde R∗ ´e o raio da estrela, podemos estimar a densidade de
massa do vento nessa regi˜ao. De (5.3) temos

---

## Página 145

Ventos Estelares 133
Figura 5.7 - A nebulosa planet´aria He2-99.
−20 2 2 3
˙
M(M⊙/ano) = 2.0 × 10 r (cm ) ρ(g/cm ) v(km/s) (5.5)
usando as mesmas unidades, podemos obter a densidade ρ(r) por
˙
M
ρ = (5.6)
−20 2
(2.0 × 10 ) r v
˙ −6
Na posi¸c˜ao r = 10 R∗ temos v = 1200 km/s e M = 4 × 10 M⊙/ano. O raio
da estrela R∗ pode ser estimado por (5.4). Com os valores log(L/L⊙) ≃ 3.2
3 36
e Tef = 27000 K obtemos L = 1.58 × 10 L⊙ = 6.10 × 10 erg/s. O raio da
11 12
estrela ´e R∗ = 1.3 × 10 cm = 1.8R⊙ e r ≃ 1.3 × 10 cm, e a densidade
−14 3
calculada por (5.6) ´e ρ ≃ 9.9 × 10 g/cm .
Vamos admitir que o vento seja constitu´ıdo apenas de H e He, com uma
propor¸c˜ao de 10 ´atomos de H para cada ´atomo de He. Neste caso podemos
3
estimar a densidade m´edia de part´ıculas por cm no vento por
ρ
n = (5.7)
μmH
o peso molecular μ pode ser estimado por
nHmH + nHemHe 1 + 4(nHe/nH) 1 + 4 × 0.1
μmH = = mH = mH (5.8)
nH + nHe 1 + (nHe/nH) 1 + 0.1
de modo que μ = 1.27 e

---

## Página 146

134 Transporte de Energia em Astrof´ısica
−14
9.9 × 10
10 −3
n ≃ ≃ 4.6 × 10 cm (5.9)
−24
(1.27) (1.67 × 10 )
Estas rela¸c˜oes s˜ao v´alidas para um vento neutro, o que ´e apropriado para
uma estrela gigante vermelha. Se o vento estiver ionizado, o peso molecular
decresce, e a densidade de part´ıculas ser´a mais alta.
5.3 EQUAC¸ ˜OES DOS VENTOS ESTELARES
Ventos estelares s˜ao essencialmente processos hidrodinˆamicos que ocor-
rem nas regi˜oes externas das estrelas, de modo que, em princ´ıpio, as equa¸c˜oes
hidrodinˆamicas devem ser resolvidas, em geral com a adi¸c˜ao da equa¸c˜ao de
transporte radiativo. Um fluido n˜ao viscoso em movimento, na ausˆencia de
campos magn´eticos, pode ser caracterizado por cinco quantidades, como as
trˆes componentes da velocidade ~v, al´em da press˜ao P e densidade ρ. As cinco
equa¸c˜oes que determinam essas quantidades s˜ao a equa¸c˜ao de continuidade
da massa, a equa¸c˜ao de Euler (trˆes componentes), e uma equa¸c˜ao para a
conserva¸c˜ao da energia no fluido. Esta descri¸c˜ao corresponde ao “modelo
cont´ınuo”, em que as equa¸c˜oes hidrodinˆamicas s˜ao escritas em termos de
vari´aveis macrosc´opicas, como P, ρ e ~v em fun¸c˜ao da posi¸c˜ao ~r. Em um
n´ıvel mais fundamental, o g´as pode tamb´em ser descrito por meio de uma
fun¸c˜ao de distribui¸c˜ao f(~r, ~v, t), cujas varia¸c˜oes s˜ao dadas pela equa¸c˜ao de
Boltzmann, no caso de fluidos neutros, ou pela equa¸c˜ao de Vlasov, no caso de
plasmas (cap´ıtulos 7 e 10).
˜
5.3.1 A EQUAC¸AO DE CONTINUIDADE
A equa¸c˜ao de continuidade pode ser escrita como
∂ρ
~
+ ∇ · (ρ ~v) = 0 (5.10)
∂t
Naturalmente, a equa¸c˜ao de continuidade expressa a conserva¸c˜ao da massa.
Na ausˆencia de fontes ou sumidouros, a quantidade de mat´eria que deixa um
certo volume do fluido ´e igual ao decr´escimo de mat´eria neste mesmo volume.
Em outras palavras, a densidade em um certo elemento de volume varia de
acordo com o escoamento para dentro ou para fora desse elemento. No caso
unidimensional e estacion´ario com simetria esf´erica, temos

---

## Página 147

Ventos Estelares 135
1 d
2
(r ρ v) = 0 (5.11)
2
r dr
esta equa¸c˜ao ´e facilmente integr´avel, de modo que
2
r ρ v = constante (5.12)
que ´e essencialmente a equa¸c˜ao (5.2).
˜
5.3.2 A EQUAC¸AO DO MOVIMENTO
A equa¸c˜ao do movimento, ou equa¸c˜ao de Euler, pode ser escrita em ter-
mos da derivada total (cf. Maciel 2005, cap. 2)
D ∂
~
= + (~v · ∇) (5.13)
Dt ∂t
A descri¸c˜ao do movimento pode ser feita considerando separadamente os dois
~
termos, isto ´e, ∂/∂t em uma posi¸c˜ao fixa e ~v · ∇ em um instante fixo, o que
corresponde `a descri¸c˜ao euleriana. Por outro lado, a descri¸c˜ao do movimento
em termos da derivada total D/Dt corresponde `a descri¸c˜ao lagrangiana. Neste
caso, podemos imaginar que estamos seguindo o movimento de um elemento
do fluido. Naturalmente, a derivada “lagrangiana” D/Dt est´a relacionada
com as derivadas “eulerianas” pela rela¸c˜ao (5.13). A equa¸c˜ao do movimento,
ou Equa¸c˜ao de Euler, pode ser escrita
∂~v 1
~ ~
+ (~v · ∇)~v = − ∇P (5.14)
∂t ρ
Uma aplica¸c˜ao importante da equa¸c˜ao do movimento ocorre quando o
fluido est´a colocado em um campo gravitacional caracterizado pela acelera¸c˜ao
(for¸ca por unidade de massa) ~g. Nesse caso, cada unidade de volume estar´a
sujeita `a for¸ca ρ ~g, que ´e a for¸ca gravitacional atuante por unidade de volume,
de modo que a equa¸c˜ao do movimento fica
∂~v 1
~ ~
+ (~v · ∇)~v = − ∇P + ~g (5.15)
∂t ρ
De modo geral, se o fluido se encontra sob a a¸c˜ao de um campo de for¸cas
~ 3 ~
externas F (dina/cm ), isto ´e, F ´e a for¸ca que atua em um volume unit´ario,
temos

---

## Página 148

136 Transporte de Energia em Astrof´ısica
∂~v 1 1
~ ~ ~
+ (~v · ∇)~v = − ∇P + F (5.16)
∂t ρ ρ
admitindo simetria esf´erica, esta equa¸c˜ao fica
∂v ∂v 1 ∂P 1
+ v = − + F (5.17)
∂t ∂r ρ ∂r ρ
finalmente, no estado estacion´ario, ∂v/∂t = 0, de modo que
dv 1 dP 1
v = − + F (5.18)
dr ρ dr ρ
˜
5.3.3 A EQUAC¸AO DE ENERGIA
A equa¸c˜ao de energia ´e geralmente a mais complexa, a n˜ao ser que alguma
hip´otese simplificadora seja feita. A temperatura do g´as no envelope tem
um papel importante no estudo dos ventos estelares, uma vez que reflete
diretamente os processos de ganho e perda de energia inclu´ıdos na equa¸c˜ao
de energia. O caso mais simples corresponde aos ventos isot´ermicos, em que
a temperatura ´e considerada constante em todo o envelope. Neste caso, a
equa¸c˜ao de energia ´e simplificada, e pode ser escrita simplesmente
T = constante (5.19)
Em um movimento isentr´opico, a entropia s por unidade de massa (com
−1 −1
unidades erg K g ) ´e constante. Isso ocorre em um g´as perfeito deslocando-
se sem trocas de energia entre diferentes regi˜oes do fluido, ou com o g´as cir-
cundante. Nesse caso, o movimento ´e adiab´atico e a entropia de cada regi˜ao do
fluido permanece constante durante o deslocamento espacial daquela regi˜ao.
Podemos escrever ent˜ao
{
γ
P = constante × ρ
(5.20)
γ−1
T = constante × ρ
onde γ ´e a raz˜ao dos calores espec´ıficos e usamos uma equa¸c˜ao de estado dos
gases perfeitos do tipo P ∝ ρ T. No caso mais geral, podemos escrever a
equa¸c˜ao de energia na forma euleriana como
2
∂[ρ(v /2 + e)]
~ 2 ~
+ ∇ · [ ρ ~v(v /2 + e + P/ρ) + ~q ] = ~v · F (5.21)
∂t

---

## Página 149

Ventos Estelares 137
2
∂[ρ(v /2 + e)]
~ 2 ~
+ ∇ · [ ρ ~v(v /2 + e + P/ρ) + ~qc ] = ~v · F + QA + QR (5.22)
∂t
onde e ´e a energia interna por unidade de massa (erg/g), ~q ´e o fluxo de
−2 −1 ~
energia transportada (erg cm s ), tal que ∇ · ~q ´e a energia transportada
por cent´ımetro c´ubico por segundo; QA ´e a taxa de deposi¸c˜ao de energia
−3 −1
ac´ustica ou mecˆanica (unidades: erg cm s ); QR ´e a taxa de deposi¸c˜ao de
−3 −1
energia radiativa (erg cm s ); ~qc ´e o fluxo de energia transportado pela
−2 −1
condu¸c˜ao (unidades erg cm s ). Esta equa¸c˜ao expressa o fato de que a
−3 −1
varia¸c˜ao com o tempo da energia total do g´as (erg cm s ) ´e resultado da
existˆencia de um fluxo de energia atrav´es de um elemento de volume em torno
deste ponto, o qual compreende a energia cin´etica do g´as, a energia interna,
o trabalho das for¸cas de press˜ao, a energia transportada pela condu¸c˜ao etc. e
o trabalho realizado pelas for¸cas externas.
˜ ˜ ˆ
5.3.4 SOLUC¸AO DAS EQUAC¸OES HIDRODINAMICAS
De modo geral, as solu¸c˜oes das equa¸c˜oes hidrodinˆamicas mostram que,
pr´oximo da base do envelope, junto `a superf´ıcie da estrela, a solu¸c˜ao ´e subsˆo-
nica, alcan¸cando velocidades supersˆonicas para maiores distˆancias da estrela.
Um exemplo est´a mostrado na figura 5.8 para o caso isot´ermico. Neste caso,
o ponto sˆonico coincide com o ponto cr´ıtico, em que o gradiente de velocidade
s´o ´e definido para um conjunto bem estabelecido de parˆametros.
Esta figura mostra a topologia das solu¸c˜oes adotando valores diferentes
para a velocidade inicial v0. A curva 1 ´e a solu¸c˜ao cr´ıtica, passando pelo
ponto cr´ıtico desde velocidades subsˆonicas at´e as velocidades supersˆonicas, al-
can¸cando finalmente a velocidade terminal (n˜ao indicada na figura). A curva
2 tamb´em passa pelo ponto cr´ıtico, mas o escoamento ´e iniciado supersonica-
mente. A curva 3 ´e semelhante `a solu¸c˜ao cr´ıtica, mas a velocidade inicial ´e
insuficiente para ultrapassar o ponto sˆonico. Em contraposi¸c˜ao, a curva 4 ´e
inteiramente supersˆonica. As curvas 5 e 6 n˜ao tˆem significado f´ısico, uma vez
que as solu¸c˜oes n˜ao s˜ao un´ıvocas (ver Maciel 2005).

---

## Página 150

138 Transporte de Energia em Astrof´ısica
Figura 5.8 - Solu¸c˜oes para o perfil de velocidade em ventos isot´ermicos. A curva 1 ´e
a ´unica que passa pelo ponto cr´ıtico e alcan¸ca velocidades supersˆonicas.
EXEMPLO 5.5 - A lei beta de velocidades
Uma aproxima¸c˜ao frequentemente usada para a varia¸c˜ao da velocidade do
vento com a distˆancia at´e a estrela ´e a chamada lei beta de velocidades. Nesse
caso, a fun¸c˜ao v(r) ´e dada por
( )
β
R
v(r) = v0 + (vf − v0) 1 − (5.23)
r
onde v0 ´e a velocidade inicial do vento, ainda na fotosfera, vf ´e a velocidade
final (vf ≫ v0), R ´e um n´ıvel de referˆencia, geralmente da ordem do raio
da estrela R∗, e β ´e um parˆametro que caracteriza a acelera¸c˜ao no envelope.
Vemos, ent˜ao, que v → v0 para r → R e que v → vf para r → ∞. Para estrelas
quentes, β ≃ 0.8, enquanto que para estrelas frias temos tipicamente β ≃ 2.
Alguns exemplos de leis de velocidade para diferentes valores do parˆametro
β est˜ao mostrados na figura 5.9, sendo consideravelmente mais real´ısticas do
que a varia¸c˜ao esquem´atica mostrada na figura 5.8.

---

## Página 151

Ventos Estelares 139
Figura 5.9 - Perfil de velocidade no caso de uma lei beta.
A equa¸c˜ao da lei beta pode ser escrita
( )
β
R/R∗
v(r) = v0 + (vf − v0) 1 − (5.24)
r/R∗
A raz˜ao R/R∗ ´e frequentemente pr´oxima da unidade. Por exemplo, com uma
boa aproxima¸c˜ao podemos escrever
[ ( ) 1 ]
β
v0
R ≃ R∗ 1 − (5.25)
vf
Vamos considerar como exemplo uma estrela quente de tipo espectral O, cuja
temperatura efetiva ´e Tef = 40 000 K, com um vento de velocidade terminal de
2 500 km/s. Vamos adotar β ≃ 0.8. Podemos admitir que a velocidade inicial
do vento seja essencialmente igual `a velocidade do som na base do envelope
circunstelar, ou seja
k Tef
2 2
v ≃ c ≃ (5.26)
0 s
μ mH
onde μ ≃ 0.6 ´e o peso molecular m´edio das part´ıculas do g´as. Nesse caso,
√
temos v0 = kTef/μmH ≃ 23.5 km/s. Substituindo na aproxima¸c˜ao acima
temos

---

## Página 152

140 Transporte de Energia em Astrof´ısica
[ ( ) ]
1/β
R v0
≃ 1 − ≃ 0.997 (5.27)
R∗ vf
aplicando a lei beta na forma (5.24), obtemos
( )
0.8
R/R∗
v(r) = 23.5 + (2500 − 23.5) 1 − (5.28)
r/R∗
os resultados est˜ao mostrados na figura 5.10.
Figura 5.10 - A lei beta de velocidades na forma (5.24).
EXEMPLO 5.6 - Equa¸c˜ao de Euler e equa¸c˜ao de equil´ıbrio hidrost´atico
A equa¸c˜ao de Euler (5.15) representa a equa¸c˜ao do movimento no caso dos
fluidos. Esta equa¸c˜ao pode ser reduzida `a forma da equa¸c˜ao de equil´ıbrio
hidrost´atico, que descreve a situa¸c˜ao de equil´ıbrio em uma estrela sob a a¸c˜ao
das for¸cas gravitacionais, que tendem a colapsar a estrela, e as for¸cas de
press˜ao, que agem no sentido contr´ario (cap. 6). Vamos aqui mostrar que
a equa¸c˜ao de Euler se reduz `a equa¸c˜ao de equil´ıbrio hidrost´atico quando a
velocidade ~v ´e nula. De (5.15), temos ent˜ao

---

## Página 153

Ventos Estelares 141
1
~
∇P = ~g (5.29)
ρ
em coordenadas esf´ericas e com simetria esf´erica,
1 dP
= −g (5.30)
ρ dr
que pode ser escrita
dP
= −ρ g (5.31)
dr
Para uma estrela esf´erica, a acelera¸c˜ao gravitacional g(r) na posi¸c˜ao r ´e
G M(r)
g(r) = (5.32)
2
r
onde M(r) ´e a massa interna `a posi¸c˜ao r, de modo que (5.31) pode tamb´em
ser escrita
dP G M(r) ρ(r)
= − (5.33)
2
dr r
As equa¸c˜oes (5.31) e (5.33) s˜ao formas equivalentes da equa¸c˜ao de equil´ıbrio
hidrost´atico.
5.4 VENTOS ESTELARES E TRANSFERˆENCIA DE ENERGIA
Um vento estelar pode ser associado a uma atmosfera gravitacionalmente
ligada, cuja energia potencial por unidade de massa ´e −G M∗/R∗, onde M∗
e R∗ s˜ao a massa e raio da estrela, respectivamente. Para que o vento escape
do po¸co de potencial representado pela estrela, sua energia deve ser positiva
2
a grandes distˆancias de R∗, da ordem de v /2, ou seja, algum processo f´ısico,
f
respons´avel pela varia¸c˜ao de temperatura, deve fornecer a energia e/ou a
quantidade de movimento do vento. Dependendo dos processos de deposi¸c˜ao
de energia ou quantidade de movimento, modifica¸c˜oes profundas podem ent˜ao
ocorrer na estrutura de velocidades e na taxa de perda de massa com rela¸c˜ao
ao modelo isot´ermico.
A energia fornecida ao g´as no vento pode estar na forma de calor ou
de quantidade de movimento, ou ambos. Por exemplo, a dissipa¸c˜ao de ondas
ac´usticas na base da coroa solar corresponde a uma adi¸c˜ao de calor, enquanto
que a a¸c˜ao da press˜ao da radia¸c˜ao em linhas de ´ıons abundantes em estrelas

---

## Página 154

142 Transporte de Energia em Astrof´ısica
quentes produz uma inje¸c˜ao de quantidade de movimento, ou seja, a energia
´e adicionada pelo trabalho realizado pela for¸ca externa. Ambos os processos
devem ser considerados na equa¸c˜ao de energia e/ou na equa¸c˜ao de Euler, mas
suas conseq¨uˆencias sobre a estrutura do vento s˜ao diferentes. Por exemplo,
enquanto que a inje¸c˜ao de quantidade de movimento ao g´as pela radia¸c˜ao cor-
responde a uma for¸ca externa contr´aria `a gravidade, a adi¸c˜ao de calor tende
a aumentar a temperatura do g´as, diminuindo o gradiente de temperatura
e, portanto, o gradiente de press˜ao, resultando que as for¸cas de press˜ao pas-
sam a incluir uma componente no mesmo sentido da gravidade da estrela. Em
princ´ıpio, ambos os processos de deposi¸c˜ao de energia e quantidade de movi-
mento s˜ao necess´arios para obter solu¸c˜oes transˆonicas para as equa¸c˜oes do
vento, isto ´e, subsˆonicas na regi˜ao de acelera¸c˜ao do g´as e supersˆonicas nas
regi˜oes externas do envelope estelar. Al´em disso, parˆametros como a taxa
de perda de massa e a velocidade terminal dependem da localiza¸c˜ao exata da
regi˜ao onde ocorre a deposi¸c˜ao e da maneira como a for¸ca comunicada ao g´as
em expans˜ao varia com a posi¸c˜ao ou com a velocidade.
Assim como acontece no estudo da estrutura estelar, a considera¸c˜ao de
ventos politr´opicos permite a inclus˜ao de gradientes de temperatura, mantendo
uma solu¸c˜ao relativamente simples para as equa¸c˜oes hidrodinˆamicas. Neste
caso, define-se um ´ındice politr´opico Γp tal que d ln P/d lnρ = Γp. O caso
Γp = 1 corresponde a um vento isot´ermico e Γp = 5/3 a um vento adiab´atico.
Valores intermedi´arios de Γp produzem solu¸c˜oes aproximadas dos ventos reais.
Dependendo do valor do ´ındice politr´opico, o g´as no envelope estelar pode ou
n˜ao escapar da estrela. Tamb´em neste caso a taxa de perda de massa pode
ser estimada a partir das condi¸c˜oes na regi˜ao subsˆonica, e a estrutura de
velocidade depende criticamente do ´ındice politr´opico.
A solu¸c˜ao das equa¸c˜oes hidrodinˆamicas ´e particularmente simples ad-
mitindo que a equa¸c˜ao da conserva¸c˜ao da quantidade de movimento cont´em
apenas o termo gravitacional e o termo do gradiente de press˜ao. No caso de
um envelope estelar com simetria esf´erica no estado estacion´ario, de (5.18)
temos
dv 1 dP
v = − − g∗ (5.34)
dr ρ dr
onde g∗ ´e a acelera¸c˜ao gravitacional estelar (cf. eq. 5.32)
G M∗
g∗ = (5.35)
2
r

---

## Página 155

Ventos Estelares 143
Estaremos interessados em problemas onde, al´em da atra¸c˜ao gravitacional
g∗, h´a uma for¸ca externa por unidade de massa na mesma dire¸c˜ao e sentido
inverso ao da for¸ca gravitacional. Essa for¸ca pode ser, por exemplo, devida
`a transferˆencia de quantidade de movimento do campo de radia¸c˜ao estelar
ao g´as em um envelope em expans˜ao. Chamando gr a acelera¸c˜ao (for¸ca por
unidade de massa) causada por esse processo, temos, no caso estacion´ario e
esfericamente sim´etrico
dv 1 dP 1 dP
v = − − g∗ + gr = − − gef (5.36)
dr ρ dr ρ dr
onde introduzimos a gravidade efetiva gef = g∗ − gr. Definindo o parˆametro
Γ pela raz˜ao Γr = gr/g∗ podemos escrever
( )
gr
gef = g∗ 1 − = g∗ (1 − Γr) (5.37)
g∗
e a equa¸c˜ao do movimento (5.36) fica
dv 1 dP
v = − − g∗(1 − Γr) (5.38)
dr ρ dr
EXEMPLO 5.7 - A velocidade de escape
Os ventos em estrelas quentes tˆem velocidades finais, ou terminais, da ordem
de vf ∼ 2 000 km/s, enquanto que os ventos observados em estrelas gigantes
frias s˜ao consideravelmente mais lentos, com vf ∼ 10 km/s. Podemos com-
parar esses valores com a velocidade de escape ve das atmosferas dessas es-
trelas. Considerando uma part´ıcula de massa m e velocidade v `a distˆancia r
do centro de uma estrela de massa M∗ e raio R∗, a velocidade de escape ´e
2
definida pela condi¸c˜ao Ec = |Ep|, onde Ec = (1/2)mv ´e a energia cin´etica
da part´ıcula e |Ep| = GM∗m/r sua energia potencial em r, sendo r ≥ R∗. A
velocidade de escape nesta posi¸c˜ao ´e ent˜ao
√
2 G M∗
ve ≃ (5.39)
r
Para uma estrela supergigante de tipo espectral B, adotando M∗ ≃ 25 M⊙ ≃
34 12
5×10 g e r ≃ R∗ ≃ 30 R⊙ ≃ 2×10 cm, temos que ve ≃ 600 km/s, ou seja,

---

## Página 156

144 Transporte de Energia em Astrof´ısica
as velocidades terminais obtidas das observa¸c˜oes s˜ao superiores `a velocidade
de escape, vf ≫ ve.
Para as estrelas gigantes vermelhas a situa¸c˜ao ´e um pouco mais complexa.
33
Tomando valores t´ıpicos para essas estrelas, M∗ ≃ 1 M⊙ ≃ 2 × 10 g e R∗ ≃
12
100 R⊙ ≃ 7 × 10 cm, obtemos ve ≃ 60 km/s com r ≃ R∗, isto ´e, neste caso
vf < ve. Esta quest˜ao foi resolvida a partir das observa¸c˜oes do sistema α Her
por Armin Deutsch. Nesse sistema, uma gigante vermelha e uma estrela an˜a
giram em torno de seu centro de massa. As linhas espectrais circunstelares
que caracterizam a envolt´oria da gigante vermelha eram tamb´em observadas
na companheira an˜a, isto ´e, ambas estavam envolvidas por um gigantesco
envelope, originado pela estrela gigante. Desta forma, a posi¸c˜ao r na qual se
deve aplicar a condi¸c˜ao Ec = |Ep| ocorre a uma distˆancia muito maior do que
o raio da estrela, r ≫ R∗, de modo que a velocidade de escape do envelope
´e efetivamente menor que o valor dado acima. Por exemplo, incluindo em
(5.41) as massas de ambas as estrelas, admitidas iguais, uma velocidade de
14
escape ve = vf = 10 km/s ´e obtida na posi¸c˜ao r ≃ 5 × 10 cm, ou cerca de
70 raios estelares. As dimens˜oes observadas dos envelopes circunstelares s˜ao,
efetivamente, desta ordem de grandeza, ou mesmo superiores.
EXEMPLO 5.8 - O parˆametro Γ em estrelas quentes
Podemos obter uma estimativa do parˆametro Γ nos envelopes de estrelas
quentes, onde a elevada densidade eletrˆonica torna o espalhamento por el´etrons
uma importante fonte de opacidade. Sabemos que a se¸c˜ao de choque para es-
palhamento por el´etrons no caso n˜ao relativ´ıstico ´e a se¸c˜ao de choque de
−25 2
Thomson, σT = 6.65 × 10 cm (ver se¸c˜ao 3.5.3). Em uma camada de den-
sidade ρ e densidade eletrˆonica ne, o coeficiente de espalhamento por el´etrons
por massa ´e
ne σT
κe ≃ (5.40)
ρ
2
tipicamente da ordem de κe ≃ 0.30 cm /g para um g´as de composi¸c˜ao qu´ımica
normal. Cada f´oton de energia hν absorvido (ou espalhado) transporta uma
quantidade de movimento hν/c, de modo que a raz˜ao entre as acelera¸c˜oes
devidas ao processo de espalhamento e gravitacional ´e simplesmente
2
ge L∗ κe r L∗ κe
Γe = = = (5.41)
2
g∗ 4 π r c G M∗ 4 π c G M∗

---

## Página 157

Ventos Estelares 145
2
onde L∗ ´e a luminosidade da estrela (erg/s), L∗/4πr ´e o fluxo da estrela na
−2 −1 2
posi¸c˜ao r (erg cm s ), de modo que o termo L∗κe/4πr c ´e essencialmente
a acelera¸c˜ao (for¸ca/massa) devida ao processo de espalhamento por el´etrons.
Usando valores apropriados para as estrelas quentes de tipos espectrais O e B,
5 6 < <
L∗ ∼ 10 a 10 L⊙ e M∗ ≃ 10 a 50 M⊙, obtemos 0.1 Γe 2, ou seja, nessas
∼ ∼
estrelas a acelera¸c˜ao devida ao espalhamento por el´etrons pode eventualmente
dominar a acelera¸c˜ao gravitacional. Em termos do parˆametro Γe, podemos
definir uma velocidade de escape efetiva, dada por
[ ]
1/2
2 (1 − Γe) G M∗
ve = (5.42)
r
Com os dados do Exemplo 5.7, M∗ ≃ 25 M⊙ e r ≃ 30 R⊙, tomando L∗ ≃
5 2
4 × 10 L⊙ e κe ≃ 0.30 cm /g, obtemos Γe ≃ 0.37; de (5.42), encontramos
uma velocidade de escape efetiva correspondente a 80% do valor dado pela
equa¸c˜ao (5.39).
EXEMPLO 5.9 - O parˆametro Γ em estrelas frias
Podemos aplicar o mesmo racioc´ınio do Exemplo 5.8 para estimar o parˆametro
Γ no caso de estrelas gigantes frias. Considerando que a contribui¸c˜ao gr `a
gravidade efetiva seja devida `a a¸c˜ao da radia¸c˜ao estelar sobre os gr˜aos de
poeira imersos no envelope, a express˜ao (5.41) ´e ainda v´alida, substituindo o
coeficiente de espalhamento κe pelo equivalente dos gr˜aos s´olidos κd
2
π a Q nd
κd ≃ (5.43)
ρ
−3
onde nd ´e a densidade num´erica de gr˜aos (cm ), admitidos esf´ericos de raio
a, e Q ´e um fator de eficiˆencia para a press˜ao da radia¸c˜ao. Como nd = ρd/md,
3 3
onde ρd ´e a densidade de gr˜aos (g/cm ) e md ≃ (4/3)πa sd ´e a massa de um
gr˜ao com densidade interna sd, podemos usar valores m´edios adequados a
gr˜aos de silicatos e estimar κd ou o parˆametro correspondente, Γd, dado por
L∗ κd
Γd = (5.44)
4 π c G M∗
−5 3
Esses valores s˜ao: a ≃ 1 000 ˚A = 10 cm, sd ≃ 3 g/cm e ρ/ρd ≃ 200 (raz˜ao
−14 11 −1
g´as-poeira). Obtemos md ≃ 1.3 × 10 g, nd/ρ ≃ 1/200 md ≃ 3.9 × 10 g
2
e κd ≃ 120 Q cm /g. O coeficiente κd depende criticamente da frequˆencia do

---

## Página 158

146 Transporte de Energia em Astrof´ısica
f´oton, refletindo a dependˆencia do fator de eficiˆencia Q, que pode alcan¸car
valores desde cerca de 0.001 at´e da ordem da unidade, aproximadamente.
Tomando valores no intervalo 0.01 < Q < 1 e considerando uma estrela com
3
L∗ ≃ 10 L⊙ e M∗ ≃ 1M⊙, de (5.44) obtemos 0.1 < Γd < 9, ou seja, tamb´em
neste caso os valores da gravidade extra podem ser da ordem ou superiores `a
gravidade da estrela.
EXEMPLO 5.10 - Taxa de perda de massa termonuclear do Sol
Podemos comparar a taxa de perda de massa do Sol com o valor correspon-
dente termonuclear, isto ´e, a taxa de perda de massa termonuclear do Sol,
que ´e a taxa necess´aria para que o Sol mantenha a luminosidade observada de
33
L⊙ = 3.85 × 10 erg/s. Considerando que a densidade de pr´otons do vento
−3
solar na altura da ´orbita da Terra ´e de cerca de np ≃ 10 cm e que a veloci-
dade destas par´ıculas ´e tipicamente da ordem de vp ≃ 350 km/s, o fluxo de
part´ıculas do vento solar ´e
5 8 −2 −1
j ≃ np vp ≃ (10) (350 × 10 ) ≃ 3.5 × 10 cm s (5.45)
13
onde consideramos um g´as de H puro e ionizado com r = 1UA = 1.5×10 cm.
A taxa de perda de massa pelo Sol ´e ent˜ao
˙ 2 12 −14
M ≃ 4 π r np mH vp ≃ 1.65 × 10 g/s = 2.6 × 10 M⊙/ano (5.46)
a taxa de perda de massa termonuclear ´e aproximadamente
33
L⊙ 3.85 × 10
˙ 12 −14
MT ≃ ≃ ≃ 4.3 × 10 g/s = 6.8 × 10 M⊙/ano (5.47)
2 10 2
c (3.0 × 10 )
˙ ˙
ou seja, M /MT ≃ 0.38.
EXEMPLO 5.11 - Energias no vento solar
Vamos considerar que o vento solar ´e isot´ermico com uma temperatura coronal
6 −14
m´edia de 1.5 × 10 K e uma taxa de perda de massa de 2 × 10 M⊙/ano.
A base da coroa est´a localizada em r0 ≃ 1.0 R⊙, onde a densidade ´e ρ(r0) ≃
−14 3
1.0 × 10 g/cm . Vamos estimar a energia potencial, a energia cin´etica e a

---

## Página 159

Ventos Estelares 147
entalpia do g´as em r0 e no ponto cr´ıtico rc. A energia potencial em r0 pode
ser estimada por
−8 33
G M −(6.67 × 10 ) (1.99 × 10 )
15
Ep ≃ − = ≃ −1.90 × 10 erg/g (5.48)
10
r0 (1.0) (6.96 × 10 )
e para a entalpia, com μ ≃ 0.6, temos
5 k T
14
h = ≃ 5.16 × 10 erg/g (5.49)
2 μ mH
Para calcular a energia cin´etica Ec usamos (5.2) com o resultado
˙
M
3
v0 = ≃ 2.06 × 10 cm/s (5.50)
2
4 π r ρ0
0
2 6
e a energia cin´etica ´e Ec = (1/2) v = 2.12×10 erg/g. Para um vento estelar
0
isot´ermico, esfericamente sim´etrico e estacion´ario, em que a for¸ca dirigida para
fora da estrela ´e devida essencialmente `a press˜ao do g´as, o raio cr´ıtico pode
ser estimado por (cf. Maciel 2005, cap. 8)
G M G M μ mH
11
rc = = = 3.21 × 10 cm = 4.61 R⊙ (5.51)
2
2 c 2 k T
s
onde a velocidade vc ´e igual a velocidade do som cs
√
k T
7
vc = cs = = 1.44 × 10 cm/s = 144 km/s (5.52)
μ mH
˙ 2
Usando (5.2) a densidade no ponto cr´ıtico ´e ρc = M /(4 π r vc) = 6.75 ×
c
−20 3 14
10 g/cm , de modo que as energias s˜ao Ep = −4.13 × 10 erg/g, Ec =
14 14
1.04 × 10 erg/g, e h = 5.16 × 10 erg/g. Portanto a maior absor¸c˜ao corres-
ponde `a energia cin´etica.
5.5 MECANISMOS RESPONS ´AVEIS PELOS VENTOS
ESTELARES
Muitos mecanismos diferentes tˆem sido propostos para explicar a eje¸c˜ao
de mat´eria em todas as faixas do diagrama HR. Uma discuss˜ao detalhada
pode ser encontrada em Maciel (2005). Vamos a seguir considerar alguns dos
principais modelos e suas aplica¸c˜oes aos diferentes tipos de estrelas.

---

## Página 160

148 Transporte de Energia em Astrof´ısica
5.5.1 VENTOS CORONAIS
Estrelas relativamente frias da seq¨uˆencia principal com tipos espectrais
F5 ou posterior e algumas gigantes tˆem, provavelmente, cromosferas e coroas
semelhantes `a do Sol. Os ventos coronais s˜ao produzidos pela press˜ao do g´as
6
nesta regi˜ao de alta temperatura, que chega a 2×10 K no caso do Sol. Essas
temperaturas podem ser produzidas pela dissipa¸c˜ao de energia mecˆanica ou
pela reconex˜ao de campos magn´eticos na zona de convec¸c˜ao subfotosf´erica
dessas estrelas.
EXEMPLO 5.12 - Coroa solar hidrost´atica
Vamos admitir que o Sol tem uma coroa isot´ermica com uma temperatura
6
T ≃ 1.5 × 10 K. O vento solar ´e iniciado em uma distˆancia de referˆencia
10
r0 ≃ R⊙ = 6.96 × 10 cm com uma densidade de pr´otons e el´etrons n0 ≃
8 −3
4 × 10 cm e a coroa est´a em equil´ıbrio hidrost´atico. Neste caso, a Terra,
13
situada a 1 UA = 1.5×10 cm do Sol, est´a envolvida por um material coronal
de alta temperatura. Podemos ent˜ao estimar a densidade deste g´as na posi¸c˜ao
da Terra. Supondo que o plasma cont´em pr´otons e el´etrons em partes iguais,
podemos escrever a equa¸c˜ao de estado como P = 2 n k T. Da equa¸c˜ao de
equil´ıbrio hidrost´atico (5.33) temos
dP G M⊙ n mH
= − (5.53)
2
dr r
de modo que
dP dn G M⊙ n mH
= 2 k T = − (5.54)
2
dr dr r
de onde obtemos
( )
2
dn G M⊙ mH 1 r0
−2
= − r dr = − dr (5.55)
n 2 k T h r
onde introduzimos a escala de altura h dada por
1 G M⊙ mH
= (5.56)
2
h 2 k T r
0
integrando (5.55) entre r0 e r, onde a densidade de part´ıculas tem valores n0
e n, respectivamente, obtemos

---

## Página 161

Ventos Estelares 149
[ ( )]
2
r 1 1
0
n(r) = n0 exp − − (5.57)
h r0 r
9 4
com os valores de T, n0, e r0 obtemos h ≃ 9.0 × 10 cm = 9.0 × 10 km.
5 −3
Portanto, em r = 1 UA a densidade do g´as coronal ´e n(1UA) ≃ 1.8×10 cm .
Um c´alculo mais sofisticado mostra que o valor desta densidade ´e menor por
um fator da ordem de 4 (ver Exerc´ıcio 5.3).
EXEMPLO 5.13 - Luminosidade condutiva na coroa solar
Em um vento coronal, parte da energia pode ser transportada pela condu¸c˜ao
−2 −1
eletrˆonica. O fluxo condutivo (erg cm s ) ´e Fc = −κc (dT /dr), onde κc
5/2
´e o coeficiente de condutividade t´ermica, dado por κc = κ0 T , onde κ0 ≃
−6 −1 −1 −7/2
1.0 × 10 erg cm s K (ver cap´ıtulo 6). A luminosidade condutiva
Lc (erg/s) ´e a energia total conduzida por segundo atrav´es de uma esfera de
raio r. Vamos obter a varia¸c˜ao da temperatura com a posi¸c˜ao r para que a
luminosidade condutiva seja constante. Esta luminosidade pode ser escrita
5/2 −2 −2/7
Para Lc constante temos T (dT /dr) ∝ r , ou seja T ∝ r . Se T
−2/7
decrescer mais r´apido que r , Lc diminui, e se T decrescer mais lento
−2/7
que r , Lc aumenta. Em um modelo para a coroa solar, a temperatura
decresce com a posi¸c˜ao de acordo com a tabela 5.1. Neste caso podemos
estimar a varia¸c˜ao da luminosidade condutiva com a posi¸c˜ao e a fra¸c˜ao desta
luminosidade transportada pela condu¸c˜ao.
dT dT
2 2 2 5/2
Lc = 4 π r Fc = −4 π r κc = −4 π r κ0 T (5.58)
dr dr
r(R⊙) 1.0 5.0 10.0 20.0 30.0 40.0 50.0
6
T(10 K) 2.0 1.15 0.90 0.75 0.70 0.65 0.60
Tabela 5.1 - Modelo para a varia¸c˜ao da temperatura na coroa solar.

---

## Página 162

150 Transporte de Energia em Astrof´ısica
Figura 5.11 - Luminosidade condutiva na coroa solar.
Interpolando os dados obtemos os resultados mostrados na figura 5.11. Neste
caso, a fra¸c˜ao da luminosidade transportada pela condu¸c˜ao ´e
27
Lc 2.79 × 10
−7
≃ ≃ 7.3 × 10
33
L⊙ 3.85 × 10
5.5.2 VENTOS PRODUZIDOS POR ONDAS SONORAS
Movimentos convectivos na regi˜ao subfotosf´erica das estrelas podem criar
ondas ac´usticas que se propagam ao longo da atmosfera. Essas ondas est˜ao
associadas a uma componente adicional da press˜ao, a “press˜ao de onda” Po ∼
2 2
(1/2) ρ v , onde v ´e a velocidade quadr´atica m´edia das oscila¸c˜oes, e o termo
o 0
correspondente do gradiente de press˜ao pode, em princ´ıpio, gerar uma for¸ca,
resultando em um vento. No caso de uma part´ıcula em movimento em um
campo de for¸ca oscilat´orio, se a amplitude das oscila¸c˜oes decrescer com a
distˆancia, parte da energia cin´etica das oscila¸c˜oes pode ser transferida para o
g´as em expans˜ao, causando a acelera¸c˜ao da part´ıcula.
5.5.3 VENTOS CAUSADOS PELA POEIRA CIRCUNSTELAR
Estrelas gigantes frias podem condensar diversas esp´ecies de gr˜aos em
suas fotosferas e envelopes e a a¸c˜ao da press˜ao da radia¸c˜ao estelar pode pro-
duzir elevadas taxas de perda de massa, pela transferˆencia da quantidade de

---

## Página 163

Ventos Estelares 151
movimento do campo de radia¸c˜ao para os gr˜aos e destes para o g´as. Os gr˜aos
absorvem a radia¸c˜ao em uma faixa ampla de comprimentos de onda, de modo
que os ventos causados pela poeira circunstelar s˜ao basicamente ventos pro-
duzidos pela radia¸c˜ao cont´ınua. Diferem, neste aspecto, dos ventos das estrelas
quentes, impulsionados pela a¸c˜ao da radia¸c˜ao em linhas formadas por espa-
lhamento ressonante, ou das estrelas frias sob a a¸c˜ao da radia¸c˜ao em linhas
ou bandas moleculares.
Para que o mecanismo seja eficiente ´e necess´ario uma combina¸c˜ao entre
a escala de altura do envelope, a densidade ρ e a temperatura T do g´as, uma
vez que os gr˜aos s´o podem se condensar se ρ for suficientemente alta a uma
distˆancia em que o efeito da press˜ao da radia¸c˜ao seja compar´avel ou supe-
rior ao da gravidade, e onde a temperatura esteja abaixo da temperatura de
condensa¸c˜ao dos gr˜aos. Os gr˜aos absorvem a radia¸c˜ao estelar e emitem como
corpos negros na faixa do infravermelho, e sua temperatura ´e determinada
pelo equil´ıbrio entre esses dois processos.
As taxas de perda de massa podem ser obtidas considerando que a lei
de velocidades deve passar pelo ponto cr´ıtico, em princ´ıpio onde v ≃ cs.
−5 −7
S˜ao obtidos valores da ordem de 10 a 10 M⊙/ano, em bom acordo com
as determina¸c˜oes observacionais. A taxa de perda de massa (M⊙/ano) em
estrelas frias, particularmente supergigantes vermelhas, pode ser aproximada
por uma express˜ao emp´ırica
(L∗/L⊙) (R∗/R⊙)
˙ −13
M ≃ 4 × 10 η (5.59)
M∗/M⊙
onde a luminosidade, raio e massa da estrela s˜ao dados em termos solares,
< <
e η ´e um parˆametro ajust´avel, tipicamente no intervalo 0, 3 η 3. Esta
∼ ∼
´e a f´ormula de Reimers, obtida a partir de uma amostra de supergigantes
vermelhas em sistemas bin´arios, para as quais h´a determina¸c˜oes relativamente
precisas de dM/dt, M∗, R∗ e L∗. A quantidade mais simples com dimens˜oes de
massa/tempo que pode ser formada a partir dos parˆametros estelares b´asicos,
M∗, R∗ e L∗ ´e L∗/g R∗, que ´e equivalente a L∗ R∗/M∗ = L∗/(M∗/R∗), uma
2 2
vez que g ∝ M∗/R . Como g R∗ ∝ M∗/R∗ ∝ v , se a taxa de perda de massa
∗ e
for proporcional a esta quantidade em diferentes estrelas, a mesma fra¸c˜ao da
luminosidade estelar ´e usada para fornecer a energia potencial por unidade de
massa do material que escapa da estrela.

---

## Página 164

152 Transporte de Energia em Astrof´ısica
EXEMPLO 5.14 - Perda de massa em δ Sge
Vamos considerar como exemplo de utiliza¸c˜ao da f´ormula de Reimers uma
3
estrela gigante com L∗ = 10 L⊙, M∗ = 1.0 M⊙ e R∗ = 100 R⊙. Adotando
o parˆametro η ≃ 3.0, a taxa de perda de massa da estrela ´e dM/dT = 1.2 ×
−7
10 M⊙/ano. A estrela δ Sge (M2 II) tem log L∗/L⊙ ≃ 3.4, R∗/R⊙ ≃ 140
e M∗ ≃ 8.0 M⊙. Sua taxa de perda de massa estimada por m´etodos mais
−8
precisos ´e dM/dt ≃ 2 × 10 M⊙/ano. Neste caso, o valor correspondente do
parˆametro η para reproduzir esta taxa com a f´ormula de Reimers ´e
˙
M (M∗/M⊙)
η ≃ ≃ 1.14
−13
(4 × 10 ) (L∗/L⊙) (R∗/R⊙)
Podemos ter uma id´eia da taxa de perda de massa em um vento radia-
tivo admitindo que todos os f´otons da estrela s˜ao absorvidos uma ´unica vez,
o chamado “limite de espalhamento simples”. Neste caso, a quantidade de
˙
movimento por unidade de tempo do vento ´e M vf, que deve ser igual `a quan-
tidade de movimento radiativa da estrela por unidade de tempo, dada por
L∗/c. Temos ent˜ao
L∗
˙
M ≃ (5.60)
vf c
No caso de espalhamento simples, ou ´unico, (5.60) ´e um limite superior, pois
nem todos os f´otons da estrela s˜ao absorvidos. Entretanto, um mesmo f´oton
pode ser absorvido e reemitido ou espalhado v´arias vezes, o que pode au-
mentar a taxa de perda de massa por um fator consider´avel, de modo que
taxas aproximadamente corretas podem ser obtidas com a equa¸c˜ao (5.60).
Em uma aproxima¸c˜ao melhor, pode ser mostrado que esta equa¸c˜ao deve ser
multiplicada por τv, a profundidade ´optica do vento na regi˜ao supersˆonica,
uma quantidade que pode alcan¸car valores muito maiores do que a unidade.
˜
5.5.4 VENTOS CAUSADOS PELA RADIAC¸AO EM LINHAS
Este ´e o mecanismo mais importante aplicado aos ventos das estrelas
quentes com tipos espectrais O, B, A e das classes de luminosidade V, III, I,
estrelas centrais de nebulosas planet´arias e estrelas Wolf-Rayet. Essas estrelas
apresentam grande n´umero de linhas intensas de absor¸c˜ao, em particular na
regi˜ao ultravioleta do espectro, em que as opacidades podem atingir valores

---

## Página 165

Ventos Estelares 153
um milh˜ao de vezes mais altos que no cont´ınuo. Os f´otons absorvidos tˆem
uma certa quantidade de movimento, que ´e transferida ao g´as nas atmosferas
destas estrelas, levando `a eje¸c˜ao de suas camadas superficiais. O processo ´e
favorecido pelo efeito Doppler devido ao gradiente de velocidade, que permite
a absor¸c˜ao de f´otons n˜ao atenuados da fotosfera em comprimentos de onda
diferentes do comprimento de onda central.
O processo de eje¸c˜ao leva em conta a transferˆencia de quantidade de movi-
mento e energia das regi˜oes internas da estrela para o envelope em expans˜ao
por absor¸c˜ao e espalhamento, incluindo a possibilidade de espalhamento m´ul-
tiplo. Essa transferˆencia ´e feita basicamente por ´ıons de C, N, O, Ne, Si,
P, S e elementos do grupo do Fe. Esses ´ıons precisam comunicar a quanti-
dade de movimento adquirida aos pr´otons, el´etrons e ´ıons de He por meio
de colis˜oes, em um processo `as vezes chamado de acoplamento coulombiano.
As condi¸c˜oes necess´arias para esta transferˆencia requerem que o tempo de
desacelera¸c˜ao desses ´ıons pelas colis˜oes com o g´as seja pequeno com rela¸c˜ao
ao tempo necess´ario para que os ´ıons possam adquirir uma grande velocidade
de deriva com rela¸c˜ao ao g´as.
No processo de perda de massa pela a¸c˜ao da press˜ao da radia¸c˜ao em
linhas opticamente espessas, a taxa de perda de massa pode ser escrita de
maneira aproximada
L∗
˙
M ≃ N (5.61)
2
c
onde N ´e o n´umero efetivo de linhas de absor¸c˜ao opticamente espessas e L∗ ´e
5
a luminosidade da estrela. Por exemplo, para uma estrela com L∗/L⊙ ∼ 10 ,
˙ −6
precisamos de N ≃ 150 para obter M ∼ 10 M⊙/ano, da ordem dos valores
observados. Uma express˜ao mais correta ´e obtida admitindo que todos os
f´otons da estrela s˜ao absorvidos uma ´unica vez por um grande n´umero de
linhas intensas, essencialmente o limite de espalhamento simples dado por
5 3 ˙ −6
(5.60). Com L∗/L⊙ ∼ 10 e vf ∼ 10 km/s, obtemos M ∼ 10 M⊙/ano.
Uma vez que os f´otons s˜ao espalhados de maneira aproximadamente isotr´opica,
e portanto perdem sua eficiˆencia na transferˆencia de quantidade de movimento
para a dire¸c˜ao radial ap´os o primeiro espalhamento, a express˜ao (5.61) ´e um
bom limite superior para a taxa de perda de massa da maior parte das estrelas
quentes, com a prov´avel exce¸c˜ao das Wolf-Rayet, que tˆem taxas relativamente
altas para suas luminosidades.
O mecanismo de eje¸c˜ao causada pela press˜ao da radia¸c˜ao pode tamb´em
ser aplicado `as estrelas frias, em que a absor¸c˜ao ´e feita a partir de linhas

---

## Página 166

154 Transporte de Energia em Astrof´ısica
moleculares intensas de H2O ou CO. Neste caso, taxas da ordem de at´e
−7
10 M⊙/ano podem ser obtidas, de modo que o mecanismo pode funcionar
como um complemento ao processo de eje¸c˜ao pelos gr˜aos circunstelares.
EXEMPLO 5.15 - Perda de massa em ǫ Ori
A partir da aplica¸c˜ao da teoria dos ventos impulsionados pela radia¸c˜ao ao caso
de estrelas quentes, ´e obtida uma correla¸c˜ao entre a quantidade de movimento
√
˙
do vento modificada, M vf R∗ e a luminosidade da estrela L∗ dada por
√
˙ 6
log(M vf R∗/R⊙) ≃ −1.37 + 2.07 log(L∗/10 L⊙) (5.62)
onde a taxa de perda de massa est´a em M⊙/ano, a velocidade terminal vf
est´a em km/s. A quantidade de movimento modificada depende fracamente da
massa da estrela, de modo que a rela¸c˜ao acima n˜ao inclui esta dependˆencia. A
estrela ǫ Ori tem tipo espectral B0Ia, temperatura efetiva Tef = 28 000 K e raio
R∗ = 33 R⊙. Apresenta um vento intenso, cuja velocidade terminal, estimada
a partir de perfis espectrais do tipo P Cygni, ´e vf = 1 500 km/s. Vamos
estimar a taxa de perda de massa da estrela por este modelo. A luminosidade ´e
39 5 ˙ −6
L = 2.31×10 erg/s ou L/L⊙ = 6.0×10 e de (5.62) M ≃ 1.7×10 M⊙/ano.
Admitindo que a velocidade terminal ´e alcan¸cada em r ≃ 2 R∗, a densidade
do g´as circunstelar nesta regi˜ao ´e
˙
M
−15 3
ρ = ≃ 2.7 × 10 g/cm
2
4 π r vf
EXEMPLO 5.16 - Perda de massa em estrelas gigantes ricas em Li
A maior parte das estrelas gigantes dos ramos AGB/RGB tem baixas abun-
dˆancias de Li, pois este elemento ´e facilmente destru´ıdo nas temperaturas
altas dos interiores estelares. Entretanto, uma amostra consider´avel destas
estrelas tem abundˆancias mais altas, tipicamente ǫ(Li) = log n(Li)/n(H) +
12 > 1.5. Alguns trabalhos sugerem que estes objetos tˆem altas taxas de perda
de massa, semelhantes `as gigantes pobres em Li, as quais podem ter taxas
−5
at´e da ordem de dM/dt ∼ 10 M⊙/ano. Estas taxas podem ser calculadas
usando a f´ormula de Reimers, desde que uma calibra¸c˜ao adequada seja feita
para a determina¸c˜ao do parˆametro η.

---

## Página 167

Ventos Estelares 155
Figura 5.12 - Taxas de perda de massa em estrelas gigantes ricas em Li.
Os resultados para uma grande amostra contendo cerca de 1450 objetos dos
levantamentos GAIA e LAMOST e est˜ao mostrados na figura 5.12, onde as
taxas s˜ao dadas em fun¸c˜ao da luminosidade estelar com η = 5.7 (W. J. Maciel,
R. D. D. Costa, Bol. SAB, 2022). Esses resultados mostram que as taxas
destas estrelas s˜ao na verdade mais baixas do que nas estrelas pobres em
Li, e est˜ao bem correlacionadas com as luminosidades, como esperado em
um modelo em que a perda de massa ´e causada essencialmente pela a¸c˜ao da
press˜ao da radia¸c˜ao da estrela sobre linhas moleculares ou gr˜aos circunstelares.
EXEMPLO 5.17 - Taxa de perda de massa em estrelas quentes
Podemos obter uma estimativa da taxa de perda de massa em uma estrela
quente com um modelo simples para a absor¸c˜ao da radia¸c˜ao estelar em linhas
n˜ao saturadas (cf. Maciel 2005, cap. 10). O g´as ´e acelerado a partir da
fotosfera, onde r = R∗, at´e uma regi˜ao onde r = R e v = vf. O g´as no
envelope ´e constituido de H e He ionizados, sendo y = nHe/nH ≃ nHe/np a
abundˆancia de He por n´umero de ´atomos. A linha ´e produzida pelo elemento
k com abundˆancia ak ≃ nk/np e Qki = nki/nk ´e a fra¸c˜ao dos ´atomos de k no
estado de ioniza¸c˜ao i. Nessas condi¸c˜oes, a taxa de perda de massa pode ser
escrita
nki
˙ 2
M ≃ 4 π R vf (1 + 4 y) mH (5.63)
Qki ak

---

## Página 168

156 Transporte de Energia em Astrof´ısica
(cf. Maciel 2005). Vamos admitir que a raz˜ao nki/Qki ak e a densidade de
pr´otons s˜ao essencialmente constantes no envelope e igual ao seu valor em
r = R. Neste caso podemos escrever para a largura equivalente de uma linha
de comprimento de onda λ
2 2
π e λ
Wλ ≃ Nki f (5.64)
2
me c
onde f ´e a for¸ca de oscilador da linha (cf. Equa¸c˜ao 4.52). A densidade de
coluna Nki dos ´ıons absorvedores pode ser obtida integrando nki(r) em todo
o envelope, de r = R at´e r = r∞ com o resultado
∫ ( )
r∞
1 1
2
Nki ≃ nki(r) dr ≃ nki(R) R − ≃ nki(R) R (5.65)
R r∞
R
onde consideramos r∞ ≫ R. De (5.63), (5.64) e (5.65), obtemos
2
Wλ me c
˙
M ≃ 4 π R vf (1 + 4 y) mH (5.66)
2 2
π e λ f Qki ak
Vamos considerar a linha λ1393 ˚A do Si IV em uma estrela O, onde R ∼ R∗ ≃
−3
30 R⊙, vf ∼ 1 500 km/s, Wλ ≃ 5 ˚A, λ ≃ 1393 ˚A, f ≃ 0.5, Qki ≃ 2 × 10 ,
−5 ˙ −6
ak ≃ 3 × 10 e y ≃ 0.1. De (5.66) obtemos M ≃ 1.4 × 10 M⊙/ano, valor
semelhante `as taxas observadas em estrelas quentes.
EXEMPLO 5.18 - Taxa de perda de massa em estrelas frias
Analogamente ao exemplo anterior, vamos estimar a taxa de perda de massa
em uma gigante fria usando tamb´em um modelo simples para a press˜ao da
˙
radia¸c˜ao em gr˜aos (cf. Maciel 2005, cap. 10). Neste caso, a taxa M ´e
˙
M vf L∗
≃ (5.67)
τd c
onde vf ´e a velocidade terminal, L∗ ´e a luminosidade da estrela e τd ´e a
profundidade ´optica dos gr˜aos, definida por
dτd ≃ nd σd Q dr (5.68)
onde nd ´e a densidade de gr˜aos, σd ´e a se¸c˜ao eficaz de absor¸c˜ao e Q ´e o fator
de eficiˆencia dos gr˜aos. A equa¸c˜ao (5.67) pode ser comparada com (5.60),

---

## Página 169

Ventos Estelares 157
que corresponde ao caso τd ≃ 1. A profundidade ´optica dos gr˜aos pode ser
estimada por
3 mH n Q R ρd
τd ≃ (5.69)
4 a sd ρ
onde n = ρ/m ´e a densidade num´erica do g´as, R ´e a base do envelope, a ´e o
raio do gr˜ao, sd ´e a densidade dos gr˜aos e ρd/ρ ´e a raz˜ao gr˜aos-g´as. Usando
valores t´ıpicos para um envelope circunstelar de uma estrela gigante vermelha,
8 −3 14 3
n ≃ 10 cm , Q ≃ 1, R ≃ R∗ ∼ 10 cm, a ≃ 1 000 ˚A, sd ≃ 3 g/cm e
ρd/ρ ≃ 1/200, obtemos τd ≃ 2, n˜ao muito diferente do valor τd ≃ 1. De fato,
se τd ≪ 1 os gr˜aos s˜ao ineficientes no processo de transferˆencia de quantidade
de movimento para o g´as. Se τd ≫ 1 a radia¸c˜ao ser´a totalmente absorvida e
portanto n˜ao ser´a observada, de modo que τd ≃ 1 ´e uma m´edia que satisfaz
estas duas restri¸c˜oes. Aplicando (5.67) a uma estrela gigante do tipo Mira,
3 ˙ −6
com τd ≃ 1, L∗ ∼ 10 L⊙ e vf ≃ 10 km/s, obtemos M ≃ 2 × 10 M⊙/ano.
Valores desta ordem podem ser obtidos com a f´ormula de Reimers (5.59),
3
tomando R∗ ≃ 10 R⊙, M∗ ≃ 1 M⊙ e η ≃ 3.
´ ´
5.5.5 VENTOS E CAMPOS MAGNETICOS: ONDAS DE ALFVEN
As estrelas possuem em geral um campo magn´etico remanescente da
nuvem protoestelar ou desenvolvido posteriormente por algum processo de
d´ınamo. A estrutura desses campos n˜ao ´e bem conhecida, com exce¸c˜ao do
Sol, mas ´e bastante prov´avel que o campo tenha efeitos mensur´aveis sobre os
ventos estelares, em particular para as estrelas com alta rota¸c˜ao.
Um mecanismo provavelmente mais importante pode ocorrer na presen¸ca
de campos magn´eticos mesmo em estrelas em baixa rota¸c˜ao. Neste caso, on-
das de Alfv´en geradas na base do vento podem se propagar pelo envelope, e
a dissipa¸c˜ao de energia e quantidade de movimento associada com as ondas
pode levar `a acelera¸c˜ao do envelope e perda de massa. Juntamente com os
processos envolvendo a press˜ao da radia¸c˜ao, as ondas de Alfv´en s˜ao provavel-
mente os principais mecanismos de produ¸c˜ao de ventos em estrelas sem regi˜oes
coronais extensas ou fluxos radiativos. Algumas aplica¸c˜oes incluem estrelas
da seq¨uˆencia principal de tipos A e mais tardios, estrelas pr´e-seq¨uˆencia prin-
cipal, al´em de gigantes e supergigantes com temperaturas efetivas na faixa
15 000 > Tef(K) > 3 000. Modelos h´ıbridos, em que a radia¸c˜ao ´e consid-
erada em complemento `as ondas de Alfv´en, tˆem sido tamb´em considerados.

---

## Página 170

158 Transporte de Energia em Astrof´ısica
A introdu¸c˜ao das ondas de Alfv´en implica em modifica¸c˜oes na equa¸c˜ao de
conserva¸c˜ao da quantidade de movimento, que passa a incluir um termo cor-
~ ~ ~
respondente `a for¸ca de Lorentz, proporcional a J × B, onde J ´e a densidade
~
de corrente e B a intensidade do campo magn´etico (cap´ıtulo 10).
EXEMPLO 5.19 - Taxa de perda de massa por ondas de Alfv´en
Uma estimativa para a taxa de perda de massa pelas ondas de Alfv´en em
estrelas gigantes frias pode ser escrita
2 4 3.5
dM α B R
−29 0 ∗
≃ 9.1 × 10 M⊙/ano (5.70)
1.5
dt M ρ0
∗
onde M∗ ´e a massa da estrela em massas solares, R∗ o raio em raios solares,
B0 ´e o campo magn´etico na base do envelope em Gauss, ρ0 ´e a densidade de
g´as na base do envelope e α ´e um parˆametro que depende das varia¸c˜oes do
campo magn´etico relativas ao valor na base do envelope, geralmente menor
ou da ordem de 0.1. Tomando valores t´ıpicos M∗ = 16 M⊙, R∗ = 400 R⊙,
−13 3
B0 = 10 Gauss, e uma densidade ρ0 = 10 g cm , com α ≃ 0.05 obtemos
−7
dM/dt ≃ 4.6 × 10 M⊙/ano, que pode ser comparado com um valor mais
−7
preciso dM/dt ≃ 5.5 × 10 M⊙/ano (cf. Lamers 1991, p. 314), compat´ıvel
com uma velocidade terminal vf ≃ 400 km/s.
5.6 INTERAC¸ ˜AO DOS VENTOS ESTELARES COM O MEIO
INTERESTELAR
A intera¸c˜ao dos ventos estelares com a regi˜ao interestelar vizinha `a es-
trela ocorre `a medida que o envelope se expande, produzindo um aquecimento,
ioniza¸c˜ao e transferˆencia de massa e quantidade de movimento ao meio in-
terestelar, em particular pela propaga¸c˜ao de ondas de choque. Exemplos
cl´assicos desta intera¸c˜ao s˜ao a intera¸c˜ao do vento solar com o meio intereste-
lar local, as regi˜oes H II, associadas a estrelas quentes e jovens, e as nebulosas
planet´arias, associadas a estrelas de massa intermedi´aria nos est´agios finais
de sua evolu¸c˜ao. Nesses dois ´ultimos casos, o g´as ´e ionizado pelos f´otons ul-
travioletas da estrela central, ocorrendo simultaneamente efeitos dinˆamicos
produzidos pela expans˜ao, como a forma¸c˜ao de “bolhas” ou “superbolhas”
observadas na nossa gal´axia, a Via L´actea, e em outras gal´axias espirais.
A composi¸c˜ao qu´ımica do meio interestelar ´e tamb´em alterada pela conta-
mina¸c˜ao com os elementos pesados produzidos nos processos de nucleoss´ıntese

---

## Página 171

Ventos Estelares 159
estelar – quiescente ou explosiva – e tamb´em pela inje¸c˜ao de gr˜aos s´olidos
coagulados nas atmosferas e envelopes de estrelas gigantes frias.
O tratamento da propaga¸c˜ao dos choques no meio interestelar ´e frequente-
mente bastante idealizado, com a considera¸c˜ao de choques isot´ermicos ou
adiab´aticos. As regi˜oes afetadas pelo choque passam por trˆes fases distintas
segundo o est´agio de propaga¸c˜ao do choque, incluindo uma fase de expans˜ao
livre do vento, uma fase adiab´atica, e uma fase chamada snowplow (limpa-
neve). Esta ´ultima ´e geralmente mais importante pela maior dura¸c˜ao e pelos
efeitos observacionais que podem ser previstos. Nesta fase, o meio interestelar
alcan¸ca a regi˜ao mais externa do choque, ´e aquecido e resfriado rapidamente a
4
uma temperatura relativamente baixa, da ordem de 10 K. A massa do mate-
rial varrido pela onda ´e maior que a massa da bolha formada, permanecendo
na regi˜ao comprimida. Esta regi˜ao, mais densa e relativamente fria, ´e em-
purrada pela onda como um limpa-neve, tendo uma dura¸c˜ao da ordem de at´e
6
10 anos, dependendo da intensidade do vento.
EXEMPLO 5.20 - Deposi¸c˜ao de energia no meio interestelar
Um vento estelar propagando-se com uma velocidade terminal vf tem uma
2
energia cin´etica por unidade de massa da ordem de (1/2)v . Pela conserva¸c˜ao
f
˙
da energia, sendo dM/dt = M a taxa de perda de massa associada ao vento, a
energia cin´etica depositada no meio interestelar vizinho por unidade de tempo
˙ 2
´e (1/2) M v . Considerando que o vento age durante um intervalo de tempo
f
˙ 2
∆t, a energia cin´etica total depositada no meio interestelar ´e (1/2) M v ∆t.
f
Por exemplo, para uma estrela quente com vf ≃ 2 000 km/s e taxa de perda de
˙ −5
massa M ∼ 10 M⊙/ano, a taxa de deposi¸c˜ao de energia cin´etica ´e de 1.2 ×
37
10 erg/s. Considerando que o est´agio correspondente da evolu¸c˜ao de estrelas
5
massivas pode ter uma dura¸c˜ao ∆t ∼ 10 anos, a energia total depositada por
49
uma ´unica estrela ´e de 3.9×10 erg. Este valor pode ser comparado `a energia
49
total envolvida em uma explos˜ao de supernova de tipo II, da ordem de 10
51
a 10 erg.
No caso de estrelas gigantes frias, a taxa de deposi¸c˜ao ´e mais baixa,
31 ˙ −6
cerca de 3.1 × 10 erg/s, onde adotamos M ∼ 10 M⊙/ano e vf ≃ 10 km/s.
6
Tomando ∆t ≃ 10 anos para a dura¸c˜ao do est´agio de gigante vermelha, a
44
energia cin´etica total depositada pela estrela ´e de 9 × 10 erg, que pode ser
43
comparada `a energia produzida na explos˜ao de uma nova, da ordem de 10 a
44
10 erg. Neste caso, a regi˜ao do meio interestelar afetada ´e consideravelmente
menor que no caso anterior, mas isto ´e contrabalan¸cado pela ocorrˆencia mais

---

## Página 172

160 Transporte de Energia em Astrof´ısica
frequente de estrelas de massa pequena e intermedi´aria com rela¸c˜ao `as estrelas
massivas e quentes.
5.7 TRANSPORTE RADIATIVO E VENTOS ESTELARES
Um aspecto essencial dos ventos produzidos pela absor¸c˜ao da radia¸c˜ao em
linhas ´e a quest˜ao do transporte radiativo, devido `a necessidade de absor¸c˜ao
dos f´otons por um g´as em expans˜ao. O g´as se expande segundo uma lei de
velocidades v(r), de modo que os f´otons emitidos pela fotosfera que podem ser
absorvidos em uma dada linha espectral devem estar localizados em uma certa
“regi˜ao de intera¸c˜ao da linha”, definida basicamente pela largura da linha e
pela velocidade do g´as, atrav´es do efeito Doppler.
Este problema n˜ao tem solu¸c˜ao rigorosa, sendo normalmente utilizada
uma equa¸c˜ao de transferˆencia probabil´ıstica acoplada `a aproxima¸c˜ao intro-
duzida por Sobolev (1960). Neste caso, admite-se que a regi˜ao de intera¸c˜ao
em que os f´otons da fotosfera podem ser absorvidos ´e infinitamente estreita,
de modo que o perfil da linha ´e essencialmente uma fun¸c˜ao delta. Assim,
o c´alculo de propriedades como a profundidade ´optica depende apenas das
condi¸c˜oes locais da regi˜ao de absor¸c˜ao. Na realidade, as part´ıculas do vento
tˆem movimentos t´ermicos e turbulentos, o perfil da linha n˜ao ´e infinitamente
estreito, e a regi˜ao de intera¸c˜ao ´e finita, sendo caracterizada pelo chamado
“comprimento de Sobolev”. A aproxima¸c˜ao n˜ao ´e sempre v´alida, em parti-
cular se as varia¸c˜oes na densidade e no gradiente de velocidade do vento n˜ao
forem desprez´ıveis em uma regi˜ao com dimens˜oes da ordem do comprimento
de Sobolev.
Com a aproxima¸c˜ao de Sobolev, o problema ´e simplificado, pois o fluxo de
radia¸c˜ao respons´avel pela acelera¸c˜ao do g´as depende apenas do fluxo emitido
pela estrela e das condi¸c˜oes locais da regi˜ao de acelera¸c˜ao. O c´alculo da
acelera¸c˜ao radiativa devida `as linhas espectrais envolve a determina¸c˜ao da
“probabilidade de penetra¸c˜ao”, ou seja, a probabilidade da radia¸c˜ao originada
na fotosfera alcan¸car a regi˜ao de Sobolev, e da “probabilidade de escape” desta
regi˜ao. A partir do trabalho de Castor, Abbott e Klein (1975), costuma-se
admitir o limite de fonte pontual para a estrela, com uma corre¸c˜ao posterior
para o seu tamanho finito.
Estimativas real´ısticas das for¸cas radiativas das linhas podem ser rela-
tivamente complexas, pois um grande n´umero de linhas pode contribuir de
maneira significativa para a acelera¸c˜ao do g´as, o que requer o c´alculo das
condi¸c˜oes de excita¸c˜ao e ioniza¸c˜ao de muitos n´ıveis de energia de diversos

---

## Página 173

Ventos Estelares 161
elementos qu´ımicos. A acelera¸c˜ao radiativa total devida `as linhas pode ser
escrita em termos da acelera¸c˜ao por espalhamento eletrˆonico introduzindo-se
um fator de escala conhecido como “multiplicador de for¸ca”, cujos valores po-
4
dem alcan¸car at´e cerca de 10 . As solu¸c˜oes permitem obter as taxas de perda
de massa, o perfil de densidade e o de velocidade, que pode ser aproximado
por uma lei de velocidades aproximada. A topologia das solu¸c˜oes ´e qualitati-
vamente semelhante ao caso isot´ermico (ver a figura 5.8), havendo uma ´unica
solu¸c˜ao transˆonica que passe de maneira suave da fase subsˆonica para a fase
supersˆonica.
Tamb´em no caso dos ventos radiativos em estrelas quentes a taxa de
perda de massa pode ser significativamente aumentada pela ocorrˆencia de
espalhamento m´ultiplo, especialmente quando existem muitas linhas relativa-
mente pr´oximas, de modo que podem ocorrer absor¸c˜oes em comprimentos de
onda sucessivamente mais longos `a medida que o f´oton escapa da estrela.
Finalmente, deve-se mencionar a possibilidade de instabilidades nos ven-
tos radiativos, causadas pelo crescimento de perturba¸c˜oes na velocidade e
densidade do g´as. As instabilidades afetam a estrutura detalhada dos perfis
de velocidade e densidade, embora os valores m´edios dessas quantidades se-
jam mantidos, sendo tamb´em respons´aveis por alguns fenˆomenos observados
nessas estrelas, como a emiss˜ao de raios X e a existˆencia de ´ıons em est´agios
elevados de ioniza¸c˜ao, o que ´e conhecido como superioniza¸c˜ao.
´
EXERCICIOS
5.1 Prove as rela¸c˜oes (5.3).
5.2 A estrela HD 36486 (O9.5 II) tem uma temperatura efetiva log Tef = 4.49,
um vento estelar com velocidade terminal vf = 2000 km/s e taxa de
˙ −6
perda de massa M = 1.0 × 10 M⊙/ano. (a) Use a rela¸c˜ao entre a
quantidade de movimento modificada do vento e a luminosidade estelar
(5.62) e determine a luminosidade da estrela. (b) Qual ´e a energia por
unidade de tempo comunicada pelo vento ao meio interestelar?
5.3 Considere uma coroa solar hidrost´atica adiab´atica, mantidas as hip´o-
6 8 −3
teses do Exemplo 5.12, com T ≃ 1.5 × 10 K, n0 ≃ 4 × 10 cm e
10
r0 ≃ R⊙ = 6.96×10 cm e estime a densidade do g´as coronal na posi¸c˜ao
da Terra. Compare seu resultado com o valor obtido naquele exemplo.

---

## Página 174

162 Transporte de Energia em Astrof´ısica
5.4 A estrela α Sco tem tipo espectral M1.5 I, massa M∗ = 18 M⊙, raio
R∗ = 600 R⊙ e luminosidade log(L∗/L⊙) = 4.6. Seu vento tem uma
velocidade terminal vf = 20 km/s. (a) Determine sua taxa de perda de
massa usando a express˜ao aproximada (5.67), em que a perda de massa ´e
devida `a poeira, e usando a f´ormula de Reimers (5.59). Adote os valores
da profundidade ´optica τ = 0.01, τ = 0.1, τ = 1.0. (b) Considerando que
−6
a taxa obtida por m´etodos mais precisos ´e dM/dt = 1.0 × 10 M⊙/ano,
qual ´e a profundidade ´optica total dos gr˜aos τd? Qual ´e o valor do fator
de eficiˆencia η na f´ormula de Reimers?
−2 −1
5.5 O fluxo de massa ~ = ρ ~v (unidades: g cm s ) pode tamb´em ser
considerado como uma densidade de quantidade de movimento, ou quan-
−1 −3
tidade de movimento por unidade de volume (unidades: g cm s cm ).
10
Considerando que o Sol tem um raio R⊙ = 6.96 × 10 cm, determine o
fluxo de massa pr´oximo `a superf´ıcie do Sol, de acordo com os dados do
Exemplo 5.1. Compare seu resultado com o valor obtido em r = 1 UA.
ˆ ´
REFERENCIAS BIBLIOGRAFICAS
BRANDT, J. C. 1970, Introduction to the Solar Wind, San Francisco, Freeman
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CASTOR, J. I., ABBOTT, D. C., KLEIN, R.I. 1975, Astrophysical Journal
195, 157
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
LAMERS, H. J. G. L. M., CASSINELLI, J. P. 1999, Introduction to Stellar
Winds, CUP
MACIEL, W. J. 2005, Hidrodinˆamica e Ventos Estelares: uma introdu¸c˜ao,
Edusp (edi¸c˜ao em inglˆes: Hydrodynamics and Stellar Winds: an In-
troduction, Springer 2014)
MIHALAS, D. 1978, Stellar Atmospheres, Freeman
SOBOLEV, V. V. 1960, Moving Envelopes of Stars, Harvard University Press.

---

## Página 175

## 6
## INTERIORES ESTELARES
6.1 INTRODUC¸ ˜AO
No cap´ıtulo 3 consideramos alguns aspectos das atmosferas estelares no
que se refere ao transporte de energia. Neste cap´ıtulo, vamos analisar os
interiores das estrelas, em particular considerando a energia armazenada e
os procesos mais importantes de transporte de energia. Parte do material
aqui apresentado est´a descrito de maneira mais detalhada em Maciel (1999).
Outras referˆencias aos problemas de transporte de energia no interior das
estrelas incluem Swihart (1972), Hansen et al. (2004), de Boer e Seggewiss
(2008), Ryan e Norton (2010) e Kippenhahn et al. (2012).
6.2 ENERGIAS ESTELARES
As principais fontes de energia das estrelas s˜ao trˆes: a energia t´ermica, a
energia potencial gravitacional, e a energia nuclear. Vamos a seguir considerar
cada uma dessas trˆes fontes de energia.
´
6.2.1 ENERGIA TERMICA
¯
A energia t´ermica total de uma estrela (erg) ´e dada por Et ≃ U M, onde
¯
U ´e a energia t´ermica m´edia por grama (erg/g) de mat´eria estelar e M ´e a

---

## Página 176

164 Transporte de Energia em Astrof´ısica
¯
massa da estrela. Para um g´as perfeito, temosU = 3 k T /2 μ mH onde T ´e a
temperatura do g´as, μ seu peso molecular m´edio e mH a massa do ´atomo de
H. Temos ent˜ao
3 k T
Et ≃ M (6.1)
2 μ mH
Podemos obter uma express˜ao para a energia t´ermica Et em termos da
distribui¸c˜ao de massa e densidade no interior da estrela. Usando a equa¸c˜ao
de estado dos gases perfeitos, a equa¸c˜ao de conserva¸c˜ao da massa (5.1) e a
equa¸c˜ao de equil´ıbrio hidrost´atico (5.33) obtemos (ver Exercicio 6.1)
∫
R
Et = 2 π G M(r) ρ(r) r dr (6.2)
0
EXEMPLO 6.1 - Energia t´ermica do Sol
7
Usando valores t´ıpicos para as regi˜oes internas do Sol, T ≃ 1.6 × 10 K,
33 48
μ ≃ 0.5, e M = 1.99×10 g, obtemos Et ≃ 7.9×10 erg. Considerando que
T ∝ M/R, onde R ´e o raio da estrela (ver exerc´ıcio 6.2), podemos escrever
2
(M/M⊙)
48
Et ≃ 7.9 × 10 erg (6.3)
R/R⊙
33
A luminosidade do Sol ´e L⊙ = 3.85 × 10 erg/s. Se a energia emitida tiver
origem t´ermica, e essa energia n˜ao estiver sendo renovada, o Sol poderia con-
15
servar sua luminosidade por um per´ıodo da ordem de tt ≃ Et/L⊙ ≃ 2.1×10 s
7
= 6.5 × 10 anos. H´a evidˆencias de que o Sol tem mantido sua atual lumi-
9 10
nosidade por um per´ıodo muito maior, da ordem de 10 − 10 anos. Do
ponto de vista geol´ogico, com o estudo dos elementos radioativos nas rochas
da crosta terrestre (e da Lua) e seus produtos de decaimento, ´e poss´ıvel esti-
mar por quanto tempo essas rochas tˆem sido s´olidas, o que impede varia¸c˜oes
apreci´aveis na luminosidade solar. Por outro lado, estudando os f´osseis nas
rochas pode-se estimar o tempo de ocupa¸c˜ao dos seres vivos no planeta, o
que leva basicamente `as mesmas conclus˜oes acima. Al´em disso, evidˆencias
astronˆomicas, ligadas justamente `a evolu¸c˜ao estelar e `a evolu¸c˜ao qu´ımica da
9
Gal´axia apontam para a mesma escala de tempo, da ordem de 5 × 10 anos.
Portanto, pode-se concluir que a energia t´ermica n˜ao ´e suficiente para manter

---

## Página 177

Interiores Estelares 165
a luminosidade solar, havendo a necessidade de renova¸c˜ao a partir de outra
fonte de energia.
6.2.2 ENERGIA GRAVITACIONAL
No processo de contra¸c˜ao gravitacional pelo qual passam as estrelas, a
energia potencial gravitacional ´e perdida, convertendo-se, pelo menos parcial-
mente, em energia t´ermica. Para uma estrela de massa M a energia potencial
gravitacional ´e
∫
M
G M(r) dM
Eg = − (6.4)
r
0
usando a equa¸c˜ao de conserva¸c˜ao da massa temos
∫
R
Eg = −4 π G M(r) ρ(r) r dr (6.5)
0
Comparando (6.5) com (6.2) vemos que
2Et + Eg = 0 (6.6)
que ´e uma forma do teorema do virial (cap´ıtulo 7). De acordo com essa
equa¸c˜ao, no processo de contra¸c˜ao gravitacional, metade da energia potencial
gravitacional ´e convertida em energia t´ermica, e metade ´e emitida na forma
de radia¸c˜ao.
EXEMPLO 6.2 - Energia gravitacional do Sol
Usando o resultado (6.3) a equa¸c˜ao (6.6) pode ser escrita
2
(M/M⊙)
49
Eg = −1.6 × 10 erg (6.7)
R/R⊙
49
correspondendo a cerca de 10 erg para o Sol. Obviamente, essa energia ´e
tamb´em insuficiente para manter a luminosidade atual do Sol por um per´ıodo
9 10 8
da ordem de 10 − 10 anos, pois tg ∼ |Eg|/L⊙ ∼ 1.3 × 10 anos.
EXEMPLO 6.3 - A escala de tempo de Kelvin-Helmoltz
Em termos da energia gravitacional de uma estrela, pode-se definir a escala
de tempo de Kelvin-Helmholtz por

---

## Página 178

166 Transporte de Energia em Astrof´ısica
¯ 2
|Eg| G M
tKH = ≃ (6.8)
L 2 R L
2
onde consideramos M(r) ≃ M/2 em r = R/2 e |Eg| ≃ GM /2R. Usando
14 7
essa express˜ao, obtemos para o Sol tKH ≃ 5.0 × 10 s = 1.6 × 10 anos.
6.2.3 ENERGIA NUCLEAR
No interior estelar ocorrem continuamente colis˜oes entre as part´ıculas. Se
a colis˜ao de duas part´ıculas (Z1, A1) e (Z2, A2) tiver energia suficiente para
ultrapassar a barreira coulombiana, ´e poss´ıvel a forma¸c˜ao de um novo n´ucleo
(Z1 +Z2, A1 +A2). O excesso de energia pode aparecer como energia cin´etica
das part´ıculas, pode ser emitido na forma de radia¸c˜ao, ou ainda comunicado
a uma terceira part´ıcula (Z3, A3), ejetada do n´ucleo, restando o n´ucleo final
(Z1 + Z2 − Z3, A1 + A2 − A3). Para um n´ucleo (Z, A) de massa m, temos
E(Z, A)
m(Z, A) = Zmp + (A − Z)mn − (6.9)
2
c
onde mp e mn s˜ao as massas do pr´oton e nˆeutron, respectivamente, e E(Z, A)
´e a energia de liga¸c˜ao do n´ucleo. Note-se que a massa do n´ucleo ´e menor que
a soma das massas dos pr´otons e nˆeutrons componentes. A diferen¸ca entre
as massas ´e diretamente proporcional ao reservat´orio de energia nuclear, de
2
acordo com a equa¸c˜ao de Einstein, ∆E = ∆M c .
EXEMPLO 6.4 - Energia nuclear do Sol
Vamos considerar o caso do Sol, em que ocorre a rea¸c˜ao
1 1 2 +
H + H −→ H + β + ν (6.10)
2 1 1
Nesta rea¸c˜ao temos m( H) = 2.0141 u, m( H) = 1.0078 u, e 2m( H) =
−24
2.0156 u, onde u = 1.66 × 10 g. Podemos calcular a diferen¸ca em massa
2 −6 6
∆m = 0.0015 u e energia ∆E = ∆m c = 2.24 × 10 erg = 1.4 × 10 eV =
1.4 MeV. Para o Sol, o n´umero de rea¸c˜oes por segundo necess´ario para manter
39 −1
a luminosidade ´e L⊙/∆E ≃ 10 s . Por outro lado, o n´umero m´edio de
57
n´ucleos de H no Sol ´e M⊙/mH ≃ 10 . Considerando que aproximadamente
56
10% (10 ) desses n´ucleos est˜ao no centro, em condi¸c˜oes de sofrer rea¸c˜oes
39 56 −17
nucleares, em cada segundo uma fra¸c˜ao 10 /10 = 10 dos n´ucleos deve
17
sofrer uma rea¸c˜ao, isto ´e, apenas um n´ucleo de cada 10 .

---

## Página 179

Interiores Estelares 167
Vamos estimar a energia produzida pela transforma¸c˜ao de H em He no interior
1 1 4
solar. Temos m( H) = 1.0078 u, 4m( H) = 4.0312 u, e m( He) = 4.0026 u.
−5
Assim, ∆E ≃ 4.27×10 erg = 26.7 MeV. A energia liberada por grama de H
18
´e ∆E/4mH ≃ 6.39×10 erg/g. Considerando novamente que uma fra¸c˜ao da
ordem de 10% da massa do Sol est´a em condi¸c˜oes de sofrer rea¸c˜oes nucleares,
o suprimento de energia nuclear do Sol ´e
∆E
51
En ≃ (0.1M⊙) ∼ 10 erg (6.11)
4mH
Comparando esse valor com a energia t´ermica (6.3) e a energia gravitacional
(6.7), vemos que En ≫ |Eg| > Et. Em termos da energia nuclear da estrela,
podemos definir uma escala de tempo nuclear tn como tn ≃ En/L. Para o Sol,
17 10
obtemos tn ≃ 3×10 s ≃ 10 anos, ou seja, as fontes nucleares podem manter
o Sol com sua luminosidade atual pelo tempo necess´ario, de acordo com as
observa¸c˜oes. Outras rea¸c˜oes podem aumentar ainda mais esse tempo, mas a
energia obtida na transforma¸c˜ao de H em He corresponde aproximadamente
a 70% do total dispon´ıvel.
EXEMPLO 6.5 - O tempo de queda livre
Vamos comparar as escalas de tempo tn e tKH com o tempo de queda livre,
essencialmente o tempo necess´ario para que uma estrela colapse sob a a¸c˜ao
da for¸ca gravitacional. Da equa¸c˜ao de equil´ıbrio hidrost´atico temos
1 dP G M
+ = 0 (6.12)
2
ρ dr r
Se as for¸cas gravitacionais e de press˜ao n˜ao se equilibrarem, ou seja, se a
estrela colapsar sob a a¸c˜ao da for¸ca gravitacional, o termo dP/dr se anula
podemos escrever aproximadamente
∣ ∣
∣ 2 ∣
d r G M R
∣ ∣
≃ ≃ (6.13)
∣ 2 ∣ 2 2
dt R t
ql
de modo que
3
R 3
2
t ≃ ≃ (6.14)
ql
GM 4πGρ¯
onde tomamos r ≃ R e M(r) ≃ M e usamos a densidade m´edia ¯ρ. Um c´alculo
mais rigoroso leva a um coeficiente numericamente diferente em cerca de 10%.
Em termos solares, obtemos

---

## Página 180

168 Transporte de Energia em Astrof´ısica
3/2
(R/R⊙)
3
tql ≃ 1.6 × 10 s (6.15)
1/2
(M/M⊙)
3
Para o Sol, tql ≃ 1.6 × 10 s = 27 min; para uma gigante vermelha com
M = M⊙ e R = 100 R⊙, tql ≃ 18 dias; para uma an˜a branca com M = 0.6 M⊙
e R = R⊙/50, e tql = 5.8 s. Portanto, temos tn ≫ tKH ≫ tql.
EXEMPLO 6.6 - Energia de Gamow e probabilidade de penetra¸c˜ao
A rea¸c˜ao (6.10) ´e a primeira rea¸c˜ao da cadeia pp, em que quatro pr´otons s˜ao
transformados em um n´ucleo de h´elio, com a libera¸c˜ao de energia. A cadeia pp
pode ser subdividida nas cadeias pp1, pp2 e pp3, das quais a mais importante
em estrelas como o Sol ´e a primeira, com as rea¸c˜oes
1 1 2 +
H + H −→ H + e + νe
2 1 3
H + H −→ He + γ (6.16)
3 3 4 1 1
He + He −→ He + H + H
Para que estas rea¸c˜oes ocorram, os dois pr´otons devem romper a barreira
coulombiana respons´avel pela repuls˜ao entre eles, que pode ser estimada por
2 −10 3/2 1/2 −1
V ≃ e /r, onde e = 4.80 × 10 cm g s ´e a carga do el´etron e r ´e
a distˆancia entre os dois pr´otons, que pode ser tomada como sendo da ordem
−13 −6
do raio de Bohr, r ≃ 1.2 × 10 cm. Obtemos ent˜ao V ≃ 1.9 × 10 erg =
6
1.2 × 10 eV = 1.2 MeV. Por outro lado, a energia t´ermica m´edia dos pr´otons
6
no interior do Sol em uma regi˜ao com temperatura Tc ≃ 15 × 10 K ´e E ≃
−9
k T ≃ 2.1×10 erg = 1.3 keV, ou seja, a energia t´ermica m´edia dos pr´otons ´e
cerca de 1000 vezes menor que a energia necess´aria para ultrapassar a barreira
de potencial entre eles, de modo a ocorrer a rea¸c˜ao (6.10). A probabilidade
de penetra¸c˜ao desta barreira pode ser escrita como
1/2
−(EG/E)
P ≃ e (6.17)
onde EG ´e a energia de Gamow dos pr´otons, dada por
2 2 2 −7
EG = 2 π α c mr ≃ 7.9 × 10 erg = 0.49 MeV (6.18)
onde α = 1/137 ´e a constante de estrutura fina, e mr = mp/2 ´e a massa re-
−9
duzida dos pr´otons. Considerando os valores de EG e E, temos P ≃ 3.8×10 .

---

## Página 181

Interiores Estelares 169
Vemos que a probabilidade de penetra¸c˜ao ´e extremamente baixa, embora n˜ao
seja nula, mesmo nas condi¸c˜oes do interior do Sol. A rea¸c˜ao realmente ocorre
devido ao efeito do tunelamento quˆantico.
EXEMPLO 6.7 - Neutrinos solares
As rea¸c˜oes nucleares que ocorrem no interior do Sol tˆem como subproduto
neutrinos de el´etrons (νe), que conseguem atravessar todo o Sol sem sofrer
absor¸c˜oes e propagam-se pelo espa¸co. Este ´e um exemplo interessante de
transporte ou transferˆencia de energia: na rea¸c˜ao inicial da cadeia-pp (equa¸c˜ao
6.10), temos inicialmente dois pr´otons com elevada energia cin´etica, uma vez
6
que a temperatura na regi˜ao central do Sol ´e de 15 × 10 K. Esta energia ´e
parcialmente transformada em radia¸c˜ao no final da cadeia-pp, mas parte dela
fica armazenada nos neutrinos. A detec¸c˜ao de neutrinos solares ´e, portanto,
um objetivo importante, uma vez que eles trazem informa¸c˜oes das regi˜oes
internas do Sol que s˜ao inacess´ıveis pela radia¸c˜ao. De fato, al´em dos neutrinos,
apenas os resultados da heliosismologia podem nos dar informa¸c˜oes das regi˜oes
subfotosf´ericas do Sol. A detec¸c˜ao dos neutrinos solares foi iniciada na d´ecada
de 1960 por R. Davis, que construiu um detector no fundo de uma mina de
ouro em Homestake, U.S.A. A detec¸c˜ao ´e indireta: o detector continha tetra-
cloroetileno l´ıquido, e a absor¸c˜ao de neutrinos transformava alguns ´atomos de
Cl em Ar, e este podia ser medido. Mais recentemente, foram constru´ıdos
detectores mais eficientes no Jap˜ao e Canad´a, entre outros.
De modo geral, os resultados iniciais indicavam um fluxo de neutrinos
menor que o esperado pela teoria, o que levou a diversas especula¸c˜oes, inclu-
sive colocando d´uvidas sobre a exatid˜ao das previs˜oes da teoria das rea¸c˜oes
nucleares no Sol. Como ficou claro a partir de 2001, os neutrinos de el´etrons
detectados s˜ao apenas uma parte dos neutrinos que chegam at´e a Terra, ou
seja, parte dos neutrinos de el´etrons que deixam o Sol transforma-se em outros
tipos de neutrinos, os neutrinos de m´uons (νμ) ou tau (ντ). Este processo, `as
vezes chamado de oscila¸c˜oes de neutrinos n˜ao era conhecido antes dos experi-
mentos com os neutrinos solares. Um papel importante neste problema foi de-
sempenhado pelo SDO (Sudbury Neutrino Observatory) em Ontario, Canad´a,
onde tubos fotomultiplicadores foram instalados em uma esfera geod´esica de
2
18 m de diˆametro contendo ´agua pesada ( H2O), todo o sistema imerso em
´agua comum (figura 6.1).

---

## Página 182

170 Transporte de Energia em Astrof´ısica
Figura 6.1 - Detector do observat´orio de neutrinos SNO no Canad´a.
O detector est´a a uma profundidade de cerca de 2 km, e os neutrinos
interagem com os n´ucleos da ´agua pesada de trˆes maneiras principais: (a) O
2
neutrino pode quebrar o n´ucleo do H em seus componentes p e n; o nˆeutron
combina-se com outro deut´erio, produzindo radia¸c˜ao que libera um el´etron.
˘
Este, acelerado, emite radia¸c˜aoCerenkov, que ´e detectada. Este processo ´e
chamado “quebra de deut´erio”, e pode ocorrer com os trˆes tipos de neutrinos,
νe, νμ e ντ. (b) O segundo processo, chamado de “absor¸c˜ao de neutrinos”,
ocorre somente com os neutrinos de el´etrons, νe. Neste caso, um nˆeutron ab-
sorve o neutrino, transformando-se em um pr´oton e em um el´etron energ´etico,
˘
que tamb´em pode emitir radia¸c˜aoCerenkov detect´avel. (c) Na terceira pos-
sibilidade, mais rara, os nˆeutrinos (νe, νμ ou ντ) podem colidir diretamente
com el´etrons, os quais podem tamb´em emitir radia¸c˜ao. Portanto, com este
detector os trˆes tipos de neutrinos podem ser detectados, ao contr´ario dos
experimentos iniciais, que somente detectavam os neutrinos de el´etrons.
O fluxo total de neutrinos solares, detectado na Terra pelo processo de
6 −2 −1
quebra de deut´erio, ´e da ordem de f(ν) ≃ 5.09×10 cm s , compreendendo
neutrinos νe, νμ e ντ. Por outro lado, o processo de absor¸c˜ao de neutrinos,
6
sens´ıvel aos neutrinos de el´etrons νe, tem como resultado f(νe) ≃ 1.75 × 10
−2 −1
cm s . Portanto, a maior parte (cerca de 2/3) do fluxo refere-se aos
6
neutrinos dos tipos νμ e ντ, ou seja, f νμ + ντ ≃ f(ν) − f(νe) ≃ 3.34 × 10
−2 −1
cm s . Supondo que os fluxos dos neutrinos νμ e ντ seja semelhante, este

---

## Página 183

Interiores Estelares 171
6 −2 −1
fluxo equivale a f(νμ) ≃ f(ντ) ≃ 1.67 × 10 cm s .
10
Considerando que o raio do Sol ´e R⊙ = 6.96 × 10 cm e que a distˆancia
13
m´edia entre a Terra e o Sol ´e dT = 1.5 × 10 cm, vemos que o fluxo total de
2 11
neutrinos na superf´ıcie do Sol deve ser F(ν) ≃ f(ν) (dT/R⊙) ≃ 2.36 × 10
−2 −1
cm s . Os neutrinos movem-se com a velocidade da luz, de modo que
levam um tempo t1 ≃ R⊙/c ≃ 2.3 s para escapar do Sol, e um tempo t2 ≃
13 10
1.5 × 10 /3 × 10 ≃ 500 s ou cerca de 8.3 minutos para chegar at´e a Terra.
˜
6.2.4 A TAXA DE PRODUC¸AO DE ENERGIA NUCLEAR
′
Seja ǫ a taxa de produ¸c˜ao de energia nuclear em uma estrela, ou seja,
n
a energia produzida pela fus˜ao nuclear por unidade de volume e por unidade
−3 −1 3
de tempo, medida em erg cm s ou W/m . Chamando R o n´umero de
rea¸c˜oes nucleares por unidade de volume e tempo, temos
′ 2
ǫ ≃ R ∆m c (6.19)
n
Figura 6.2 - Taxas de produ¸c˜ao de energia para a cadeia pp e o ciclo CNO.
onde ∆m ´e o defeito de massa, ou seja, a diferen¸ca entre as massas dos
reagentes e a massa dos produtos. A taxa R pode ser colocada na forma
2 ν ′ 2 ν
R ∝ ρ T , de modo que ǫ ∝ ρ T , onde ν ´e um expoente que depende
n
do tipo de rea¸c˜ao nuclear considerado. Por exemplo, para a cadeia pp e o
ciclo CNO obtemos os resultados mostrados na figura 6.2, onde o eixo vertical

---

## Página 184

172 Transporte de Energia em Astrof´ısica
′ 3
d´a a taxa ǫ (W/m ) em fun¸c˜ao da temperatura. Na figura est˜ao indicadas
n
algumas estrelas: o Sol (G2V), uma estrela an˜a vermelha (M0V) e Sirius A
(A0V). No caso da cadeia pp temos ν ≃ 3.8 e para o ciclo-CNO ν ≃ 19.6.
′ 2 3.8 ′ 2 19.6
Temos ent˜ao ǫ (pp) ∝ ρ T e ǫ (CN O) ∝ ρ T . Usando estes ajustes, e
n n
fazendo uma calibra¸c˜ao pelo Sol, obtemos as duas retas mostradas na figura.
′
Vamos considerar mais em detalhes a cadeia-pp. Da figura 6.2 a taxa ǫ
pp
′ 2 3 3 −3 −1
para o Sol ´e aproximadamente ǫ ≃ 10 W/m ≃ 10 erg cm s . Supondo
pp
que esta taxa se aplique a uma regi˜ao interna do Sol com raio R ≃ 0.1 R⊙, a
luminosidade produzida por este processo ´e
4 4
3 ′ 3 ′ 33
Lpp ≃ π R ǫ ≃ π (0.1 R⊙) ǫ ≃ 1.4 × 10 erg/s (6.20)
pp
3 3
que ´e da mesma ordem de grandeza da luminosidade do Sol. Naturalmente,
esta estimativa ´e muito grosseira, e outras fontes nucleares de energia devem
ser consideradas. A taxa de produ¸c˜ao de energia pela cadeia-pp pode tamb´em
ser expressa por unidade de massa, ou seja,
′
ǫ
pp
ǫpp ≃ (6.21)
ρ
′ 3 −3 −1 3 −1
Tomando ǫ ≃ 10 erg cm s e ρ ≃ 150 g/cm , temos ǫpp ≃ 7 erg g
pp
−1
s . A taxa de produ¸c˜ao de energia nuclear pelo processo pp pode ser escrita
aproximadamente (Carroll e Ostlie, 2014)
−5 2 4
ǫpp ≃ 1.08 × 10 ρ X T (6.22)
6
onde X ≃ 0.4 ´e a abundˆancia atual de H no interior solar e T6 ≃ 15 ´e
6
a temperatura em unidades de 10 K. Com esta rela¸c˜ao obtemos a taxa de
−1 −1
produ¸c˜ao de energia ǫpp ≃ 13 erg g s .
EXEMPLO 6.8 - Compara¸c˜ao de taxas de produ¸c˜ao de energia nuclear
Express˜oes mais completas das taxas pp e CNO podem ser encontradas na
literatura, como
1/3
6 2 −2/3 −33.8/T
ǫ ≃ 2.4 × 10 f ψ g X ρ T e 6 (6.23)
pp pp pp 6
onde gpp ´e uma fun¸c˜ao que varia lentamente com a temperatura, X ´e a
3
abundˆancia de H por massa, ρ ´e a densidade em g/cm , T6 ´e a temperatura

---

## Página 185

Interiores Estelares 173
6
em unidades de 10 K, fpp ´e o fator de blindagem, da ordem da unidade para
7
T ∼ 10 K, e ψ ´e um fator tamb´em da ordem da unidade que leva em conta
−1
as diferentes possibilidades de terminar a cadeia pp. A taxa est´a em erg g
−1
s . Podemos aplicar esta equa¸c˜ao e obter uma estimativa mais correta para
3 7
a taxa ǫpp no interior do Sol. Adotando ρ ≃ 150 g/cm , T ≃ 1.6 × 10 K, e
−1 −1
X ≃ 0.7, obtemos ǫpp ≃ 40 erg g s . Para o ciclo CNO em temperaturas
7
na faixa de 10 K um express˜ao mais correta ´e
1/3
27 −2/3 −152.3/T
ǫ ≃ 8.7 × 10 f g X X ρ T e 6 (6.24)
C C C N 6
−1 −1
onde a taxa ´e dada novamante em erg g s , X ´e a abundˆancia do H, XN ´e a
14
abundˆancia do N, fC ´e o fator de blindagem para o ciclo CNO, fC ≃ 1 para
7
temperaturas T ≥ 10 K, e gC = f(T). Com esta equa¸c˜ao podemos estimar
7
ǫC nas mesmas condi¸c˜oes adotadas para do Sol. Com T ≃ 1.6×10 K, ρ ≃ 150
3 −3 −1 −1
g/cm , X ≃ 0.7 e XN ≃ 10 , ǫC ≃ 0.8 erg g s , isto ´e, ǫC ≪ ǫpp.
Uma vez esgotado o H no interior estelar, diminui a produ¸c˜ao de energia
´
nuclear, e a estrela se contrai,aumentando a temperatura.E iniciada ent˜ao a
8 12
queima do He. Para T ≥ 10 K, o He ´e convertido em C, principalmente
4 8
pelo processo triplo-α, onde dois n´ucleos de He produzem um n´ucleo de Be,
4 12
o qual pode eventualmente encontrar outro n´ucleo de He produzindo C. A
taxa para este processo pode ser escrita
11 3 2 −3 −44/T8
ǫ3α ≃ 5.1 × 10 f3α Y ρ T e (6.25)
8
3
onde Y ´e a abundˆancia de He por massa, ρ ´e a densidade em g/cm , T8 ´e a
8
temperatura em unidades de 10 K, e f3α ´e o fator de blindagem, da ordem
8
da unidade para temperaturas da ordem de 10 K. Por exemplo, uma taxa
−1 −1 8
ǫ3α ≃ 40 erg g s pode ser obtida em uma regi˜ao com T ∼ 10 K, Y ≃ 0.3
5 3
e ρ ≃ 2 × 10 g/cm .
Valores t´ıpicos das taxas para os processos pp, CNO e triplo−α em
−1 −1
erg g s est˜ao ilustrados na figura 6.3. Foram usados os valores m´edios:
2 3 −3 2 3 8
ρX ≃ 100 g/cm (cadeia pp), XN ∼ 10 X (ciclo CNO), e ρ Y ≃ 10
2 6
g /cm (processo triplo−α). A posi¸c˜ao aproximada do modelo padr˜ao do Sol
est´a indicada e pode ser comparada com a figura 6.2.

---

## Página 186

174 Transporte de Energia em Astrof´ısica
Figura 6.3 - Compara¸c˜ao de taxas de produ¸c˜ao de energia nuclear.
6.3 EQUIL´IBRIO RADIATIVO
H´a trˆes processos b´asicos de transporte de energia nas estrelas: radia¸c˜ao,
convec¸c˜ao e condu¸c˜ao, dos quais os dois primeiros s˜ao geralmente mais im-
portantes no interior estelar. Os neutrinos tamb´em transportam uma quan-
tidade apreci´avel de energia para fora da estrela, mas sua se¸c˜ao de choque
de intera¸c˜ao com a mat´eria estelar ´e muito baixa, e a energia transportada
por esse processo ´e essencialmente perdida pela estrela. Quando a energia ´e
transportada pela radia¸c˜ao, h´a equil´ıbrio radiativo, e quando o transporte ´e
feito basicamente pela convec¸c˜ao, temos equil´ıbrio convectivo.
No cap´ıtulo 1, se¸c˜oes 1.3 e 1.4, vimos a equa¸c˜ao de transporte radiativo e
sua solu¸c˜ao geral, bem como analisamos os casos opticamente fino e espesso,
e no cap´ıtulo 2, se¸c˜ao 2.1, vimos a lei de Kirchhoff. A equa¸c˜ao de transporte
pode ser escrita
dIν
= kν(Sν − Iν) (6.26)
ds
onde tomamos a coordenada espacial s aumentando para dentro da estrela.
˜
6.3.1 O CAMPO DE RADIAC¸AO NO INTERIOR ESTELAR
Em uma estrela com simetria esf´erica, a equa¸c˜ao de transporte radiativo
pode ser convenientemente escrita em termos das coordenadas r e θ, onde r ´e
a distˆancia ao centro da estrela e θ ´e o ˆangulo entre a dire¸c˜ao de propaga¸c˜ao

---

## Página 187

Interiores Estelares 175
e a dire¸c˜ao radial (figura 6.4). A equa¸c˜ao de transporte (6.26) fica ent˜ao (ver
a equa¸c˜ao 3.18)
cosθ ∂Iν senθ ∂Iν
− = Sν − Iν (6.27)
kν ∂r kνr ∂θ
Figura 6.4 - Coordenadas em simetria esf´erica.
Vamos introduzir o caminho livre m´edio para os f´otons com freq¨uˆencia ν
Λν ≃ 1/kν. Para as intera¸c˜oes (colis˜oes) entre as part´ıculas no interior estelar,
o caminho livre m´edio pode ser escrito Λ ≃ 1/n σ, onde σ ´e a se¸c˜ao eficaz
de intera¸c˜ao. Para colis˜oes de el´etrons ou ´ıons com outros el´etrons ou ´ıons,
−16 −18 2
σ ≃ 10 − 10 cm . Para intera¸c˜oes de f´otons com el´etrons ou ´ıons,
−24 2
σ ≃ 10 cm . Usando a rela¸c˜ao n = ρ/μm¯ H, a densidade num´erica de
part´ıculas no interior estelar ´e, tipicamente,
M/M⊙
24 −3
n ≃ 1.7 × 10 cm (6.28)
3
(R/R⊙)
−7
Com esses valores, os caminhos livres m´edios s˜ao Λ ∼ 10 cm para intera¸c˜oes
entre part´ıculas, e Λ ∼ 1 cm para intera¸c˜oes envolvendo f´otons. Como Λν ≤ 1
cm, de (6.27) temos, ent˜ao,
cos θ ∂Iν Iν
≃ cos θ Λν ≪ Iν (6.29)
kν ∂r R
senθ ∂Iν Λν ∂Iν
≃ senθ ≪ Iν (6.30)
kνr ∂θ R ∂θ

---

## Página 188

176 Transporte de Energia em Astrof´ısica
Portanto, os dois termos do primeiro membro em (6.27) s˜ao pequenos em
rela¸c˜ao a Iν, isto ´e, a diferen¸ca entre Iν e Sν ´e pequena. Isso reflete o fato de
que as condi¸c˜oes f´ısicas no interior estelar n˜ao variam muito ao longo de um
caminho livre m´edio, e o ET ´e uma boa aproxima¸c˜ao. Nesse caso Sν ≃ Bν,
e a intensidade ´e aproximadamente igual `a fun¸c˜ao de Planck. O fluxo, ao
contr´ario, depende de alguma anisotropia no campo de radia¸c˜ao, como vimos
na se¸c˜ao 2.5.2. Podemos ent˜ao considerar os termos do primeiro membro
de (6.27) como perturba¸c˜oes da intensidade em ET. Em uma primeira apro-
xima¸c˜ao, podemos escrever
cos θ dBν
Iν = Bν − (6.31)
kν dr
pois ∂Bν/∂θ = 0. Esta equa¸c˜ao ´e exatamente da forma da equa¸c˜ao (2.70),
com Iν0 = Bν e Iν1 = −(1/kν) (dBν/dr). Usando (6.31), podemos calcular a
intensidade m´edia Jν, o fluxo Fν, a densidade de energia Uν e a press˜ao da
radia¸c˜ao Pr(ν) obtendo as mesmas rela¸c˜oes (2.71) - (2.74)
Jν = Bν (6.32)
4π dBν
Fν = − (6.33)
3kν dr
4π
Uν = Bν (6.34)
c
4π
Pr(ν) = Bν (6.35)
3c
Em termos de quantidades integradas, obtemos para a intensidade espec´ıfica,
a intensidade m´edia, a densidade de energia e a press˜ao da radia¸c˜ao as mesmas
4 4 4
equa¸c˜oes do cap´ıtulo 2, isto ´e B = (a c/4 π) T = (σ/π) T , J = B, U = a T
4
e Pr = (1/3) aT .
´
6.3.2 A MEDIA DE ROSSELAND
A obten¸c˜ao do fluxo integrado ´e mais complexa, pois o fluxo monocro-
m´atico Fν depende do coeficiente de absor¸c˜ao, de acordo com (6.33). Formal-
mente, podemos integrar essa express˜ao, obtendo
∫
∞
4π 1 dBν
F = − dν (6.36)
3 kν dr
0

---

## Página 189

Interiores Estelares 177
Para calcular F precisamos conhecer o coeficiente de absor¸c˜ao kν em fun¸c˜ao
da freq¨uˆencia, o que depende da composi¸c˜ao qu´ımica e das condi¸c˜oes f´ısicas do
´
material no interior estelar de uma forma complexa.E portanto conveniente
definir um coeficiente m´edio kR tal que a equa¸c˜ao (6.33) seja v´alida tamb´em
para as quantidades integradas, isto ´e
4π dB
F = − (6.37)
3kR dr
Igualando (6.36) e (6.37), e considerando que dBν/dr = (dBν/dT) (dT /dr),
com uma express˜ao semelhante para as quantidades integradas, obtemos
∫
∞
1 dBν
dν ∫
∞
1 k dr π 1 dBν
0 ν
= = dν (6.38)
dB 3
kR a c T kν dT
0
dr
4
onde usamos a rela¸c˜ao B = (a c/4 π) T . Portanto, kR ´e uma m´edia harmˆonica
de kν tendo como peso dBν/dT. O c´alculo da opacidade em fun¸c˜ao da
freq¨uˆencia ´e bastante complicado, devido ao grande n´umero de processos de
absor¸c˜ao de radia¸c˜ao importantes no interior estelar, o que justifica a uti-
liza¸c˜ao de valores m´edios. A express˜ao (6.38) pode ser considerada como a
defini¸c˜ao da opacidade m´edia de Rosseland (Rosseland 1924).
At´e agora usamos o coeficiente de absor¸c˜ao por volume kν. Freq¨uente-
2
mente ´e usado o coeficiente de absor¸c˜ao por massa κν, com unidades de cm /g,
tal que kν = κνρ. Valores t´ıpicos para o coeficiente de absor¸c˜ao m´edio de
4 2
Rosseland est˜ao no intervalo 10 > κR(cm /g) > 0.1. De modo geral, κR ≥
2
0.4 cm /g, um limite correspondente ao espalhamento por el´etrons (ver se¸c˜ao
3.5.3). Alguns valores de κR em fun¸c˜ao da densidade est˜ao mostrados na figura
6.5, para uma composi¸c˜ao qu´ımica t´ıpica, X = 0.70, Y = 0.28, Z = 0.02 e
7 5
temperaturas no intervalo 10 > T(K) > 10 . A linha tracejada mostra parte
do modelo padr˜ao do Sol. C´alculos detalhados do coeficiente de absor¸c˜ao
m´edio para a mistura solar produzem resultados semelhantes aos valores da
figura.

---

## Página 190

178 Transporte de Energia em Astrof´ısica
Figura 6.5 - Opacidade de Rosseland.
A figura 6.6 (cf. Ryan e Norton 2010) mostra o coeficiente de absor¸c˜ao
m´edio κ em fun¸c˜ao da temperatura para um g´as de composi¸c˜ao qu´ımica solar.
2 2
Na escala vertical `a esquerda, κ est´a em m /kg, e `a direita est´a em cm /g,
2 2
lembrando que κ(cm /g) = 10 κ(m /kg). O gr´afico tamb´em mostra a varia¸c˜ao
de κ com a densidade do g´as, relacionada ao lado das curvas. Temos que
3 −3 3
ρ(g/cm ) = 10 ρ(kg/m ).
Podemos notar que, para T > 30000 K (log T > 4.5) as curvas tˆem uma
inclina¸c˜ao semelhante, da ordem de −3.5, como indicado pela reta inclinada
`a direita e acima na figura, refletindo o expoente da aproxima¸c˜ao de Kramers
(3.50). Note-se ainda o espalhamento Thomson dado por (3.44), que ´e essen-
2
cialmente constante e igual a κe ≃ 0.32 cm /g, ou log κe ≃ −0.5. Para valores
altos da temperatura, κe ´e um limite inferior para a opacidade.
6.3.3 O FLUXO RADIATIVO
No caso do equil´ıbrio radiativo, o fluxo ´e dado por (6.37). Usando nova-
mente a rela¸c˜ao B(T) o fluxo ´e
4
ac dT 4ac dT
3
F = − = − T (6.39)
3kR dr 3kR dr

---

## Página 191

Interiores Estelares 179
Figura 6.6 - Coeficiente de absor¸c˜ao em fun¸c˜ao da temperatura e densidade.
2
lembrando que a luminosidade radiativa ´e L(r) = 4πr F(r), obtemos
16πac dT
2 3
L(r) = − r T (6.40)
3kR dr
desta rela¸c˜ao, podemos escrever para o gradiente de temperatura radiativo
dT 3kR 1 L(r)
= − (6.41)
3 2
dr 4ac T 4πr
As equa¸c˜oes (6.39)–(6.41) exprimem a condi¸c˜ao de equil´ıbrio radiativo e cons-
tituem uma das equa¸c˜oes b´asicas da estrutura estelar na forma euleriana. Na
equa¸c˜ao de equil´ıbrio radiativo, vemos que, quanto maior a opacidade, maior
o gradiente de temperatura que pode ser mantido na estrela. Por outro lado,
para uma dada opacidade, quanto maior o gradiente de temperatura, maior
ser´a o fluxo de energia.

---

## Página 192

180 Transporte de Energia em Astrof´ısica
EXEMPLO 6.9 - Gradientes de temperatura no interior do Sol
No modelo padr˜ao do Sol, pode-se estimar um intervalo de gradientes de
−4 −5
temperatura dado por 5 × 10 > |dT /dr| (K/cm) > 5 × 10 . Em regi˜oes
7 3 2 −4
com T ≃ 10 K e ρ ≃ 40 g/cm , temos κR ≃ 1 cm /g e dT /dr ≃ −5 × 10
K/cm, de modo que o fluxo integrado dado por (6.45) ´e aproximadamente
12 −2 −1
F ≃ 3.8 × 10 erg cm s . Em uma regi˜ao mais distante do centro, onde
6 3 2 −4
T ≃ 10 K e ρ ≃ 0.05 g/cm , temos κR ≃ 60 cm /g, dT /dr ≃ −1 × 10
10 −2 −1
K/cm, e F ≃ 1.0 × 10 erg cm s .
EXEMPLO 6.10 - Gradiente de temperatura radiativo
Vamos definir o gradiente radiativo ∇ad como
) )
d ln T P dT
∇rad = = (6.42)
d ln P T dP
rad rad
Em uma estrela em que o transporte de energia ´e puramente radiativo, con-
siderando dT /dr = (dT /dP) (dP/dr) e usando a equa¸c˜ao de equil´ıbrio hidros-
t´atico (5.33) temos
2
P dT r
∇ad =
T dr −G M ρ
com a equa¸c˜ao (6.41) obtemos
2
P r 3 kR 1 L
∇ad =
3 2
T G M ρ 4 a c T 4 π r
que pode ser escrita
3 kR P
∇ad = L (6.43)
2 4
64 π r ρ g σ T
2
onde usamos g = G M/r e a = 4 σ/c.
6.4 TRANSPORTE CONVECTIVO
A convec¸c˜ao consiste no transporte de energia por movimentos de mat´eria
em grande escala. Ao contr´ario da radia¸c˜ao e da condu¸c˜ao, que sempre
ocorrem, ainda que eventualmente com baixos fluxos, a convec¸c˜ao depende
da existˆencia desses movimentos do g´as. Vamos neste cap´ıtulo examinar as
condi¸c˜oes necess´arias para a existˆencia da convec¸c˜ao em estrelas, e estimar o
fluxo convectivo.

---

## Página 193

Interiores Estelares 181
6.4.1 INSTABILIDADE CONVECTIVA
Podemos considerar o g´as no interior estelar como um sistema em uma
situa¸c˜ao de equil´ıbrio. Nesse caso, o estado macrosc´opico do sistema ´e in-
dependente do tempo, a n˜ao ser por flutua¸c˜oes ou perturba¸c˜oes a partir da
posi¸c˜ao de equil´ıbrio. Vamos considerar um elemento de massa em equil´ıbrio
em uma regi˜ao com press˜ao P e densidade ρ (figura 6.7). Devido `as flu-
tua¸c˜oes no interior estelar, o elemento pode momentaneamente sofrer uma
perturba¸c˜ao que o desloque para baixo, por exemplo, em uma regi˜ao onde
a press˜ao no meio ´e P + dP e a densidade, ρ + dρ. Se o elemento sofrer a
a¸c˜ao de uma for¸ca restauradora para cima que o empurre de volta `a posi¸c˜ao
original, ser´a estabelecido o equil´ıbrio e n˜ao haver´a movimento de mat´eria em
grande escala. Ao contr´ario, se ap´os o deslocamento a for¸ca exercida tiver a
dire¸c˜ao e o sentido do movimento, este ser´a amplificado, resultando movimen-
tos em grande escala e, portanto, em convec¸c˜ao. Nesse caso, dizemos que h´a
instabilidade convectiva.
Figura 6.7 - Elementos convectivos.
Vamos determinar a condi¸c˜ao necess´aria para a existˆencia da convec¸c˜ao.
Ap´os alcan¸car a regi˜ao de maior press˜ao, o elemento tende a se contrair rapi-
damente at´e que seja eliminado o excesso de press˜ao, isto ´e, at´e que seja
reestabelecido o equil´ıbrio de press˜ao. Esse processo ´e t˜ao r´apido que prati-
camente nenhuma energia ´e trocada entre o elemento e o meio, isto ´e, o pro-
cesso ´e adiab´atico. Assim, a densidade do elemento sofrer´a a varia¸c˜ao ρ →
ρ+(dρ/dP)ad dP. Para que o movimento do elemento tenha continuidade, este
dever´a ser mais denso que o meio. A condi¸c˜ao para existˆencia da convec¸c˜ao,
ou condi¸c˜ao de instabilidade convectiva ´e, ent˜ao, ρ + (dρ/dP)ad dP > ρ + dρ,
ou seja

---

## Página 194

182 Transporte de Energia em Astrof´ısica
( )
dρ dρ
< (6.44)
dP dP
ad
Portanto, h´a convec¸c˜ao se a densidade na regi˜ao considerada variar mais lenta-
mente com a press˜ao que no caso adiab´atico. Com o mesmo racioc´ınio, e
considerando que nas duas posi¸c˜oes da figura a temperatura ´e T e T + dT,
o elemento de volume ter´a uma temperatura T + (dT /dP)ad dP. Para haver
instabilidade convectiva ´e necess´ario que T + (dT /dP)ad dP < T +dT, ou seja
( )
dT dT
> (6.45)
dP dP
ad
Este ´e o crit´erio de Schwarzschild para ocorrˆencia de convec¸c˜ao, isto ´e, o
gradiente de temperatura deve ser superadiab´atico. Este crit´erio aplica-se a
um g´as com composi¸c˜ao qu´ımica homogˆenea. Se houver varia¸c˜oes no peso
molecular μ, pode-se definir um gradiente dμ/dP, que deve ser adicionado ao
gradiente adiab´atico, o que constitui o crit´erio de Ledoux.
EXEMPLO 6.11 - Instabilidade convectiva no Sol
Podemos verificar se a condi¸c˜ao de instabilidade convectiva (6.45) ´e satisfeita
em algumas regi˜oes do interior solar. Para isto, vamos considerar duas regi˜oes,
uma mais pr´oxima da regi˜ao central e outra mais afastada. Os valores de
dT /dP e (dT /dP)ad podem ser obtidos a partir de modelos num´ericos, como
relacionado em Cox (2000, p. 342 e 349). Usando dados desta fonte temos
para a regi˜ao mais interna, onde r = 0.3 a 0.4 R⊙, os gradientes
6
dT ∆T (6.42 − 4.89) × 10
−10 2
≃ ≃ ≃ 4.8 × 10 K/(dina/cm )
15
dP ∆P (5.29 − 2.10) × 10
6
dT 2 T (0.4) (5 × 10 ) 2
−10
≃ ≃ ≃ 6.7 × 10 K/(dina/cm )
15
dP ad 5 P 3 × 10
onde usamos γ = 5/3 para a raz˜ao dos calores espec´ıficos. A condi¸c˜ao
(6.45) n˜ao ´e satisfeita, e a regi˜ao mais interna do Sol n˜ao ´e convectiva. Con-
siderando agora uma regi˜ao mais externa, pr´oxima das camadas fotosf´ericas,
onde τ(5000˚A)≃ 3, temos

---

## Página 195

Interiores Estelares 183
dT ∆T 7590 − 7280 310
−2 2
≃ ≃ ≃ ≃ 3.8 × 10 K/(dina/cm )
5
dP ∆P (1.525 − 1.444) × 10 8100
dT 2 T (0.4) (7400)
−2 2
≃ ≃ ≃ 2.0 × 10 K/(dina/cm )
5
dP ad 5 P 1.5 × 10
a condi¸c˜ao (6.45) ´e satisfeita, e a regi˜ao mais externa do Sol ´e convectiva.
EXEMPLO 6.12 - Transporte de energia no Sol
Nas regi˜oes mais internas do Sol, a temperatura ´e extremamente alta (Tc ≃
6
15×10 K), de modo que os ´atomos est˜ao ionizados. Nesse caso, como n˜ao h´a
el´etrons ligados aos n´ucleos, o meio ´e essencialmente transparente `a radia¸c˜ao,
`
havendo apenas espalhamentos por parte dos el´etrons ou ´ıons.A medida que
nos afastamos do n´ucleo, a temperatura decresce, mais el´etrons permanecem
ligados, e o g´as passa de transparente (opticamente fino) a opaco (opticamente
espesso). Em um raio da ordem de 500 000 km, praticamente todos os f´otons
das regi˜oes internas s˜ao absorvidos, ou seja, praticamente n˜ao h´a transporte
radiativo. Entretanto, nesta regi˜ao o g´as sofre instabilidade convectiva, e a
energia das partes mais internas passa a ser transportada at´e a superf´ıcie pela
convec¸c˜ao (figura 6.8).
Figura 6.8 - Esquema do transporte de energia no Sol.

---

## Página 196

184 Transporte de Energia em Astrof´ısica
Neste processo, as c´elulas mais quentes movem-se para cima, enquanto
que as mais frias movem-se para dentro do Sol, de modo que h´a um trans-
porte de energia de dentro para fora. Este processo continua at´e a regi˜ao da
fotosfera, onde a baixa densidade de g´as impede novos deslocamentos. Por
outro lado, f´otons produzidos nesta regi˜ao encontram pouca dificuldade em
sua propaga¸c˜ao, e a radia¸c˜ao consegue escapar do Sol.
ˆ ˜
6.4.2 OCORRENCIA DE CONVECC¸AO EM ESTRELAS
No caso de uma expans˜ao adiab´atica de um g´as perfeito podemos obter
rela¸c˜oes simples entre a press˜ao P, a temperatura T e a densidade ρ (ver por
exemplo as equa¸c˜oes 5.20). Em particular podemos escrever
dP γ dT
+ = 0 (6.46)
P 1 − γ T
onde γ ´e a raz˜ao dos calores espec´ıficos a press˜ao e volume constantes. Para as
estrelas mais massivas (M ≫ M⊙), a press˜ao da radia¸c˜ao Pr pode ser impor-
tante com rela¸c˜ao `a press˜ao do g´as Pg. Considerando a expans˜ao adiab´atica
de um g´as ideal, n˜ao degenerado, monoatˆomico, levando em conta os efeitos
da press˜ao da radia¸c˜ao, esta equa¸c˜ao pode ser escrita
dP Γ2 dT
+ = 0 (6.47)
P 1 − Γ2 T
onde usamos o expoente adiab´atico de Chandrasekhar Γ2, de maneira a con-
servar a forma da equa¸c˜ao (6.46). Temos ent˜ao
( )
dT T Γ2 − 1
= (6.48)
dP P Γ2
ad
( ) ( )
dT T Γ2 − 1 dP
= (6.49)
dr P Γ2 dr
ad ad
Por exemplo, para um g´as monoatˆomico sem press˜ao da radia¸c˜ao, Γ2 = γ =
5/3, (dT /dP)ad = 2/5 (T /P). Usando (6.48), a condi¸c˜ao para existˆencia de
convec¸c˜ao fica
dT T Γ2 − 1
> (6.50)
dP P Γ2
com a equa¸c˜ao de equil´ıbrio hidrost´atico (5.33), obtemos

---

## Página 197

Interiores Estelares 185
2
dT r dT
= − (6.51)
dP GM ρ dr
de modo que a condi¸c˜ao para haver convec¸c˜ao ´e
∣ ∣
∣dT ∣ Gμ m βM Γ − 1
H 2
∣ ∣
> (6.52)
∣ ∣ 2
dr k r Γ2
onde β = Pg/P = Pg/(Pg + Pr) e usamos a equa¸c˜ao de estado. Considerando
os efeitos da ioniza¸c˜ao, o coeficiente Γ2 diminui, o mesmo ocorrendo com o
fator (Γ2 − 1)/Γ2 = 1 − (1/Γ2), isto ´e, o membro direito de (6.52) diminui,
favorecendo a ocorrˆencia da convec¸c˜ao. Por outro lado, aumentando o gradi-
ente de temperatura estaremos em princ´ıpio tamb´em favorecendo a convec¸c˜ao.
Como o fluxo radiativo ´e Frad kR ∝ (dT /dr) (ver equa¸c˜ao 6.39), vemos que
fluxos altos ou elevadas opacidades radiativas favorecem em ´ultima an´alise a
convec¸c˜ao.
−
Nas camadas mais externas das estrelas, os efeitos da opacidade (H e H)
e da ioniza¸c˜ao (H e He) s˜ao especialmente importantes, causando a existˆencia
de zonas de convec¸c˜ao, exceto para as estrelas muito quentes e massivas, em
que o H j´a est´a ionizado, mesmo nas camadas externas. As estrelas muito frias
tˆem tamb´em zonas externas convectivas, devido `a dissocia¸c˜ao da mol´ecula de
H2. Nessas estrelas, as zonas de convec¸c˜ao de H e He podem estender-se at´e a
regi˜ao central. Em algumas estrelas, particularmente as mais massivas, em que
ocorre o ciclo CNO de produ¸c˜ao de energia, as fontes de energia nuclear est˜ao
−2
muito concentradas na regi˜ao central. Como F ∝ r , os fluxos necess´arios
para manter uma configura¸c˜ao est´avel s˜ao muito altos, resultando igualmente
em uma zona de convec¸c˜ao central.
A localiza¸c˜ao das regi˜oes convectivas depende n˜ao apenas da massa da es-
trela, mas tamb´em de sua composi¸c˜ao qu´ımica, condi¸c˜oes de ioniza¸c˜ao, fontes
de opacidade, e do valor local do gradiente de temperatura. Em princ´ıpio,
nessas regi˜oes o crit´erio de Schwarzschild ´e satisfeito. Entretanto, devido
`a acelera¸c˜ao sofrida pelos elementos convectivos, estes podem adquirir uma
velocidade tal que ultrapassam essas regi˜oes, estendendo as dimens˜oes das
regi˜oes convectivas (overshooting). De modo geral, as estrelas mais massivas
s˜ao convectivas nas regi˜oes centrais e radiativas nas camadas mais externas,
enquanto nas estrelas menos massivas ocorre o inverso. Para estrelas com

---

## Página 198

186 Transporte de Energia em Astrof´ısica
M > 1 M⊙, aproximadamente, as regi˜oes internas convectivas s˜ao progressi-
vamente mais extensas. Por exemplo, para uma estrela com 3 M⊙, cerca de
20% da massa total est´a localizada na regi˜ao convectiva interna; para uma
estrela com 20 M⊙ esse valor chega a 50%. No outro extremo, para estrelas
com massas abaixo da massa solar, as regi˜oes convectivas localizam-se essen-
cialmente nas camadas mais externas, abaixo das quais praticamente toda a
massa da estrela j´a est´a localizada. Nas estrelas com massas muito pequenas,
da ordem ou abaixo de 0.2 M⊙ as regi˜oes convectivas externas aproximam-se
do centro, podendo eventualmente ser totalmente convectivas.
Figura 6.9 - Granula¸c˜ao solar.
O Sol encontra-se aproximadamente na regi˜ao de transi¸c˜ao e ´e essen-
cialmente radiativo no interior e convectivo nas camadas mais externas, o
que ´e indicado pela granula¸c˜ao fotosf´erica. Isto pode ser visto na figura 6.9,
que mostra uma parte da superf´ıcie do Sol, destacando uma mancha solar
e a granula¸c˜ao t´ıpica das c´elulas convectivas. A energia ´e transportada das
regi˜oes inferiores da atmosfera para as regi˜oes mais superficiais, e as ´areas
mais claras indicam o g´as que sobe, enquanto que as regi˜oes mais escuras, ou
faixas intergranulares, mostram o g´as mais frio que se move para baixo na
atmosfera. Os grˆanulos, ou c´elulas convectivas, tˆem dimens˜oes tipicamente de
1000 km, e dura¸c˜ao de cerca de 10 a 20 minutos.

---

## Página 199

Interiores Estelares 187
A figura 6.10 mostra de maneira aproximada a posi¸c˜ao das regi˜oes ra-
diativas e convectivas para estrelas da seq¨uˆencia principal de idade zero. A
ordenada mostra a fra¸c˜ao da massa total da estrela em fun¸c˜ao da massa total,
para estrelas com massas abaixo de 40 M⊙.
Figura 6.10 - Regi˜oes radiativas e convectivas.
EXEMPLO 6.13 - Convec¸c˜ao em estrelas massivas
Vamos considerar duas regi˜oes no interior de uma estrela com M∗ = 2.5 M⊙,
L∗ = 21 L⊙ e R∗ = 1.6 R⊙. Na regi˜ao 1 adotamos uma massa fracional
f1 = M1/M∗ = 0.1, ou seja M1 = 0.25 M⊙, e na regi˜ao 2 adotamos f2 =
M2/M∗ = 0.6, ou seja M2 = 1.5 M⊙. Pela figura 6.10 devemos esperar que
a regi˜ao 1 seja convectiva, enquanto que na regi˜ao 2 a radia¸c˜ao deve ser o
processo dominante. Um modelo para esta estrela (Novotny 1973, p. 468)
7 16 2
produz os resultados T1 ≃ 1.6×10 K, P1 ≃ 9.1×10 dina/cm e (dT /dP)1 ≃
−11 2 6
8.0 × 10 K /(dina/cm ) para a regi˜ao 1, e T2 ≃ 9.0 × 10 K, P2 ≃ 1.4 ×
16 2 −10 2
10 dina/cm e (dT /dP)2 ≃ 1.8 × 10 K /(dina/cm ) para a regi˜ao 2. O
gradiente adiab´atico pode ser estimado por ∇ad ≃ 2/5 (T /P) com o resultado
−11 2 −10 2
∇ad ≃ 7.0×10 K /(dina/cm ) (regi˜ao 1) e ∇ad ≃ 2.6×10 K /(dina/cm )

---

## Página 200

188 Transporte de Energia em Astrof´ısica
(regi˜ao 2). Portanto, o crit´erio para existˆencia de convec¸cao dT /dP > ∇ad
´e satisfeito na regi˜ao 1, que ´e convectiva, e n˜ao satisfeito na regi˜ao 2, que ´e
radiativa. Resultados semelhantes podem ser obtidos para o gradiente dT /dr
usando o crit´erio dado por (6.52), levando em conta a composi¸c˜ao qu´ımica, a
press˜ao da radia¸c˜ao, e os efeitos da ioniza¸c˜ao, que afetam os parˆametros μ, β
e Γ2, respectivamente.
6.4.3 O FLUXO CONVECTIVO
O c´alculo do fluxo convectivo ´e complexo, n˜ao havendo para isso uma
´
teoria completa e geral.E freq¨uentemente usada a teoria do comprimento de
mistura, uma descri¸c˜ao fenomenol´ogica (ver por exemplo Kippenhahn et al.
2012). De acordo com essa teoria, cada elemento de massa que se desloca
para cima ou para baixo viaja uma certa distˆancia m´edia λ (o “comprimento
de mistura”) antes de desaparecer, isto ´e, antes de se misturar com o meio e
perder sua identidade.
Sejam P, ρ e T os valores de press˜ao, densidade e temperatura em um
certo n´ıvel r, e P, ρ − δρ e T + δT os valores correspondentes de um elemento
de massa convectivo em r. Nesse caso, δρ > 0 e δT > 0 para um elemento
subindo, e δρ < 0 e δT < 0 para um elemento descendo. Para fixar id´eias, va-
mos supor que o elemento esteja subindo. O excesso de energia por unidade de
3
volume associado ao elemento ´e ρcPδT (erg/cm ), onde cP ´e o calor espec´ıfico
−1 −1
a press˜ao constante, por unidade de massa, cP = (∂Q/∂T)P (erg g K ).
Chamando v a velocidade do elemento (v > 0 ao subir, e v < 0 ao descer), o
fluxo convectivo ´e
Fc ≃ ρ v cP δT (6.53)
−2 −1
com unidades erg cm s . A for¸ca por unidade de volume exercida sobre
o elemento ´e gδρ, onde g ´e a acelera¸c˜ao local da gravidade. Considerando
que o elemento viaja uma distˆancia m´edia λ at´e se dissolver, podemos obter
express˜oes aproximadas para v e δT, dadas por
∣ ( ) ∣
2 ∣ ∣
gλ dT dT
2 ∣ ∣
v ≃ − (6.54)
∣ ∣
4T dr dr
el
∣ ( ) ∣
∣dT dT ∣ λ
∣ ∣
δT ≃ − (6.55)
∣ ∣
dr dr 2
el

---

## Página 201

Interiores Estelares 189
(cf. Maciel 1999), onde (dT /dr)el a varia¸c˜ao de temperatura no elemento. Se
n˜ao haver trocas de energia entre o elemento e o meio, (dT /dr)el ≃ (dT /dr)ad
de modo que o fluxo pode ser escrito
( ) ∣ ( ) ∣
1/2 2 3/2
g λ ∣dT dT ∣
∣ ∣
Fc ≃ ρ cP − (6.56)
∣ ∣
T 4 dr dr
ad
6.4.4 O COMPRIMENTO DE MISTURA
Na express˜ao (6.56), apenas o comprimento de mistura λ n˜ao est´a, apa-
rentemente, ligado `as vari´aveis P, ρ etc. da estrutura estelar. De fato, em
princ´ıpio, pode-se considerar λ como um parˆametro livre, obtendo-se em geral
valores da ordem da escala de altura da press˜ao. A teoria do comprimento
de mistura ´e bastante complexa, e freq¨uentemente s˜ao usadas aproxima¸c˜oes
para a determina¸c˜ao desse parˆametro. Da equa¸c˜ao de equil´ıbrio hidrost´atico,
2
obtemos dP/P ≃ −(GM ρ/P r ) dr. Tomando λ como a distˆancia em que
|dP|/P ≃ 1, temos
2
P r
λ ≃ (6.57)
G M ρ
EXEMPLO 6.14 - Comprimento de mistura no Sol
15 2
Considerando valores t´ıpicos para o interior solar, P ∼ 10 din/cm , r ∼
10 33 3 10
3 × 10 cm, M ∼ 10 g, ρ ∼ 1.4 g/cm , obtemos λ ∼ 10 cm. Note que,
nesse caso, a condi¸c˜ao (6.45) n˜ao ´e satisfeita, e a convec¸c˜ao n˜ao ocorre. Para
5 2 10 33
a atmosfera solar, com P ∼ 10 din/cm , r ∼ 7 × 10 cm, M ∼ 2 × 10 g,
−7 3 7
ρ ∼ 10 g/cm , e λ ∼ 4 × 10 cm. Nesse caso, a condi¸c˜ao de convec¸c˜ao ´e
satisfeita, pelo menos em algumas camadas da atmosfera solar.
6.4.5 O GRADIENTE DE TEMPERATURA
Analogamente ao que foi feito na se¸c˜ao anterior para o comprimento de
mistura, vamos estimar em ordem de grandeza o fluxo convectivo, a par-
tir da rela¸c˜ao (6.56). O comprimento de mistura ´e dado aproximadamente
10
por λ ∼ 1 × 10 R/R⊙ cm. Considerando ainda a densidade m´edia ¯ρ ≃
3 3
1.4 (M/M⊙)/(R/R⊙) g/cm e a temperatura no interior das estrelas T ≃
7 8 −1 −1
1.6×10 (M/M⊙)/(R/R⊙) K, e tomando cp ∼ 2×10 erg g K , obtemos,
de (6.56)

---

## Página 202

190 Transporte de Energia em Astrof´ısica
∣ ( ) ∣
3/2
∣dT dT ∣ M/M
26 ⊙
∣ ∣
Fc ≃ 4.8 × 10 − (6.58)
∣ ∣ 3/2
dr dr (R/R )
ad ⊙
−2 −1
com unidades erg cm s . O fluxo total no interior ´e
L
F = (6.59)
2
4π r
33
Com L ∼ 3.8 × 10 (L/L⊙) erg/s, usando o gradiente de temperatura m´edio
−4 2
dT /dR ≃ −T /R ≃ −2.3 × 10 (M/M⊙)/(R/R⊙) K/cm, al´em das equa¸c˜oes
(6.58) e (6.59), podemos escrever
( ) R 5/3 L 2/3
2/3
( ) ( )
Fc R L
−7 ⊙ ⊙
ξ ≃ 3.4 × 10 (6.60)
M 5/3
F ( )
M⊙
onde definimos a raz˜ao
dT dT
| − ( )ad|
dr dr
ξ = (6.61)
dT
| |
dr
para uma regi˜ao t´ıpica no interior do Sol
( )
2/3
Fc
−7
ξ ≃ 3.4 × 10 (6.62)
F
−7
No interior solar, a raz˜ao ξ ≤ 10 ≪ 1, isto ´e, mesmo se a convec¸c˜ao trans-
portar toda a energia (F = Fc), a diferen¸ca entre os gradientes ´e insigni-
ficante. Em outras palavras, ´e razo´avel admitir que o gradiente real dT /dr
´e essencialmente igual ao adiab´atico (dT /dr)ad. Isso reflete o fato de que
a energia t´ermica no interior ´e grande em rela¸c˜ao `a energia que precisa ser
transportada, de modo que pequenos desvios do gradiente adiab´atico s˜ao sufi-
cientes para que essencialmente todo o fluxo seja transportado pela convec¸c˜ao.
Nesse caso, n˜ao precisamos da equa¸c˜ao (6.56) para o c´alculo do fluxo, pois o
fluxo total (6.59) ´e convectivo. Para a atmosfera solar, ao contr´ario, a cons-
tante em (6.62) ´e muito maior que na regi˜ao interna, pois nas atmosferas o
2
produto ρλ ´e muito maior que no interior. De fato, valores t´ıpicos para a
2 2/3
raz˜ao acima s˜ao ξ ∼ 10−10 (Fc/F) , de modo que dT /dr precisa ser muito
maior que (dT /dr)ad para que a fra¸c˜ao Fc/F ≃ 1. Como Frad ∝ dT /dr, a
maior parte da energia ser´a transportada pela radia¸c˜ao; assim, mesmo em uma
zona convectiva na atmosfera, a radia¸c˜ao ser´a provavelmente um mecanismo
importante.

---

## Página 203

Interiores Estelares 191
Em conclus˜ao, nos modelos de interiores estelares, ´e necess´aria a veri-
fica¸c˜ao da condi¸c˜ao de instabilidade convectiva (6.44) ou (6.45). Se a con-
vec¸c˜ao for importante, ela ser´a dominante no transporte, e o fluxo poder´a ser
calculado por (6.59). Nesse caso, o gradiente de temperatura ´e essencialmente
igual ao gradiente adiab´atico, n˜ao sendo necess´ario usar a equa¸c˜ao (6.56).
6.5 CONDUC¸ ˜AO EM ESTRELAS
No equil´ıbrio radiativo, o fluxo de energia ´e proporcional ao gradiente
de temperatura. A rela¸c˜ao entre o fluxo F e o gradiente dT /dr depende
do processo de transporte de energia. Na condu¸c˜ao eletrˆonica, o transporte
de energia ´e feito pelos movimentos t´ermicos dos el´etrons e ´atomos. Nos
interiores estelares – especialmente em regi˜oes onde os el´etrons se encontram
degenerados – esse processo pode ser significativo. Vamos examinar esse pro-
blema e estimar de maneira muito grosseira o fluxo condutivo (ver por exemplo
Swihart 1972, Kippenhahn et al. 2012).
´
6.5.1 O CAMINHO LIVRE MEDIO
O caminho livre m´edio dos el´etrons para colis˜oes com part´ıculas de tipo
i pode ser escrito como
∑
1
= ni σi (6.63)
Λ
i
2
onde ni ´e a densidade das part´ıculas de tipo i e σi ≃ π r ´e a se¸c˜ao de choque
c
2
de colis˜ao, rc ´e o raio de colis˜ao, onde |Ep(rc)| = (3/2) k T = e /rc. Para in-
2 4 2 2
tera¸c˜oes el´etron-el´etron e el´etron-pr´oton rc = 2 e /3 k T e σ ≃ 4 π e /9 k T ≃
−6 −2 2
3.9 × 10 T cm . Com ne ≃ np, Λ ≃ 1/2 ne σ, obtendo
2 2 2
9k T T
5
Λ ≃ ≃ 1.3 × 10 cm (6.64)
4
8π e ne ne
−3
onde T est´a em K e ne em cm . Considerando a massa m´edia por el´etron
μe = 2/(1 + X), onde X ´e a abundˆancia de H por massa (Exerc´ıcio 6.3)
2 2 2
9k mH T T
−19
Λ ≃ ≃ 4.3 × 10 (6.65)
4
4π e ρ (1 + X) ρ (1 + X)
onde Λ est´a em cm. Por exemplo, em um ponto no interior do Sol, com
7 2 3 −7
T ∼ 10 K, ρ ∼ 10 g/cm e X ∼ 0.70, de modo que Λ ∼ 2.5×10 cm. Esse

---

## Página 204

192 Transporte de Energia em Astrof´ısica
valor ´e muito menor que o raio da estrela, Λ ≪ R, o que limita a importˆancia
da condu¸c˜ao nos interiores estelares. De fato, vimos que o caminho livre m´edio
−7
para intera¸c˜oes part´ıcula-part´ıcula Λpp ∼ 10 cm, e para intera¸c˜oes f´oton-
part´ıcula ´e Λf p ∼ 1 cm, ou seja, Λpp ≪ Λf p. Como o fluxo transportado
´e proporcional a Λ, o fluxo radiativo deve ser em geral muito maior que o
condutivo.
6.5.2 O FLUXO CONDUTIVO
Consideremos um elemento de se¸c˜ao dA perpendicular `a dire¸c˜ao r em
uma regi˜ao no interior de uma estrela (figura 6.11). Os el´etrons, admitidos
n˜ao degenerados, atravessam dA vindos de todas as dire¸c˜oes. Considerando
uma dire¸c˜ao particular r, as part´ıculas vindas do interior s˜ao caracter´ısticas
de regi˜oes mais quentes que aquelas provenientes da dire¸c˜ao oposta. Nesse
caso, essas part´ıculas transportam mais energia, havendo ent˜ao um fluxo re-
sultante na dire¸c˜ao de r crescente, que ´e o fluxo condutivo. Admitindo uma
distribui¸c˜ao maxwelliana para os el´etrons, e chamando novamente Λ o cam-
inho livre m´edio dos el´etrons, aqueles que atravessam dA vˆem, em m´edia, de
regi˜oes caracterizadas por r ± Λ/2.
Figura 6.11 - geometria do fluxo condutivo.
Nesse caso, o fluxo condutivo ser´a
√
3
3 k dT
1/2
Fcond ≃ − Λ ne T (6.66)
16 me dr
substituindo o caminho livre m´edio (6.65), obtemos

---

## Página 205

Interiores Estelares 193
5/2 7/2
3 k dT dT
5/2 −6 5/2 −2 −1
Fcond ≃ − T ≃ −3.0×10 T erg cm s (6.67)
1/2
5 4 dr dr
2 πe me
7 −4
Como exemplo, para T ∼ 10 K e dT /dr ∼ −1.3 × 10 K/cm, o fluxo
8 −2 −1
condutivo ´e Fcond ∼ 1.2 × 10 erg cm s .
~ ~
O fluxo condutivo pode ser escrito na forma usual, Fcond = −K∇T, ou
dT
Fcond = −K (6.68)
dr
(ver Exemplo 5.13) onde o coeficiente de condutividade t´ermica K ´e dado por
5/2 7/2
3 k
5/2 −6 5/2
K ≃ T ≃ 3.0 × 10 T (6.69)
1/2
5 4
2 π e me
−1 −1 −1 −3 −1
com unidades erg cm s K ou g cm s K . No exemplo temos K ≃
11 −1 −1 −1
9.5×10 erg cm s K . Comparando (6.67) para o fluxo condutivo com
a express˜ao (6.39) para o fluxo radiativo, obtemos a rela¸c˜ao
1/2
Frad T
2
≃ 1.0 × 10 (6.70)
Fcond kR
7 −1
Por exemplo, se T ∼ 10 K e kR ∼ 1 cm , obtemos a raz˜ao Frad/Fcond ≃
5 8 −2 −1
3.2 × 10 . Se Fcond ≃ 1.2 × 10 erg cm s , como obtivemos acima, Frad ≃
13 −2 −1
3.8×10 erg cm s . De modo geral, para as temperaturas e as densidades
de interesse, as varia¸c˜oes de kR s˜ao tais que Frad ≫ Fcond. Se a opacidade
for suficientemente alta, pode ser importante uma corre¸c˜ao no fluxo radiativo
devida `a condu¸c˜ao. Da express˜ao (6.70), vemos que essa corre¸c˜ao pode ser
feita diretamente na opacidade.
6.5.3 A OPACIDADE CONDUTIVA
A express˜ao (6.39) para o fluxo radiativo pode ser escrita:
4ac dT
3
Frad ≃ − T (6.71)
3 κrad ρ dr
onde usamos a opacidade radiativa por massa κrad. Por analogia, vamos
escrever para o fluxo condutivo

---

## Página 206

194 Transporte de Energia em Astrof´ısica
4ac dT
3
Fcond ≃ − T (6.72)
3 κcond ρ dr
onde introduzimos a opacidade condutiva κcond. Comparando (6.72) com
(6.68), vemos que a condutividade definida em (6.69) fica
3
4ac T
K = (6.73)
3 κcond ρ
de modo que a opacidade condutiva ´e
3
4ac T
κcond = (6.74)
3 K ρ
−1
ou κcond ∝ K . Assim como a opacidade radiativa, a opacidade condutiva
2
tem unidades cm /g. Nessas condi¸c˜oes, o fluxo total, incluindo a radia¸c˜ao e
a condu¸c˜ao ´e dado por
4ac dT
3
Ftot = Frad + Fcond = − T (6.75)
3 κtot ρ dr
onde introduzimos a opacidade total κtot dada por
1 1 1
= + (6.76)
κtot κrad κcond
ou seja, κtot ´e uma m´edia harmˆonica entre κrad e κcond. Para κcond ≫ κrad,
κtot ≃ κrad; para κcond ≪ κrad, κtot ≃ κcond. De (6.74) e (6.69), temos
7 4 1/2 1/2 1/2
2 πac e me T T
2 2
κcond = ≃ 10 cm /g (6.77)
7/2
(3k) ρ ρ
7 2 3 3
Como exemplo, para T ∼ 10 K e ρ ∼ 10 g/cm , temos κcond ∼ 3.2 × 10
2 2
cm /g. Nessas condi¸c˜oes κrad ∼ 1 cm /g, κcond ≫ κrad, e a condu¸c˜ao ´e
pouco importante na opacidade total. Note-se que a condu¸c˜ao ´e favorecida
5 3
(baixos valores de κcond), se a densidade for alta (ρ ∼ 10 g/cm para T ∼
7
10 K). Nesse caso, o g´as est´a degenerado, e as equa¸c˜oes acima n˜ao se aplicam
estritamente.

---

## Página 207

Interiores Estelares 195
Figura 6.12 - Varia¸c˜ao da opacidade condutiva.
2
A figura 6.12 mostra a varia¸c˜ao da opacidade condutiva (cm /g) com a
8 5
densidade para um g´as com temperaturas no intervalo 10 > T(K) > 10 ,
usando a express˜ao aproximada (6.77). Essa figura pode ser comparada com
as figuras 6.5 e 6.6 para a opacidade radiativa.
A express˜ao (6.77) pode ser usada para obter estimativas de ordens de
grandeza no caso n˜ao degenerado. O coeficiente num´erico nessa equa¸c˜ao ´e
bastante aproximado, uma vez que n˜ao foram levados em conta detalhes sobre
a composi¸c˜ao qu´ımica do g´as. Considerando o transporte condutivo pelos
el´etrons por meio de colis˜oes com n´ucleos de carga m´edia Z e massa atˆomica
A, uma express˜ao mais correta para a opacidade condutiva ´e
2 1/2
Z /A T
2
κcond ≃ 16 cm /g (6.78)
1 + X ρ
EXEMPLO 6.15 - Condu¸c˜ao por el´etrons degenerados: as an˜as brancas
As mudan¸cas de energia dos el´etrons s´o s˜ao poss´ıveis se os estados quˆanticos
associados `as novas energias estiverem desocupados. Num g´as de el´etrons
degenerados, a maior parte dos n´ıveis de energia est´a completamente cheia e
as colis˜oes s˜ao consideravelmente diminu´ıdas. Nesse caso, os el´etrons tendem
a ocupar as c´elulas do espa¸co de fase com maior energia, de modo que a

---

## Página 208

196 Transporte de Energia em Astrof´ısica
velocidade m´edia ¯v e o caminho livre m´edio Λ aumentam, aumentando com
eles o fluxo condutivo Fcond. Isso pode ser visto na equa¸c˜ao (6.66), embora
a deriva¸c˜ao dessa equa¸c˜ao n˜ao seja estritamente v´alida para um g´as degene-
rado. Nesse caso, o processo ´e t˜ao eficiente que o gradiente de temperatura
dT /dr pode ser essencialmente nulo, isto ´e, a regi˜ao considerada pode ser
essencialmente isot´ermica, como ocorre por exemplo no interior de estrelas de
nˆeutrons. Isso se deve ao fato de que o coeficiente de proporcionalidade de
(6.78), essencialmente a condutividade K, torna-se muito alto.
Nas regi˜oes densas e degeneradas do interior de estrelas evolu´ıdas e em
an˜as brancas a condu¸c˜ao pelos el´etrons pode ser importante. Nesse caso,
o caminho livre m´edio aumenta, decrescendo a opacidade condutiva κcond e
aumentando a condutividade K. C´alculos mais detalhados para el´etrons n˜ao
relativ´ısticos mostram que
10 ∑ 2
10 Xi Z g(Zi, η)
i 2
κcond ≃ cm /g (6.79)
T f(η) Ai
i
onde Xi ´e a abundˆancia relativa por massa do elemento i, Zi ´e a carga nuclear,
Ai ´e a massa atˆomica, η ´e o chamado parˆametro de degenerescˆencia, f(η) ´e
uma fun¸c˜ao monotˆonica crescente de η, e g(Zi, η) ´e uma fun¸c˜ao da ordem
da unidade. Podemos considerar dois casos: baixa degenerescˆencia, quando
η ≪ 1, e alta degenerescˆencia, quando η ≫ 1. No primeiro caso, ´e poss´ıvel
mostrar que
∑
2 1/2
Xi Z g/Ai T
i i 2
κcond ≃ 8 cm /g (6.80)
1 + X ρ
7 2 3
que ´e semelhante a (6.78). Por exemplo, para T ∼ 10 K e ρ ∼ 10 g/cm ,
3 2
obtivemos de (6.77) κcond ∼ 3.2 × 10 cm /g. Adotando um valor da ordem
de 5 para o termo devido `a composi¸c˜ao qu´ımica, obtemos de (6.78) κcond ∼
3 2 3 2
2.5 × 10 cm /g, e de (6.80) κcond ∼ 1.3 × 10 cm /g. No segundo caso, de
alta degenerescˆencia, obtemos
∑ ( )
2 2
Xi Z g/Ai T
−7 i i 2
κcond ≃ 5 × 10 cm /g (6.81)
2
(1 + X) ρ
7 4 3
Por exemplo, para T ∼ 10 K e ρ ≥ 10 g/cm , com um valor da ordem da
unidade para o termo da composi¸c˜ao qu´ımica, obtemos κcond < κrad, uma vez
2
que κrad ∼ 1 cm /g. Portanto, a condu¸c˜ao eletrˆonica domina a opacidade.

---

## Página 209

Interiores Estelares 197
EXEMPLO 6.16 - Condu¸c˜ao em an˜as brancas de C
7
Na regi˜ao central de uma an˜a branca de carbono onde T ∼ 10 K e ρ ∼
6 3
10 g/cm a opacidade condutiva pode ser escrita aproximadamente
( )
2
kcond T
−7 −5 2
κcond = ≃ 5 × 10 ≃ 5 × 10 cm /g (6.82)
ρ ρ
admitindo que a opacidade radiativa ´e devida essencialmente ao espalhamento
Thomson temos
ne 1 + X 1
2
κe ≃ σe ≃ σe ≃ 0.34 cm /g (6.83)
ρ 2 mH
onde usamos a equa¸c˜ao (3.46) com X ≃ 0.7. Portanto, nesta regi˜ao o fluxo ´e
essencialmente devido `a condu¸c˜ao.
´
EXERCICIOS
6.1 Use a equa¸c˜ao de estados dos gases perfeitos, a equa¸c˜ao de conserva¸c˜ao
da massa e a equa¸c˜ao de equil´ıbrio hidrost´atico obtenha a equa¸c˜ao (6.2)
para a energia t´ermica Et.
6.2 Mostre que no interior estelar T ∝ M/R. Obtenha a express˜ao
M/M⊙
7
T ≃ 10
R/R⊙
Sugest˜ao: use as rela¸c˜oes para a equa¸c˜ao de estado e para a equa¸c˜ao de
equil´ıbrio hidrost´atico.
6.3 Definimos a massa m´edia por el´etron, ou peso molecular por el´etron por
ρ
μe =
ne mH
onde ρ ´e a densidade do g´as, ne a densidade eletrˆonica e mH a massa do
´atomo de H. Mostre que
1 2
μe ≃ =
X + Y /2 + Z/2 1 + X

---

## Página 210

198 Transporte de Energia em Astrof´ısica
onde X, Y, Z s˜ao as fra¸c˜oes de H, He e elementos pesados, tomadas por
massa. Note que, para o H, ρ X ´e a massa por unidade de volume,
e ρ X/mH ´e o n´umero de n´ucleos por unidade de volume; como cada
´atomo de H fornece 1 el´etron, o n´umero de el´etrons fornecido pelo H ´e
neH = ρ X/mH. Para o He e os elementos pesados, o procedimento ´e
semelhante.
6.4 Mostre que a energia produzida por grama de mat´eria pela convers˜ao
de H em He corresponde aproximadamente a 70% do total das rea¸c˜oes
nucleares de fus˜ao nas estrelas. Considere que essas rea¸c˜oes processam-se
56
at´e o Fe.
6.5 Mostre que a m´edia de Rosseland ´e uma m´edia direta tomada em rela¸c˜ao
∫
∞
ao fluxo do campo de radia¸c˜ao, isto ´e, kR = (1/F) kν Fν dν.
0
7
6.6 Uma regi˜ao no interior de uma estrela de 2.5 M⊙ tem T ≃ 1.5 × 10
16 2
K e P ≃ 6.4 × 10 din/cm . Um modelo para essa estrela obt´em um
−10 2
gradiente dT /dP ≃ 3.0 × 10 K/(din/cm ). Essa regi˜ao ´e convectiva
ou radiativa?
REFERˆENCIAS BIBLIOGR ´AFICAS
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
COX, A. N., 2000, Allen’s Astrophysical Quantities, AIP
DE BOER, K. S., SEGGEWISS, W. 2008, Stars and Stellar Evolution, EDP
HANSEN, C. J., KAWALER, S. D., TRIMBLE, V. 2004, Stellar Interiors,
Springer
KIPPENHAHN, R., WEIGERT, A., WEISS, A. 2012, Stellar structure and
evolution, Springer
MACIEL, W. J. 1999, Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar, Edusp
(edi¸c˜ao em inglˆes: Introduction to Stellar Structure, Springer 2015)

---

## Página 211

Interiores Estelares 199
NOVOTNY, E. 1973, Introduction to Stellar Atmospheres and Interiors, OUP
ROSSELAND, S. 1924, Monthly Notices of the Royal Astronomical Society,
84, 525
RYAN, S. G., NORTON, A. J. 2010, Stellar Evolution and Nucleosynthesis,
CUP
SWIHART, T. L. 1972, Physics of stellar interiors, Pachart

---

## Página 212

> Página sem texto extraível; consulte o PDF original.

---

## Página 213

## 7
## PROCESSOS DIN ˆAMICOS I
7.1 INTRODUC¸ ˜AO
Diversos teoremas da Mecˆanica e Mecˆanica Estat´ıstica tˆem aplica¸c˜oes em
Astrof´ısica, como por exemplo o teorema do virial, que vimos no cap´ıtulo 6.
Neste cap´ıtulo, vamos considerar este teorema em maiores detalhes, com novas
aplica¸c˜oes astrof´ısicas, e tamb´em o teorema de Liouville, com uma aplica¸c˜ao `a
f´ısica do meio interestelar. No pr´oximo cap´ıtulo, vamos considerar a equa¸c˜ao
de transporte de Boltzmann em suas formas mais simples. Algumas referˆencias
sobre o material deste cap´ıtulo incluem Reif (1965), Maciel (1999), Lima Neto
(2006), Collins (2003), Carroll e Ostlie (2014) e Choudhuri (2010).
7.2 O TEOREMA DO VIRIAL
Na se¸c˜ao 6.2 obtivemos a express˜ao
2Et + Eg = 0 (7.1)
onde Et ´e a energia t´ermica total de uma estrela e Eg sua energia gravita-
cional. A equa¸c˜ao (7.1) ´e uma forma do Teorema do virial, que tem uma s´erie
de aplica¸c˜oes em Astrof´ısica, uma vez que envolve implicitamente processos de
transferˆencia de energia nas estrelas e em outras situa¸c˜oes astrof´ısicas. Este

---

## Página 214

202 Transporte de Energia em Astrof´ısica
teorema foi proposto originalmente por R. J. E. Clausius em 1870, e ´e v´alido,
de maneira geral, para sistemas ligados gravitacionalmente em equil´ıbrio. Va-
mos nesta se¸c˜ao explorar um pouco mais este teorema, e analisar sua aplica¸c˜ao
em algumas situa¸c˜oes de interesse astrof´ısico.
Na se¸c˜ao 6.2 vimos que o resultado (7.1) mostra que, durante a contra¸c˜ao
gravitacional de uma estrela, metade de sua energia potencial gravitacional
´e convertida em energia t´ermica e a outra metade ´e emitida como radia¸c˜ao.
Podemos confirmar isto considerando que a energia mecˆanica total da estrela
na fase de contra¸c˜ao gravitacional ´e
Eg Eg
Etot = Et + Eg = − + Eg = (7.2)
2 2
chamando L a luminosidade da estrela, pela conserva¸c˜ao de energia, temos
dEtot
+ L = 0 (7.3)
dt
dEtot 1 dEg
L = − = − (7.4)
dt 2 dt
ou seja, metade da energia gravitacional ´e usada para a emiss˜ao de radia¸c˜ao,
e a outra metade contribui para aumentar a temperatura e a energia interna
da estrela.
EXEMPLO 7.1 - O movimento de transla¸c˜ao da Terra
Vamos considerar o movimento de transla¸c˜ao da Terra em torno do Sol (Figura
7.1), e mostrar que, tamb´em neste caso, o teorema do virial pode ser aplicado.
A Terra move-se em uma ´orbita est´avel em torno do Sol a uma distˆancia m´edia
13
rT = 1.5×10 cm (uma unidade astronˆomica, UA) em um per´ıodo de um ano,
7
P = 1 ano = 365 dias ≃ 3.16×10 s. Sua velocidade m´edia ´e v = 2 π rT /P =
6
3.0×10 cm/s = 30 km/s. Com um raio m´edio RT = 6400 km e uma densidade
3 3 27
m´edia ρT ≃ 5.5 g/cm , a Terra tem massa MT ≃ (4/3) π R ρT ≃ 6.0×10 g,
T
33
enquanto que a massa do Sol ´e M⊙ = 1.99 × 10 g. A energia cin´etica m´edia
do movimento de transla¸c˜ao ´e
1
2 40
Ec = MT v ≃ 2.7 × 10 erg (7.5)
2

---

## Página 215

Processos Dinˆamicos I 203
Figura 7.1 - Movimento de transla¸c˜ao da Terra.
A energia potencial gravitacional correspondente ´e
G M⊙ MT
40
Ep = − ≃ −5.3 × 10 erg (7.6)
rT
portanto, a energia total ´e
1 G M⊙ MT Ep
2 40
Etot = Ec + Ep = MT v − ≃ −2.6 × 10 erg ≃ (7.7)
2 rT 2
Naturalmente, a energia total ´e negativa, uma vez que a Terra tem uma ´orbita
fechada em torno do Sol. Obtemos novamente o teorema do virial envolvendo
agora a energia cin´etica Ec,
Ep
Ec = − (7.8)
2
2 Ec + Ep = 0 (7.9)
EXEMPLO 7.2 - O sistema Sirius A + B
As massas das estrelas Sirius A e Sirius B s˜ao MA ≃ 2.02 M⊙ e MB ≃ 1.00 M⊙,
sua distˆancia ´e d ≃ 2.631 pc, o per´ıodo orbital ´e P ≃ 50.075 anos e o semieixo
maior ´e a ≃ 7”.50 (cf. N. Brosch, Sirius Matters, Springer 2008). A massa
33
total do sistema ´e M = MA + MB = 6.01 × 10 g, e a massa reduzida ´e
33
μ = MA MB/(MA + MB) ≃ 1.33 × 10 g. Admitindo ´orbitas el´ıpticas a
energia potencial m´edia do sistema ´e aproximadamente

---

## Página 216

204 Transporte de Energia em Astrof´ısica
G μ M
45
Ep ≃ − ≃ 1.8 × 10 erg (7.10)
a d
e a energia cin´etica m´edia ´e
1 1 G M
2 44
Ec ≃ μ v¯ = μ ≃ 9.0 × 10 erg (7.11)
2 2 a d
onde ¯v ≃ 11.6 km/s ´e a velocidade m´edia relativa ao centro de massa. Portanto
temos novamente 2 Et + Ep = 0.
EXEMPLO 7.3 - O movimento do Sol em torno do centro gal´actico
Vamos agora considerar o movimento do Sol em torno do centro da Gal´axia.
O Sol est´a localizado no disco gal´actico, e os objetos do disco s˜ao de Popula¸c˜ao
I, executando um movimento de rota¸c˜ao em torno do centro gal´actico, como
pode ser observado na curva de rota¸c˜ao gal´actica (figura 7.2, W. J. Maciel, L.
G. Lago, Revista Mexicana de Astronomia y Astrofisica 41, 383, 2005), que ´e
simplesmente um gr´afico da velocidade de rota¸c˜ao Θ(R) em km/s em fun¸c˜ao
da distˆancia galactocˆentrica R (kpc), projetada sobre o disco gal´actico.
Figura 7.2 - Curva de rota¸c˜ao gal´actica.
Esta curva pode ser obtida a partir de diversos objetos, como as regi˜oes
HII, nuvens de CO, nebulosas planet´arias, etc. A posi¸c˜ao do Sol est´a em
aproximadamente R0 = 8.0 kpc, e a velocidade medida nesta posi¸c˜ao ´e de

---

## Página 217

Processos Dinˆamicos I 205
cerca de Θ0 = 200 km/s. Considerando novamente a massa do Sol como
33
M⊙ = 1.99 × 10 g, a energia cin´etica do movimento de rota¸c˜ao ´e
1
2 47
Ec = M⊙ Θ ≃ 4.0 × 10 erg (7.12)
0
2
A massa da Gal´axia MG interna ao raio galactocˆentrico solar R0 pode ser
estimada considerando que a atra¸c˜ao gravitacional desta massa mant´em o
movimento de rota¸c˜ao do Sol com a velocidade Θ0, ou seja
2
G MG M⊙ M⊙ Θ
0
= (7.13)
2
R R0
0
de modo que
2
Θ R0
0 44 10
MG = ≃ 1.5 × 10 g ≃ 7.5 × 10 M⊙ (7.14)
G
portanto a energia potencial gravitacional ´e
G MG M⊙
47
Ep = − ≃ −8.0 × 10 erg (7.15)
R0
ou seja
Ep
Ec = − (7.16)
2
2 Ec + Ep = 0 (7.17)
que ´e novamente o teorema do virial.
EXEMPLO 7.4 - O teorema do virial e a forma¸c˜ao estelar
No processo de forma¸c˜ao estelar a partir de uma nuvem de g´as contendo um
n´umero N de part´ıculas a uma temperatura T, o teorema do virial pode ser
escrito (ver por exemplo Gregory e Zeilik 1997)
Ep
Et = − (7.18)
2
onde Et e Ep s˜ao novamente as energias t´ermica e potencial gravitacional,
respectivamente, e a energia t´ermica pode ser escrita
Et ≃ N k T (7.19)

---

## Página 218

206 Transporte de Energia em Astrof´ısica
onde k ´e a constante de Boltzmann. Chamando M a massa da nuvem, e R
sua dimens˜ao t´ıpica, temos, aproximadamente
2
G M
Ep ≃ − (7.20)
R
supondo que o g´as ´e composto de mol´eculas de H, temos
M ≃ 2 N mH (7.21)
onde mH ´e a massa do ´atomo de H. Portanto, usando o teorema do virial
(7.18), obtemos
2
G M G M
N k T ≃ ≃ N mH
2 R R
k T G M
≃ (7.22)
mH R
chamando agora ρ a densidade m´edia do g´as, temos
4
3 3
M = π R ρ ≃ 4 R ρ (7.23)
3
substituindo esta rela¸c˜ao na anterior, temos
k T
2
≃ 4 G R ρ (7.24)
mH
de onde tiramos
( ) ( ) ( )
1/2 1/2 1/2
k T T
7
R ≃ ≃ 2 × 10 (7.25)
4 G mH ρ ρ
−16 −8 3 −1 −2
onde k = 1.38 × 10 erg/K, G = 6.67 × 10 cm g s , mH = 1.67 ×
−24 3
10 g, e R est´a em cm, T em K e ρ em g/cm . Tomando valores t´ıpicos
−18 −3
para uma nuvem molecular, T ≃ 10 K, e ρ ≃ 10 g/cm , encontramos
17 33
R ∼ 10 cm = 0.03 pc, o que corresponde a uma massa M ≃ 10 g, da
ordem da massa do Sol.
EXEMPLO 7.5 - O teorema do virial e a press˜ao do g´as
Vamos considerar um objeto - uma estrela por exemplo - em equil´ıbrio hidros-
t´atico, de modo que o teorema do virial possa ser escrito na forma (7.17).

---

## Página 219

Processos Dinˆamicos I 207
O g´as ´e constitu´ıdo de N part´ıculas de massa m e velocidade v, tal que a
quantidade de movimento das part´ıculas seja p = m v e sua energia cin´etica
2
seja (1/2) m v , isto ´e, vamos considerar o caso n˜ao-relativ´ıstico. A press˜ao
do g´as, considerado ideal, pode ser escrita como
( ) ( ) ( ) ( )
1 N 1 N 2 1 1
2 2
P = p v = m v = N m v (7.26)
3 V 3 V 3 V 2
A energia cin´etica total das N part´ıculas ´e
1
2
Ec = N m v (7.27)
2
temos ent˜ao
2 Ec
P = (7.28)
3 V
usando (7.17) obtemos
1 Eg
P = − (7.29)
3 V
ou seja, em um sistema em equil´ıbrio hidrost´atico, a press˜ao m´edia necess´aria
para suportar um objeto autogravitante ´e igual a menos um ter¸co de sua ener-
gia potencial gravitacional por unidade de volume. Como a energia potencial
gravitacional do objeto ´e negativa, o sinal (−) garante que a press˜ao m´edia ´e
positiva. A equa¸c˜ao (7.29) pode ser considerada como uma forma do teorema
do virial, equivalente `a equa¸c˜ao (7.17).
EXEMPLO 7.6 - Press˜ao m´edia em uma estrela
Vamos considerar uma estrela esf´erica de massa M e raio R em equil´ıbrio
hidrost´atico. A press˜ao m´edia P ´e dada por (7.29), e a energia potencial
gravitacional ´e, aproximadamente
2
G M
Eg ≃ − (7.30)
R
de modo que
( ) ( )
2 2
1 G M G M
P ≃ − − ≃ (7.31)
3 R V 3 R V

---

## Página 220

208 Transporte de Energia em Astrof´ısica
3
usando a rela¸c˜ao V = (4/3) π R ,
( ) ( )
2 2
G M 3 G M
P ≃ = (7.32)
3 4
3 R 4 π R 4 π R
mais corretamente temos
2
3 G M
Eg ≃ − (7.33)
5 R
e a equa¸c˜ao (7.32) fica
( ) ( ) ( )
2 2
1 3 G M 3 3 G M
P ≃ − − ≃ (7.34)
3 4
3 5 R 4 π R 20 π R
33 10
Para o Sol, com M⊙ = 1.99 × 10 g, R⊙ = 6.96 × 10 cm, obtemos
−8 33 2
(3) (6.67 × 10 ) (1.99 × 10 )
14 2
P ≃ ≃ 5.37 × 10 din/cm (7.35)
10 4
(20) (3.14) (6.96 × 10 )
EXEMPLO 7.7 - O teorema do virial e o equil´ıbrio hidrost´atico
No exemplo 7.5 usamos o fato de que uma estrela em equil´ıbrio hidrost´atico
obedece o teorema do virial. Vamos mostrar que este teorema na forma (7.29)
pode ser obtido a partir da equa¸c˜ao de equil´ıbrio hidrost´atico (5.33). Temos
dP(r) G M(r) ρ(r)
= − (7.36)
2
dr r
2
dividindo por 4 π r ρ(r)
dP(r) G M(r)
= − (7.37)
2 4
4 π r ρ(r) dr 4 π r
2
mas dM(r) = 4 π r ρ(r) dr e
G M(r)
3
4 π r dP(r) = − dM(r) (7.38)
r
3
lembrando que o volume V (r) = (4/3) π r , temos
G M(r)
3 V (r) dP(r) = − dM(r)
r

---

## Página 221

Processos Dinˆamicos I 209
∫ ∫
r=R∗ M∗
G M(r)
3 V (r) dP(r) = − dM(r) (7.39)
r
r=0 0
A segunda integral acima ´e igual a Eg. A primeira integral pode ser feita por
partes
∫ ∣ ∫
r=R r=R∗ V
∗ ∣ ∗
∣
3 V (r) dP(r) = 3 V (r) P(r) −3 P(r) dV (r) = Eg (7.40)
∣
r=0 r=0 0
a integral da esquerda ´e nula, portanto
∫
V∗
¯
−3 P(r) dV (r) = −3P V∗ = Eg
0
1 Eg
¯
P = − (7.41)
3 V
¯
onde usamos a nota¸c˜aoP para enfatizar que se trata do valor m´edio da press˜ao
total. Esta rela¸c˜ao ´e o teorema do virial na forma (7.29).
EXEMPLO 7.8 - O teorema do virial e a massa de Jeans
Considerando o processo de contra¸c˜ao gravitacional de uma nuvem intereste-
lar, Sir James Jeans (1877-1946) mostrou que a massa m´ınima necess´aria para
que a nuvem efetivamente leve `a forma¸c˜ao de estrelas deve ser superior a um
valor limite, conhecido como massa de Jeans MJ. Vamos generalizar um
pouco o tratamento dado no Exemplo 7.4 e mostrar que este limite pode ser
estimado a partir da aplica¸c˜ao do teorema do virial (cf. Carroll e Ostlie 2014).
Em uma nuvem est´avel e ligada gravitacionalmente, temos
2 Ec + Ep = 0 (7.42)
Se o termo 2 Ec, referente `a energia cin´etica interna total da nuvem, for su-
perior ao valor absoluto da energia potencial gravitacional |Ep|, a nuvem se
expande. No caso oposto, se 2 Ec < |Ep|, ocorre um colapso da nuvem, o
que pode levar `a forma¸c˜ao de estrelas. Portanto, a condi¸c˜ao para a forma¸c˜ao
estelar, que envolve um limite para a massa da nuvem, requer que
2 Ec < |Ep| (7.43)

---

## Página 222

210 Transporte de Energia em Astrof´ısica
Em uma nuvem esf´erica de massa M, raio R e densidade constante ρ, a
energia potencial gravitacional ´e dada aproximadamente pela equa¸c˜ao (7.20),
e a energia cin´etica da nuvem ´e dada por (7.19). A massa da nuvem pode ser
escrita
M ≃ N μ mH (7.44)
onde μ ´e o peso molecular do g´as. Aplicando (7.43) temos
2 k T G M
< (7.45)
μ mH R
lembrando a rela¸c˜ao (7.23) temos
( )
1/3
M
R ≃ (7.46)
4 ρ
substituindo esta equa¸c˜ao em (7.45), temos
2 k T G M
< (7.47)
1/3
μ mH (M/4 ρ)
que pode ser colocada na forma
( ) ( )
3/2 1/2
2 k T 1
M > MJ ≃ (7.48)
G μ mH 4 ρ
3/2 −1/2
ou seja, MJ ∝ T ρ , isto ´e, quanto maior a temperatura da nuvem,
maiores massas s˜ao necess´arias para o colapso, o inverso ocorrendo com a
densidade do g´as. Em um c´alculo mais correto, as constantes que aparecem
em (7.48) s˜ao um pouco diferentes (cf. Carroll e Ostlie 2014), e esta equa¸c˜ao
fica
( ) ( )
3/2 1/2
5 k T 3
M > MJ = (7.49)
G μ mH 4 π ρ
3
usando os valores num´ericos de k, G e mH, e medindo T em K, ρ em g/cm
e M em M⊙, temos
( )
3 1/2
T
−10
MJ ≃ 1.2 × 10 (7.50)
3
μ ρ

---

## Página 223

Processos Dinˆamicos I 211
Vamos aplicar (7.50) a uma nuvem de H t´ıpica, com T ≃ 50 K, μ ≃ 1 e
−3
uma densidade de part´ıculas n ≃ 500 cm , de modo que ρ ≃ n mH ≃
−22 3
8.4 × 10 g/cm . Obtemos MJ ≃ 1500 M⊙. As massas das nuvens difusas
s˜ao provavelmente muito menores que este valor, de modo que elas s˜ao est´aveis,
isto ´e, n˜ao se fragmentam para formar estrelas. De fato, as estrelas s˜ao for-
madas pelo colapso de nuvens moleculares gigantes, com dimens˜oes maiores
que as das nuvens difusas, e muito mais densas. Por exemplo, tomando va-
lores apropriados para as regi˜oes internas dessas nuvens, T ≃ 10 K, μ ≃ 2
4 −3 −20 3
e n ≃ 10 cm , temos ρ ≃ 3.3 × 10 g/cm , e MJ ≃ 7 M⊙, que ´e um
valor consistente com as estimativas das massas das regi˜oes mais internas das
nuvens densas.
EXEMPLO 7.9 - O teorema do virial no caso ultra relativ´ıstico
Vimos que o teorema do virial pode ser expresso pelas rela¸c˜oes (7.17) ou
(7.29). Admitimos implicitamente que as part´ıculas respons´aveis pela press˜ao
P movem-se com velocidades v ≪ c, isto ´e, consideramos o caso n˜ao rela-
tiv´ıstico. Vamos agora considerar o caso extremo de um g´as ultra relativ´ıstico,
em que as part´ıculas respons´aveis pela press˜ao movem-se com velocidades
pr´oximas da velocidade da luz. Neste caso, a rela¸c˜ao (7.29) ainda ´e v´alida, e
a press˜ao m´edia ´e
1 N
P = p v (7.51)
3 V
mas temos agora v ≃ c, de modo que
1 N
P = p c (7.52)
3 V
a energia cin´etica de cada part´ıcula ´e agora igual a p c, ent˜ao
Ec ≃ N p c (7.53)
ou seja
1 Ec
P = (7.54)
3 V
combinando esta equa¸c˜ao com (7.29) obtemos
Ec + Eg = 0 (7.55)

---

## Página 224

212 Transporte de Energia em Astrof´ısica
Vemos que a energia total ´e Et = Ec + Eg = 0. Neste caso, o sistema se
encontra no limite entre o caso ligado, onde Et < 0, e o caso n˜ao ligado, onde
Et > 0. Por exemplo, se um sistema gravitacionalmente ligado desenvolve
velocidades pr´oximas de c, ele eventualmente se torna um sistema n˜ao ligado.
Assim, um objeto em que o termo de press˜ao ´e devido a part´ıculas ultra
relativ´ısticas ´e inst´avel, uma vez que um sistema com energia total nula est´a no
limite entre uma configura¸c˜ao est´avel e inst´avel. J´a no caso n˜ao relativ´ıstico,
quando ´e v´alida a rela¸c˜ao 2 Ec +Eg = 0, a energia total do sistema ´e negativa,
de modo que o sistema ´e ligado.
EXEMPLO 7.10 - Supernovas e transferˆencia de energia
Em estrelas massivas, o colapso final ap´os a exaust˜ao do combust´ıvel nuclear
libera uma quantidade de energia potencial suficiente para explodir a estrela.
Este processo ocorre nas supernovas de tipo Ib e Ic, formadas por estrelas mas-
sivas com tempos de vida curtos, que n˜ao apresentam evidˆencias de hidrogˆenio
em seus espectros. A subclassifica¸c˜ao das supernovas de tipo I depende da
presen¸ca da linha do SiII em λ6150 ˚A(Ia), da presen¸ca de linhas intensas do
He (Ib) ou da ausˆencia das linhas do He (Ic). A libera¸c˜ao de energia ocorre de
maneira ainda mais espetacular com as supernovas de tipo II, que apresentam
H em seus espectros, e resultam da explos˜ao de estrelas massivas em regi˜oes
interestelares ricas em metais.
Por outro lado, a maior parte das supernovas de tipo I, ditas tipo Ia, s˜ao
formadas por estrelas de massa intermedi´aria em sistemas bin´arios, tamb´em
sem evidˆencia de hidrogˆenio, resultando de explos˜oes termonucleares. Neste
processo, proposto por F. Hoyle e W. Fowler na d´ecada de 1960, a fus˜ao
dos n´ucleos de C e O destas estrelas produz um enorme pulso de energia e o
56
is´otopo radioativo Ni, que sofre decaimento lento liberando uma quantidade
adicional de energia.
As supernovas como as de tipo II, Ib e Ic, s˜ao consideradas portanto
“supernovas de colapso nuclear”, ou core collapse supernovae. Tipicamente,
53
uma supernova de tipo II libera energias da ordem de 10 erg em um evento.
51
Cerca de 1% deste valor, ou cerca de 10 erg, surge como energia cin´etica do
material ejetado. A radia¸c˜ao ocupa uma fra¸c˜ao ainda menor, cerca de 0.01%,
49
ou 10 erg, ou menos. A diferen¸ca de energia ´e transferida aos neutrinos
produzidos na explos˜ao.
Por exemplo, em uma estrela com 20 M⊙, o processo de queima nuclear
inclui inicialmente a queima de H, seguida pelas queimas de He, C, O e Si,

---

## Página 225

Processos Dinˆamicos I 213
cada uma delas com uma escala de tempo mais curta. A queima de Si leva
5
tipicamente 2 dias ou 1.73×10 s. A energia por unidade de tempo dos f´otons
38
produzidos neste processo ´e cerca de Lγ ∼ 4.4 × 10 erg/s, e a luminosidade
45
dos neutrinos ´e Lν ∼ 3.1 × 10 erg/s. Portanto, neste caso temos
38 5 43 44
Eγ ≃ (4.4 × 10 ) (1.73 × 10 ) ≃ 7.61 × 10 ∼ 10 erg
45 5 50 51
Eν ≃ (3.1 × 10 ) (1.73 × 10 ) ≃ 5.36 × 10 ∼ 10 erg
Podemos tamb´em estimar a massa do caro¸co necess´aria para produzir uma
53
energia da ordem de 10 erg por colapso gravitacional. Neste caso, a energia
liberada deve ser da ordem da energia potencial gravitacional, E ∼ Ep ∝
2
−G M /R, onde M ´e a massa do caro¸co e R o raio do objeto colapsado.
Mais corretamente, podemos usar o teorema do virial e obter uma express˜ao
semelhante
2
3 G M
E ≃ − (7.56)
10 R
53
Tomando um valor R ≃ 50 km, com E ∼ 10 erg obtemos
√
53
10 10 R
33
M ≃ ≃ 5 × 10 g ≃ 2.5 M⊙ (7.57)
3 G
que ´e um valor t´ıpico para um caro¸co colapsado originando uma supernova.
EXEMPLO 7.11 - Supernovas de instabilidade de pares
As supernovas mais comuns s˜ao produzidas por estrelas com 20 M⊙ ou mais,
que sofrem est´agios sucessivos de queima nuclear, at´e alcan¸carem um n´ucleo
de ferro. Neste est´agio, o objeto colapsa violentamente, produzindo uma
explos˜ao, que d´a origem `a supernova, e deixando eventualmente um objeto
compacto em seu centro. No caso de estrelas muito massivas, com massas da
ordem de 140 M⊙ ou mais, evidˆencias recentes sugerem que o processo pode
ser abreviado, de modo que a explos˜ao ocorre ainda na fase em que o n´ucleo
cont´em oxigˆenio, ou seja, antes de atingir a fase em que o n´ucleo ´e de ferro
inerte. Nese caso, a estrela sofre uma intensa instabilidade, produzindo anti-
−
mat´eria. A colis˜ao de dois f´otons produz pares de el´etrons (e ) e p´ositrons
+
(e ), e a consequente perda de press˜ao produz o colapso, que leva `a queima
r´apida de oxigˆenio em um processo altamente inst´avel e r´apido, durando da

---

## Página 226

214 Transporte de Energia em Astrof´ısica
ordem de minutos, ocorrendo a explos˜ao. Neste caso, a supernova ´e chamada
“supernova de produ¸c˜ao de pares”, “supernova de instabilidade de pares”.
Na explos˜ao, a estrela sintetiza uma grande quantidade de is´otopos radioa-
56 56
tivos, como o Ni, que termina por decair, produzindo Fe. O processo
de decaimento, por sua vez, injeta energia no g´as em expans˜ao, cujo brilho
´e significativamente aumentado. Este ´e o processo que, aparentemente, deu
56
origem `a supernova 2007bi, em que uma grande quantidade de Ni foi detec-
tada, correspondendo a 5 - 7 M⊙. Supondo que a estrela progenitora tivesse
uma massas de 140 M⊙, isto corresponde a cerca de 4% de sua massa. Em
compara¸c˜ao, no Sol, onde a abundˆancia de Ni ´e de 6.25 dex por n´umero de
−4
´atomos, o que daria uma massa de 10 de sua massa, a fra¸c˜ao deste elemento
seria menor que 0.01%.
EXEMPLO 7.12 - O teorema do virial e a forma¸c˜ao das gal´axias
O teorema do virial na forma (7.8) pode ser aplicado `a forma¸c˜ao de uma
gal´axia a partir de uma nuvem de g´as altamente disperso e em repouso. A
energia total da gal´axia ´e
Ep Ep
Etot = Ec + Ep = − + Ep = (7.58)
2 2
`
No estado inicial, Etot = Ec = Ep = 0. A medida que a nuvem colapsa, a
energia cin´etica aumenta (fica mais positiva), enquanto que a energia potencial
gravitacional diminui (fica mais negativa). Da equa¸c˜ao (7.58) vemos que, no
estado final de equil´ıbrio, quando o sistema est´a est´avel (ou virializado), a
energia total ´e negativa (pois Ep < 0) e o sistema est´a ligado, e metade
da energia potencial liberada pelo colapso foi convertida em energia cin´etica,
enquanto que a outra metade foi emitida na forma de radia¸c˜ao.
7.3 O TEOREMA DE LIOUVILLE
Vamos a seguir considerar resumidamente o teorema de Liouville na
mecˆanica cl´assica (ver por exemplo Reif 1965; Symon 1971; Goldstein et al.
2001). Na pr´oxima se¸c˜ao iremos analisar uma aplica¸c˜ao deste teorema na
determina¸c˜ao do limite de Oort. Vamos considerar um sistema isolado con-
siderando n coordenadas generalizadas de posi¸c˜ao e quantidade de movimento
q1, q2, . . . qn, p1, p2, . . . pn. Chamando f(qn, pn, t) dqn dpn dt uma fun¸c˜ao que
descreve o n´umero de sistemas com posi¸c˜oes entre (qn, qn + dqn) e quanti-
dade de movimento entre (pn, pn + dpn) no tempo t, a equa¸c˜ao que descreve
o movimento do sistema no espa¸co de fase pode ser escrita

---

## Página 227

Processos Dinˆamicos I 215
( )
∑
df ∂f ∂f ∂f
= + q˙i + p˙i = 0 (7.59)
dt ∂t ∂qi ∂pi
i
que ´e o Teorema de Liouville. Por este teorema, as part´ıculas do sistema
movem-se no espa¸co de fase como um fluido incompress´ıvel, de modo que o
volume ocupado por um conjunto de part´ıculas ´e constante. De acordo com
este teorema, em um conjunto de massas pontuais movendo-se sem dissipa¸c˜ao
em um campo de potencial, a densidade dos pontos no espa¸co de fase ´e con-
stante ao longo de uma trajet´oria dinˆamica.
EXEMPLO 7.13 - O teorema de Liouville e a ´area dos detectores
Telesc´opios ´opticos geralmente concentram feixes de luz em pequenos detec-
tores, e em muitos casos a sensibilidade instrumental deve ser concentrada em
detectores com a menor ´area poss´ıvel. Vamos considerar uma fonte observada
segundo o ˆangulo s´olido Ω, e seja A a ´area do espelho do telesc´opio (cf. Harwit
2006). Pelo teorema de Liouville, a densidade de f´otons emitidos e recebidos
por unidade de ´area, por unidade de ˆangulo s´olido e por unidade de tempo
deve ser constante. Se a luz do objeto sobre um detector de ´area a pudesse
vir de todas as dire¸c˜oes, em um ˆangulo s´olido de 4π sr, ter´ıamos
no. f´otons no. f´otons
= (7.60)
AΩ a 4 π
isto ´e, a ´area m´ınima do detector seria
AΩ
a = (7.61)
4 π
Na pr´atica, apenas os f´otons vindos de dentro de um pequeno ˆangulo s´olido
ω < 4 π podem ser recebidos pelo detector, de modo que a ´area m´ınima do
detector deve ser
AΩ
a = (7.62)
ω
Detectores com ´areas menores que este valor n˜ao poderiam receber todos os
f´otons dispon´ıveis, pois isto implicaria um aumento do fluxo, o que contraria
a segunda lei da Termodinˆamica, uma vez que a densidade de f´otons seria
maior no detector do que na fonte.

---

## Página 228

216 Transporte de Energia em Astrof´ısica
EXEMPLO 7.14 - O teorema de Liouville e os raios c´osmicos
Os raios c´osmicos s˜ao part´ıculas energ´eticas (pr´otons, el´etrons, n´ucleos pesa-
dos) que atravessam o espa¸co interestelar, onde produzem uma s´erie de efeitos,
como as rea¸c˜oes de espala¸c˜ao (spallation), em que s˜ao fragmentados pelas co-
lis˜oes com n´ucleos de H interestelar produzindo os elementos leves Li, Be e
B. O fluxo de raios c´osmicos pode ser observado e seu espectro de energia
determinado com precis˜ao, como pode ser visto na figura 7.3.
Figura 7.3 - Espectro de energia dos raios c´osmicos.
Sendo part´ıculas t˜ao energ´eticas, os raios c´osmicos podem eventualmente
escapar dos campos magn´eticos gal´acticos. Pelo teorema de Liouville, a den-
sidade de raios c´osmicos no espa¸co de fase deve ent˜ao ser aproximadamente
constante. Neste caso, a densidade de raios c´osmicos na regi˜ao externa da
Gal´axia deve ser aproximadamente a mesma daquela observada na nossa vi-
zinhan¸ca. Em outras palavras, medidas locais da intensidade dessas part´ıculas
podem ser usadas para obter informa¸c˜oes sobre as densidades de part´ıculas
em outras regi˜oes do Universo.

---

## Página 229

Processos Dinˆamicos I 217
EXEMPLO 7.15 - Raios c´osmicos e supernovas
Uma das principais fontes das part´ıculas c´osmicas s˜ao as supernovas, cuja
enorme energia pode ser parcialmente transferida aos raios c´osmicos, acele-
rando-os at´e velocidades relativ´ısticas. Este ´e um fenˆomeno interessante de
transferˆencia, ou transporte de energia, pois parte da energia inicialmente
armazenada nas supernovas ´e transferida para a acelera¸c˜ao das part´ıculas
c´osmicas. Vamos mostrar, usando argumentos simples, que a energia re-
querida para este processo de acelera¸c˜ao dos raios c´osmicos ´e uma pequena
fra¸c˜ao da energia total dispon´ıvel nas supernovas. Admitindo que uma su-
49
pernova libere uma energia da ordem de ∆Esn ∼ 10 erg e que a taxa
de supernovas na Gal´axia seja τ ∼ 1/30 por ano, a energia produzida por
47
unidade de tempo seria ∆Esn τ ∼ 3 × 10 erg/ano. Em uma escala de
10
tempo da ordem da idade da Gal´axia, tG ∼ 10 ano, teremos uma ener-
57
gia total Esn ∼ ∆Esn τ tG ∼ 3 × 10 erg. Os raios c´osmicos tem uma
3 −12 3
densidade de energia ρrc ∼ 1 eV/cm ∼ 1.6 × 10 erg/cm , e podemos
considerar que est˜ao confinados ao disco da Gal´axia, em uma regi˜ao com
raio R ∼ 30 kpc e altura h ∼ 500 pc, de modo que o volume ocupado seria
2 67 3
V ∼ π R h ∼ 4 × 10 cm . Portanto, a energia contida nos raios c´osmicos
55
seria Erc ∼ ρrc V ∼ 6 × 10 erg. Assim, a fra¸c˜ao da energia das supernovas
necess´aria para acelerar os raios c´osmicos seria f ∼ Erc/Esn ∼ 0.02, ou 2%.
7.4 O LIMITE DE OORT
Diversos componentes da Gal´axia, como ´atomos em elevados estados de
ioniza¸c˜ao, algumas mol´eculas e part´ıculas s´olidas de grandes dimens˜oes, s˜ao de
dif´ıcil detec¸c˜ao pelos m´etodos astrof´ısicos usuais, que envolvem a observa¸c˜ao
de algum tipo de radia¸c˜ao. Portanto, ´e interessante determinar limites para
a contribui¸c˜ao desta mat´eria n˜ao detect´avel, o que pode ser feito atrav´es da
estimativa da atra¸c˜ao gravitacional total na dire¸c˜ao perpendicular ao plano
gal´actico. Como mostrado inicialmente por Jan Hendrik Oort (1900–1992),
este m´etodo pode tamb´em produzir limites para a contribui¸c˜ao da mat´eria
interestelar na Gal´axia (cf. Spitzer 1978).
Considerando-se a Gal´axia como um disco achatado, a determina¸c˜ao da
acelera¸c˜ao gravitacional gz na dire¸c˜ao z, perpendicular ao disco, fornece uma
estimativa da massa total na vizinhan¸ca solar, incluindo g´as e estrelas. A de-
termina¸c˜ao de gz ´e feita utilizando-se medidas da velocidade vz e do gradiente
de densidade na dire¸c˜ao z de grupos de estrelas homogˆeneos e suficientemente
brilhantes (cf. Maciel 2002).

---

## Página 230

218 Transporte de Energia em Astrof´ısica
Vamos considerar um disco gal´actico unidimensional, isto ´e, vamos des-
prezar os movimentos das estrelas nas dire¸c˜oes r e θ, considerando coordenadas
cil´ındricas, ficando apenas com os movimentos na dire¸c˜ao z, perpendicular ao
plano. Neste caso, admitindo estado estacion´ario, podemos definir uma fun¸c˜ao
de distribui¸c˜ao f(z, pz) dpz dV , ou seja, o n´umero de estrelas no volume dV
com quantidades de movimento entre pz e pz + dpz.
Um grupo de estrelas movendo-se na dire¸c˜ao perpendicular ao plano
gal´actico n˜ao constitui um “fluido” no sentido usual, como por exemplo a
camada de g´as em uma atmosfera estelar. Assim, em vez das equa¸c˜oes usuais
da hidrodinˆamica, devemos aplicar o Teorema de Liouville. De (7.59) podemos
ent˜ao escrever
∂f ∂f
vz + m gz = 0 (7.63)
∂z ∂pz
pz ∂f dφ ∂f
− m = 0 (7.64)
m ∂z dz ∂pz
onde m ´e a massa das estrelas, admitida constante, pz = m vz, e φ(z) ´e
o potencial gravitacional do disco, fun¸c˜ao apenas de z. Considerando que
gz = −dφ/dz e integrando obtemos
2
1 d(n〈v 〉)
z
= gz (7.65)
n dz
usando a equa¸c˜ao de Poisson
2
d φ
2
∇ φ = = 4πG ρ(z) (7.66)
2
dz
obtemos finalmente (ver por exemplo Maciel 2002, Spitzer 1978)
1 dgz
ρ(z) = − (7.67)
4πG dz

---

## Página 231

Processos Dinˆamicos I 219
Figura 7.4 - Determina¸c˜ao do limite de Oort.
Por meio das observa¸c˜oes das velocidades e densidades de grupos homogˆeneos
de estrelas de mesma massa, podemos determinar gz em fun¸c˜ao de z por (7.65)
e a densidade de massa total ρ(z) por (7.67). Isto foi feito por Oort para um
grupo de gigantes de tipo espectral K. As primeiras an´alises de Oort datam
de 1932, mas o trabalho na forma final ´e de 1960. A fun¸c˜ao gz obtida por
Oort para a vizinhan¸ca solar est´a mostrada na figura 7.4.
Para o plano gal´actico, z = 0 e a densidade de massa total ´e ρt ≃ 10 ×
−24 3 3 33
10 g/cm = 0.15 M⊙/pc , onde M⊙ = 1.99 × 10 g ´e a massa solar.
A parte deste material relativa `as estrelas ´e conhecida independentemente,
−24 3 3
sendo ρ∗ ≃ 4 × 10 g/cm = 0.06 M⊙/pc . Portanto, a densidade total
< −24 3
da mat´eria interestelar na vizinhan¸ca solar deve ser ρmi 6 × 10 g/cm
∼
3
= 0.09 M⊙/pc . Isto corresponde a 2.6 ´atomos de H por cent´ımetro c´ubico,
adotando-se uma abundˆancia He/H = 0.1 por n´umero de ´atomos. Este limite
´e conhecido como o Limite de Oort. Naturalmente, este valor est´a sujeito a
incertezas, n˜ao s´o devido a deficiˆencias observacionais como tamb´em a aproxi-
ma¸c˜oes no processo de c´alculo. Entretanto, trabalhos mais recentes produzem
essencialmente os mesmos resultados.
O valor da densidade do meio interestelar por medidas diretas do g´as e da
poeira na vizinhan¸ca solar ´e da mesma ordem de grandeza que o limite de Oort.
Desta forma, as estrelas, o meio interestelar e a mat´eria n˜ao detectada parecem

---

## Página 232

220 Transporte de Energia em Astrof´ısica
ter densidades compar´aveis. A maior parte da massa do meio interestelar,
cerca de 90%, est´a concentrada no g´as, restando aproximadamente 10% aos
gr˜aos interestelares.
EXEMPLO 7.16 - Massa do meio interestelar
Embora aparentemente baixa, a densidade do meio interestelar corresponde a
uma massa total consider´avel, uma vez que est´a espalhada por todo o disco
gal´actico. Para ilustra¸c˜ao, vamos considerar que o disco tem um diˆametro
da ordem de 2 R ≃ 30 kpc, e espessura h ≃ 500 pc. Com uma densidade
−24 3 2 43
ρmi ≃ 3 × 10 g/cm , a massa ´e Mmi ≃ π R h ρmi ≃ 3.1 × 10 g, suficiente
10
para formar cerca de 10 estrelas com massas iguais `a do Sol.
EXEMPLO 7.17 - Massa projetada sobre o plano gal´actico
Vamos considerar o valor da densidade de massa no plano gal´actico, dada pelo
3
limite de Oort, ρt ≃ 0.15 M⊙/pc . Supondo novamente que esta densidade
aplica-se ao volume de um cilindro de raio R = 15 kpc e altura h = 500 pc, a
massa total contida neste volume ´e
2 10
M ≃ π R h ρt ≃ 5.30 × 10 M⊙ (7.68)
a massa total projetada sobre o plano gal´actico ´e ent˜ao
2
Mp ≃ ρt h ≃ 75 M⊙/pc (7.69)
´
EXERCICIOS
7.1 J´upiter tem uma massa 318 vezes maior que a Terra, e gira em torno do
Sol a uma distˆancia m´edia de 5.2 UA com um per´ıodo de cerca de 11.86
anos. Mostre que o teorema do virial aplica-se tamb´em a este movimento.
7.2 Considere uma nuvem molecular esf´erica com densidade m´edia ρ, tem-
peratura T e massa M. Usando apenas rela¸c˜oes de proporcionalidade,
mostre que a nuvem poder´a se condensar se
3/2 −1/2
M > MJ ∝ T ρ

---

## Página 233

Processos Dinˆamicos I 221
7.3 Considere o n´ucleo denso de uma nuvem molecular gigante, com tempe-
ratura T = 10 K, composto de H molecular, com uma densidade nH =
2
4 −3
10 cm . Qual seria a massa de Jeans desta nuvem? Qual seria seu
tempo de queda livre?
7.4 Por meio de um tratamento te´orico dos movimentos oscilat´orios perpen-
diculares ao plano gal´actico, F. House e D. Kilkenny (Astronomy & As-
trophysics 81, 251, 1980) derivaram uma express˜ao anal´ıtica para a ace-
lera¸c˜ao gravitacional gz, v´alida para |z| ≤ 1 kpc
( )
2 z
gz = A0 sen + B0 + C0 exp (−α z)
R
onde A0, B0 e C0 s˜ao constantes, R ´e a distˆancia ao eixo gal´actico e
α = 1/h, sendo h a espessura efetiva da camada de g´as e estrelas acima
do plano gal´actico. As constantes foram determinadas por medidas das
velocidades radiais de estrelas OB na vizinhan¸ca solar, sendo A0 = 9.6 ×
−9 2 −9 2
10 cm/s , B0 = 5 rad e C0 = 9.0 × 10 cm/s . Considere um valor
m´edio 2 h ≃ 800 pc e R ≃ 8.5 kpc e determine a densidade de massa total
no plano gal´actico para a vizinhan¸ca solar. Compare seu resultado com
o valor obtido por Oort, baseado na an´alise das gigantes K.
7.5 Determina¸c˜oes da distribui¸c˜ao da densidade de massa na forma de estrelas
3
na vizinhan¸ca solar produzem os seguintes valores: 0.038 M⊙/pc para
3
as estrelas an˜as de tipos espectrais G, K e M; 0.020 M⊙/pc para as an˜as
3
brancas e 0.006 M⊙/pc para as demais estrelas. Qual ´e a massa total
3 3
na forma de estrelas, em M⊙/pc e em g/cm ? Compare seu resultado
com o limite de Oort.
REFERˆENCIAS BIBLIOGR ´AFICAS
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
COLLINS, G. W. 2003, The Virial Theorem in Stellar Astrophysics, Internet
edition, http://ads.harvard.edu/books/1978vtsa.book/

---

## Página 234

222 Transporte de Energia em Astrof´ısica
GOLDSTEIN, H., POOLE, C. P., SAFKO, J. L. 2001, Classical Mechanics,
Addison-Wesley
GREGORY, S. A., ZEILIK, M. 1997, Introdutory Astronomy and Astro-
physics, Brooks Cole
HARWIT, M. 2006, Astrophysical Concepts, Springer
LIMA NETO, G. 2006, Introdu¸c˜ao `a Dinˆamica Estelar, IAG/USP
MACIEL, W. J. 1999, Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar, Edusp
(edi¸c˜ao em inglˆes: Introduction to Stellar Structure, Springer 2015)
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
REIF, F. 1965, Fundamentals of Statistical and Thermal Physics, McGraw-
Hill (reedi¸c˜ao Waveland Press 2008)
SPITZER Jr., L. 1978, Physical Processes in the Interstellar Medium, Wiley
(student edition 1998)
SYMON, K. R. 1971, Mechanics, Addison-Wesley

---

## Página 235

## 8
## PROCESSOS DIN ˆAMICOS II
8.1 INTRODUC¸ ˜AO
No cap´ıtulo 7 vimos algumas aplica¸c˜oes do teorema do virial e em seguida
o teorema de Liouville, em particular a aplica¸c˜ao deste na determina¸c˜ao do
limite de Oort. As equa¸c˜oes correspondentes ao teorema do virial, teorema de
Liouville e equa¸c˜ao de Boltzmann tˆem aplica¸c˜oes diretas na Dinˆamica Estelar,
estando em ´ultima an´alise relacionadas com a energia dos sistemas f´ısicos e
sua transferˆencia. No presente cap´ıtulo, vamos apresentar uma discuss˜ao sim-
plificada da equa¸c˜ao de transporte de Boltzmann na ausˆencia de colis˜oes, que
´e um caso particular do teorema de Liouville, estender um pouco mais e apre-
sentar novas aplica¸c˜oes, em particular no que se refere `a relaxa¸c˜ao colisional
dos sistemas e `as equa¸c˜oes de Jeans. A referˆencia b´asica para este cap´ıtulo ´e o
trabalho de Choudhuri (2010), em particular o cap´ıtulo 7. Outras referˆencias
incluem Carroll e Ostlie (2014) e Lima Neto (2006), e textos mais avan¸cados
s˜ao Binney e Merrifield (1998) e Binney e Tremaine (2008), essencialmente
vers˜oes mais modernas e completas do trabalho anterior de Mihalas e Binney
(1981).

---

## Página 236

224 Transporte de Energia em Astrof´ısica
8.2 DIN ˆAMICA ESTELAR
De acordo com a classifica¸c˜ao de Hubble, as gal´axias podem ser espirais, es-
pirais barradas, el´ıpticas e irregulares (figura 8.1), o que inclui a maior parte
das gal´axias conhecidas. Em nossa pr´opria Gal´axia, aglomerados de estrelas
podem ser abertos e globulares (figura 8.2), sendo suas propriedades f´ısicas
geralmente bastante diferentes. Uma vez que esses sistemas s˜ao compostos
basicamente de estrelas e g´as, e suas massas luminosas est˜ao essencialmente
concentradas nas estrelas, ´e interessante investigar porque conjuntos de estre-
las assumem formas e tamanhos t˜ao diferentes.
Figura 8.1 - Gal´axias segundo a classifica¸c˜ao de Hubble. (a) espiral, NGC 4321
(M100); (b) espiral barrada, NGC 1365; (c) el´ıptica, NGC 4486 (M87); (d) irregular,
Grande Nuvem de Magalh˜aes.

---

## Página 237

Processos Dinˆamicos II 225
Figura 8.2 - Aglomerados de estrelas. (a) Globular, NGC 5139, Omega Centauri; (b)
aberto, NGC 4755, Caixa de Joias.
As estrelas podem, em primeira aproxima¸c˜ao, ser consideradas como
part´ıculas que se atraem mutuamente de acordo com a lei de Newton, em
que a for¸ca de atra¸c˜ao ´e inversamente proporcional ao quadrado da separa¸c˜ao
entre os pontos. A Dinˆamica Estelar tem como objetivo estudar os processos
dinˆamicos que ocorrem nesses sistemas, que s˜ao geralmente autogravitantes.
Em outras palavras, podemos em primeira aproxima¸c˜ao desprezar o g´as no
espa¸co entre as estrelas, e considerar apenas as intera¸c˜oes gravitacionais entre
elas para analisar a estrutura dinˆamica do sistema. Como veremos, o estudo
da estrutura gal´actica ´e muito mais complexo que o estudo da estrutura in-
terna das estrelas, e basicamente estaremos limitados `a compara¸c˜ao dos efeitos
combinados da atra¸c˜ao gravitacional e do movimento das estrelas, analisados
a partir de hip´oteses b´asicas, como os teoremas do virial e de Liouville, al´em
da distribui¸c˜ao maxwelliana de velocidades. An´alises mais profundas est˜ao
al´em dos objetivos deste texto, e o leitor interessado poder´a consultar textos
mais avan¸cados como o de Binney e Tremaine (2008).
Vamos considerar um g´as composto de part´ıculas idˆenticas com uma
certa distribui¸c˜ao maxwelliana de velocidades. Uma vez perturbado, de modo
que a distribui¸c˜ao sofra modifica¸c˜oes, ap´os um certo tempo a distribui¸c˜ao
maxwelliana tende a se reestabelecer novamente, em raz˜ao das colis˜oes entre
as part´ıculas. Neste caso, o g´as sofre uma relaxa¸c˜ao, alcan¸cando novamente
uma distribui¸c˜ao de equil´ıbrio. No caso de um sistema estelar, a separa¸c˜ao
entre as “part´ıculas” ´e normalmente muito grande, de modo que n˜ao ocorrem
estritamente colis˜oes entre as estrelas, mas suas ´orbitas podem ser afetadas

---

## Página 238

226 Transporte de Energia em Astrof´ısica
e modificadas pelo campo gravitacional das demais estrelas. Portanto, essas
intera¸c˜oes funcionam como colis˜oes, e tendem a produzir uma relaxa¸c˜ao da
distribui¸c˜ao de velocidades das estrelas. Em um sistema como um aglomerado
globular (figura 2a), o tempo de relaxa¸c˜ao ´e relativamente curto, de modo que
a relaxa¸c˜ao colisional ´e importante, e o sistema ´e relaxado. J´a no caso de uma
gal´axia t´ıpica, o tempo de relaxa¸c˜ao ´e maior que a idade do universo, de
modo que essas gal´axias n˜ao s˜ao sistemas relaxados. No primeiro caso, as
colis˜oes s˜ao importantes, e devem ser levadas em conta na an´alise dinˆamica,
enquanto que no segundo caso as colis˜oes podem ser ignoradas em primeira
aproxima¸c˜ao. Em outras palavras, em sistemas relaxados, como alguns aglo-
merados globulares, devemos empregar um formalismo colisional de dinˆamica
estelar, enquanto que em sistemas n˜ao relaxados, como gal´axias t´ıpicas, pode-
mos usar uma dinˆamica estelar sem colis˜oes. Na realidade, uma distribui¸c˜ao
maxwelliana s´o pode ser obtida se houver equil´ıbrio termodinˆamico, como vi-
mos no cap´ıtulo 2, se¸c˜ao 2.4. Entretanto, os sistemas autogravitantes n˜ao s˜ao
estritamente compat´ıveis com o equil´ıbrio termodinˆamico. Em um g´as contido
em um recipiente, as colis˜oes entre as part´ıculas do g´as terminar˜ao por esta-
belecer uma distrbui¸c˜ao maxwelliana de velocidades ajustada ao equil´ıbrio ter-
modinˆamico. Em um sistema estelar relaxado isso n˜ao ocorre, e em equil´ıbrio
termodinˆamico a exigˆencia de uma solu¸c˜ao auto-consistente para um sistema
autogravitante leva a resultados fisicamente inaceit´aveis, de modo que um
sistema estelar com um n´umero finito de estrelas n˜ao pode relaxar a uma
distribui¸c˜ao de velocidades caracter´ıstica do equil´ıbrio termodinˆamico. Esta
pode ser a raz˜ao da existˆencia de buracos negros no interior das gal´axias.
Portanto, a an´alise rigorosa dos sistemas estelares dinˆamicos ´e mais complexa
do que pode ser tratado neste texto. Uma discuss˜ao deste problema pode ser
encontrada em Choudhuri (2010, cap´ıtulo 7).
EXEMPLO 8.1 - Fric¸c˜ao dinˆamica
Um efeito importante da evolu¸c˜ao colisional de sistemas dinˆamicos ´e a cha-
mada fric¸c˜ao dinˆamica, que pode ser entendida a partir de conceitos simples.
Para que uma estrela penetre o po¸co de potencial no centro de um sistema
estelar, ela deve perder parte de sua energia cin´etica por algum processo fric-
cional. Uma vez que colis˜oes reais entre estrelas s˜ao improv´aveis, outro pro-
cesso foi proposto inicialmente por Chandrasekhar (1943), segundo o qual a
estrela sofre um arraste, ou fric¸c˜ao dinˆamica, ao mover-se no conjunto das
estrelas do sistema. Isto pode ser ilustrado pela figura 8.3.

---

## Página 239

Processos Dinˆamicos II 227
Figura 8.3 - Fric¸c˜ao dinˆamica.
Uma estrela movendo-se de A para B atrai as estrelas pr´oximas mais
fortemente que as estrelas mais distantes. Assim, a densidade de estrelas ao
longo da trajet´oria AB deve ser um pouco maior que nas regiˆoes mais `a frente,
al´em do ponto B. Portanto, ao mover-se de A para B, a estrela sofre uma
atra¸c˜ao gravitacional mais intensa que tende a interromper seu movimento, o
que constitui a fric¸c˜ao dinˆamica.
8.3 O TEOREMA DO VIRIAL NA DIN ˆAMICA ESTELAR
Vamos considerar agora o teorema do virial para descrever estatisticamente
o comportamento dinˆamico de um sistema composto por muitas part´ıculas,
ou seja, n˜ao vamos considerar part´ıculas individuais, mas valores adequados
para descrever o comportamento m´edio do sistema de part´ıculas (cf. Harwit
2006). Para isso, vamos considerar um sistema composto por part´ıculas de
~
massa mi situadas na posi¸c˜ao r~i e sob a a¸c˜ao da for¸ca Fi. A for¸ca pode ser
escrita como
d~pi
~ ˙
Fi = =p~i (8.1)
dt
onde p~i ´e a quantidade de movimento da part´ıcula i. A energia cin´etica Ec
do sistema ´e
∑ ∑
1 1
˙
Ec = mi v~i · v~i = p~i · r~i (8.2)
2 2
i i

---

## Página 240

228 Transporte de Energia em Astrof´ısica
podemos ent˜ao escrever a rela¸c˜ao
∑ ∑ ∑ ∑
d
˙ ˙ ~
p~i · r~i = p~i · r~i + p~i · r~i = 2 Ec + Fi · r~i (8.3)
dt
i i i i
Vamos tomar as m´edias de ambos os membros de (8.3) em uma escala de
tempo τ
∫ [ ]
τ ∑ ∑
1 d
~
p~i · r~i dt = 〈2 Ec + Fi · r~i〉 (8.4)
τ dt
0
i i
Vamos admitir que o sistema ´e isolado e est´avel, isto ´e, todos os seus membros
permanecem indefinidamente membros do sistema, de modo que o vetor de
posi¸c˜ao r~i ´e sempre finito. Da mesma forma, p~i tamb´em ´e sempre finito, pois
∑
a energia total do sistema ´e finita. Portanto, a somat´oria p~i · r~i ´e finita,
assim como a integral em (8.4). Nesta equa¸c˜ao o primeiro membro ´e uma
quantidade finita dividida pela escala de tempo τ, que pode ser t˜ao grande
quanto se queira, ou seja, τ → ∞, de modo que o primeiro membro de (8.4)
tende a zero. Nesse caso, podemos escrever
∑ ∑
~ ~
〈2 Ec + Fi · r~i〉 = 2 〈Ec〉 + 〈 Fi · r~i〉 = 0 (8.5)
i i
O “virial”, ou “virial de Claussius” ´e definido como a metade do segundo
∑
~
termo do segundo membro desta equa¸c˜ao, ou seja, (1/2)〈 Fi ·r~i〉. Podemos
i
considerar a for¸ca como deriv´avel de um potencial
~ ~
Fi = −∇Ep(r~i) (8.6)
onde Ep(r~i) ´e a energia potencial da massa mi na posi¸c˜ao r~i. A equa¸c˜ao (8.5)
pode ent˜ao ser escrita
∑ ∑
¯ ~ ¯ ~
2Ec + 〈− ∇Ep(r~i) · r~i〉 = 2Ec − 〈 ∇Ep(r~i) · r~i〉 = 0 (8.7)
i i
¯
onde usamos a nota¸c˜ao Ec para a energia cin´etica m´edia. Para uma lei do
−2 −1
tipo F ∝ r , temos que Ep ∝ r e o vetor gradiente da energia potencial
~
∇Ep ´e paralelo ao vetor de posi¸c˜ao r~i, de modo que
[ ]
∑ ∑ ∑ ∑
∂Ep(r~i) Ep(ri)
~
∇Ep(r~i) · r~i = r~i = − ri = − Ep(ri) (8.8)
∂ ~ri ri
i i i i

---

## Página 241

Processos Dinˆamicos II 229
chamando agora Ep a energia potencial total, tal que
∑
Ep = Ep(ri) (8.9)
i
∑
¯
Ep = 〈 Ep(ri)〉 (8.10)
i
podemos escrever, de (8.7)-(8.8)
¯ ¯
2Ec +Ep = 0 (8.11)
que ´e a express˜ao do teorema do virial para um sistema de part´ıculas, com
aplica¸c˜oes importantes na Mecˆanica, Mecˆanica Estat´ıstica e Teoria Cin´etica
dos Gases, como por exemplo na deriva¸c˜ao da equa¸c˜ao de estado de gases per-
feitos e reais. Vemos que a forma do teorema do virial para a dinˆamica estelar,
equa¸c˜ao (8.11), ´e idˆentica `a forma deste teorema para a estrutura estelar, dada
pela equa¸c˜ao (6.6), onde a energia t´ermica substitui a energia cin´etica. Como
a energia t´ermica ´e essencialmente a energia cin´etica das part´ıculas do g´as
nas estrelas, vemos que as duas rela¸c˜oes tˆem basicamente o mesmo signifi-
cado. Uma dedu¸c˜ao equivalente pode ser encontrada em Choudhuri (2010,
se¸c˜ao 7.2), onde se mostra que, para um sistema de part´ıculas em estado esta-
¯
cion´ario, existe uma rela¸c˜ao entre a energia potencial gravitacional total Ep
¯
e a energia cin´etica total Ec do sistema dada por 8.11. Esta rela¸c˜ao ´e v´alida
tanto para sistemas colisionalmente relaxados ou n˜ao relaxados, desde que
estejam ligados gravitacionalmente em um estado estacion´ario, isto ´e, suas
dimens˜oes n˜ao sofrem modifica¸c˜oes com o tempo.
EXEMPLO 8.2 - O teorema do virial e a massa dos aglomerados estelares
Vamos considerar uma aplica¸c˜ao do teorema do virial a um aglomerado estelar.
Seja N o n´umero de estrelas de massa m em um aglomerado. O n´umero de
pares de estrelas do sistema ´e
2
N(N − 1) N
Np = ≃ (8.12)
2 2
A energia potencial gravitacional dos pares de estrelas do sistema ´e
2
G m
¯
Ep ≃ − Np (8.13)
¯
R

---

## Página 242

230 Transporte de Energia em Astrof´ısica
¯ ¯
ondeR ´e a distˆancia m´edia entre as estrelas do par, tal queR ≃ R, onde R ´e
o raio do aglomerado. A energia cin´etica m´edia total do aglomerado ´e
1
¯ ¯2
Ec ≃ N m v (8.14)
2
¯2
ondev ´e a velocidade quadr´atica m´edia das estrelas do aglomerado. Usando
(8.11)-(8.14) obtemos
2 2
N G m
¯2
N m v ≃ (8.15)
2 R
de modo que
N G m G M
¯2
v ≃ ≃ (8.16)
2 R 2 R
onde M ≃ N m ´e a massa total do aglomerado. Esta massa pode ser obtida de
(8.16) conhecendo (i) a dispers˜ao de velocidades das estrelas do aglomerado,
geralmente por meio da aplica¸c˜ao do efeito Doppler em linhas espectrais, e
(ii) o tamanho do aglomerado, que pode ser obtido a partir de sua distˆancia
e de suas dimens˜oes angulares.
Figura 8.4 - O aglomerados globular M13, NGC 6205 em Hercules.
Como exemplo, vamos considerar o aglomerado globular M13 = NGC
6205 em Hercules (figura 8.4). Este aglomerado tem um tempo de relaxa¸c˜ao
m´edio da ordem de 1 Gano, bem abaixo da idade da Gal´axia. A dispers˜ao de
velocidades ´e da ordem de v ≃ 8 km/s, e o aglomerado est´a a uma distˆancia
de 8 kpc, com um diˆametro angular φ = 8 minutos de arco.

---

## Página 243

Processos Dinˆamicos II 231
O raio do aglomerado ´e aproximadamente R = (φ/2) d, ou
( )
4 π
3 18 19
R ≃ (8 × 10 × 3.09 × 10 ) ≃ 2.9 × 10 cm = 9.3 pc
60 180
aplicando a equa¸c˜ao (8.16) obtemos para a massa total do aglomerado
¯2 19 5 2
2 R v (2) (2.9 × 10 ) (8 × 10 )
38 5
M ≃ ≃ ≃ 5.6 × 10 g = 2.8 × 10 M⊙
−8
G 6.67 × 10
Podemos agora inverter o racioc´ınio e considerar o aglomerado com raio 9.3 pc
5
e massa 2.8 × 10 M⊙. Se sua dispers˜ao de velocidade fosse menor que cerca
de 8 km/s, a gravidade dominaria e o aglomerado iria encolher. Com isto,
a energia potencial gravitacional diminuiria, aumentando a energia cin´etica
das estrelas do aglomerado. Assim, a dispers˜ao de velocidade aumentaria,
at´e atingir o valor de 8 km/s suficiente para satisfazer a equa¸c˜ao (8.16) e
interromper a contra¸c˜ao. Vemos que a aplica¸c˜ao desta equa¸c˜ao s´o produz
resultados corretos se o sistema estiver ligado gravitacionalmente, ou seja,
virializado.
EXEMPLO 8.3 - O teorema do virial e a massa dos aglomerados de gal´axias
Aglomerados ricos em gal´axias tˆem tipicamente algumas centenas de gal´axias,
e dimens˜oes da ordem de 1–3 Mpc, como no caso do Aglomerado de Hydra
(figura 8.5). Podemos estimar a massa dinˆamica de um aglomerado de gal´axias
e a massa m´edia das gal´axias do aglomerado a partir do teorema do virial (ver
por exemplo Schneider 2006).
Vamos admitir que o aglomerado ´e gravitacionalmente isolado e est´avel,
ou seja, est´a em equil´ıbrio dinˆamico. A primeira hip´otese implica na ausˆencia
de massas invis´ıveis, por exemplo na forma de mat´eria intergal´actica, gal´axias
an˜as invis´ıveis, poeira, etc. Os aglomerados s˜ao ligados gravitacionalmente,
pois a escala de tempo dinˆamica dos aglomerados, definida como o tempo
m´edio para que uma gal´axia possa cruzar todo o aglomerado (tamb´em cha-
mado “tempo de cruzamento”, ´e menor que a idade do Universo. Se os aglo-
merados n˜ao fossem ligados, eles teriam sido dissolvidos em uma escala de
tempo da ordem da escala de tempo dinˆamica.

---

## Página 244

232 Transporte de Energia em Astrof´ısica
Figura 8.5 - O Aglomerado de Hydra.
Os aglomerados ricos tˆem dimens˜oes t´ıpicas de 2 Mpc, e as velocidades
t´ıpicas das gal´axias s˜ao da ordem de 1000 km/s. Portanto, a escala de tempo
9
desses aglomerados pode ser estimada por τ ∼ 2 × 10 anos, menor que a
idade estimada para o Universo, que ´e da ordem de 14 Gano.
¯
A energia cin´etica m´edia Ec do aglomerado depende das massas e veloci-
dades das gal´axias que comp˜oem o aglomerado
1
¯ 2
Ec ≃ M σ (8.17)
v
2
2
onde M ´e agora a massa total do aglomerado e σ ´e a dispers˜ao da velocidade
v
¯
quadr´atica m´edia das gal´axias componentes. A energia potencial m´edia Ep
depende das massas e posi¸c˜oes das gal´axias
2
G M
¯
Ep ≃ − (8.18)
R

---

## Página 245

Processos Dinˆamicos II 233
onde R ´e o raio gravitacional do aglomerado. As posi¸c˜oes e dispers˜oes das
velocidades radiais dos objetos do aglomerado podem ser obtidas a partir
das observa¸c˜oes, de modo que a massa total do aglomerado pode ser obtida
aplicando o teorema do virial (8.11), ou seja
2
G M
2
M σ ≃ (8.19)
v
R
2
σ R
v
M ≃ (8.20)
G
Considerando o n´umero N de gal´axias do aglomerado, a massa m´edia dessas
gal´axias pode ser obtida por
2
M σ R
v
m ≃ ≃ (8.21)
N N G
As dispers˜oes de velocidades dos aglomerados ricos s˜ao tipicamente de 400–
1400 km/s, e seus raios gravitacionais s˜ao da ordem de 1–3 Mpc. Com σv ≃
1000 km/s e R ≃ 2 Mpc, as massas totais dos aglomerados s˜ao da ordem de
47 14
M ≃ 9.3 × 10 g ≃ 4.7 × 10 M⊙. Se o aglomerado tiver cerca de N ≃ 100
12
gal´axias, a massa m´edia de cada uma delas ser´a m ≃ M/N ≃ 4.7 × 10 M⊙.
8.4 RELAXAC¸ ˜AO COLISIONAL
Uma determina¸c˜ao rigorosa do tempo de relaxa¸c˜ao em sistemas estelares pode
ser encontrada em Binney e Tremaine (2008, cap´ıtulo 4). Vamos aqui obter
uma estimativa simples desta escala de tempo, considerando um sistema este-
lar (gal´axia ou aglomerado) contendo n estrelas por unidade de volume, cada
uma delas com massa m, movendo-se com velocidade v (cf. Choudhuri 2010,
cap´ıtulo 7).
Cada estrela move-se segundo o campo gravitacional produzido pelas de-
mais estrelas. Se houver uma outra estrela suficientemente pr´oxima, a ´orbita
da estrela considerada sofrer´a uma deflex˜ao causada pelo campo gravitacional
da estrela vizinha, o que constitui uma “colis˜ao”, embora as estrelas sejam pe-
quenas em rela¸c˜ao `as distˆancias de separa¸c˜ao entre elas para haver realmente
uma colis˜ao, como no caso de bolas de bilhar. Considerando que uma estrela 1
de massa m e velocidade v tem quantidade de movimento p = m v, podemos
considerar que uma outra estrela 2 est´a suficientemente pr´oxima para haver
uma “colis˜ao” quando sua distˆancia at´e a trajet´oria original da estrela 1 seja

---

## Página 246

234 Transporte de Energia em Astrof´ısica
igual ou menor a uma certa escala de distˆancia b, tal que a deflex˜ao causada
na estrela 1 produza uma modifica¸c˜ao na sua quantidade de movimento dada
por ∆p ≃ m v, ou seja, a varia¸c˜ao na quantidade de movimento da estrela 1
deve ser da ordem da sua quantidade de movimento original.
Quando as duas estrelas est˜ao pr´oximas, a uma distˆancia b uma da outra,
2 2
a for¸ca gravitacional entre elas ´e da ordem de G m /b . Esta for¸ca atua por
um intervalo de tempo da ordem de b/v. Portanto, a varia¸c˜ao da quantidade
de movimento da estrela 1 deve ser aproximadamente
2 2
G m b G m
∆p ≃ = (8.22)
2
b v b v
como devemos ter ∆p ≃ m v, obtemos
2
G m
≃ m v (8.23)
b v
ou seja, a distˆancia limite para haver colis˜oes deve ser
2
G m G m
b ≃ ≃ (8.24)
2 2
m v v
2
Movendo-se `a velocidade v, a estrela 1 varre um volume dado por π b v por
unidade de tempo. Havendo n estrelas por unidade de volume, o n´umero total
2
de colis˜oes por unidade de tempo ´e n π b v, de modo que o tempo m´edio entre
as colis˜oes ´e o inverso deste valor, ou seja
1
tr ≃ (8.25)
2
n π b v
Esta escala de tempo caracteriza uma modifica¸c˜ao na distribui¸c˜ao de veloci-
dades original, ou seja, tr ´e essencialmente o tempo de relaxa¸c˜ao colisional
procurado. Considerando (8.24), temos
4 3
1 v v
tr ≃ ≃ ≃ (8.26)
2 2 2 2 2
n π b v n π v G m π G n m
Para obter estimativas num´ericas, vamos considerar m = M⊙, medir v em
−3
km/s, n em parsec e tr em anos. Obtemos ent˜ao
3
v
10
tr ≃ 1.7 × 10 (8.27)
n

---

## Página 247

Processos Dinˆamicos II 235
EXEMPLO 8.4 - O tempo de relaxa¸c˜ao para a Gal´axia
Vamos considerar alguns exemplos de sistemas estelares e estimar o tempo de
relaxa¸c˜ao usando a express˜ao simplificada (8.27). Para a nossa Gal´axia, temos
velocidades aproximadamente de v ≃ 100 km/s, da ordem das velocidades de
9
rota¸c˜ao no disco gal´actico. Tomando N ≃ 200 × 10 estrelas concentradas no
disco espesso, com raio R ≃ 30 kpc e altura h ≃ 1 kpc, temos
2 67 3
V ≃ π R h ≃ 8.3 × 10 cm
N
−57 −3 −3 −3
n ≃ ≃ 2.4 × 10 cm ≃ 0.07 pc ≃ 0.1 pc
V
−3 17
Com v ≃ 100 km/s e n ≃ 0.1 pc em (8.27) obtemos tr ≃ 1.7 × 10 ano.
Vemos que esta escala ´e muito mais longa que a idade da Gal´axia, estimada
em 14 Gano. Portanto, nosso sistema estelar n˜ao ´e um sistema relaxado
colisionalmente.
EXEMPLO 8.5 - O tempo de relaxa¸c˜ao para aglomerados abertos
Vamos agora considerar um aglomerado aberto como M11 (figura 8.6). O
aglomerado tem cerca de 7000 estrelas, e seu raio ´e de aproximadamente
R ≃ 3 pc, de modo que
N 7000
−3
n ≃ ≃ ≃ 65 pc (8.28)
3
4 R (4) (27)
adotando velocidades v ≃ 1.2 km/s, temos de (8.27)
3
(1.2)
10 8
tr ≃ 1.7 × 10 ≃ 4.5 × 10 ano
65
Esta escala ´e menor que a idade da Gal´axia, de modo que um aglomerado com
estas condi¸c˜oes pode estar relaxado. Para um aglomerado com v ≃ 0.5 km/s
−3 9
e n ≃ 1.0 pc , temos tr ≃ 10 ano.

---

## Página 248

236 Transporte de Energia em Astrof´ısica
Figura 8.6 - O Aglomerado aberto M11 (NGC 6705).
EXEMPLO 8.6 - O tempo de relaxa¸c˜ao para aglomerados globulares
3 −3
Para um aglomerado globular t´ıpico, temos v ≃ 10 km/s e n ≃ 10 pc , de
10
modo que o tempo de relaxa¸c˜ao ´e tr ≃ 1.7 × 10 ano. Assim, o aglome-
rado poder´a estar relaxado, pelo menos parcialmente. A tabela 8.1 mostra os
tempos de relaxa¸c˜ao estimados para diversos aglomerados globulares usando
um procedimento mais rigoroso que o delineado acima. Esses tempos foram
estimados na posi¸c˜ao Rh, onde metade da massa do aglomerado est´a contida
(Cox 2000).
Nome log tr (ano)
NGC 104 9.24
NGC 288 8.99
NGC 362 8.43
NGC 2419 10.28
NGC 2298 8.36
NGC 5272 9.02
Tabela 8.1 - Tempos de relaxa¸c˜ao para aglomerados globulares.

---

## Página 249

Processos Dinˆamicos II 237
8.5 TEMPO DE CRUZAMENTO E TEMPO DE RELAXAC¸ ˜AO
Vamos considerar uma estrela de massa m movendo-se com velocidade v em
um sistema estelar de raio R contendo N estrelas. Podemos definir o tempo
de cruzamento por
R
tc ≃ (8.29)
v
usando (8.26), temos
3 4
tr v v v
≃ ≃ (8.30)
2 2 2 2
tc π G n m R π G n m R
Se o sistema estiver virializado, podemos usar uma rela¸c˜ao como (8.16), ou
seja,
G M G N m
2
v ≃ ≃ (8.31)
R R
De (8.30) e (8.31)
[ ] [ ]
2 2 2 2
tr G N m 1 N
≃ ≃ (8.32)
2 2 2 3
tc R π G n m R π n R
em ordem de grandeza
3
N ≃ n π R (8.33)
temos ent˜ao
tr
≃ N (8.34)
tc
Isto ´e, em um sistema estelar virializado com N estrelas, o tempo de relaxa¸c˜ao
colisional ´e cerca de N vezes maior que o tempo de cruzamento para uma
estrela t´ıpica do sistema. Por exemplo, no caso do aglomerado globular do
10
Exemplo 8.6, temos v ≃ 10 km/s e tr ≃ 1.7 × 10 ano. Podemos obter uma
3 −3 5
densidade n ≃ 10 pc com N ≃ 10 em um raio R dado por
( ) [ ]
1/3 5 1/3
N 10
R ≃ ≃ ≃ 2.9 pc
3
4 n (4) (10 )

---

## Página 250

238 Transporte de Energia em Astrof´ısica
portanto
18
R (2.9) (3.09 × 10 )
5
tc ≃ ≃ ≃ 2.9 × 10 ano
5 7
v (10) (10 ) (3.16 × 10 )
10 5 4
de modo que tr/tc ≃ 1.7 × 10 /2.9 × 10 ≃ 5.9 × 10 , cerca de 70% abaixo
5
do valor considerado, N ≃ 10 , um resultado razo´avel, considerando que a
express˜ao (8.34) ´e aproximada.
EXEMPLO 8.7 - Aglomerado globular virializado
5
Vamos considerar um aglomerado globular esf´erico com N = 2 × 10 estrelas
com massa m = 1 M⊙. A velocidade m´edia das estrelas do aglomerado ´e
v ≃ 10 km/s. Admitindo que o aglomerado est´a em equil´ıbrio (virializado)
podemos estimar seu raio. Usando o teorema do virial na forma 2 Ec = −Ep
temos
1 1
2 2
Ec ≃ N m v ≃ M v (8.35)
2 2
2 2 2
G M G N m
Ep ≃ − ≃ − (8.36)
R R
ou seja
2 2
G N m
2
N m v ≃ (8.37)
R
G N m
19
R ≃ ≃ 8.6 pc ≃ 2.7 × 10 cm (8.38)
2
v
O tempo m´edio de cruzamento das estrelas do aglomerado ´e
R
5 13
tc ≃ ≃ 8.4 × 10 ano ≃ 2.7 × 10 s (8.39)
v
EXEMPLO 8.8 - Tempo para colis˜ao entre duas estrelas
Vamos estimar o tempo m´edio necess´ario para uma colis˜ao entre duas estrelas
do disco gal´actico. Podemos considerar o disco como um cilindro com raio
11
Rd = 30 kpc e altura hd = 1 kpc, contendo N = 2 × 10 estrelas. As estrelas
10
tˆem raios iguais ao do Sol, R = R⊙ = 6.96 × 10 cm e sua dispers˜ao de
velocidades ´e v ≃ 10 km/s. A escala de tempo de colis˜ao ´e

---

## Página 251

Processos Dinˆamicos II 239
λ
τc ≃ (8.40)
v
onde λ ´e a distˆancia m´edia percorrida pela estrela
1 V
λ ≃ ≃ (8.41)
2
n σ N π R
⊙
2
V R hd
d 28 11
τc ≃ ≃ ≃ 2.7 × 10 s ≃ 8.7 × 10 Gano (8.42)
2 2
N π R v N R v
⊙ ⊙
2
onde adotamos σ ≃ π R , mas o raio efetivo para colis˜oes deve ser maior
⊙
que este valor, de modo que τc est´a superestimada. A idade do disco ´e de
aproximadamente τd ≃ 13 Gano. Comparando o valor obtido com esta escala
de tempo vemos que τc >> τd, e assim n˜ao h´a colis˜oes.
˜
8.6 A EQUAC¸AO DE TRANSPORTE DE BOLTZMANN
˜ ˆ ˜
8.6.1 A EQUAC¸AO DE BOLTZMANN NA AUSENCIA DE COLISOES
Vamos considerar a equa¸c˜ao de transporte de Boltzmann em sua forma
mais simples, na ausˆencia de colis˜oes. Veremos que esta equa¸c˜ao ´e um caso
especial do teorema de Liouville, que analisamos na se¸c˜ao 7.3. Nesta se¸c˜ao
vamos adotar o tratamento dado por Reif (1965, cap´ıtulo 13).
A teoria dos processos de transporte sup˜oe que seja conhecida a fun¸c˜ao
3 3
de distribui¸c˜ao das part´ıculas do sistema, f(~r, ~v, t), tal que f(~r, ~v, t) d ~r d ~v
represente o n´umero m´edio de part´ıculas localizadas entre ~r e ~r + d~r, com
velocidades entre ~v e ~v + d~v, no tempo t. Esta fun¸c˜ao d´a uma descri¸c˜ao
completa do estado macrosc´opico do g´as, de modo que qualquer problema de
transporte possa ser resolvido a partir do conhecimento desta fun¸c˜ao. Va-
mos admitir que cada part´ıcula de massa m esteja sob a a¸c˜ao de uma for¸ca
~
F(~r, t), a qual n˜ao depende da velocidade das part´ıculas. Esta for¸ca pode ser,
por exemplo, de origem gravitacional ou devida a campos el´etricos. Vamos
tamb´em desprezar as colis˜oes ou outras intera¸c˜oes que poderiam ocorrer entre
as part´ıculas do g´as. Vamos considerar as part´ıculas que, no tempo t, tˆem
posi¸c˜oes e velocidades nos intervalos (~r, ~r + d~r) e (~v, ~v + d~v), respectivamente,
3 3 ′
ou seja, no intervalo designado por d ~r d ~v. Em um tempo t = t + dt ap´os
um intervalo de tempo dt, as posi¸c˜oes e velocidades das part´ıculas seriam
~′ ˙ ~′ ˙ ~
r = ~r +~r dt = ~r +~v dt e v = ~v +~v dt = ~v + F /m dt. Na ausˆencia de colis˜oes,
temos

---

## Página 252

240 Transporte de Energia em Astrof´ısica
~′ ~′ ′ 3~′ 3~′ 3 3
f(r ,v , t ) d r d v = f(~r, ~v, t) d ~r d ~v (8.43)
Nas condi¸c˜oes admitidas, os elementos de volume s˜ao essencialmente os mes-
3~′ 3~′ 3 3
mos, em uma primeira aproxima¸c˜ao d r d v = d ~r d ~v, portanto, temos
~′ ~′ ′
f(r ,v , t ) = f(~r, ~v, t) (8.44)
˙ ˙
f(~r +~r dt, ~v +~v dt, t + dt) − f(~r, ~v, t) = 0 (8.45)
Usando derivadas parciais em um sistema de coordenadas cartesianas x, y, z,
temos
[( ) ( ) ]
∂f ∂f ∂f ∂f ∂f ∂f ∂f
x˙ + y˙ + z˙ + v˙x + v˙y + v˙z + dt = 0 (8.46)
∂x ∂y ∂z ∂vx ∂vy ∂vz ∂t
que pode ser escrita
∂f ∂f ∂f
˙ ˙
+~r · +~v · = 0 (8.47)
∂t ∂~r ∂~v
~
∂f ∂f F ∂f
+ ~v · + · = 0 (8.48)
∂t ∂~r m ∂~v
Os termos ∂f /∂~r e ∂f /∂~v denotam os gradientes com rela¸c˜ao a ~r e ~v, respec-
tivamente. As rela¸c˜oes (8.45)–(8.48) s˜ao formas da Equa¸c˜ao de transporte de
Boltzmann na ausˆencia de colis˜oes, tamb´em chamada Equa¸c˜ao de Vlasov na
f´ısica de plasmas, mostrando que a fun¸c˜ao de distribui¸c˜ao f permanece inal-
terada ao longo de uma trajet´oria no espa¸co de fase. Vemos que esta equa¸c˜ao
representa um caso particular do teorema de Liouville. De fato, ela pode ser
obtida usando o mesmo procedimento da se¸c˜ao 7.3 para obter o teorema de
Liouville (ver Reif 1965, cap´ıtulo 13).
EXEMPLO 8.9 - A equa¸c˜ao de Boltzmann na presen¸ca de um campo
magn´etico
Na presen¸ca de um campo magn´etico, as for¸cas tˆem uma dependˆencia com
a velocidade; por exemplo, a for¸ca de Lorentz pode ser escrita como FL =
~ ~
(q/c)~v × B, onde q denota a carga el´etrica da part´ıcula e B a intensidade do
campo. Para generalizar a equa¸c˜ao de Boltzmann na ausˆencia de colis˜oes para
′
incluir essas for¸cas, podemos introduzir uma fun¸c˜ao de distribui¸c˜ao f (~r, ~p, t),

---

## Página 253

Processos Dinˆamicos II 241
envolvendo a quantidade de movimento p~ das part´ıculas, em vez de sua ve-
locidade. Pelo teorema de Liouville, a fun¸c˜ao f deve satisfazer a equa¸c˜ao
′ ′ ′
∂f ∂f ∂f
˙ ˙
+~r · +p~ · = 0 (8.49)
∂t ∂~r ∂~p
onde definimos a quantidade de movimento como
q
~
p~ = m ~v + A (8.50)
c
~
em termos de um potencial vetor A.
˜ ˜
8.6.2 A EQUAC¸AO DE BOLTZMANN COM COLISOES
Vamos relaxar a hip´otese de ausˆencia de colis˜oes, em que a equa¸c˜ao
de Boltzmann tem a forma (8.45)–(8.48). Vamos considerar novamente as
3 3
part´ıculas que, no tempo t, tˆem posi¸c˜oes e velocidades no intervalo d ~r d ~v
em torno de ~r e ~v. Em um intervalo de tempo dt ap´os o tempo t, se n˜ao
houver colis˜oes, as part´ıculas ir˜ao se mover sob a a¸c˜ao das for¸cas externas
′ ˙ ′ ˙
aplicadas, alcan¸cando uma posi¸c˜ao no entorno de ~r = ~r +~r dt e ~v = ~v +~v dt
(eq. 8.43). Levando em conta as colis˜oes, o n´umero de part´ıculas no inter-
valo considerado de posi¸c˜ao e velocidade ´e tamb´em afetado pelas colis˜oes,
pois algumas part´ıculas fora deste intervalo podem ser lan¸cadas nele pelas
colis˜oes, e part´ıculas do intervalo podem ser retiradas dele pelas colis˜oes. Seja
3 3 3 3
Dc f d ~r d ~v o aumento do n´umero de part´ıculas no intervalo d ~r d ~v por
unidade de tempo devido a esse processo. Nesse caso, o n´umero de part´ıculas
ap´os t + dt deve ser igual ao n´umero das part´ıculas que se deslocaram para
o novo intervalo pela a¸c˜ao da for¸ca externa somado ao n´umero l´ıquido de
part´ıculas que o fizeram devido `as colis˜oes. Portanto
˙ ˙ 3~′ 3~′ 3 3 3 3
f(~r+~r dt, ~v+~v dt, t+dt) d r d v = f(~r, ~v, t) d ~r d ~v+Dc f d ~r d ~v dt (8.51)
Os elementos de volume das duas situa¸c˜oes devem ser os mesmos, e
~
∂f ∂f F ∂f
+ ~v · + · = Dcf (8.52)
∂t ∂~r m ∂~v
que ´e a equa¸c˜ao de Boltzmann na presen¸ca de colis˜oes, que pode ser comparada
com a equa¸c˜ao (8.48). Naturalmente, a forma expl´ıcita desta equa¸c˜ao ´e muito
mais complexa, pois a express˜ao para Dcf deve incluir as integrais envolvendo
a fun¸c˜ao f que descrevem como as mol´eculas entram ou saem do intervalo
considerado devido `as colis˜oes.

---

## Página 254

242 Transporte de Energia em Astrof´ısica
EXEMPLO 8.10 - A equa¸c˜ao de Boltzmann na aproxima¸c˜ao do tempo de
relaxa¸c˜ao
Vamos considerar o caso simples em que o efeito das colis˜oes ´e o de restaurar
uma situa¸c˜ao de equil´ıbrio local preexistente, caracterizada pela fun¸c˜ao de
o
distribui¸c˜ao f (~r, ~v, t). Vamos admitir que, uma vez estabelecida uma nova
fun¸c˜ao de distribui¸c˜ao f(~r, ~v, t), as colis˜oes tendem a restaurar a distribui¸c˜ao
o
original de equil´ıbrio f (~r, ~v, t) exponencialmente em uma escala de tempo de
relaxa¸c˜ao τ, da ordem do tempo m´edio entre as colis˜oes. Nesse caso temos
o
f − f
Dc f = − (8.53)
τ
o
Se f = f , temos Dcf = 0, e caimos no caso anterior, sem colis˜oes. Substi-
tuindo (8.53) em (8.52), temos
~ o
∂f ∂f F ∂f f − f
+ ~v · + · = − (8.54)
∂t ∂~r m ∂~v τ
que ´e a equa¸c˜ao de Boltzmann na presen¸ca de colis˜oes com a aproxima¸c˜ao do
tempo de relaxa¸c˜ao.
8.7 EQUAC¸ ˜AO DE BOLTZMANN EM SISTEMAS ESTELARES
Na se¸c˜ao anterior analisamos a equa¸c˜ao de Boltzmann na ausˆencia de
colis˜oes, obtendo as express˜oes (8.47) ou (8.48). No caso de um sistema es-
telar composto de part´ıculas (estrelas) idˆenticas, com a mesma massa, car-
acterizadas pelos vetores de posi¸c˜ao x e velocidade v, com uma fun¸c˜ao de
distribui¸c˜ao f(x, v), podemos escrever, de (8.47)
∑ ∑
∂f ∂f ∂f
+ x˙i + v˙i = 0 (8.55)
∂t ∂xi ∂vi
i i
que ´e novamente a equa¸c˜ao de Boltzmann na ausˆencia de colis˜oes, v´alida se a
dinˆamica no espa¸co de fase pode ser obtida a partir de uma Hamiltoniana da
forma H(x, v). Isto acontece se as estrelas movem-se ao longo de um campo
gravitacional “suave”, produzido pelo conjunto das demais estrelas, isto ´e, se
n˜ao s˜ao afetadas por colis˜oes que alteram significativamente a Hamiltoniana
do sistema. Se isto n˜ao for verdadeiro, o segundo termo de (8.55) ser´a diferente
de zero.

---

## Página 255

Processos Dinˆamicos II 243
EXEMPLO 8.11 - A equa¸c˜ao de Boltzmann em coordenadas cil´ındricas
Vamos obter a equa¸c˜ao de Boltzmann sem colis˜oes (8.55) em um sistema de
coordenadas cil´ındricas (figura 8.7), aplic´avel, por exemplo, a uma gal´axia de
˙
disco como a nossa. Definindo Π = ˙r, Θ = r θ, Z = ˙z, temos de (8.55)
Figura 8.7 - Coordenadas cil´ındricas.
∂f ∂f Θ ∂f ∂f ∂f ∂f ∂f
˙ ˙ ˙
+ Π + + Z +Π +Θ +Z = 0 (8.56)
∂t ∂r r ∂θ ∂z ∂Π ∂Θ ∂z
levando em conta a Lagrangiana do sistema, esta equa¸c˜ao pode ser escrita
( )
2
∂f ∂f Θ ∂f ∂f Θ ∂Φ ∂f
+ Π + + Z + − −
∂t ∂r r ∂θ ∂z r ∂r ∂Π
( )
Π Θ 1 ∂Φ ∂f ∂Φ ∂f
+ − = 0 (8.57)
r r ∂θ ∂Θ ∂z ∂Z
onde Φ(r, θ, z) ´e o potencial gravitacional do sistema na posi¸c˜ao r, θ, z. Uma
discuss˜ao detalhada da obten¸c˜ao da equa¸c˜ao (8.57) pode ser encontrada em
Choudhuri (2010, cap´ıtulo 7) e Goldstein et al. (2001). Conhecendo a fun¸c˜ao
de distribui¸c˜ao f podemos obter informa¸c˜oes sobre a dinˆamica do sistema a
partir da equa¸c˜ao (8.57), mas precisamos ainda conhecer as condi¸c˜oes inici-
ais, ou alguma constante do movimento, independentes da trajet´oria. Por
exemplo, no caso considerado, essas constantes poderiam ser a energia total
E e a componente z da quantidade de movimento angular, Lz, de modo que

---

## Página 256

244 Transporte de Energia em Astrof´ısica
a fun¸c˜ao de distribui¸c˜ao tenha a forma f(E, Lz), que deve satisfazer (8.57).
Uma vez que diversas fun¸c˜oes de E e Lz podem satisfazer as condi¸c˜oes de
auto-consistˆencia, esta equa¸c˜ao n˜ao ter´a uma solu¸c˜ao ´unica.
A equa¸c˜ao (8.57) pode tamb´em ser aplicada a uma gal´axia axisim´etrica
como a nossa, considerada em estado estacion´ario. Isto leva a uma simpli-
fica¸c˜ao nesta equa¸c˜ao, que se reduz `as equa¸c˜oes de Jeans, usadas para analisar
o movimento das estrelas na vizinhan¸ca solar. Por exemplo, o limite de Oort,
que vimos na se¸c˜ao 7.4 como uma aplica¸c˜ao do teorema de Liouville, pode
tamb´em ser obtido a partir das equa¸c˜oes de Jeans. Uma discuss˜ao dessas
equa¸c˜oes com algumas aplica¸c˜oes aos objetos da vizinhan¸ca solar pode ser
encontrada em Choudhuri (2010, cap´ıtulo 7).
´
EXERCICIOS
8.1 Mostre que o teorema do virial pode tamb´em ser escrito na forma
〈 〉
∑
1
¯ ~
Ec = − Fi · r~i
2
i
8.2 O Aglomerado de Coma Berenicis est´a a uma distˆancia de cerca de 99
Mpc, e seu diˆametro aparente ´e de cerca de 3 graus. A dispers˜ao de veloci-
∑
2 1/2
dades radiais do aglomerado, dada por σv ≃ [(1/M) mi v ] ≃ 1000
i
km/s, onde M ´e a massa total do aglomerado, mi a massa das gal´axias
componentes, e vi sua velocidade. (a) Estime seu raio em Mpc. (b)
Estime a massa total do aglomerado. (c) O aglomerado tem aproxi-
madamente 1000 gal´axias. Estime a massa m´edia dessas gal´axias.
8.3 Prove a equa¸c˜ao (8.27).
8.4 Considere o aglomerado NGC 104, e suponha que ele contenha cerca
5
de 10 estrelas em um raio da ordem de R ≃ 3 pc. Admitindo que as
velocidades das estrelas s˜ao da ordem de v ≃ 5 km/s, qual seria seu
tempo de relaxa¸c˜ao? Compare seu resultado com os dados da tabela 8.1.
8.5 O aglomerado aberto Trumpler 37 tem um raio da ordem de 5.7 pc e
a dispers˜ao de velocidades das estrelas ´e de 1.4 km/s. Estime o tempo
de cruzamento do aglomerado e sua massa total. Compare seu tempo
6
de cruzamento com o valor mais correto tc ≃ 3.5 × 10 ano e com uma
6
estimativa da idade do aglomerado, t ≃ 5.0 × 10 ano.

---

## Página 257

Processos Dinˆamicos II 245
REFERˆENCIAS BIBLIOGR ´AFICAS
BINNEY, J., MERRIFIELD, M. 1998, Galactic Astronomy, Princeton Uni-
versity Press
BINNEY, J., TREMAINE, S. 2008, Galactic Dynamics, Princeton University
Press
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHANDRASEKHAR, S. 1943, Astrophysical Journal, 97, 255
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
COX, A. N., 2000, Allen’s Astrophysical Quantities, AIP
GOLDSTEIN, H., POOLE, C. P., SAFKO, J. L. 2001, Classical Mechanics,
Addison-Wesley
HARWIT, M. 2006, Astrophysical Concepts, Springer
LIMA NETO, G. B. 2006, Introdu¸c˜ao `a Dinˆamica estelar, IAG/USP
MIHALAS, D., BINNEY, J. 1981, Galactic Astronomy, Freeman
REIF, F. 1965, Fundamentals of Statistical and Thermal Physics, McGraw-
Hill (reedi¸c˜ao Waveland Press 2008)
SCHNEIDER, P. 2006, Extragalactic Astronomy and Cosmology: an Intro-
duction, Springer

---

## Página 258

> Página sem texto extraível; consulte o PDF original.

---

## Página 259

## 9
## NEBULOSAS E O MEIO INTERESTELAR
9.1 INTRODUC¸ ˜AO
Imagens detalhadas da Via L´actea (figura 9.1 mostram caracter´ısticas
interessantes como a regi˜ao central brilhante em Sagittarius, e uma faixa es-
cura ao longo do plano, contendo nuvens de g´as e poeira interestelar.
Neste cap´ıtulo estaremos interessados em algumas propriedades do meio
interestelar, em particular na estrutura das nuvens interestelares e das ne-
bulosas ionizadas intererestelares, bem como seus processos de aquecimento e
resfriamento, ou seja, o transporte de energia envolvendo os diversos compo-
nentes.
Partes deste cap´ıtulo s˜ao discutidas em maiores detalhes em Maciel (2002)
e Maciel (2020). Referˆencias b´asicas sobre a f´ısica do meio interestelar e
das nebulosas ionizadas incluem Spitzer (1978), Scheffler e Els¨asser (1988),
Dyson e Williams (1997), Dopita e Sutherland (2003), Lequeux (2004), Tielens
(2005), Osterbrock e Ferland (2005), Kwok (2007), e Draine (2011). Textos
mais elementares incluem Wynn-Williams (1992) e Carroll e Ostlie (2014).

---

## Página 260

248 Transporte de Energia em Astrof´ısica
Figura 9.1 - A Via L´actea.
9.2 NUVENS INTERESTELARES E NEBULOSAS
68
As estrelas da nossa Gal´axia ocupam um volume esf´erico maior que 10
3
cm , no qual est´a imerso um disco achatado com um volume da ordem de
67 3
10 cm . O meio interestelar tamb´em ocupa este volume, mas a maior parte
de sua massa est´a concentrada em um disco mais fino, como observado em
66 3
gal´axias externas, com volume da ordem de 10 cm e uma espessura da
ordem de 300 pc. O material interestelar tem uma distribui¸c˜ao heterogˆenea e
fragment´aria. Vastas regi˜oes do disco s˜ao preenchidas por um g´as difuso, no
qual pode-se observar a existˆencia de condensa¸c˜oes de muitos tipos diferentes,
em particular as nuvens interestelares. Algumas destas condensa¸c˜oes est˜ao
associadas a estrelas jovens e aos bra¸cos espirais, mostrando o v´ınculo entre o
meio interestelar e a forma¸c˜ao das estrelas. Outras ocorrem nas vizinhan¸cas
de estrelas evolu´ıdas, tanto estrelas de massa intermedi´aria como as de grande
massa, indicando o est´agio final de sua evolu¸c˜ao.
>
Em nebulosas associadas a estrelas muito quentes (Tef 25 000 K), o g´as
∼
encontra-se fotoionizado, e a nebulosa ´e uma nebulosa difusa ou regi˜ao H II
(ver por exemplo a figura 1.1b). Geralmente associadas a regi˜oes H II, mas
invis´ıveis em fotografias ´opticas, est˜ao as nuvens moleculares, essencialmente
> 4 −3
nuvens de g´as e poeira com densidades relativamente altas (n 10 cm ) e
∼
temperaturas cin´eticas relativamente baixas, T ≃ 10 − 100 K.
Estrelas com massas da ordem de uma massa solar ou pouco mais ter-
minam sua vida ap´os ejetar suas camadas externas. A estrela torna-se uma
an˜a branca e, posteriormente, uma an˜a negra, e sua antiga atmosfera torna-se

---

## Página 261

Nebulosas e o Meio Interestelar 249
uma nebulosa planet´aria (figura 9.2). As estrelas centrais destas nebulosas
>
s˜ao objetos muito quentes (Tef 30 000 K). Iluminada por ela, a nebulosa ´e
∼
tamb´em fotoionizada como no caso de uma regi˜ao H II, e suas propriedades
s˜ao semelhantes (Kwok 2000).
Figura 9.2 - Nebulosa Planet´aria Helix (NGC 7293).
Estrelas com massas maiores do que cerca de 9 massas solares terminam
suas vidas ejetando toda ou parte de sua massa, em uma explos˜ao de super-
nova. O material estelar espalha-se pelo espa¸co interestelar formando uma
nebulosa gasosa brilhante, chamada resto de supernova. O g´as nesta regi˜ao
´e ionizado basicamente pelas colis˜oes entre o material ejetado e o meio in-
terestelar. A emiss˜ao da radia¸c˜ao ocorre principalmente por processos n˜ao
t´ermicos, como a emiss˜ao s´ıncrotron.
O g´as interestelar est´a geralmente associado a uma componente s´olida,
os gr˜aos interestelares. Os gr˜aos interestelares s˜ao os principais respons´aveis
pela polariza¸c˜ao da radia¸c˜ao das estrelas, para o que devem apresentar al-
guma anisotropia e estar alinhados segundo uma dire¸c˜ao preferencial. Isto
pode ser feito por um campo magn´etico, de modo que os gr˜aos constituem
tamb´em uma evidˆencia da existˆencia deste campo no meio interestelar. Trata-
−6
se de um campo fraco com intensidade B ∼ 10 Gauss, associado ao disco
gal´actico, interagindo com as demais componentes e com um papel importante
na dinˆamica do meio interestelar e na forma¸c˜ao das estrelas.
A caracter´ıstica mais marcante do meio interestelar ´e, provavelmente, sua
densidade. Embora facilmente observado em grandes distˆancias, o material

---

## Página 262

250 Transporte de Energia em Astrof´ısica
que preenche o espa¸co entre as estrelas ´e extremamente tˆenue, em compara-
¸c˜ao com as densidades comuns de laborat´orio e mesmo com rela¸c˜ao a outros
objetos astronˆomicos. Para uma primeira id´eia, podemos considerar que o
meio interestelar ´e composto de regi˜oes densas e difusas, al´em de um meio
ainda mais rarefeito permeando estas regi˜oes. Densidades t´ıpicas medidas em
3 4 −3
n´umero de part´ıculas por cm s˜ao da ordem de n ∼ 10 cm nas regi˜oes
−3
densas e da ordem de n ∼ 10 cm nas nuvens difusas, sendo da ordem
−3
de n ∼ 0.1 cm no meio internuvens e ainda mais baixas no g´as coronal.
17 −3
Para compara¸c˜ao, a fotosfera solar tem uma densidade t´ıpica n ∼ 10 cm ,
enquanto que as atmosferas das estrelas gigantes vermelhas tem densidades
15 −3
da ordem de n ∼ 10 cm , e seus envelopes circunstelares s˜ao ainda mais
8 −3
dilu´ıdos, tipicamente com n ∼ 10 cm . Em uma compara¸c˜ao mais coti-
22 −3
diana, a ´agua em um copo tem cerca de n ∼ 10 cm e o ar na base da
19 −3
atmosfera terrestre tem n ∼ 10 cm .
Portanto, mesmo as regi˜oes interestelares (IS) densas s˜ao muitas ordens
de grandeza mais dilu´ıdas do que as atmosferas t´ıpicas das estrelas ou os en-
velopes extensos em torno de gigantes vermelhas de tipo espectral M (classe
de luminosidade III). As nuvens moleculares gigantes podem eventualmente
alcan¸car densidades uma ou duas ordens de grandeza acima do valor indi-
cado, por´em em regi˜oes localizadas. O limite inferior ´e alcan¸cado por um
g´as coronal, que envolve toda a Gal´axia, e n˜ao apenas o disco, e cuja densi-
dade se assemelha `a do meio intergal´actico (MIG). Note-se que os melhores
−9
v´acuos obtidos em laborat´orio correspondem a press˜oes da ordem de 10 Torr
−12 −6 2 7
∼ 10 atm ∼ 10 dina/cm , ou seja, a densidades de cerca de 10 part´ıculas
3 9
por cm . Assim, um copo de v´acuo cont´em cerca de 2 × 10 part´ıculas, muito
mais do que qualquer situa¸c˜ao usual no meio interestelar!
EXEMPLO 9.1 - Densidade e press˜ao nas nuvens interestelares
Vamos considerar uma nuvem interestelar composta de hidrogˆenio atˆomico,
com uma densidade de 10 part´ıculas por cent´ımetro c´ubico e uma temperatura
3
cin´etica de 100 K. A densidade da nuvem em g/cm pode ser estimada por
−23 3
ρ ∼ n mH ∼ 1.67 × 10 g/cm (9.1)
−24
onde mH = 1.67 × 10 g ´e a massa do ´atomo de H. A press˜ao no interior da
nuvem pode ser estimada por
−13 2 −19
P ∼ n k T ∼ 1.38 × 10 din/cm ∼ 1.36 × 10 atm (9.2)

---

## Página 263

Nebulosas e o Meio Interestelar 251
onde k ´e a constante de Boltzmann. Podemos comparar este resultado com a
press˜ao de um v´acuo t´ıpico de laborat´orio,
−5 2 −6 2 −11 −6 −9
Pv ∼ 10 din/cm ∼ 10 N/m ∼ 10 atm ∼ 10 Pa ∼ 7.5 × 10 Torr
−8
ou seja, P/Pv ∼ 10 e P ≪ Pv.
EXEMPLO 9.2 - Nuvens difusas no disco gal´actico
Vamos admitir que as nuvens difusas tˆem raios Rn ≃ 5 pc, havendo cerca de
ν ≃ 5 nuvens por kpc no disco gal´actico. O disco tem um raio Rd ≃ 15 kpc
e espessura total h ≃ 300 pc. Nessas condi¸c˜oes podemos estimar algumas
caracter´ısticas das nuvens interestelares, como o n´umero total de nuvens no
3 58 3 3
disco. O volume das nuvens ´e Vn ≃ 4/3 π R ≃ 1.54 × 10 cm ≃ 524 pc .
n
2 66 3 11 3
O volume do disco ´e Vd ≃ π R h ≃ 6.26 × 10 cm ≃ 2.12 × 10 pc .
d
Considerando ν ≃ 5 nuvens por kpc, temos aproximadamente
N
2/3
ν ≃ V (9.3)
n
Vd
2/3 7
de modo que N ≃ ν Vd/Vn ≃ 1.6 × 10 . A fra¸c˜ao do volume do disco
ocupada, pelas nuvens ou fator de preenchimento ´e
N Vn
f ≃ ≃ 0.04 (9.4)
Vd
e a separa¸c˜ao m´edia das nuvens ´e dada por
( )
1/3
Vd
r ≃ ≃ 24 pc (9.5)
N
EXEMPLO 9.3 - Nuvens difusas e a linha de 21 cm do H
Medidas da linha de 21 cm do hidrogˆenio em uma certa dire¸c˜ao no plano
20 −2
gal´actico indicam uma densidade de coluna NH = 2 × 10 cm . Supondo
que o hidrogˆenio est´a concentrado em N ≃ 10 nuvens idˆenticas com dimens˜oes
D ≃ 5 pc cada uma, a densidade volum´etrica nH destas nuvens ´e
NH
−3
nH ≃ ≃ 1.3 cm (9.6)
N D

---

## Página 264

252 Transporte de Energia em Astrof´ısica
Medidas da linha do H em absor¸c˜ao mostram que a temperatura das nuvens
´e da ordem de T ≃ 80 K. Neste caso, a press˜ao do g´as nas nuvens ´e
−14 2
P ≃ nH k T ≃ 1.4 × 10 din/cm (9.7)
EXEMPLO 9.4 - Densidade de massa de H no plano gal´actico
Vamos considerar que a densidade de coluna de n´ucleos de H no plano gal´actico
20 −2
tem o valor NH ≃ 10 × 10 cm . As abundˆancias por massa de H, He
e elementos pesados nesta regi˜ao s˜ao dadas por X = 0.704, Y = 0.281 e
Z = 0.015. Considerando apenas o H, a densidade de massa correspondente
Σm pode ser estimada por
20 −24 18 2
(10 × 10 ) (1.67 × 10 ) (3.09 × 10 )
2
Σm ≃ NH mp ≃ ≃ 8.0 M⊙/pc
33
1.99 × 10
considerando H, He, Z, podemos escrever
Σm ≃ NH mp + ΣHe + ΣZ (9.8)
obtendo ΣHe ≃ 0.40 NH mp, ΣZ ≃ 0.02 NH mp. Portanto a densidade de
2
massa ´e Σm ≃ (1 + 0.40 + 0.02) NH mp ≃ 1.42 NH mp ≃ 11.4 M⊙/pc .
EXEMPLO 9.5 - Nuvens moleculares e forma¸c˜ao de estrelas
As nuvens moleculares gigantes (GMC, de Giant Molecular Clouds) s˜ao ver-
dadeiros “ber¸c´arios” de estrelas, onde objetos jovens e brilhantes est˜ao imer-
sos em nuvens de g´as e poeira. A figura 9.3 mostra a nuvem molecular em
Orion no infravermelho, caracter´ıstica de nuvens moleculares associadas com
a forma¸c˜ao de estrelas.
A complexidade do problema da forma¸c˜ao estelar pode ser avaliada pela
simples compara¸c˜ao das dimens˜oes e massas das nuvens moleculares e das
estrelas. As GMC tˆem dimens˜oes maiores ou da ordem de 5 pc e massas
4 11
acima de 10 M⊙, enquanto que uma estrela tem raios da ordem de 10 cm
e massas da ordem da massa solar, isto ´e, as densidades m´edias das estrelas
s˜ao 20 ordens de grandeza maiores do que as das nuvens.

---

## Página 265

Nebulosas e o Meio Interestelar 253
Figura 9.3 - Nuvem molecular Orion A no infravermelho.
As estrelas se formam a partir de nuvens interestelares, por um pro-
cesso de instabilidade gravitacional que leva `a contra¸c˜ao da nuvem, at´e que as
regi˜oes centrais atinjam densidades e temperaturas suficientes para a igni¸c˜ao
das rea¸c˜oes nucleares (ver por exemplo Beech 2019, Ward-Thompson 2015).
Para uma nuvem homogˆenea, infinita e em repouso, as instabilidades levam
`a contra¸c˜ao gravitacional, se as perturba¸c˜oes aplicadas tiverem um compri-
mento de onda λ superiores ao Comprimento de Jeans, RJ, correspondende
a uma massa m´ınima, a Massa de Jeans MJ.
Como vimos no Exemplo 7.8 (ver tamb´em o Exemplo 7.4) no processo de
contra¸c˜ao de uma nuvem molecular com temperatura T, densidade ρ e peso
molecular μ a convers˜ao da energia potencial da nuvem em energia cin´etica e
radia¸c˜ao permite estimar a Massa de Jeans por
( ) ( ) ( )
3/2 1/2 3 1/2
5 k T 3 T
−10
MJ ≃ ≃ 1.2 × 10 (9.9)
3
G μ mH 4 π ρ μ ρ
3
Na ´ultima express˜ao T est´a em K, ρ em g/cm e MJ em M⊙. Obtemos ent˜ao
para o Raio de Jeans
( ) ( ) ( )
1/2 1/2 1/2
15 k T T
7
R ≃ ≃ 3.9 × 10 (9.10)
4 π G mH μ ρ μ ρ

---

## Página 266

254 Transporte de Energia em Astrof´ısica
onde RJ est´a em cm. Neste caso, o tempo de queda livre ´e
√
3 1
−5
tql ≃ ≃ 6.0 × 10 √ (9.11)
4πGρ ρ
3
onde ρ est´a em g/cm e tql em anos. Em uma nuvem interestelar com
−3 5 7
T ≃ 100 K, μ ≃ 1 e n ≃ 1 cm , obtemos MJ ∼ 10 M⊙ e tql ∼ 5 × 10 anos,
isto ´e, as massas s˜ao da ordem das massas dos aglomerados globulares e das
`
nuvens moleculares gigantes. A medida que o colapso se processa, a densi-
dade aumenta e tanto MJ como tql decrescem. Por exemplo, considerando
6 −3
uma regi˜ao com T ≃ 50 K, μ ≃ 1 e n ≃ 10 cm , obtemos MJ ∼ 33 M⊙
4
e tql ∼ 10 anos. Neste caso, a regi˜ao que sofre um colapso pode tornar-se,
efetivamente, uma ´unica estrela. Esta ´e naturalmente uma vis˜ao bastante sim-
plificada do processo de forma¸c˜ao estelar, enfatizando a convers˜ao de energia
potencial da nuvem em outras formas de energia. O processo tem v´arias com-
plica¸c˜oes, como a rota¸c˜ao da nuvem e conserva¸c˜ao do momento angular e o
efeito do campo magn´etico associado ao disco gal´actico, onde se processa efe-
tivamente a forma¸c˜ao estelar. Mais detalhes podem ser vistos na bibliografia
anexa, em particular Ward e Thompson (2015) e Beech (2019).
EXEMPLO 9.6 - O ´ıon OVI no meio interestelar quente e ionizado
O ´ıon OVI ´e detectado no meio interestelar quente e ionizado por meio de
observa¸c˜oes do dubleto ultravioleta em λ = 1032 ˚A e λ = 1038 ˚A. Supondo
que a ioniza¸c˜ao do oxigˆenio ´e colisional, a temperatura t´ıpica desta regi˜ao
interestelar pode ser estimada considerando que a energia necess´aria para a
forma¸c˜ao da linha ´e
h c
−11
E = h ν = ≃ 1.92 × 10 erg ≃ 12.0 eV (9.12)
λ
Esta energia deve ser igual ´a energia cin´etica m´edia dos el´etrons respons´aveis
pelas colis˜oes, ou seja
1 3
2
E ≃ Ec ≃ me v ≃ k T (9.13)
e
2 2
4 5
portanto a temperatura desta regi˜ao ´e T ≃ 2 E/3 k ≃ 9.28 × 10 K ∼ 10 K.
A regi˜ao quente e ionizada est´a em equil´ıbrio de press˜ao com a regi˜ao neu-
−13 2
tra, a uma press˜ao da ordem de 10 dina/cm . Nesse caso a densidade
eletrˆonica m´edia da regi˜ao quente ionizada pode ser estimada considerando
um g´as composto essencialmente de H e He com abundˆancia normal.

---

## Página 267

Nebulosas e o Meio Interestelar 255
A press˜ao ´e P ≃ n k T ≃ (np + nHe + ne) k T ≃ (1.1 np + ne) k T, de modo
que a densidade eletrˆonica ´e ne = np + 2 nHe = np + (2) (0.1) np = 1.2 np.
Portanto n ≃ 0.92 ne + ne = 1.92 ne, P ≃ 1.92 ne k T, e ne ≃ P/(1.92 k T) ≃
−3
0.0041 cm . Este resultado em pode ser comparado com a densidade eletrˆo-
nica m´edia calculada a partir do fluxo observado de raios X moles, ou seja,
−3
0.0037 ≤ ne(cm ) ≤ 0.0047, obtendo 0.90 ≤ neX/ne ≤ 1.15.
EXEMPLO 9.7 - Transferˆencia de energia e nebulosas planet´arias
Vamos considerar uma nebulosa planet´aria t´ıpica, como NGC 7293. Estes
4
objetos tˆem temperaturas eletrˆonicas da ordem de T ≃ 10 K, densidades
4 −3
eletrˆonicas ne ≃ 10 cm e dimens˜oes R ≃ 0.1 pc, de modo que a energia
t´ermica total armazenada ´e
4
3 3
Et ∼ π R ǫ ne k T ∼ 4 ne k T R ǫ (9.14)
3
onde ǫ ´e o fator de preenchimento, isto ´e, a fra¸c˜ao do volume que ´e efetivamente
preenchido pelo g´as ionizado. Tipicamente temos ǫ ≃ 0.1, de modo que Et ∼
44
1.6 × 10 erg. Admitindo que a nebulosa tenha se originado a partir de uma
3
estrela gigante vermelha t´ıpica, com luminosidade L∗ ∼ 10 L⊙, podemos
estimar a escala de tempo
44
Et 1.6 × 10
7
∆t ∼ ∼ ∼ 4.2 × 10 s = 1.3 ano (9.15)
3 33
L∗ (10 ) (3.85 × 10 )
ou seja, a energia t´ermica armazenada na nebulosa, que era originalmente
parte da energia da estrela central, corresponde `a energia emitida pela estrela
em apenas um ano, sendo uma pequena fra¸c˜ao da energia total contida na
estrela.
´
9.3 EQUILIBRIO NO MEIO INTERESTELAR
De maneira um pouco mais rigorosa, podemos considerar cinco principais
regi˜oes interestelares: (i) as nuvens difusas, (ii) as nuvens moleculares densas,
(iii) o meio internuvens, (iv) as regi˜oes de hidrogˆenio ionizado e (v) o g´as
coronal. A tabela 9.1 relaciona valores m´edios para a densidade de part´ıculas
−3 2
n (cm ), a temperatura T (K) e a press˜ao P (dina/cm ) nessas regi˜oes.
Vemos que as “regi˜oes de baixa press˜ao” i, iii e v tˆem press˜oes semelhantes,
ocupando todo o espa¸co interestelar, enquanto que as “regi˜oes de alta press˜ao”
ii e iv est˜ao imersas no espa¸co interestelar geral.

---

## Página 268

256 Transporte de Energia em Astrof´ısica
−3 2
Regi˜ao n (cm ) T (K) P (dina/cm )
−13
nuvens difusas 10 100 10
4 −11
nuvens moleculares densas 10 <100 10
−1 4 −13
meio internuvens 10 10 10
2 4 −10
regi˜oes de H ionizado 10 10 10
−2 5 −13
g´as coronal 10 10 10
Tabela 9.1 - Densidade e press˜ao no meio interestelar.
Uma vers˜ao gr´afica desta tabela pode ser vista na figura 9.4, onde as linhas
retas indicam regi˜oes em que o produto n T ´e constante, isto ´e, regi˜oes em que
existe equil´ıbrio de press˜ao.
Figura 9.4 - Fases do meio interestelar.
A semelhan¸ca da press˜ao revela outra caracter´ıstica do meio interestelar,
isto ´e, a densidade de energia m´edia de seus constituintes ´e similar. De fato,
a densidade de energia dessas regi˜oes, incluindo o campo de radia¸c˜ao, os raios
3
c´osmicos e o campo magn´etico, ´e da ordem de 0.5 − 1.0 eV/cm . As regi˜oes
de baixa press˜ao podem trocar algum material entre si. Por exemplo, quando

---

## Página 269

Nebulosas e o Meio Interestelar 257
partes do meio internuvens sofrem choques sob a a¸c˜ao de supernovas, podem
converter-se em um g´as coronal. Estas regi˜oes est˜ao aproximadamente em
equil´ıbrio de press˜ao e, de fato, gradientes de press˜ao s˜ao removidos em uma
escala de tempo dada pelo tempo necess´ario para uma perturba¸c˜ao atravessar
a regi˜ao com a velocidade do som. Por exemplo, em uma nuvem difusa (i) com
−13 2 −23 3
R ∼ 5 pc, P ∼ 10 dina/cm e ρ ∼ 10 g/cm , obtemos uma escala de
6
tempo tp ∼ R/cs ∼ 5 × 10 anos. Por´em, as nuvens difusas colidem com uma
7
escala de tempo entre as colis˜oes tc ∼ 2 × 10 anos. A escala de tempo para
atingir o equil´ıbrio teq deve ser, em princ´ıpio, menor que este valor. Como
teq ≃ tp, a escala de tempo para que uma perturba¸c˜ao movendo-se com a
velocidade do som atravesse a regi˜ao considerada, temos teq < tc. No tempo
tp as ondas sonoras viajam cerca de 40 pc no meio internuvens e 130 pc no
g´as coronal, distˆancias muito superiores `as dimens˜oes e separa¸c˜oes m´edias
das nuvens, de modo que existe uma forte tendˆencia ao equil´ıbrio de press˜ao
nessas regi˜oes.
EXEMPLO 9.8 - Temperatura m´edia do meio internuvens
−3
Vamos admitir que uma nuvem interestelar tem uma densidade n1 = 10 cm
e temperatura T1 = 100 K, estando em equil´ıbrio de press˜ao com o meio
−3
internuvens, cuja densidade ´e n2 = 0.1 cm , segundo a tabela 9.1. Em
ordem de grandeza, a temperatura do meio internuvens pode ser estimada
por
n1 T1 ≃ n2 T2 (9.16)
n1 T1
4
T2 ∼ ∼ 10 K (9.17)
n2
EXEMPLO 9.9 - Equil´ıbrio de press˜ao: regi˜ao HII e nuvem interestelar
−3
Vamos considerar um g´as de H ionizado (HII) com densidade n ≃ 100 cm e
4 −3
temperatura T ≃ 10 K imerso em uma nuvem interestelar com n ≃ 20 cm
e T ≃ 100 K. Para o g´as ionizado temos Pi ∝ ni Ti, ou Pi ≃ ni k Ti ≃ 1.38 ×
−10 2
10 dina/cm . Para a nuvem Pn ∝ nn Tn, ou Pn ≃ nn k Tn ≃ 2.76 ×
−13 2
10 dina/cm . Como Pi ≫ Pn o g´as ionizado se expande, e n˜ao havendo
equil´ıbrio de press˜ao.

---

## Página 270

258 Transporte de Energia em Astrof´ısica
9.4 AQUECIMENTO NO MEIO INTERESTELAR
Vamos a seguir considerar alguns dos principais processos de aquecimento
que ocorrem no g´as interestelar. Nestes processos energia ´e transferida de al-
guma fonte para energia cin´etica das part´ıculas do g´as, em especial os el´etrons,
que a retransmitem `as demais part´ıculas. Uma discuss˜ao mais detalhada do
material desta se¸c˜ao pode ser encontrada em Maciel (2002).
˜ ´
9.4.1 FOTOIONIZAC¸AO DEATOMOS NEUTROS
Um dos mecanismos mais importantes para o aquecimento do g´as inte-
restelar decorre da fotoioniza¸c˜ao de ´atomos neutros. Neste processo, um f´oton
r
com energia h ν ioniza um ´ıon X em um estado de ioniza¸c˜ao r, resultando
r+1
em um ´ıon X no estado r + 1 e um el´etron com uma energia cin´etica E.
Este el´etron pode colidir com outras part´ıculas do g´as, repartindo o excesso
de energia e causando um aquecimento. Portanto, energia radiativa das es-
trelas ou do campo de radia¸c˜ao difuso ´e transferida para o g´as, na forma de
energia cin´etica. Naturalmente, o el´etron pode se recombinar com outro ´ıon
r
formando novamente o ´ıon X , e neste processo parte da energia adquirida
pela fotoioniza¸c˜ao ´e perdida. A equa¸c˜ao de equil´ıbrio entre a fotoioniza¸c˜ao e
a recombina¸c˜ao radiativa pode ser escrita simplesmente
r r+1
n(X ) βf = n(X ) ne α (9.18)
r r+1
onde n(X ) e n(X ) s˜ao as densidades de part´ıculas do ´atomo X nos estados
−3 −1
de ioniza¸c˜ao r e r + 1 (cm ), βf ´e a taxa de ioniza¸c˜oes (s ) a partir do ´ıon
r
X , ne ´e a densidade eletrˆonica, e α o coeficiente de recombina¸c˜ao, medido
3
em cm /s. No caso mais geral devemos levar em conta o estado de excita¸c˜ao
r r+1
j do ´ıon, ou seja, devemos escrever X e X , de modo que a equa¸c˜ao (9.18)
j j
deve incluir somat´orios em todos os n´ıveis de excita¸c˜ao.
−3 −1
A fun¸c˜ao aquecimento Γei (erg cm s ) para a intera¸c˜ao de el´etrons e
´ıons pode ser escrita
¯
Γei = ne ni α E (9.19)
r+1
onde substituimos n(X ) por ni, a densidade de ´atomos ionizados, admi-
¯
tidos idˆenticos e no estado fundamental e chamamosE a energia m´edia dos
fotoel´etrons. A rigor devemos levar em conta a energia perdida pelos fo-
toel´etrons no processo de recombina¸c˜ao, de modo que a equa¸c˜ao (9.19) deve

---

## Página 271

Nebulosas e o Meio Interestelar 259
¯ ¯
incluir um segundo termo dado por ne ni α Ep, ondeEp a energia m´edia per-
dida pelos fotoel´etrons. Este termo pode por exemplo ser obtido admitindo
uma distribui¸c˜ao maxwelliana para as velocidades dos el´etrons.
No processo de fotoioniza¸c˜ao dos elementos pesados em regi˜oes HI pelo
campo de radia¸c˜ao estelar integrado, parte da energia adquirida pelos el´etrons
´e reutilizada na recombina¸c˜ao, mas a distribui¸c˜ao de energia pelas colis˜oes
ocorre rapidamente, de modo que a termaliza¸c˜ao ´e alcan¸cada antes da remo¸c˜ao
dos el´etrons pela recombina¸c˜ao. O campo de radia¸c˜ao acima de 13.6 eV
´e absorvido nas proximidades das fontes. Portanto, a energia do el´etron ´e
sempre muito menor que este valor, sendo da ordem de 2 eV para fotoioniza¸c˜ao
de um g´as com abundˆancia c´osmica. Podemos escrever uma express˜ao para a
fun¸c˜ao aquecimento desprezando a corre¸c˜ao pelas recombina¸c˜oes na forma
r r ¯
Γ r ≃ n n(X ) α(X )E (9.20)
eX e
r
onde usamos novamente a nota¸c˜ao X . Os coeficientes de recombina¸c˜ao po-
dem ser aproximados pela express˜ao
[ ] r
−η(X )
T
r r
α(X ) = A(X ) (9.21)
4
10 K
r r
sendo os parˆametros A(X ) e η(X ) tabelados na literatura. Neste caso
[ ] r
−η(X )
T
r r ¯
Γ r ≃ n n(X ) A(X ) E (9.22)
eX e
4
10 K
O erro cometido pelo uso desta rela¸c˜ao depende do ´ıon considerado, e tamb´em
da temperatura eletrˆonica, sendo em m´edia da ordem de 10% Com valores
r r −13 3 ¯ −12
t´ıpicos η(X ) ≃ 1/2, A(X ) ≃ 10 cm /s, E ≃ 2 eV = 3.2 × 10 erg,
temos
−23 r −1/2
Γ r ≃ 3.2 × 10 n n(X ) T (9.23)
eX e
−3 −1 r r
dado em erg cm s . Considerando agora que n(X ) ≃ a(X ) nH, com a
r −4
abundˆancia c´osmica a(X ) ≃ 4 × 10 , apropriada ao C, temos
−26 −1/2 −3 −1
Γ r ≃ 1.3 × 10 n n T erg cm s (9.24)
eX e H
ou, em termos da ioniza¸c˜ao fracional x = ne/nH
−26 2 −1/2 −3 −1
Γ r ≃ 1.3 × 10 x n T erg cm s (9.25)
eX H

---

## Página 272

260 Transporte de Energia em Astrof´ısica
EXEMPLO 9.10 - Ca em nuvens interestelares
Vamos aplicar as rela¸c˜oes desta se¸c˜ao e estimar as abundˆancias dos diversos
´ıons de Ca em nuvens interestelares. Vamos considerar os ´ıons Ca II e Ca
−4 −3
III em uma nuvem com T = 100 K e ne = 10 cm , considerando apenas a
fotoioniza¸c˜ao e a recombina¸c˜ao radiativa. Vamos utilizar a seguinte nota¸c˜ao:
n(CaII) = n2; n(CaIII) = n3; β(CaII) = β2; α(CaII) = α2. Vamos adotar
−12 −1 −11 3 −1
os valores β(CaII) = 4.0 × 10 s e α(CaII) = 2.6 × 10 cm s . Neste
caso, a equa¸c˜ao de equil´ıbrio de ioniza¸c˜ao fica
n2 β2 = n3 ne α2 (9.26)
lembrando que n2 + n3 = n. Vamos definir a raz˜ao R3,2 por
n(CaIII) n3
R3,2 = = (9.27)
n(CaII) n2
podemos ent˜ao escrever para o grau de ioniza¸c˜ao x
n(CaII) n2 1 1
x2 = x(CaII) = = = = (9.28)
n(Ca) n2 + n3 1 + n3/n2 1 + R3,2
n(CaII) n3 1 1
x3 = x(CaIII) = = = = (9.29)
n(Ca) n2 + n3 1 + n2/n3 1 + 1/R3,2
da equa¸c˜ao de equil´ıbrio de ioniza¸c˜ao temos
−12
β2 4.0 × 10
3
R3,2 = = = 1.54 × 10
−4 −11
ne α2 (10 ) (2.6 × 10 )
−4
portanto x2 = 6.5 × 10 e x3 = 0.9999 ≃ 1.0, ou seja, nas condi¸c˜oes dadas,
++
praticamente todos os ´ıons de Ca est˜ao na forma CaIII, ou Ca . A taxa de
+ ++
aquecimento devido `a ioniza¸c˜ao do Ca para Ca pode ser estimada por
¯ ¯
Γe,Ca ≃ n3 ne α2 E ≃ a(Ca)nH ne α2 E (9.30)
−6
onde a(Ca) ∼ 10 ´e a abundˆancia interestelar do Ca. Tomando nH ≃
−3 −4 −3 −11 3 ¯ −12
1.0 cm , ne ∼ 10 cm , α2 ∼ 3 × 10 cm /s eE ≃ 2 eV ≃ 3 × 10 erg,
−32 −3 −1 2 −32 3 −1
obtemos Γe,Ca ∼ 10 erg cm s , ou Γe,Ca/n ∼ 10 erg cm s .
H

---

## Página 273

Nebulosas e o Meio Interestelar 261
´ ˜
9.4.2 FOTOELETRONS EJETADOS POR GRAOS
Quando um gr˜ao absorve um f´oton com energia relativamente alta, pode
ejetar um el´etron com uma certa energia cin´etica (efeito fotoel´etrico), consti-
tuindo um processo de aquecimento do g´as interestelar. Chamando σg a se¸c˜ao
geom´etrica do gr˜ao, sua se¸c˜ao de choque de fotoabsor¸c˜ao σd pode ser escrita
σd = σg Qa(λ) (9.31)
onde Qa(λ) ´e o fator de eficiˆencia do gr˜ao para absor¸c˜ao de radia¸c˜ao com
comprimento de onda λ. Chamando nd o n´umero de gr˜aos por unidade de
volume, nH o n´umero de n´ucleos de H por unidade de volume, e Σd a ´area
total projetada dos gr˜aos, podemos escrever
σg nd
Σd = (9.32)
nH
σd nd = nH Σd Qa(λ) (9.33)
Desprezando a energia perdida pelo el´etron na recombina¸c˜ao, a energia forne-
cida ao g´as por unidade de volume e tempo pode ser escrita
¯
Γed = nH Σd E Fe (9.34)
¯ −2 −1
ondeE ´e a energia m´edia do fotoel´etron e Fe (cm s ) ´e fluxo de fotoel´etrons
produzidos por ´area projetada dos gr˜aos. Usando uma estimativa do campo
de radia¸c˜ao estelar integrado, o fluxo de fotoel´etrons ´e da ordem de
7 −τ −2 −1
Fe ≃ 2 × 10 ye Qa e cm s (9.35)
onde ye, ´e a eficiˆencia fotoel´etrica (quantum yield ), ou seja, a raz˜ao entre o
n´umero de el´etrons ejetados e o n´umero de f´otons absorvidos, que depende do
tamanho e da natureza dos gr˜aos e da frequˆencia do f´oton absorvido. Nesta
equa¸c˜ao o termo exponencial leva em conta a atenua¸c˜ao da radia¸c˜ao dentro
da nuvem, caracterizada pela profundidade ´optica τ.
EXEMPLO 9.11 - Estimativa da taxa de aquecimento fotoel´etrico
Adotando valores t´ıpicos para os gr˜aos que ocorrem nas nuvens interestelares,
−21 2 ¯
Qa ≃ 1, Σd ≃ 1.1 × 10 cm por ´atomo de H,E ≃ 5 eV, obtemos
−25 −τ −3 −1
Γed ≃ 1.8 × 10 ye nH e erg cm s (9.36)

---

## Página 274

262 Transporte de Energia em Astrof´ısica
2 −3 −25
Por exemplo, com ye ≃ 1, τ ≪ 1 e nH ≃ 1 − 10 cm , temos Γed ∼ 10 −
−23 −3 −1 2 −25 −27 3 −1
10 erg cm s e Γed/n ∼ 10 − 10 erg cm s . Neste caso,
H
7 −2 −1
o fluxo de fotoel´etrons ´e Fe ≃ 2 × 10 cm s . Se a eficiˆencia ye tiver
valores menores, ou se a profundidade ´optica for muito alta, a importˆancia
deste mecanismo ser´a menor, embora continue como um dos processos mais
importantes no aquecimento do g´as interestelar.
Modelos recentes para nuvens densas e regi˜oes de fotodissocia¸c˜ao consi-
deram a eje¸c˜ao fotoel´etrica por gr˜aos contendo mol´eculas de hidrocarbonetos
arom´aticos polic´ıclicos (PAH, de polycyclic aromatic hydrocarbon). Regi˜oes
< < 4
com temperaturas no intervalo 10 T(K) 10 e densidades eletrˆonicas de
∼ ∼
−3 < −3 < 2
10 ne(cm ) 10 s˜ao aquecidas por gr˜aos com dimens˜oes entre 15 e
∼ ∼
< 4
100 ˚A. Para T 10 K, a taxa de aquecimento depende do fluxo ultravioleta
∼
incidente, da temperatura e da densidade da nuvem. Valores t´ıpicos para a
−26 −25 2 −28
fun¸c˜ao aquecimento s˜ao Γed/nH ∼ 10 −10 erg/s, ou Γed/n ∼ 10 −
H
−25 3 −1 2 −3
10 erg cm s para nH ∼ 1−10 cm . O resfriamento correspondente `a
recombina¸c˜ao eletrˆonica foi tamb´em obtido, sendo da ordem de Λed/nenH ∼
−27 −24 3 −1 2 < < 4
10 −10 erg cm s para 10 T(K) 10 . O fator de eficiˆencia obtido
∼ ∼
´e menor que 0.1, tipicamente ye ≃ 0.03.
O papel dos gr˜aos na determina¸c˜ao da temperatura das nuvens intereste-
lares ´e, na realidade, mais complexo do que foi visto acima. Al´em da energia
perdida no processo de recombina¸c˜ao el´etron-gr˜ao, os gr˜aos podem atuar como
´
resfriadores. Atomos de H podem colidir com os gr˜aos e sofrer coalescˆencia,
transferindo sua energia cin´etica ao gr˜ao, a qual ser´a posteriormente emitida
na forma de radia¸c˜ao infravermelha. Em nuvens com T ≃ 100 K, s˜ao obtidas
−31 2 −3 −1
taxas t´ıpicas ΛdH ∼ 10 n erg cm s .
H
9.4.3 OUTROS PROCESSOS
Raios c´osmicos podem ionizar o H (e tamb´em o He) produzindo el´etrons
energ´eticos. Parte da energia destes el´etrons ´e termalizada, resultando em
uma fun¸c˜ao aquecimento ΓH,RC ou ΓHe,RC. A energia do el´etron ejetado
depende da energia da part´ıcula c´osmica. No caso de pr´otons com 2 MeV, a
energia m´edia do el´etron ´e da ordem de 32 eV. Para pr´otons com 10 MeV,
a energia ´e de 36 eV. Naturalmente, apenas parte desta energia pode ser
usada para o aquecimento. Em um g´as fracamente ionizado, onde o grau
de ioniza¸c˜ao x = ne/nH ≪ 1, a maior parte da energia do el´etron ´e usada
em excita¸c˜oes e novas ioniza¸c˜oes, e c´alculos detalhados indicam uma energia

---

## Página 275

Nebulosas e o Meio Interestelar 263
¯
E entre 3.4 eV e 8.5 eV, dispon´ıvel para o aquecimento do g´as, por meio
de colis˜oes. Considerando a taxa de ioniza¸c˜oes pelos raios c´osmicos ζRC,
3
o n´umero de el´etrons ejetados por cm por segundo ´e ζRC nH, e a fun¸c˜ao
aquecimento pode ser escrita
¯
ΓH,RC ≃ nH ζRC E (9.37)
EXEMPLO 9.12 - Taxa de aquecimento pelos raios c´osmicos
−18 −15 −1
Estimativas para os limites de ζRC est˜ao entre cerca de 7×10 a 10 s .
¯
Com os limites deE acima, temos
−29 −26
3.8 × 10 nH ≤ ΓH,RC ≤ 1.4 × 10 nH
−3 −1 −3 2
onde ΓH,RC est´a em erg cm s , com nH em cm . Adotando nH ≃ 1−10
−3
cm , valores apropriados para as nuvens interestelares, este processo produz
−26 −24 −3 −1
taxas m´aximas de 10 − 10 erg cm s .
Al´em dos raios c´osmicos foi tamb´em proposto o aquecimento do meio
interestelar pelos raios X. Devido essencialmente ao seu fluxo relativamente
baixo, este mecanismo tem as mesmas dificuldades que o aquecimento pelos
raios c´osmicos.
A mol´ecula H2 ´e a mais abundante em nuvens interestelares densas, onde
a temperatura ´e relativamente baixa e a opacidade alta o suficiente para que
os f´otons ultravioletas energ´eticos n˜ao consigam penetrar, o que aumentaria
a taxa de destrui¸c˜ao desta mol´ecula. Sendo uma mol´ecula homopolar, suas
transi¸c˜oes rovibracionais para radia¸c˜ao de dipolo el´etrico s˜ao proibidas, e a
associa¸c˜ao radiativa de dois ´atomos de H para formar a mol´ecula tem baixa
probabilidade. H´a um consenso de que esta mol´ecula ´e formada pela asso-
cia¸c˜ao de dois ´atomos de H na superf´ıcie de um gr˜ao s´olido, que funciona
como um catalisador. A presen¸ca dessas mol´eculas pode ainda produzir aque-
cimento do g´as por meio de fotodissocia¸c˜ao do H2 e distribui¸c˜ao da energia
cin´etica dos ´atomos produzidos, e pela sua forma¸c˜ao, com libera¸c˜ao de energia.
No processo de forma¸c˜ao de uma mol´ecula de H2, h´a libera¸c˜ao de uma
¯
energiaE(H2) ≃ 4.5 eV, correspondendo `a energia de liga¸c˜ao dos ´atomos de H.
A parti¸c˜ao desta energia entre o aquecimento do gr˜ao, excita¸c˜ao da mol´ecula
formada, compensa¸c˜ao da energia de adsor¸c˜ao `a superf´ıcie do gr˜ao e energia

---

## Página 276

264 Transporte de Energia em Astrof´ısica
cin´etica da mol´ecula pode ser relativamente complexa. A fun¸c˜ao aquecimento
devida a este processo pode ser escrita aproximadamente
2 ¯ −12 2
ΓHd = n R zH E(H2) ≃ 7.2 × 10 n R zH (9.38)
H H
onde zH a fra¸c˜ao da energia liberada na forma de energia cin´etica da mol´ecula
H2, ou seja, a energia dispon´ıvel para o aquecimento do g´as, e R ´e um co-
eficiente que depende da probabilidade por unidade de tempo de forma¸c˜ao
de uma mol´ecula de H2 pela colis˜ao de um ´atomo de H com um gr˜ao. Em
−3 −1
(9.38) a taxa ´e dada em erg cm s . O coeficiente R pode ser determinado
−17
a partir de observa¸c˜oes da mol´ecula H2, e um valor m´edio ´e R ≃ 3 × 10
3
cm /s. Neste caso, obtemos
−28 2 −3 −1
ΓHd = 2.2 × 10 zH n erg cm s (9.39)
H
EXEMPLO 9.13 - Taxa de aquecimento pela forma¸c˜ao de H2
Podemos estimar a taxa de aquecimento pela forma¸c˜ao da mol´ecula H2 usando
2 −3
a equa¸c˜ao (9.39) adotando zH ≃ 1 e nH ≃ 1 − 10 cm , obtendo o resultado
−28 −24 −3 −1
ΓHd ∼ 10 − 10 erg cm s
ΓHd
−28 3 −1
∼ 10 erg cm s
2
n
H
9.5 RESFRIAMENTO NO MEIO INTERESTELAR
˜ ´ ´
9.5.1 EXCITAC¸AO COLISIONAL ELETRON-ION
Os mecanismos de resfriamento mais importantes no meio interestelar
envolvem colis˜oes entre part´ıculas (el´etrons, ´ıons e ´atomos neutros) com a
excita¸c˜ao de n´ıveis de energia pr´oximos ao estado fundamental. Uma vez
excitado, o ´atomo tende a voltar ao estado fundamental com a emiss˜ao de ra-
dia¸c˜ao, a qual pode escapar da regi˜ao, correspondendo a uma perda de energia
e, portanto, a um resfriamento do g´as. Assim como no caso do aquecimento,
podemos estimar a taxa de resfriamento por
Λei ≃ ne nij Ejk γjk (9.40)

---

## Página 277

Nebulosas e o Meio Interestelar 265
onde ne ´e a densidade de el´etrons, Ejk = Ek − Ej ´e energia perdida por
um el´etron no processo de excita¸c˜ao colisional entre os n´ıveis j e k, nij ´e
o n´umero de ´ıons i por unidade de volume no n´ıvel j e γjk ´e o coeficiente
3
ou taxa de colis˜oes, dado em cm /s. No processo de desexcita¸c˜ao colisional,
parte da energia ´e recuperada, o que deve em princ´ıpio ser levando em conta.
Geralmente considera-se que as excita¸c˜oes ocorrem sempre a partir do estado
fundamental. Os ´ıons importantes s˜ao C II, Si II, O I, Fe II, N II, C I etc.
2 2
Por exemplo, para a transi¸c˜ao P − P do C II temos Ejk = 0.0079 eV
1/2 3/2
−14
= 1.3×10 erg, correspondendo a uma temperatura Ejk/k ≃ 90 K, da ordem
da temperatura cin´etica das nuvens interestelares difusas. Outras transi¸c˜oes
2 2 3 3
podem ser: Si II ( P − P ), com Ejk/k ≃ 400 K e O I ( P2 − P1,0),
1/2 3/2
com Ejk/k ≃ 200 − 300 K.
O coeficiente γkj pode ser relacionado com a for¸ca de colis˜ao Ω(j, k), o
que permite uma ajuste com a temperatura, e as taxas de excita¸c˜ao e desex-
cita¸c˜ao est˜ao relacionadas entre si. Vamos escrever a equa¸c˜ao (9.40) para uma
transi¸c˜ao j → k, desprezando a corre¸c˜ao correspondente ao ganho, pois, em
geral, nijγjk > nikγkj. Neste caso, temos
2
gk h Ω(j, k)
−Ejk/kT
Λei = ne nij Ejk e
3/2 1/2
gj g (2πm ) (k T)
k e
(9.41)
Ejk Ω(j, k)
−6 −1/2 −Ejk/kT
≃ 8.6 × 10 ne nij T e
gj
onde gj e gk s˜ao os pesos estat´ısticos dos n´ıveis j e k e Ω(j, k) a ´e for¸ca
−3 −1
de colis˜ao. Nesta rela¸c˜ao a fun¸c˜ao resfriamento ´e dada em erg cm s .
Alguns resultados das contribui¸c˜oes dos diversos ´ıons para o resfriamento est˜ao
< 4
mostrados na figura 9.5, para T 10 K, onde a ordenada ´e a raz˜ao Λei/nenH,
∼
3 −1
dada em erg cm s (A. Dalgarno, R. A. McCray, Ann. Rev. Astron.
Astrophys. 10, 375, 1972). As abundˆancias usadas s˜ao m´edias para o sistema
<
solar. Vemos que, para T 100 K, a contribui¸c˜ao mais importante ´e a do
∼
C II, seguido pelo Si II e Fe II.
EXEMPLO 9.14 - Taxa de resfriamento pela excita¸c˜ao de C II
Podemos estimar a fun¸c˜ao resfriamento para o C II, considerando uma nuvem
−4 2 2
com T ≃ 100 K e ni ≃ 10 nH. Para a transi¸c˜ao P − P , temos Ejk ≃
1/2 3/2
0.0079 eV, Ω(j, k) ≃ 1.33 e gJ = 2, de modo que (9.41) fornece Λei/nenH ≃
−25 3 −1
2.9 × 10 erg cm s , ou log(Λei/nenH) ≃ −24.5, em bom acordo com a
figura 9.5.

---

## Página 278

266 Transporte de Energia em Astrof´ısica
Figura 9.5 - Fun¸c˜ao resfriamento por excita¸c˜ao el´etron-´ıon em regi˜oes HI.
˜ ´
9.5.2 EXCITAC¸AO COLISIONAL ELETRON-H
> 3
Para valores da temperatura T 10 K pode ser importante o meca-
∼
nismo de perda de energia pela excita¸c˜ao de n´ıveis do H neutro, especialmente
> >
n = 2, devido `as colis˜oes com el´etrons t´ermicos. Para 12 000 T(K) 4 000,
∼ ∼
a fun¸c˜ao resfriamento pode ser aproximada por
−19 −118 400/T
ΛeH ≃ 7.3 × 10 ne nH e (9.42)
−3 −1
dada em erg cm s , onde o termo exponencial leva em conta essencial-
mente as excita¸c˜oes para o segundo n´ıvel. C´alculos mais detalhados diferem
de (9.42) no m´aximo por 3%. Ap´os a excita¸c˜ao para o n´ıvel n = 2, o
´atomo voltar´a ao estado fundamental emitindo um quantum Lα, que ser´a
provavelmente absorvido pelos gr˜aos. Na figura 9.5 est´a tamb´em indicada a
varia¸c˜ao de ΛeH/ne nH com a temperatura. Para T ≃ 10 500 K o resfriamento
´e controlado essencialmente pelo H. Nesta temperatura, de (9.42) obtemos
log(Λei/nenH) ≃ −23.0.

---

## Página 279

Nebulosas e o Meio Interestelar 267
˜ ´
9.5.3 EXCITAC¸AO COLISIONAL H-ION
A excita¸c˜ao colisional de ´ıons como C I, C II, O I, Fe II pelo H neutro pode
ser um dos processos de resfriamento mais importantes no meio interestelar,
principalmente quando a ioniza¸c˜ao fracional ne/nH ´e baixa. De maneira geral,
a fun¸c˜ao resfriamento ´e dada por uma equa¸c˜ao como (9.40), substituindo agora
ne por nH. Vamos obter a fun¸c˜ao resfriamento para excita¸c˜ao do ´ıon C II,
provavelmente o ´ıon positivo mais abundante nas regi˜oes H I. O processo de
excita¸c˜ao pode ser escrito
2 2
H + C II( P ) −→ H + C II( P ) (9.43)
1/2 3/2
Desprezando a corre¸c˜ao para as desexcita¸c˜oes, admitindo que as excita¸c˜oes
s˜ao feitas a partir do n´ıvel fundamental, e considerando uma ´unica transi¸c˜ao,
2 2
do n´ıvel P para o P , obtemos
1/2 3/2
ΛH,CII ≃ nH nCII Ejk γjk (9.44)
Considerando que praticamente todos os ´atomos est˜ao na forma C II, pois os
potenciais de ioniza¸c˜ao s˜ao φ(CI) = 11.26 eV e φ(CII) = 24.38 eV, e chamando
a(C) a abundˆancia de C, temos nCII ≃ nC = a(C) n(H) ≃ a(C) nH, isto ´e,
admitimos que a densidade de ´atomos de H ´e essencialmente igual `a densidade
de n´ucleos de H. Levando em conta a deple¸c˜ao do carbono, caracterizada pelo
parˆametro dC, definido por
a(C)
fd(C)
dC = = 10 (9.45)
ac(C)
onde ac(C) ´e a abundˆancia c´osmica do carbono, temos nCII = dC ac(C) nH.
Substituindo em (9.44)
2
ΛH,CII = n dC ac(C) Ejkγjk (9.46)
H
O valor c´osmico da abundˆancia do carbono ´e definido como log ac(C) = ǫc(C)−
−3.4 −4
ǫc(H), de modo que ac(C) ≃ 10 = 4.0 × 10 . A diferen¸ca de energia
2 2 <
dos n´ıveis P e P ´e Ejk = 0.0079 eV. Para temperaturas T 100 K,
1/2 3/2 ∼
−10 3 −Ejk/kT
temos γkj ≃ 7.8 × 10 cm /s, de modo que γjk = (gk/gj) γkj e ≃
−9 −92.0/T 3
1.6 × 10 e cm /s. Substituindo ac(C), Ejk e γjk em (9.46)
−27 2 −92.0/T −3 −1
ΛH,CII ≃ 7.9 × 10 n dC e erg cm s (9.47)
H

---

## Página 280

268 Transporte de Energia em Astrof´ısica
EXEMPLO 9.15 - Taxa de resfriamento na linha de visada de ζ Oph
Para a linha de visada at´e a estrela ζ Oph a deple¸c˜ao ´e da ordem de dC ≃
−0.7
10 ≃ 0.2. Adotando uma temperatura m´edia T ≃ 80 K para as nuvens
interestelares, de (9.47) temos para a excita¸c˜ao colisional H-CII
−27 2 −3 −1
ΛH,CII ≃ 2.5 × 10 n dC erg cm s (9.48)
H
−26 −24 −3 −1
neste caso, obtemos ΛH,CII ≃ 5.0 × 10 − 5.0 × 10 erg cm s com
−3 2 −28 3 −1
nH ∼ 10−100 cm e ΛH,CII/n ≃ 5.0×10 erg cm s . Outras estrelas
H
menos avermelhadas tˆem dC ≃ 1. Taxas de desexcita¸c˜ao colisional H-C II
foram determinadas em fun¸c˜ao da temperatura, assim como para outros ´ıons,
como Fe II, C I e O I.
˜
9.5.4 EXCITAC¸AO COLISIONAL H-H2
Em nuvens interestelares densas, a mol´ecula H2 pode ser uma fonte de
resfriamento por meio da excita¸c˜ao colisional pelo H dos n´ıveis rotacionais
J = 0 → J = 2 (correspondente a uma temperatura E/k ≃ 500 K) e J = 1 →
J = 3 (transi¸c˜oes de quadrupolo el´etrico). Por outro lado, as desexcita¸c˜oes
colisionais produzem um ganho de energia. Se os n´ıveis rotacionais mais altos
forem povoados pela radia¸c˜ao, esse ganho pode ser intensificado. A fun¸c˜ao
resfriamento ´e semelhante ao caso H-´ıon, substituindo o ´ıon por H2. Uma taxa
−26
t´ıpica para uma nuvem interestelar com T ≃ 100 K ´e ΛH,H /nH ≃ 3 × 10
2 2
4 −3 2
erg/s. Em uma nuvem muito densa, com nH ≃ 10 cm , ΛH,H /n ≃
2 2 H2
−30 3 −1
3 × 10 erg cm s .
Outros processos f´ısicos podem tamb´em ser importantes no resfriamento
do meio interestelar. Entre eles, podemos destacar (i) o resfriamento pela
a¸c˜ao de gr˜aos interestelares; (ii) o resfriamento por outras mol´eculas, al´em de
−4
H2 e HD, em particular o CO, que tem abundˆancias t´ıpicas nCO ∼ 10 nH ,
2
OH e H2O e (iii) o resfriamento pela excita¸c˜ao colisional entre pr´otons e ´ıons.
A fun¸c˜ao total de resfriamento, incluindo os processos colisionais el´etron-
´ıon e H-´ıon est´a mostrada na figura 9.6 em fun¸c˜ao da temperatura (A. Dal-
garno, R. A. McCray, Ann. Rev. Astron. Astrophys. 10, 375, 1972). A orde-
2 3 −1
nada ´e a fun¸c˜ao Λ/n , dada em erg cm s , e as diferentes curvas referem-se
H
a diferentes valores da ioniza¸c˜ao fracional, x = ne/nH. Nesta figura n˜ao
< 4
est˜ao inclu´ıdos processos envolvendo gr˜aos ou mol´eculas. Para T 10 K,
∼
o resfriamento depende sensivelmente da ioniza¸c˜ao fracional ne/nH. Para
< −3
ne/nH 10 a fun¸c˜ao resfriamento ´e devida essencialmente ao impacto de
∼

---

## Página 281

Nebulosas e o Meio Interestelar 269
´atomos de H, e n˜ao depende da raz˜ao ne/nH. As regi˜oes mais quentes est˜ao
indicadas de maneira aproximada pela linha tracejada.
Figura 9.6 - Fun¸c˜ao resfriamento em regi˜oes HI.
9.6 TEMPERATURA DE EQUIL´IBRIO EM NUVENS
INTERESTELARES
Vamos considerar o problema do equil´ıbrio t´ermico no meio interestelar.
Seja Γξη a contribui¸c˜ao das part´ıculas de tipos ξ e η ao aquecimento do g´as,
−3 −1
isto ´e, Γξη ´e a energia por unidade de volume e tempo (erg cm s ) acres-
centada ao g´as pela intera¸c˜ao das part´ıculas ξ e η. Analogamente, seja Λξη a
contribui¸c˜ao destas part´ıculas ao resfriamento do g´as. Podemos ent˜ao escrever
a express˜ao
∑
∆ = Γ − Λ = (Γξη − Λξη) (9.49)
ξη
Onde ∆ ´e a diferen¸ca entre a energia introduzida e a retirada do g´as. No caso
mais geral, os processos de aquecimento e resfriamento dependem do tempo e

---

## Página 282

270 Transporte de Energia em Astrof´ısica
a fun¸c˜ao ∆ ´e diferente de zero, podendo haver um ganho ou perda de energia
do g´as, de modo que sua temperatura se modificar´a com o tempo, como em
processos transientes. Portanto, no caso geral, a temperatura T e tamb´em a
densidade n do g´as, medida em n´umero de part´ıculas por cent´ımetro c´ubico,
variam com o tempo, sendo a taxa de varia¸c˜ao determinada pelas fun¸c˜oes de
aquecimento e resfriamento. No estado estacion´ario temos
∆ = 0 ou Γ = Λ (9.50)
As fun¸c˜oes Γ e Λ dependem em geral da temperatura. Portanto, no estado
estacion´ario ´e poss´ıvel definir uma temperatura de equil´ıbrio TE, correspon-
dendo `a temperatura onde (9.50) ´e satisfeita. Nestas condi¸c˜oes, para a de-
termina¸c˜ao da temperatura de equil´ıbrio em uma regi˜ao do meio intereste-
lar, ´e necess´ario conhecer todos os processos de aquecimento e resfriamento,
aplicando-se ent˜ao a condi¸c˜ao (9.50).
EXEMPLO 9.16 - Ganho de energia e as leis da Termodinˆamica
Pela primeira lei da termodinˆamica, quando um sistema sofre uma intera¸c˜ao
em um processo infinitesimal, temos dE = dQ − dW, onde dE ´e a varia¸c˜ao
de energia interna, dQ ´e o calor absorvido pelo sistema e dW ´e o trabalho
realizado pelo sistema, medidos, por exemplo, em erg. Se o processo for quase-
est´atico, o calor absorvido dQ pode ser colocado em termos da varia¸c˜ao da
entropia do sistema dS (segunda lei da termodinˆamica), ou seja dQ = T dS,
onde dS ´e medida em erg/K. Chamando dV a varia¸c˜ao de volume do sistema,
2
temos dW = p dV , onde p ´e a press˜ao do g´as (dina/cm ). Portanto obtemos
a rela¸c˜ao T dS = dE + p dV . Para um g´as ideal, a energia interna depende
apenas da temperatura, E = E(T) e a equa¸c˜ao de estado ´e p = n k T, onde k
´e a constante de Boltzmann e n ´e o n´umero de part´ıculas do g´as por unidade
de volume, ou n = N/V , sendo N o n´umero total de part´ıculas do g´as em um
3
volume V . Desta forma, o calor absorvido por unidade de volume (erg/cm )
pode ser escrito
( )
dQ 3
= n d k T − k T dn (9.51)
V 2
onde usamos o fato de que a energia interna de um g´as perfeito e monoatˆomico
´e a sua energia cin´etica, E ≃ (3/2) N k T. Desta rela¸c˜ao, o ganho total de
energia por unidade de volume e por unidade de tempo ´e

---

## Página 283

Nebulosas e o Meio Interestelar 271
( )
d 3 dn
∆ = n k T − k T (9.52)
dt 2 dt
−3 −1
dado em erg cm s . Desta equa¸c˜ao vemos que, no estado estacion´ario,
dT /dt e dn/dt s˜ao nulas, e obtemos as rela¸c˜oes (9.50). Nas equa¸c˜oes acima
despreza-se a condu¸c˜ao t´ermica, a qual n˜ao ´e importante para as temperaturas
< 4
interestelares t´ıpicas, T 2 × 10 K. Para temperaturas mais altas, como no
∼
caso do g´as coronal, a condutividade t´ermica K ´e alta, e deve ser explicita-
mente considerada. A presen¸ca de um campo magn´etico na regi˜ao de alta
temperatura pode tamb´em afetar a condutividade t´ermica K. Considerando
a condu¸c˜ao eletrˆonica, (9.52) fica
( )
d 3 dn
∆ = n k T − k T + ∇ · (K ∇T) (9.53)
dt 2 dt
EXEMPLO 9.17 - O tempo de resfriamento
Vamos considerar um processo em que a temperatura varia de um valor T at´e
o valor de equil´ıbrio TE, sendo dT /dt a taxa de varia¸c˜ao. Neste caso, podemos
definir o tempo de resfriamento do g´as tT como
T − TE ∆T
tT = − = − (9.54)
dT /dt dT /dt
Se houver resfriamento, ∆T > 0, dT /dt < 0 e tT > 0; se houver aquecimento,
∆T < 0, dT /dt > 0 e tT > 0. Podemos escrever
( )
d 3 3 k (T − TE)
k T = − (9.55)
dt 2 2 tT
ou seja, o tempo de resfriamento corresponde `a raz˜ao entre o excesso de energia
do g´as em rela¸c˜ao ao valor no equil´ıbrio e a fun¸c˜ao aquecimento l´ıquida Γ−Λ.
Se tT e TE forem constantes no tempo
dT dt
= − (9.56)
T − TE tT
Integrando (9.56) considerando T = T0 em t = 0, obtemos
−t/tT
T − TE = (T0 − TE) e (9.57)

---

## Página 284

272 Transporte de Energia em Astrof´ısica
Se tT e TE forem constantes, T tende a TE segundo a fun¸c˜ao exp(−t/tT).
Para t/tT → 0, T → T0, para t/tT ≃ 1, T −TE ≃ (T0 −TE)/e. Geralmente,
o tempo de resfriamento tT definido por (9.54) ´e positivo. Pode, entretanto,
acontecer que este tempo seja negativo em determinadas regi˜oes, onde ocorrem
instabilidades.
Figura 9.7 - Determina¸c˜ao da temperatura em regi˜oes HI.
A temperatura de equil´ıbrio pode ser determinada igualando a fun¸c˜ao
resfriamento com a fun¸c˜ao aquecimento. Isto est´a representado na figura 9.7,
onde as duas curvas superiores correspondem `a fun¸c˜ao resfriamento da figura
9.6 para x = ne/nH = 0.1 e 0.01, enquanto que as retas no canto inferior
esquerdo representam a fun¸c˜ao Γ r dada por (9.24). Vemos que, mesmo
eX
para valores relativamente altos da ioniza¸c˜ao fracional (x ≃ 0.1) as tempe-
raturas de equil´ıbrio s˜ao baixas, da ordem de TE ≃ 13 K. Este valor ´e ainda
um limite superior, pois foi desprezada a perda de energia pela recombina¸c˜ao.
Sabemos que a an´alise de linhas espectrais em r´adio ou no vis´ıvel e ultravioleta
indicam a presen¸ca de nuvens difusas no meio interestelar, com temperaturas
da ordem de 80 − 100 K, al´em de um meio internuvens de baixa densidade
>
e temperatura T 1000 K. Portanto, outros mecanismos de aquecimento s˜ao
∼
necess´arios, al´em da fotoioniza¸c˜ao.

---

## Página 285

Nebulosas e o Meio Interestelar 273
Para os raios c´osmicos, os valores dados por (9.37) correspondem a valo-
res da fun¸c˜ao aquecimento superiores aos mostrados na figura 9.7. Note-se que
n˜ao foi inclu´ıda a ioniza¸c˜ao do He pelos raios c´osmicos, o que pode aumentar
a taxa acima. A compara¸c˜ao de (9.37) com as fun¸c˜oes de resfriamento das
figuras 9.6 e 9.7 mostra que, se a taxa de ioniza¸c˜ao pelos raios c´osmicos es-
−15 −1
tiver pr´oxima do limite superior ζH ≃ 10 s , a temperatura de equil´ıbrio
> −3
poder´a atingir os valores da ordem de 100 K para nuvens com nH 10 cm .
∼
V´arios problemas entretanto existem com rela¸c˜ao a este mecanismo, em par-
ticular a dificuldade na obten¸c˜ao de uma taxa real´ıstica pr´oxima do limite su-
perior e dificuldades encontradas no estudo da propaga¸c˜ao dos raios c´osmicos
atrav´es do meio interestelar.
No caso da mol´ecula de H2, o valor obtido em (9.39) ´e novamente da
ordem dos valores da fun¸c˜ao aquecimento mostrados na figura 9.6. Portanto,
ΓHd pode eventualmente contrabalan¸car o resfriamento pela excita¸c˜ao coli-
sional de C II pelo H se dC ≃ 0.1, zH ≃ 1 e n(HI) ≃ nH. Entretanto,
os valores dos parˆametros dC e zH s˜ao incertos, e c´alculos mais detalhados
mostram que este mecanismo pode manter temperaturas da ordem de 80 K
apenas em situa¸c˜oes restritas.
No caso do aquecimento fotoel´etrico por gr˜aos, para τ ≪ 1 e ye ≃ 1,
a fun¸c˜ao aquecimento Γed pode contrabalan¸car ΛH,CII na temperatura de
−3
equil´ıbrio TE ≃ 80 K, mesmo se dC ≃ 1 com nH ≃ 100 cm .
EXEMPLO 9.18 - O tempo de resfriamento em regi˜oes HI
O tempo de resfriamento tT pode ser estimado a partir da figura 9.5 para o
caso T ≫ TE. De (9.55), (9.49) e (9.52) temos
(3/2) k (T − TE) (3/2) k T n k T
tT ≃ − ≃ − ≃ (3/2) (Γ ≪ Λ) (9.58)
(d/dt) (3 k T /2) (Γ − Λ)/n Λ
onde tomamos n constante e consideramos que, para T ≫ TE, temos Γ ≪ Λ.
Podemos escrever ainda, para ne/nH ≪ 1
3 k T n/nH 3 k T 1 + ne/nH 3 k T 1
tT ≃ ≃ ≃ (9.59)
2 2 2
2 (Λ/n ) nH 2 (Λ/n ) nH 2 nH (Λ/n )
H H H
−4 2
Considerando T ≃ 100 K e ne/nH ≃ 10 , da figura 9.5 obtemos Λ/n ≃
H
−27 3 −1
3 × 10 erg cm s , de modo que

---

## Página 286

274 Transporte de Energia em Astrof´ısica
5
2.2 × 10
tT ≃ ano (9.60)
nH
−3 4
Com nH ≃ 10 cm isto corresponde a tT ≃ 2 × 10 ano, que ´e um valor
pequeno com rela¸c˜ao `a escala de tempo de vida das nuvens interestelares,
> 6 4
tn 10 ano. Analogamente, em uma regi˜ao mais quente, com T ∼ 10 K
∼
−1 2 −25 3 −1
e ne/nH ∼ 10 , temos Λ/n ≃ 6 × 10 erg cm s e tT ≃ 1.1 ×
H
5
10 /nH ano. A precis˜ao destas estimativas ´e da ordem de 30% para densi-
< −3 < < <
dades 1 nH (cm ) 300 e temperaturas 50 T(K) 600. Alternativa-
∼ ∼ ∼ ∼
mente, podemos estimar o tempo de resfriamento para uma nuvem H I com
−3 −3
T = 100 K, nH = 10 cm e ne/nH = 10 . Da figura 9.6 com T = 100 K
−3 2 −27 3 −1
e ne/nH = 10 , temos Λ/n ≃ 4 × 10 erg cm s . De (9.60) temos
H
11 4
tT ≃ 5.2 × 10 s = 1.6 × 10 anos.
EXEMPLO 9.19 - Temperatura de equil´ıbrio de nuvens interestelares
−3
Vamos considerar uma nuvem interestelar com nH = 20 cm aquecida por
−15 −1
part´ıculas c´osmicas pela ioniza¸c˜ao do H, segundo a taxa ζRC = 10 s .
3
Vamos estimar a energia por cm por segundo fornecida ao g´as, admitindo
que a energia m´edia dos el´etrons ejetados pelos raios c´osmicos ´e de 3.4 eV.
Temos de (9.37)
¯ −25 −3 −1
ΓH,RC ≃ nH ζH E ≃ 1.1 × 10 erg cm s (9.61)
Vamos admitir que a nuvem interestelar ´e resfriada apenas pela excita¸c˜ao
colisional do C II por ´atomos de H, com um parˆametro de deple¸c˜ao do carbono
dC = 0.2, para obter a temperatura de equil´ıbrio da nuvem. De (9.47), a
fun¸c˜ao resfriamento ´e dada por
−27 2 −92.0/T
ΛH,CII ≃ 7.9 × 10 n dCe ≃
H
−25 −92.0/T −3 −1
6.4 × 10 e erg cm s (9.62)
A tabela 9.2 relaciona alguns valores da fun¸c˜ao resfriamento para valores
t´ıpicos da temperatura da nuvem. Considerando ΓH,RC ≃ ΛC,HII(TE), vemos
que TE ≃ 53 K.

---

## Página 287

Nebulosas e o Meio Interestelar 275
log T log Λ log T log Λ
1.0 -28.2 1.8 -24.8
1.2 -26.7 2.0 -24.6
1.4 -25.8 2.2 -24.4
1.6 -25.2 2.4 -24.4
Tabela 9.2 - Fun¸c˜ao resfriamento em nuvens interestelares.
EXEMPLO 9.20 - Temperatura dos gr˜aos interestelares
No Exemplo 2.8 vimos que a temperatura dos gr˜aos interestelares ´e de cerca
de 20 K. Tanto em regi˜oes de H neutro como ionizado, a temperatura dos
gr˜aos pode ser determinada admitindo um equil´ıbrio entre a energia absorvida
pelos gr˜aos por unidade de tempo e a energia emitida por eles, de maneira
semelhante aos processos no g´as analisados at´e agora. Os ganhos de energia
dos gr˜aos devem-se essencialmente `a absor¸c˜ao da radia¸c˜ao estelar ou difusa e a
colis˜oes com part´ıculas do g´as, enquanto que as perdas s˜ao devidas `a emiss˜ao,
geralmente na regi˜ao infravermelha do espectro. Vamos considerar o caso de
uma nuvem interestelar em que o ganho de energia ´e devido essencialmente
ao campo de radia¸c˜ao interestelar, ou seja, a energia ganha pelos gr˜aos por
unidade de tempo e por unidade de ´area projetada dos gr˜aos (Γ) depende da
−3 ˚−1
densidade de energia do campo de radia¸c˜ao Uλ (unidades: erg cm A ) e
do fator de eficiˆencia para absor¸c˜ao, Qa(λ)
∫
∞
Γ = c Qa(λ) Uλ dλ (9.63)
0
−2 −1
com unidades de erg cm s . A energia perdida pelos gr˜aos por unidade de
´area e tempo, admitindo que emitem como um corpo negro a uma temperatura
Td, ´e dada por
∫
∞
Λ(Td) = 4 π Qa(λ) Bλ(Td) dλ (9.64)
0
A condi¸c˜ao Γ = Λ permite, em princ´ıpio, a determina¸c˜ao de Td, podendo ser
aplicada `as regi˜oes de H neutro ou ionizado. Temos ent˜ao
∫ ∫
∞ ∞
c Qa(λ) Uλ dλ = 4 π Qa(λ) Bλ(Td) dλ (9.65)
0 0

---

## Página 288

276 Transporte de Energia em Astrof´ısica
Esta equa¸c˜ao pode ser resolvida conhecendo-se o campo de radia¸c˜ao intereste-
lar e a varia¸c˜ao do fator de eficiˆencia para absor¸c˜ao com o comprimento de
onda, o que pressup˜oe o conhecimento da natureza e propriedades ´opticas dos
gr˜aos. Por exemplo, adotando Qa ∝ 1/λ na faixa vis´ıvel e infravermelha e
representando o campo de radia¸c˜ao por um corpo negro com temperatura de
4 −14
10 K e com um fator de dilui¸c˜ao de 10 , obtemos Td ≃ 20 K, apropriado
para gr˜aos de gelo, grafite e silicatos, com raios na faixa de 50 – 1000 ˚A.
9.7 NEBULOSAS IONIZADAS INTERESTELARES
Vamos considerar algumas caracter´ısticas das nebulosas gasosas ionizadas
interestelares, as quais compreendem as regi˜oes H II, nebulosas planet´arias e
restos de supernovas. As duas primeiras s˜ao essencialmente nuvens de g´as e
poeira associadas a estrelas muito quentes, respons´aveis pela fotoioniza¸c˜ao do
g´as. Os restos de supernovas s˜ao tamb´em compostos de g´as ionizado, embora
neste caso a ioniza¸c˜ao seja de origem colisional. Um tratamento detalhado das
propriedades f´ısicas destas nebulosas, incluindo os processos de aquecimento
e resfriamento nestas regi˜oes e determina¸c˜ao de sua temperatura eletrˆonica
pode ser encontrado em Osterbrock e Ferland (2005) e Maciel (2002).
¨
9.7.1 O RAIO DE STROMGREN
Vamos estimar as dimens˜oes da regi˜ao de H ionizado em torno de uma
estrela central quente, com tipo espectral O ou B. Considerando uma regi˜ao
HII homogˆenea e esf´erica, seja Q∗ o n´umero de f´otons ionizantes emitidos pela
estrela por segundo. Admitindo equil´ıbrio de ioniza¸c˜ao, isto ´e, o n´umero de
ioniza¸c˜oes por unidade de volume por segundo ´e igual ao n´umero de recom-
bina¸c˜oes por unidade de volume por segundo, podemos escrever
4
3
Q∗ = π r ne nH α (9.66)
s
3
onde rS ´e o raio da regi˜ao ionizada, ne e nH s˜ao as densidades de el´etrons e
´atomos de H, respectivamente, e α ´e o coeficiente de recombina¸c˜ao, essencial-
mente uma fun¸c˜ao da temperatura. Considerando a estrela como um corpo
negro de raio R∗, podemos calcular o n´umero de f´otons ionizantes emitidos
por segundo
∫
∞
πFν(R∗)
2
Q∗ = 4 π R dν (9.67)
∗
hν
ν1

---

## Página 289

Nebulosas e o Meio Interestelar 277
−2 −1 −1
onde Fν ´e o fluxo radiativo, dado em erg cm s Hz na superf´ıcie da
estrela. Conhecendo α como fun¸c˜ao da temperatura, podemos obter o raio rs,
que ´e o raio de Str¨omgren. De (9.66) obtemos
[ ]
1/3
3 Q∗
rs = (9.68)
4 π ne nH α
1/3
Na tabela 9.3 s˜ao dados os valores de rs(ne nH) e Q∗ para regi˜oes H II
em torno de estrelas da sequˆencia principal de diversos tipos espectrais. Os
−13 3
c´alculos foram feitos para T ≃ 8 000 K, de modo que α ≃ 3.1 × 10 cm /s.
−3
Por exemplo, para uma estrela O5, admitindo ne ≃ nH ∼ 10 − 100 cm ,
obtemos rs ≃ 5 − 20 pc.
1/3
tipo Tef R∗ Q∗ rs(nenH)
48 −1 2
(K) (R⊙) (10 s ) (pc/cm )
O5 47000 13.8 51 110
O6 42000 11.5 17.4 77
O7 38500 9.6 7.2 57
O8 36500 8.5 3.9 47
O9 34500 7.9 2.1 38
B0 30900 7.6 0.43 22
B1 22600 6.2 0.0033 4.4
Tabela 9.3 - Propriedades de regi˜oes HII.
9.7.2 TEMPERATURA DE NEBULOSAS FOTOIONIZADAS
Ao contr´ario das regi˜oes H I, nas regi˜oes H II a principal fonte de energia ´e
conhecida: ´e a estrela central, ou estrelas centrais, e o principal mecanismo de
aquecimento ´e a fotoioniza¸c˜ao do H, com uma componente secund´aria devida
`a fotoioniza¸c˜ao do He. Outros processos podem ocorrer, como o aquecimento
fotoel´etrico por gr˜aos, como vimos no caso das nuvens interestelares. Este
processo ´e afetado pelas incertezas relativas `as propriedades dos gr˜aos, em
particular o yield fotoel´etrico, o qual depende da natureza dos gr˜aos, al´em
da frequˆencia da radia¸c˜ao absorvida por eles. O resfriamento ´e geralmente

---

## Página 290

278 Transporte de Energia em Astrof´ısica
considerado a partir da recombina¸c˜ao dos el´etrons e pr´otons ou ´ıons, a ex-
cita¸c˜ao colisional entre estes componentes, emiss˜ao livre-livre (free-free) e co-
lis˜oes gr˜aos-g´as. As perdas de energia no processo de recombina¸c˜ao do H s˜ao
geralmente desprez´ıveis em rela¸c˜ao aos ganhos pela fotoioniza¸c˜ao. A ener-
gia perdida pela excita¸c˜ao pode ser obtida por um processo semelhante ao
usado para as nuvens interestelares. Como vimos, podemos obter express˜oes
relativamente simples para as fun¸c˜oes aquecimento e resfriamento para cada
processo adotado. No caso das nebulosas fotoionizadas, a determina¸c˜ao da
densidade de energia de Uν ´e complicada por dois fatores: primeiro, Uν ´e uma
∗
soma de duas componentes, a componente devida `a radia¸c˜ao estelar U e a
ν
D
componente devida `a radia¸c˜ao difusa, U . Em segundo lugar, Uν sofre uma
ν
atenua¸c˜ao dentro da regi˜ao H II causada pela absor¸c˜ao do g´as e dos gr˜aos.
Portanto, no caso mais geral, a determina¸c˜ao da energia m´edia do fotoel´etron
´e mais complexa, sendo geralmente necess´arias hip´oteses simplificadoras.
Figura 9.8 - As fun¸c˜oes aquecimento e resfriamento em regi˜oes HII.
Um exemplo da determina¸c˜ao das fun¸c˜oes de aquecimento e resfriamento
em regi˜oes HII est´a mostrado na figura 9.8, onde est˜ao representadas as
fun¸c˜oes Γ/ne np para duas estrelas diferentes com temperaturas de 50000 e
30000 K (linhas tracejadas) e a fun¸c˜ao resfriamento Λ/ne np para os principais

---

## Página 291

Nebulosas e o Meio Interestelar 279
´ıons de O e N em uma regi˜ao H II t´ıpica, al´em da fun¸c˜ao resfriamento total
(linhas cheias). Vemos que o resfriamento total pelo O II em T ≃ 10000 K ´e
−24 3 −1
da ordem de 10 erg cm s . Da figura a temperatura de equil´ıbrio est´a
< <
na faixa 7000 T(K) 9000.
∼ ∼
Alguns resultados de modelos simples para a determina¸c˜ao da tempe-
ratura em regi˜oes HII est˜ao mostrados na figura 9.9, (W. J. Maciel, S. R.
Pottasch, Astronomy and Astrophys, 106, 1, 1980), onde o aquecimento in-
clui a fotoioniza¸c˜ao do H e o efeito fotoel´etrico dos gr˜aos, indicados pelas
curvas ΓH e Γed respectivamente, e o resfriamento ´e devido essencialmente
`a excita¸c˜ao colisional de ´atomos e ´ıons. Estas fun¸c˜oes dependem ainda da
distˆancia considerada at´e a estrela central, uma vez que deve ser considerado
o efeito da dilui¸c˜ao da radia¸c˜ao do campo estelar e o transporte radiativo no
interior da nebulosa. Os resultados da figura 9.9 aplicam-se a uma nebulosa
−3
com uma densidade eletrˆonica ne = 10 cm na posi¸c˜ao r/rs = 0.4.
Figura 9.9 - Determina¸c˜ao da temperatura em regi˜oes HII.
Neste caso o efeito dos gr˜aos ´e mais intenso nas faixas intermedi´arias,
entre cerca de 20% e 60% do raio de Str¨omgren. Nas regi˜oes mais pr´oximas
da estrela a sobrevivˆencia dos gr˜aos ´e dificultada pela elevada densidade de
radia¸c˜ao, enquanto que para regi˜oes muito distantes a radia¸c˜ao estelar ´e muito
atenuada, diminuindo a fra¸c˜ao da radia¸c˜ao absorvida pelos gr˜aos.

---

## Página 292

280 Transporte de Energia em Astrof´ısica
EXEMPLO 9.21 - Escala de tempo dinˆamica das nebulosas planet´arias
Considerando velocidades de expans˜ao t´ıpicas da ordem de 25 km/s e um raio
m´edio da ordem de 0.4 pc a escala de tempo da fase de planet´aria ´e de cerca de
16 mil anos, sendo portanto de curta dura¸c˜ao em rela¸c˜ao `as principais escalas
de tempo de evolu¸c˜ao estelar. A fase protoplanet´aria, entre o ramo assint´otico
das gigantes (AGB) e o in´ıcio da fotoioniza¸c˜ao, ´e ainda mais curta por um
fator da ordem de 10.
EXEMPLO 9.22 - Escala de tempo de resfriamento em regi˜oes HII
O tempo de resfriamento definido pela equa¸c˜ao (9.58) pode ser estimado para
uma regi˜ao H II por
(3/2) k (T − TE) (3/2) k (T − TE)
tT ≃ − ≃ − (9.69)
(d/dt) (3 k T /2) (Γ − Λ)/ne
para temperaturas na vizinhan¸ca de TE ≃ 8000 K, obtemos
4
2 × 10
tT ≃ ano (9.70)
np
−3
para uma densidade eletrˆonica t´ıpica ne ≃ 100 cm , temos tT ≃ 200 anos.
´
Por exemplo, para a regi˜ao H II emOrion, obtemos tT ≃ 150 anos. O tempo de
resfriamento ´e geralmente maior que o tempo caracter´ıstico de recombina¸c˜ao
tr, de modo que o g´as resfria mais rapidamente do que recombina.
EXEMPLO 9.23 - Linhas de recombina¸c˜ao em r´adio
No processo de recombina¸c˜ao el´etron-pr´oton em regi˜oes ionizadas, a captura
do el´etron pode ocorrer em n´ıveis de energia muito altos do H, n > 40. O
el´etron, ent˜ao, sofre um processo de cascata, produzindo linhas de emiss˜ao no
dom´ınio r´adio, as chamadas linhas de recombina¸c˜ao em r´adio. A an´alise dessas
linhas pode levar `a determina¸c˜ao da temperatura eletrˆonica da nebulosa. Por
exemplo, para ∆n = nk − nj = 1 as linhas s˜ao denominadas nα, como no
caso de H76α, vista no Exemplo 4.8. Neste caso a transi¸c˜ao ´e de n = 77 para
10 4
n = 76 do H, com ν = 1.47 × 10 Hz = 1.47 × 10 MHz = 14.7 GHz, ou
λ ≃ 2 cm. Uma express˜ao aproximada para as transi¸c˜oes-α admitindo uma
profundidade ´optica τ ≪ 1 (caso opticamente fino) pode ser escrita

---

## Página 293

Nebulosas e o Meio Interestelar 281
4 2.1
2.3 × 10 ν
1.15
T ≃ (9.71)
(TL/TC) ∆νh
onde ν ´e a frequˆencia no centro da linha em GHz, ∆νh ´e a FWHM em kHz,
e TL/TC ´e a raz˜ao das temperaturas de brilho entre a linha e o cont´ınuo
(ver por exemplo Z. Abraham, J. R. D. L´epine, M. A. Braz, Monthly Notices
Roy. Astron. Soc. 193, 737, 1980). Para a linha H76α, temos ν = 14.7
√
6
GHz, ∆νh ≃ 2 b ν ln 2/c ≃ 800 kHz e b ≃ 10 cm/s (ver equa¸c˜ao 4.20).
4
Com TL/TC ≃ 0.2, temos T ≃ 10 K, t´ıpica para regi˜oes HII. Por exemplo,
considerando a linha H66α (ν = 22.4 GHz) para a regi˜ao HII RCW 38, temos
TL/TC ≃ 0.14 e F W HM = 2500 kHz, e de (9.71) obtemos uma temperatura
Te ≃ 11100 K, que pode ser comparada com o resultado obtido com uma
express˜ao mais correta, Te ≃ 10600 K.
EXEMPLO 9.24 - Emiss˜ao de energia em Restos de supernovas
>
As estrelas mais massivas ( 10 M⊙) passam por est´agios finais de evolu¸c˜ao
∼
violentos, explodindo como supernovas. Uma classe mais rara de nebulosas io-
nizadas interestelares, os restos de supernovas, apresentam-se frequentemente
como filamentos de g´as ionizado movendo-se com velocidades da ordem de
300-6000 km/s em torno da regi˜ao onde ocorreu a explos˜ao (Vink 2020). O
exemplo mais conhecido ´e a Nebulosa do Caranguejo (NGC 1952 = M1),
o resto da supernova que explodiu em 1054 d.C. tendo sido registrada por
astrˆonomos chineses. Ap´os a explos˜ao, ´e produzida uma onda de choque que
5
aquece o g´as a temperaturas maiores ou da ordem de 10 K. Nesta tempe-
ratura, as colis˜oes entre ´atomos e el´etrons s˜ao muito energ´eticas, ionizando o
H, He e elementos pesados, e gerando raios X em uma escala de tempo da
ordem de 100 a 10000 anos. Vimos uma estimativa da emiss˜ao de energia
pelo processo s´ıncrotron em Cas A no Exemplo 1.14. Al´em deste processo,
pode tamb´em ser observada emiss˜ao por Bremsstrahlung de el´etrons aquecidos
pela onda de choque. Os restos de supernovas aquecem e enriquecem o meio
interestelar com os elementos produzidos durante a vida da estrela progenitora
e pela explos˜ao, al´em de serem eficientes como aceleradores de raios c´osmicos.
A principal caracter´ıstica observacional desses objetos ´e a presen¸ca de
intensa radia¸c˜ao em frequˆencias de r´adio, produzida por mecanismos n˜ao
t´ermicos. Essa emiss˜ao, na Nebulosa do Caranguejo, estende-se aos compri-
mentos de onda ´opticos e do ultravioleta, sendo produzida essencialmente pelo

---

## Página 294

282 Transporte de Energia em Astrof´ısica
mecanismo s´ıncrotron. Nos demais casos, a maior parte da energia ´e fornecida
pela convers˜ao da energia cin´etica das part´ıculas do g´as em calor, isto ´e, por
meio das colis˜oes dos filamentos com o g´as interestelar. A energia liberada
neste processo colisional ioniza e aquece o g´as, podendo eventualmente ser
convertida em radia¸c˜ao, inclusive em comprimentos de onda caracter´ısticos
dos raios X. Vemos que, ao contr´ario das regi˜oes H II e nebulosas planet´arias,
que s˜ao fotoionizadas, os restos de supernovas s˜ao ionizados colisionalmente.
Antes de se misturar com o meio interestelar, os restos de supernovas
passam por diversas fases, com uma expans˜ao inicial at´e cerca de 200 a 300
anos, uma fase de expans˜ao adiab´atica (Taylor-Sedov), at´e cerca de 20000
anos, e uma fase radiativa snowplow at´e da ordem de 500000 anos, em que
ocorre a dissipa¸c˜ao da energia transferida ao meio interestelar. A camada em
expans˜ao sofre uma desacelera¸c˜ao pela intera¸c˜ao com o meio interestelar a
4
partir de velocidades da ordem de 10 km/s at´e cerca de 10 km/s.
´
EXERCICIOS
9.1 Suponha que a fun¸c˜ao resfriamento para as temperaturas caracter´ısticas
2 −26 3 −1
do meio internuvens seja dada por Λ/n ≃ 3 × 10 erg cm s . Um
H
modelo (E. L. O. Bakes, A. G. G. M. Tielens, Astrophys. J. 427, 822,
1994) prediz uma taxa de aquecimento por ´atomo de hidrogˆenio da ordem
−27
de 7 × 10 erg/s. Qual ´e a densidade desta regi˜ao interestelar?
9.2 Uma nuvem interestelar ´e aquecida por dois processos: (i) pela ioniza¸c˜ao
−16 −1
do H pelos raios c´osmicos a uma taxa de 5 × 10 s , correspondendo
a fotoel´etrons com energia m´edia de 5 eV e (ii) pela radia¸c˜ao estelar,
por meio da fotoioniza¸c˜ao do carbono. O resfriamento da nuvem ´e feito
exclusivamente pela excita¸c˜ao colisional do C pelos el´etrons. A nuvem
−3
tem uma densidade nH = 1 cm e uma ioniza¸c˜ao fracional ne/nH = 0.1.
−3 −1
(a) Estime a fun¸c˜ao aquecimento (erg cm s ) pelos raios c´osmicos. (b)
Estime a fun¸c˜ao aquecimento pela radia¸c˜ao estelar para as temperaturas
t´ıpicas das nuvens. Considere o intervalo 10 ≤ T(K) ≤ 100. Qual dos
processos ´e dominante? (c) A fun¸c˜ao resfriamento pelos ´ıons de C ´e dada
−25 −1/2 −91.59/T
aproximadamente por Λ ≃ 7.23×10 T e com unidades de
−3 −1
erg cm s . Estime a temperatura da nuvem.
9.3 Admita que os gr˜aos s´olidos de uma nuvem interestelar s˜ao esf´ericos,
3
com raio a = 100 ˚A e densidade interna s = 3 g/cm . (a) Qual ´e a

---

## Página 295

Nebulosas e o Meio Interestelar 283
se¸c˜ao de choque geom´etrica dos gr˜aos? (b) Qual ´e a massa dos gr˜aos
relativamente `a massa do ´atomo de H? (c) Estime a ´area projetada dos
gr˜aos por n´ucleo de hidrogˆenio Σd, admitindo que a raz˜ao entre a massa
total de gr˜aos e a massa total de g´as (raz˜ao gr˜ao-g´as) ´e da ordem de
1/200. (d) Estime a energia fornecida para aquecer a nuvem por emiss˜ao
−3
fotoel´etrica, considerando uma nuvem com nH = 1 cm . Admita que
6 −2 −1
o fluxo dos fotoel´etrons ´e Fe = 2 × 10 cm s e a energia m´edia do
fotoel´etron ´e de 5 eV.
9.4 Uma nuvem interestelar tem uma temperatura de 80 K e uma densidade
5 −
n ∼ 10 cm 3. Considerando que a nuvem ´e composta somente de H e
H2, na propor¸c˜ao 1 para 1, qual seria a massa de Jeans da nuvem?
9.5 Considere uma nuvem esf´erica de raio R = 100 pc composta de H, com
−3
uma densidade num´erica nH = 1 cm . (a) Qual ´e a massa da nuvem?
(b) Qual ´e o tempo de queda livre?
9.6 A emiss˜ao livre-livre (bremsstrahlung) do H pode dar uma contribui¸c˜ao
`a fun¸c˜ao resfriamento em regi˜oes H II. Para um ´ıon com densidade ni e
3
carga Zi, a perda de energia por cm e por segundo ´e dada por
[ ]
5 6 2 1/2
2 π e Z 2 π k T
i
Λ = √ n n g
ll i e ll
3 m
3 3 h me c e
4
(a) Estime Λll/npne para uma regi˜ao H II de H puro com T = 10 K.
Tome o fator de Gaunt gll ≃ 1. (b) Estime Λll/npne para uma regi˜ao H II
contendo H e He. Admita que ambos est˜ao uma vez ionizados, e considere
uma abundˆancia normal para o He. (c) Compare seus resultados com
os valores equivalentes obtidos para o resfriamento devido `a excita¸c˜ao
colisional.
ˆ ´
REFERENCIAS BIBLIOGRAFICAS
BEECH, M. 2019, Introducing the Stars: Formation, Structure and Evolution,
Springer
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson

---

## Página 296

284 Transporte de Energia em Astrof´ısica
DOPITA, M. A., SUTHERLAND, R. S. 2003, Astrophysics of the Diffuse
Universe, Springer
DRAINE, B. T. 2011, Physics of the Interstellar and Intergalactic Medium,
Princeton University Press
DYSON, J. E., WILLIAMS, D. A. 1997, The Physics of the Interstellar
Medium, IOP
KWOK, S. 2000, Origin and Evolution of Planetary Nebulae, CUP
KWOK, S. 2007, Physics and Chemistry of the Interstellar Medium, Univer-
sity Science Books
LEQUEUX, J. 2004, The interstellar medium, Springer (paperback 2010)
MACIEL, W. J. 2002, Astrof´ısica do Meio Interestelar, Edusp (edi¸c˜ao em
inglˆes: Astrophysics of the Interstellar Medium, Springer 2013)
MACIEL, W. J. 2020, Evolu¸c˜ao Qu´ımica da Gal´axia, IAG/USP
OSTERBROCK, D. E., FERLAND, G. J. 2005, Astrophysics of Gaseous Neb-
ulae and Active Galactic Nuclei, University Science Books
¨
SCHEFFLER, H., ELSASSER, H. 1988, Physics of the Galaxy and Interstellar
Matter, Springer
SPITZER Jr., L. 1978, Physical Processes in the Interstellar Medium, Wiley
(student edition 1998)
TIELENS, A. G. G. M. 2005, The physics and Chemistry of the Interstellar
Medium, CUP (paperback 2010)
VINK, J. F. 2020, Physics and Evolution of Supernova Remnants, Springer
WARD-THOMPSON, D. 2015, An Introduction to Star Formation, CUP
WYNN-WILLIAMS, G. 1992, The Fullness of Space, CUP

---

## Página 297

## 10
## PROCESSOS DIN ˆAMICOS EM PLASMAS
10.1 INTRODUC¸ ˜AO
Nos exemplos analisados at´e agora, consideramos geralmente sistemas
gasosos essencialmente neutros, como por exemplo no caso das nuvens in-
terestelares difusas. Em muitas situa¸c˜oes astrof´ısicas, temos ´ıons positivos e
negativos, sens´ıveis `a a¸c˜ao de campos el´etricos e magn´eticos, de modo que as
equa¸c˜oes dos plasmas devem ser aplicadas. Neste cap´ıtulo, vamos reexami-
nar algumas equa¸c˜oes b´asicas da dinˆamica dos fluidos, procurando generalizar
essas equa¸c˜oes para os plasmas, em particular, em suas aplica¸c˜oes magneto-
hidrodinˆamicas. Nossa ˆenfase estar´a nos processos que envolvem transporte
de energia, em especial na presen¸ca de campos magn´eticos.
Diversos textos tratam da astrof´ısica de plasmas, desde o n´ıvel intro-
dut´orio at´e livros mais especializados. Vamos aqui seguir em linhas gerais o
tratamento dado por Choudhuri (2010). Outras referˆencias incluem Chiuderi
e Velli (2015), Choudhuri (1998), Shu (1992) e Parker (1979). Uma descri¸c˜ao
simplificada da atmosfera solar em termos da astrof´ısica de plasmas pode ser
encontrada em Carroll e Ostlie (2014).
Muitas das situa¸c˜oes que analisamos em cap´ıtulos anteriores envolvem
plasmas. Por exemplo, na atmosfera do Sol e da maior parte das estrelas temos
´ıons de muitos elementos pesados. Nos interiores estelares, onde a temperatura

---

## Página 298

286 Transporte de Energia em Astrof´ısica
´e muito mais alta que na fotosfera, praticamente todos os elementos est˜ao ioni-
zados. Nas regi˜oes HII, como vimos, o pr´oprio hidrogˆenio est´a ionizado, assim
como o h´elio, pelo menos parcialmente. Na nuvens interestelares “neutras”,
a intera¸c˜ao dos raios c´osmicos com o g´as pode tamb´em ionizar e aquecer a
nuvem, como vimos no cap´ıtulo 9. De fato, os pr´oprios raios c´osmicos s˜ao
part´ıculas carregadas de alta energia, movendo-se a velocidades pr´oximas da
velocidade da luz, e seus processos de acelera¸c˜ao a rigor envolvem intera¸c˜oes de
plasmas. Al´em disto, a intera¸c˜ao destas part´ıculas com os campos magn´eticos
gal´acticos d˜ao origem a importantes processos de perda de energia, como no
caso da radia¸c˜ao s´ıncrotron.
EXEMPLO 10.1 - Linhas de ferro no espectro solar
A temperatura da fotosfera do Sol ´e aproximadamente T ≃ 5800 K, e a energia
m´edia das part´ıculas nesta regi˜ao ´e
−16 −13
E ≃ k T ≃ (1.38 × 10 )(5800) = 8.0 × 10 erg ≃ 0.5 eV (10.1)
Portanto, devemos esperar que o Fe esteja essencialmente neutro nesta regi˜ao,
ou seja, na forma Fe I, como pode ser visto pelos potenciais de ioniza¸c˜ao mos-
trados na tabela 10.1.
Ion PI (eV) T Ion PI (eV) T (K)
4 6
Fe I 7.9 9.2 × 10 Fe XI 290 3.4 × 10
5 6
Fe II 16.2 1.9 × 10 Fe XII 331 3.8 × 10
5 6
Fe III 30.6 3.6 × 10 Fe XIII 361 4.2 × 10
5 6
Fe IV 54.8 6.4 × 10 Fe XIV 392 4.6 × 10
5 6
Fe V 75.0 8.7 × 10 Fe XV 457 5.3 × 10
6 6
Fe VI 99.1 1.2 × 10 Fe XVI 489 5.7 × 10
6 6
Fe VII 125 1.5 × 10 Fe XVII 1266 14.7 × 10
6 6
Fe VIII 151 1.8 × 10 Fe XVIII 1358 15.8 × 10
6 6
Fe IX 234 2.7 × 10 Fe XIX 1456 16.9 × 10
6 6
Fe X 262 3.0 × 10 Fe XX 1582 18.4 × 10
Tabela 10.1 - Potenciais de ioniza¸c˜ao do Fe.

---

## Página 299

Processos dinˆamicos em plasmas 287
A tabela tamb´em mostra valores t´ıpicos da temperatura necess´aria para a
existˆencia do ´ıon considerado, obtida da equa¸c˜ao acima. Vemos que a energia
t´ermica m´edia na fotosfera solar n˜ao ´e suficiente para ionizar os ´atomos de
Fe, que devem portanto estar na forma Fe I. Este ´ıon pode ser observado
em absor¸c˜ao, isto ´e, os ´atomos de Fe da fotosfera podem absorver a radia¸c˜ao
em comprimentos de onda caracter´ısticos do ´ıon Fe I vinda das regi˜oes mais
profundas, e portanto mais quentes, da atmosfera solar. De fato, o espectro
solar analisado por Joseph Von Fraunhofer em 1814 apresenta diversas linhas
do Fe, como pode ser visto na figura 10.1 (ver tamb´em a figura 4.1).
Figura 10.1 - Linhas de absor¸c˜ao no espectro solar.
Algumas das linhas est˜ao identificadas, do Fe e de outros elementos. Outras
linhas de absor¸c˜ao fotosf´ericas do Fe podem ser observadas, como as linhas
nos comprimentos de onda 3860 ˚A, 4046 ˚A, 4384 ˚A, 5250 ˚A, 5380 ˚A, 5576 ˚A,
6302 ˚A, e 8689 ˚A. Linhas do Fe em altos est´agios de ioniza¸c˜ao s˜ao tamb´em
observadas no espectro da coroa solar, como visto na figura 10.2.
Considerando os potenciais de ioniza¸c˜ao da tabela 10.1, podemos estimar
a energia necess´aria para a existˆencia desses ´ıons na coroa solar, usando o
mesmo procedimento anterior. Por exemplo, para o ´ıon Fe XV, observado
pela linha em 284 ˚A, tomando E ≃ P I ≃ k T, temos
−12
P I (457) (1.60 × 10 )
6
T ≃ ≃ ≃ 5.3 × 10 K (10.2)
−16
k (1.38 × 10 )
ou seja, uma temperatura da ordem de milh˜oes de K ´e necess´aria para que o
g´as contenha esses ´ıons com emiss˜ao em 284 ˚A, o que d´a uma estimativa da
temperatura da coroa solar.

---

## Página 300

288 Transporte de Energia em Astrof´ısica
Figura 10.2 - A coroa solar em linhas do Fe e He. (a) Fe X, 171˚A, (b) Fe XII, 195 ˚A,
(c) Fe XV, 284 ˚A, (d) He II, 304 ˚A.
Temperaturas semelhantes podem ser estimadas para a linha 304 ˚A do He,
´
cujos potenciais de ioniza¸c˜ao s˜ao 24.6 eV (He I) e 54.4 eV (He II).E interes-
sante notar que a abundˆancia de Fe – incluindo todos os seus ´ıons – ´e muito
pequena na atmosfera solar. O valor m´edio desta abundˆancia ´e
( )
nF e
ǫ(Fe)⊙ = log + 12 = 7.5 (10.3)
nH
⊙
portanto
( )
nF e
7.5−12 −4.5 −5
≃ 10 = 10 = 3.2 × 10 (10.4)
nH
⊙
ou seja, h´a cerca de 30000 ´atomos de H para cada ´atomo de Fe na fotosfera
solar.

---

## Página 301

Processos dinˆamicos em plasmas 289
EXEMPLO 10.2 - Metais ionizados em supernovas e remanescentes
Em eje¸c˜oes de supernovas ou em restos de supernovas (SNR) podem ser
tamb´em identificadas linhas de emiss˜ao de metais ionizados. Na figura 10.3
est˜ao mostrados alguns espectros da supernova 1987A na faixa do ultravioleta
at´e o infravermelho pr´oximo, onde podem ser observadas linhas de N V, Ca
II, Mg II, Fe II, etc. A figura 10.4 mostra o remanescente de supernova Cas A
na faixa de raios X moles, destacando linhas de emiss˜ao de Ne X, Mg XI, Mg
XII, Si XIII a XV, S XV, Ar XVII, Ca XIX e Fe XXV. A faixa de energias
de 1 keV a cerca de 10 keV corresponde aos comprimentos de onda
h c
−8 −7
λ ≃ ≃ 1.2 × 10 a 1.2 × 10 cm = 1.2 a 12˚A (10.5)
E
Figura 10.3 - Espectro da supernova 1987A.
Estas linhas est˜ao superpostas a um espectro cont´ınuo (a curva sob as linhas)
produzido pela emiss˜ao livre-livre, ou Bremsstrahlung (radia¸c˜ao de freiamento,
ou desacelera¸c˜ao), gerada pela acelera¸c˜ao de el´etrons ao serem defletidos pelos
´ıons positivos. Os el´etrons n˜ao est˜ao ligados aos ´ıons nem antes nem depois da
emiss˜ao, correspondendo classicamente a uma modifica¸c˜ao de suas trajet´orias
abertas.

---

## Página 302

290 Transporte de Energia em Astrof´ısica
Figura 10.4 - O remanescente de supernova Cas A e espectro em altas energias.
EXEMPLO 10.3 - Linhas de metais ionizados em gal´axias “early type”
Gal´axias el´ıpticas do tipo early type mostram em seus espectros tamb´em
muitas linhas de elementos altamente ionizados, indicativas de plasmas. A
figura 10.5 mostra linhas de Fe II, Ar III, Ne IV, S III, etc. nos espectros de
v´arias dessas gal´axias na faixa do infravermelho.
Figura 10.5 - Espectros de gal´axias early type (ETG).

---

## Página 303

Processos dinˆamicos em plasmas 291
10.2 EQUAC¸ ˜OES DA DIN ˆAMICA DE FLUIDOS
Para estudar os principais fenˆomenos envolvendo campos magn´eticos em
plasmas necessitamos das equa¸c˜oes da Magnetohidrodinˆamica (MHD), que s˜ao
essencialmente as mesmas equa¸c˜oes da dinˆamica dos fluidos com a adi¸c˜ao dos
fenˆomenos eletromagn´eticos. Vamos inicialmente reexaminar as equa¸c˜oes da
dinˆamica dos fluidos, que j´a vimos ao estudar os ventos estelares na se¸c˜ao 5.3.
Algumas referˆencias sobre as equa¸c˜oes das mecˆanica dos fluidos e aplica¸c˜oes
astrof´ısicas s˜ao Batchelor (2000), Battaner (1996) e Trefil (1975).
10.2.1 ELEMENTO DE VOLUME EM UM FLUIDO
De modo geral, uma substˆancia ´e considerada como um fluido se o menor
elemento de volume a ser considerado cont´em um n´umero suficiente de part´ı-
culas (´atomos, mol´eculas, estrelas, etc.) para que as propriedades m´edias da
substˆancia variem de maneira cont´ınua. Em outras palavras, o que se conven-
ciona chamar ponto ou elemento de volume em um fluido cont´em na realidade
um grande n´umero de part´ıculas. A hip´otese do cont´ınuo pode tamb´em ser
formulada em termos do caminho livre m´edio das mol´eculas do fluido. De
fato, o caminho livre m´edio de uma mol´ecula ´e inversamente proporcional `a
densidade num´erica das part´ıculas na substˆancia considerada. Portanto, para
que um determinado elemento de volume seja considerado cont´ınuo, a densi-
dade das mol´eculas deve ser suficientemente alta, isto ´e, o caminho livre m´edio
λ precisa ser pequeno com rela¸c˜ao a uma dimens˜ao caracter´ıstica do sistema.
Figura 10.6 - Copo com ´agua: exemplo de um fluido.
EXEMPLO 10.4 - Copo de ´agua
Vamos considerar um exemplo simples de um fluido: um copo contendo ´agua
(figura 10.6). Considerando a densidade da ´agua nas condi¸c˜oes usuais ρ ≃ 1
3 −24
g/cm e a massa de uma mol´ecula m ≃ 18mH, onde mH = 1.67 × 10 g ´e a

---

## Página 304

292 Transporte de Energia em Astrof´ısica
massa do ´atomo de H, a densidade num´erica de mol´eculas de ´agua no copo ´e
ρ ρ
22 −3
n ≃ ≃ ≃ 3 × 10 cm (10.6)
m 18 mH
Em ordem de grandeza, o caminho livre m´edio das mol´eculas pode ser apro-
ximado pela separa¸c˜ao m´edia entre as mol´eculas,
−1/3 −8
λ ∼ n ≃ 3 × 10 cm (10.7)
Uma dimens˜ao caracter´ıstica do sistema (o copo) ´e o seu raio m´edio, R ≃ 5
cm. Portanto, temos λ ≪ R, de modo que a hip´otese do cont´ınuo ´e satisfeita.
EXEMPLO 10.5 - Gr˜aos em um envelope estelar
As estrelas gigantes vermelhas perdem massa para o meio interestelar de
maneira cont´ınua, de modo que possuem um envelope circunstelar situado
al´em de suas camadas fotosf´ericas (ver se¸c˜ao 5.5). Os gr˜aos de poeira s˜ao
provavelmente respons´aveis por pelo menos parte dessa perda de massa, es-
tando localizados no envelope juntamente com o g´as. Vamos considerar o
envelope circunstelar de uma estrela gigante vermelha, onde coexistem gr˜aos
s´olidos e g´as. A densidade num´erica das part´ıculas de g´as ´e tipicamente
8 −3
n ∼ 10 cm . Por outro lado, podemos considerar os gr˜aos como part´ıculas
−5
esf´ericas com raio a ≃ 1000 ˚A = 10 cm. A se¸c˜ao de choque para colis˜oes
gr˜aos-g´as, admitida da ordem da se¸c˜ao geom´etrica dos gr˜aos, ´e dada por
2 −10 2
σ ∼ π a ∼ 3 × 10 cm (10.8)
portanto, o caminho livre m´edio dos gr˜aos para estas colis˜oes ´e
1
λ ∼ ∼ 30 cm (10.9)
n σ
Uma dimens˜ao caracter´ıstica de um envelope circunstelar ´e o seu raio, tipica-
14
mente da ordem de v´arios raios estelares, ou R ∼ 10 cm. Vemos que λ ≪ R,
o que justifica o tratamento do envelope de g´as e gr˜aos como um fluido.
˜
10.2.2 EQUAC¸OES BASICAS
Considerando novamente um fluido n˜ao viscoso em movimento, na au-
sˆencia de campos magn´eticos, vimos que este fluido pode ser caracterizado
por cinco quantidades, como as trˆes componentes da velocidade ~v, a press˜ao
P e densidade ρ. Se o fluido possuir viscosidade, componentes tangenciais
das for¸cas entre duas superf´ıcies consideradas devem ser levadas em conta,

---

## Página 305

Processos dinˆamicos em plasmas 293
e a equa¸c˜ao do movimento de Euler deve ser substituida pelas equa¸c˜oes de
Navier-Stokes. Para uma discuss˜ao simplificada dessas equa¸c˜oes ver Maciel
(2004, cap´ıtulo 7).
As cinco equa¸c˜oes que determinam essas quantidades s˜ao a equa¸c˜ao de
continuidade da massa, a equa¸c˜ao de Euler (trˆes componentes), e uma equa¸c˜ao
exprimindo a conserva¸c˜ao da energia no fluido. Esta descri¸c˜ao corresponde
ao “modelo cont´ınuo”, em que as equa¸c˜oes hidrodinˆamicas s˜ao escritas em
termos de vari´aveis macrosc´opicas, como P, ρ e ~v em fun¸c˜ao da posi¸c˜ao ~r.
J´a vimos estas equa¸c˜oes no cap´ıtulo 5. A equa¸c˜ao de continuidade pode ser
escrita como
∂ρ
~
+ ∇ · (ρ ~v) = 0 (10.10)
∂t
A equa¸c˜ao do movimento pode ser escrita em termos da derivada total (des-
cri¸c˜ao lagrangiana), ou considerando separadamente os dois termos (descri¸c˜ao
euleriana). A equa¸c˜ao do movimento, ou Equa¸c˜ao de Euler, pode ser escrita
∂~v 1
~ ~
+ (~v · ∇)~v = − ∇P (10.11)
∂t ρ
~ 3
Se o fluido estiver sob a¸c˜ao de um campo de for¸cas externas F (dina/cm ),
~
isto ´e, F ´e a for¸ca que atua em um volume unit´ario, como no caso de um
campo gravitacional, temos
∂~v 1 1
~ ~ ~
+ (~v · ∇)~v = − ∇P + F (10.12)
∂t ρ ρ
A equa¸c˜ao de energia ´e geralmente a mais complexa, a n˜ao ser que alguma
hip´otese simplificadora seja feita. Por exemplo, no caso de fluidos isot´ermicos,
esta equa¸c˜ao ´e substitu´ıda por uma express˜ao mais simples, T = constante, e
no caso de movimentos adiab´aticos temos
γ
P = constante × ρ (10.13)
γ−1
ou T = constante × ρ , onde γ ´e novamente a raz˜ao dos calores espec´ıficos.
Vers˜oes mais completas da equa¸c˜ao de energia podem ser escritas como
2
∂[ρ(v /2 + e)]
~ 2 ~
+ ∇ · [ ρ ~v(v /2 + e + P/ρ) + ~qc ] = ~v · F + QA + QR (10.14)
∂t
onde e ´e a energia interna por unidade de massa (erg/g), ~q ´e o fluxo de
−2 −1 ~
energia transportada (erg cm s ), tal que ∇ · ~q ´e a energia transportada

---

## Página 306

294 Transporte de Energia em Astrof´ısica
por cent´ımetro c´ubico por segundo; QA ´e a taxa de deposi¸c˜ao de energia
−3 −1
ac´ustica ou mecˆanica (unidades: erg cm s ); QR ´e a taxa de deposi¸c˜ao de
−3 −1
energia radiativa (erg cm s ); ~qc ´e o fluxo de energia transportado pela
−2 −1
condu¸c˜ao (unidades erg cm s ), como vimos na se¸c˜ao 5.3.
10.3 CRIT´ERIO DE INSTABILIDADE DE JEANS
No Exemplo 7.8 (ver tamb´em o Exemplo 9.5) fizemos uma estimativa da
massa necess´aria para uma nuvem protoestelar se condensar e formar estrelas,
obtendo a massa de Jeans MJ (equa¸c˜ao 7.48). Vamos agora examinar em
maiores detalhes os crit´erios de instabilidade requeridos de um fluido para que
isto aconte¸ca (ver por exemplo Choudhuri 2010).
Vamos considerar uma perturba¸c˜ao em uma nuvem de g´as, que produza
uma compress˜ao localizada. O excesso de press˜ao gera ondas ac´usticas que se
propagam no g´as, tendendo a reverter `a situa¸c˜ao de equil´ıbrio, mas a atra¸c˜ao
gravitacional da regi˜ao comprimida tende a atuar no sentido oposto, atraindo
mais g´as para a regi˜ao comprimida e favorecendo a forma¸c˜ao estelar. Em
outras palavras, se a perturba¸c˜ao crescer com o tempo o g´as afasta-se do
equil´ıbrio, mas se ela decrescer, o g´as permanece est´avel. No primeiro caso,
ocorre uma instabilidade dinˆamica no g´as, conhecida como instabilidade de
Jeans, ap´os seu estudo pioneiro em 1902. Vamos considerar um g´as que, no
estado n˜ao perturbado, ´e caracterizado pelas quantidades P0 (press˜ao), ρ0
(densidade) e φ0 (potencial gravitacional), denotando as quantidades pertur-
badas por P0 + P1, ρ0 + ρ1 e φ0 + φ1, e uma velocidade v1. Vamos considerar
~
a rela¸c˜ao entre a for¸ca F e o potencial dada por
~ ~
F = −ρ∇φ (10.15)
Examinando a equa¸c˜ao de continuidade (10.10) e a equa¸c˜ao de energia no caso
adiab´atico, equa¸c˜ao (10.13), ´e f´acil ver que essas equa¸c˜oes se anulam no estado
estacion´ario. De fato, a ´unica equa¸c˜ao n˜ao trivial ´e a equa¸c˜ao de Euler. No
~ ~ ~ ~ ~
estado estacion´ario, temos ∇P → ∇P0 e F → F0 = −ρ0 ∇φ0, e esta equa¸c˜ao
pode ser escrita
~ ~
∇P0 = −ρ0 ∇φ0 (10.16)
o potencial deve ainda satisfazer a equa¸c˜ao de Poisson, de modo que
2
∇ φ0 = 4 π G ρ0 (10.17)
As equa¸c˜oes (10.16) e (10.17) n˜ao podem ser satisfeitas em um g´as infinito
em repouso. Se P0 ´e constante, de (10.16) o potencial φ0 deve tamb´em ser
constante, o que requer ρ0 = 0 em (10.17). Apesar disto, podemos admitir

---

## Página 307

Processos dinˆamicos em plasmas 295
que essas equa¸c˜oes sejam satisfeitas, o que leva a uma dedu¸c˜ao simplificada
do crit´erio de instabilidade de Jeans (para maiores detalhes ver Choudhuri
2010, cap´ıtulo 8, e para solu¸c˜oes mais rigorosas ver Spitzer 1978).
Para verificar como as perturba¸c˜oes variam com o tempo, podemos li-
nearizar as equa¸c˜oes dos fluidos, mantendo somente os termos lineares de
primeira ordem. Neste caso podemos mostrar que as perturba¸c˜oes ρ1, v~1 e φ1
variam com o tempo segundo as rela¸c˜oes
∂ρ1
~
+ ρ0 ∇ · v~1 = 0 (10.18)
∂t
∂ ~v1
2 ~ ~
ρ0 = −c ∇ρ1 − ρ0 ∇φ1 (10.19)
s
∂t
2
∇ φ1 = 4 π G ρ1 (10.20)
onde introduzimos a velocidade de propaga¸c˜ao das perturba¸c˜oes cs
γ P0
2
c = (10.21)
s
ρ0
EXEMPLO 10.6 - Atra¸c˜ao gravitacional desprez´ıvel
Vamos examinar o caso simples em que o excesso de atra¸c˜ao gravitacional
produzido pela perturba¸c˜ao seja desprez´ıvel, como no caso da propaga¸c˜ao de
ondas sonoras na atmosfera. Nesse caso, de (10.19),
∂ ~v1
2 ~
ρ0 ≃ −c ∇ρ1 (10.22)
s
∂t
tomando a divergˆencia,
∂
~ 2 2
−ρ0 (∇ · v~1) ≃ c ∇ ρ1 (10.23)
s
∂t
de (10.18), temos
2
∂ ρ1 ∂
~
≃ −ρ0 (∇ · v~1) (10.24)
2
∂t ∂t
portanto,
( )
2
∂
2 2
− c ∇ ρ1 = 0 (10.25)
2 s
∂t

---

## Página 308

296 Transporte de Energia em Astrof´ısica
que ´e a equa¸c˜ao para a propaga¸c˜ao de ondas sonoras, onde cs ´e identificada
com a velocidade do som no meio considerado.
Para obter uma solu¸c˜ao mais geral, vamos considerar perturba¸c˜oes na
forma de componentes de Fourier, de modo que as vari´aveis ρ1, v~1 e φ1 sejam
~ ~
proporcionais a exp[i(k·~x−ω t)], onde k ´e o n´umero de onda e ω ´e a frequˆencia,
~
i(k·~x−ω t)
como por exemplo em ρ1 = constante e . Neste caso podemos mostrar
que a perturba¸c˜ao tem como consequˆencia uma instabilidade se k < kJ, onde
4 π G ρ0
2
k = (10.26)
J 2
c
s
Esta ´e portanto a condi¸c˜ao para a existˆencia da instabilidade. Se k > kJ,
teremos uma perturba¸c˜ao oscilat´oria, que n˜ao levar´a a uma instabilidade. No
caso k < kJ podemos ent˜ao obter um valor m´ınimo para o tamanho necess´ario
da perturba¸c˜ao, dado por
2 π
λ > λJ = (10.27)
kJ
Este ´e precisamente o comprimento de Jeans, e a massa correspondente ´e a
massa de Jeans
4
3
MJ = π λ ρ0 (10.28)
J
3
Escrevendo (10.21) na forma
γ P0 γ k T k T
2
c = = ≃ (10.29)
s
ρ0 μ mH μ mH
−24
onde μ ´e novamente o peso molecular m´edio, mH = 1.67 × 10 g ´e a massa
−16
do ´atomo de H, k = 1.38×10 erg/K ´e a constante de Boltzmann e tomamos
γ ≃ 1, apropriado por exemplo a um g´as isot´ermico, obtemos
( )
5/2 3/2
4 π k T 1
MJ = (10.30)
1/2
3 G μ mH
ρ
0
Esta equa¸c˜ao pode ser comparada com a massa de Jeans estimada anterior-
3/2 −3/2 −1/2
mente (ver equa¸c˜oes 7.48 e 9.9). Em todos os casos, MJ ∝ T μ ρ .
EXEMPLO 10.7 - Estimativa do comprimento e da massa de Jeans
Vamos aplicar a equa¸c˜ao (10.30) a uma nuvem com temperatura de 100 K e
3 5
uma densidade de 1 part´ıcula por cm . Obtemos MJ ≃ 4×10 M⊙, apropriada
a um aglomerado estelar, e λJ ≃ 160 pc.

---

## Página 309

Processos dinˆamicos em plasmas 297
10.4 EQUAC¸ ˜OES B ´ASICAS DE MHD
A hip´otese do cont´ınuo pode ser aplicada a diversas situa¸c˜oes astrof´ısicas,
em particular quando o caminho livre m´edio das part´ıculas – estabelecido
essencialmente por meio de colis˜oes – ´e pequeno com rela¸c˜ao `as dimens˜oes
t´ıpicas do sistema. Podemos ent˜ao dizer que as colis˜oes favorecem o compor-
tamento de um sistema como um fluido cont´ınuo. Campos magn´eticos em um
plasma podem tamb´em manter part´ıculas carregadas confinadas localmente
por um tempo suficientemente longo para que o sistema se comporte como um
fluido, mesmo que os processos colisionais n˜ao sejam eficientes. As equa¸c˜oes
da magnetohidrodinˆamica (MHD) devem ser usadas em fluidos que s˜ao bons
condutores de eletricidade.
Um tratamento detalhado das aplica¸c˜oes astrof´ısicas da MHD est´a al´em
dos objetivos deste texto, e o leitor interessado poder´a consultar alguns dos
livros relacionados na bibliografia. A equa¸c˜ao de continuidade (10.10) re-
flete essencialmente a conserva¸c˜ao da massa, e n˜ao sofre modifica¸c˜oes com a
inclus˜ao de um campo magn´etico, e a equa¸c˜ao de energia na forma (10.13)
pode em princ´ıpio ser mantida de forma aproximada, mas uma an´alise mais
completa da equa¸c˜ao de energia na forma (10.14) est´a al´em dos objetivos
deste texto. Nesta se¸c˜ao, vamos nos limitar a enunciar as principais modi-
fica¸c˜oes introduzidas na equa¸c˜ao de Euler (10.12) pela presen¸ca de um campo
magn´etico. Nesse caso, al´em das duas vari´aveis termodinˆamicas usuais (geral-
mente P e ρ) e das trˆes componentes da velocidade, ´e necess´ario especificar
~
o vetor campo magn´etico B para que o plasma possa ser descrito em um
modelo magnetohidrodinˆamico. Esse tipo de modelo ´e freq¨uentemente ´util
nas aplica¸c˜oes astrof´ısicas, em particular em processos n˜ao relativ´ısticos em
que os movimentos do plasma s˜ao essencialmente constantes ou variam lenta-
mente com o tempo, ou seja, quando a escala de tempo τ dos processos f´ısicos
´e muito maior que o inverso da freq¨uˆencia do plasma, ωp, isto ´e, τ ≫ 1/ωp.
Por exemplo, essas condi¸c˜oes se aplicam geralmente aos ventos estelares, nos
casos em que os movimentos do plasma devem-se `a a¸c˜ao de for¸cas mecˆanicas
e magn´eticas. A equa¸c˜ao de Euler (10.12) pode ser escrita
∂~v 1 1 1
~ ~ ~ ~ ~
+ (~v · ∇)~v = − ∇P + F + J × B (10.31)
∂t ρ ρ ρ c
~ ~
onde B ´e o campo magn´etico e J ´e a densidade de corrente el´etrica. Como nas
demais aplica¸c˜oes deste texto, usamos preferencialmente o sistema de unidades
gaussiano, onde as quantidades el´etricas est˜ao em u.e.s. e as magn´eticas em
u.e.m. Uma deriva¸c˜ao da equa¸c˜ao (10.31) a partir de processos microsc´opicos
pode ser encontrada em Choudhuri (1998, cap´ıtulo 13). No modelo MHD

---

## Página 310

298 Transporte de Energia em Astrof´ısica
podemos escrever a equa¸c˜ao de Maxwell sem o termo da corrente de desloca-
mento na forma
4 π
~ ~ ~
∇ × B = J , (10.32)
c
~
ou seja, a densidade de corrente J pode ser obtida a partir do campo magn´etico
~
B e vice-versa. Substituindo (10.32) em (10.31) temos
∂~v 1 1 1
~ ~ ~ ~ ~ ~
+ (~v · ∇)~v = − ∇P + F + (∇ × B) × B (10.33)
∂t ρ ρ 4 π ρ
usando a identidade vetorial
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
∇(A · B) = A × (∇ × B) + B × (∇ × A) + (A · ∇)B + (B · ∇)A (10.34)
~ ~
e tomando A = B, ´e f´acil mostrar que
( )
2
B
~ ~ ~ ~ ~ ~ ~
(∇ × B) × B = (B · ∇)B − ∇ (10.35)
2
substituindo esta equa¸c˜ao em (10.33) obtemos a forma alternativa da equa¸c˜ao
de Euler,
( )
2 ~ ~ ~
∂~v 1 1 B (B · ∇)B
~ ~ ~
+ (~v · ∇)~v = F − ∇ P + + (10.36)
∂t ρ ρ 8 π 4 π ρ
2
De (10.36) vemos que o termo B /8π corresponde `a press˜ao magn´etica, intro-
duzida pela presen¸ca do campo magn´etico. O ´ultimo termo em (10.36) est´a
relacionado com a tens˜ao magn´etica ao longo das linhas de for¸ca magn´eticas,
isto ´e, o campo magn´etico est´a associado a uma press˜ao isotr´opica e al´em
disso a uma tens˜ao ao longo das linhas de campo.
EXEMPLO 10.8 - Press˜ao magn´etica na atmosfera solar
2
Como exemplo, podemos comparar a press˜ao magn´etica B /8 π com a press˜ao
do g´as em alguns pontos da atmosfera solar. Na fotosfera, a press˜ao varia por
diversas ordens de grandeza, mas podemos considerar um ponto m´edio onde
17 −3
a densidade total de part´ıculas ´e da ordem de 10 cm e a temperatura ´e da
5 2
ordem de 6000 K, de modo que a press˜ao total ´e de 10 dina/cm . Press˜oes
equivalentes s˜ao obtidas por campos magn´eticos da ordem de 1500 Gauss.

---

## Página 311

Processos dinˆamicos em plasmas 299
Valores semelhantes s˜ao observados em regi˜oes da atmosfera solar como as
praias e f´aculas solares, e valores ainda mais altos, B ∼ 3000 Gauss, s˜ao as-
sociados `as regi˜oes umbrais das manchas solares (ver figura 6.9). Nestas, a
temperatura tende a ser um pouco mais baixa que na fotosfera, mas as den-
5 2
sidades mais altas levam a press˜oes tamb´em da ordem de 10 dina/cm ou
superiores. Nas regi˜oes mais externas, associadas ao vento solar, o campo
´e provavelmente mais baixo por algumas ordens de grandeza, atingindo va-
lores pr´oximos ao do campo magn´etico terrestre, B ∼ 1 Gauss. Nesse caso,
−2 2
as press˜oes magn´eticas s˜ao da ordem de 10 dina/cm , o que pode ser com-
parado com o valor da press˜ao do g´as em uma regi˜ao coronal a cerca de 2 raios
6 −3 6
solares da superf´ıcie do Sol, na qual a densidade n ∼ 10 cm , T ∼ 10 K e
−3 2
a press˜ao P ∼ 10 dina/cm .
Campos magn´eticos s˜ao tamb´em associados `as atmosferas e envelopes de
estrelas gigantes vermelhas, embora sua intensidade seja incerta. Por exemplo,
3 8 −3
no envelope de uma gigante vermelha com T ∼ 10 K e n ∼ 10 cm , a
−5 2
press˜ao do g´as ´e da ordem de 10 dina/cm , valor equivalente `a press˜ao
−2
magn´etica de um campo de apenas B ∼ 10 Gauss, sugerindo que os campos
magn´eticos tˆem efetivamente efeitos na dinˆamica dos envelopes circunstelares.
EXEMPLO 10.9 - Press˜ao magn´etica nas manchas solares
A intensidade do campo magn´etico no centro da umbra das manchas solares
3
´e tipicamente B ≃ 2 × 10 G. Considerando que a press˜ao do g´as na base
5 2
da fotosfera solar ´e da ordem de Pg ≃ 2 × 10 dina/cm , vamos comparar a
press˜ao magn´etica nesta regi˜ao com a press˜ao do g´as. A press˜ao magn´etica ´e
numericamente igual `a densidade de energia magn´etica, ou seja
2
B
Pm ≃ (10.37)
8 π
2 5 2
onde B est´a em G e Pm em dina/cm . Portanto, Pm ≃ 1.59 × 10 dina/cm
e Pm/Pg ≃ 0.8. Alternativamente podemos usar a equa¸c˜ao
2
B
Pm ≃ (10.38)
2 μ0
−7 2
onde μ0 ≃ 4 π × 10 N/A ´e a permeabilidade do v´acuo, B est´a em T,
2 4 2
e Pm e N/m . Temos ent˜ao B ≃ 0.2 T e Pm ≃ 1.59 × 10 N/m . Com
4 2
Pg ≃ 2 × 10 N/m , obtemos novamente Pm/Pg ≃ 0.8.
EXEMPLO 10.10 - Densidade de energia magn´etica no Sol
3
Tomando o valor m´edio do campo magn´etico solar como B ≃ 10 G = 0.1 T,
podemos estimar a densidade de energia magn´etica do sol por

---

## Página 312

300 Transporte de Energia em Astrof´ısica
2
B
4 3
UB ≃ ≃ 4.0 × 10 erg/cm (10.39)
8 π
comparando com a densidade de energia gravitacional
2
G M
⊙ 16 3
Ug ≃ ≃ 1.1 × 10 erg/cm (10.40)
4
R
⊙
obtemos a rela¸c˜ao
2 4
U B R
B ⊙ −12
≃ ≃ 3.5 × 10 (10.41)
2
Ug 8 π G M
⊙
EXEMPLO 10.11 - Densidade de energia nos flares solares
Vamos considerar um grande flare solar ocorrendo em uma regi˜ao onde a
25
intensidade do campo magn´etico ´e B ≃ 0.03 T, liberando cerca de Ef ∼ 10 J
em aproximadamente uma hora (cf. Exemplo 1.4). De (10.38) a densidade de
energia magn´etica na regi˜ao do flare antes da erup¸c˜ao ´e
2 2
B (0.03) 3
Um ≃ ≃ ≃ 360 J/m (10.42)
−7
2 μ0 (2) (4 π 10 )
O volume da regi˜ao onde se originou o flare ´e Vm ≃ Ef/Um ≃ 2.78 ×
22 3
10 m , correspondendo a cerca de 25 volumes terrestres, onde usamos VT ≃
3
(4/3) π R , com RT ≃ 6400 km.
T
EXEMPLO 10.12 - Ondas de Alfv´en e flares solares
Perturba¸c˜oes nas linhas de for¸ca do campo magn´etico propagam-se na forma
de ondas transversais chamadas Ondas de Alfv´en. Estas ondas tˆem uma ve-
locidade de propaga¸c˜ao dada por
B
vA ≃ √ (10.43)
μ0 ρ
onde μ0 ´e novamente a permeabilidade do v´acuo, B est´a em T, vA em m/s
3
e ρ ´e a densidade (g/cm ) da regi˜ao considerada. No caso do flare solar
do Exemplo (10.11), tomando uma densidade t´ıpica para a fotosfera solar
−9 3 −6 3
ρ ≃ 4.9×10 g/cm ≃ 4.9×10 kg/m obtemos va ≃ 12.1 km/s. Admitindo
1/3
que a regi˜ao onde se origina o flare tem dimens˜oes da ordem de R ∼ Vm ∼
7 3
3.0 × 10 m, a onda levaria um tempo da ordem de t ∼ R/vA ≃ 2.5 × 10 s,
ou cerca de 40 minutos para percorrer esta regi˜ao.

---

## Página 313

Processos dinˆamicos em plasmas 301
EXEMPLO 10.13 - Flares solares e reconex˜ao magn´etica
Os flares solares s˜ao intensas eje¸c˜oes de part´ıculas carregadas da superf´ıcie
do Sol, que podem afetar significativamente as telecomunica¸c˜oes em nosso
planeta (figura 10.7a).
Figura 10.7 - (a) Flare solar no ultravioleta, (b) loops na superf´ıcies solar.
A id´eia b´asica para explicar a natureza dos flares ´e a reconex˜ao magn´etica,
ou seja, um s´ubito rearranjo das linhas do campo magn´etico solar. Os flares
est˜ao associados com as manchas solares, onde o campo magn´etico ´e mais
intenso nas regi˜oes ativas do Sol. Assim, a energia que ´e liberada em um flare
estava originalmente armazenada no campo magn´etico solar.
Imagens ultravioletas das regi˜oes ativas, como na figura 10.7b, mostram
loops de g´as, que seguem as linhas do campo magn´etico. As part´ıculas car-
regadas do plasma seguem as linhas do campo magn´etico e giram em torno
delas. O rearranjo s´ubito das linhas aquece as part´ıculas a temperaturas muito
6
altas, da ordem de 10 K, ejetando-as da superf´ıcie do Sol.
10.5 FORC¸ A DE LORENTZ
Uma part´ıcula de carga el´etrica q movendo-se sob a a¸c˜ao de um campo
el´etrico E e um campo magn´etico B sofre uma for¸ca dada por
~ ~ ~
F = q (E + ~v × B) (10.44)
que ´e a for¸ca de Lorentz. A for¸ca devida ao campo magn´etico ´e perpendicular
`a dire¸c˜ao da velocidade da part´ıcula e ao campo magn´etico, devido ao produto
vetorial. Se o campo el´etrico for muito pequeno, esta equa¸c˜ao pode ser escrita
simplesmente

---

## Página 314

302 Transporte de Energia em Astrof´ısica
~ ~
F = q ~v × B (10.45)
de modo que a part´ıcula tem um movimento em espiral ao longo das linhas de
for¸ca do campo magn´etico. Uma vez que s˜ao aceleradas pelo campo magn´etico
estas part´ıculas emitem radia¸c˜ao, como no caso da radia¸c˜ao s´ıncrotron. Por-
tanto trata-se de uma transferˆencia de energia magn´etica para energia cin´etica
e radiativa, uma vez que a regi˜ao onde est˜ao as part´ıculas perde energia pela
radia¸c˜ao. Nesta equa¸c˜ao usamos F em N, q em C, v em m/s e B em T.
Alternativamente podemos escrever
1
~ ~
F = q ~v × B (10.46)
c
onde F est´a em dina, q em unidades da carga do el´etron em esu, e ≃ 4.80 ×
−10 3/2 1/2 −1
10 cm g s , v em cm/s e B em G.
EXEMPLO 10.14 - Movimento de part´ıculas carregadas na magnetosfera
de pulsares
Vamos considerar o movimento de uma part´ıcula carregada de massa m e
carga e na magnetosfera de um pulsar movendo-se perpendicularmente ao
campo magn´etico B do pulsar. Admitindo que a part´ıcula est´a localizada no
equador da estrela de nˆeutrons, de (10.45) a for¸ca de Lorentz que age sobre a
part´ıcula ´e simplesmente
Fm ≃ e v B (10.47)
onde v ´e a velocidade da part´ıcula. A for¸ca gravitacional exercida sobre a
part´ıcula ´e
Fg ≃ m g (10.48)
onde g ´e a acelera¸c˜ao gravitacional na posi¸c˜ao da part´ıcula. A raz˜ao entre as
for¸cas ´e
Fm e v B
≃ (10.49)
Fg m g
a velocidade da part´ıcula ´e dada por
2 π R
v ≃ (10.50)
P
onde R ´e o raio da estrela de nˆeutrons e P o per´ıodo do pulsar. Portanto
temos

---

## Página 315

Processos dinˆamicos em plasmas 303
Fm e B (2 π R/P) 2 π e R B
≃ ≃ (10.51)
Fg m g P m g
Por exemplo, vamos considerar um pr´oton no pulsar do Caranguejo, com
−27 −19
m ≃ 1.67 × 10 kg e e ≃ 1.60 × 10 C, adotando uma intensidade para o
8
campo magn´etico B ≃ 10 T, com um per´ıodo P ≃ 0.0333 s. Para a estrela
30 4
de nˆeutrons tomamos M = 1.4 M⊙ ≃ 2.79 × 10 kg e R ≃ 10 km ≃ 10 m,
2 12 2 9
de modo que g ≃ G M/R ≃ 1.86 × 10 m/s , obtendo Fm/Fg ≃ 9.7 × 10 .
6
A velocidade do pr´oton ´e v ≃ 1.89 × 10 m/s e sua energia cin´etica ´e Ec ≃
2 −15
(1/2) m v ≃ 2.98 × 10 J.
−24
Alternativamente, podemos usar a equa¸c˜ao (10.46) com m ≃ 1.67 × 10 g,
−10 3/2 1/2 −1 12
e ≃ 4.80 × 10 cm g s , B ≃ 10 G e P ≃ 0.0333 s. Para a estrela
33 6
de nˆeutrons M = 1.4 M⊙ ≃ 2.79 × 10 g e R ≃ 10 km ≃ 10 cm, de modo
14 2 9
que g ≃ 1.86 × 10 cm/s e obtemos novamente Fm/Fg ≃ 9.7 × 10 . A
8
velocidade do pr´oton ´e agora v ≃ 1.89 × 10 cm/s e sua energia cin´etica ´e
−8
Ec ≃ 2.98 × 10 erg.
EXEMPLO 10.15 - Perda de energia no pulsar do Caranguejo
A fonte da energia do pulsar est´a na estrela de nˆeutrons no interior da Nebu-
losa do Caranguejo. A estrela tem uma rota¸c˜ao r´apida e transfere sua energia
rotacional para o pulsar, o que tende a diminuir a velocidade de rota¸c˜ao. A
taxa de perda de energia pode ser estimada considerando o o per´ıodo P e o
momento de in´ercia I da estrela. A energia cin´etica de rota¸c˜ao ´e
1
2
Ec ≃ I ω (10.52)
2
onde ω = 2 π/P ´e a velocidade angular de rotac˜ao, ou seja
2
2 π I
Ec ≃ (10.53)
2
P
a taxa de perda de energia pela estrela ´e ent˜ao
2
dEc 4 π I dP
≃ − (10.54)
3
dt P dt
com os dados do Exemplo anterior, R = 10 km, M = 1.4 M⊙ o momento de
in´ercia ´e
2
2 38 2 45
I ≃ M R ≃ 1.1 × 10 kgf/m ≃ 1.1 × 10 dina/cm (10.55)
5

---

## Página 316

304 Transporte de Energia em Astrof´ısica
O per´ıodo do pulsar ´e P ≃ 0.0333 s, variando com uma taxa de aproximada-
−13
mente dP/dt ≃ 4.21×10 , de modo que a taxa de perda de energia cin´etica
31 38 5
´e dEc/dt ≃ 5.0×10 W ≃ 5.0×10 erg/s, ou cerca de 10 L⊙. Portanto, em
30 37
cada pulso a estrela perde 1.7 × 10 J ≃ 1.7 × 10 erg, equivalente `a energia
perdida pelo Sol em 1.2 hora.
10.6 CHOQUES HIDROMAGN´ETICOS
Em um fluido compress´ıvel, a taxa com que uma perturba¸c˜ao se propaga
´e determinada pela velocidade do som no fluido. Se o escoamento for suficien-
temente r´apido, de modo que sua velocidade seja maior do que a velocidade
do som, o fluido n˜ao consegue se ajustar pela propaga¸c˜ao de ondas sonoras, e
suas propriedades podem variar acentuadamente em distˆancias pequenas. Em
outras palavras, se o gradiente de press˜ao imposto pela onda for muito grande,
isto ´e, se as condi¸c˜oes f´ısicas do g´as variam em uma escala de distˆancia da
ordem do caminho livre m´edio das mol´eculas do g´as, processos microsc´opicos
atuar˜ao, dando origem a for¸cas viscosas, que agem no sentido de diminuir
o gradiente de press˜ao. Uma vez que o caminho livre m´edio das part´ıculas
´e pequeno em rela¸c˜ao `as dimens˜oes t´ıpicas do sistema, podemos imaginar
que a varia¸c˜ao da press˜ao nesta regi˜ao seja descont´ınua, isto ´e, pode haver
regi˜oes em que as propriedades f´ısicas do fluido variam de forma essencial-
mente descont´ınua, constituindo uma onda de choque (cf. Maciel 2004, Dyson
e Williams 1997).
Diversos exemplos astrof´ısicos podem ser mencionados em que h´a ind´ıcios
de ocorrˆencia de ondas de choque. Estrelas pulsantes, como as vari´aveis ce-
feidas e as estrelas do tipo RR Lyrae produzem, nas camadas mais internas
de suas fotosferas, ondas que se propagam a velocidades supersˆonicas nas
regi˜oes externas mais difusas, produzindo choques. A explos˜ao de supernovas
´e um evento extremamente energ´etico, envolvendo uma energia da ordem de
50
10 erg, que ´e comunicada ao g´as circundante pela expans˜ao das camadas
externas da estrela a velocidades supersˆonicas, gerando choques intensos no
meio interestelar.
Vamos considerar a propaga¸c˜ao de uma onda de choque em um meio
~
n˜ao viscoso sujeito a um campo magn´etico B. A equa¸c˜ao de Euler na forma
(10.36) sem o termo de for¸cas externas pode ser escrita
∂~v 1 1 1
~ ~ ~ 2 ~ ~ ~
+ (~v · ∇)~v = − ∇P − ∇B + (B · ∇) B (10.56)
∂t ρ 8 π ρ 4 π ρ
Em um campo magn´etico uniforme, perturba¸c˜oes normais ao campo (ondas
~
hidromagn´eticas, ou ondas de Alfv´en) propagam-se ao longo de B com a

---

## Página 317

Processos dinˆamicos em plasmas 305
velocidade de Alfv´en,
( )
2 1/2
B
vA = (10.57)
4 π ρ
3
com vA em cm/s, B em G e ρ em g/cm (cf. Exemplo 10.12). Em condi¸c˜oes
de laborat´orio, a velocidade vA ´e geralmente pequena com rela¸c˜ao `a ve-
locidade do som. Em algumas situa¸c˜oes astrof´ısicas, isto n˜ao ocorre, em
particular em regi˜oes onde a densidade do g´as ´e baixa. Por exemplo, em
−13 3
uma regi˜ao cromosf´erica de uma estrela gigante fria, onde ρ ∼ 10 g/cm ,
obtemos vA ≃ 90 km/s com um campo magn´etico B ∼ 10 G, enquanto que
4
cs ≃ 100 km/s para uma temperatura cromosf´erica T ∼ 10 K. Ondas hidro-
magn´eticas s˜ao observadas no vento solar, e provavelmente participam do
processo de transferˆencia de quantidade de movimento ao g´as em expans˜ao.
Considerando um problema unidimensional, vamos admitir que as linhas
de for¸ca do campo s˜ao paralelas `a frente de choque, tomadas perpendiculares
~ ~ ~
ao eixo x. Neste caso, o termo (B · ∇) B em (10.56) se anula, e a equa¸c˜ao do
movimento pode ser escrita
∂~v 1 1
~ ~ ~ 2
+ (~v · ∇)~v = − ∇P − ∇B (10.58)
∂t ρ 8 π ρ
integrando (10.58) na zona de choque, ´e f´acil ver que
2 2
B B
2 0 2 1
P0 + ρ0 u + = P1 + ρ1 u + (10.59)
0 1
8 π 8 π
O fluxo magn´etico permanece constante atrav´es de qualquer circuito movendo-
se em um fluido condutor, de modo que, no caso unidimensional, temos
B0 B1
= (10.60)
ρ0 ρ1
EXEMPLO 10.16 - Choque interestelar adiab´atico
No caso de um choque intenso sem emiss˜ao de radia¸c˜ao (choque “adiab´atico”),
o fator de compress˜ao deve ser ρ1/ρ0 ≃ 4. Neste caso, a press˜ao magn´etica
2 2
varia de Pm0 = B /8π para Pm1 = B /8π, ou seja,
0 1
( )
2 2 2
B B ρ1
1 0
Pm1 = = = 16 Pm0 (10.61)
8 π 8 π ρ0
−6
Por exemplo, em condi¸c˜oes interestelares t´ıpicas, temos B0 ≃ 3 × 10 G,
−23 3 −3
u0 ≃ 10 km/s e ρ0 ≃ n mH ≃ 2 × 10 g/cm , com cerca de n ≃ 10 cm .
−13 2 −12 2
Neste caso, Pm0 ≃ 3.6 × 10 dina/cm e Pm1 ≃ 5.7 × 10 dina/cm . A

---

## Página 318

306 Transporte de Energia em Astrof´ısica
2 −11 2
press˜ao do g´as ´e da ordem de P1 ≃ (3/4) ρ0 u ≃ 2 × 10 dina/cm , ou
0
seja, P1 ≫ Pm1. Portanto, se o campo magn´etico na regi˜ao n˜ao perturbada
for menor ou da ordem de 3 μG, a press˜ao magn´etica na regi˜ao p´os-choque
ser´a desprez´ıvel em rela¸c˜ao `a press˜ao do g´as em condi¸c˜oes t´ıpicas das nuvens
interestelares.
EXEMPLO 10.17 - Choque interestelar isot´ermico
Vamos considerar agora o efeito de um campo magn´etico em um choque
isot´ermico intenso. Da equa¸c˜ao (10.59), considerando as condi¸c˜oes de con-
torno na superf´ıcie do choque, obtemos
( )
2 2
1 ρ1 u 1 ρ1
2 2 2 2 0 2
c + u + v = c + + v (10.62)
s 0 A0 s A0
2 ρ0 (ρ1/ρ0) 2 ρ0
onde adotamos os ´ındices “0” e “1” para as condi¸c˜oes antes e depois do choque.
Em princ´ıpio, esta equa¸c˜ao deve ser resolvida para obter a raz˜ao de compress˜ao
ρ1/ρ0. Admitindo o caso limite em que ρ1/ρ0 ≫ 1 e vA0 ≫ cs, obtemos
( )
2 2
ρ1 v
2 A0
u ≃ (10.63)
0
ρ0 2
ou seja, a raz˜ao de compress˜ao fica
ρ √ u
1 0
≃ 2 (10.64)
ρ0 vA0
Considerando novamente os valores interestelares do Exemplo anterior, ρ0 ≃
−23 3
2 × 10 g/cm e B0 ≃ 3 μG, obtemos vA0 ≃ 1.9 km/s. A velocidade do som
1/2
est´a pr´oxima deste valor, cs ≃ (kT /mH) ≃ 0.9 km/s, onde T ∼ 100 K,
isto ´e, para valores do campo magn´etico da ordem ou menores que 3 μG, a
condi¸c˜ao vA ≫ cs n˜ao ´e completamente satisfeita, e a raz˜ao de compress˜ao
deve ser menor. Embora os valores num´ericos obtidos sejam apenas apro-
ximados, podemos observar que a introdu¸c˜ao do campo magn´etico tende a
decrescer a raz˜ao de compress˜ao no caso de um choque isot´ermico. Neste
caso, parte da energia do choque ´e usada para aumentar a press˜ao magn´etica,
pois o aumento da densidade na regi˜ao p´os-choque concentra as linhas de for¸ca
do campo magn´etico.
10.7 INSTABILIDADE DE PARKER
Na se¸c˜ao 9.2 vimos que o meio interestelar gal´actico tem uma natureza
fragmentada, dividindo-se em nuvens difusas, densas, moleculares, regi˜oes
HII, etc. Isto pode ser visto em levantamentos feitos a partir de medidas

---

## Página 319

Processos dinˆamicos em plasmas 307
da linha de emiss˜ao em 21 cm do H, como mostrado na figura 10.8 para a
nossa Gal´axia. Sequˆencias de perfis de emiss˜ao de H podem ser obtidas para
uma dada longitude gal´actica, variando a latitude, ou vice-versa, de modo
que as estruturas das nuvens de H do disco gal´actico podem ser mapeadas,
como visto na figura 10.8. Nesta figura, as emiss˜oes vˆem de regi˜oes pr´oximas
ao plano gal´actico, e o fluxo est´a dado em termos da temperatura de antena,
proporcional `a temperatura de brilho, ou intensidade da radia¸c˜ao.
Figura 10.8 - Distribui¸c˜ao das nuvens interestelares no plano gal´actico em diversas
longitudes gal´acticas a partir de dados da linha de 21 cm do H.
A origem das condensa¸c˜oes ´e atribu´ıda a um processo de instabilidade
que impede uma distribui¸c˜ao homogˆenea do g´as interestelar. Este tipo de ins-
tabilidade ´e chamado instabilidade de Parker, pelo trabalho desenvolvido por
E. N. Parker, principalmente na d´ecada de 1960 (ver por exemplo Parker 1966,
1979). A instabilidade de Parker est´a ligada a fenˆomenos magn´eticos, assim
como a a difus˜ao ambipolar, como veremos (cf. Choudhuri 2010 cap´ıtulo 8).
Nossa gal´axia (e outras gal´axias com discos) mant´em um campo magn´e-
tico associado com o plano gal´actico e os bra¸cos espirais, com intensidade da
−6 −10
ordem de B ∼ 1 − 10 μG ∼ 1 − 10 × 10 G ∼ 1 − 10 × 10 T. A origem
deste campo ´e vivamente debatida, assim como sua influˆencia na forma¸c˜ao e
equil´ıbrio das nuvens interestelares. O campo pode ser medido a partir do es-
tudo da polariza¸c˜ao dos gr˜aos interestelares, entre outros processos. Acredita-
se que, para produzir uma polariza¸c˜ao, os gr˜aos devem estar alinhados por um
campo magn´etico, de modo que o estudo da polariza¸c˜ao nos d´a informa¸c˜oes
sobre a distribui¸c˜ao gal´actica do campo. Por esta raz˜ao sabemos que o campo
est´a associado ao disco, como visto na figura 10.9.

---

## Página 320

308 Transporte de Energia em Astrof´ısica
Figura 10.9 - Polariza¸c˜ao interestelar e o campo magn´etico gal´actico
Mais recentemente, estudos detalhados em gal´axias externas tˆem sido
capazes de mapear os campos magn´eticos nestes objetos, como no caso da
gal´axia M51 a partir de imagens no infravermelho. Provavelmente, estes re-
sultados podem tamb´em ser aplicados `a nossa pr´opria Gal´axia.
Mapas da intensidade total n˜ao t´ermica mostram a intensidade total do
campo magn´etico no plano do c´eu, com um valor m´edio de 15 μG. Pode-
se notar a associa¸c˜ao do campo magn´etico com a emiss˜ao infravermelha da
poeira interestelar.
O campo magn´etico gal´actico pode ser considerado como “congelado”
no g´as do meio interestelar. Vamos considerar camadas do meio intereste-
lar inicialmente homogˆeneas sob a a¸c˜ao da gravidade na presen¸ca de um
campo magn´etico (figura 10.10a). Uma perturba¸c˜ao pode “entortar” as li-
nhas do campo magn´etico, como ilustrado na figura 10.10b. O campo gra-
vitacional atua na dire¸c˜ao vertical da figura, causado pelas estrelas e g´as no
disco gal´actico. O congelamento do campo magn´etico no g´as requer que o
deslocamento das linhas mantenha esta tor¸c˜ao. Contudo, o plasma pode fluir
livremente ao longo das linhas do campo, como indicado pelas setas na figura
10.10b. O resultado ´e que s˜ao formadas “condensa¸c˜oes” nas extremidades
(faixa azul), enquanto que a regi˜ao central, com menos g´as e mais leve, pode
“flutuar” mais livremente. Assim, esta regi˜ao tende a se afastar ainda mais da
posi¸c˜ao original, intensificando as condensa¸c˜oes laterais que, eventualmente,

---

## Página 321

Processos dinˆamicos em plasmas 309
se tornam nuvens interestelares (figura 10.10c). Portanto, a perturba¸c˜ao origi-
nal se acentua, o que constitui uma instabilidade. O processo termina quando
a tens˜ao magn´etica atinge um valor suficientemente alto, como pode ser con-
firmado em c´alculos mais detalhados.
Figura 10.10 - Instabilidade de Parker.
EXEMPLO 10.18 - Difus˜ao ambipolar
Nas nuvens densas a gravidade da pr´opria nuvem leva ao seu colapso e eventual
forma¸c˜ao de uma proto-estrela. Se a nuvem estiver imersa em um campo
magn´etico, o campo pode contrabalan¸car a a¸c˜ao da gravidade, aumentando
a massa de Jeans necess´aria para o colapso. O resultado ´e uma estrutura
quase est´atica, em que o colapso ´e dificultado nas dire¸c˜oes perpendiculares
`as linhas do campo. O colapso ocorre inicialmente ao longo das linhas do
campo, estendendo-se para dire¸c˜oes perpendiculares a elas somente quando a
densidade da nuvem for muito alta.
Figura 10.11 - Difus˜ao ambipolar.
Na estrutura formada, a for¸ca magn´etica na regi˜ao em que o colapso ´e im-
pedido ´e paralela e com sentido contr´ario `a for¸ca da gravidade (figura 10.11).
O campo magn´etico afeta as part´ıculas carregadas, que tendem a se afas-
tar da regi˜ao central da nuvem (c´ırculo fechado na figura), enquanto que os
´atomos neutros, atra´ıdos apenas pela gravidade, seguem uma trajet´oria oposta
(c´ırculo aberto na figura), constituindo a difus˜ao ambipolar. Esta difus˜ao pro-
duz uma fric¸c˜ao entre as part´ıculas carregadas e as neutras, reduzindo sua
velocidade. O resultado ´e um retardamento do colapso gravitacional, al´em de

---

## Página 322

310 Transporte de Energia em Astrof´ısica
um aquecimento friccional da nuvem. A escala de tempo de difus˜ao ambipolar
6
depende da ioniza¸c˜ao fracional do g´as, sendo da ordem de td ∼ 4 × 10 anos
−7
para um grau de ioniza¸c˜ao x ∼ 10 . Ap´os este per´ıodo, o colapso prossegue
at´e a forma¸c˜ao da proto-estrela. Uma express˜ao aproximada pode ser escrita
( ) ( ) ( )
3/2 −2 2
n B R
6
tda ≃ 3 × 10 (10.65)
4 −3
10 cm 30 μG 0.1pc
4 −3
onde ta est´a em anos. Por exemplo, para n ≃ 10 cm , B ≃ 20 μG e R ≃
0.1 pc temos ta ≃ 7 Manos.
´
EXERCICIOS
10.1 Mostre que a hip´otese do cont´ınuo ´e verificada pelo ar em uma sala de
aula.
10.2 (a) Escreva a equa¸c˜ao de Euler (10.12) em coordenadas esf´ericas, ad-
mitindo simetria esf´erica. (b) Como fica a equa¸c˜ao obtida em (a) ad-
mitindo estado estacion´ario? (c) Mostre que a rela¸c˜ao obtida em (b)
se reduz `a equa¸c˜ao de equil´ıbrio hidrost´atico admitindo que esteja em
repouso.
3
10.3 Uma estrela Ap tem um campo magn´etico com intensidade de 10 G.
−9 3
Considere uma regi˜ao na atmosfera desta estrela onde ρ ≃ 10 g/cm e
T ≃ 10000 K, e compare a press˜ao magn´etica com a press˜ao do g´as nesta
regi˜ao.
10.4 O valor m´edio da intensidade do campo magn´etico no meio interestelar
difuso ´e de 5μG. Mostre que a densidade de energia magn´etica do g´as
3
difuso (em eV/cm ) ´e semelhante `a densidade de energia t´ermica deste
−3
g´as, considerando uma densidade num´erica n ≃ 50 cm e T ≃ 100 K.
10.5 Considere uma nuvem interestelar localizada no plano gal´actico, onde a
−6
intensidade do campo magn´etico ´e B ≃ 2×10 G. Este campo pode ser
medido pela varia¸c˜ao na polariza¸c˜ao de linhas espectrais afetadas pelo
efeito Zeeman, segundo o qual uma linha sofre um alargamento dado
aproximadamente por
e B
∆ν ≃
4 π me

---

## Página 323

Processos dinˆamicos em plasmas 311
onde ∆ν est´a em Hz, B est´a em T, me em kg e e em C. Qual seria o
alargamento produzido pelo campo magn´etico interestelar? Compare seu
resultado com a frequˆencia da radia¸c˜ao emitida pela nuvem em 21 cm.
ˆ ´
REFERENCIAS BIBLIOGRAFICAS
BATCHELOR, G. K. 2000, An Introduction to Fluid Dynamics, CUP
BATTANER, E. 1996, Astrophysical Fluid Dynamics, CUP
CARROLL, B. W., OSTLIE, D. A. 2014, An Introduction to Modern Astro-
physics, Pearson
CHIUDERI, C., VELLI, M. 2015, Basics of Plasma Astrophysics, Springer
CHOUDHURI, A. R. 1998, The Physics of Fluids and Plasmas: An Introduc-
tion for Astrophysicists, CUP
CHOUDHURI, A. R. 2010, Astrophysics for Physicists, CUP
DYSON, J. E., WILLIAMS, D. A. 1997, The Physics of the Interstellar
Medium, IOP
MACIEL, W. J. 2004, Hidrodinˆamica e Ventos Estelares: uma Introdu¸c˜ao,
Edusp (edi¸c˜ao em inglˆes: Hydrodynamics and Stellar Winds: an In-
troduction, Springer 2014)
PARKER, E. N. 1966, Astrophysical Journal, 145, 811
PARKER, E. N. 1979, Cosmical Magnetic Fields, OUP
SHU, F. H. 1992, The Physics of Astrophysics Volume II: Gas Dynamics,
University Science Books
SPITZER Jr., L. 1978, Physical Processes in the Interstellar Medium, Wiley
[student edition 1998]
TREFIL, J. S. 1975, Introduction to the Physics of Fluids and Solids, Perga-
mon

---

## Página 324

> Página sem texto extraível; consulte o PDF original.

---

## Página 325

## CONSTANTES E UNIDADES
Velocidade da luz no v´acuo
10 8
c = 2.9979 × 10 cm/s = 2.9979 × 10 m/s
Constante de Planck
−27 −34
h = 6.6261 × 10 erg s = 6.6261 × 10 J s
Constante de Boltzmann
−16 −23
k = 1.3807 × 10 erg/K = 1.3807 × 10 J/K
Carga do el´etron
−10 3/2 1/2 −1 −19
e = 4.8032 × 10 cm g s = 1.6022 × 10 C
Massa do el´etron
−28 −31
me = 9.1094 × 10 g = 9.1094 × 10 kg
Massa do pr´oton
−24 −27
mp = 1.6726 × 10 g = 1.6726 × 10 kg
Massa do ´atomo de H
−24 −27
mH = 1.6734 × 10 g = 1.6734 × 10 kg
Constante de Stefan-Boltzmann
−5 −2 −1 −4 −8 −2 −4
σ = 5.6704 × 10 erg cm s K = 5.6704 × 10 W m K
Constante de radia¸c˜ao
−15 −3 −4 −16 −3 −4
a = 7.5658 × 10 erg cm K = 7.5658 × 10 J m K
15
Constante de Rydberg R∞ = 3.2898 × 10 Hz
Constante gravitacional
−8 3 −1 −2 −11 3 −1 −2
G = 6.6726 × 10 cm g s = 6.6726 × 10 m kg s
33 30
Massa solar M⊙ = 1.9891 × 10 g = 1.9891 × 10 kg
10 8
Raio solar R⊙ = 6.9551 × 10 cm = 6.9551 × 10 m
Luminosidade solar
33 26
L⊙ = 3.8458 × 10 erg/s = 3.8458 × 10 W
7
Ano sideral = 3.1558 × 10 s
−12 −19
1 eV = 1.6022 × 10 erg = 1.6022 × 10 J
18 16
1 pc = 3.0857 × 10 cm = 3.0857 × 10 m
5
= 3.2616 anos-luz = 2.0626 × 10 UA
13 11
1 UA = 1.4960 × 10 cm = 1.4960 × 10 m
6 2 5 2
1 atm = 1.0133 × 10 dina/cm = 1.0133 × 10 N/m = 760 Torr

---

## Página 326

> Página sem texto extraível; consulte o PDF original.

---

## Página 327

# ´
# CREDITOS DAS FIGURAS
Figura 1.1
(a) Fotosfera solar (NASA)
https://solarscience.msfc.nasa.gov/images/w920607.jpg
(b) Estrelas do Trap´ezio em Orion (ESO)
https://cdn.eso.org/images/large/eso0124a.jpg
Figura 1.4
Andromeda M31 (ESA/Hubble/R. Gendler)
https://esahubble.org/images/heic0512d/
(b) Betelgeuse (A. Dupree/CfA/R. Gilliland/STScI/NASA)
https://apod.nasa.gov/apod/image/9804/betelgeuse hst big.jpg
Figura 1.5
Espectro solar no topo da atmosfera (ESA)
https://www.esa.int/ESA Multimedia/Images/2017/12/Solar spectrum
Figura 1.6
A usina hidrel´etrica de Itaipu (Deni Williams)
https://commons.wikimedia.org/wiki/Main Page
imagem 17173553330.jpg
Figura 1.10
(a) Nebulosa de Orion (ESO/G. Beccari)
https://www.eso.org/public/brazil/images/eso1723a/
Figura 2.4
Temperaturas do corpo humano (NASA/IPAC)
https://commons.wikimedia.org/wiki/File:Human-Infrared.jpg
Figura 2.5
(a) Meteorito Murchison (NASA)
https://astrobiology.nasa.gov/news/extraterrestrial-nucleobases-in-the-
murchison-meteorite/
(b) Gr˜aos de SiC no meteorito Murchison (University of Chicago)
https://en.wikipedia.org/wiki/Murchison meteorite
Figura 2.6
(a) Distribui¸c˜ao de energia no infravermelho na Gal´axia (COBE)
Adaptado de C. Bot et al., Astron. Astrophys. 423, 567 (2004), Fig. 9

---

## Página 328

(b) Idem, NGC 6240
Adaptado de B. Groves et al., Astrophys. J. Suppl. Ser. 176, 438 (2008), Fig. 17
Figura 2.8
Coroa solar durante eclipse (a) no m´ınimo (b) no m´aximo (NCAR’s High Altitude Obser-
vatory/ Rhodes College)
https://scied.ucar.edu/image/suns-corona-solar-min-solar-max
Figura 2.12
Emiss˜ao gal´actica em 21 cm (Levantamento Leiden/Argentina/Bonn)
Adaptado de P. M. W. Kalberla, Astron. Astrophys. 440, 775 (2005), Fig. 3
Figura 2.14
Masers de OH em estrelas OH/IR (M. West/Hart RAO)
http://www.hartrao.ac.za/spectra/SP Ohir.html
Figura 2.15
Espectro ISO da estrela TT Cyg (U. G. Jorgensen)
Adaptado de U. G. Jorgensen et al., Astron. Astrophys. 356, 253 (2000), Fig. 10
Figura 2.16
(a) A nebulosa planet´aria NGC 2346 (NASA/ESA/AURA/STScI)
https://esahubble.org/images/opo9935d/
(b) Espectro ´optico (R. Costa)
Figura 2.17
Espectro solar (R. A. Rohde)
https://commons.wikimedia.org/wiki/File:Solar Spectrum.png
Figura 3.3
Modos de vibra¸c˜ao no Sol (National Solar Observatory)
https://nso.edu/research/helioseismology/
Figura 3.7
(a) Fotosfera solar (NASA)
https://earthobservatory.nasa.gov/images/37575/sunspots-at-solar-maximum-
and-minimum
Figura 3.9
Fluxo de radia¸c˜ao em uma atmosfera cinza
Adaptado de D. Mihalas, Stellar Atmospheres, Freeman 1978

---

## Página 329

Figura 3.13
Descontinuidade de Balmer no espectro solar
Adaptado de L. H. Aller, Atoms, Stars, and Nebulae, CUP, 1991
Figura 3.14
Opacidades m´edias
Adaptado de E. Novotny, Introduction to Stellar Atmospheres and Interiors, OUP 1973
Figura 4.1
Espectro solar de Fraunhofer (Hebrew University of Jerusalem Website)
https://www.researchgate.net/figure/The-dark-lines-in-this-spectrum-are-
absorption-lines-seen-and-drawn-by-Fraunhofer-HUJWeb fig1 314285153
Figura 4.3
A linha de absor¸c˜ao interestelar do Si III na dire¸c˜ao de ζ Oph
Adaptado de D. C. Morton, Astrophys. J. Suppl, 77, 119, 1991
Figura 4.4
Espectros de gal´axias Seyfert 2 e LINER
Adaptado de L. C. Ho et al., Astrophys. J. 417, 63, 1993
Figura 4.5
Espectro da nebulosa planet´aria Pe1-15 (O. Cavichia)
Figura 4.8
A linha Hα do H em absor¸c˜ao na fotosfera solar (J. F. Donati)
http://www.ast.obs-mip.fr/projets/espadons/espadons new/spectra.html
Figura 4.9
A linha H76α na dire¸c˜ao de G34.26+0.15A
Adaptado de M. Sewilo et al., Astrophys. J. 605, 285, 2004
Figura 4.14
Curva de crescimento emp´ırica
Adaptado de L. Spitzer, Physical processes in the interstellar medium, Wiley, 1978
Figura 4.15
Forma¸c˜ao de uma linha espectral em uma atmosfera estelar
Adaptado de A. Choudhuri, Astrophysics for physicists, CUP, 2010
Figura 5.1
(a) A nebulosa Rosette, NGC 2237 (N. A. Sharp/NOIRLab/NSF/AURA)
https://noirlab.edu/public/images/noao-rosette/

---

## Página 330

(b) A nebulosa RCW 79 (E. Churchwell/JPL/NASA)
https://pt.wikipedia.org/wiki/Ficheiro:RCW 79 (Emission nebula).jpg
Figura 5.2
Perfil da linha do He I em 10830 ˚A na estrela P Cyg (A. Damineli, IAG)
Figura 5.4
A estrela LBV P Cygni e seu envelope externo (HST/NASA)
https://www.windows2universe.org/the universe/Pcygni.html
Figura 5.6
A coroa solar, eclipse de novembro de 1994, SC (Rodrigo Campos, LNA)
Figura 5.7
A nebulosa planet´aria He2-99 (H. E. Schwarz)
Adaptado de H. E. Schwarz et al. Astron. Astrophys. Suppl. 96, 23, 1992
Figura 6.1
Detector do observat´orio de neutrinos SNO, Canad´a (SNO)
https://en.wikipedia.org/w/index.php?curid=56786015
Figura 6.2
Taxas de produ¸c˜ao de energia para a cadeia pp e o ciclo CNO
Adaptado de S. Ryan, A. W. Norton, Stellar Evolution and Nucleosynthesis, CUP, 2010
Figura 6.6
Opacidades m´edias
Adaptado de S. G. Ryan, A. W. Norton, Stellar Evolution and Nucleosynthesis, CUP, 2010
Figura 6.7
Esquema do transporte de energia no Sol (Wikipedia Commons/kelvinsong)
https://phys.org/news/2015-12-sun-energy.html
Figura 6.9
Granula¸c˜ao solar (Royal Swedish Academy of Sciences)
Adaptado de G. Ahlers, Physics 2, 74, 2009
Figura 8.1
(a) NGC 4321, M100 (ESO)
https://www.messier-objects.com/wp-content/uploads/2015/08/Messier-100.jpg
(b) NGC 1365 (DES/DOE/FNAL/DECam/CTIO/NOIRLab/NSF/AURA)
https://en.wikipedia.org/wiki/NGC 1365#/media/File:Portrait of the Great Barred
Spiral.jpg

---

## Página 331

(c) NGC 4486, M87 (AAO)
http://www.icc.dur.ac.uk/˜tt/Lectures/Galaxies/Images/AAO/Galaxies/captions/
aat060.html
(d) Grande Nuvem de Magalh˜aes (ESO/VMCSurvey)
https://www.eso.org/public/images/eso1914a/
Figura 8.2
(a) Aglomerado Globular NGC 5139 (ESO)
https://pt.wikipedia.org/wiki/Omega Centauri#/media/Ficheiro:Omega
Centauri by ESO.jpg
(b) Aglomerado Aberto NGC 4755 (ESO)
https://en.wikipedia.org/wiki/Jewel Box (star cluster)#/media/File:A
Snapshot of the Jewel Box cluster with the ESO VLT.jpg
Figura 8.4
Aglomerado globular M13 (S. Leach/A. Block/Mt. Lemmon SkyCenter)
https://upload.wikimedia.org/wikipedia/commons/6/69/Messier 13.jpg
Figura 8.5
O Aglomerado de Hydra (D. Malin, AAO)
https://apod.nasa.gov/apod/image/0104/hydra aat116 big.jpg
Figura 8.6
Aglomerado aberto M11, NGC 6705 (CFHT)
https://apod.nasa.gov/apod/image/0301/m11 cfht big.jpg
Figura 9.1
A Via L´actea (ESO)
https://cdn.eso.org/images/publicationjpg/eso0932a.jpg
Figura 9.2
Nebulosa Planet´aria Helix, NGC 7293 (ESO)
https://cdn.eso.org/images/publicationjpg/eso0907a.jpg
Figura 9.3
Nuvem molecular Orion A (ESO/VISION SURVEY)
https://cdn.eso.org/images/screen/eso1701-compa.jpg
Figura 10.1
Linhas de absor¸c˜ao no espectro solar
Adaptado de S. Chang et al., Journal of Nanomaterials, vol. 2008, Article ID 589532, 2008

---

## Página 332

Figura 10.2
Imagens da coroa solar em linhas do Fe (SOHO/SDO/NAA)
https://sohowww.nascom.nasa.gov/
https://sdo.gsfc.nasa.gov/
Figura 10.3
Espectro da supernova 1987 A
Adaptado de R. McCray, Ann. Rev. Astron. Astrophys. 31, 175, 1993
Figura 10.4
Espectro Cas A (CHANDRA)
https://chandra.harvard.edu/edu/formal/snr/bg5.html
Figura 10.5
Espectro de gal´axias early type (SPITZER)
https://web.oapd.inaf.it/rampazzo/ Media/fig7spitzer.jpeg
Figura 10.7
(a) Flare solar (NASA/GSFC/SDO)
https://svs.gsfc.nasa.gov/13982
(b) Loop coronal (M. Aschwanden/TRACE/NASA)
https://apod.nasa.gov/apod/image/0508/coronaloop trace big.jpg
Figura 10.8
Distribui¸c˜ao das nuvens interestelares em 21 cm (F. J. Kerr, G. Westerhout)
Figura 10.9
O campo magn´etico gal´actico
Adaptado de E. G. Zweibel, C. Heiles, Nature 385, 131, 1997

---

## Página 333

## SOBRE O AUTOR
Walter Junqueira Maciel nasceu em Cruz´ılia, MG. Graduou-se em F´ısica pela
UFMG, em Belo Horizonte, obteve o mestrado no ITA, em S˜ao Jos´e dos Cam-
pos, e o doutoramento na USP, em S˜ao Paulo. Fez est´agios em Groningen,
´
Holanda, e Heidelberg, Alemanha. E professor titular no Departamento de
Astronomia do Instituto de Astronomia, Geof´ısica e Ciˆencias Atmosf´ericas da
USP, onde trabalha desde 1974, tendo sido chefe do departamento no per´ıodo
1992–1994. Publicou cem artigos de pesquisa em revistas internacionais,
noventa artigos em anais de congressos internacionais e cerca de setenta arti-
gos de pesquisa, trabalhos did´aticos e de divulga¸c˜ao em publica¸c˜oes nacionais.
´
E autor dos livros Introdu¸c˜ao `a Estrutura e Evolu¸c˜ao Estelar (Edusp, 1999),
prˆemio Jabuti em 2000 na categoria de Ciˆencias Exatas, Tecnologia e In-
form´atica; Astrof´ısica do Meio Interestelar (Edusp, 2002), finalista do prˆemio
Jabuti, 2003; Hidrodinˆamica e Ventos Estelares: Uma Introdu¸c˜ao (Edusp,
2005), finalista do prˆemio Jabuti, 2006; 500 Exerc´ıcios Resolvidos de As-
trof´ısica (IAG/USP, 2020) e Fundamentos de Evolu¸c˜ao Qu´ımica da Gal´axia
(IAG/USP, 2020). Os trˆes primeiros livros foram tamb´em publicados em
inglˆes pela editora Springer.

---

## Página 334

> Página sem texto extraível; consulte o PDF original.

---

## Página 335

> Página sem texto extraível; consulte o PDF original.
