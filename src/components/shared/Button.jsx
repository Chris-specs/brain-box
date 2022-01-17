const Button = (props) => {
    return (
        <>
            <button {...props} className="w-full h-full flex justify-center items-center bg-gray-900 dark:bg-white text-sm text-white dark:text-gray-900 rounded-md" >{ props.children }</button>
        </>
    );
}
 
export default Button;