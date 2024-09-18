interface PopupModalProps {
    children: React.ReactNode;
}

export const EOHComponent: React.FC<PopupModalProps> = ({ children }) => {
    return(
        <div className="w-72 h-[30rem] rounded-2xl bg-repeat bg-center bg-cover bg-[url('/EOHPic.png')] px-4 py-4 shadow-lg">
            <div className="text-center text-[#0D244F] font-bold">
             {children}
            </div>
        </div>
    )
}