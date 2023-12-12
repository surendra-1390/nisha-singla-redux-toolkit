import { Outlet } from "react-router-dom";
const RootLayout = ()=>{
    return(
        <>
        <h2>Navigation</h2>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default RootLayout;