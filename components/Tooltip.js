export default function Tooltip(props) {
    return (
        <div className={`relative bottom-10 ${!props.show && "hidden"}`}>
            <div className="absolute bottom-full left-1/2 transform -translate-x-[45%] p-4 bg-white rounded-lg shadow-md z-10 min-w-max">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold">{props.title}</h2>
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer" onClick={props.onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4">
                            <path fill="currentColor" d="M14.35,5.65a1,1,0,0,0-1.41,0L10,8.59l-2.94-2.94a1,1,0,1,0-1.41,1.41L8.59,10l-2.94,2.94a1,1,0,1,0,1.41,1.41L10,11.41l2.94,2.94a1,1,0,0,0,1.41-1.41L11.41,10Z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm">{props.content}</p>
            </div>
            <img src="/tick.svg" className="relative w-4 z-50 bottom-1"/>
        </div>
    );
}