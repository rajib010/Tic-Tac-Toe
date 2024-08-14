import circle_img from './assets/circle.png';
import cross_png from './assets/cross.png';

type BoardProps = {
    lock?: boolean,
    data: string[],
    handleClick: (index: number) => void,
    resetGame: () => void
}

function Board({ data, handleClick, resetGame }: BoardProps) {

    return (
        <div>
            <div className="w-[30vw] h-[30vw] border shadow-2xl rounded-2xl bg-[#343232] border-black">
                <div className="flex flex-row gap-2 justify-center mt-[1vw]">
                    {data.slice(0, 3).map((value, index) => (
                        <div
                            key={index}
                            className="boxes"
                            onClick={() => handleClick(index)}
                        >
                            {value && (
                                <img
                                    className="w-[7vw] h-[7vw] p-4"
                                    src={value === "O" ? circle_img : cross_png}
                                    alt={value}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-2 justify-center mt-[0.5vw]">
                    {data.slice(3, 6).map((value, index) => (
                        <div
                            key={index + 3}
                            className="boxes"
                            onClick={() => handleClick(index + 3)}
                        >
                            {value && (
                                <img
                                    className="w-[7vw] h-[7vw] p-4"
                                    src={value === "O" ? circle_img : cross_png}
                                    alt={value}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-2 justify-center mt-[0.5vw]">
                    {data.slice(6, 9).map((value, index) => (
                        <div
                            key={index + 6}
                            className="boxes"
                            onClick={() => handleClick(index + 6)}
                        >
                            {value && (
                                <img
                                    className="w-[7vw] h-[7vw] p-4"
                                    src={value === "O" ? circle_img : cross_png}
                                    alt={value}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-[7vw] p-3 rounded-lg text-xl bg-slate-400 mt-3 flex justify-center items-center" onClick={resetGame}>Reset</button>

        </div>
    );  
}

export default Board;
