const Button = (props) => {
    return (
        <>
            <button {...props} className="w-full h-full flex justify-center items-center bg-gray-900 text-sm text-white rounded-md" >{ props.children }</button>
        </>
    );
}
 
export default Button;