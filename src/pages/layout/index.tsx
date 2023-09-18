import Grid from "@/components/layout/Grid";

export default function PaginaLayout() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-white">
            <div className="w-[90%] lg:w-4/5">
                <Grid cols={1}>
                    <div className="h-36 w-full bg-purple-500"></div>
                    <div className="h-36 w-full bg-purple-500"></div>
                    <div className="h-36 w-full bg-purple-500"></div>
                    <div className="h-36 w-full bg-purple-500"></div>
                </Grid>
            </div>
        </div>
    )
}