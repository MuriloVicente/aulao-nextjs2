import ProdutoItem from "@/components/listas/ProdutoItem";
import produtos from "@/constants/produtos"

export default function PaginaProdutos() {
    const produto = produtos[0]
    
    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
            bg-black text-white
        `}>
            <ProdutoItem produto={produto} />
        </div>
    )
}