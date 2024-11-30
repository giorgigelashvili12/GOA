import MenuBar from './UI/menu.jsx'

export default function Header() {
    return(
        <>
            <header className='flex justify-between sm:items-center bg-sky'>
                <h1>Home</h1>
                <MenuBar/>
            </header>
        </>
    )
}