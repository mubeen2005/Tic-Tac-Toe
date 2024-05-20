let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let con= document.querySelector(".msg-container");
let msg = document.querySelector("#msg-text");



let turn = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
        box.addEventListener("click",() =>{
            if(turn=== true)
                {
                    box.innerText ="O"
                    turn = false;
                    box.style.color = "#EE4E4E"
                }
                else{
                    box.innerText ="x"
                    turn = true;
                    box.style.color = "#65B741"
                }
                box.disabled = true;

                checkWinner();
        });
    });

    const disablebtn = () =>
        {
            for(let btn of boxes)
                {
                    btn.disabled = true;
                }
        }

        const enablebtn = () =>
            {
                for(let btn of boxes)
                    {
                        btn.disabled = false;
                        btn.innerText ="";
                    }
            }

    const showwinner = (winner) =>
        {
msg.innerText = `Congratulations Winner is ${winner}`;
con.classList.remove("msg-container")
disablebtn();
        }

    const checkWinner = () =>
        {
for( let pattern of winpattern)
    {
        pos1val=boxes[pattern[0]].innerText;
        pos2val=boxes[pattern[1]].innerText;
        pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !="")
            {
                if(pos1val === pos2val && pos2val === pos3val)
                    {
                        showwinner(pos1val);
                    }
            }
    }
        }

        const resetgame = () =>{
turn = true;
enablebtn();
con.classList.add("msg-container");

        }

        newbtn.addEventListener("click",resetgame);
        resetbtn.addEventListener("click",resetgame);