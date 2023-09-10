import React, { useState } from 'react';
import api from './api';

const BuscaLivros = () => {
  const [termo, setTermo] = useState('');
  const [livros, setLivros] = useState([]);

  const pesquisarLivros = async () => {
    try {
      const response = await api.get(`/volumes?q=${termo}`);
      setLivros(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <button onClick={pesquisarLivros}>Buscar</button>

      {livros.map(livro => (
        <div key={livro.id}>
          {livro.volumeInfo.title}
        </div>
      ))}
    </div>
  );
};

export default BuscaLivros;
