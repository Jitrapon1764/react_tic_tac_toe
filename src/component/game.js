import React,{useState} from "react";
import {calculateWinner} from "../Cal";
import Board from "./board";

const Game =() => {
    const [board,setBoard]=useState(Array(9.).fill(null));
    const [xIsnext,SetxIsnext] =useState(true);
    const winner = calculateWinner(board);

    const handleClick = i =>{
        const boardCopy=[...board]
        if(winner || boardCopy[i]) return;
        boardCopy[i]=xIsnext? 'X' : 'O' ;
        setBoard(boardCopy);
        SetxIsnext(!xIsnext);
    }

    const resetBoard =() => {
       setBoard(Array(9).fill(null));
    }

    return (
            <div className='form-center text-center'>
                <h1 className='header'>Tic Tac Toe</h1>
                <Board squares={board} onClick={handleClick}/>
                <div className='status'>
                    <h1>{!winner && board.includes(null) ? ('round '+ (xIsnext? 'X' :'O')): null}</h1>
                    <h1 className='status'>{winner ? ((!xIsnext? 'X' :'O') +' winner'):(board.includes(null)? null : 'Draw')}</h1>
                </div>
                {winner || !board.includes(null) ? <button className='buttonreset' onClick={resetBoard}>Reset Board</button> : null}
            </div>
        )
}

export default Game