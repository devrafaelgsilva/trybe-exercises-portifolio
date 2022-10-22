#! /bin/sh

delay=2

# 1)

echo "criando arquivo 'skills.txt' e inserindo os seguintes valores:
Internet
Unix
Bash
HTML
Javascript
React
SQL"
echo "Internet" > skills.txt
echo "Unix" >> skills.txt
echo "Bash" >> skills.txt
echo "HTML" >> skills.txt
echo "Javascript" >> skills.txt
echo "React" >> skills.txt
echo "SQL" >> skills.txt

# 2)

echo "Mostrando o resultado dos primeiros 5 valores do arquivo 'skills.txt'."
head -n 5 skills.txt

# 3)

echo "Mostrando o resultado dos últimos 4 valores do arquivo 'skills.txt'."
tail -n 4 skills.txt

# 4)

echo "Apagando todos os arquivos que terminem em '.txt'."
rm *.txt
