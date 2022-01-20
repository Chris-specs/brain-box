const Input = (props) => {
    return (
        <>
            <input
                {...props}
                autoComplete="on"
                className='py-2.5 text-sm dark:bg-black dark:text-white dark:placeholder:text-gray-600 border-gray-600 focus:border-gray-400 focus:ring-0 mt-1 rounded-md'
            />
        </>
    );
};

export default Input;
