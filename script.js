function createBoxes(rowNumber)
{
    const containerDiv = document.querySelector(".container");
    const total = (rowNumber*rowNumber);

    containerDiv.style.gridTemplateColumns = `repeat(${rowNumber}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${rowNumber}, 1fr)`;

    for (let i = 0; i < total; i++)
    {
        const div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })

        containerDiv.appendChild(div);
    }
}

function delGrid()
{
    const containerDiv = document.querySelector(".container");
    while(containerDiv.firstChild)
    {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function genGrid()
{
    let boxNumber = 0;
    while(boxNumber < 1 || boxNumber > 100)
    {
        boxNumber = prompt("Generate canvas", "(1-100)");
    }
    if(boxNumber !== "" || boxNumber !== null)
    {
        delGrid();
        createBoxes(Number(boxNumber));
    }
    else    alert("Faulty input");
}