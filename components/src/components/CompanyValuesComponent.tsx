export const CompanyValuesComponent = () => {
    return(
        <div className="px-4 py-4 max-w-xl">
            <div className="bg-[#0D244F] h-[9rem] text-center py-4 rounded-2xl">
                <h1 className="text-2xl text-white font-bold pt-2">Company values Questions</h1>
                <p className="text-white pt-4">Which of these is not one of the South African's Official language</p>
            </div>
            <ul className="bg-white text-center shadow-2xl rounded-2xl px-16 pt-6 py-10">
                <li className="border-4 border-indigo-600 rounded-2xl mt-4 py-1 hover:bg-yellow-400 cursor-pointer">Zulu</li>
                <li className="border-4 border-indigo-600 rounded-2xl mt-4 py-1 hover:bg-yellow-400 cursor-pointer">Swahili</li>
                <li className="border-4 border-indigo-600 rounded-2xl mt-4 py-1 hover:bg-yellow-400 cursor-pointer">Afrikaans</li>
                <li className="border-4 border-indigo-600 rounded-2xl mt-4 py-1 hover:bg-yellow-400 cursor-pointer">Setswana</li>
            </ul>
        </div>
    )
}