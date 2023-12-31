import Produto from "@/model/Produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto

}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className={`
            flex flex-col rounded-md
            border border-zinc-600
            p-1
        `}>
            <Image src={props.produto.imagem}
                width={300} height={300}
                alt='Imagem do Produto'
                className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">R$ {produto.preco}</div>
                </div>
                <div>
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className='botao flex justify-center w-full gap-2'>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}