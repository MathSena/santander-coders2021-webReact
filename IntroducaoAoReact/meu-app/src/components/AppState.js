import React, {useState} from 'react';

export default function AppState(){

  const [nome, setNome] = useState('Matheus');

  return (
    <>
      <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <h1>{nome}</h1>
    </>
  );
}