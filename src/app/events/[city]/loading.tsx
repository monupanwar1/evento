import SkeltonCard from "@/components/skeleton-card";
export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center px-[20px] py-24 gap-20 mx-auto max-w-[1100px]">
        {Array.from({length:6}).map((items,i)=>(
            <SkeltonCard key={i}/>
        ))}
    </div>
  )
}