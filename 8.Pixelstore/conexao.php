<?php

// Configurações do banco
$host    = "sql307.infinityfree.com";
$usuario = "if0_41900325";
$senha   = "suhTn9wHmf  ";
$banco   = "if0_41900325_loja";

// Conexão MySQLi
$conexao = mysqli_connect($host, $usuario, $senha, $banco);

if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}

echo "Conexão realizada com sucesso!";
?>