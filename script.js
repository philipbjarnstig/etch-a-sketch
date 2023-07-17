function createBoxes(rowNumber)
{
    const containerDiv = document.querySelector(".container");
    const total = (rowNumber*rowNumber) + rowNumber;
    const mod = rowNumber + 1;

    for (let i = 1; i < total; i++)
    {
        const div = document.createElement("div");
        if (i % mod === 0)
            div.style.cssText = "height: 0; width: 100%";
        else
            div.style.cssText = "height: 25px; width: 25px";
        
        containerDiv.appendChild(div);
    }
}