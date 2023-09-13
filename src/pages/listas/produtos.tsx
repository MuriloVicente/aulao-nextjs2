import ListaProdutos from "@/components/listas/ListaProdutos";
import ProdutoItem from "@/components/listas/ProdutoItem";
import produtos from "@/constants/produtos"
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import { useState } from "react";

export default function PaginaProdutos() {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto) {
       console.log(produto)
    }

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
            bg-black text-white
        `}>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
    )
}