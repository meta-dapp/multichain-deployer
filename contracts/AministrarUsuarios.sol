// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdministrarUsuarios {

    struct Usuario {
        uint edad;
        string nombre;
        string genero;
    }

   mapping(address => Usuario) private listaUsuarios;

   function registrar(uint edad, string memory nombre, string memory genero) public {
        Usuario storage _usuario = listaUsuarios[msg.sender];
        _usuario.edad = edad;
        _usuario.nombre = nombre;
        _usuario.genero = genero;
   }

   function consultar() public view returns(Usuario memory){
    return listaUsuarios[msg.sender];
   }

   function borrar() public {
    delete listaUsuarios[msg.sender];
   }
}