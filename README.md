# heroi-nivel

Script simples em JavaScript pra calcular o nível de um herói com base no XP. Fiz baseado naquele sistema de ranks estilo Valorant (Ferro, Bronze, Prata... até Radiante).

## Como funciona

O código tem duas variáveis (`nomeHeroi` e `xpHeroi`) e uma função `determinarNivel(xp)` que recebe o XP e devolve o nome do rank correspondente, usando uma sequência de `if/else if`.

## Faixas de XP

| XP              | Nível       |
|------------------|-------------|
| menor que 1000   | Ferro       |
| 1001 – 2000      | Bronze      |
| 2001 – 5000      | Prata       |
| 5001 – 8000      | Platina     |
| 8001 – 9000      | Ascendente  |
| 9001 – 10000     | Imortal     |
| acima de 10000   | Radiante    |

## Como rodar

Só precisa do Node instalado:

```bash
node heroi.js
```

Saída (com os valores padrão do arquivo):

```
O herói de nome Heather está no nível Ascendente
```

Pra testar com outro herói, é só trocar o valor de `nomeHeroi` e `xpHeroi` lá no início do arquivo.

## Observação

Os comentários no código avisam que "Ouro" ficou junto do intervalo da Prata e "Diamante" junto do intervalo da Platina — não são níveis separados aqui, foi assim que o sistema de faixas ficou definido.

## TODO

- [ ] separar Ouro e Diamante como níveis próprios, se fizer sentido
- [ ] validar se o XP passado é negativo
- [ ] transformar em função reutilizável recebendo o herói como objeto (nome + xp)
