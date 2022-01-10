const InnerContainer = ({ children }) => {
    return (
        <>
            <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>{ children }</div>
        </>
    );
}
 
export default InnerContainer;