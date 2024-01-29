import { cisecoCons } from "../../data"

const WhyCiseco = () => {
  return (
    <div className='w-full border-t border-neutral-200 dark:border-neutral-700'>
        <div className='w-[90%] lg:w-[70%] my-32 relative mx-auto'>
            <div className="grid  sm:grid-cols-2 gap-y-4 lg:grid-cols-4 justify-between items-baseline">
                <img src={`${cisecoCons.dashedLine}`} alt="line" className="absolute inset-x-0 w-full top-5 hidden md:block"/>
            {cisecoCons.cons.map((item, index) => (
                <div className="w-full flex flex-col items-center font-roboto gap-y-5 z-10" key={index}>
                    <img src={item.image} alt={item.title}  className="w-[40%] lg:w-[50%]"/>
                    <p style={{backgroundColor: `${item.color}`, color: `${item.stepColor}`}} className="py-1 px-3 rounded-full font-semibold">step {index + 1}</p>
                    <h3 className="font-bold text-base">{item.title}</h3>
                    <p className="text-center w-[80%] text-slate-600 dark:text-slate-400 text-sm leading-6">{item.text}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default WhyCiseco