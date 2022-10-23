#! /bin/sh

delay=2

# 1)

echo "Criando o diretório 'unix_tests'."
mkdir unix_tests
cd unix_tests
sleep $delay

# 2)

echo "Criando o arquivo 'trybe.txt.'"
touch trybe.txt
sleep $delay

# 3)

echo "Copiando o arquivo 'trybe.txt' para o arquivo 'trybe_backup.txt.'"
cp trybe.txt trybe_backup.txt
sleep $delay

# 4)

echo "Renomeando o arquivo 'trybe.txt' para 'trybe_renamed.txt'."
mv trybe.txt trybe_renamed.txt
sleep $delay

# 5)

echo "Criando o diretório 'backup' dentro do diretório 'unix_tests'."
cd unix_tests
mkdir backup
sleep $delay

# 6)

echo "Movendo o arquivo 'trybe_backup.txt' para dentro do diretório 'backup'."
mv trybe_backup.txt backup
sleep $delay

# 7)

echo "Criando o diretório 'backup2' dentro do diretório 'unix_tests'."
mkdir backup2
sleep $delay

# 8)

echo "Movendo o arquivo 'trybe_backup,txt' de dentro do diretório 'backup' para o diretório 'backup2'."
mv backup/trybe_backup.txt backup2
sleep $delay

# 9)

echo "Apagando a pasta 'backup'."
rmdir backup
sleep $delay

# 10)

echo "Renomeando a pasta 'backup2' para 'backup'."
mv backup2 backup
sleep $delay

# 11)

echo "Mostrando o path completo do diretório atual."
pwd
echo "Listando todos os arquivos dentro do diretório atual."
ls -l
sleep $delay

# 12)

echo "Apagando o diretório 'backup'."
rm -rd backup
sleep $delay

# 13)

echo "Limpando terminal."
clear
sleep $delay
