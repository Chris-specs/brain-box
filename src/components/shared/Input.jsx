const Input = (props) => {
    return (
        <>
            <input
                {...props}
                autoComplete="on"
                className='py-2.5 text-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 rounded-md'
            />
        </>
    );
};

export default Input;
