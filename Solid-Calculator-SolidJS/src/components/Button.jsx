function Button(props) {
    const handleClick = (e) => {
        let setter = props.setValue;
        if (props.command !== "=") setter(props.value() + props.command)
        else setter(eval(props.value()))
    };
    return (
        <button
            onClick={(e) => handleClick(e)}
            className="
        flex-1 h-12 
        cursor-pointer
        rounded-xl 
        bg-blue-600 
        text-white 
        text-lg font-semibold 
        shadow-md 
        hover:bg-blue-500 
        active:scale-95 
        transition-transform duration-150
      "
        >
            {props.command}
        </button>
    );
}

export default Button;
