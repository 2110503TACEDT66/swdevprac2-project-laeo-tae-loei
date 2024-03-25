import Image from "next/image"

export default function PromoteCatalog({name, image}: {name: string, image: string}) {
    return (
        <div className="w-1/3 px-10">
        <div className="w-full h-[70%] relative rounded-t-lg flex items-center justify-center">
        <div style={{ width: 400, height: 300 }}>
            <Image
                src={image}
                alt="Product Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
            </div>
        </div>
        <div className="text-center py-8 text-xl font-semibold">{name}</div>
      </div>
    )
}