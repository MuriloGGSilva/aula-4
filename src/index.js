nome = "Jailson Mendes"
i = 0
c = 0
while(i < nome.length){
c = c + 1
i = i + 1
}
console.log(c);
//* 2

nome = "João"
nome = (nome,nome[0])
console.log(nome);

//* 3
nome = "Cleber"
i = 0
c = -1
while(i < nome.length){
i = i + 1
c = c + 1
}
console.log(nome[c]);

//* 4
nome = "pedro"
i = 0
while(i < nome.length){
i = i + 1
}
while (i >= 0){
i = i - 1
console.log(nome[i])
}

//* 5

nome = "roberto"
j = nome.length
i = 0
while(i < j){
if(i%2 == 0){
console.log(nome[1])
}
i = 1 +1
}