export const ClickHandler = () => {
    const clickHandler = (event, count = 1) => {
        console.log("Button Clicked", count, event);
    };

    return (
        <div>
            <button onClick={(event) => clickHandler(event, 5)}>Click</button>
        </div>
    )
}