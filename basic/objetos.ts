interface IObjType {
  salario: number;
}

interface IPessoa {
  nome: string;
  idade?: number;
  cpf: string;

  obj: IObjType;
}



function returnName(obj: IPessoa) {
  return obj.nome;
}

const objToSend = {
  nome: "Paulo",
  cpf: "50000000",
  obj: { salario: 2 },
};

console.log(returnName(objToSend));
