import checkCNPJ from "./cnpj";
import checkCPF from "./cpf";

export default function check(document) {

    document = document.replace(/[^\d]+/g,'');

    if(document === ''){
        return false;
    }
    if (document.length === 14){
        checkCNPJ(document)
    }else{
        checkCPF(document)
    }
}
