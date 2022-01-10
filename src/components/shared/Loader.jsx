const Loader = ({ className }) => {
    return (
        <>
            <div className={`${className ? className : 'w-6 h-6'} animate-spin border-3 border-gray-900 border-r-3 border-r-white rounded-full`} ></div>
        </>
    );
}
 
export default Loader;