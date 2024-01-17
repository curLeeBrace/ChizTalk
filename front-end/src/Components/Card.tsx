type CardProps = {
    img_path:string, 
    topic:string
}

export default function Card({img_path, topic}:CardProps) {
  return (
    <>
        {/*Card Container*/}
         <div className="relative m-5 rounded-md flex justify-center flex-col shadow-lg hover:shadow-xl hover:shadow-blue-500/50 bg-slate-600">
            <img src = {`${img_path}`} className="h-full full object-cover blur-xs rounded-md"/>
            
            <div className="absolute w-full text-center">
             <span className="font-sans text-slate-300 font-bold text-xl drop-shadow-xl shadow-blue-500/50" >{topic}</span>
            </div>
            

        </div>
    </>
   
  )
}

