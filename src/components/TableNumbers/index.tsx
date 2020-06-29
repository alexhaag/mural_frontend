import React, { useState } from 'react';

interface FotosArrayData {
  fotos: string;
}

const Tabela: React.FC = () => {
  const [fotos, setFotos] = useState<FotosArrayData[]>([]);
  return (
    <div>
      {fotos.map(f => {
        return <div></div>;
      })}
    </div>
  );
};

export default Tabela;
